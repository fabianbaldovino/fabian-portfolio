import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Fabian Baldovino",
  description: "Brand filmmaker e estrategista de narrativas visuais. Autor de O Código Brasil. Especialista em construir percepção de alto valor em Porto Alegre, RS.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-card rounded-[20px] p-6 md:p-12 lg:p-16 border-3 border-accent w-full relative">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Photo */}
          <div className="w-full lg:w-[38%] flex-shrink-0">
            <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden">
              <Image
                src="/FOTOS/20260522_093422.jpg"
                alt="Fabian Baldovino"
                fill
                quality={95}
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-8 flex-1">
            <div>
              <p className="text-sm uppercase tracking-widest text-brand-accent font-medium mb-3">
                Sobre
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
                Fabian<br />
                <span className="font-light italic">Baldovino</span>
              </h1>
            </div>

            <div className="flex flex-col gap-6 text-foreground/80 leading-relaxed text-lg md:text-xl">
              <p>
                Brand filmmaker e estrategista, Fabian Baldovino acredita que a câmera é só uma ferramenta; o que importa é a história que está sendo contada. Autor de <em>O Código Brasil</em>, ele mergulhou na antropologia de Roberto DaMatta para entender de verdade o que move o consumidor brasileiro: não apenas a lógica, mas o instinto, o pertencimento e, acima de tudo, a confiança.
              </p>
              <p>
                Essa visão humana moldou o jeito que ele trabalha. Para Fabian, cada cena é uma forma de conversar com o cliente de forma mais sincera. Ele não busca fazer vídeos meramente bonitos; a ideia é transmitir o real valor da sua marca, criando uma conexão que as pessoas sentem antes mesmo de perceber.
              </p>
              <p>
                Baseado em Porto Alegre, ele atua como a <em>retaguarda invisível</em> de empresários e marcas que querem se destacar com autenticidade. Porque, como ele mesmo escreve: <strong className="text-foreground">&quot;Quando você para de tentar convencer apenas com argumentos lógicos e começa a se conectar com a vontade das pessoas de pertencer, o preço deixa de ser uma barreira e a confiança toma o seu lugar.&quot;</strong>
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              {["Brand Filmmaking", "Estratégia Visual", "Narrativa de Marca", "Porto Alegre", "O Código Brasil"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm uppercase tracking-wider px-4 py-2 rounded-full border border-accent text-foreground/80 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
