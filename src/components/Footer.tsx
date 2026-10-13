import Link from "next/link";
import { socials } from "@/lib/constants/socials";
import { business, whatsappUrl, LOCAL_PAGE_PATH } from "@/lib/constants/business";

interface FooterProps {
  className?: string;
}

/**
 * Rodapé com NAP (nome, cidade, telefone) idêntico ao Perfil da Empresa
 * no Google, link para a página local e — quando os links estiverem
 * preenchidos em business.ts — "Google Maps" e "Avalie no Google".
 */
export default function Footer({ className = "" }: FooterProps) {
  const linkClass = "hover:text-brand-accent transition-colors";
  const dot = <span aria-hidden="true" className="opacity-40">·</span>;

  return (
    <footer className={`text-foreground/70 text-xs pb-14 md:pb-0 ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-3">
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
          WhatsApp {business.phone}
        </a>
        {dot}
        <a href={`mailto:${business.email}`} className={linkClass}>
          {business.email}
        </a>
        {dot}
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Instagram
        </a>
        {dot}
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
          LinkedIn
        </a>
        {business.googleMapsUrl && (
          <>
            {dot}
            <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Google Maps
            </a>
          </>
        )}
        {business.googleReviewUrl && (
          <>
            {dot}
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-foreground transition-colors"
            >
              Avalie no Google ★
            </a>
          </>
        )}
        {dot}
        <Link href={LOCAL_PAGE_PATH} className={linkClass}>
          Produtora de vídeo em {business.city}
        </Link>
        {dot}
        <span>&copy; 2026 {business.name}</span>
      </div>
    </footer>
  );
}
