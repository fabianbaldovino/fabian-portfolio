import { projects } from "@/lib/constants/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} | Fabian Baldovino`,
    description: project.shortDescription || `Detalhes da especialidade ${project.name} por Fabian Baldovino, brand filmmaker em Porto Alegre.`,
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
  const contentArray = Array.isArray(project.content) ? project.content : [project.content];

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="bg-card rounded-[20px] p-6 md:p-12 border-3 border-accent w-full relative">
        <div className="mb-6">
          <Link 
            href="/#especialidades" 
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-brand-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md py-1 px-2 -ml-2"
          >
            <span aria-hidden="true">&larr;</span> Voltar para Especialidades
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">{project.name}</h1>
        {project.shortDescription && (
          <p className="text-xl text-brand-accent mb-8 uppercase tracking-widest text-sm font-medium">
            {project.shortDescription}
          </p>
        )}

        {isBook ? (
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start mb-12">
            <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] flex-shrink-0 flex justify-center">
              <div className="relative w-full aspect-[896/1200] rounded-2xl overflow-hidden shadow-2xl border border-accent/60 bg-black/40 group hover:border-brand-accent/50 transition-all duration-300">
                <Image
                  src={project.modalImgSrc || project.imgSrc}
                  alt={`Capa oficial do livro ${project.name} - Fabian Baldovino`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed text-lg mb-8">
                {contentArray.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-background/60 border border-accent/50 mb-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Exemplar Cortesia para Clientes</h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  Todo parceiro e cliente de projetos de Brand Filmmaking recebe um exemplar impresso exclusivo de <em>O Código Brasil</em> como parte do onboarding estratégico.
                </p>
                <a
                  href="https://wa.me/5551999654160?text=Ol%C3%A1%20Fabian,%20vi%20a%20capa%20do%20livro%20O%20C%C3%B3digo%20Brasil%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-accent text-brand-dark font-medium text-sm hover:brightness-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                >
                  Solicitar Contato via WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12">
              <Image
                src={project.modalImgSrc || project.imgSrc}
                alt={project.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
            </div>

            <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed text-lg mb-12">
              {!isGallery && contentArray.map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </>
        )}

        {isGallery && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentArray.map((imgSrc, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={`${project.name} imagem ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-12">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-accent text-foreground/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
