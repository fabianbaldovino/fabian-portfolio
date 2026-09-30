import Image from "next/image";
import Link from "next/link";
import { Camera, Film, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sobre | Fabian Baldovino — Brand Filmmaker Porto Alegre",
  description:
    "Fabian Baldovino: filmmaker de marcas desde 2011, de Ciências Sociais a +100 marcas e instituições, com equipe própria e DRT. Autor do manifesto O Código Brasil. Porto Alegre, RS.",
  alternates: {
    canonical: "https://www.fabian.art.br/sobre",
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br/sobre",
    title: "Sobre Fabian Baldovino | Brand Filmmaker Porto Alegre",
    description:
      "Fabian Baldovino: filmmaker de marcas desde 2011, de Ciências Sociais a +100 marcas e instituições, com equipe própria e DRT. Autor do manifesto O Código Brasil. Porto Alegre, RS.",
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
      "Filmmaker de marcas desde 2011, +100 marcas, equipe própria e DRT. Autor do manifesto O Código Brasil.",
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
              <p className="text-sm text-foreground/70 uppercase tracking-widest font-light mb-6">
                +15 anos · +100 marcas · Porto Alegre, RS
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
              <p className="text-foreground/90 font-medium leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Sou Fabian Baldovino, filmmaker de marcas em Porto Alegre. Dirijo com uma equipe própria e parceiros de captação desde <strong className="text-brand-accent">2011</strong> — já são <strong className="text-brand-accent">+100 marcas e instituições</strong>. Comecei em <strong className="text-brand-accent">Ciências Sociais</strong>, fazendo documentário e oficina de cinema em escolas públicas da rede municipal, e hoje unimos técnica de cinema e o entendimento de como o brasileiro decide confiar.
              </p>
              <p className="text-foreground/70 font-light mt-6 leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
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
                  <span>Conhecer o Método</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Golden CTA Card */}
            <div className="bg-card/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/5 relative overflow-hidden mt-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />

              <h2 className="text-xl font-medium tracking-wide mb-2">Vamos conversar sobre a sua marca?</h2>
              <p className="text-sm text-foreground/60 mb-8 font-light leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Operamos com dedicação imersiva a poucas marcas por ciclo, garantindo presença direta da direção em cada etapa.
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

        {/* Trajetória — marcos verificados (§10.2 da auditoria) */}
        <section aria-label="Trajetória" className="w-full max-w-6xl px-6 mt-16 lg:mt-24">
          <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-3">
            Trajetória
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-2 text-white">
            De oficina de cinema em escolas a +100 marcas
          </h2>
          <p className="text-foreground/60 font-light mb-8 max-w-2xl leading-relaxed">
            2011 — Ciências Sociais, documentário e educação pública: o começo que explica o método.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
            {[
              {
                ano: "2011 · Origem",
                titulo: "Ciências Sociais e o primeiro documentário",
                desc: "O Aquartelamento da Democracia no Brasil — uma jornada de 1920 até os dias atuais, na graduação em Ciências Sociais.",
              },
              {
                ano: "2011 · Educação",
                titulo: "Curta nas Escolas",
                desc: "Como educador social na rede municipal: 8 curtas com 450 crianças na Escola Ana Íris do Amaral e a 1ª Mostra de Curtas na Câmara Municipal de Porto Alegre.",
              },
              {
                ano: "2011 · UFRGS",
                titulo: "Palestra na Faculdade de Educação",
                desc: "Palestrante do curso de Especialização em Educação em Saúde Mental Coletiva — 2h na UFRGS.",
              },
              {
                ano: "2011 · Imprensa",
                titulo: "Cobertura dos curtas",
                desc: "Jornal da Capital, Correio do Povo e Prefeitura de Porto Alegre noticiaram a mostra dos alunos das escolas municipais.",
              },
              {
                ano: "Hoje",
                titulo: "+100 marcas e DRT nacional",
                desc: "Direção com equipe própria para +100 marcas e instituições, com DRT 0014530/RS — diretor de fotografia e produtor executivo.",
              },
            ].map((marco) => (
              <li key={marco.titulo} className="bg-card rounded-[20px] border border-white/5 p-6 hover:border-brand-accent/30 transition-colors">
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block mb-2">
                  {marco.ano}
                </span>
                <h3 className="text-lg font-medium mb-1 text-white">{marco.titulo}</h3>
                <p className="text-sm text-foreground/70 font-light leading-relaxed">{marco.desc}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
