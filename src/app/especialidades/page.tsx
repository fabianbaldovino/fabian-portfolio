import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { especialidades } from "@/lib/constants/especialidades";
import { LOCAL_PAGE_PATH } from "@/lib/constants/business";

export const metadata: Metadata = {
  title: "Especialidades — Brand Film, Documentary e Novela Vertical | Fabian Baldovino",
  description:
    "Brand film, brand documentary, teaser cinematográfico e novela vertical. Quatro formatos de narrativa audiovisual para marcas, por Fabian Baldovino em Porto Alegre, RS.",
  alternates: {
    canonical: "https://www.fabian.art.br/especialidades",
  },
  openGraph: {
    title: "Especialidades | Fabian Baldovino",
    description:
      "Brand film, brand documentary, teaser cinematográfico e novela vertical. Quatro formatos de narrativa audiovisual para marcas.",
    url: "https://www.fabian.art.br/especialidades",
    type: "website",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
  },
};

export default function EspecialidadesHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.fabian.art.br/especialidades#page",
        name: "Especialidades",
        description:
          "Formatos de narrativa audiovisual para marcas: brand film, brand documentary, teaser cinematográfico e novela vertical.",
        url: "https://www.fabian.art.br/especialidades",
      },
      {
        "@type": "ItemList",
        itemListElement: especialidades.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: e.name,
          item: `https://www.fabian.art.br/especialidades/${e.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: "https://www.fabian.art.br",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Especialidades",
            item: "https://www.fabian.art.br/especialidades",
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 flex flex-col gap-6 max-w-7xl mx-auto w-full px-2 sm:px-4">
        <div className="bg-card rounded-[20px] p-6 md:p-12 border border-white/5">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/50 mb-6"
          >
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-accent font-medium">Especialidades</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">
            Que tipo de filme sua empresa precisa?
          </h1>
          <p className="text-base md:text-lg font-light text-foreground/80 max-w-2xl leading-relaxed">
            São quatro formatos, cada um para um objetivo: apresentar a empresa, contar
            sua história, vender com emoção ou falar com quem está no celular. A escolha
            depende de quem precisa ser convencido, de quanto tempo você tem para isso
            e de onde o filme vai ser visto.
          </p>
          <p className="text-sm font-light text-foreground/70 max-w-2xl mt-4">
            Todos os formatos são produzidos a partir de Porto Alegre.{" "}
            <Link href={LOCAL_PAGE_PATH} className="text-brand-accent underline underline-offset-4 hover:text-foreground transition-colors">
              Conheça a produtora de vídeo em Porto Alegre
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {especialidades.map((item) => (
            <Link
              key={item.slug}
              href={`/especialidades/${item.slug}`}
              className="group block h-full"
            >
              <article className="border border-white/5 rounded-[20px] overflow-hidden bg-card h-full flex flex-col transition-transform hover:-translate-y-1">
                <div className="relative w-full h-56 bg-background/40 overflow-hidden">
                  <Image
                    src={item.imgSrc}
                    alt={`${item.name} — ${item.tagline}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow gap-3">
                  <h2 className="text-2xl md:text-3xl font-medium group-hover:text-brand-accent transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold">
                    {item.tagline}
                  </p>
                  <p className="text-foreground/70 text-sm md:text-base font-light leading-relaxed">
                    {item.intro}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer className="mt-8" />
    </div>
  );
}
