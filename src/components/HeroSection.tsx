"use client";

import { motion } from "motion/react";
import { heroVariants, textVariants } from "@/lib/animation/variants";

export default function HeroSection() {
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
        <h1 className="flex flex-col gap-3 md:gap-5 max-w-[95%]">
          <span className="text-base md:text-lg lg:text-xl font-medium leading-snug text-brand-accent">
            Filmes de marca e institucionais para empresas de Porto Alegre e do RS.
          </span>
          <span className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.15rem] xl:text-[2.5rem] leading-[1.15] tracking-tight text-foreground text-balance">
            <span className="font-light italic text-foreground/80">Ninguém compra um produto pela</span> <span className="font-medium">razão;</span> a razão só existe para justificar o que o <span className="font-medium text-brand-accent">instinto</span> já decidiu em milésimos de segundo.
          </span>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 font-light leading-relaxed text-balance">
            <span className="italic opacity-90">Não produzimos vídeos para</span> <span className="font-medium text-foreground/90">vaidades passageiras;</span> construímos a <span className="font-medium text-brand-accent opacity-100">percepção de valor</span> que governa a decisão de compra.
          </span>
        </h1>
      </motion.div>
    </motion.div>
  );
}