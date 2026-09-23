# Super Auditoria de SEO & Core Web Vitals

**Cliente / Site:** [https://www.fabian.art.br/](https://www.fabian.art.br/)
**Nicho:** Brand Filmmaking, Produção Audiovisual & Estratégia de Marca
**Geolocalização Alvo:** Porto Alegre — RS, Brasil
**Tecnologia Identificada:** Next.js (SSR/Edge), React, Tailwind CSS

---

## 📌 RESUMO EXECUTIVO

**Nota Geral do Site: 7.2 / 10**

O projeto possui uma estética visual de nível *State of the Art* (SOTA), transmitindo um posicionamento de alto valor, fundamental no segmento de Brand Filmmaking. Do ponto de vista semântico e visual, o site atende ao alto padrão exigido para a marca. 

Porém, do ponto de vista de **Arquitetura de Indexação, Performance (CWV) e Estrutura SEO Local**, o site subutiliza seu potencial e apresenta gargalos que impedem a captura ativa de demanda orgânica para termos transacionais (como *"produção de vídeo para empresas"* ou *"produtora audiovisual porto alegre"*).

### 🚨 5 Problemas Críticos Encontrados (High Impact)
1. **Arquitetura Baseada em Modais sem URLs Indexáveis:** As seções de serviços/especialidades (ex: "A Visão", "O Horizonte") abrem em modais JavaScript. Isso cria uma barreira para o Googlebot, desperdiçando oportunidades de ranquear para termos específicos de fundo de funil.
2. **Página de Erro 404 (Link Quebrado):** O link do cabeçalho para "Sobre" aponta para `/sobre`, que atualmente retorna uma página 404 (Not Found).
3. **Core Web Vitals - Imagens Superdimensionadas (LCP):** O CDN do Next.js está sendo forçado a gerar e entregar imagens com **3840px de largura** (`w=3840`) para renderizar miniaturas de apenas 84px na interface (ex: `DSC00053.jpg`), desperdiçando banda e prejudicando o Largest Contentful Paint.
4. **Bug de Formatação na Tag Title:** As páginas de projetos estão gerando meta titles com duplicação do nome da marca/cliente. (Ex: `<title>Termolar — Termolar — Novela Vertical...</title>`).
5. **Ausência de Cabeçalhos de Segurança HTTP:** Faltam cabeçalhos essenciais no servidor (HSTS, X-Frame-Options, CSP, X-Content-Type-Options), deixando o site suscetível a clickjacking e sniffing.

### ⚡ 5 Oportunidades Mais Rápidas (Quick Wins)
1. **Corrigir a propriedade `sizes` do `next/image`:** Ajustar o atributo para dimensionamento responsivo, reduzindo o LCP drasticamente em redes móveis.
2. **Criar a Landing Page `/sobre`:** Desenvolver a página e alavancar a autoridade do autor (livro *O Código Brasil*) para aumentar o E-E-A-T.
3. **Corrigir o Template de Metadata do Next.js:** Ajustar o `page.tsx` da rota dinâmica de projetos para limpar a repetição na tag Title.
4. **Adequação de Contraste (Acessibilidade UX/SEO):** O texto verde `#598b4c` sobre o fundo `#1b2223` (rácio 2.81:1) não passa na WCAG 2.1 AA. Trocar por um verde mais luminoso (ex: `#74c063`) para melhorar a fricção cognitiva e acessibilidade indireta.
5. **Enriquecimento de Dados Estruturados (Schema):** Adicionar Schema `FAQPage` para a seção de Dúvidas e Schema de `Review` e `Service` nos projetos.

---

## 🔒 1. VULNERABILIDADES E SAÚDE TÉCNICA DO SITE

* **Diagnóstico: Criptografia SSL e Mixed Content OK, mas com brechas nos Headers HTTP.**
* **Evidência Encontrada:** O domínio possui HTTPS (Edge Vercel), o apex redireciona corretamente para o `www`, e o `robots.txt` não vaza diretórios sensíveis. Entretanto, a resposta HTTP carece de Security Headers básicos.
* **Risco/Impacto:** Sem HSTS ou X-Frame-Options, o domínio fica vulnerável a ataques de *man-in-the-middle* e *clickjacking*. Como o site lida com formulários de lead (contato), a segurança impacta a confiabilidade (Fator Trust do E-E-A-T).
* **Recomendação Prática:** Injetar os cabeçalhos diretamente no `next.config.js` (`Strict-Transport-Security`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`).
* **Diagnóstico (Links): Link 404 no Menu Principal.**
* **Evidência Encontrada:** O botão "Sobre" tenta acionar a rota `/sobre`, que devolve erro 404 Not Found.
* **Risco/Impacto:** O Google pune a rastreabilidade (crawl budget) quando links da navegação global apontam para páginas inexistentes. O usuário sofre quebra de jornada.
* **Recomendação Prática:** Construir imediatamente o componente ou rota em `app/sobre/page.tsx`.

## 🧠 2. INTELIGÊNCIA DE INDEXAÇÃO

* **Diagnóstico: Uso indevido de modais como substitutos de arquitetura de conteúdo.**
* **Evidência Encontrada:** As áreas de "Especialidades" disparam dialogs (pop-ups modais) na página principal, mas as URLs não mudam. O sitemap reporta apenas a home e as páginas de projetos específicos.
* **Risco/Impacto:** Modais renderizados via estado no React sem roteamento de URL são invisíveis aos indexadores, impedindo a criação de silos de autoridade. O site não tem como ranquear para "produção audiovisual para e-commerce" sem uma página dedicada (`/servicos/producao-audiovisual`).
* **Recomendação Prática:** Transformar os modais de serviços em rotas independentes (ex: `app/servicos/brand-filmmaking/page.tsx`).
* **Diagnóstico: `robots.txt` e `sitemap.xml` estão operacionais e limpos.**
* **Evidência Encontrada:** O sitemap aponta 8 URLs (Home e 7 projetos). 
* **Diagnóstico: Presença Obsoleta de `<meta name="keywords">`.**
* **Evidência Encontrada:** O código renderiza meta keywords.
* **Risco/Impacto:** O Google ignora essa tag desde 2009. Seu único efeito prático é expor sua estratégia de palavras-chave para concorrentes.
* **Recomendação Prática:** Remover a geração de `meta keywords` do layout principal.

## 🚀 3. COMO ESTAMOS NOS MOTORES DE BUSCA DO GOOGLE

* **Diagnóstico: Ausência de ranqueamento para intenção transacional por falta de relevância localizada (SEO Local).**
* **Evidência Encontrada:** A palavra "Porto Alegre" e "RS" aparece isolada ou no rodapé. O H1 da home diz *"Brand Filmmaking construindo sonhos em marcas magnéticas"*. Não há um sinal forte unindo a competência e a geografia no viewport principal.
* **Risco/Impacto:** A maioria dos clientes busca termos com intenção local (`produtora audiovisual porto alegre`). Concorrentes com arquitetura focada (ex: Buena Vista Produtora) ganham no *Local Pack*.
* **Recomendação Prática:**
  - Otimizar o H1 da Home: *"Brand Filmmaking e Produção Audiovisual em Porto Alegre"*.
  - Configurar e verificar intensivamente o perfil de **Google Meu Negócio (GBP)**, obtendo reviews e respondendo com palavras-chave relevantes.
* **Diagnóstico: Core Web Vitals LCP Crítico em Mobile (Imagens Oversized).**
* **Evidência Encontrada:** O elemento `next/image` requisita o tamanho absurdo de `w=3840&q=75` para thumbnails de 84x48px (ex: `DSC00053.jpg`).
* **Risco/Impacto:** Demora de download massiva para conexões móveis, estourando a métrica do LCP (Largest Contentful Paint), que é um fator de rankeamento direto.
* **Recomendação Prática:** Aplicar a propriedade `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` a todas as imagens do portfólio.

## 🎯 4. RELATÓRIO DE BOAS PRÁTICAS PARA TOPO DE RANKING (ON-PAGE)

* **Diagnóstico: Títulos SEO Duplicados e Subotimizados.**
* **Evidência Encontrada:** Nas rotas dinâmicas de projeto (`/projetos/termolar-novela-vertical`), a tag `<title>` renderiza *Termolar — Termolar — Novela Vertical...*.
* **Risco/Impacto:** Títulos poluídos diminuem a taxa de clique (CTR) na SERP.
* **Recomendação Prática:** Corrigir a concatenação na API do `generateMetadata()` do Next.js.
* **Diagnóstico: Gap de Conteúdo Comercial em Silos (Canibalização Passiva).**
* **Evidência Encontrada:** Todos os termos de busca de intenção mista/comercial (*brand filmmaking, vídeos para o instagram, vídeos corporativos, storytelling audiovisual SaaS*) estão sendo atacados apenas pela Homepage.
* **Risco/Impacto:** A Homepage não sustenta relevância profunda para 15 intenções de busca diferentes.
* **Recomendação Prática (Silos):** 
  Criar um silo de serviços: `/especialidades/`
  1. `/especialidades/producao-video-institucional-porto-alegre`
  2. `/especialidades/brand-content-redes-sociais`
  3. `/especialidades/storytelling-audiovisual-para-saas`

## 🏆 5. O QUE MAIS UMA AUDITORIA COMPLETA DE VERDADE PRECISA COBRIR

* **E-E-A-T (Experiência, Expertise, Autoridade, Confiabilidade)**:
  * **Problema:** Fabian Baldovino é um autor publicado (*O Código Brasil*). Essa expertise singular (Authoritativeness) não está envelopada em uma landing page forte e não possui Schema Type `Book` + `Person` totalmente conectados ao grafo de conhecimento do Google.
  * **Solução:** Na criação da página `/sobre`, incluir menções à imprensa, reviews de CMOs assinando com o cargo/empresa, link para venda do livro e Schema Markup enriquecido.
* **Acessibilidade e Fricção Cognitiva:**
  * **Problema:** A UI usa o tom verde `#598b4c` sobre o *background* `#1b2223`. Rácio de contraste medido é 2.81:1, reprovando nas diretrizes WCAG 2.1 AA (mínimo de 4.5:1).
  * **Solução:** O Google usa sinais de UX (acessibilidade indireta). Ajustar a cor verde no Tailwind (`text-brand-accent`) para tons com melhor luminância como `#74c063`.
* **Schema Markup (Dados Estruturados):**
  * **Problema:** A seção "Dúvida?" na Home é excelente, mas carece do markup `FAQPage`.
  * **Solução:** Implementar Schema `FAQPage` para garantir rich snippets na página de resultados quando usuários buscarem o nome da marca.

---

## 📋 PLANO DE AÇÃO PRIORIZADO (TABELA DE EXECUÇÃO)

| Ação Técnica / Conteúdo | Prioridade | Impacto Estimado | Esforço DEV | Prazo Sugerido |
| :--- | :--- | :--- | :--- | :--- |
| **1. Corrigir LCP (Sizes nas imagens do Next.js)** | 🔴 Máxima | Alto (Core Web Vitals) | Muito Baixo (1h) | Imediato (Dia 1) |
| **2. Corrigir Link `/sobre` 404 e criar landing page** | 🔴 Máxima | Alto (E-E-A-T, Indexação) | Baixo (1 a 2 dias) | Dia 1-2 |
| **3. Corrigir Bug do `<title>` nos Projetos** | 🔴 Máxima | Médio (CTR, SEO On-Page) | Muito Baixo (1h) | Dia 1 |
| **4. Otimizar tag `<h1>` da Home para Geofoco (Poa/RS)** | 🟡 Média | Alto (Rankeamento Local) | Muito Baixo (15m) | Semana 1 |
| **5. Corrigir Contraste WCAG do Verde `#598b4c`** | 🟡 Média | Médio (UX / Sinais SEO) | Muito Baixo (15m) | Semana 1 |
| **6. Implementar Security Headers HTTP (`next.config.js`)** | 🟡 Média | Médio (Trust/E-E-A-T) | Baixo (2h) | Semana 1 |
| **7. Implementar Schema de FAQ e Review** | 🟢 Baixa | Médio (Rich Results) | Baixo (2h) | Semana 2 |
| **8. Expandir modais para URLs de Serviços Estratégicos** | 🔴 Máxima | Alto (Dominar Cauda Longa) | Médio (1 semana) | Semana 2 a 4 |

> *Auditoria conduzida de acordo com os padrões SOTA (State of the Art) para motores de busca e zero fricção cognitiva para o usuário.*
