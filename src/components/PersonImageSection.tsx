"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { imageVariants } from "@/lib/animation/variants";
import { useDataSaver } from "@/hooks/useDataSaver";

export default function PersonImageSection() {
  const { dataSaver, checked } = useDataSaver();
  const videoRef = useRef<HTMLVideoElement>(null);

  // autoplay é disparado por JS após a checagem de Save-Data:
  // o atributo nunca é renderizado pela SSR, evitando playback
  // em rede lenta antes da hidratação.
  useEffect(() => {
    if (!checked || dataSaver) return;
    videoRef.current?.play().catch(() => {});
  }, [checked, dataSaver]);

  return (
    <motion.div 
      className="w-[80%] max-w-[360px] md:w-auto md:max-w-none md:h-full aspect-[9/16] bg-card rounded-[20px] overflow-hidden shrink-0 mx-auto lg:mx-0 relative"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    >
      <video
        ref={videoRef}
        src="/videos/REEL_2026_1.mp4"
        muted
        preload={dataSaver ? "none" : "metadata"}
        poster="/FOTOS/fabian_baldovino_parque_moinhos_de_vento_porto_alegre_rs.webp"
        loop
        playsInline
        controls={dataSaver}
        className="w-full h-full object-cover"
        aria-label="Reel 2026"
      />
    </motion.div>
  );
}
