"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cardVariants, textVariants, iconVariants, contactCardVariants } from "@/lib/animation/variants";
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
    <div className="flex flex-row gap-1 md:gap-4 md:h-[40%] min-h-[200px] md:min-h-0">
      <motion.div 
        className="w-[50%] bg-foreground text-background rounded-[20px] flex flex-col items-start justify-end p-3 md:p-6"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <motion.p 
          className="text-sm md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {aboutDescription}
        </motion.p>
      </motion.div>
      <motion.div 
        className="w-[50%] bg-card rounded-[20px] p-3 md:p-6 border-3 border-accent flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
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
        <div className="flex justify-between items-center mb-2 md:mb-4">
          <motion.div 
            className="flex flex-col"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-sm md:text-lg lg:text-xl font-light">Tem alguma</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.1] md:leading-tight">
              Dúvida?
            </h2>
          </motion.div>
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <ArrowUpRight className="text-brand-accent" size={24} aria-hidden="true" />
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <motion.button 
            className="bg-brand-accent text-brand-dark px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-brand-accent/90 transition-colors w-full md:w-auto text-sm md:text-base"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale comigo
          </motion.button>
        </div>
      </motion.div>
      
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}