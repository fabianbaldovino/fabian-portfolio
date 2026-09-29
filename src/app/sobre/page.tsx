import Image from "next/image";
import Link from "next/link";
import { Camera, Film, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sobre | Fabian Baldovino — Brand Filmmaker Porto Alegre",
  description:
    "Brand filmmaker e estrategista de narrativas visuais. Autor do Manifesto O Código Brasil. Especialista em construir percepção de alto valor em Porto Alegre, RS.",
  alternates: {
    canonical: "https://www.fabian.art.br/sobre",
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br/sobre",
    title: "Sobre Fabian Baldovino | Brand Filmmaker Porto Alegre",
    description:
      "Brand filmmaker e estrategista de narrativas visuais. Autor do Manifesto O Código Brasil. Especialista em construir percepção de alto valor em Porto Alegre, RS.",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp",
        width: 1200,
        height: 630,
        alt: "Fabian Baldovino — Brand Filmmaker Porto Alegre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Fabian Baldovino | Brand Filmmaker Porto Alegre",
    description:
      "Brand filmmaker e estrategista de narrativas visuais. Autor do Manifesto O Código Brasil.",
    images: ["/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp"],
  },
};

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <Navbar />

      <main className="flex flex-col items-center pb-24 overflow-x-hidden selection:bg-brand-accent selection:text-brand-dark">
        <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10 mt-8 lg:mt-12">

          {/* Left Column: Cover & Hero */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-start">
            <div className="w-full text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                <Camera size={14} /> Brand Filmmaker
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] mb-3 text-white" style={{ textWrap: "balance" } as React.CSSProperties}>
                Fabian <br className="hidden lg:block" /><span className="text-brand-accent italic font-serif">Baldovino</span>
              </h1>

              {/* Credencial — prova social imediata */}
              <p className="text-sm text-foreground/50 uppercase tracking-widest font-light mb-6">
                +8 anos · +50 filmes · Porto Alegre, RS
              </p>
            </div>

            {/* Foto com controle de altura para mobile */}
            <div className="relative w-full max-w-[320px] lg:max-w-[400px] mt-8 lg:mt-12 group mx-auto lg:mx-0 [perspective:1000px]">
              <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full group-hover:bg-brand-accent/30 transition-all duration-700" />
              <div className="relative w-full max-h-[65vh] lg:max-h-none aspect-[3/4] rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[2deg]">
                <Image
                  src="/FOTOS/fabian_baldovino_moinhos_de_vento_porto_alegre_Rio_grande_do_sul.webp"
                  alt="Fabian Baldovino — Brand Filmmaker em Porto Alegre, RS"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 90vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center lg:pl-10">
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-foreground/70 font-light leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Autor do Manifesto <strong className="text-brand-accent font-medium tracking-wide">O Código Brasil</strong>, Fabian mergulhou na antropologia de Roberto DaMatta para entender o que move o consumidor brasileiro: não apenas a lógica, mas o instinto, o pertencimento e a confiança.
              </p>
              <p className="text-foreground/70 font-light mt-4 leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Essa visão humana moldou o jeito que ele trabalha. Cada cena é uma forma de conversar com o cliente de forma mais sincera. Ele não busca fazer vídeos meramente bonitos; a ideia é transmitir o real valor da sua marca, criando uma conexão visceral.
              </p>
              <p className="text-foreground/90 font-medium italic mt-8 leading-relaxed border-l-2 border-brand-accent pl-6" style={{ textWrap: "balance" } as React.CSSProperties}>
                &ldquo;Quando você para de tentar convencer com argumentos lógicos e começa a se conectar com a vontade de pertencer, o preço deixa de ser uma barreira e a confiança toma o seu lugar.&rdquo;
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-10">
                {["Estratégia Visual", "Narrativa de Marca", "Porto Alegre", "Neuromarketing"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-brand-accent/30 text-brand-accent font-medium bg-brand-accent/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links internos — antes do CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/projetos"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-brand-accent transition-colors group"
                >
                  <Film size={16} className="text-brand-accent" />
                  <span>Ver Projetos</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/o-codigo-brasil"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-brand-accent transition-colors group"
                >
                  <BookOpen size={16} className="text-brand-accent" />
                  <span>Acessar o Manifesto</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Golden CTA Card */}
            <div className="bg-card/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/5 relative overflow-hidden mt-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />

              <h2 className="text-xl font-medium tracking-wide mb-2">Quer ser o próximo?</h2>
              <p className="text-sm text-foreground/60 mb-8 font-light leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Atendemos um volume rigoroso e delimitado de projetos por semestre para garantir o padrão absoluto de direção e craft.
              </p>

              <a
                href="https://wa.me/5551999654160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-accent text-brand-dark py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center min-h-[48px] hover:brightness-110 hover:shadow-[0_0_30px_rgba(205,160,89,0.3)] active:scale-[0.98] transition-all"
                aria-label="Iniciar conversa no WhatsApp com Fabian Baldovino"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
