"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cardVariants, textVariants, contactCardVariants } from "@/lib/animation/variants";
import ContactModal from "./ContactModal";
import { aboutDescription } from "@/lib/constants/siteContent";

export default function AboutContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            Construímos a <span className="italic font-light opacity-90">arquitetura de percepção</span> que blinda o valor da sua marca.
          </p>
          <p className="text-sm md:text-base lg:text-lg font-light text-background/75 leading-relaxed max-w-[95%] text-balance">
            Muito além da estética cinematográfica, orquestramos <strong className="font-medium text-background/95">narrativas magnéticas</strong> que consolidam seu negócio como a autoridade definitiva do seu setor.
          </p>
        </motion.div>
        <div className="sr-only">
          <h2>Sobre Fabian Baldovino — Brand Filmmaker e Estrategista Audiovisual</h2>
          <p>
            Brand filmmaker e estrategista de narrativas visuais baseado em Porto Alegre, RS. Fabian Baldovino é autor de O Código Brasil, manifesto que decodifica o inconsciente e o comportamento de consumo no mercado brasileiro, transformando a comunicação institucional em percepção de alto valor.
          </p>
          <p>
            Atua como a retaguarda invisível de marcas, garantindo execução técnica cinematográfica, direção de produção e narrativas magnéticas para clientes como Termolar, Quick House, Copelmi e Wedy Nutrition.
          </p>
        </div>
      </motion.div>
      <motion.div 
        className="w-full md:w-[50%] bg-card rounded-[20px] p-6 border-3 border-accent flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
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
        aria-label="Abrir formulário de contato"
      >
        <div className="flex justify-between items-start mb-6 lg:mb-8 gap-2">
          <motion.div 
            className="flex flex-col min-w-0"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-sm md:text-base mb-1">
              <span className="font-light italic text-foreground/80">Pronto para elevar a</span> <span className="font-medium text-brand-accent">percepção</span>
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-[1.1] break-words">
              <span className="font-light italic text-foreground/80">da sua</span> <span className="font-medium">marca?</span>
            </h2>
            <span className="sr-only">Solicite um diagnóstico audiovisual e inicie seu projeto de brand filmmaking em Porto Alegre</span>
          </motion.div>
        </div>
        
        <div className="flex flex-col w-full mt-auto">
          <motion.p 
            className="text-xs md:text-sm lg:text-[0.95rem] text-foreground/70 font-light leading-relaxed max-w-[95%]"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Operamos com dedicação imersiva a poucas marcas por ciclo, garantindo presença direta da direção em cada etapa. Inicie uma conversa estratégica para o seu próximo filme.
          </motion.p>
        </div>
      </motion.div>
      
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}