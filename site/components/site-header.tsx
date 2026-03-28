'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { navLinks } from './site-data';
import { SiteLogo } from './site-logo';

type SiteHeaderProps = {
  transparentOnTop?: boolean;
};

export function SiteHeader({ transparentOnTop = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = !transparentOnTop || scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'bg-primary/95 shadow-soft backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-shell flex min-h-[84px] items-center justify-between gap-6">
        <Link href="/" aria-label="Saltwater Sessions home" className="shrink-0">
          <SiteLogo variant={solid ? 'reversed' : 'reversed'} className="h-10 w-auto min-w-[160px]" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/workshops" className="button-primary px-5 py-2.5 text-xs">
            Book a Workshop
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/20 text-secondary lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-secondary/10 bg-primary/98 lg:hidden">
          <nav className="container-shell flex flex-col gap-5 py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold uppercase tracking-[0.18em] text-secondary/92"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/workshops" className="button-primary mt-2 w-full" onClick={() => setOpen(false)}>
              Book a Workshop
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
