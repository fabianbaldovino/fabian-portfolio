import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConsoleProvider from "@/components/Console";
import { Analytics } from "@vercel/analytics/next"

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
  metadataBase: new URL("https://fabianbaldovino.com.br"),
  title: "Fabian Baldovino | Brand Filmmaking",
  description: "Brand Filmmaking — construindo sonhos em marcas magnéticas. Narrativas visuais que blindam marcas e ativam percepção de alto valor.",
  keywords: ["brand filmmaking", "vídeo institucional", "filmagem", "portfólio", "Porto Alegre", "Fabian Baldovino", "audiovisual"],
  authors: [{ name: "Fabian Baldovino" }],
  creator: "Fabian Baldovino",
  publisher: "Fabian Baldovino",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Fabian Baldovino | Brand Filmmaking",
    description: "Brand Filmmaking — construindo sonhos em marcas magnéticas. Narrativas visuais que blindam marcas e ativam percepção de alto valor.",
    siteName: "Fabian Baldovino",
    images: [
      {
        url: "/FOTOS/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabian Baldovino Brand Filmmaking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian Baldovino | Brand Filmmaking",
    description: "Brand Filmmaking — construindo sonhos em marcas magnéticas. Narrativas visuais que blindam marcas e ativam percepção de alto valor.",
    images: ["/FOTOS/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${gilroy.variable} font-gilroy antialiased`}>
        <ConsoleProvider />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
