export type PortfolioProject = {
  slug: string;
  name: string;
  client: string;
  imgSrc: string;
  tags: string[];
  description: string;
  deliverable: string;
  /** URLs completas do Instagram (posts/reels) */
  instagramUrls?: string[];
  /** IDs de vídeos do YouTube */
  youtubeIds?: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "termolar",
    name: "Termolar — Novela Vertical de 4 Episódios",
    client: "Termolar",
    imgSrc: "/FOTOS/trabalhos/ele nao foi embora.jpg",
    tags: ["Novela Vertical", "4 Episódios", "Thriller Psicológico"],
    deliverable: "Novela vertical · 4 episódios",
    description: "A Termolar nos desafiou a repensar a interação com o público mobile. O resultado foi um thriller psicológico em 4 episódios. Abandonamos a publicidade convencional para criar uma novela vertical de alta retenção. Nesse formato, o produto não interrompe a experiência; ele conduz uma história envolvente escrita por Renata Maltz e eleva a percepção de valor da marca através do entretenimento.",
    instagramUrls: [
      "https://www.instagram.com/p/DYfosNtJSeg/",
      "https://www.instagram.com/p/DZGQom0p7Lm/",
      "https://www.instagram.com/p/DZcyaBDxAz1/",
      "https://www.instagram.com/p/DaEFFErp1Kh/",
    ],
  },
  {
    slug: "ristorante-fontana",
    name: "Campanha de Redes Sociais",
    client: "Ristorante Fontana",
    imgSrc: "/FOTOS/trabalhos/fontana.jpg",
    tags: ["Campanha de 4 Filmes", "META ADS", "Redes Sociais"],
    deliverable: "4 filmes · META ADS",
    description: "Decisões gastronômicas nascem da emoção, não da fome. Para o Ristorante Fontana, fomos além da estética culinária e ancoramos a marca no conceito de 'Casa' e afeto. Produzimos 4 filmes projetados para capturar a atenção nos primeiros segundos através de um gatilho de acolhimento.",
    instagramUrls: [
      "https://www.instagram.com/p/DYQQL3ipo15/",
      "https://www.instagram.com/p/DZiF3xxJ9cr/",
      "https://www.instagram.com/p/DZFqX-Ap3CU/",
    ],
  },
  {
    slug: "wedy-nutrition",
    name: "#WedyPraTodos",
    client: "Wedy Nutrition",
    imgSrc: "/FOTOS/trabalhos/wedy nutrition.png",
    tags: ["Série de Filmes", "Suplementação Esportiva", "Campanha de Marca"],
    deliverable: "Série de filmes · Campanha",
    description: "O mercado de suplementação é um oceano vermelho de promessas estéticas vazias. Para a campanha #WedyPraTodos, abandonamos a linguagem fria dos laboratórios e acionamos o arquétipo do herói cotidiano. Nossa cinematografia construiu uma identidade autêntica que não vende apenas performance, mas pertencimento a uma comunidade comprometida com força e disciplina.",
    instagramUrls: [
      "https://www.instagram.com/p/DNVwaOb1cBU/",
    ],
  },
  {
    slug: "quick-house",
    name: "Vídeos Institucionais",
    client: "Quick House",
    imgSrc: "/FOTOS/trabalhos/quickhouse.png",
    tags: ["Vídeo Institucional", "Construção à Seco", "Escala Nacional"],
    deliverable: "Dezenas de vídeos · Institucional",
    description: "A magia da construção modular (SteelPanel) permite erguer hospitais e a sede da COP-30 em velocidade recorde. Mas para o instinto humano, velocidade pode soar como fragilidade se não for ancorada em grandeza. Nossa direção de arte operou uma expansão das fronteiras visuais da Quick House: do micro-detalhe da precisão do aço às captações aéreas monumentais. Construímos a semiótica definitiva de um império modular imbatível.",
    youtubeIds: ["a01rHmvCfN4", "_ijnZb_6aHA"],
  },
  {
    slug: "copelmi",
    name: "Vídeo Institucional",
    client: "Copelmi",
    imgSrc: "/FOTOS/trabalhos/copelmi.png",
    tags: ["Vídeo Institucional", "Energia", "Mineração"],
    deliverable: "Produção institucional",
    description: "Uma das maiores potências do setor energético brasileiro não precisa provar seu tamanho, precisa consolidar o seu legado. Nossa missão foi fortalecer a percepção da Copelmi, traduzindo o peso real de sua operação em uma autoridade pacífica e segura que dispensa argumentos. Cada frame foi milimetricamente desenhado para transmitir a solidez institucional que apenas os líderes absolutos podem sustentar.",
  },
  {
    slug: "seival-sul-mineradora",
    name: "Vídeo Institucional",
    client: "Seival Sul Mineração",
    imgSrc: "/FOTOS/trabalhos/seivalsulmineracao.png",
    tags: ["Vídeo Institucional", "Mineração", "Sul do Brasil"],
    deliverable: "1 filme · Institucional",
    description: "A Seival Sul não extrai apenas toneladas de minério na Mina de Candiota; ela é a força motriz que garante a segurança energética de uma região inteira. Abandonamos o formato de 'vídeo corporativo' e criamos um manifesto de soberania industrial. Através de uma escala visual colossal, transformamos a poeira e o aço da operação em um ativador instintivo de confiança máxima para parceiros e investidores do mercado de capitais.",
  },
];
