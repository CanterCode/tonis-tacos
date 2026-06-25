'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import OrderModal from '@/components/modals/OrderModal';
import Button from '@/components/ui/Button';

const navLinks = [
  { href: '/menu',    label: 'Menu' },
  { href: '/events',  label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about',   label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  useFocusTrap(drawerRef, drawerOpen);

  const isHome = pathname === '/';
  const transparent = isHome && scrollY < 80;

  useEffect(() => {
    if (!drawerOpen) hamburgerRef.current?.focus();
  }, [drawerOpen]);

  useEffect(() => {
    if (drawerOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const navBg = transparent
    ? 'bg-transparent'
    : 'bg-white shadow-md';

  const linkColor = transparent ? 'text-cream/90 hover:text-white' : 'text-charcoal hover:text-primary';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" aria-label="Toni's Tacos — home">
            <Image src="/logo.svg" alt="Toni's Tacos" width={200} height={46} priority />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base font-semibold pb-1 transition-colors ${linkColor} ${pathname === href ? 'border-b-2 border-secondary' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button variant="primary" size="sm" onClick={() => setModalOpen(true)}>Order Now</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className={`md:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${transparent ? 'text-white' : 'text-charcoal'}`}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => setDrawerOpen(false)} />
          <div ref={drawerRef} className="w-72 bg-white h-full flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <Image src="/logo.svg" alt="Toni's Tacos" width={120} height={30} />
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-md text-muted hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 flex-1" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block py-3 px-2 rounded-lg text-base font-medium transition-colors ${pathname === href ? 'text-primary bg-primary/5' : 'text-charcoal hover:text-primary hover:bg-gray-50'}`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="primary" onClick={() => { setDrawerOpen(false); setModalOpen(true); }} className="w-full mt-4">
              Order Now
            </Button>
          </div>
        </div>
      )}

      <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
