"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Target, Eye, Compass, Clapperboard, Sparkles, Book } from "lucide-react";
import { motion } from "motion/react";
import { cardVariants, projectsVariants, projectItemVariants, socialVariants, textVariants, iconVariants } from "@/lib/animation/variants";
import { projects, Project } from "@/lib/constants/projects";
import { socials } from "@/lib/constants/socials";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Eye,
  Compass,
  Clapperboard,
  Book,
};

export default function ProjectsSection() {


  return (
    <div className="flex flex-col w-full lg:w-[30%] gap-4 md:justify-between lg:mb-6 overflow-x-hidden">
      <motion.div 
        className="bg-foreground text-background p-4 lg:p-3 xl:p-4 rounded-[20px] flex-grow flex flex-col min-h-[400px] md:min-h-0 overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="mb-2">
          <motion.h2
            className="text-lg md:text-xl xl:text-2xl font-medium"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Casos de Estudo
          </motion.h2>
          <motion.p
            className="text-xs md:text-sm text-background/70 mt-1 font-light"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span>
              <span className="font-light italic text-background/80">O status da sua</span> <span className="font-medium text-background">marca</span> <span className="font-light italic text-background/80">é o resultado de um conjunto de</span> <span className="font-medium text-background">ações intencionais</span> <span className="font-light italic text-background/80">que dialogam diretamente com o cliente que você deseja</span> <span className="font-medium text-background">conquistar.</span>
            </span>
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-col gap-3 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-1 h-full"
          variants={projectsVariants}
          initial="hidden"
          animate="visible"
        >
          {[projects[1], projects[2]].map((project) => (
            <Link key={project.name} href={`/especialidades/${project.slug}`} passHref className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded-[16px]">
              <motion.div 
                variants={projectItemVariants}
                className="flex flex-col gap-2 cursor-pointer relative"
              >
                <div className="w-full aspect-[16/9] lg:aspect-[16/10] rounded-[12px] lg:rounded-[16px] overflow-hidden relative block">
                  <Image
                    src={project.imgSrc}
                    alt={`${project.name} — Caso de Estudo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={project.name === projects[1].name}
                    quality={90}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-4 right-4 flex flex-col">
                    <span className="text-white font-medium text-lg lg:text-xl drop-shadow-md">{project.name}</span>
                    <span className="text-white/90 text-xs font-light drop-shadow-md">{project.shortDescription}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Obras Selecionadas Link Simplificado */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center pt-3 pb-1 shrink-0"
        >
          <hr className="border-0 h-[1px] bg-background/20 mb-2" />
          <Link 
            href="/projetos"
            className="w-full flex justify-between items-center min-h-[44px] py-2 group cursor-pointer text-left focus:outline-none active:opacity-70 transition-opacity"
            aria-label="Ir para Obras Selecionadas"
          >
            <span className="text-sm md:text-base font-medium group-hover:text-brand-dark/70 transition-colors uppercase tracking-wider">Obras Selecionadas</span>
            <span className="text-brand-dark group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* === SOCIALS === */}
      <motion.div 
        className="flex-none bg-card py-3 px-4 md:py-3.5 md:px-6 rounded-[20px] flex justify-evenly items-center"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href={socials.instagram}
          className="text-light hover:text-accent transition-all p-3 flex items-center justify-center"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap={{ scale: 0.88 }}
          aria-label="Instagram de Fabian Baldovino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} aria-hidden="true" />
        </motion.a>
        <motion.a
          href={socials.twitter}
          className="text-light hover:text-accent transition-all p-3 flex items-center justify-center"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap={{ scale: 0.88 }}
          aria-label="X (Twitter) de Fabian Baldovino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={20} aria-hidden="true" />
        </motion.a>
        <motion.a
          href={socials.linkedin}
          className="text-light hover:text-accent transition-all p-3 flex items-center justify-center"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap={{ scale: 0.88 }}
          aria-label="LinkedIn de Fabian Baldovino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} aria-hidden="true" />
        </motion.a>
      </motion.div>


    </div>
  );
}