"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Image from "next/image";
import { modalVariants, backdropVariants, textVariants, iconVariants } from "@/lib/animation/variants";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-card rounded-[20px] p-6 md:p-8 lg:p-12 border-3 border-accent w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors z-10"
              onClick={onClose}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              aria-label="Fechar modal"
            >
              <X size={24} className="text-foreground" />
            </motion.button>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-4 md:mt-0">

              {/* Photo */}
              <motion.div
                className="w-full lg:w-[38%] flex-shrink-0"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden">
                  <Image
                    src="/FOTOS/20260522_093422.jpg"
                    alt="Fabian Baldovino"
                    fill
                    quality={95}
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                className="flex flex-col gap-6 flex-1"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <div>
                  <p className="text-sm uppercase tracking-widest text-brand-accent font-medium mb-2">
                    Sobre
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                    Fabian<br />
                    <span className="font-light italic">Baldovino</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-4 text-foreground/80 leading-relaxed">
                  <p className="text-base md:text-lg">
                    Brand filmmaker e estrategista de narrativas visuais, Fabian Baldovino não filma eventos — ele <strong className="text-foreground">arquiteta gatilhos</strong>. Autor de <em>O Código Brasil</em>, um manifesto que decodifica o inconsciente do mercado mais emocional do mundo, Fabian cruzou a psicanálise de Clotaire Rapaille com a antropologia de Roberto DaMatta para entender o que realmente move o consumidor brasileiro: não lógica, mas <strong className="text-foreground">instinto, pertencimento e confiança relacional</strong>.
                  </p>
                  <p className="text-base md:text-lg">
                    Essa visão moldou a sua abordagem audiovisual. Para Fabian, cada enquadramento é uma decisão estratégica. Uma marca sem escala visual morre no anonimato — e é por isso que ele não cria vídeos bonitos; ele constrói <strong className="text-foreground">percepção de alto valor</strong>, ativando o lado instintivo e emocional do cliente antes mesmo que ele perceba.
                  </p>
                  <p className="text-base md:text-lg">
                    Baseado em Porto Alegre, atua como a <em>retaguarda invisível</em> de marcas que recusam o ruído do mercado. Porque, como ele escreve no seu livro: <strong className="text-foreground">&quot;Quando você para de falar para o intelecto e começa a falar com os instintos de sobrevivência e pertencimento, o preço deixa de ser uma objeção e se torna um passaporte de entrada.&quot;</strong>
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Brand Filmmaking", "Estratégia Visual", "Narrativa de Marca", "Porto Alegre"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-accent text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
