"use client";

import { useEffect, useState } from "react";
import ContactModal from "@/components/ContactModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function GlobalModals() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const { action } = (e as CustomEvent).detail;
      if (action === "contact") setIsContactOpen(true);
      if (action === "projects") {
        document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("nav-action", handler);
    return () => window.removeEventListener("nav-action", handler);
  }, []);

  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FloatingWhatsApp />
    </>
  );
}
