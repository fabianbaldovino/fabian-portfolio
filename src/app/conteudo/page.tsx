import { conteudos } from "@/lib/constants/conteudos";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Journal & Insights | Fabian Baldovino",
  description: "Artigos, vídeos e insights sobre brand filmmaking, psicanálise de consumo e estratégia de alto valor em Porto Alegre.",
  alternates: {
    canonical: "https://www.fabian.art.br/conteudo",
  },
  openGraph: {
    type: "website",
    url: "https://www.fabian.art.br/conteudo",
    title: "Journal & Insights | Fabian Baldovino",
    description: "Artigos, vídeos e insights sobre brand filmmaking, psicanálise de consumo e estratégia de alto valor em Porto Alegre.",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabian Baldovino — Journal & Insights de Brand Filmmaking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal & Insights | Fabian Baldovino",
    description: "Artigos, vídeos e insights sobre brand filmmaking, psicanálise de consumo e estratégia de alto valor.",
    images: ["/og-image.jpg"],
  },
};

export default function JournalHub() {
  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <Navbar />

      <main className="flex-1 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <header className="bg-card rounded-[20px] p-6 md:p-10 border border-accent flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-accent font-medium mb-3">
                Artigos & Filmes
              </p>
              <h1 className="text-4xl md:text-5xl font-medium mb-3">
                Journal <span className="italic font-light text-brand-accent">&</span> Insights
              </h1>
              <p className="text-foreground/70 text-lg">
                Estratégias visuais para fortalecer marcas. <a href="https://ocodigobrasil.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-accent transition-colors">O Código Brasil, manifesto de Fabian Baldovino</a>.
              </p>
            </div>
            <p className="text-foreground/50 text-sm uppercase tracking-wider md:text-right">
              {conteudos.length} publicações · artigos e vídeos
            </p>
          </header>

          <ul className="flex flex-col gap-4 list-none p-0 m-0" aria-label="Publicações do Journal">
            {conteudos.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/conteudo/${item.slug}`}
                  className="group block rounded-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <article className="bg-card rounded-[20px] border border-accent/40 p-6 lg:p-8 hover:bg-background/50 hover:border-brand-accent/60 transition-all duration-300">
                    <div className="flex flex-col-reverse md:flex-row gap-6 justify-between items-start md:items-center">
                      <div className="flex-1 min-w-0">
                        <span className="text-brand-accent text-xs md:text-sm font-bold tracking-widest uppercase mb-2 block">
                          <time dateTime={item.date}>
                            {new Date(item.date + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                          </time>
                        </span>
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
                        <div className="w-full md:w-56 lg:w-64 aspect-video md:aspect-[16/10] flex-shrink-0 rounded-xl border border-accent/40 relative overflow-hidden bg-brand-accent/10 flex items-center justify-center group-hover:scale-[1.02] transition-all duration-300">
                          <span className="text-brand-accent font-bold text-xs uppercase z-10">Instagram</span>
                        </div>
                      ) : null}
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer className="mt-4" />
    </div>
  );
}
