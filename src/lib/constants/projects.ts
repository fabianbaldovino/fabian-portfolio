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
};

export const projects: Project[] = [
  { 
    name: "Termolar",
    slug: "termolar",
    imgSrc: "/FOTOS/IMG_0831.webp",
    icon: "Target",
    type: "copy",
    shortDescription: "Sequestro de Atenção",
    tags: ["Novela Vertical", "Thriller Psicológico", "Imersão"],
    content: "O desafio não era fazer propaganda; era sequestrar a atenção. A Termolar precisava de um formato que hackeasse a biologia do consumo móvel. Co-dirigimos 'Ele Não Vai Embora', um thriller psicológico em 4 episódios que trocou a interrupção chata do anúncio pela imersão absoluta. A marca deixou de ser um produto na tela e virou a protagonista de uma narrativa magnética de alta retenção."
  },
  { 
    name: "Seival Sul Mineração", 
    slug: "seival-sul-mineradora",
    imgSrc: "/FOTOS/20260517_121306(0).jpg",
    modalImgSrc: "/FOTOS/trabalhos/seivalsulmineracao.png",
    icon: "Eye",
    type: "copy",
    shortDescription: "Soberania Energética",
    tags: ["Mineração", "Escala Visual Colossal", "Soberania Industrial"],
    content: "A Seival Sul não extrai apenas toneladas de minério na Mina de Candiota; ela é a força motriz que garante a segurança energética de uma região inteira. Abandonamos o formato de 'vídeo corporativo' e criamos um manifesto de soberania industrial. Através de uma escala visual colossal, transformamos a poeira e o aço da operação em um ativador instintivo de confiança máxima para parceiros e investidores do mercado de capitais."
  },
  { 
    name: "Quick House",
    slug: "quick-house",
    imgSrc: "/FOTOS/DSC00053.jpg.jpeg",
    modalImgSrc: "/FOTOS/trabalhos/hospital.png",
    icon: "Compass",
    type: "copy",
    shortDescription: "Velocidade vs. Solidez Monumental",
    tags: ["Construção Modular", "Captações Aéreas", "Construção Civil"],
    content: "A magia da construção modular (SteelPanel) permite erguer hospitais e a sede da COP-30 em velocidade recorde. Mas para o instinto humano, velocidade pode soar como fragilidade se não for ancorada em grandeza. Nossa direção de arte operou uma expansão das fronteiras visuais da Quick House: do micro-detalhe da precisão do aço às captações aéreas monumentais. Construímos a semiótica definitiva de um império modular imbatível."
  },
  { 
    name: "Copelmi", 
    slug: "copelmi",
    imgSrc: "/FOTOS/trabalhos/copelmi.png",
    icon: "Target",
    type: "copy",
    shortDescription: "O Peso da Liderança",
    tags: ["Energia", "Mineração", "Autoridade Pacífica"],
    content: "Uma das maiores potências do setor energético brasileiro não precisa provar seu tamanho, precisa orquestrar o seu legado. Nossa missão foi blindar a marca Copelmi, traduzindo o peso brutal de sua operação em uma percepção de autoridade pacífica e segura. Cada frame foi milimetricamente desenhado para transmitir a solidez institucional que apenas os líderes absolutos podem sustentar."
  },
  { 
    name: "Ristorante Fontana", 
    slug: "ristorante-fontana",
    imgSrc: "/FOTOS/trabalhos/fontana.jpg",
    icon: "Eye",
    type: "copy",
    shortDescription: "O Acolhimento do Primeiro Frame",
    tags: ["META ADS", "Neuro-visual", "Pertencimento"],
    content: "A escolha de um restaurante não acontece no estômago, acontece no sistema límbico. O Ristorante Fontana não precisava apenas mostrar pratos; precisava ancorar a sensação de 'Casa' e afeto. Orquestramos 4 filmes curtos para o META ADS projetados com um 'hook' neuro-visual de acolhimento nos primeiros 3 segundos, transformando o scroll automático em puro desejo de pertencimento."
  },
  { 
    name: "Wedy Nutrition", 
    slug: "wedy-nutrition",
    imgSrc: "/FOTOS/trabalhos/wedy nutrition.png",
    icon: "Compass",
    type: "copy",
    shortDescription: "Tribo e Identidade",
    tags: ["Suplementação Esportiva", "Identidade Visceral", "Tribo Implacável"],
    content: "O mercado de suplementação é um oceano vermelho de promessas estéticas vazias. Para a campanha #WedyPraTodos, abandonamos a linguagem fria dos laboratórios e acionamos o arquétipo do herói cotidiano. Nossa cinematografia forjou uma identidade visceral que não vende apenas performance, mas adoção por uma tribo implacável de força e disciplina."
  },
  { 
    name: "Bastidores", 
    slug: "bastidores",
    imgSrc: "/FOTOS/20260517_103203.jpg",
    icon: "Clapperboard",
    type: "gallery",
    shortDescription: "Making Of e Processo Criativo",
    tags: ["Making Of", "Processo Criativo", "Retaguarda Invisível"],
    content: [
      "/FOTOS/2.jpg",
      "/FOTOS/20260503_093522.jpg",
      "/FOTOS/20260606_092002.jpg",
      "/FOTOS/3.jpg",
      "/FOTOS/DSC00053.jpg.jpeg",
      "/FOTOS/20260522_093422.jpg"
    ]
  }
];
