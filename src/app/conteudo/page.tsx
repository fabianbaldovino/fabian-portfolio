import { conteudos } from "@/lib/constants/conteudos";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conteúdo e Estratégia | Fabian Baldovino",
  description: "Artigos, vídeos e insights sobre brand filmmaking, psicanálise de consumo e estratégia de alto valor em Porto Alegre.",
};

export default function ConteudoHub() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-card rounded-[20px] p-6 md:p-12 border-3 border-accent w-full relative">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">Journal & Insights</h1>
        <p className="text-foreground/70 mb-10 text-lg">Estratégias visuais para blindar marcas e dominar o inconsciente do mercado.</p>
        
        <div className="flex flex-col gap-8">
          {conteudos.map((item) => (
            <Link 
              key={item.slug} 
              href={`/conteudo/${item.slug}`} 
              className="group block rounded-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="border border-accent rounded-[20px] p-6 lg:p-8 bg-background/50 hover:bg-background/80 hover:border-brand-accent/50 transition-all duration-300">
                <div className="flex flex-col-reverse md:flex-row gap-6 justify-between items-start md:items-center">
                  <div className="flex-1 min-w-0">
                    <span className="text-brand-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block">{item.date}</span>
                    <h2 className="text-2xl md:text-3xl font-medium mb-3 text-foreground group-hover:text-brand-accent transition-colors leading-snug">{item.title}</h2>
                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">{item.excerpt}</p>
                    <div className="flex gap-2 flex-wrap mt-4">
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-accent/60 text-foreground/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {item.coverImage ? (
                    <div className="w-full md:w-56 lg:w-64 aspect-video md:aspect-[16/10] flex-shrink-0 rounded-xl border border-accent/40 relative overflow-hidden bg-card group-hover:border-brand-accent/60 group-hover:scale-[1.02] transition-all duration-300">
                      <img src={item.coverImage} className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" alt={item.title} loading="lazy" />
                      {item.youtubeId && <span className="text-red-500 font-bold text-[10px] uppercase z-10 bg-black/80 px-2 py-0.5 rounded absolute top-2 right-2">▶ YouTube</span>}
                      {item.instagramUrl && !item.youtubeId && <span className="text-brand-accent font-bold text-[10px] uppercase z-10 bg-black/80 px-2 py-0.5 rounded absolute top-2 right-2 border border-brand-accent/30">Instagram</span>}
                    </div>
                  ) : item.youtubeId ? (
                    <div className="w-full md:w-56 lg:w-64 aspect-video md:aspect-[16/10] flex-shrink-0 rounded-xl border border-accent/40 relative overflow-hidden bg-black group-hover:border-brand-accent/60 group-hover:scale-[1.02] transition-all duration-300">
                      <span className="text-red-500 font-bold text-[10px] uppercase z-10 bg-black/80 px-2 py-0.5 rounded absolute top-2 right-2">▶ YouTube</span>
                      <img src={`https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`} className="absolute inset-0 w-full h-full object-cover opacity-70" alt={item.title} loading="lazy" />
                    </div>
                  ) : item.instagramUrl ? (
                    <div className="w-full md:w-56 lg:w-64 aspect-video md:aspect-[16/10] flex-shrink-0 rounded-xl border border-brand-accent/40 relative overflow-hidden bg-brand-accent/10 flex items-center justify-center group-hover:scale-[1.02] transition-all duration-300">
                      <span className="text-brand-accent font-bold text-xs uppercase z-10">Instagram</span>
                    </div>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
