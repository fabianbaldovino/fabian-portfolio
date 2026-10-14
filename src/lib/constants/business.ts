/**
 * Fonte única dos dados do negócio (NAP: nome, endereço, telefone).
 *
 * O Google cruza estes dados com o Perfil da Empresa (Google Meu Negócio)
 * e com os cadastros externos (POA Film Commission, oHub, Apontador...).
 * Eles precisam ser IDÊNTICOS em todos os lugares, letra por letra.
 * Qualquer mudança aqui deve ser feita também no Perfil da Empresa.
 */

const SITE = "https://www.fabian.art.br";

export const business = {
  /** Mesmo nome do Perfil da Empresa no Google. Não acrescentar palavras-chave. */
  name: "Fabian Baldovino",
  alternateName: "Fabian Baldovino Brand Filmmaking",
  url: SITE,
  email: "fbpaciel@gmail.com",
  phone: "+55 51 99965-4160",
  phoneRaw: "+5551999654160",
  foundingYear: "2011",

  city: "Porto Alegre",
  region: "RS",
  regionName: "Rio Grande do Sul",
  country: "BR",
  /** Centro de Porto Alegre — o perfil é de área de atendimento, sem endereço público. */
  geo: { latitude: -30.0346, longitude: -51.2177 },

  /**
   * Link do perfil no Google Maps. Formato ?cid= (ID permanente do perfil),
   * mais estável que a URL com coordenadas copiada da barra do navegador.
   * Enquanto estiver vazio, os links "Ver no Google Maps" ficam ocultos.
   */
  googleMapsUrl: "https://www.google.com/maps?cid=14579644057700009075",
  /**
   * Link de avaliação (Perfil → Pedir avaliações → g.page/r/.../review).
   * Enquanto estiver vazio, os botões "Avalie no Google" ficam ocultos.
   */
  googleReviewUrl: "https://g.page/r/CXME2DIGTVXKEBM/review",

  /**
   * Horário comercial — deve ser o mesmo do Perfil da Empresa.
   * Formato schema.org: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"].
   * Vazio = não declarado no schema.
   */
  openingHours: ["Mo-Fr 09:00-18:00"] as string[],

  areaServed: ["Porto Alegre", "Região Metropolitana de Porto Alegre", "Rio Grande do Sul", "Brasil"],
} as const;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${business.phoneRaw.replace("+", "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** Página local principal — destino de links internos com âncora de cidade. */
export const LOCAL_PAGE_PATH = "/produtora-de-video-porto-alegre";
export const LOCAL_PAGE_URL = `${SITE}${LOCAL_PAGE_PATH}`;

/** IDs estáveis para o grafo de dados estruturados (ligam Person ↔ Negócio). */
export const SCHEMA_IDS = {
  business: `${SITE}/#business`,
  person: `${SITE}/#person`,
  website: `${SITE}/#website`,
} as const;
