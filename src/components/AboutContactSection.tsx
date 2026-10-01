"use client";

import { motion } from "motion/react";
import { cardVariants, textVariants, contactCardVariants } from "@/lib/animation/variants";
import { contactInfo } from "@/lib/constants/contact";

export default function AboutContactSection() {
  const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw.replace("+", "")}`;

  const handleContactClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-4 flex-1 min-h-0">
      <motion.div 
        className="w-full md:w-[50%] bg-foreground text-background rounded-[20px] flex flex-col items-start justify-between p-4 md:p-5 lg:p-6"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <motion.div 
          className="flex flex-col gap-4 lg:gap-6 w-full h-full justify-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.25rem] font-medium text-background leading-[1.15] tracking-tight text-balance">
            Seu cliente decide <span className="italic font-light opacity-90">em segundos</span> se <span className="font-medium">confia</span> em você.
          </p>
          <p className="text-sm md:text-base lg:text-lg font-light text-background/75 leading-relaxed max-w-[95%] text-balance">
            <strong className="font-medium text-background/95">+15 anos e +100 marcas</strong> de Porto Alegre — estratégia, captação e entrega com equipe própria.
          </p>
        </motion.div>
        <div className="sr-only">
          <h2>Sobre Fabian Baldovino — Brand Filmmaker e Estrategista Audiovisual</h2>
          <p>
            Brand filmmaker e estrategista de narrativas visuais baseado em Porto Alegre, RS. Fabian Baldovino é autor de O Código Brasil, manifesto que decodifica o inconsciente e o comportamento de consumo no mercado brasileiro, transformando a comunicação institucional em percepção de alto valor.
          </p>
          <p>
            Direção de Fabian Baldovino com equipe própria, execução técnica cinematográfica, direção de produção e narrativas para clientes como Termolar, Quick House, Copelmi e Wedy Nutrition.
          </p>
        </div>
      </motion.div>
      <motion.div 
        className="w-full md:w-[50%] bg-card rounded-[20px] p-5 lg:p-[clamp(1.1rem,2.5vh,1.5rem)] border-3 border-accent flex flex-col justify-between cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        variants={contactCardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="clicked"
        onClick={handleContactClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleContactClick();
          }
        }}
        aria-label="Conversar no WhatsApp com Fabian Baldovino"
      >
        <div className="flex justify-between items-start mb-4 gap-2">
          <motion.div 
            className="flex flex-col min-w-0"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[clamp(1.75rem,4.2vh,3rem)] leading-[1.1] break-words">
              <span className="block text-sm md:text-base mb-1 leading-normal font-light italic text-foreground/80">Pronto para elevar a <span className="font-medium text-brand-accent">percepção</span></span>
              <span className="block"><span className="font-light italic text-foreground/80">da sua</span> <span className="font-medium">marca?</span></span>
            </h2>
            <span className="sr-only">Solicite um diagnóstico audiovisual e inicie seu projeto de brand filmmaking em Porto Alegre</span>
          </motion.div>
        </div>
        
        <div className="flex flex-col w-full mt-auto">
          <motion.p 
            className="text-xs md:text-sm lg:text-[clamp(0.8rem,1.7vh,0.95rem)] text-foreground/70 font-light leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Atendo poucas marcas por vez para cuidar do seu filme de perto, do começo ao fim. Me conta o que você precisa — a gente conversa pelo WhatsApp.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}