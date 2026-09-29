"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";

export default function OCodigoBrasilPage() {
  const [formData, setFormData] = useState({ name: "", company: "", role: "" });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.role) return;

    const message = `Olá Fabian. Sou ${formData.name}, ${formData.role} na empresa ${formData.company}. Tenho interesse em acessar o manifesto de elite 'O Código Brasil'.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5551999654160?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <Navbar />

      <main className="flex flex-col items-center pb-24 overflow-x-hidden selection:bg-brand-accent selection:text-brand-dark">
        <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10 mt-8 lg:mt-12">

          {/* Left Column: Cover & Hero */}
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

              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] mb-6 text-white" style={{ textWrap: "balance" } as React.CSSProperties}>
                Decifrando a Mente no Mercado Mais <br className="hidden lg:block" /><span className="text-brand-accent italic font-serif">Emocional</span> do Mundo.
              </h1>
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
                  src="/FOTOS/capa_o_codigo_brasil_fabian_baldovino.webp"
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
                <h2 className="text-xl font-medium tracking-wide">Gatekeeping Ativado</h2>
              </div>
              <p className="text-sm text-foreground/60 mb-8 font-light leading-relaxed" style={{ textWrap: "balance" } as React.CSSProperties}>
                Este manifesto não é para o grande público. Preencha seus dados para que Fabian envie o arquivo diretamente para você pelo WhatsApp.
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
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
}
