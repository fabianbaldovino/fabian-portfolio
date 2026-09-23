import { projects } from "@/lib/constants/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
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
  const contentArray = Array.isArray(project.content) ? project.content : [project.content];

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="bg-card rounded-[20px] p-6 md:p-12 border-3 border-accent w-full relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">{project.name}</h1>
        {project.shortDescription && (
          <p className="text-xl text-brand-accent mb-8 uppercase tracking-widest text-sm font-medium">
            {project.shortDescription}
          </p>
        )}

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
