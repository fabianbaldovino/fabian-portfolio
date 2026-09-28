"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { portfolioProjects } from "@/lib/constants/portfolioProjects";
import { containerVariants, cardVariants, textVariants } from "@/lib/animation/variants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjetosPage() {
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

            {/* Featured Project — link direto para o caso */}
            <Link
              href={`/especialidades/${featured.slug}`}
              className="flex-1 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-[20px]"
            >
              <motion.div
                className="relative rounded-[20px] overflow-hidden cursor-pointer group h-full min-h-[300px] md:min-h-[400px]"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Image
                  src={featured.imgSrc}
                  alt={`${featured.name} — Produção Audiovisual para ${featured.client} por Fabian Baldovino`}
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
            </Link>

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
                  <Link
                    href={`/especialidades/${project.slug}`}
                    className="flex justify-between items-center py-4 px-2 gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-[8px]"
                    aria-label={`Ver caso completo: ${project.name} — ${project.client}`}
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
                          alt={`${project.name} — ${project.client}`}
                          fill
                          quality={80}
                          sizes="72px"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <ArrowUpRight size={18} className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Card */}
            <motion.div
              className="bg-card rounded-[20px] p-6 border-3 border-accent flex flex-col justify-between gap-4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -4 }}
            >
              <div>
                <p className="text-sm font-light text-foreground/60">Quer ser o próximo?</p>
                <h2 className="text-3xl md:text-4xl font-medium leading-tight mt-1">
                  Vamos criar<br />
                  <span className="italic font-light text-brand-accent">juntos.</span>
                </h2>
              </div>
              <a
                href="https://wa.me/5551999654160"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-brand-dark px-6 py-3 rounded-full font-medium w-full text-sm text-center hover:bg-brand-accent/90 hover:shadow-[0_0_20px_rgba(205,160,89,0.25)] active:scale-[0.98] transition-all min-h-[48px] flex items-center justify-center"
                aria-label="Iniciar conversa no WhatsApp com Fabian Baldovino"
              >
                Falar no WhatsApp
              </a>
            </motion.div>

          </section>
        </motion.div>
      </main>

      <Footer className="mt-4" />
    </div>
  );
}
