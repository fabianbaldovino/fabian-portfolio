export type NavItem = {
  action: string;
  label: string;
  title: string;
  href?: string;
};

export const navItems: NavItem[] = [
  { action: 'projects', href: '/projetos', label: 'Ver projetos', title: 'Projetos' },
  { action: 'contact', label: 'Informações de contato', title: 'Contato' },
  { action: 'about', label: 'Sobre mim', title: 'Sobre' }
];