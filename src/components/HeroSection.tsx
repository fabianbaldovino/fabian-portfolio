"use client";

import { motion } from "motion/react";
import { heroVariants, textVariants } from "@/lib/animation/variants";
import { heroContent } from "@/lib/constants/siteContent";

export default function HeroSection() {
  return (
    <motion.div 
      className="w-full lg:flex-1 bg-card rounded-[20px] flex flex-col items-start justify-end p-6 md:p-8 xl:p-10 min-h-[250px] lg:min-h-0"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div 
        className="flex flex-col gap-3 md:gap-4 max-w-3xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-xs uppercase tracking-widest text-brand-accent font-medium">
          Brand Filmmaking &amp; Audiovisual Estratégico · Porto Alegre
        </span>
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-[1.65rem] xl:text-[2rem] font-medium leading-[1.25] tracking-tight text-foreground flex flex-col gap-2.5 md:gap-3.5">
          <span>
            {heroContent.statement}
          </span>
          <span className="text-foreground/75 font-normal text-base sm:text-lg md:text-xl lg:text-[1.3rem] xl:text-[1.55rem] leading-relaxed">
            {heroContent.conclusion}
          </span>
        </h1>
      </motion.div>
    </motion.div>
  );
}