export type PortfolioProject = {
  slug: string;
  name: string;
  client: string;
  imgSrc: string;
  tags: string[];
  description: string;
  deliverable: string;
  /** Slug da especialidade que este case comprova — gera link interno recíproco */
  especialidade?: string;
  /** Narrativa longa do case. "### " vira <h2>; **negrito** e *itálico* suportados */
  narrative?: string[];
  /** URLs completas do Instagram (posts/reels) */
  instagramUrls?: string[];
  /** IDs de vídeos do YouTube */
  youtubeIds?: string[];
  /** Rótulo das peças no player: "Episódio" (padrão) ou "Filme" */
  videoNoun?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "termolar",
    name: "Termolar — Novela Vertical de 4 Episódios",
    client: "Termolar",
    imgSrc: "/FOTOS/trabalhos/ele nao foi embora.jpg",
    tags: ["Novela Vertical", "4 Episódios", "Thriller Psicológico"],
    deliverable: "Novela vertical · 4 episódios",
    especialidade: "novela-vertical",
    description: "A Termolar nos desafiou a repensar a interação com o público mobile. O resultado foi um thriller psicológico em 4 episódios. Abandonamos a publicidade convencional para criar uma novela vertical de alta retenção. Nesse formato, o produto não interrompe a experiência; ele conduz uma história envolvente escrita por Renata Maltz e eleva a percepção de valor da marca através do entretenimento.",
    narrative: [
      "### O desafio",
      "Quando a Termolar chegou ao projeto, o pedido parecia simples: um brand film.",
      "O que estava por baixo era mais sofisticado — e mais raro. A Termolar não queria ser o herói da narrativa. Ela queria ser a cena.",
      "Não o produto que resolve o problema. O elemento cultural que pertence àquele mundo.",
      "### A abordagem",
      "Esse briefing tem nome: **presença sem protagonismo**. É o nível mais difícil de brand filmmaking porque exige que a marca confie o suficiente na própria identidade para não precisar anunciá-la.",
      "O trabalho do Código Brasil aqui foi encontrar o código de pertencimento — a frequência emocional que a marca compartilha com a cena onde ela existe. Não o que a Termolar faz ou oferece, mas onde ela naturalmente *está*, como parte do tecido cultural daquele universo.",
      "O filme foi construído para que o espectador sinta a presença da marca antes de nomeá-la. É a diferença entre ser apresentado a alguém e reconhecer alguém que já faz parte da sua vida.",
      "### O resultado",
      "Uma marca que não precisa se explicar já venceu metade da batalha de comunicação. A Termolar saiu desse processo com um brand film que não parece publicidade — parece documento.",
      "Esse é o objetivo mais difícil de atingir. E o mais duradouro.",
    ],
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
    especialidade: "teaser-cinematografico",
    description: "Decisões gastronômicas nascem da emoção, não da fome. Para o Ristorante Fontana, fomos além da estética culinária e ancoramos a marca no conceito de 'Casa' e afeto. Produzimos 4 filmes projetados para capturar a atenção nos primeiros segundos através de um gatilho de acolhimento.",
    narrative: [
      "### O desafio",
      "O feed das redes sociais é um massacre visual onde restaurantes competem por décimos de segundo mostrando apenas comida.",
      "No entanto, as pessoas não vão a um restaurante Premium apenas para se alimentar. Elas vão em busca de um estado de espírito. Como furar a bolha de vídeos gastronômicos com imagens que não apenas abram o apetite, mas criem uma vontade incontrolável de estar lá?",
      "### A abordagem",
      "O código aqui é o **Acolhimento Magnético**.",
      "Não filmamos a receita, filmamos o ritual. Usando princípios neuro-visuais aplicados no Código Brasil, estruturamos os 4 filmes focando em texturas, iluminação quente, e principalmente, nos gestos de preparo que ativam memórias familiares de conforto. A comida tornou-se o resultado visual de um sentimento de 'Casa', um espaço onde o tempo desacelera.",
      "### O resultado",
      "A campanha quebrou a barreira do META ADS e performou muito acima da métrica padrão do setor gastronômico.",
      "As visualizações não paravam no prato — as pessoas engajavam com a atmosfera construída, gerando reservas motivadas não só pela qualidade culinária, mas pela identificação emocional com o ambiente caloroso do Ristorante Fontana.",
    ],
    videoNoun: "Filme",
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
    especialidade: "teaser-cinematografico",
    description: "O mercado de suplementação é um oceano vermelho de promessas estéticas vazias. Para a campanha #WedyPraTodos, abandonamos a linguagem fria dos laboratórios e acionamos o arquétipo do herói cotidiano. Nossa cinematografia construiu uma identidade autêntica que não vende apenas performance, mas pertencimento a uma comunidade comprometida com força e disciplina.",
    narrative: [
      "### O desafio",
      "Marcas de suplementos vivem repetindo a mesma estética plástica de ginásios e super-atletas impossíveis de alcançar.",
      "O público de massa já não acredita na promessa de corpos irreais e suplementação em pó desconectada da vida real. A Wedy precisava de algo novo: trazer sua qualidade impecável para a realidade do treino brutal de pessoas normais que buscam superar os próprios limites.",
      "### A abordagem",
      "Desbloqueamos o código da **Superação Realista**.",
      "O projeto de Brand Filmmaking substituiu o ideal de vaidade por um manifesto de esforço e disciplina — o verdadeiro Suor, como aponta O Código Brasil. Com uma edição de cortes rápidos, trilha industrial imersiva e captação crua e de alto contraste, a narrativa não falou sobre a fórmula do whey protein, mas sobre a mentalidade blindada de quem usa o produto. Trouxemos a suplementação da esfera do 'milagre' para a esfera do 'processo inegociável'.",
      "### O resultado",
      "A Wedy conseguiu algo muito raro: construir **Tribo**. A audiência enxergou os próprios valores traduzidos na campanha. Em vez de disputar preço na prateleira, a marca assumiu uma identidade emocional que gera defensores viscerais do movimento.",
    ],
    videoNoun: "Filme",
    instagramUrls: [
      "https://www.instagram.com/p/DNVwaOb1cBU/",
    ],
  },
  {
    slug: "quick-house",
    name: "Vídeo Institucional — Construção de Alto Padrão",
    client: "Quick House",
    imgSrc: "/FOTOS/trabalhos/quickhouse.png",
    tags: ["Vídeo Institucional", "Construção à Seco", "Escala Nacional"],
    deliverable: "Dezenas de vídeos · Institucional",
    especialidade: "brand-film",
    description: "A magia da construção modular (SteelPanel) permite erguer hospitais e a sede da COP-30 em velocidade recorde. Mas para o instinto humano, velocidade pode soar como fragilidade se não for ancorada em grandeza. Nossa direção de arte operou uma expansão das fronteiras visuais da Quick House: do micro-detalhe da precisão do aço às captações aéreas monumentais. Construímos a semiótica definitiva de um império modular imbatível.",
    narrative: [
      "### O desafio",
      "Fasano. JHSF. Os nomes mais exigentes da construção de alto padrão no Brasil.",
      "Quando você executa projetos para essas marcas, você não está só construindo — você está participando da criação de lugares que vão definir o padrão de excelência por décadas. A Quick House opera nesse nível. O desafio era fazer um brand film à altura disso.",
      "Não demonstrar competência — comunicar **grandeza**.",
      "### A abordagem",
      "O código da Quick House é *inteligência construtiva* — a capacidade de entregar velocidade sem sacrificar precisão, e precisão sem sacrificar escala. Num mercado onde rapidez e qualidade são frequentemente apresentadas como opostos, a Quick House é a prova de que essa dicotomia é falsa.",
      "O trabalho do Código Brasil aqui foi mostrar a lógica por trás da entrega: o sistema, o raciocínio, a decisão que acontece antes de qualquer material ser colocado no lugar. A grandeza não está no resultado final — está no processo que o torna inevitável.",
      "O filme foi construído para que o espectador sinta o que é trabalhar com alguém que já pensou em tudo antes que você precisasse pensar.",
      "### O resultado",
      "Marcas como Fasano e JHSF não escolhem parceiros por preço ou prazo — escolhem por confiança. O brand film da Quick House faz exatamente o que esse posicionamento exige: estabelece confiança antes da primeira conversa comercial.",
      "Isso é o que brand filmmaking resolve quando o cliente opera no nível mais alto do mercado.",
    ],
    youtubeIds: ["a01rHmvCfN4", "_ijnZb_6aHA"],
  },
  {
    slug: "copelmi",
    name: "Vídeo Institucional — O Peso da Liderança",
    client: "Copelmi",
    imgSrc: "/FOTOS/trabalhos/copelmi.png",
    tags: ["Vídeo Institucional", "Energia", "Mineração"],
    deliverable: "Produção institucional",
    especialidade: "brand-documentary",
    description: "Uma das maiores potências do setor energético brasileiro não precisa provar seu tamanho, precisa consolidar o seu legado. Nossa missão foi fortalecer a percepção da Copelmi, traduzindo o peso real de sua operação em uma autoridade pacífica e segura que dispensa argumentos. Cada frame foi milimetricamente desenhado para transmitir a solidez institucional que apenas os líderes absolutos podem sustentar.",
    narrative: [
      "### O desafio",
      "Quando você já é um líder histórico no mercado de energia, a sua comunicação não precisa mais 'vender' ou 'explicar'.",
      "Marcas gigantescas como a Copelmi sofrem de um problema de representação: qualquer coisa que não seja impecável diminui o peso real que elas têm.",
      "O desafio não era convencer, mas projetar um legado com a mesma densidade da história da empresa, sem soar arrogante ou antiquado.",
      "### A abordagem",
      "Descobrimos o código da **Autoridade Pacífica**. O verdadeiro poder não grita.",
      "Em vez de locutores de voz agressiva e textos de venda, a estratégia pelo Código Brasil foi usar o respiro e o tempo a favor da imagem. Enquadramentos fixos, movimentação majestosa, e uma edição que não tem pressa. Cada imagem é um monumento. Ao retratarmos a imensidão das instalações energéticas e a solidez dos times, entregamos o silêncio confortável de quem sabe o tamanho que tem.",
      "### O resultado",
      "Um posicionamento que cala qualquer questionamento antes que ele comece. O brand film da Copelmi se transformou em uma credencial imediata que afirma a posição da empresa como base de infraestrutura na mente do público, elevando sua herança a um patamar cinematográfico.",
    ],
  },
  {
    slug: "seival-sul-mineradora",
    name: "Vídeo Institucional — Soberania Energética",
    client: "Seival Sul Mineração",
    imgSrc: "/FOTOS/trabalhos/seivalsulmineracao.png",
    tags: ["Vídeo Institucional", "Mineração", "Sul do Brasil"],
    deliverable: "1 filme · Institucional",
    especialidade: "brand-documentary",
    description: "A Seival Sul não extrai apenas toneladas de minério na Mina de Candiota; ela é a força motriz que garante a segurança energética de uma região inteira. Abandonamos o formato de 'vídeo corporativo' e criamos um manifesto de soberania industrial. Através de uma escala visual colossal, transformamos a poeira e o aço da operação em um ativador instintivo de confiança máxima para parceiros e investidores do mercado de capitais.",
    narrative: [
      "### O desafio",
      "O setor de mineração e energia carrega um estigma de comunicação brutalista. O mercado estava acostumado a vídeos operacionais frios que listavam maquinários e metros cúbicos extraídos.",
      "A Seival Sul não precisava provar que tinha máquinas. Ela precisava que a sociedade, investidores e parceiros sentissem o peso existencial da sua operação na matriz energética. O desafio era transformar toneladas de carvão e aço em confiança.",
      "### A abordagem",
      "O código aqui é a **Soberania Intransponível**. Entramos na Mina de Candiota não como publicitários, mas como documentaristas do peso da indústria pesada.",
      "O roteiro e a captação do Código Brasil trataram os trabalhadores e a própria mina como entidades colossais. Filmamos não a 'operação', mas o movimento tectônico humano que mantém a luz acesa. O somatório entre decupagem cinematográfica, trilha de escala épica e montagem rítmica traduz o poder bruto em segurança silenciosa.",
      "### O resultado",
      "Ao assistir ao filme, o investidor ou parceiro não avalia mais se a Seival Sul tem capacidade técnica. O filme impõe uma presença incontestável. Transformou a narrativa da marca de uma 'operação de mineração' para uma 'guardiã energética inabalável'.",
    ],
  },
];
