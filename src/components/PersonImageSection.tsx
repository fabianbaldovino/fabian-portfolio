"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { imageVariants } from "@/lib/animation/variants";
import { useDataSaver } from "@/hooks/useDataSaver";

export default function PersonImageSection() {
  const { dataSaver, checked } = useDataSaver();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);

  // autoplay é disparado por JS após a checagem de Save-Data e de
  // prefers-reduced-motion: o atributo nunca é renderizado pela SSR,
  // evitando playback em rede lenta antes da hidratação.
  useEffect(() => {
    if (!checked || dataSaver) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
        controls
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        className="w-full h-full object-cover"
        aria-label="Reel 2026 de Fabian Baldovino"
      />

      {paused && (
        <button
          type="button"
          onClick={() => {
            videoRef.current?.play().catch(() => {});
          }}
          aria-label="Assistir reel 2026"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          <Play size={28} className="text-[#E8CEC2] fill-[#E8CEC2] translate-x-[2px]" aria-hidden="true" />
        </button>
      )}
    </motion.div>
  );
}
