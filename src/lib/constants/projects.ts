export type Project = { 
  name: string; 
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
    imgSrc: "/FOTOS/IMG_0831.png",
    icon: "Target",
    type: "copy",
    shortDescription: "Direção de Produção e Execução Técnica",
    tags: ["Direção de Produção", "Execução Técnica", "Brand Filmmaking"],
    content: "O audiovisual não é sobre ligar uma câmera; é sobre dominar a narrativa no caos da trincheira. Nós assumimos a linha de frente do teu projeto, mitigando o ruído e garantindo uma execução técnica implacável, para que a tua única preocupação seja colher o resultado."
  },
  { 
    name: "A Visão", 
    imgSrc: "/FOTOS/20260517_121306(0).jpg",
    icon: "Eye",
    type: "copy",
    shortDescription: "Estratégia Visual e Narrativa de Marca",
    tags: ["Estratégia Visual", "Gatilhos Emocionais", "Narrativa de Marca"],
    content: "A nossa lente é a extensão da tua autoridade. Não criamos vídeos bonitinhos, arquitetamos gatilhos visuais. Cada enquadramento é desenhado milimetricamente para ativar o lado instintivo e emocional do teu cliente, forçando uma percepção de alto valor imediata."
  },
  { 
    name: "O Horizonte", 
    imgSrc: "/FOTOS/DSC00053.jpg.jpeg",
    modalImgSrc: "/FOTOS/DJI_0561.png",
    icon: "Compass",
    type: "copy",
    shortDescription: "Filmagem Aérea e Escala Visual",
    tags: ["Filmagem Aérea", "Escala Visual", "Identidade de Marca"],
    content: "Uma marca sem escala visual morre no anonimato. Nós expandimos as tuas fronteiras, capturando a verdadeira dimensão da tua operação. Do micro ao macro, o teu legado precisa ser inegável."
  },
  { 
    name: "Bastidores", 
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
    imgSrc: "/FOTOS/trabalhos/capa_ok.png",
    icon: "Book",
    type: "copy",
    shortDescription: "Literatura Estratégica",
    tags: ["Literatura Estratégica", "Autoridade Visual", "Dominação de Mercado"],
    content: "Neste livro, dissecamos a engenharia por trás do valor percebido. Você vai entender como o cérebro instintivo reage a estímulos visuais e como eliminar a fricção cognitiva da sua comunicação. Nossos clientes recebem um exemplar gratuito como armamento estratégico em suas jornadas de dominação."
  },
];
