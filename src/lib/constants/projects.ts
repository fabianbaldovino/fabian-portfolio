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
    name: "A Operação",
    slug: "a-operacao",
    imgSrc: "/FOTOS/IMG_0831.png",
    icon: "Target",
    type: "copy",
    shortDescription: "Direção de Produção e Execução Técnica",
    tags: ["Direção de Produção", "Execução Técnica", "Brand Filmmaking"],
    content: "Produzir um filme não é só sobre ligar uma câmera; é sobre saber resolver problemas na vida real. Nós assumimos a frente do seu projeto, organizando a bagunça dos bastidores e garantindo uma execução técnica impecável. A sua única preocupação deve ser colher o resultado."
  },
  { 
    name: "A Visão", 
    slug: "a-visao",
    imgSrc: "/FOTOS/20260517_121306(0).jpg",
    icon: "Eye",
    type: "copy",
    shortDescription: "Estratégia Visual e Narrativa de Marca",
    tags: ["Estratégia Visual", "Gatilhos Emocionais", "Narrativa de Marca"],
    content: "Ninguém compra um produto pela razão; a razão só existe para justificar o que o instinto já decidiu em milésimos de segundo. Nós não fazemos vídeos para entreter o intelecto, construímos percepção de valor direto na raiz."
  },
  { 
    name: "O Horizonte",
    slug: "o-horizonte",
    imgSrc: "/FOTOS/DSC00053.jpg.jpeg",
    modalImgSrc: "/FOTOS/DJI_0561.png",
    icon: "Compass",
    type: "copy",
    shortDescription: "Filmagem Aérea e Escala Visual",
    tags: ["Filmagem Aérea", "Escala Visual", "Identidade de Marca"],
    content: "Para que as pessoas entendam o tamanho do seu negócio, elas precisam ver a verdadeira dimensão da sua operação. Através das nossas captações aéreas, expandimos as suas fronteiras visuais, mostrando do micro ao macro a força do que você construiu."
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
  },
  { 
    name: "O Código Brasil", 
    slug: "o-codigo-brasil",
    imgSrc: "/FOTOS/trabalhos/CAPA_OFICIAL.png",
    icon: "Book",
    type: "copy",
    shortDescription: "Literatura Estratégica",
    tags: ["Literatura Estratégica", "Autoridade Visual", "Dominação de Mercado"],
    content: "Neste livro, converso sobre o que realmente faz as pessoas perceberem valor em uma marca. Você vai entender como a cultura e os nossos instintos moldam o consumo brasileiro. Todo cliente nosso recebe um exemplar digital gratuito: é o nosso jeito de compartilhar a base do que fazemos antes mesmo de ligar a câmera."
  },
];
