import { Instagram } from "lucide-react";

interface InstagramEmbedProps {
  urls: string[];
  projectName: string;
  /** Rótulo de cada peça: "Episódio" (padrão — novela) ou "Filme" (campanhas) */
  itemNoun?: string;
}

export default function InstagramEmbed({ urls, projectName, itemNoun = "Episódio" }: InstagramEmbedProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {urls.map((url, idx) => {
        const num = String(idx + 1).padStart(2, "0");
        return (
          <div
            key={url}
            className="w-full rounded-[20px] overflow-hidden border border-white/10 bg-[#0e0e0e] p-5 transition-all hover:border-brand-accent/40"
          >
            {/* Top metadata */}
            <div className="flex items-center justify-between mb-4 gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                {itemNoun} {num}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-foreground/50 truncate">
                <Instagram size={14} className="shrink-0" />
                <span className="truncate">{projectName}</span>
              </span>
            </div>

            {/* Player embutido — o usuário assiste sem sair do site (mesmo padrão do Journal) */}
            <div className="rounded-[14px] overflow-hidden border border-white/10 bg-black">
              <iframe
                src={`${url.replace(/\/+$/, "")}/embed`}
                title={`${projectName} — ${itemNoun} ${num}`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                loading="lazy"
                className="w-full block border-none"
                style={{ aspectRatio: "560 / 925" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
