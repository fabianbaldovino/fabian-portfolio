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
    content: [
      "A Termolar nos desafiou a repensar a interação com o público mobile. O resultado foi um thriller psicológico em 4 episódios. Abandonamos a publicidade convencional para criar uma novela vertical de alta retenção. Nesse formato, o produto não interrompe a experiência; ele conduz uma história envolvente escrita por Renata Maltz e eleva a percepção de valor da marca através do entretenimento.",
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
      "Esse é o objetivo mais difícil de atingir. E o mais duradouro."
    ],
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
    content: [
      "A Seival Sul não extrai apenas toneladas de minério na Mina de Candiota; ela é a força motriz que garante a segurança energética de uma região inteira. Abandonamos o formato de 'vídeo corporativo' e criamos um manifesto de soberania industrial. Através de uma escala visual colossal, transformamos a poeira e o aço da operação em um ativador instintivo de confiança máxima para parceiros e investidores do mercado de capitais.",
      "### O desafio",
      "O setor de mineração e energia carrega um estigma de comunicação brutalista. O mercado estava acostumado a vídeos operacionais frios que listavam maquinários e metros cúbicos extraídos.",
      "A Seival Sul não precisava provar que tinha máquinas. Ela precisava que a sociedade, investidores e parceiros sentissem o peso existencial da sua operação na matriz energética. O desafio era transformar toneladas de carvão e aço em confiança.",
      "### A abordagem",
      "O código aqui é a **Soberania Intransponível**. Entramos na Mina de Candiota não como publicitários, mas como documentaristas do peso da indústria pesada.",
      "O roteiro e a captação do Código Brasil trataram os trabalhadores e a própria mina como entidades colossais. Filmamos não a 'operação', mas o movimento tectônico humano que mantém a luz acesa. O somatório entre decupagem cinematográfica, trilha de escala épica e montagem rítmica traduz o poder bruto em segurança silenciosa.",
      "### O resultado",
      "Ao assistir ao filme, o investidor ou parceiro não avalia mais se a Seival Sul tem capacidade técnica. O filme impõe uma presença incontestável. Transformou a narrativa da marca de uma 'operação de mineração' para uma 'guardiã energética inabalável'."
    ],
  },
  { 
    name: "Quick House",
    slug: "quick-house",
    imgSrc: "/FOTOS/fabian_baldovino_filmmaker_porto_alegre_rs_filmagem_de_drone.webp",
    modalImgSrc: "/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre.jpg",
    icon: "Building",
    type: "copy",
    shortDescription: "Construção Rápida de Alto Padrão",
    tags: ["Construção Rápida", "Escala", "Fasano", "JHSF"],
    content: [
      "O Sistema Construtivo Quick House é reconhecido pela inovação e rapidez. Traduzimos essa agilidade em um Brand Film que foca no ritmo e na precisão matemática, demonstrando a escala e a confiabilidade de construir para grandes nomes da indústria imobiliária brasileira.",
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
      "Isso é o que brand filmmaking resolve quando o cliente opera no nível mais alto do mercado."
    ],
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
    content: [
      "Uma das maiores potências do setor energético brasileiro não precisa provar seu tamanho, precisa consolidar o seu legado. Nossa missão foi fortalecer a percepção da Copelmi, traduzindo o peso real de sua operação em uma autoridade pacífica e segura que dispensa argumentos. Cada frame foi milimetricamente desenhado para transmitir a solidez institucional que apenas os líderes absolutos podem sustentar.",
      "### O desafio",
      "Quando você já é um líder histórico no mercado de energia, a sua comunicação não precisa mais 'vender' ou 'explicar'.",
      "Marcas gigantescas como a Copelmi sofrem de um problema de representação: qualquer coisa que não seja impecável diminui o peso real que elas têm.",
      "O desafio não era convencer, mas projetar um legado com a mesma densidade da história da empresa, sem soar arrogante ou antiquado.",
      "### A abordagem",
      "Descobrimos o código da **Autoridade Pacífica**. O verdadeiro poder não grita.",
      "Em vez de locutores de voz agressiva e textos de venda, a estratégia pelo Código Brasil foi usar o respiro e o tempo a favor da imagem. Enquadramentos fixos, movimentação majestosa, e uma edição que não tem pressa. Cada imagem é um monumento. Ao retratarmos a imensidão das instalações energéticas e a solidez dos times, entregamos o silêncio confortável de quem sabe o tamanho que tem.",
      "### O resultado",
      "Um posicionamento que cala qualquer questionamento antes que ele comece. O brand film da Copelmi se transformou em uma credencial imediata que afirma a posição da empresa como base de infraestrutura na mente do público, elevando sua herança a um patamar cinematográfico."
    ],
  },
  { 
    name: "Ristorante Fontana", 
    slug: "ristorante-fontana",
    imgSrc: "/FOTOS/trabalhos/fontana.jpg",
    icon: "Eye",
    type: "copy",
    shortDescription: "O Acolhimento do Primeiro Frame",
    tags: ["META ADS", "Neuro-visual", "Pertencimento"],
    content: [
      "Decisões gastronômicas nascem da emoção, não da fome. Para o Ristorante Fontana, fomos além da estética culinária e ancoramos a marca no conceito de 'Casa' e afeto. Produzimos 4 filmes projetados para capturar a atenção nos primeiros segundos através de um gatilho de acolhimento.",
      "### O desafio",
      "O feed das redes sociais é um massacre visual onde restaurantes competem por décimos de segundo mostrando apenas comida.",
      "No entanto, as pessoas não vão a um restaurante Premium apenas para se alimentar. Elas vão em busca de um estado de espírito. Como furar a bolha de vídeos gastronômicos com imagens que não apenas abram o apetite, mas criem uma vontade incontrolável de estar lá?",
      "### A abordagem",
      "O código aqui é o **Acolhimento Magnético**.",
      "Não filmamos a receita, filmamos o ritual. Usando princípios neuro-visuais aplicados no Código Brasil, estruturamos os 4 filmes focando em texturas, iluminação quente, e principalmente, nos gestos de preparo que ativam memórias familiares de conforto. A comida tornou-se o resultado visual de um sentimento de 'Casa', um espaço onde o tempo desacelera.",
      "### O resultado",
      "A campanha quebrou a barreira do META ADS e performou muito acima da métrica padrão do setor gastronômico.",
      "As visualizações não paravam no prato — as pessoas engajavam com a atmosfera construída, gerando reservas motivadas não só pela qualidade culinária, mas pela identificação emocional com o ambiente caloroso do Ristorante Fontana."
    ],
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
    content: [
      "O mercado de suplementação é um oceano vermelho de promessas estéticas vazias. Para a campanha #WedyPraTodos, abandonamos a linguagem fria dos laboratórios e acionamos o arquétipo do herói cotidiano. Nossa cinematografia construiu uma identidade autêntica que não vende apenas performance, mas pertencimento a uma comunidade comprometida com força e disciplina.",
      "### O desafio",
      "Marcas de suplementos vivem repetindo a mesma estética plástica de ginásios e super-atletas impossíveis de alcançar.",
      "O público de massa já não acredita na promessa de corpos irreais e suplementação em pó desconectada da vida real. A Wedy precisava de algo novo: trazer sua qualidade impecável para a realidade do treino brutal de pessoas normais que buscam superar os próprios limites.",
      "### A abordagem",
      "Desbloqueamos o código da **Superação Realista**.",
      "O projeto de Brand Filmmaking substituiu o ideal de vaidade por um manifesto de esforço e disciplina (o verdadeiro Suor, como apontado no Código Cultural Brasileiro). Com uma edição de cortes rápidos, trilha industrial imersiva e captação crua e de alto contraste, a narrativa não falou sobre a fórmula do whey protein, mas sobre a mentalidade blindada de quem usa o produto. Trouxemos a suplementação da esfera do 'milagre' para a esfera do 'processo inegociável'.",
      "### O resultado",
      "A Wedy conseguiu algo muito raro: construir **Tribo**. A audiência enxergou os próprios valores traduzidos na campanha. Em vez de disputar preço na prateleira, a marca assumiu uma identidade emocional que gera defensores viscerais do movimento."
    ],
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