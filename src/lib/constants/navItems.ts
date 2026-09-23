export type NavItem = {
  action: string;
  label: string;
  title: string;
  href?: string;
};

export const navItems: NavItem[] = [
  { action: 'home', href: '/', label: 'Página Inicial', title: 'Home' },
  { action: 'projects', href: '/projetos', label: 'Ver projetos', title: 'Projetos' },
  { action: 'conteudo', href: '/conteudo', label: 'Journal e Conteúdo', title: 'Conteúdo' },
  { action: 'about', href: '/sobre', label: 'Sobre mim', title: 'Sobre' },
  { action: 'contact', label: 'Informações de contato', title: 'Contato' }
];