'use client'
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/lib/constants/navItems';
import { useNavigation } from '@/hooks/useNavigation';
import { useNavAction } from '@/hooks/useNavAction';
import HamburgerButton from './HamburgerButton';
import MobileNav from './MobileNav';

export default function Navbar() {
  const { menuOpen, toggleMenu, closeMenu } = useNavigation();
  const { dispatchAction } = useNavAction();

  return (
    <header className="rounded-[20px] bg-card mb-4" role="banner">
      <nav className="flex flex-row justify-between px-4 py-4 lg:px-10 lg:py-6 h-sm:py-3 items-center md:flex-row md:items-center relative" aria-label="Navegação principal">
        <Link
          href="/"
          className="flex flex-row gap-2 lg:gap-3 items-center py-2 active:scale-[0.97] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
          aria-label="Ir para a página inicial"
        >
          <Image src="/logo/monograma-dourado.svg" alt="" width={44} height={44} unoptimized priority className="h-8 w-8 lg:h-10 lg:w-10" />
          <span className="text-xl lg:text-2xl uppercase font-light italic">Fabian</span>
          <span className="text-xl lg:text-2xl uppercase font-medium">Baldovino</span>
        </Link>
        <HamburgerButton open={menuOpen} onClick={toggleMenu} />
        <ul className="hidden xl:flex flex-row gap-8 2xl:gap-14 list-none m-0 items-center">
          {navItems.map(({ action, href, label, title }) => (
            <li key={action}>
              {href ? (
                <Link
                  href={href}
                  className="text-[1rem] uppercase font-light whitespace-nowrap hover:opacity-80 transition-opacity"
                  aria-label={label}
                >
                  {title}
                </Link>
              ) : (
                <button
                  onClick={() => dispatchAction(action)}
                  className="text-[1rem] uppercase font-light whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer"
                  aria-label={label}
                >
                  {title}
                </button>
              )}
            </li>
          ))}
        </ul>
        <MobileNav open={menuOpen} closeMenu={closeMenu} />
      </nav>
    </header>
  );
}
