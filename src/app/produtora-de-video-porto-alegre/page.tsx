import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, MapPin, MessageCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioProjects } from "@/lib/constants/portfolioProjects";
import { especialidades } from "@/lib/constants/especialidades";
import {
  business,
  whatsappUrl,
  LOCAL_PAGE_URL,
  SCHEMA_IDS,
} from "@/lib/constants/business";

/* ══════════════════════════════════════════════════════════
   PÁGINA LOCAL PRINCIPAL
   Alvo: "produtora de vídeo porto alegre", "produção audiovisual
   porto alegre", "vídeo institucional porto alegre".
   É a página que sustenta o Perfil da Empresa no Google: o H1 e o
   title usam o termo literal; o texto liga o termo genérico ao
   diferencial (brand film / O Código Brasil).
   Regra: uma página forte por cidade. Não criar páginas por bairro
   com texto repetido (o Google trata como doorway page).
══════════════════════════════════════════════════════════ */

const TITLE = "Produtora de Vídeo em Porto Alegre | Fabian Baldovino";
const DESCRIPTION =
  "Produtora de vídeo e produção audiovisual em Porto Alegre, RS. Vídeo institucional, brand film, documentário de marca e vídeos para redes sociais para empresas gaúchas, desde 2011.";
const HERO_IMG = "/FOTOS/fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "produtora de vídeo Porto Alegre",
    "produção audiovisual Porto Alegre",
    "vídeo institucional Porto Alegre",
    "produtora de vídeo RS",
    "brand film Porto Alegre",
    "vídeo para empresas Porto Alegre",
  ],
  alternates: { canonical: LOCAL_PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: LOCAL_PAGE_URL,
    type: "website",
    siteName: "Fabian Baldovino",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fabian Baldovino — produtora de vídeo em Porto Alegre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const servicos = [
  {
    name: "Vídeo Institucional",
    text: "O filme que apresenta a empresa para clientes, investidores e novos colaboradores. Feito para ser assistido até o fim, não para cumprir tabela.",
    href: "/conteudo/video-institucional-vs-brand-film-a-diferenca-real",
  },
  ...especialidades.map((e) => ({
    name: e.name,
    text: e.tagline + ".",
    href: `/especialidades/${e.slug}`,
  })),
];

const etapas = [
  {
    title: "Conversa e briefing",
    text: "Entendemos o que a empresa precisa provocar em quem assiste, onde o vídeo vai circular e qual é o prazo. Desse encontro sai o orçamento.",
  },
  {
    title: "Leitura do código",
    text: "Antes da câmera, a pesquisa. Com o método O Código Brasil, identificamos o que o seu público sente sobre a sua categoria e qual história a marca pode contar com verdade.",
  },
  {
    title: "Roteiro e filmagem",
    text: "Roteiro aprovado, locações e equipe definidas. Filmamos em Porto Alegre, na Região Metropolitana, na Serra, no interior do RS ou onde a história estiver.",
  },
  {
    title: "Montagem e entrega",
    text: "Montagem, cor, trilha e versões para cada canal: site, YouTube, apresentações comerciais, Reels e anúncios. Você recebe o filme pronto para publicar.",
  },
];

const faq = [
  {
    q: "Quanto custa um vídeo institucional em Porto Alegre?",
    a: "Depende de quantos dias de filmagem o projeto exige, do tamanho da equipe, de locações, elenco e do trabalho de pós-produção (montagem, cor, trilha e animações). Por isso cada orçamento é feito a partir do briefing. Mande pelo WhatsApp o objetivo do vídeo, onde ele vai ser usado e o prazo, e respondemos com uma proposta.",
  },
  {
    q: "Quanto tempo leva para produzir um vídeo?",
    a: "Varia com o formato. Peças curtas para redes sociais e teasers saem mais rápido; um brand film ou um documentário de marca passa por pesquisa, roteiro, pré-produção, filmagem e montagem. O cronograma com a data de cada etapa vem junto com o orçamento.",
  },
  {
    q: "Qual a diferença entre vídeo institucional e brand film?",
    a: "O vídeo institucional costuma listar o que a empresa faz: estrutura, números, diferenciais. O brand film conta por que a marca existe, com linguagem de cinema, e faz o público sentir isso. Os dois formatos são produzidos aqui; o que muda é o objetivo.",
    link: {
      href: "/conteudo/video-institucional-vs-brand-film-a-diferenca-real",
      label: "Leia a comparação completa",
    },
  },
  {
    q: "Vocês atendem empresas fora de Porto Alegre?",
    a: "Sim. A base é Porto Alegre, e atendemos toda a Região Metropolitana, a Serra Gaúcha, o Litoral e o interior do Rio Grande do Sul. Projetos em outros estados também são atendidos, com deslocamento da equipe incluído no orçamento.",
  },
  {
    q: "Vocês fazem vídeos para Instagram, Reels e anúncios?",
    a: "Sim. Produzimos campanhas para Meta Ads, teasers verticais e novelas verticais em episódios, pensadas para prender a atenção no celular desde o primeiro segundo.",
    link: { href: "/especialidades/novela-vertical", label: "Conheça a novela vertical" },
  },
  {
    q: "O que é O Código Brasil?",
    a: "É o método de leitura cultural criado por Fabian Baldovino. Ele parte de como o brasileiro decide, pela emoção e pelo pertencimento, e transforma isso em roteiro. É o que diferencia um filme que o público lembra de um vídeo que ele pula.",
    link: { href: "/o-codigo-brasil", label: "Conheça o método" },
  },
];

export default function ProdutoraDeVideoPortoAlegre() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${LOCAL_PAGE_URL}#page`,
        url: LOCAL_PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "pt-BR",
        about: { "@id": SCHEMA_IDS.business },
        isPartOf: { "@id": SCHEMA_IDS.website },
        primaryImageOfPage: `${business.url}${HERO_IMG}`,
      },
      {
        "@type": "FAQPage",
        "@id": `${LOCAL_PAGE_URL}#faq`,
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: business.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Produtora de Vídeo em Porto Alegre",
            item: LOCAL_PAGE_URL,
          },
        ],
      },
    ],
  };

  const ctaUrl = whatsappUrl(
    "Olá Fabian, encontrei seu site procurando uma produtora de vídeo em Porto Alegre e gostaria de um orçamento."
  );

  return (
    <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 flex flex-col gap-6 max-w-7xl mx-auto w-full px-2 sm:px-4">
        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[55%] flex flex-col justify-between gap-8 bg-card rounded-[20px] p-6 md:p-10 border border-white/5">
            <div className="flex flex-col gap-4">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/50"
              >
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-brand-accent font-medium">Porto Alegre</span>
              </nav>
              <h1 className="text-3xl md:text-5xl font-medium leading-tight text-balance">
                Produtora de Vídeo em Porto Alegre
              </h1>
              <p className="text-sm uppercase tracking-widest text-foreground/50">
                Produção audiovisual e brand filmmaking · RS · desde {business.foundingYear}
              </p>
              <div className="h-[1px] bg-accent/30 my-2" />
              <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90">
                Fazemos vídeo institucional, brand film, documentário de marca e vídeos para
                redes sociais para empresas de Porto Alegre e de todo o Rio Grande do Sul. A
                diferença está antes da câmera: cada roteiro nasce de uma leitura de como o seu
                cliente decide, para que o filme seja lembrado, e não pulado.
              </p>
              <p className="text-sm font-light text-foreground/70 border-l-2 border-brand-accent pl-4 py-1">
                Direção de Fabian Baldovino, brand filmmaker e criador do método{" "}
                <Link href="/o-codigo-brasil" className="text-brand-accent underline underline-offset-4">
                  O Código Brasil
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-brand-dark px-6 py-4 rounded-full font-medium hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-brand-accent/10"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Pedir orçamento no WhatsApp
              </a>
              <a
                href="#cases"
                className="border border-white/15 text-foreground/85 px-6 py-4 rounded-full font-medium hover:border-brand-accent/50 hover:text-brand-accent transition-all"
              >
                Ver cases
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="relative w-full h-full min-h-[280px] aspect-[16/10] lg:aspect-auto rounded-[20px] overflow-hidden bg-card border border-white/5">
              <Image
                src={HERO_IMG}
                alt="Fabian Baldovino na Casa de Cultura Mario Quintana, Porto Alegre — produtora de vídeo e brand filmmaking"
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/90">
                <MapPin size={14} aria-hidden="true" /> {business.city}, {business.region}
              </p>
            </div>
          </div>
        </div>

        {/* Serviços */}
        <section className="w-full bg-card rounded-[20px] border border-white/5 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium mb-3">
            Produção audiovisual para empresas
          </h2>
          <p className="text-base md:text-lg font-light text-foreground/75 max-w-3xl mb-8 leading-relaxed">
            Cada formato resolve um problema diferente. A escolha depende de quem precisa ser
            convencido, de quanto tempo você tem para isso e de onde o vídeo vai circular.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicos.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group flex flex-col gap-2 rounded-[16px] border border-white/5 bg-background/40 p-5 hover:border-brand-accent/40 transition-colors"
              >
                <h3 className="text-lg font-medium flex items-center justify-between gap-2 group-hover:text-brand-accent transition-colors">
                  {s.name}
                  <ArrowUpRight size={16} aria-hidden="true" className="opacity-50" />
                </h3>
                <p className="text-sm font-light leading-relaxed text-foreground/70">{s.text}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="w-full bg-card rounded-[20px] border border-white/5 p-6 md:p-10 scroll-mt-6">
          <h2 className="text-2xl md:text-3xl font-medium mb-3">Cases</h2>
          <p className="text-base md:text-lg font-light text-foreground/75 max-w-3xl mb-8 leading-relaxed">
            Indústria, mineração, construção, nutrição e gastronomia. Alguns dos filmes que
            produzimos e o que cada um precisava resolver.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((c) => (
              <Link key={c.slug} href={`/projetos/${c.slug}`} className="group block h-full">
                <article className="border border-white/5 rounded-[20px] overflow-hidden bg-background/40 h-full flex flex-col transition-transform hover:-translate-y-1">
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={c.imgSrc}
                      alt={`${c.name} — ${c.client}, produção de Fabian Baldovino`}
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

        {/* Processo */}
        <section className="w-full bg-card rounded-[20px] border border-white/5 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">Como funciona a produção</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {etapas.map((e, i) => (
              <li key={e.title} className="flex gap-4">
                <span className="text-brand-accent text-2xl font-medium tabular-nums leading-none pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium">{e.title}</h3>
                  <p className="text-sm md:text-base font-light leading-relaxed text-foreground/75">
                    {e.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Por que local */}
        <article className="w-full bg-card rounded-[20px] border border-white/5 p-6 md:p-12">
          <div className="max-w-3xl flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">
              Por que uma produtora de vídeo de Porto Alegre
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/85">
              Uma marca gaúcha fala com um público que tem códigos próprios: o chimarrão
              oferecido na roda, a desconfiança com quem promete demais, o orgulho do que é feito
              aqui. Um filme que ignora isso pode ser tecnicamente perfeito e ainda assim soar
              como propaganda de outro lugar.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/85">
              Produzir daqui também é prático. A equipe, os equipamentos e as locações estão
              perto, o que reduz custo de deslocamento e permite acompanhar a filmagem de perto.
              E quando a história pede outra paisagem, a Serra, o Pampa ou o Litoral estão a
              poucas horas.
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed text-foreground/85">
              Desde {business.foundingYear}, Fabian Baldovino dirige filmes para marcas do Rio
              Grande do Sul e de outros estados. O trabalho combina linguagem de cinema com
              pesquisa de comportamento, para que o vídeo da sua empresa seja assistido até o fim
              e faça o cliente confiar antes mesmo da primeira reunião.
            </p>
          </div>
        </article>

        {/* FAQ */}
        <section className="w-full bg-card rounded-[20px] border border-white/5 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Perguntas frequentes</h2>
          <div className="flex flex-col divide-y divide-white/10 max-w-3xl">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-base md:text-lg font-medium focus:outline-none focus-visible:text-brand-accent">
                  <h3>{f.q}</h3>
                  <span
                    aria-hidden="true"
                    className="text-brand-accent text-xl leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pt-3 flex flex-col gap-2">
                  <p className="text-sm md:text-base font-light leading-relaxed text-foreground/80">
                    {f.a}
                  </p>
                  {f.link && (
                    <Link
                      href={f.link.href}
                      className="text-sm text-brand-accent underline underline-offset-4 hover:text-foreground transition-colors w-fit"
                    >
                      {f.link.label} →
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Contato / NAP */}
        <section className="w-full bg-card rounded-[20px] border border-white/5 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-medium">Vamos conversar sobre o seu filme</h2>
            <p className="text-sm md:text-base font-light text-foreground/75">
              {business.name} · {business.city}, {business.region} ·{" "}
              <a href={whatsappUrl()} className="hover:text-brand-accent transition-colors">
                {business.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${business.email}`} className="hover:text-brand-accent transition-colors">
                {business.email}
              </a>
            </p>
            {(business.googleMapsUrl || business.googleReviewUrl) && (
              <div className="flex flex-wrap gap-4 text-sm pt-1">
                {business.googleMapsUrl && (
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-brand-accent transition-colors"
                  >
                    <MapPin size={14} aria-hidden="true" /> Ver no Google Maps
                  </a>
                )}
                {business.googleReviewUrl && (
                  <a
                    href={business.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-brand-accent transition-colors"
                  >
                    <Star size={14} aria-hidden="true" /> Já trabalhou com a gente? Avalie no Google
                  </a>
                )}
              </div>
            )}
          </div>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent text-brand-dark px-6 py-4 rounded-full font-medium hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 text-base shrink-0"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Pedir orçamento
          </a>
        </section>
      </main>

      <Footer className="mt-8" />
    </div>
  );
}
