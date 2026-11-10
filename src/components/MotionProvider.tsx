"use client";

import { MotionConfig } from "motion/react";

/**
 * Respeita a preferência "reduzir movimento" do sistema em todas as animações
 * do Motion: com ela ativa, transform e layout param de animar e só a
 * opacidade faz a transição.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
