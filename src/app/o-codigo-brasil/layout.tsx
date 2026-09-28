import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Código Brasil | Manifesto de Fabian Baldovino",
  description:
    "O manifesto que decifra o inconsciente do consumidor brasileiro. Baseado na antropologia de Roberto DaMatta e neuromarketing aplicado. Por Fabian Baldovino.",
  alternates: {
    canonical: "https://www.fabian.art.br/o-codigo-brasil",
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br/o-codigo-brasil",
    title: "O Código Brasil | Manifesto de Fabian Baldovino",
    description:
      "O manifesto que decifra o inconsciente do consumidor brasileiro. Baseado na antropologia de Roberto DaMatta e neuromarketing aplicado.",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/FOTOS/trabalhos/CAPA_OFICIAL.png",
        width: 1200,
        height: 630,
        alt: "O Código Brasil — Manifesto de Fabian Baldovino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "O Código Brasil | Manifesto de Fabian Baldovino",
    description:
      "O manifesto que decifra o inconsciente do consumidor brasileiro. Neuromarketing aplicado à realidade brasileira.",
    images: ["/FOTOS/trabalhos/CAPA_OFICIAL.png"],
  },
};

export default function OCodigoBrasilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
