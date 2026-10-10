import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { especialidades } from "@/lib/constants/especialidades";
import { portfolioProjects } from "@/lib/constants/portfolioProjects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Renderiza **negrito** e *itálico* dentro de um parágrafo. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-foreground/95">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

export async function generateStaticParams() {
  return especialidades.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const esp = especialidades.find((e) => e.slug === slug);

  if (!esp) {
    return { title: "Especialidade não encontrada | Fabian Baldovino" };
  }

  return {
    title: esp.metaTitle,
    description: esp.metaDescription,
    keywords: esp.keywords,
    alternates: {
      canonical: `https://www.fabian.art.br/especialidades/${esp.slug}`,
    },
    openGraph: {
      title: esp.metaTitle,
      description: esp.metaDescription,
      url: `https://www.fabian.art.br/especialidades/${esp.slug}`,
      type: "website",
      siteName: "Fabian Baldovino",
      locale: "pt_BR",
      images: [
        {
          url: `https://www.fabian.art.br${esp.imgSrc}`,
          width: 1200,
          height: 630,
          alt: `${esp.name} — ${esp.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: esp.metaTitle,
      description: esp.metaDescription,
      images: [`https://www.fabian.art.br${esp.imgSrc}`],
    },
  };
}

export default async function EspecialidadePage({ params }: PageProps) {
  const { slug } = await params;
  const esp = especialidades.find((e) => e.slug === slug);

  if (!esp) {
    notFound();
  }

  const cases = esp.relatedCases
    .map((s) => portfolioProjects.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const url = `https://www.fabian.art.br/especialidades/${esp.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: esp.name,
        name: esp.metaTitle,
        description: esp.metaDescription,
        url,
        image: `https://www.fabian.art.br${esp.imgSrc}`,
        provider: {
          "@type": "Person",
          name: "Fabian Baldovino",
          url: "https://www.fabian.art.br",
          jobTitle: "Brand Filmmaker",
        },
        areaServed: [
          { "@type": "City", name: "Porto Alegre" },
          { "@type": "State", name: "Rio Grande do Sul" },
          { "@type": "Country", name: "Brasil" },
        ],
        keywords: esp.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: "https://www.fabian.art.br",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Especialidades",
            item: "https://www.fabian.art.br/especialidades",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: esp.name,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 flex flex-col gap-6 max-w-7xl mx-auto w-full px-2 sm:px-4">
        {/* Breadcrumb & voltar */}
        <div className="flex items-center justify-between bg-card rounded-[20px] p-4 md:p-6 border border-white/5">
          <Link
            href="/especialidades"
            className="flex items-center gap-2 text-foreground/80 hover:text-brand-accent transition-colors font-medium text-sm md:text-base group"
            aria-label="Voltar para especialidades"
          >
            <div className="p-2 rounded-full bg-background/20 group-hover:bg-brand-accent/20 transition-colors">
              <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Voltar para Especialidades</span>
          </Link>

          <nav
            aria-label="Breadcrumb"
            className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/50"
          >
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/especialidades" className="hover:text-foreground transition-colors">
              Especialidades
            </Link>
            <span>/</span>
            <span className="text-brand-accent font-medium">{esp.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[55%]">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-[20px] overflow-hidden bg-card border border-white/5">
              <Image
                src={esp.imgSrc}
                alt={`${esp.name} — ${esp.tagline}. Fabian Baldovino, brand filmmaker em Porto Alegre.`}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col justify-between gap-6 bg-card rounded-[20px] p-6 md:p-10 border border-white/5">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold">
                Especialidade
              </p>
              <h1 className="text-3xl md:text-5xl font-medium leading-tight">{esp.name}</h1>
              <p className="text-sm uppercase tracking-widest text-foreground/50">
                {esp.tagline}
              </p>

              <div className="h-[1px] bg-accent/30 my-2" />

              <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90">
                {esp.intro}
              </p>
              <p className="text-sm font-light text-foreground/70 mt-2 border-l-2 border-brand-accent pl-4 py-1">
                <strong>Atendimento:</strong> Porto Alegre, Rio Grande do Sul e Brasil.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-accent/30">
              <p className="text-xs text-foreground/60">
                Quer avaliar se esse é o formato certo para sua marca?
              </p>
              <a
                href={`https://wa.me/5551999654160?text=${encodeURIComponent(
                  `Olá Fabian, vi a página de ${esp.name} no seu site e gostaria de conversar sobre um projeto para minha marca.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-brand-dark px-6 py-4 rounded-full font-medium hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-brand-accent/10 group cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Conversar no WhatsApp</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Corpo */}
        <article className="w-full bg-card rounded-[20px] border border-white/5 p-6 md:p-12">
          <div className="max-w-3xl flex flex-col gap-5">
            {esp.content.map((block, i) =>
              block.startsWith("### ") ? (
                <h2
                  key={i}
                  className="text-2xl md:text-3xl font-medium mt-6 first:mt-0 text-foreground"
                >
                  {block.slice(4)}
                </h2>
              ) : (
                <p
                  key={i}
                  className="text-base md:text-lg font-light leading-relaxed text-foreground/85"
                >
                  {renderInline(block)}
                </p>
              )
            )}
          </div>
        </article>

        {/* Cases que comprovam */}
        {cases.length > 0 && (
          <section className="w-full bg-card rounded-[20px] border border-white/5 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-medium mb-8">
              Cases nesse formato
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c) => (
                <Link key={c.slug} href={`/projetos/${c.slug}`} className="group block h-full">
                  <article className="border border-white/5 rounded-[20px] overflow-hidden bg-background/40 h-full flex flex-col transition-transform hover:-translate-y-1">
                    <div className="relative w-full h-44 overflow-hidden">
                      <Image
                        src={c.imgSrc}
                        alt={`${c.name} — ${c.client}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-2 flex-grow">
                      <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold">
                        {c.client}
                      </p>
                      <h3 className="text-lg font-medium group-hover:text-brand-accent transition-colors">
                        {c.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-foreground/50">
                        {c.deliverable}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer className="mt-8" />
    </div>
  );
}
