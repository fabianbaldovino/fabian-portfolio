import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/lib/constants/portfolioProjects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Fabian Baldovino",
    };
  }

  const title = `${project.client} — ${project.name} | Fabian Baldovino Brand Filmmaker`;
  const description = `${project.deliverable} para ${project.client}. ${project.description.slice(0, 140)}...`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.fabian.art.br/projetos/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.fabian.art.br/projetos/${project.slug}`,
      type: "article",
      siteName: "Fabian Baldovino",
      locale: "pt_BR",
      images: [
        {
          url: project.imgSrc,
          width: 1200,
          height: 630,
          alt: `${project.name} — ${project.client}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.imgSrc],
    },
  };
}

export default async function ProjectCasePage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://www.fabian.art.br/projetos/${project.slug}#work`,
        "name": project.name,
        "headline": `${project.name} para ${project.client}`,
        "description": project.description,
        "image": `https://www.fabian.art.br${project.imgSrc}`,
        "creator": {
          "@type": "Person",
          "name": "Fabian Baldovino",
          "url": "https://www.fabian.art.br"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Fabian Baldovino — Brand Filmmaking",
          "url": "https://www.fabian.art.br"
        },
        "keywords": project.tags.join(", ")
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.fabian.art.br"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projetos",
            "item": "https://www.fabian.art.br/projetos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.name,
            "item": `https://www.fabian.art.br/projetos/${project.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 flex flex-col gap-6 max-w-7xl mx-auto w-full px-2 sm:px-4">
        {/* Navigation Breadcrumb & Back */}
        <div className="flex items-center justify-between bg-card rounded-[20px] p-4 md:p-6 border border-white/5">
          <Link
            href="/projetos"
            className="flex items-center gap-2 text-foreground/80 hover:text-brand-accent transition-colors font-medium text-sm md:text-base group"
            aria-label="Voltar para a galeria de projetos"
          >
            <div className="p-2 rounded-full bg-background/20 group-hover:bg-brand-accent/20 transition-colors">
              <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Voltar para Projetos</span>
          </Link>

          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/50">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projetos" className="hover:text-foreground transition-colors">Projetos</Link>
            <span>/</span>
            <span className="text-brand-accent font-medium">{project.client}</span>
          </nav>
        </div>

        {/* Case Study Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Visual Column */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-[20px] overflow-hidden bg-card border border-white/5">
              <Image
                src={project.imgSrc}
                alt={`${project.name} — Obra audiovisual para ${project.client} por Fabian Baldovino`}
                fill
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-foreground/90 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Context & Details Column */}
          <div className="w-full lg:w-[40%] flex flex-col justify-between gap-6 bg-card rounded-[20px] p-6 md:p-10 border border-white/5">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-1">
                  {project.client}
                </p>
                <h1 className="text-3xl md:text-5xl font-medium leading-tight">
                  {project.name}
                </h1>
                <p className="text-sm uppercase tracking-widest text-foreground/50 mt-2">
                  {project.deliverable}
                </p>
              </div>

              <div className="h-[1px] bg-accent/30 my-2" />

              <div className="flex flex-col gap-3">
                <h2 className="text-xs uppercase tracking-widest text-foreground/60 font-medium">
                  Direção Estratégica &amp; Obra
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Direct Conversion CTA */}
            <div className="flex flex-col gap-3 pt-4 border-t border-accent/30">
              <p className="text-xs text-foreground/60">
                Interessado em uma produção no mesmo padrão para sua marca?
              </p>
              <a
                href={`https://wa.me/5551999654160?text=${encodeURIComponent(
                  `Olá Fabian, vi o projeto ${project.name} (${project.client}) no seu site e gostaria de conversar sobre um projeto similar para minha marca.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-brand-dark px-6 py-4 rounded-full font-medium hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-brand-accent/10 group cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Conversar no WhatsApp</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer className="mt-8" />
    </div>
  );
}
