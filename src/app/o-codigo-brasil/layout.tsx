import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Método & Manifesto O Código Brasil | Fabian Baldovino",
  description: "O Código Brasil é o método de brand filmmaking de Fabian Baldovino: como o brasileiro decide confiar em uma marca e como transformar isso em filme.",
  alternates: {
    canonical: "/o-codigo-brasil",
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br/o-codigo-brasil",
    title: "Método & Manifesto O Código Brasil | Fabian Baldovino",
      description: "O Código Brasil é o método de brand filmmaking de Fabian Baldovino: como o brasileiro decide confiar em uma marca e como transformar isso em filme.",
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
    description: "O Código Brasil é o método de brand filmmaking de Fabian Baldovino: como o brasileiro decide confiar em uma marca e como transformar isso em filme.",
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
