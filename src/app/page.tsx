"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PersonImageSection from "@/components/PersonImageSection";
import AboutContactSection from "@/components/AboutContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsStrip from "@/components/ClientsStrip";
import Footer from "@/components/Footer";
import { containerVariants } from "@/lib/animation/variants";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6 lg:h-screen lg:overflow-hidden">
      <Navbar />
      <main>
        <motion.div 
          className="flex flex-col lg:flex-row flex-1 gap-6 lg:gap-8 pb-4 md:pb-0 lg:h-[calc(100vh-186px)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <section id="about-section" aria-label="Hero e Sobre" className="flex flex-col w-full lg:w-[70%] gap-4 lg:mb-8">
            <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-4 md:h-[55%]">
              <HeroSection />
              <PersonImageSection />
            </div>
            {/* Faixa de Autoridade — logos dos clientes atendidos */}
            <ClientsStrip />
            <AboutContactSection />
          </section>
          <section id="projects-section" aria-label="Projetos" className="lg:contents">
            <ProjectsSection />
          </section>
        </motion.div>
      </main>
      <Footer className="mb-4" />
    </div>
  );
}
