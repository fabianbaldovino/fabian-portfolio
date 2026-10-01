"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { heroVariants, textVariants } from "@/lib/animation/variants";
import { contactInfo } from "@/lib/constants/contact";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw.replace("+", "")}`;

  return (
    <motion.div 
      className="w-full lg:flex-1 bg-card rounded-[20px] flex flex-col items-start justify-center p-6 md:p-8 xl:p-10 min-h-[250px] lg:min-h-0 relative overflow-hidden"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div 
        className="flex flex-col gap-5 lg:gap-6 max-w-3xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-3 md:gap-4 max-w-[95%]">
          <p className="text-base md:text-lg lg:text-xl font-medium leading-snug text-brand-accent">
            Filmes de marca e institucionais para empresas de Porto Alegre e do RS.
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.15rem] xl:text-[2.5rem] leading-[1.15] tracking-tight text-foreground text-balance">
            <span className="font-light italic text-foreground/80">Ninguém compra um produto pela</span> <span className="font-medium">razão;</span> a razão só existe para justificar o que o <span className="font-medium text-brand-accent">instinto</span> já decidiu em milésimos de segundo.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-foreground/70 font-light leading-relaxed text-balance">
            <span className="italic opacity-90">Não fazemos vídeo enfeite:</span> fazemos o <span className="font-medium text-brand-accent opacity-100">filme</span> que faz seu cliente <span className="font-medium text-foreground/90">confiar em você</span> e fechar negócio sem pedir desconto.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-dark px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider min-h-[44px] hover:brightness-110 active:scale-[0.98] transition-all"
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-foreground/85 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium min-h-[44px] hover:border-brand-accent/50 hover:text-brand-accent transition-all"
            >
              Ver projetos →
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}