"use client";

import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/constants/contact";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw.replace("+", "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Fabian Baldovino no WhatsApp"
      className="fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 w-14 h-14 rounded-full bg-brand-accent text-brand-dark shadow-[0_8px_24px_rgba(197,160,89,0.25)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
