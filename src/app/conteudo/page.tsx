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
            <Link key={item.slug} href={`/conteudo/${item.slug}`} className="group block">
              <div className="border border-accent rounded-[20px] p-6 lg:p-8 bg-background/50 hover:bg-background/80 transition-colors">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                  <div className="flex-1">
                    <span className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2 block">{item.date}</span>
                    <h2 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-brand-accent transition-colors">{item.title}</h2>
                    <p className="text-foreground/80">{item.excerpt}</p>
                  </div>
                  {item.coverImage ? (
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center w-32 h-20 md:w-48 md:h-28 bg-black rounded-lg border border-accent relative overflow-hidden group-hover:scale-105 transition-transform">
                      <img src={item.coverImage} className="absolute inset-0 w-full h-full object-cover opacity-80" alt={item.title} />
                      {item.youtubeId && <span className="text-red-500 font-bold text-xs uppercase z-10 bg-black/70 px-2 py-1 rounded absolute top-2 right-2">▶ YouTube</span>}
                      {item.instagramUrl && !item.youtubeId && <span className="text-brand-accent font-bold text-xs uppercase z-10 bg-black/70 px-2 py-1 rounded absolute top-2 right-2">Instagram</span>}
                    </div>
                  ) : item.youtubeId ? (
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center w-32 h-20 bg-black rounded-lg border border-accent relative overflow-hidden group-hover:scale-105 transition-transform">
                      <span className="text-red-500 font-bold text-xs uppercase z-10 bg-black/70 px-2 py-1 rounded">▶ YouTube</span>
                      <img src={`https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="" />
                    </div>
                  ) : item.instagramUrl ? (
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center w-32 h-20 bg-brand-accent/20 rounded-lg border border-brand-accent/50 relative overflow-hidden group-hover:scale-105 transition-transform">
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
