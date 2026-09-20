"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, ArrowLeft } from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/lib/constants/portfolioProjects";
import { containerVariants, cardVariants, textVariants, modalVariants, backdropVariants } from "@/lib/animation/variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ProjectModal({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-card rounded-[20px] p-6 md:p-10 border-3 border-accent w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            className="absolute top-6 right-6 p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors z-10"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Fechar modal"
          >
            <X size={22} className="text-foreground" />
          </motion.button>

          <div className="flex flex-col gap-6 mt-4">
            {/* Header */}
            <div className="border-b border-border pb-6">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-1">
                {project.client}
              </p>
              <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                {project.name}
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-accent text-foreground/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="w-full h-[280px] md:h-[420px] rounded-[16px] overflow-hidden relative">
              <Image
                src={project.imgSrc}
                alt={project.name}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>

            {/* Deliverable badge */}
            <p className="text-sm text-foreground/50 uppercase tracking-widest">
              {project.deliverable}
            </p>

            {/* Description */}
            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
              {project.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProjetosPage() {
  const [selected, setSelected] = useState<PortfolioProject | null>(null);

  // Featured project = first one, rest in list
  const [featured, ...rest] = portfolioProjects;

  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <Navbar />

      <main>
        <motion.div
          className="flex flex-col lg:flex-row flex-1 gap-4 pb-4 md:pb-6 lg:pb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT COLUMN */}
          <section aria-label="Projetos Realizados" className="flex flex-col w-full lg:w-[65%] gap-4">

            {/* Page Header Card */}
            <motion.div
              className="bg-card rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label="Voltar para o início"
                >
                  <ArrowLeft size={20} className="text-foreground" />
                </Link>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-accent font-medium">
                    Portfólio
                  </p>
                  <h1 className="text-2xl md:text-3xl font-medium">
                    Obras Selecionadas
                  </h1>
                </div>
              </div>
              <p className="text-foreground/50 text-sm md:text-base max-w-xs text-right hidden md:block">
                {portfolioProjects.length} obras em destaque · Brand Filmmaking
              </p>
            </motion.div>

            {/* Featured Project */}
            <motion.div
              className="relative rounded-[20px] overflow-hidden cursor-pointer group flex-1 min-h-[300px] md:min-h-[400px]"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => setSelected(featured)}
            >
              <Image
                src={featured.imgSrc}
                alt={featured.name}
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest bg-black/40 backdrop-blur-sm text-foreground/70 px-3 py-1 rounded-full border border-white/10">
                    {featured.client}
                  </span>
                  <motion.div
                    className="p-2 rounded-full bg-brand-accent/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <ArrowUpRight size={20} className="text-brand-accent" />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-xs uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                    {featured.name}
                  </h2>
                  <p className="text-sm text-white/50 uppercase tracking-widest">
                    {featured.deliverable}
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* RIGHT COLUMN */}
          <section aria-label="Lista de projetos" className="flex flex-col w-full lg:w-[35%] gap-4">

            {/* Project cards list */}
            <motion.div
              className="bg-foreground text-background rounded-[20px] p-6 flex flex-col gap-0 flex-1"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-xl font-medium mb-4 text-background"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Acervo em Destaque
              </motion.h2>

              {rest.map((project, i) => (
                <motion.div
                  key={`${project.client}-${project.name}`}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group"
                >
                  {i > 0 && <hr className="border-0 h-[1px] bg-accent/30" />}
                  <div
                    className="flex justify-between items-center cursor-pointer py-4 px-2 gap-4"
                    onClick={() => setSelected(project)}
                  >
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-widest text-background/50 font-medium">
                        {project.client}
                      </p>
                      <span className="text-lg font-medium group-hover:text-brand-accent transition-colors truncate">
                        {project.name}
                      </span>
                      <p className="text-xs text-background/40">
                        {project.deliverable}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="w-[72px] h-[48px] rounded-lg overflow-hidden relative">
                        <Image
                          src={project.imgSrc}
                          alt={project.name}
                          fill
                          quality={80}
                          sizes="72px"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <ArrowUpRight size={18} className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Card */}
            <motion.div
              className="bg-card rounded-[20px] p-6 border-3 border-accent flex flex-col justify-between gap-4 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -4 }}
              onClick={() => window.open(`https://wa.me/5551999654160`, '_blank')}
            >
              <div>
                <p className="text-sm font-light text-foreground/60">Quer ser o próximo?</p>
                <h2 className="text-3xl md:text-4xl font-medium leading-tight mt-1">
                  Vamos criar<br />
                  <span className="italic font-light text-brand-accent">juntos.</span>
                </h2>
              </div>
              <motion.button
                className="bg-brand-accent text-brand-dark px-6 py-3 rounded-full font-medium w-full text-sm hover:bg-brand-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Falar no WhatsApp
              </motion.button>
            </motion.div>

          </section>
        </motion.div>
      </main>

      <Footer className="mt-4" />

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
