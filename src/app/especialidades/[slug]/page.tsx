import { projects } from "@/lib/constants/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

function renderFormattedText(text: string) {
  const parts = text.split(/(\**[^*]+\**|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i} className="italic text-foreground/95">{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("[") && part.endsWith(")")) {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        // Here we just render as a link, assuming Link is imported
        return <Link key={i} href={match[2]} className="text-brand-accent underline hover:text-foreground transition-colors">{match[1]}</Link>;
      }
    }
    return part;
  });
}

import InstagramEmbed from "@/components/InstagramEmbed";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  // Casos duplicados consolidam no sistema único (/projetos/{slug}).
  // "bastidores" não existe em /projetos — mantém canonical próprio.
  const canonicalSlug = slug === "bastidores" ? null : slug;

    const desc = project.shortDescription || `Detalhes da especialidade ${project.name} por Fabian Baldovino, brand filmmaker em Porto Alegre.`;
  return {
    title: `${project.name} | Fabian Baldovino`,
    description: desc,
    alternates: {
      canonical: `/especialidades/${slug}`,
    },
    openGraph: {
      title: `${project.name} | Fabian Baldovino`,
      description: desc,
      url: `https://www.fabian.art.br/especialidades/${slug}`,
      type: "website",
      siteName: "Fabian Baldovino",
      locale: "pt_BR",
      images: [
        {
          url: project.imgSrc ? `https://www.fabian.art.br${project.imgSrc}` : `https://www.fabian.art.br/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp`,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Fabian Baldovino`,
      description: desc,
      images: [project.imgSrc ? `https://www.fabian.art.br${project.imgSrc}` : `https://www.fabian.art.br/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento_whapp.webp`],
    },
  };
}

export default async function EspecialidadePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isGallery = project.type === "gallery";
  const isBook = project.slug === "o-codigo-brasil";
  const imageFitContain = isBook || project.slug === "quick-house";
  const contentArray = Array.isArray(project.content) ? project.content : [project.content];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": project.name,
    "description": project.shortDescription || project.name,
    "thumbnailUrl": "https://www.fabian.art.br" + (project.imgSrc || "/og-image.jpg"),
    "author": {
      "@type": "Person",
      "name": "Fabian Baldovino"
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center pb-24 overflow-x-hidden selection:bg-brand-accent selection:text-brand-dark">
      <JsonLd data={jsonLd as any} />
      {/* Navigation Bar Minimal */}
      <nav className="w-full max-w-6xl px-6 py-8 flex justify-between items-center relative z-20">
        <Link
          href="/projetos"
          className="flex items-center gap-2 text-foreground/60 hover:text-brand-accent transition-colors text-sm uppercase tracking-widest font-medium group"
        >
          <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform">&larr;</span> Voltar para Projetos
        </Link>
        {project.shortDescription && (
          <div className="text-brand-accent font-serif italic text-sm tracking-widest opacity-80 hidden md:block">
            {project.shortDescription}
          </div>
        )}
      </nav>

      <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10 mt-8 lg:mt-12">

        {/* Left Column: Cover & Hero */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-start">
          <div className="w-full text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Estudo de Caso
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] mb-6 text-balance text-white">
              {project.name}
            </h1>
          </div>

          <div className={`relative w-full max-w-[400px] lg:max-w-[500px] ${isBook ? 'aspect-[3/4]' : 'aspect-video lg:aspect-[4/3]'} mt-6 lg:mt-8 group mx-auto lg:mx-0 [perspective:1000px]`}>
            <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full group-hover:bg-brand-accent/30 transition-all duration-700" />
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-y-[-3deg] group-hover:rotate-x-[1deg]">
              <Image
                src={project.modalImgSrc || project.imgSrc}
                alt={project.name}
                fill
                className={imageFitContain ? "object-contain" : "object-cover"}
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
              {!isBook && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />}
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Form Area */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center lg:pl-10">
          <div className="prose prose-invert max-w-none mb-12">
            {contentArray.map((paragraph, idx) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-2xl font-medium mt-10 mb-4 text-foreground">
                    {renderFormattedText(paragraph.replace("### ", ""))}
                  </h3>
                );
              }
              if (idx === 0 && !isBook) {
                return (
                  <p key={idx} className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 border-l-2 border-brand-accent pl-6 mb-8">
                    {renderFormattedText(paragraph)}
                  </p>
                );
              }
              return (
                <p key={idx} className="text-foreground/70 font-light mt-4 leading-relaxed text-balance">
                  {renderFormattedText(paragraph)}
                </p>
              );
            })}

            {isGallery && (
              <div className="grid grid-cols-2 gap-4 mt-8">
                {contentArray.map((imgSrc, idx) => (
                  <div key={`gal-${idx}`} className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={imgSrc}
                      alt={`${project.name} imagem ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-brand-accent/30 text-brand-accent font-medium bg-brand-accent/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Leitura relacionada */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Leitura relacionada</p>
              <ul className="space-y-3 list-none p-0 m-0">
                {project.tags.some(t => t.toLowerCase().includes("brand film") || t.toLowerCase().includes("filmmaking") || t.toLowerCase().includes("novela") || t.toLowerCase().includes("filme")) && (
                  <li><Link href="/conteudo/o-que-e-brand-film-e-por-que-sua-marca-ainda-nao-tem-um" className="text-brand-accent hover:text-white transition-colors underline-offset-4 hover:underline">O que é Brand Film — e por que sua marca ainda não tem um &rarr;</Link></li>
                )}
                {project.tags.some(t => t.toLowerCase().includes("institucional") || t.toLowerCase().includes("vídeo") || t.toLowerCase().includes("construção") || t.toLowerCase().includes("corporativo")) && (
                  <li><Link href="/conteudo/video-institucional-vs-brand-film-a-diferenca-real" className="text-brand-accent hover:text-white transition-colors underline-offset-4 hover:underline">Vídeo institucional vs. brand film: a diferença real &rarr;</Link></li>
                )}
                <li><Link href="/conteudo/como-o-codigo-brasil-transforma-narrativa-de-marcas" className="text-brand-accent hover:text-white transition-colors underline-offset-4 hover:underline">Como O Código Brasil transforma a narrativa de marcas reais &rarr;</Link></li>
              </ul>
            </div>
          </div>

          {/* Golden CTA Card */}
          <div className="bg-card/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/5 relative overflow-hidden mt-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />

            <h3 className="text-xl font-medium tracking-wide mb-2">
              {isBook ? 'Exemplar Digital' : 'Construir uma obra similar?'}
            </h3>
            <p className="text-sm text-foreground/60 mb-8 font-light text-balance leading-relaxed">
              {isBook
                ? 'Todo parceiro e cliente de projetos de Brand Filmmaking recebe o manifesto digital exclusivo O Código Brasil como parte do onboarding estratégico.'
                : 'Operamos com dedicação imersiva a poucas marcas por ciclo, garantindo presença direta da direção em cada etapa da sua produção.'}
            </p>

            <a
              href={isBook
                ? "https://wa.me/5551999654160?text=Ol%C3%A1%20Fabian,%20vi%20o%20manifesto%20O%20C%C3%B3digo%20Brasil%20e%20gostaria%20de%20receber%20o%20exemplar%20digital."
                : "https://wa.me/5551999654160"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-accent text-brand-dark py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center hover:brightness-110 hover:shadow-[0_0_30px_rgba(205,160,89,0.3)] active:scale-[0.98] transition-all"
            >
              {isBook ? 'Solicitar Exemplar' : 'Falar no WhatsApp'}
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SEÇÃO DE FILMES — largura total da página
          Fora do grid hero para ter espaço real.
          Instagram: grid 1→2 colunas | YouTube: full-width 16:9
      ═══════════════════════════════════════════ */}
      {(project.instagramUrls?.length || project.youtubeIds?.length) ? (
        <div className="w-full max-w-6xl px-6 mt-16 pb-16">
          <h2 className="text-2xl md:text-3xl font-medium mb-8 flex items-center gap-3">
            <span className="text-brand-accent text-xl">▶</span> Assistir aos Filmes
          </h2>

          {/* Instagram Reels — player embutido, usuário assiste no site */}
          {project.instagramUrls && project.instagramUrls.length > 0 && (
            <InstagramEmbed
              urls={project.instagramUrls}
              projectName={project.name}
              itemNoun={project.videoNoun}
            />
          )}

          {/* YouTube */}
          {project.youtubeIds && project.youtubeIds.length > 0 && (
            <div className="flex flex-col gap-8 mt-8">
              {project.youtubeIds.map((id, idx) => (
                <div
                  key={id}
                  className="w-full rounded-[20px] overflow-hidden border border-white/10 bg-black"
                  style={{ aspectRatio: "16/9" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                    title={`${project.name} — Filme ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </main>
  );
}
