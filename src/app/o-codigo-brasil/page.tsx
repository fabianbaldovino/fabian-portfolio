"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";

const etapas = [
  {
    titulo: "Imersão",
    desc: "Briefing focado na decisão que o filme precisa provocar no seu cliente — não no que a marca quer dizer.",
  },
  {
    titulo: "Narrativa",
    desc: "Roteiro, estrutura e referências visuais aprovadas antes de qualquer câmera ligar.",
  },
  {
    titulo: "Captação",
    desc: "Direção no set com equipe própria e parceiros de captação conforme o projeto.",
  },
  {
    titulo: "Pós-produção",
    desc: "Montagem, cor e som com padrão cinematográfico.",
  },
  {
    titulo: "Entrega",
    desc: "Arquivos finais prontos para cada canal — do site ao social — nos formatos definidos no briefing.",
  },
];

const estrutura = [
  "Câmera cinema Sony",
  "Drone 4K",
  "Equipe própria",
  "DRT 0014530/RS",
  "Porto Alegre + operações nacionais",
  "Operações internacionais na América Latina",
  "Espanhol nativo",
];

export default function OCodigoBrasilPage() {
  const [formData, setFormData] = useState({ name: "", company: "", role: "" });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.role) return;

    const message = `Olá Fabian. Sou ${formData.name}, ${formData.role} da ${formData.company}. Gostaria de solicitar o meu acesso gratuito ao manifesto 'O Código Brasil'.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5551999654160?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <Navbar />

      <main className="flex flex-col items-center pb-24 overflow-x-hidden selection:bg-brand-accent selection:text-brand-dark">

        {/* BLOCO 1 — MÉTODO: como operamos */}
        <section
          aria-label="Método de trabalho"
          className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 relative z-10 mt-8 lg:mt-12"
        >
          <div className="col-span-1 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                <Workflow size={14} /> Como Operamos
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] mb-6 text-white"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Do briefing à entrega, com{" "}
                <span className="text-brand-accent italic font-serif">equipe própria</span>.
              </h1>

              <p
                className="text-foreground/70 font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Direção de Fabian Baldovino com equipe própria e parceiros de captação conforme o projeto — de Porto Alegre para operações nacionais e internacionais na América Latina, com espanhol nativo no set. Câmera cinema{" "}
                <strong className="text-brand-accent font-medium">Sony</strong> e{" "}
                <strong className="text-brand-accent font-medium">drone 4K</strong>.
              </p>
            </motion.div>

            {/* Foto de set — prova visual do método */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative w-full max-w-[320px] lg:max-w-[380px] aspect-[3/4] mt-8 lg:mt-10 group mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full group-hover:bg-brand-accent/30 transition-all duration-700" />
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/FOTOS/fabian_baldovino_parque_moinhos_de_vento_porto_alegre_rs.webp"
                  alt="Fabian Baldovino na câmera cinema durante gravação — Porto Alegre, RS"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
              </div>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-6 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <ol className="flex flex-col gap-4 list-none p-0 m-0">
                {etapas.map((etapa, i) => (
                  <li
                    key={etapa.titulo}
                    className="bg-card/50 backdrop-blur-md rounded-[20px] border border-white/5 p-5 md:p-6 flex gap-4 items-start"
                  >
                    <span className="text-brand-accent text-sm font-bold uppercase tracking-widest pt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h2 className="text-lg font-medium mb-1 text-white">{etapa.titulo}</h2>
                      <p className="text-sm text-foreground/70 font-light leading-relaxed">{etapa.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium mb-3 ml-1">
                  Estrutura
                </p>
                <div className="flex flex-wrap gap-3">
                  {estrutura.map((item) => (
                    <span
                      key={item}
                      className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-brand-accent/30 text-brand-accent font-medium bg-brand-accent/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BLOCO 2 — MANIFESTO O CÓDIGO BRASIL */}
        <section
          aria-label="Manifesto O Código Brasil"
          className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10 mt-16 lg:mt-24"
        >

          {/* Left Column: Cover & Manifesto */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={14} /> Neuromarketing Estratégico
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium leading-[1.1] mb-6 text-white" style={{ textWrap: "balance" } as React.CSSProperties}>
                Decifrando a Mente no Mercado Mais <br className="hidden lg:block" /><span className="text-brand-accent italic font-serif">Emocional</span> do Mundo.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative w-full max-w-[320px] lg:max-w-[400px] aspect-[3/4] mt-8 lg:mt-12 group mx-auto lg:mx-0 [perspective:1000px]"
            >
              <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full group-hover:bg-brand-accent/30 transition-all duration-700" />
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[2deg]">
                <Image
                  src="/FOTOS/capa_manifesto_o_codigo_brasil_fabian_baldovino.png"
                  alt="Capa do Manifesto O Código Brasil — Fabian Baldovino"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy & Gatekeeping Form */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="prose prose-invert max-w-none mb-12"
            >
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 border-l-2 border-brand-accent pl-6">
                &ldquo;Esqueça tudo o que você aprendeu nos manuais de marketing importados. Campanhas lógicas e produtos tecnicamente superiores fracassam de forma miserável no Brasil todos os dias.&rdquo;
              </p>
              <p className="text-foreground/70 font-light mt-8 leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Para o nosso cérebro instintivo, o mundo é dividido em dois universos excludentes: a <strong className="text-foreground font-medium tracking-wide">RUA</strong> (o espaço impessoal, frio, a burocracia e a hostilidade) e a <strong className="text-brand-accent font-medium tracking-wide">CASA</strong> (o espaço quente, o afeto, a lealdade e a proteção).
              </p>
              <p className="text-foreground/70 font-light mt-4 leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                O mercado brasileiro não quer comprar o seu produto. Ele quer comprar a segurança de não estar sozinho na rua. O consumo no Brasil é, no seu nível mais profundo e inconsciente, uma tentativa desesperada de transformar a hostilidade da rua no conforto da casa.
              </p>
              <p className="text-foreground/90 font-medium italic mt-8 leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Neste documento, eu não vou te ensinar a vender um serviço. Vou te mostrar exatamente quais botões emocionais você precisa apertar para entender a mente do seu consumidor no mercado mais passional do mundo.
              </p>
            </motion.div>

            {/* Gatekeeping Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="bg-card/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />

              <div className="flex items-center gap-3 mb-6">
                <Lock size={20} className="text-brand-accent" />
                <h3 className="text-xl font-medium tracking-wide">Acesso ao Manifesto</h3>
              </div>
              <p className="text-sm text-foreground/60 mb-8 font-light leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Clientes e parceiros de Fabian Baldovino têm acesso <strong>gratuito</strong> a este manifesto. Preencha os dados abaixo para solicitar o arquivo direto pelo WhatsApp.
              </p>

              <form onSubmit={handleWhatsAppRedirect} className="flex flex-col gap-6" noValidate>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium ml-1">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all font-light"
                    placeholder="Como devemos chamá-lo?"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium ml-1">
                      Sua Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all font-light"
                      placeholder="Sua marca"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    {/* "Sua Posição" → "Seu Cargo" — mais claro e direto */}
                    <label htmlFor="role" className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium ml-1">
                      Seu Cargo
                    </label>
                    <input
                      type="text"
                      id="role"
                      required
                      autoComplete="organization-title"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all font-light"
                      placeholder="CEO, Diretor, etc."
                    />
                  </div>
                </div>

                {/* Aviso de privacidade — LGPD */}
                <p className="text-[11px] text-foreground/40 font-light leading-relaxed">
                  Seus dados são usados exclusivamente para o envio do manifesto via WhatsApp e não são armazenados ou compartilhados com terceiros.{" "}
                  <Link href="/sobre" className="underline underline-offset-2 hover:text-brand-accent/70 transition-colors">
                    Saiba mais sobre Fabian Baldovino.
                  </Link>
                </p>

                <button
                  type="submit"
                  className="mt-2 w-full bg-brand-accent text-brand-dark py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 min-h-[48px] hover:brightness-110 hover:shadow-[0_0_30px_rgba(205,160,89,0.3)] active:scale-[0.98] transition-all"
                  aria-label="Solicitar manifesto O Código Brasil via WhatsApp"
                >
                  Solicitar pelo WhatsApp <ArrowRight size={18} />
                </button>
              </form>

              <p className="mt-6 pt-6 border-t border-white/5 text-center text-xs text-foreground/50 font-light leading-relaxed">
                Não é cliente ainda? Leia os artigos e adquira o manifesto completo em{" "}
                <a
                  href="https://ocodigobrasil.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-brand-accent/80 hover:text-brand-accent transition-colors"
                >
                  ocodigobrasil.com.br
                </a>
                .
              </p>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
