"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Target, Eye, Compass, Clapperboard, Sparkles, Book } from "lucide-react";
import { motion } from "motion/react";
import { cardVariants, projectsVariants, projectItemVariants, socialVariants, textVariants, iconVariants } from "@/lib/animation/variants";
import { projects, Project } from "@/lib/constants/projects";
import { socials } from "@/lib/constants/socials";
import ProjectModal from "./ProjectModal";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Eye,
  Compass,
  Clapperboard,
  Book,
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col w-full lg:w-[30%] gap-4 md:justify-between lg:mb-6 overflow-x-hidden">
      {/* === CARD 3: Projects List === */}
      <motion.div 
        className="bg-foreground text-background p-4 md:p-6 rounded-[20px] flex-grow md:flex-wrap flex flex-col min-h-[400px] md:min-h-0"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="flex justify-between items-center mb-4">
          <motion.h2 
            className="text-xl md:text-2xl font-medium"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {projects[0].name}
          </motion.h2>
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <ArrowUpRight className="text-brand-accent" size={24} aria-hidden="true" />
          </motion.div>
        </div>
        <motion.div 
          className="h-[300px] md:h-[50%] rounded-[20px] overflow-hidden mb-4 cursor-pointer group"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          onClick={() => handleProjectClick(projects[0])}
        >
          <Image
            src={projects[0].imgSrc}
            alt={`${projects[0].name} Project Showcase`}
            width={1080}
            height={1920}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={100}
            className="w-full h-full object-cover object-[center_30%] md:object-[center_60%] group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
        <motion.div 
          className="overflow-y-auto lg:flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          variants={projectsVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.slice(1).map((project) => (
            <motion.div 
              key={project.name}
              variants={projectItemVariants}
              whileHover="hover"
            >
              <hr className="border-0 h-[1px] bg-accent" />
              <button 
                className="w-full flex justify-between items-center group cursor-pointer p-2 md:p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
                onClick={() => handleProjectClick(project)}
                aria-label={`Ver detalhes de ${project.name}`}
              >
                <div className="flex flex-col gap-1 pr-2">
                  <span className="text-lg md:text-xl group-hover:text-brand-accent transition-colors">{project.name}</span>
                  {project.shortDescription && (
                    <span className="text-xs md:text-sm text-foreground/60">{project.shortDescription}</span>
                  )}
                </div>
                <div className="flex items-center flex-shrink-0">
                  <div className="overflow-hidden rounded-lg w-[80px] h-[48px] md:w-[120px] md:h-[72px]">
                    <Image src={project.imgSrc} alt={project.name} width={120} height={72} loading="lazy" quality={80} sizes="(max-width: 768px) 80px, 120px" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
          
          {/* Obras Selecionadas List Item */}
          <motion.div 
            variants={projectItemVariants}
            whileHover="hover"
          >
            <hr className="border-0 h-[1px] bg-accent" />
            <Link 
              href="/projetos"
              className="flex justify-between items-center group cursor-pointer p-2 md:p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
              aria-label="Ir para Obras Selecionadas"
            >
              <span className="text-lg md:text-xl group-hover:text-brand-accent transition-colors">Obras Selecionadas</span>
              <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full border border-background/20 group-hover:border-brand-accent group-hover:bg-brand-accent/5 transition-all duration-300">
                <Sparkles size={20} strokeWidth={1.5} className="text-background/60 group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* === SOCIALS === */}
      <motion.div 
        className="flex-none bg-card p-4 md:p-6 rounded-[20px] flex justify-evenly items-center"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a 
          href={socials.instagram} 
          className="text-light hover:text-accent transition-colors"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Instagram size={20} />
        </motion.a>
        <motion.a 
          href={socials.twitter} 
          className="text-light hover:text-accent transition-colors"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Twitter size={20} />
        </motion.a>
        <motion.a 
          href={socials.linkedin} 
          className="text-light hover:text-accent transition-colors"
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Linkedin size={20} />
        </motion.a>
      </motion.div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        project={selectedProject} 
      />
    </div>
  );
}