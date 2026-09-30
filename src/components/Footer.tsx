import { contactInfo } from "@/lib/constants/contact";
import { socials } from "@/lib/constants/socials";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw.replace("+", "")}`;

  return (
    <footer className={`text-foreground/70 text-xs ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-6 py-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-accent transition-colors"
        >
          WhatsApp
        </a>
        <span aria-hidden="true" className="opacity-40">·</span>
        <a
          href={`mailto:${contactInfo.email}`}
          className="hover:text-brand-accent transition-colors"
        >
          {contactInfo.email}
        </a>
        <span aria-hidden="true" className="opacity-40">·</span>
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-accent transition-colors"
        >
          Instagram
        </a>
        <span aria-hidden="true" className="opacity-40">·</span>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-accent transition-colors"
        >
          LinkedIn
        </a>
        <span aria-hidden="true" className="opacity-40">·</span>
        <span>&copy; 2026 Fabian Baldovino</span>
      </div>
    </footer>
  );
}
