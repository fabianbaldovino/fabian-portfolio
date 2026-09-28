"use client";

import Image from "next/image";
import { motion } from "motion/react";

// Ordem de importancia: marcas de maior porte corporativo primeiro
const clients = [
  { name: "Seival Sul Mineração", src: "/clientes/novos/SEIVAL_SUL_MINERAÇÃO.png", invert: true },
  { name: "PUC RS", src: "/clientes/novos/PUC_RS.png", invert: true },
  { name: "Prefeitura de Canoas RS", src: "/clientes/novos/PREFEITURA_CANOAS_RS.png", invert: true },
  { name: "Quick House", src: "/clientes/novos/QUICK_HOUSE.png" },
  { name: "Wedy Nutrition", src: "/clientes/novos/WEDY_NUTRITION.png" },
  { name: "Kolosh", src: "/clientes/novos/KOLOSH.png" },
  { name: "Vita Minimalista", src: "/clientes/novos/VITA_MINIMALISTA.png" },
  { name: "Mercato", src: "/clientes/novos/MERCATO.png", invert: true },
];

const doubled = [...clients, ...clients];

export default function ClientsStrip() {
  return (
    <motion.div
      className="w-full bg-card rounded-[20px] py-4 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
      aria-label="Marcas que confiam em Fabian Baldovino"
    >
      <p className="sr-only">Clientes atendidos por Fabian Baldovino — Brand Filmmaking Porto Alegre</p>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-card to-transparent" />

      <div
        className="flex items-center gap-12 w-max"
        style={{ animation: "marquee-scroll 36s linear infinite" }}
      >
        {doubled.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            aria-hidden={idx >= clients.length ? "true" : undefined}
            className={`flex items-center justify-center flex-shrink-0 transition-all duration-300 w-[140px] h-[50px] ${
              client.invert
                ? "opacity-70 hover:opacity-100 brightness-0 invert"
                : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0 mix-blend-screen"
            }`}
          >
            <Image
              src={client.src}
              alt={`${client.name} — cliente Fabian Baldovino Brand Filmmaking`}
              width={140}
              height={50}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </motion.div>
  );
}
