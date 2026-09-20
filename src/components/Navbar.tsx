'use client'
import Link from 'next/link';
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
      <nav className="flex flex-row justify-between px-4 py-4 lg:px-10 lg:py-6 items-center md:flex-row md:items-center relative" aria-label="Main navigation">
        <Link
          href="/"
          className="flex flex-row gap-1 items-center"
          aria-label="Go to homepage"
        >
          <span className="text-xl lg:text-2xl uppercase font-light italic">Fabian</span>
          <span className="text-xl lg:text-2xl uppercase font-medium">Baldovino</span>
        </Link>
        <HamburgerButton open={menuOpen} onClick={toggleMenu} />
        <ul className="hidden md:flex flex-row gap-20 list-none m-0 items-center">
          {navItems.map(({ action, href, label, title }) => (
            <li key={action}>
              {href ? (
                <Link
                  href={href}
                  className="text-[1rem] uppercase font-light hover:opacity-80 transition-opacity"
                  aria-label={label}
                >
                  {title}
                </Link>
              ) : (
                <button
                  onClick={() => dispatchAction(action)}
                  className="text-[1rem] uppercase font-light hover:opacity-80 transition-opacity cursor-pointer"
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