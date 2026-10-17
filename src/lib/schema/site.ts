/**
 * Grafo de dados estruturados do site inteiro (injetado no layout raiz).
 *
 * Um único @graph com IDs estáveis liga Pessoa ↔ Negócio ↔ Site, para o
 * Google entender que "Fabian Baldovino" (pessoa), o negócio do Perfil da
 * Empresa e www.fabian.art.br são a mesma entidade.
 *
 * Não declarar aggregateRating/review aqui: o Google proíbe avaliações
 * autodeclaradas de LocalBusiness no próprio site.
 */
import { business, LOCAL_PAGE_URL, SCHEMA_IDS } from "@/lib/constants/business";
import { especialidades } from "@/lib/constants/especialidades";

const socialProfiles = [
  "https://www.linkedin.com/in/fabianbaldovino",
  "https://www.instagram.com/fabianbaldovino9",
  "https://www.youtube.com/@FabianBaldovino9",
  "https://www.threads.com/@fabianbaldovino9",
];

const servicos = especialidades.map((e) => ({
  name: e.name,
  url: `${business.url}/especialidades/${e.slug}`,
  description: e.metaDescription,
}));

const areaServed = [
  ...business.citiesServed.map((name) => ({ "@type": "City", name })),
  { "@type": "AdministrativeArea", name: "Região Metropolitana de Porto Alegre" },
  { "@type": "AdministrativeArea", name: "Serra Gaúcha" },
  { "@type": "State", name: "Rio Grande do Sul" },
  { "@type": "Country", name: "Brasil" },
];

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": SCHEMA_IDS.website,
      url: business.url,
      name: "Fabian Baldovino",
      inLanguage: "pt-BR",
      publisher: { "@id": SCHEMA_IDS.business },
    },
    {
      "@type": "Person",
      "@id": SCHEMA_IDS.person,
      name: "Fabian Baldovino",
      url: business.url,
      jobTitle: "Brand Filmmaker",
      description:
        "Brand filmmaker e diretor de filmes de marca em Porto Alegre, RS. Criador do método O Código Brasil.",
      image: `${business.url}/og-image.jpg`,
      worksFor: { "@id": SCHEMA_IDS.business },
      homeLocation: { "@type": "City", name: "Porto Alegre" },
      sameAs: [...socialProfiles, "https://ocodigobrasil.com.br"],
    },
    {
      "@type": "ProfessionalService",
      "@id": SCHEMA_IDS.business,
      name: business.name,
      alternateName: business.alternateName,
      description:
        "Produtora de vídeo e brand filmmaking em Porto Alegre, RS. Vídeo institucional, brand film, documentário de marca, teaser cinematográfico e novela vertical para empresas.",
      url: business.url,
      mainEntityOfPage: LOCAL_PAGE_URL,
      image: `${business.url}/og-image.jpg`,
      logo: `${business.url}/icon.svg`,
      telephone: business.phoneRaw,
      email: business.email,
      foundingDate: business.foundingYear,
      founder: { "@id": SCHEMA_IDS.person },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: business.city,
        addressRegion: business.region,
        addressCountry: business.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      areaServed,
      knowsAbout: [
        "Produção de vídeo",
        "Produção audiovisual",
        "Vídeo institucional",
        "Brand film",
        "Documentário de marca",
        "Vídeo para redes sociais",
        "Neuromarketing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Produção audiovisual para empresas",
        itemListElement: servicos.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            url: s.url,
            description: s.description,
            areaServed,
            provider: { "@id": SCHEMA_IDS.business },
          },
        })),
      },
      ...(business.googleMapsUrl ? { hasMap: business.googleMapsUrl } : {}),
      ...(business.openingHours.length ? { openingHours: business.openingHours } : {}),
      sameAs: [...socialProfiles, ...(business.googleMapsUrl ? [business.googleMapsUrl] : [])],
    },
    {
      "@type": "CreativeWork",
      name: "O Código Brasil",
      url: "https://ocodigobrasil.com.br",
      author: { "@id": SCHEMA_IDS.person },
    },
  ],
};
