export type Especialidade = {
  slug: string;
  /** Nome curto para cards e navegação */
  name: string;
  /** Linha de posicionamento exibida sob o H1 */
  tagline: string;
  /** Title tag — inclui keyword primária */
  metaTitle: string;
  metaDescription: string;
  imgSrc: string;
  icon?: string;
  /** Keyword primária primeiro — usada em schema e no texto */
  keywords: string[];
  /** Parágrafo de abertura (lead) */
  intro: string;
  /** Corpo. "### " vira <h2>; **negrito** e *itálico* suportados */
  content: string[];
  /** Slugs de portfolioProjects que provam esta especialidade */
  relatedCases: string[];
};

export const especialidades: Especialidade[] = [
  {
    slug: "brand-film",
    name: "Brand Film",
    tagline: "A verdade da marca em linguagem de cinema",
    metaTitle: "Brand Film em Porto Alegre | Fabian Baldovino",
    metaDescription:
      "Brand film não é vídeo institucional com trilha melhor. É narrativa cinematográfica aplicada à verdade da sua marca. Brand filmmaker em Porto Alegre, RS.",
    imgSrc: "/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rio_grande_do_sul_cinema.webp",
    icon: "Film",
    keywords: [
      "brand film",
      "brand film Porto Alegre",
      "brand filmmaker",
      "filme de marca",
      "narrativa de marca",
    ],
    intro:
      "Existe um tipo de filme que as pessoas assistem até o fim sem pular. Não porque o logo apareceu nos primeiros três segundos, mas porque a história faz sentido sentir. Esse formato tem nome: brand film.",
    content: [
      "### O que é",
      "Brand film é um filme. Com estrutura dramática, ponto de virada e personagens — reais ou construídos — que carregam algo verdadeiro sobre a marca.",
      "Pode durar dois minutos ou vinte. Pode ser narrado ou silencioso. O que define um brand film não é a duração nem o orçamento: é a intenção.",
      "**Vídeo institucional** responde *o que fazemos e onde estamos*. **Brand film** responde *por que existimos e no que acreditamos*. A distância entre essas duas perguntas é a distância entre ser esquecido e ser lembrado.",
      "### Por que o cérebro responde diferente",
      "Informação factual — dados, descrição de produto, lista de benefícios — ativa duas áreas do cérebro: processamento de linguagem e interpretação de significado. Nada além.",
      "Narrativa ativa múltiplas regiões ao mesmo tempo: memória, emoção, movimento, tato. O fenômeno se chama **acoplamento neural** — narrador e ouvinte sincronizam padrões de atividade cerebral.",
      "É isso que o cinema faz há cem anos. Brand film é a aplicação disso a uma marca.",
      "### Quando sua marca precisa de um",
      "Quando o produto já é bom e isso deixou de ser diferencial. Quando a concorrência diz as mesmas palavras que você. Quando a decisão de compra passa por confiança antes de passar por preço.",
      "E principalmente: quando existe uma verdade na sua empresa que ninguém fora dela conhece ainda.",
      "### Como trabalhamos",
      "O processo começa com perguntas que fornecedor de vídeo não faz: qual é a tensão que justifica a existência desta marca? Que momento revelou quem ela realmente é? Se ela desaparecesse amanhã, quem sentiria falta — e por quê?",
      "As respostas são o roteiro. Esse diagnóstico é o que chamo de **O Código Brasil**: toda marca brasileira carrega uma verdade cultural específica, moldada pelo contexto regional e pela história de quem a fundou. O brand film não inventa essa verdade. Revela.",
      "O que vem depois é cinematografia — e cinematografia tem ponto de vista. Ângulo, luz, ritmo de corte, silêncio: cada escolha comunica. Isso não é estética, é vocabulário.",
      "### O que você recebe",
      "Diagnóstico narrativo da marca, roteiro, direção, captação e finalização. O filme entregue em cortes para os formatos onde ele vai viver — horizontal, vertical, e versões curtas para mídia paga.",
      "Atendimento em Porto Alegre, Rio Grande do Sul e todo o Brasil.",
    ],
    relatedCases: ["quick-house", "copelmi", "seival-sul-mineradora"],
  },
  {
    slug: "brand-documentary",
    name: "Brand Documentary",
    tagline: "Quando a marca é grande demais para ser anunciada",
    metaTitle: "Brand Documentary — Documentário de Marca | Fabian Baldovino",
    metaDescription:
      "Documentário de marca para empresas que precisam consolidar legado, não vender produto. Brand documentary com direção cinematográfica em Porto Alegre, RS.",
    imgSrc: "/FOTOS/fabian_baldovino_casa_de_cultura_mario_quintana_porto_alegre_rs.webp",
    icon: "Eye",
    keywords: [
      "brand documentary",
      "documentário de marca",
      "documentário institucional",
      "documentário corporativo",
      "filme documental empresa",
    ],
    intro:
      "Algumas empresas não precisam convencer ninguém. Precisam ser compreendidas na escala real que ocupam. Para essas, publicidade é pequena — e documentário é a linguagem certa.",
    content: [
      "### O que é",
      "Brand documentary trata a empresa como assunto, não como anunciante. A câmera entra na operação para registrar o que está acontecendo ali de verdade: o trabalho, o peso, as pessoas, a escala.",
      "Não há locução vendendo. Não há lista de diferenciais. Há observação com direção — e a diferença entre as duas coisas é o que separa documentário de vídeo operacional.",
      "### Quando sua marca precisa de um",
      "Quando a operação é grande e a comunicação não acompanha. Quando o setor carrega estigma — mineração, energia, indústria pesada, agronegócio — e o mercado só viu vídeos frios listando maquinário.",
      "Quando o público que importa são investidores, parceiros institucionais e a sociedade ao redor da operação. Essas audiências não respondem a argumento de venda. Respondem a **presença incontestável**.",
      "E quando a empresa tem história suficiente para que o legado seja o ativo — não o produto.",
      "### Como trabalhamos",
      "Entramos como documentaristas, não como publicitários. Isso muda tudo: o tempo de permanência em campo, o que se filma, e principalmente o que se recusa a filmar.",
      "O código que buscamos aqui costuma ser a **autoridade pacífica** — o princípio de que poder real não grita. Enquadramentos que não têm pressa, movimentação majestosa, edição com respiro. Cada imagem tratada como monumento.",
      "Em operações industriais, filmamos o movimento tectônico humano que mantém o sistema de pé. Não a 'operação' — o peso existencial dela.",
      "### O que você recebe",
      "Pesquisa e imersão, roteiro documental, captação em campo (incluindo aérea quando a escala exige), e um filme principal acompanhado de peças curtas derivadas.",
      "Material que serve a relatório anual, apresentação a investidor, relação institucional e comunicação interna — sem precisar ser refeito para cada uso.",
    ],
    relatedCases: ["seival-sul-mineradora", "copelmi"],
  },
  {
    slug: "teaser-cinematografico",
    name: "Teaser Cinematográfico",
    tagline: "Os primeiros segundos decidem o resto",
    metaTitle: "Teaser Cinematográfico para Marcas | Fabian Baldovino",
    metaDescription:
      "Teaser cinematográfico e filmes curtos para redes sociais e mídia paga. Captura de atenção com linguagem de cinema, não de anúncio. Porto Alegre, RS.",
    imgSrc: "/FOTOS/fabian_baldovino_parque_moinhos_de_vento_porto_alegre_rs.webp",
    icon: "Clapperboard",
    keywords: [
      "teaser cinematográfico",
      "teaser de marca",
      "filme curto para redes sociais",
      "vídeo para META ADS",
      "campanha audiovisual Porto Alegre",
    ],
    intro:
      "O feed é um massacre visual. Você tem décimos de segundo antes do polegar decidir. A maioria das marcas usa esse tempo para mostrar o produto — e perde.",
    content: [
      "### O que é",
      "Teaser cinematográfico é filme curto construído para sobreviver ao scroll. Não é o brand film cortado em pedaços: é peça própria, pensada desde o roteiro para funcionar em quinze, trinta ou sessenta segundos.",
      "A diferença entre teaser e anúncio está no primeiro frame. Anúncio começa informando. Teaser começa **ativando** — uma textura, um gesto, uma tensão que o cérebro precisa resolver.",
      "### Quando sua marca precisa de um",
      "Quando você vai investir em mídia paga e a criação não acompanha o investimento. Quando a categoria é visualmente saturada e todos usam as mesmas imagens — comida sendo servida, pessoas sorrindo em escritório, time batendo as mãos.",
      "Quando o CPM está caro porque o criativo não retém.",
      "### Como trabalhamos",
      "Aplicamos princípios neuro-visuais à estrutura da peça. Em gastronomia, por exemplo, não filmamos a receita — filmamos o ritual: textura, luz quente, e os gestos de preparo que acionam memória de conforto. A comida aparece como resultado de um sentimento, não como produto.",
      "O gatilho muda por categoria. O método não: identificar qual estado emocional precisa ser instalado nos primeiros segundos, e construir a imagem que o instala.",
      "Cada peça nasce já pensada para os cortes que a mídia vai exigir — vertical, quadrado, horizontal — sem reenquadramento improvisado que destrói a composição.",
      "### O que você recebe",
      "Conjunto de filmes curtos (tipicamente de três a seis peças por campanha), entregues em todos os formatos de veiculação, com variações de abertura para teste A/B em mídia paga.",
    ],
    relatedCases: ["ristorante-fontana", "wedy-nutrition"],
  },
  {
    slug: "novela-vertical",
    name: "Novela Vertical",
    tagline: "Entretenimento de marca em formato nativo de celular",
    metaTitle: "Novela Vertical para Marcas — Série Vertical | Fabian Baldovino",
    metaDescription:
      "Novela vertical: série ficcional em episódios, filmada em 9:16, onde a marca conduz a história em vez de interromper. Formato de alta retenção. Porto Alegre, RS.",
    imgSrc: "/FOTOS/fabian_baldovino_producao_audiovisual_porto_alegre_rs.webp",
    icon: "Target",
    keywords: [
      "novela vertical",
      "série vertical",
      "ficção seriada para marcas",
      "branded entertainment",
      "conteúdo vertical de marca",
    ],
    intro:
      "A publicidade interrompe o conteúdo que a pessoa escolheu ver. Novela vertical inverte isso: a marca passa a ser o conteúdo escolhido.",
    content: [
      "### O que é",
      "Ficção seriada filmada em vertical, pensada em episódios curtos com gancho entre eles. Estrutura de novela — cliffhanger, arco de personagem, retorno programado — aplicada ao formato onde as pessoas efetivamente passam o tempo.",
      "A marca não aparece como patrocinador no rodapé. Ela está dentro da narrativa, conduzindo-a.",
      "### Quando sua marca precisa de um",
      "Quando o público é mobile e a retenção dos seus vídeos cai nos primeiros segundos. Quando a categoria permite ficção — e quase toda permite, com o roteiro certo.",
      "E quando existe disposição para algo raro: **presença sem protagonismo**. Esse é o nível mais difícil de brand filmmaking, porque exige que a marca confie na própria identidade o suficiente para não precisar anunciá-la a cada corte.",
      "A marca que não precisa se explicar já ganhou metade da batalha.",
      "### Como trabalhamos",
      "Começa com roteiro de ficção — escrito por roteirista, não por redator publicitário. A diferença aparece na primeira cena.",
      "O trabalho de diagnóstico do Código Brasil aqui é encontrar o **código de pertencimento**: a frequência emocional que a marca compartilha com o universo onde a história acontece. Não o que ela faz ou oferece, mas onde ela naturalmente *está*, como parte do tecido cultural daquela cena.",
      "O resultado é construído para que o espectador sinta a presença da marca antes de nomeá-la. É a diferença entre ser apresentado a alguém e reconhecer alguém que já faz parte da sua vida.",
      "### O que você recebe",
      "Desenvolvimento de roteiro seriado, direção, produção dos episódios em 9:16, e estratégia de distribuição episódica — o calendário de publicação que sustenta a retenção entre um episódio e o próximo.",
    ],
    relatedCases: ["termolar"],
  },
];
