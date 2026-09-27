export type PortfolioProject = {
  slug: string;
  name: string;
  client: string;
  imgSrc: string;
  tags: string[];
  description: string;
  deliverable: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "termolar-novela-vertical",
    name: "Termolar — Novela Vertical de 4 Episódios",
    client: "Termolar",
    imgSrc: "/FOTOS/trabalhos/ele nao foi embora.jpg",
    tags: ["Novela Vertical", "4 Episódios", "Thriller Psicológico"],
    deliverable: "Novela vertical · 4 episódios",
    description: "O desafio não era fazer propaganda; era sequestrar a atenção. A Termolar precisava de um formato que hackeasse a biologia do consumo atual. Dirigimos 'Ele Não Vai Embora', um thriller psicológico em 4 episódios que trocou a interrupção chata do anúncio pela imersão absoluta. A marca deixou de ser um produto na tela e virou a protagonista de uma narrativa magnética que o espectador não conseguia parar de assistir.",
  },
  {
    slug: "ristorante-fontana-campanha",
    name: "Campanha de Redes Sociais",
    client: "Ristorante Fontana",
    imgSrc: "/FOTOS/trabalhos/fontana.jpg",
    tags: ["Campanha de 4 Filmes", "META ADS", "Redes Sociais"],
    deliverable: "4 filmes · META ADS",
    description: "A escolha de um restaurante não acontece no estômago, acontece no sistema límbico. O Ristorante Fontana não precisava apenas mostrar pratos; precisava ancorar a sensação de 'Casa' e acolhimento. Orquestramos 4 filmes curtos para o META ADS projetados com um 'hook' neuro-visual nos primeiros 3 segundos. O resultado é um convite irresistível que transforma o scroll instintivo em desejo de pertencimento e conversão instantânea.",
  },
  {
    slug: "wedy-nutrition-wedy-pra-todos",
    name: "#WedyPraTodos",
    client: "Wedy Nutrition",
    imgSrc: "/FOTOS/trabalhos/wedy nutrition.png",
    tags: ["Série de Filmes", "Suplementação Esportiva", "Campanha de Marca"],
    deliverable: "Série de filmes · Campanha",
    description: "O mercado de suplementação é um oceano vermelho de promessas estéticas vazias. Para a campanha #WedyPraTodos, abandonamos a linguagem fria dos laboratórios e acionamos o arquétipo do herói cotidiano. Nossa cinematografia forjou uma identidade visceral que não vende apenas performance, mas adoção por uma tribo implacável de força e disciplina.",
  },
  {
    slug: "quick-house-videos-institucionais",
    name: "Vídeos Institucionais",
    client: "Quick House",
    imgSrc: "/FOTOS/trabalhos/quickhouse.png",
    tags: ["Vídeo Institucional", "Construção à Seco", "Escala Nacional"],
    deliverable: "Dezenas de vídeos · Institucional",
    description: "A magia da construção modular (SteelPanel) permite erguer hospitais e a sede da COP-30 em velocidade recorde. Mas para o instinto humano, velocidade pode soar como fragilidade se não for ancorada em grandeza. Nossa direção de arte operou uma expansão das fronteiras visuais da Quick House: do micro-detalhe da precisão do aço às captações aéreas monumentais. Construímos a semiótica definitiva de um império modular imbatível.",
  },
  {
    slug: "copelmi-video-institucional",
    name: "Vídeo Institucional",
    client: "Copelmi",
    imgSrc: "/FOTOS/trabalhos/copelmi.png",
    tags: ["Vídeo Institucional", "Energia", "Mineração"],
    deliverable: "Produção institucional",
    description: "Uma das maiores potências do setor energético brasileiro não precisa provar seu tamanho, precisa orquestrar o seu legado. Nossa missão foi blindar a marca Copelmi, traduzindo o peso brutal de sua operação em uma percepção de autoridade pacífica e segura. Cada frame foi milimetricamente desenhado para transmitir a solidez institucional que apenas os líderes absolutos podem sustentar.",
  },
  {
    slug: "seival-sul-mineracao-video-institucional",
    name: "Vídeo Institucional",
    client: "Seival Sul Mineração",
    imgSrc: "/FOTOS/trabalhos/seivalsulmineracao.png",
    tags: ["Vídeo Institucional", "Mineração", "Sul do Brasil"],
    deliverable: "1 filme · Institucional",
    description: "A Seival Sul não extrai apenas toneladas de minério na Mina de Candiota; ela é a força motriz que garante a segurança energética de uma região inteira. Abandonamos o formato de 'vídeo corporativo' e criamos um manifesto de soberania industrial. Através de uma escala visual colossal, transformamos a poeira e o aço da operação em um ativador instintivo de confiança máxima para parceiros e investidores do mercado de capitais.",
  },
];
