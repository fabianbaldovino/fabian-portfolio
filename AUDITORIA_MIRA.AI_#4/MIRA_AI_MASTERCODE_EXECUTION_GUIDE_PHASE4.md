# 🧠 MIRA.AI - MASTERCODE EXECUTION GUIDE - FASE 4
## DIRETRIZES DE REFATORAÇÃO PARA A ENGENHARIA (MODO ESTRITO)

> **Aviso ao Desenvolvedor (Mastercode):** Este documento contém os comandos exatos de refatoração identificados na Auditoria de Fase 4. A missão é aplicar as correções de Neuromarketing sem quebrar a estabilidade estrutural da aplicação. Copie e aplique os blocos abaixo nos respectivos arquivos.

---

### 🛠️ TAREFA 1: SINCRONIZAÇÃO DA HOME PAGE (Obras Selecionadas)
**Arquivo Alvo:** `src/lib/constants/projects.ts`
**Problema:** Os *cards* da Home Page (Seival Sul e Quick House) estão puxando as descrições velhas (operacionais e frias). 
**Execução:** Substituir os objetos `Seival Sul Mineradora` e `Quick House` dentro do array `projects` pela versão calibrada abaixo:

```typescript
  { 
    name: "Seival Sul Mineradora", 
    slug: "seival-sul-mineradora",
    imgSrc: "/FOTOS/20260517_121306(0).jpg",
    modalImgSrc: "/FOTOS/trabalhos/seivalsulmineracao.png",
    icon: "Eye",
    type: "copy",
    shortDescription: "Soberania Energética",
    tags: ["Institucional", "Mineração", "Narrativa de Marca"],
    content: "A Seival Sul não extrai apenas toneladas de minério na Mina de Candiota; ela é a força motriz que garante a segurança energética de uma região inteira. Abandonamos o formato de 'vídeo corporativo' e criamos um manifesto de soberania industrial. Através de uma escala visual colossal, transformamos a poeira e o aço da operação em um ativador instintivo de confiança máxima."
  },
  { 
    name: "Quick House",
    slug: "quick-house",
    imgSrc: "/FOTOS/DSC00053.jpg.jpeg",
    modalImgSrc: "/FOTOS/trabalhos/hospital.png",
    icon: "Compass",
    type: "copy",
    shortDescription: "Velocidade vs. Solidez",
    tags: ["Filmagem Aérea", "Escala Visual", "Construção Modular"],
    content: "A magia da construção modular (SteelPanel) permite erguer hospitais e a sede da COP-30 em velocidade recorde. Nossa direção de arte operou uma expansão das fronteiras visuais da Quick House: do micro-detalhe da precisão do aço às captações aéreas monumentais, nós construímos a semiótica definitiva de um império modular imbatível."
  },
```

---

### 🛠️ TAREFA 2: INSERÇÃO DA ARMA LITERÁRIA NO NAVBAR
**Arquivo Alvo:** `src/lib/constants/navItems.ts`
**Problema:** A Landing Page do Livro "O Código Brasil" não possui rota de entrada principal. O gatilho de Autoridade e Reciprocidade está oculto.
**Execução:** Inserir a nova rota no array `navItems`, posicionando-a preferencialmente após "Projetos" ou "Conteúdo".

```typescript
export const navItems: NavItem[] = [
  { action: 'home', href: '/', label: 'Página Inicial', title: 'Home' },
  { action: 'projects', href: '/projetos', label: 'Ver projetos', title: 'Projetos' },
  // -> INSERÇÃO MIRA.AI:
  { action: 'book', href: '/o-codigo-brasil', label: 'Livro O Código Brasil', title: 'O Livro' },
  // <- FIM INSERÇÃO
  { action: 'conteudo', href: '/conteudo', label: 'Journal e Conteúdo', title: 'Conteúdo' },
  { action: 'about', href: '/sobre', label: 'Sobre mim', title: 'Sobre' },
  { action: 'contact', label: 'Informações de contato', title: 'Contato' }
];
```

---

### 🛠️ TAREFA 3: ARQUITETURA DO GATEKEEPING DE FRICÇÃO (Formulário do Livro)
**Arquivo Alvo:** Novo Componente sugerido `src/components/BookDownloadForm.tsx` (a ser importado na página `/o-codigo-brasil`).
**Problema:** Entregar o PDF via clique direto quebra o valor percebido (símbolo de Rua). A entrega deve exigir uma "troca de honra" para estabelecer relação de Casa.
**Execução:** Criar um formulário limpo que exija nome, cargo/empresa e WhatsApp. O *submit* da form não baixa o arquivo, mas envia uma mensagem pré-formatada para o WhatsApp de Fabian.

**Pseudo-código / Estrutura Funcional Esperada:**
```tsx
"use client";
import { useState } from "react";

export default function BookDownloadForm() {
  const [formData, setFormData] = useState({ name: "", company: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gatilho de Neuromarketing: A fricção elitista que leva à conexão pessoal (Casa).
    const message = `Olá Fabian, sou ${formData.name} da ${formData.company}. Gostaria de solicitar o acesso ao manuscrito digital de 'O Código Brasil'.`;
    const whatsappUrl = `https://wa.me/5551999654160?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <input 
        type="text" 
        placeholder="Seu Nome" 
        required 
        className="bg-transparent border-b border-foreground/30 focus:border-brand-accent p-2 outline-none transition-colors"
      />
      <input 
        type="text" 
        placeholder="Empresa / Cargo" 
        required 
        className="bg-transparent border-b border-foreground/30 focus:border-brand-accent p-2 outline-none transition-colors"
      />
      <input 
        type="tel" 
        placeholder="Seu WhatsApp" 
        required 
        className="bg-transparent border-b border-foreground/30 focus:border-brand-accent p-2 outline-none transition-colors"
      />
      <button 
        type="submit" 
        className="mt-4 bg-brand-accent text-brand-dark font-medium py-3 rounded-[12px] hover:bg-brand-accent/90 transition-colors"
      >
        Solicitar Manuscrito de Elite
      </button>
    </form>
  );
}
```

> **Finalização do Protocolo:** Quando a engenharia aplicar estas 3 diretrizes, a blindagem arquitetônica e neurológica da Fase 4 estará 100% selada na produção.
