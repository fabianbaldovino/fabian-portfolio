export type Project = { 
  name: string; 
  slug: string;
  imgSrc: string;
  modalImgSrc?: string;
  icon?: string;
  type: "copy" | "gallery";
  shortDescription?: string;
  content: string | string[];
  tags: string[];
  /** URLs completas do Instagram (posts/reels) */
  instagramUrls?: string[];
  /** IDs de vídeos do YouTube */
  youtubeIds?: string[];
  /** Rótulo das peças no player: "Episódio" (padrão) ou "Filme" */
  videoNoun?: string;
};

export const projects: Project[] = [
  { 
    name: "Termolar",
    slug: "termolar",
    imgSrc: "/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rs.webp",
    modalImgSrc: "/FOTOS/fabian_baldovino_prodcao_audiovisual_porto_alegre_rs.jpg",
    icon: "Target",
    type: "copy",
    shortDescription: "Novela Vertical",
    tags: ["Novela Vertical", "Thriller Psicológico", "Imersão"],
    content: "A Termolar nos desafiou a repensar a interação com o público mobile. O resultado foi um thriller psicológico em 4 episódios. Abandonamos a publicidade convencional para criar uma novela vertical de alta retenção. Nesse formato, o produto não interrompe a experiência; ele conduz uma história envolvente escrita por Renata Maltz e eleva a percepção de valor da marca através do entretenimento.",
    instagramUrls: [
      "https://www.instagram.com/p/DYfosNtJSeg/",
      "https://www.instagram.com/p/DZGQom0p7Lm/",
      "https://www.instagram.com/p/DZcyaBDxAz1/",
      "https://www.instagram.com/p/DaEFFErp1Kh/",
    ],
  },
  { 
    name: "Seival Sul Mineração", 
    slug: "seival-sul-mineradora",
    imgSrc: "/FOTOS/fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.webp",
    modalImgSrc: "/FOTOS/trabalhos/seivalsulmineracao.png",
    icon: "Eye",
    type: "copy",
    shortDescription: "Soberania Energética",
    tags: ["Mineração", "Escala Visual Colossal", "Soberania Industrial"],
    content: "A Seival Sul não extrai apenas toneladas de minério na Mina de Candiota; ela é a força motriz que garante a segurança energética de uma região inteira. Abandonamos o formato de 'vídeo corporativo' e criamos um manifesto de soberania industrial. Através de uma escala visual colossal, transformamos a poeira e o aço da operação em um ativador instintivo de confiança máxima para parceiros e investidores do mercado de capitais.",
  },
  { 
    name: "Quick House",
    slug: "quick-house",
    imgSrc: "/FOTOS/fabian_baldovino_montevideo_uruguay_pilotando_drone.webp",
    modalImgSrc: "/FOTOS/trabalhos/hospital.png",
    icon: "Compass",
    type: "copy",
    shortDescription: "Velocidade vs. Solidez Monumental",
    tags: ["Construção Modular", "Captações Aéreas", "Construção Civil"],
    content: "A magia da construção modular (SteelPanel) permite erguer hospitais e a sede da COP-30 em velocidade recorde. Mas para o instinto humano, velocidade pode soar como fragilidade se não for ancorada em grandeza. Nossa direção de arte operou uma expansão das fronteiras visuais da Quick House: do micro-detalhe da precisão do aço às captações aéreas monumentais. Construímos a semiótica definitiva de um império modular imbatível.",
    youtubeIds: ["a01rHmvCfN4", "_ijnZb_6aHA"],
  },
  { 
    name: "Copelmi", 
    slug: "copelmi",
    imgSrc: "/FOTOS/trabalhos/copelmi.png",
    icon: "Target",
    type: "copy",
    shortDescription: "O Peso da Liderança",
    tags: ["Energia", "Mineração", "Autoridade Pacífica"],
    content: "Uma das maiores potências do setor energético brasileiro não precisa provar seu tamanho, precisa consolidar o seu legado. Nossa missão foi fortalecer a percepção da Copelmi, traduzindo o peso real de sua operação em uma autoridade pacífica e segura que dispensa argumentos. Cada frame foi milimetricamente desenhado para transmitir a solidez institucional que apenas os líderes absolutos podem sustentar.",
  },
  { 
    name: "Ristorante Fontana", 
    slug: "ristorante-fontana",
    imgSrc: "/FOTOS/trabalhos/fontana.jpg",
    icon: "Eye",
    type: "copy",
    shortDescription: "O Acolhimento do Primeiro Frame",
    tags: ["META ADS", "Neuro-visual", "Pertencimento"],
    content: "Decisões gastronômicas nascem da emoção, não da fome. Para o Ristorante Fontana, fomos além da estética culinária e ancoramos a marca no conceito de 'Casa' e afeto. Produzimos 4 filmes projetados para capturar a atenção nos primeiros segundos através de um gatilho de acolhimento.",
    videoNoun: "Filme",
    instagramUrls: [
      "https://www.instagram.com/p/DYQQL3ipo15/",
      "https://www.instagram.com/p/DZiF3xxJ9cr/",
      "https://www.instagram.com/p/DZFqX-Ap3CU/",
    ],
  },
  { 
    name: "Wedy Nutrition", 
    slug: "wedy-nutrition",
    imgSrc: "/FOTOS/trabalhos/wedy nutrition.png",
    icon: "Compass",
    type: "copy",
    shortDescription: "Tribo e Identidade",
    tags: ["Suplementação Esportiva", "Identidade de Marca", "Comunidade"],
    content: "O mercado de suplementação é um oceano vermelho de promessas estéticas vazias. Para a campanha #WedyPraTodos, abandonamos a linguagem fria dos laboratórios e acionamos o arquétipo do herói cotidiano. Nossa cinematografia construiu uma identidade autêntica que não vende apenas performance, mas pertencimento a uma comunidade comprometida com força e disciplina.",
    videoNoun: "Filme",
    instagramUrls: [
      "https://www.instagram.com/p/DNVwaOb1cBU/",
    ],
  },
  { 
    name: "Bastidores", 
    slug: "bastidores",
    imgSrc: "/FOTOS/fabian_baldovino_casa_de_cultura_mario_quintana_producao_audiovisual_porto_alegre_rs.webp",
    icon: "Clapperboard",
    type: "gallery",
    shortDescription: "Making Of e Processo Criativo",
    tags: ["Making Of", "Processo Criativo", "Direção em Campo"],
    content: [
      "/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rio_grande_do_sul.webp",
      "/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rio_grande_do_sul_cinema.webp",
      "/FOTOS/fabian_baldovino_feir_ecologia_bom_fim_porto_alegre_rio_grande_do_sul.webp",
      "/FOTOS/fabian_baldovino_porto_alegre_rio_grande_do_sul_moinhos_de_vento.webp",
      "/FOTOS/fabian_baldovino_montevideo_uruguay_pilotando_drone.webp",
      "/FOTOS/fabian_baldovino_moinhos_de_vento_porto_alegre_Rio_grande_do_sul.webp"
    ]
  }
];