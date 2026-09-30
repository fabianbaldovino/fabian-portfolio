export type NavItem = {
  action: string;
  label: string;
  title: string;
  href?: string;
};

export const navItems: NavItem[] = [
  { action: 'home', href: '/', label: 'Página Inicial', title: 'Home' },
  { action: 'book', href: '/o-codigo-brasil', label: 'Método — como operamos e Manifesto O Código Brasil', title: 'Método' },
  { action: 'projects', href: '/projetos', label: 'Ver projetos', title: 'Projetos' },
  { action: 'conteudo', href: '/conteudo', label: 'Journal — artigos, vídeos e insights', title: 'Journal' },
  { action: 'about', href: '/sobre', label: 'Sobre mim', title: 'Sobre' },
  { action: 'contact', label: 'Informações de contato', title: 'Contato' }
];