"use client";

import { motion } from "motion/react";
import { imageVariants } from "@/lib/animation/variants";

export default function PersonImageSection() {
  return (
    <motion.div 
      className="w-[80%] max-w-[360px] md:w-auto md:max-w-none md:h-full aspect-[9/16] bg-card rounded-[20px] overflow-hidden shrink-0 mx-auto lg:mx-0 relative"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    >
      <video
        src="/videos/REEL_2026_1.mp4"
        autoPlay
        muted
        preload="metadata"
        poster="/FOTOS/fabian_baldovino_parque_moinhos_de_vento_porto_alegre_rs.webp"
        loop
        playsInline
        className="w-full h-full object-cover"
        aria-label="Reel 2026"
      />
    </motion.div>
  );
}