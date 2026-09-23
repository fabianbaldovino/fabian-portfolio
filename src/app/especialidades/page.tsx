import { projects } from "@/lib/constants/projects";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Especialidades | Fabian Baldovino",
  description: "Conheça nossas especialidades em brand filmmaking, estratégias visuais, e execução técnica audiovisual em Porto Alegre.",
};

export default function EspecialidadesHub() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-card rounded-[20px] p-6 md:p-12 border-3 border-accent w-full relative">
        <h1 className="text-4xl md:text-5xl font-medium mb-8">Nossas Especialidades</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <Link key={item.slug} href={`/especialidades/${item.slug}`} className="group block h-full">
              <div className="border border-accent rounded-[20px] overflow-hidden bg-background/50 h-full flex flex-col transition-transform hover:-translate-y-1">
                <div className="relative w-full h-48">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-brand-accent transition-colors">{item.name}</h2>
                  {item.shortDescription && (
                    <p className="text-foreground/70 text-sm md:text-base">{item.shortDescription}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
