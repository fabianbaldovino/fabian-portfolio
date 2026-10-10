/**
 * Cards de destaque da homepage (ProjectsSection).
 *
 * A narrativa completa de cada case vive em `portfolioProjects.ts`, que é o que
 * alimenta as rotas /projetos/[slug]. Este arquivo guarda só os rótulos curtos
 * que cabem no overlay do card — nome enxuto e uma linha de formato.
 */
export type Project = {
  name: string;
  slug: string;
  imgSrc: string;
  shortDescription: string;
};

export const projects: Project[] = [
  {
    name: "Termolar",
    slug: "termolar",
    imgSrc: "/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rs.webp",
    shortDescription: "Novela Vertical",
  },
  {
    name: "Seival Sul Mineração",
    slug: "seival-sul-mineradora",
    imgSrc: "/FOTOS/fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.webp",
    shortDescription: "Soberania Energética",
  },
  {
    name: "Quick House",
    slug: "quick-house",
    imgSrc: "/FOTOS/trabalhos/quickhouse.png",
    shortDescription: "Construção Rápida de Alto Padrão",
  },
  {
    name: "Copelmi",
    slug: "copelmi",
    imgSrc: "/FOTOS/trabalhos/copelmi.png",
    shortDescription: "O Peso da Liderança",
  },
  {
    name: "Ristorante Fontana",
    slug: "ristorante-fontana",
    imgSrc: "/FOTOS/trabalhos/fontana.jpg",
    shortDescription: "O Acolhimento do Primeiro Frame",
  },
  {
    name: "Wedy Nutrition",
    slug: "wedy-nutrition",
    imgSrc: "/FOTOS/trabalhos/wedy nutrition.png",
    shortDescription: "Tribo e Identidade",
  },
];
