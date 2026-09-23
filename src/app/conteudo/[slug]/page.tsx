import { conteudos } from "@/lib/constants/conteudos";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return conteudos.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const conteudo = conteudos.find((c) => c.slug === slug);
  if (!conteudo) return {};

  return {
    title: `${conteudo.title} | Fabian Baldovino`,
    description: conteudo.excerpt,
    openGraph: {
      type: "article",
      title: conteudo.title,
      description: conteudo.excerpt,
      publishedTime: conteudo.date,
      authors: ["Fabian Baldovino"],
    }
  };
}

export default async function ConteudoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const conteudo = conteudos.find((c) => c.slug === slug);

  if (!conteudo) {
    notFound();
  }

  // Schema Markup for SEO
  const jsonLd: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": conteudo.title,
      "description": conteudo.excerpt,
      "datePublished": conteudo.date,
      "author": {
        "@type": "Person",
        "name": "Fabian Baldovino"
      }
    }
  ];

  if (conteudo.youtubeId) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": conteudo.title,
      "description": conteudo.excerpt,
      "thumbnailUrl": `https://img.youtube.com/vi/${conteudo.youtubeId}/maxresdefault.jpg`,
      "uploadDate": conteudo.date,
      "embedUrl": `https://www.youtube.com/embed/${conteudo.youtubeId}`
    });
  }

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="mb-10">
        <span className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4 block">
          {new Date(conteudo.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
          {conteudo.title}
        </h1>
        
        <div className="flex gap-2 flex-wrap mb-8">
          {conteudo.tags.map(tag => (
            <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-accent text-foreground/60">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {conteudo.youtubeId && (
        <div className="relative w-full aspect-video rounded-[20px] overflow-hidden border border-accent mb-12 shadow-lg">
          <iframe 
            src={`https://www.youtube.com/embed/${conteudo.youtubeId}`} 
            title={conteudo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      )}

      {conteudo.instagramUrl && (
        <div className="w-full flex justify-center mb-12 rounded-[20px] overflow-hidden">
          <iframe 
            src={`${conteudo.instagramUrl.replace(/\/$/, '')}/embed`}
            width="400"
            height="500"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            className="max-w-full rounded-[20px] border border-accent/20"
          ></iframe>
        </div>
      )}

      <article className="prose prose-invert prose-lg max-w-none text-foreground/80 leading-relaxed font-light">
        {conteudo.content.map((paragraph, idx) => {
          if (paragraph.startsWith("### ")) {
            return <h3 key={idx} className="text-2xl font-medium mt-10 mb-4 text-foreground">{paragraph.replace("### ", "")}</h3>;
          }
          if (paragraph.startsWith("Fotografia:") || paragraph.startsWith("Trilha Sonora") || paragraph.startsWith("Motion Graphics:")) {
             const [title, ...rest] = paragraph.split(":");
             return <p key={idx} className="mb-6"><strong className="text-brand-accent">{title}:</strong> {rest.join(":")}</p>;
          }
          return <p key={idx} className="mb-6">{paragraph}</p>;
        })}
      </article>

      {/* Seção de Autor/CTA no final do artigo */}
      <div className="mt-20 pt-10 border-t border-accent flex flex-col md:flex-row gap-8 items-center bg-card p-8 rounded-[20px]">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 relative border-2 border-brand-accent">
          <img src="/FOTOS/20260522_093422.jpg" alt="Fabian Baldovino" className="object-cover w-full h-full object-top" />
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-2">Fabian Baldovino</h3>
          <p className="text-foreground/70 text-sm md:text-base">
            Brand filmmaker e autor de <em>O Código Brasil</em>. Se o conteúdo gerou valor para você, considere estruturar a narrativa da sua própria empresa com uma produção de nível cinematográfico.
          </p>
        </div>
      </div>
    </main>
  );
}
