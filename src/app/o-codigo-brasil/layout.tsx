import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Método & Manifesto O Código Brasil | Fabian Baldovino",
  description:
    "Como Fabian Baldovino trabalha: direção com equipe própria, câmera cinema Sony e drone 4K — e o manifesto que decifra o consumidor brasileiro.",
  alternates: {
    canonical: "https://www.fabian.art.br/o-codigo-brasil",
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br/o-codigo-brasil",
    title: "Método & Manifesto O Código Brasil | Fabian Baldovino",
    description:
      "Como Fabian Baldovino trabalha: direção com equipe própria, câmera cinema Sony e drone 4K — e o manifesto que decifra o consumidor brasileiro.",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/FOTOS/capa_manifesto_o_codigo_brasil_fabian_baldovino.png",
        width: 1200,
        height: 630,
        alt: "O Código Brasil — Manifesto de Fabian Baldovino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Método & Manifesto O Código Brasil | Fabian Baldovino",
    description:
      "Direção com equipe própria, câmera cinema Sony e drone 4K, e o manifesto O Código Brasil: como o consumidor brasileiro decide confiar.",
    images: ["/FOTOS/capa_manifesto_o_codigo_brasil_fabian_baldovino.png"],
  },
};

export default function OCodigoBrasilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
