import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Fabian Baldovino — Produtora de Vídeo em Porto Alegre",
  description: "Projetos de vídeo e brand filmmaking: Termolar, Quick House, Copelmi e mais. Narrativas visuais que constroem marcas de alto valor em Porto Alegre, RS.",
  alternates: {
    canonical: "https://www.fabian.art.br/projetos",
  },
  openGraph: {
    title: "Projetos | Fabian Baldovino — Produtora de Vídeo em Porto Alegre",
    description: "Projetos de vídeo e brand filmmaking: Termolar, Quick House, Copelmi e mais. Conheça as narrativas visuais que constroem marcas de alto valor.",
    url: "https://www.fabian.art.br/projetos",
    type: "website",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Projetos — Fabian Baldovino Brand Filmmaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos | Fabian Baldovino — Produtora de Vídeo em Porto Alegre",
    description: "Projetos de vídeo e brand filmmaking: Termolar, Quick House, Copelmi e mais. Conheça as narrativas visuais que constroem marcas de alto valor.",
    images: ["/og-image.jpg"],
  },
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
