import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConsoleProvider from "@/components/Console";
import { Analytics } from "@vercel/analytics/next"
import GlobalModals from "@/components/GlobalModals";
import { siteSchema } from "@/lib/schema/site";

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
  title: "Fabian Baldovino | Produtora de Vídeo e Brand Film em Porto Alegre",
  description: "Produtora de vídeo e brand filmmaking em Porto Alegre, RS. Vídeo institucional, brand film e documentário de marca com o método O Código Brasil, por Fabian Baldovino.",
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
    title: "Fabian Baldovino | Produtora de Vídeo e Brand Film em Porto Alegre",
    description: "Produtora de vídeo e brand filmmaking em Porto Alegre, RS. Vídeo institucional, brand film e documentário de marca com o método O Código Brasil, por Fabian Baldovino.",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabian Baldovino — produtora de vídeo e brand filmmaking em Porto Alegre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian Baldovino | Produtora de Vídeo e Brand Film em Porto Alegre",
    description: "Produtora de vídeo e brand filmmaking em Porto Alegre, RS. Vídeo institucional, brand film e documentário de marca com o método O Código Brasil, por Fabian Baldovino.",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
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
