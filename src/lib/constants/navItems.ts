export type NavItem = {
  action: string;
  label: string;
  title: string;
  href?: string;
};

export const navItems: NavItem[] = [
  { action: 'home', href: '/', label: 'Página Inicial', title: 'Home' },
  { action: 'book', href: '/o-codigo-brasil', label: 'Método — como operamos e Manifesto O Código Brasil', title: 'Método' },
  { action: 'especialidades', href: '/especialidades', label: 'Especialidades — brand film, brand documentary, teaser e novela vertical', title: 'Especialidades' },
  { action: 'porto-alegre', href: '/produtora-de-video-porto-alegre', label: 'Produtora de vídeo e produção audiovisual em Porto Alegre', title: 'Porto Alegre' },
  { action: 'projects', href: '/projetos', label: 'Ver projetos', title: 'Projetos' },
  { action: 'conteudo', href: '/conteudo', label: 'Artigos — vídeo, marca e comportamento de compra', title: 'Artigos' },
  { action: 'about', href: '/sobre', label: 'Sobre mim', title: 'Sobre' },
  { action: 'contact', label: 'Informações de contato', title: 'Contato' }
];