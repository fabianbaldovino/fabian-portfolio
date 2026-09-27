import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Camera } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Fabian Baldovino",
  description: "Brand filmmaker e estrategista de narrativas visuais. Autor do Manifesto O Código Brasil. Especialista em construir percepção de alto valor em Porto Alegre, RS.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center pb-24 overflow-x-hidden selection:bg-brand-accent selection:text-brand-dark">
      {/* Navigation Bar Minimal */}
      <nav className="w-full max-w-6xl px-6 py-8 flex justify-between items-center relative z-20">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-foreground/60 hover:text-brand-accent transition-colors text-sm uppercase tracking-widest font-medium group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar à Casa
        </Link>
        <div className="text-brand-accent font-serif italic text-sm tracking-widest opacity-80">
          A Retaguarda Invisível
        </div>
      </nav>

      <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10 mt-8 lg:mt-12">
        
        {/* Left Column: Cover & Hero */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-start">
          <div className="w-full text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              <Camera size={14} /> Brand Filmmaker
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] mb-6 text-balance text-white">
              Fabian <br className="hidden lg:block" /><span className="text-brand-accent italic font-serif">Baldovino</span>
            </h1>
          </div>

          <div className="relative w-full max-w-[320px] lg:max-w-[400px] aspect-[3/4] mt-8 lg:mt-12 group mx-auto lg:mx-0 [perspective:1000px]">
            <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full group-hover:bg-brand-accent/30 transition-all duration-700" />
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[2deg]">
              <Image 
                src="/FOTOS/20260522_093422.jpg"
                alt="Fabian Baldovino"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Form Area */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center lg:pl-10">
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 border-l-2 border-brand-accent pl-6">
              "A câmera é só uma ferramenta; o que importa de verdade é a história que está sendo contada. Nós não fazemos vídeos para entreter o intelecto."
            </p>
            <p className="text-foreground/70 font-light mt-8 leading-relaxed text-balance">
              Autor do Manifesto <strong className="text-brand-accent font-medium tracking-wide">O Código Brasil</strong>, Fabian mergulhou na antropologia de Roberto DaMatta para entender o que move o consumidor brasileiro: não apenas a lógica, mas o instinto, o pertencimento e a confiança.
            </p>
            <p className="text-foreground/70 font-light mt-4 leading-relaxed text-balance">
              Essa visão humana moldou o jeito que ele trabalha. Cada cena é uma forma de conversar com o cliente de forma mais sincera. Ele não busca fazer vídeos meramente bonitos; a ideia é transmitir o real valor da sua marca, criando uma conexão visceral.
            </p>
            <p className="text-foreground/90 font-medium italic mt-8 leading-relaxed text-balance">
              "Quando você para de tentar convencer com argumentos lógicos e começa a se conectar com a vontade de pertencer, o preço deixa de ser uma barreira e a confiança toma o seu lugar."
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
          </div>

          {/* Golden CTA Card */}
          <div className="bg-card/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/5 relative overflow-hidden mt-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />
            
            <h3 className="text-xl font-medium tracking-wide mb-2">Quer ser o próximo?</h3>
            <p className="text-sm text-foreground/60 mb-8 font-light text-balance leading-relaxed">
              Atendemos um volume rigoroso e delimitado de projetos por semestre para garantir o padrão absoluto de direção e craft.
            </p>

            <a 
              href="https://wa.me/5551999654160"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-accent text-brand-dark py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center hover:brightness-110 hover:shadow-[0_0_30px_rgba(205,160,89,0.3)] active:scale-[0.98] transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
