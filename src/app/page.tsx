"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PersonImageSection from "@/components/PersonImageSection";
import AboutContactSection from "@/components/AboutContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import AboutModal from "@/components/AboutModal";
import { containerVariants } from "@/lib/animation/variants";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const { action } = (e as CustomEvent).detail;
      if (action === 'contact') setIsContactOpen(true);
      if (action === 'about') setIsAboutOpen(true);
      if (action === 'projects') {
        document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('nav-action', handler);
    return () => window.removeEventListener('nav-action', handler);
  }, []);

  return (
    <div className="flex flex-col h-screen min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6 overflow-auto lg:overflow-hidden">
      <Navbar />
      <main>
        <motion.div 
          className="flex flex-col lg:flex-row flex-1 gap-4 pb-4 md:pb-0 lg:h-[calc(100vh-130px)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <section id="about-section" aria-label="Hero e Sobre" className="flex flex-col w-full lg:w-[70%] gap-4 lg:mb-6">
            <div className="flex flex-col lg:flex-row gap-4 md:h-[60%]">
              <HeroSection />
              <PersonImageSection />
            </div>
            <AboutContactSection />
          </section>
          <section id="projects-section" aria-label="Projetos" className="contents">
            <ProjectsSection />
          </section>
        </motion.div>
      </main>
      <Footer className="mb-4" />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}