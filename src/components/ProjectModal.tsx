"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Image from "next/image";
import { modalVariants, backdropVariants, textVariants, iconVariants } from "@/lib/animation/variants";
import { Project } from "@/lib/constants/projects";
import { useModalA11y } from "@/hooks/useModalA11y";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const modalRef = useModalA11y({ isOpen, onClose });

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            className="bg-card rounded-[20px] p-6 md:p-8 lg:p-12 border-3 border-accent w-full max-w-5xl max-h-[90vh] overflow-y-auto relative flex flex-col gap-6 focus:outline-none"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
              onClick={onClose}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              aria-label="Fechar modal do projeto"
            >
              <X size={24} className="text-foreground" />
            </motion.button>

            {/* Header */}
            <motion.div
              className="text-left border-b border-border pb-6 mt-4 md:mt-0"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 id="project-modal-title" className="text-4xl md:text-5xl lg:text-6xl font-medium text-brand-accent">
                {project.name}
              </h2>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-accent text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Content Area */}
            <motion.div
              className="flex flex-col gap-8 mt-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {project.type === "copy" ? (
                <div className="flex flex-col gap-8">
                  <div className="w-full h-[300px] md:h-[500px] rounded-[20px] overflow-hidden relative">
                    <Image
                      src={project.modalImgSrc || project.imgSrc}
                      alt={project.name}
                      fill
                      priority
                      quality={100}
                      className={
                        project.name === "O Código Brasil"
                          ? "object-contain bg-background/5 p-4"
                          : project.name === "A Operação"
                          ? "object-cover object-[center_45%]"
                          : "object-cover object-[center_30%]"
                      }
                    />
                  </div>
                  <p className="text-xl md:text-3xl font-light leading-relaxed text-foreground/90">
                    {project.content as string}
                  </p>
                  
                  {project.name === "O Código Brasil" && (
                    <div className="bg-foreground/5 rounded-2xl p-6 border border-foreground/10 mt-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <p className="text-sm text-foreground/60 uppercase tracking-widest mb-1">
                            Valor de Mercado
                          </p>
                          <p className="text-2xl font-medium line-through text-foreground/40">
                            R$ 699,90
                          </p>
                        </div>
                        <div className="h-[1px] md:h-12 w-full md:w-[1px] bg-foreground/10" />
                        <div className="flex-1">
                          <p className="text-brand-accent font-medium text-lg mb-1">
                            Exclusivo para Clientes
                          </p>
                          <p className="text-sm text-foreground/80 font-light leading-relaxed">
                            Acreditamos que nossos parceiros precisam estar armados com a melhor estratégia. Por isso, nossos clientes recebem um exemplar físico <span className="font-medium text-foreground">gratuitamente</span> para guiá-los na jornada de dominação.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(project.content as string[]).map((src, index) => (
                    <div key={index} className="w-full h-[250px] rounded-[16px] overflow-hidden relative group">
                      <Image
                        src={src}
                        alt={`Bastidor ${index + 1}`}
                        fill
                        quality={90}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
