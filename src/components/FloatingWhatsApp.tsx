"use client";

import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/constants/contact";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw.replace("+", "")}`;

  return (
    <>
      {/* Mobile — barra de contato fixa no rodapé (sticky), sem cobrir o texto */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Fabian Baldovino no WhatsApp"
        className="md:hidden fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 min-h-[52px] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-brand-accent text-brand-dark text-sm font-bold uppercase tracking-widest shadow-[0_-8px_24px_rgba(197,160,89,0.25)] active:brightness-95 transition-all"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Falar no WhatsApp
      </a>

      {/* Desktop — bolha flutuante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Fabian Baldovino no WhatsApp"
        className="hidden md:flex fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 w-14 h-14 rounded-full bg-brand-accent text-brand-dark shadow-[0_8px_24px_rgba(197,160,89,0.25)] hover:brightness-110 active:scale-95 transition-all items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </>
  );
}
