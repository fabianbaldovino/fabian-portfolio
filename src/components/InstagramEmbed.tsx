"use client";

import { useEffect, useState } from "react";
import { Instagram, ExternalLink, Play } from "lucide-react";

interface InstagramEmbedProps {
  urls: string[];
  projectName: string;
}

export default function InstagramEmbed({ urls, projectName }: InstagramEmbedProps) {
  const [embedsLoaded, setEmbedsLoaded] = useState(false);

  useEffect(() => {
    // Carrega o script oficial do Instagram embed caso não exista
    if (!(window as any).instgrm) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        (window as any).instgrm?.Embeds?.process();
        setEmbedsLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      (window as any).instgrm?.Embeds?.process();
      setEmbedsLoaded(true);
    }
  }, [urls]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {urls.map((url, idx) => {
        const episodeNum = String(idx + 1).padStart(2, "0");
        return (
          <div
            key={url}
            className="w-full rounded-[20px] overflow-hidden border border-white/10 bg-[#0e0e0e] flex flex-col justify-between p-6 transition-all hover:border-brand-accent/40 group relative"
          >
            {/* Top metadata */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                Episódio {episodeNum}
              </span>
              <Instagram size={20} className="text-foreground/50 group-hover:text-brand-accent transition-colors" />
            </div>

            {/* Central preview / call to action */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="my-6 flex flex-col items-center justify-center text-center py-10 px-4 rounded-[16px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-brand-accent/30 transition-all cursor-pointer group/card"
            >
              <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-4 group-hover/card:scale-110 group-hover/card:bg-brand-accent group-hover/card:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(205,160,89,0.15)]">
                <Play size={24} className="fill-current translate-x-0.5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-1">
                {projectName} — Episódio {episodeNum}
              </h3>
              <p className="text-xs text-foreground/60 max-w-xs font-light">
                Novela vertical produzida para o Instagram. Assista ao episódio completo em alta resolução.
              </p>
            </a>

            {/* Direct action button */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-brand-dark py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-brand-accent/30 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(205,160,89,0.25)]"
            >
              <span>Assistir no Instagram</span>
              <ExternalLink size={14} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
