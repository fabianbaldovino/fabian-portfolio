import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Método & Manifesto O Código Brasil | Fabian Baldovino",
  description: "O journal de Fabian Baldovino sobre brand filmmaking, neuromarketing e os códigos culturais que moldam o comportamento do consumidor brasileiro.",
  alternates: {
    canonical: "/o-codigo-brasil",
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br/o-codigo-brasil",
    title: "Método & Manifesto O Código Brasil | Fabian Baldovino",
      description: "O journal de Fabian Baldovino sobre brand filmmaking, neuromarketing e os códigos culturais que moldam o comportamento do consumidor brasileiro.",
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
    description: "O journal de Fabian Baldovino sobre brand filmmaking, neuromarketing e os códigos culturais que moldam o comportamento do consumidor brasileiro.",
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
