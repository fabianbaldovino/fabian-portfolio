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
        className="flex flex-col"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1]">
          <span className="block">{heroContent.line1}</span>
          <span className="block">{heroContent.line2Prefix} <span className="italic font-light">{heroContent.line2Emphasis}</span>{heroContent.line2Suffix}</span>
          <span className="block">{heroContent.line3}</span>
        </h1>
      </motion.div>
    </motion.div>
  );
}