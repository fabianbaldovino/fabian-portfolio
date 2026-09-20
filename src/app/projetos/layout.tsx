import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obras Selecionadas | Fabian Baldovino — Brand Filmmaker Porto Alegre",
  description: "Portfólio de Brand Filmmaking: Termolar, Quick House, Copelmi e mais. Narrativas visuais que constroem marcas de alto valor em Porto Alegre, RS.",
  alternates: {
    canonical: "https://www.fabian.art.br/projetos",
  },
  openGraph: {
    title: "Obras Selecionadas | Fabian Baldovino — Brand Filmmaker",
    description: "Portfólio de Brand Filmmaking: Termolar, Quick House, Copelmi e mais. Conheça as narrativas visuais que constroem marcas de alto valor.",
    url: "https://www.fabian.art.br/projetos",
    type: "website",
  },
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
