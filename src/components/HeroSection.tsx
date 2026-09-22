"use client";

import { motion } from "motion/react";
import { heroVariants, textVariants } from "@/lib/animation/variants";
import { heroContent } from "@/lib/constants/siteContent";

export default function HeroSection() {
  return (
    <motion.div 
      className="w-full lg:flex-1 bg-card rounded-[20px] flex flex-col items-start justify-end p-6 min-h-[250px] lg:min-h-0"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div 
        className="flex flex-col gap-2"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-xs uppercase tracking-widest text-brand-accent font-medium">
          Brand Filmmaking &amp; Audiovisual Estratégico · Porto Alegre
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.1] md:leading-none tracking-tight">
          <span className="block text-foreground pb-2">{heroContent.line1}</span>
          <span className="block text-foreground/80 font-medium text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
            {heroContent.line2Prefix} <span className="italic font-light text-foreground">{heroContent.line2Emphasis}</span>{heroContent.line2Suffix}
          </span>
          <span className="block text-foreground/80 font-medium text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] mt-1 md:mt-2">
            {heroContent.line3}
          </span>
        </h1>
      </motion.div>
    </motion.div>
  );
}