import Image from "next/image";
import Link from "next/link";
import { Camera, Film, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sobre | Fabian Baldovino — Brand Filmmaker Porto Alegre",
  description: "Conheça Fabian Baldovino — Brand Filmmaker porto-alegrense criador da metodologia O Código Brasil. Cinema e antropologia a serviço da verdade das marcas.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br/sobre",
    title: "Sobre Fabian Baldovino | Brand Filmmaker Porto Alegre",
    description: "Conheça Fabian Baldovino — Brand Filmmaker porto-alegrense criador da metodologia O Código Brasil. Cinema e antropologia a serviço da verdade das marcas.",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabian Baldovino — Brand Filmmaker Porto Alegre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Fabian Baldovino | Brand Filmmaker Porto Alegre",
    description: "Conheça Fabian Baldovino — Brand Filmmaker porto-alegrense criador da metodologia O Código Brasil. Cinema e antropologia a serviço da verdade das marcas.",
    images: ["/og-image.jpg"],
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
              <p className="text-sm text-foreground/70 uppercase tracking-widest font-light mb-3">
                +15 anos · +100 marcas · Porto Alegre, RS
              </p>

              {/* Cobertura da imprensa — selos de confiança (veículos que noticiaram, não clientes) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mb-6">
                <span className="w-full text-center lg:text-left text-[10px] text-foreground/40 uppercase tracking-widest font-light">
                  Na imprensa
                </span>
                {[
                  { src: "/marcas/RBS_TV.png", alt: "RBS TV" },
                  { src: "/marcas/zero_hora.png", alt: "Zero Hora" },
                  { src: "/marcas/correio_do_povo_novo.png", alt: "Correio do Povo" },
                ].map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={`${logo.alt} — veículo que noticiou o trabalho de Fabian Baldovino`}
                    width={120}
                    height={32}
                    className="h-5 w-auto object-contain opacity-60 brightness-0 invert"
                  />
                ))}
              </div>
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
                Sou Fabian Baldovino, filmmaker de marcas em Porto Alegre. Dirijo com uma equipe própria e parceiros de captação desde <strong className="text-brand-accent">2011</strong> — já são <strong className="text-brand-accent">+100 marcas e instituições</strong>. Comecei em <strong className="text-brand-accent">Ciências Sociais</strong>, fazendo documentário e oficina de cinema em escolas públicas da rede municipal, e hoje unimos técnica de cinema e o entendimento da entropologia do consumo na realização das nossas obras.
              </p>
              <p className="text-foreground/70 font-light mt-6 leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Escrevi o Manifesto <strong className="text-brand-accent font-medium tracking-wide">O Código Brasil</strong> para entender uma coisa simples: por que o brasileiro confia — ou não — em uma marca. A resposta é que a pessoa decide sentindo primeiro, e só depois raciocina.
              </p>
              <p className="text-foreground/70 font-light mt-4 leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Essa forma de ver as pessoas mudou o meu jeito de trabalhar. Cada cena é uma forma de conversar de verdade com quem vai assistir. Não quero fazer só um vídeo bonito: quero mostrar o valor real da sua marca e aproximar quem assiste dela.
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
                  href="https://ocodigobrasil.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-brand-accent transition-colors group"
                >
                  <BookOpen size={16} className="text-brand-accent" />
                  <span>O Código Brasil, manifesto de Fabian Baldovino</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Golden CTA Card */}
            <div className="bg-card/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/5 relative overflow-hidden mt-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />

              <h2 className="text-xl font-medium tracking-wide mb-2">Vamos conversar sobre a sua marca?</h2>
              <p className="text-sm text-foreground/60 mb-8 font-light leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Atendo poucas marcas por vez para cuidar do seu filme de perto, do começo ao fim.
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

          {/* Prova visual — acervo original das oficinas de cinema em escolas (2011) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {[
              {
                src: "/FOTOS/educacao/cinema.jpg",
                alt: "Fabian Baldovino apresentando o projeto Curta nas Escolas",
                caption: "Curta nas Escolas — 8 curtas com 450 crianças",
              },
              {
                src: "/FOTOS/educacao/fabian_baldovino_CECE.jpg",
                alt: "Fabian Baldovino falando sobre o projeto de curtas nas escolas de Porto Alegre",
                caption: "1ª Mostra de Curtas na Câmara Municipal",
              },
              {
                src: "/FOTOS/educacao/educa_cinema.jpg",
                alt: "Oficina de cinema com alunos da rede pública de Porto Alegre",
                caption: "2011 · Educação pública em Porto Alegre",
              },
              {
                src: "/FOTOS/educacao/fabian_baldovino_CECE_2.jpg",
                alt: "Fabian Baldovino apresentando o projeto Curta nas Escolas na Cece da Câmara Municipal",
                caption: "Apresentação na Cece — Câmara Municipal (2011)",
              },
              {
                src: "/FOTOS/educacao/prefeitura_porto_alegre.jpg",
                alt: "Registro do projeto de curtas em escolas com a Prefeitura de Porto Alegre",
                caption: "Prefeitura de Porto Alegre — educação e cultura",
              },
            ].map((foto) => (
              <figure key={foto.src} className="relative m-0 aspect-[4/3] rounded-[20px] overflow-hidden border border-white/5 bg-card">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-[11px] font-light text-foreground/85 leading-snug">
                  {foto.caption}
                </figcaption>
              </figure>
            ))}
          </div>

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
                ano: "2011 · Ofício CECE",
                titulo: "Chamado da Câmara para debater",
                desc: "Ofício Circular nº 101/2011-Circ (03/10/2011) da Comissão de Educação, Cultura, Esporte e Juventude: convite para a reunião de 11/10, às 14h30, sala 303 — pauta: apresentação do projeto Curta nas Escolas. Assinado pelo ver. Professor Garcia, presidente da CECE.",
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
