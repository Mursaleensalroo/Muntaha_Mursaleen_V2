'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/config';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'Our Story' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'py-3 bg-cream/85 backdrop-blur-md border-b border-sand/50' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        <Link href="/" className="group">
          <div className="flex items-baseline gap-2">
            <span className="font-display italic text-lg tracking-tight text-ink">
              {siteConfig.partnerOne[0]}
            </span>
            <span className="font-serif italic text-gold text-sm">&amp;</span>
            <span className="font-display italic text-lg tracking-tight text-ink">
              {siteConfig.partnerTwo[0]}
            </span>
          </div>
        </Link>

        <ul className="flex gap-1 sm:gap-2">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 sm:px-5 py-2 text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300 ${
                    active ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 sm:left-5 sm:right-5 h-px bg-gold/60" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
