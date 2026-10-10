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
    // Sem estas diretivas o Google assume "standard": miniatura pequena,
    // snippet encurtado e prévia de vídeo limitada. Para um filmmaker,
    // a imagem é o produto — ela precisa aparecer grande.
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
          name: "Fabian Baldovino",
          url: "https://www.fabian.art.br",
          jobTitle: "Brand Filmmaker",
          description: "Brand Filmmaker e estrategista de narrativas visuais baseado em Porto Alegre, RS. Autor de O Código Brasil.",
          image: "https://www.fabian.art.br/og-image.jpg",
          sameAs: [
            "https://www.linkedin.com/in/fabianbaldovino",
            "https://www.instagram.com/fabianbaldovino9",
            "https://www.youtube.com/@FabianBaldovino9",
            "https://www.threads.com/@fabianbaldovino9",
            "https://ocodigobrasil.com.br"
          ],
        }} />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "O Código Brasil",
          "url": "https://ocodigobrasil.com.br",
          "author": {
            "@type": "Person",
            "name": "Fabian Baldovino",
            "url": "https://www.fabian.art.br"
          }
        }} />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Fabian Baldovino — Brand Filmmaking",
          url: "https://www.fabian.art.br",
          telephone: "+5551999654160",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porto Alegre",
            addressRegion: "RS",
            addressCountry: "BR"
          },
          areaServed: ["Porto Alegre", "Rio Grande do Sul", "Brasil"],
          sameAs: [
            "https://www.linkedin.com/in/fabianbaldovino",
            "https://www.instagram.com/fabianbaldovino9",
            "https://www.youtube.com/@FabianBaldovino9"
          ],
          priceRange: "$$",
          description: "Brand Filmmaker em Porto Alegre. Une cinema e neuromarketing para criar brand films que revelam a verdade das marcas."
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
