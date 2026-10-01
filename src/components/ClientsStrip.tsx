"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ClientsStrip() {
  return (
    <motion.div
      className="w-full bg-card rounded-[20px] py-4 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
      aria-label="Marcas atendidas e imprensa que noticiou Fabian Baldovino"
    >
      <p className="sr-only">Clientes atendidos por Fabian Baldovino e veículos de imprensa que noticiaram seu trabalho — Brand Filmmaking Porto Alegre</p>

      {/* Keyframes inline: no build Linux da Vercel o minifier descarta @keyframes nao referenciados dentro do CSS (a referencia mora no style do JSX) — manter a definicao no HTML garante a animacao em qualquer pipeline. */}
      <style>{`@keyframes marquee-scroll{0%{transform:translate(0)}100%{transform:translate(-50%)}}`}</style>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-card to-transparent" />

      <div
        className="marquee-track flex items-center w-max h-[60px] md:h-[80px]"
        style={{ animation: "marquee-scroll 40s linear infinite" }}
      >
        {/* Renderiza a imagem duas vezes para criar o efeito de loop infinito */}
        <div className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500 h-full brightness-0 invert">
          <Image
            src="/marcas/marcas_parceiras_v2.png"
            alt="Marcas parceiras e clientes Fabian Baldovino"
            width={3000}
            height={200}
            className="w-auto h-full object-contain pr-12"
            loading="eager"
            unoptimized
          />
        </div>
        <div className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500 h-full brightness-0 invert" aria-hidden="true">
          <Image
            src="/marcas/marcas_parceiras_v2.png"
            alt="Marcas parceiras e clientes Fabian Baldovino"
            width={3000}
            height={200}
            className="w-auto h-full object-contain pr-12"
            loading="eager"
            unoptimized
          />
        </div>
      </div>
    </motion.div>
  );
}
