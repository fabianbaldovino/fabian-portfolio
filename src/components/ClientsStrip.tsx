"use client";

import Image from "next/image";
import { motion } from "motion/react";

// Ordem de importancia: marcas de maior porte corporativo primeiro
const clients = [
  { name: "Fábrica de Suplementos", src: "/marcas/FABIRCA_DE_SUPLEMENTOS.png", scale: "scale-[1.4]" },
  { name: "Prefeitura de Canoas RS", src: "/marcas/logo_Prefeitura_de_canoas_rio_grande_do_sul.png", invert: true },
  { name: "BPM Society", src: "/marcas/logo_bpmsociety_brasil.png", invert: true },
  { name: "Copelmi", src: "/marcas/logo_copelmi_rio_grande_do_sul.png", invert: true, scale: "scale-[1.5]" },
  { name: "Kolosh", src: "/marcas/logo_kolosh_poa_rs.png" },
  { name: "Mercato", src: "/marcas/logo_mercato_rio_grande_do_sul.png", invert: true },
  { name: "PUC RS", src: "/marcas/logo_puc_rs.png", invert: true, scale: "scale-[1.5]" },
  { name: "Quick House", src: "/marcas/logo_quick_house_canoas_rio_grande_do_sul.png", scale: "scale-[2]" },
  { name: "Seival Sul Mineração", src: "/marcas/logo_seival_sul_mineracao_rs.png", invert: true },
  { name: "Vita Minimalista", src: "/marcas/logo_vita_minimalista_porto_alegre_rs.png", scale: "scale-[1.5]" },
  { name: "Wedy Nutrition", src: "/marcas/logo_wedy_nutrition_brasil.png" }
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
              className={`w-full h-full object-contain ${client.scale || ""}`}
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
