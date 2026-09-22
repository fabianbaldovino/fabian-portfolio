"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Target, Eye, Compass, Clapperboard, Sparkles, Book } from "lucide-react";
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
        className="bg-foreground text-background p-4 lg:p-4 xl:p-5 rounded-[20px] flex-grow flex flex-col min-h-[400px] md:min-h-0 overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="mb-2.5">
          <h2 className="sr-only">Especialidades e Portfólio de Brand Filmmaking em Porto Alegre</h2>
          <motion.h3 
            className="text-lg md:text-xl xl:text-2xl font-medium"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {projects[0].name}
          </motion.h3>
        </div>
        <motion.div 
          className="h-[180px] lg:h-[26%] xl:h-[28%] min-h-[140px] rounded-[16px] lg:rounded-[20px] overflow-hidden mb-2.5 cursor-pointer group flex-shrink-0 relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          onClick={() => handleProjectClick(projects[0])}
        >
          <Image
            src={projects[0].imgSrc}
            alt={`${projects[0].name} — Brand Filmmaking e Produção Audiovisual`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={100}
            className="object-cover object-[center_45%] group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
        <motion.div 
          className="flex-1 flex flex-col justify-between overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          variants={projectsVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.slice(1).map((project) => (
            <motion.div 
              key={project.name}
              variants={projectItemVariants}
              whileHover="hover"
              className="flex flex-col justify-center flex-1"
            >
              <hr className="border-0 h-[1px] bg-accent/40" />
              <button 
                className="w-full flex justify-between items-center group cursor-pointer py-1.5 md:py-2 px-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
                onClick={() => handleProjectClick(project)}
                aria-label={`Ver detalhes de ${project.name}`}
              >
                <div className="flex flex-col gap-0.5 pr-2">
                  <span className="text-base md:text-lg group-hover:text-brand-accent transition-colors leading-snug">{project.name}</span>
                  {project.shortDescription && (
                    <span className="text-xs text-foreground/60 hidden xl:block leading-tight">{project.shortDescription}</span>
                  )}
                </div>
                <div className="flex items-center flex-shrink-0">
                  <div className="overflow-hidden rounded-lg w-[68px] h-[40px] md:w-[76px] md:h-[44px] xl:w-[84px] xl:h-[48px]">
                    <Image src={project.imgSrc} alt={project.name} width={84} height={48} loading="lazy" quality={80} sizes="(max-width: 768px) 68px, 84px" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
          
          {/* Obras Selecionadas List Item */}
          <motion.div 
            variants={projectItemVariants}
            whileHover="hover"
            className="flex flex-col justify-center flex-1"
          >
            <hr className="border-0 h-[1px] bg-accent/40" />
            <Link 
              href="/projetos"
              className="w-full flex justify-between items-center group cursor-pointer py-1.5 md:py-2 px-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
              aria-label="Ir para Obras Selecionadas"
            >
              <div className="flex flex-col gap-0.5 pr-2">
                <span className="text-base md:text-lg group-hover:text-brand-accent transition-colors leading-snug">Obras Selecionadas</span>
                <span className="text-xs text-foreground/60 hidden xl:block leading-tight">Ver portfólio completo</span>
              </div>
              <div className="flex items-center flex-shrink-0">
                <div className="overflow-hidden rounded-lg w-[68px] h-[40px] md:w-[76px] md:h-[44px] xl:w-[84px] xl:h-[48px]">
                  <Image src="/FOTOS/trabalhos/ele nao foi embora.jpg" alt="Obras Selecionadas" width={84} height={48} loading="lazy" quality={80} sizes="(max-width: 768px) 68px, 84px" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          </motion.div>

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