'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {Menu, X} from 'lucide-react';
import {ThemeToggle} from './ThemeToggle';
import {LanguageSwitcher} from './LanguageSwitcher';

const NAV = [
  {href: '/', key: 'home'},
  {href: '/about', key: 'about'},
  {href: '/teams', key: 'teams'},
  {href: '/research', key: 'research'},
  {href: '/publications', key: 'publications'},
  {href: '/events', key: 'events'},
  {href: '/phd', key: 'phd'},
  {href: '/partners', key: 'partners'},
  {href: '/news', key: 'news'},
  {href: '/contact', key: 'contact'}
] as const;

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] border-b hairline">
      <div className="container-page flex h-16 items-center gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/logos/c3s-logo.png"
            alt="C3S"
            width={40}
            height={40}
            className="size-9 rounded-md"
            priority
          />
          <div className="leading-tight hidden sm:block">
            <div className="text-sm font-bold tracking-tight">C3S Laboratory</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-muted">UH2C · ESTC</div>
          </div>
        </Link>

        <nav className="ml-auto hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  active
                    ? 'text-[var(--fg)]'
                    : 'text-muted hover:text-[var(--fg)]'
                }`}
              >
                {t(item.key)}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[var(--color-teal-500)] to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto lg:ml-2 flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-full border hairline w-9 h-9 inline-flex items-center justify-center"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t hairline">
          <nav className="container-page grid grid-cols-2 gap-1 py-3">
            {NAV.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active ? 'bg-[var(--surface-2)]' : 'hover:bg-[var(--surface)]'
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
