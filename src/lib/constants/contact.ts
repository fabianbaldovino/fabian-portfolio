import { business } from "./business";

/** Derivado de business.ts: telefone e e-mail têm uma fonte só (NAP). */
export const contactInfo = {
  email: business.email,
  phone: business.phone,
  phoneRaw: business.phoneRaw,
  location: `${business.city}, ${business.region}`,
  availability: "Disponível para projetos",
};