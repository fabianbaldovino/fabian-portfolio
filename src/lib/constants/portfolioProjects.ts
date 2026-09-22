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
    description: "Novela vertical em 4 episódios de thriller psicológico intitulada 'Ele Não Vai Embora', co-dirigida com Renara Maltz para a Termolar, realizada na cidade de Porto Alegre, RS. Uma narrativa seriada que une retenção de alta intensidade, emoção e posicionamento de marca de forma inegável.",
  },
  {
    slug: "ristorante-fontana-campanha",
    name: "Campanha de Redes Sociais",
    client: "Ristorante Fontana",
    imgSrc: "/FOTOS/trabalhos/fontana.jpg",
    tags: ["Campanha de 4 Filmes", "META ADS", "Redes Sociais"],
    deliverable: "4 filmes · META ADS",
    description: "O Ristorante Fontana nos contratou para uma série de 4 filmes focados nos seus principais serviços: Tele Entrega, Eventos, Buffets e Pratos Especiais. Focamos em uma narrativa acolhedora onde o espectador percebe o valor da marca já no primeiro frame. A campanha foi orquestrada para tração via META ADS, com hook nos primeiros 3 segundos para capturar o consumidor no Instagram e Facebook.",
  },
  {
    slug: "wedy-nutrition-wedy-pra-todos",
    name: "#WedyPraTodos",
    client: "Wedy Nutrition",
    imgSrc: "/FOTOS/trabalhos/wedy nutrition.png",
    tags: ["Série de Filmes", "Suplementação Esportiva", "Campanha de Marca"],
    deliverable: "Série de filmes · Campanha",
    description: "Série de filmes para a campanha #WedyPraTodos da marca de suplementação esportiva Wedy Nutrition. Narrativas fortes constroem marcas fortes — e foi exatamente isso que entregamos: uma campanha que une identidade atlética com propósito de marca, criando conexão emocional com o consumidor.",
  },
  {
    slug: "quick-house-videos-institucionais",
    name: "Vídeos Institucionais",
    client: "Quick House",
    imgSrc: "/FOTOS/trabalhos/quickhouse.png",
    tags: ["Vídeo Institucional", "Construção à Seco", "Escala Nacional"],
    deliverable: "Dezenas de vídeos · Institucional",
    description: "Além do vídeo institucional oficial, realizamos dezenas de vídeos para a maior empresa de construção à seco no Brasil, a Quick House. Cada produção foi desenvolvida para comunicar escala, confiabilidade e liderança — transformando a grandeza operacional da empresa em percepção de alto valor para clientes e parceiros.",
  },
  {
    slug: "copelmi-video-institucional",
    name: "Vídeo Institucional",
    client: "Copelmi",
    imgSrc: "/FOTOS/trabalhos/copelmi.png",
    tags: ["Vídeo Institucional", "Energia", "Mineração"],
    deliverable: "Produção institucional",
    description: "Produção audiovisual institucional para a Copelmi, uma das principais empresas do setor energético e de mineração do Brasil. Cada frame foi concebido para transmitir solidez, escala e propósito — construindo uma percepção de autoridade que o mercado reconhece antes mesmo de qualquer palavra.",
  },
  {
    slug: "seival-sul-mineracao-video-institucional",
    name: "Vídeo Institucional",
    client: "Seival Sul Mineração",
    imgSrc: "/FOTOS/trabalhos/seivalsulmineracao.png",
    tags: ["Vídeo Institucional", "Mineração", "Sul do Brasil"],
    deliverable: "1 filme · Institucional",
    description: "Produção de um vídeo institucional para a Seival Sul Mineração, empresa referência no setor mineral da região Sul do Brasil. A obra traduziu a força operacional da empresa em uma narrativa visual de alto impacto, posicionando a marca com a autoridade que ela representa no mercado.",
  },
];
