"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, ChevronLeft } from "lucide-react";
import { motion } from "motion/react";

export default function OCodigoBrasilPage() {
  const [formData, setFormData] = useState({ name: "", company: "", role: "" });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.role) return;
    
    const message = `Olá Fabian. Sou ${formData.name}, ${formData.role} na empresa ${formData.company}. Tenho interesse em acessar o manifesto de elite 'O Código Brasil'.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5551999654160?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
          Documento Confidencial
        </div>
      </nav>

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
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] mb-6 text-balance text-white">
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
                src="/FOTOS/trabalhos/CAPA_OFICIAL.png"
                alt="Capa O Código Brasil - O Olho"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Copy & Gatekeeping */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center lg:pl-10">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="prose prose-invert max-w-none mb-12"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 border-l-2 border-brand-accent pl-6">
              "Esqueça tudo o que você aprendeu nos manuais de marketing importados. Campanhas lógicas e produtos tecnicamente superiores fracassam de forma miserável no Brasil todos os dias."
            </p>
            <p className="text-foreground/70 font-light mt-8 leading-relaxed text-balance">
              Para o nosso cérebro instintivo, o mundo é dividido em dois universos excludentes: a <strong className="text-foreground font-medium tracking-wide">RUA</strong> (o espaço impessoal, frio, a burocracia e a hostilidade) e a <strong className="text-brand-accent font-medium tracking-wide">CASA</strong> (o espaço quente, o afeto, a lealdade e a proteção).
            </p>
            <p className="text-foreground/70 font-light mt-4 leading-relaxed text-balance">
              O mercado brasileiro não quer comprar o seu produto. Ele quer comprar a segurança de não estar sozinho na rua. O consumo no Brasil é, no seu nível mais profundo e inconsciente, uma tentativa desesperada de transformar a hostilidade da rua no conforto da casa.
            </p>
            <p className="text-foreground/90 font-medium italic mt-8 leading-relaxed text-balance">
              Neste documento, eu não vou te ensinar a vender um serviço. Vou te mostrar exatamente quais botões emocionais você precisa apertar para dominar a mente do seu consumidor no mercado mais passional do mundo.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-card/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />
            
            <div className="flex items-center gap-3 mb-6">
              <Lock size={20} className="text-brand-accent" />
              <h3 className="text-xl font-medium tracking-wide">Gatekeeping Ativado</h3>
            </div>
            <p className="text-sm text-foreground/60 mb-8 font-light text-balance leading-relaxed">
              Este manifesto não é para o grande público. Preencha seus dados para receber o arquivo digital de alto valor diretamente no WhatsApp pessoal de Fabian Baldovino.
            </p>

            <form onSubmit={handleWhatsAppRedirect} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium ml-1">Seu Nome</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all font-light"
                  placeholder="Como devemos chamá-lo?"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium ml-1">Sua Empresa</label>
                  <input 
                    type="text" 
                    id="company"
                    required
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all font-light"
                    placeholder="Sua marca"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium ml-1">Sua Posição</label>
                  <input 
                    type="text" 
                    id="role"
                    required
                    value={formData.role}
                    onChange={e => setFormData({...formData, role: e.target.value})}
                    className="bg-background/50 border border-white/10 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all font-light"
                    placeholder="CEO, Diretor, etc."
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="mt-6 w-full bg-brand-accent text-brand-dark py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 hover:shadow-[0_0_30px_rgba(205,160,89,0.3)] active:scale-[0.98] transition-all"
              >
                Solicite o Manifesto de Elite <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
