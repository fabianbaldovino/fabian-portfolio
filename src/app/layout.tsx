import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConsoleProvider from "@/components/Console";
import { Analytics } from "@vercel/analytics/next"
import GlobalModals from "@/components/GlobalModals";
import JsonLd from "@/components/JsonLd";

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
  description: "Brand Filmmaker em Porto Alegre. Une cinema e neuromarketing para criar brand films que revelam a verdade das marcas. Criador de O Código Brasil.",
  alternates: {
    canonical: "https://www.fabian.art.br",
  },
  authors: [{ name: "Fabian Baldovino" }],
  creator: "Fabian Baldovino",
  publisher: "Fabian Baldovino",
  // rotas internas declaram o próprio alternates/canonical em seus page/layout
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br",
    title: "Fabian Baldovino | Brand Filmmaking Porto Alegre",
    description: "Brand Filmmaker em Porto Alegre. Une cinema e neuromarketing para criar brand films que revelam a verdade das marcas. Criador de O Código Brasil.",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp",
        width: 1200,
        height: 630,
        alt: "Fabian Baldovino — Brand Filmmaker Porto Alegre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian Baldovino | Brand Filmmaking Porto Alegre",
    description: "Brand Filmmaker em Porto Alegre. Une cinema e neuromarketing para criar brand films que revelam a verdade das marcas. Criador de O Código Brasil.",
    images: ["/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>

        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Fabian Baldovino",
          "jobTitle": "Brand Filmmaker",
          "url": "https://www.fabian.art.br",
          "image": "https://www.fabian.art.br/og-image.jpg",
          "sameAs": [
            "https://www.instagram.com/fabianbaldovino9",
            "https://br.linkedin.com/in/fabianbaldovino",
            "https://www.youtube.com/@Volcan7"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Porto Alegre",
            "addressRegion": "RS",
            "addressCountry": "BR"
          },
          "knowsAbout": ["Brand Filmmaking", "Neuromarketing", "Documentário Corporativo", "Estratégia de Conteúdo Audiovisual"]
        }} />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Fabian Baldovino — Brand Filmmaker",
          "url": "https://www.fabian.art.br",
          "description": "Brand Filmmaker em Porto Alegre. Criador da metodologia O Código Brasil, une cinema e neuromarketing para produzir brand films que revelam a verdade das marcas.",
          "areaServed": {
            "@type": "Country",
            "name": "Brasil"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Porto Alegre",
            "addressRegion": "RS",
            "addressCountry": "BR"
          },
          "founder": {
            "@type": "Person",
            "name": "Fabian Baldovino"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Film" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Documentary" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Teaser Cinematográfico" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consultoria em Narrativa de Marca" } }
            ]
          }
        }} />
      </head>
      <body className={`${gilroy.variable} font-gilroy antialiased`}>
        <ConsoleProvider />
        {children}
        <GlobalModals />
        <Analytics />
      </body>
    </html>
  );
}
