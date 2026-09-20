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
      path: '../../public/fonts/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.ttf',    
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Bold.ttf',
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
  "@type": "Person",
  "name": "Fabian Baldovino",
  "jobTitle": "Brand Filmmaker",
  "url": "https://www.fabian.art.br",
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
  "description": "Brand Filmmaker e estrategista de narrativas visuais baseado em Porto Alegre, RS. Especialista em construir percepção de alto valor através do audiovisual.",
  "knowsAbout": ["Brand Filmmaking", "Vídeo Institucional", "Narrativa de Marca", "Estratégia Visual"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${gilroy.variable} font-gilroy antialiased`}>
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
