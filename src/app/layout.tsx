import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConsoleProvider from "@/components/Console";
import { Analytics } from "@vercel/analytics/next"
import GlobalModals from "@/components/GlobalModals";

// Initialize Gilroy font
const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.woff',    
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabian.art.br"),
  verification: {
    google: "dcct_ikHBbu2wTcy06T_H_WGmTNjK4TKxz-x7c40-R8",
  },
  title: "Fabian Baldovino | Brand Filmmaking Porto Alegre",
  description: "Filmmaker de marcas em Porto Alegre. Narrativas visuais que blindam marcas e ativam percepção de alto valor. Conheça o portfólio.",
  keywords: [
    "brand filmmaking", "filmmaker porto alegre", "vídeo institucional porto alegre",
    "produtora audiovisual porto alegre", "filmagem institucional rs",
    "video marketing porto alegre", "produção de vídeo para empresas",
    "Fabian Baldovino", "audiovisual", "brand filmmaking brasil"
  ],
  authors: [{ name: "Fabian Baldovino" }],
  creator: "Fabian Baldovino",
  publisher: "Fabian Baldovino",
  alternates: {
    canonical: "https://www.fabian.art.br",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br",
    title: "Fabian Baldovino | Brand Filmmaking Porto Alegre",
    description: "Filmmaker de marcas em Porto Alegre. Narrativas visuais que blindam marcas e ativam percepção de alto valor. Conheça o portfólio.",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/FOTOS/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabian Baldovino — Brand Filmmaker Porto Alegre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian Baldovino | Brand Filmmaking Porto Alegre",
    description: "Filmmaker de marcas em Porto Alegre. Narrativas visuais que blindam marcas e ativam percepção de alto valor.",
    images: ["/FOTOS/og-image.jpg"],
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.fabian.art.br/#person",
      "name": "Fabian Baldovino",
      "jobTitle": "Brand Filmmaker & Diretor Audiovisual",
      "url": "https://www.fabian.art.br",
      "image": "https://www.fabian.art.br/FOTOS/20260522_093422.jpg",
      "sameAs": [
        "https://www.instagram.com/fabianbaldovino9/",
        "https://www.linkedin.com/in/fabianbaldovino/",
        "https://x.com/FPaciel"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Porto Alegre",
        "addressRegion": "RS",
        "addressCountry": "BR"
      },
      "description": "Brand Filmmaker, autor de O Código Brasil e estrategista de narrativas visuais baseado em Porto Alegre, RS. Especialista em construir percepção de alto valor através do audiovisual.",
      "knowsAbout": [
        "Brand Filmmaking",
        "Vídeo Institucional",
        "Narrativa de Marca",
        "Estratégia Visual",
        "Produção Audiovisual Publicitária",
        "Direção Cinematográfica"
      ]
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://www.fabian.art.br/#organization",
      "name": "Fabian Baldovino — Brand Filmmaking",
      "url": "https://www.fabian.art.br",
      "logo": "https://www.fabian.art.br/icon.svg",
      "image": "https://www.fabian.art.br/FOTOS/og-image.jpg",
      "description": "Produtora audiovisual e Brand Filmmaker em Porto Alegre, RS. Especialista em vídeos institucionais, filmes publicitários e narrativas que constroem marcas de alto valor.",
      "telephone": "+5551999654160",
      "priceRange": "$$$$",
      "currenciesAccepted": "BRL",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, Pix",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Porto Alegre",
        "addressRegion": "RS",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -30.0346,
        "longitude": -51.2177
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Porto Alegre"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Rio Grande do Sul"
        },
        {
          "@type": "Country",
          "name": "Brasil"
        }
      ],
      "founder": {
        "@id": "https://www.fabian.art.br/#person"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Produção Audiovisual e Brand Filmmaking",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Filmmaking",
              "description": "Filmes e narrativas visuais cinematográficas para construção de autoridade e valor de marca."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vídeo Institucional Corporativo",
              "description": "Produção de vídeos corporativos e institucionais de alto impacto para médias e grandes empresas."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Campanhas Audiovisuais Publicitárias",
              "description": "Campanhas em vídeo para lançamentos, posicionamento de mercado e tração em redes sociais e Meta Ads."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Séries e Documentários de Marca",
              "description": "Mini-séries e documentários que criam conexão emocional profunda e autoridade inquestionável."
            }
          }
        ]
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.fabian.art.br/#showreel",
      "name": "Showreel Fabian Baldovino — Brand Filmmaker Porto Alegre",
      "description": "Reel cinematográfico apresentando trabalhos de Brand Filmmaking e narrativas de alto impacto para marcas em Porto Alegre e Brasil.",
      "thumbnailUrl": [
        "https://www.fabian.art.br/FOTOS/20260522_120207.jpg",
        "https://www.fabian.art.br/FOTOS/og-image.jpg"
      ],
      "uploadDate": "2026-01-01T00:00:00-03:00",
      "contentUrl": "https://www.fabian.art.br/videos/REEL_2026_1.mp4",
      "embedUrl": "https://www.fabian.art.br",
      "creator": {
        "@id": "https://www.fabian.art.br/#person"
      }
    },
    {
      "@type": "Book",
      "@id": "https://www.fabian.art.br/#livro-codigo-brasil",
      "name": "O Código Brasil",
      "author": {
        "@id": "https://www.fabian.art.br/#person"
      },
      "description": "Literatura estratégica sobre valor percebido, psicanálise de consumo e engenharia de estímulos visuais no inconsciente do mercado brasileiro.",
      "inLanguage": "pt-BR",
      "image": "https://www.fabian.art.br/FOTOS/trabalhos/capa_ok.png"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fabian.art.br/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é Brand Filmmaking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand Filmmaking é a engenharia estratégica de vídeos institucionais e comerciais focada em construir autoridade e percepção de alto valor, unindo técnicas de cinema com psicanálise de consumo."
          }
        },
        {
          "@type": "Question",
          "name": "A produtora atende apenas em Porto Alegre, RS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nossa base de operação é em Porto Alegre - Rio Grande do Sul, mas atendemos projetos de posicionamento de marcas, corporativos e institucionais em todo o Brasil."
          }
        },
        {
          "@type": "Question",
          "name": "Como agendar uma consultoria audiovisual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Você pode entrar em contato diretamente pelo nosso WhatsApp na seção 'Dúvida?' do nosso site para agendarmos uma imersão na sua marca."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className={`${gilroy.variable} font-gilroy antialiased overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ConsoleProvider />
        {children}
        <GlobalModals />
        <Analytics />
      </body>
    </html>
  );
}
