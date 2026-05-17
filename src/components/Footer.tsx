import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Mail, MapPin, Github, Linkedin, ExternalLink} from 'lucide-react';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-24 border-t hairline bg-[var(--surface)]">
      <div className="container-page py-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logos/c3s-logo.png"
              alt="C3S"
              width={48}
              height={48}
              className="size-12 rounded-md"
            />
            <div>
              <div className="text-base font-bold">C3S Laboratory</div>
              <div className="text-xs text-muted">{t('footer.affiliation')}</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">{t('footer.tagline')}</p>
          <div className="mt-6 space-y-2 text-sm">
            <a
              href="https://www.est-uh2c.ac.ma/recherche/laboratoires-de-recherche/computer-science-smart-systems/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-[var(--fg)]"
            >
              est-uh2c.ac.ma <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-wider font-semibold mb-3">
            {t('footer.explore')}
          </div>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/about" className="hover:text-[var(--fg)]">{t('nav.about')}</Link></li>
            <li><Link href="/teams" className="hover:text-[var(--fg)]">{t('nav.teams')}</Link></li>
            <li><Link href="/research" className="hover:text-[var(--fg)]">{t('nav.research')}</Link></li>
            <li><Link href="/publications" className="hover:text-[var(--fg)]">{t('nav.publications')}</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-wider font-semibold mb-3">
            {t('footer.engage')}
          </div>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/events" className="hover:text-[var(--fg)]">{t('nav.events')}</Link></li>
            <li><Link href="/phd" className="hover:text-[var(--fg)]">{t('nav.phd')}</Link></li>
            <li><Link href="/partners" className="hover:text-[var(--fg)]">{t('nav.partners')}</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--fg)]">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-wider font-semibold mb-3">
            {t('footer.contact')}
          </div>
          <div className="space-y-2.5 text-sm">
            <div className="flex items-start gap-2 text-muted">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>
                École Supérieure de Technologie de Casablanca<br />
                Université Hassan II · Casablanca, Maroc
              </span>
            </div>
            <a
              href="mailto:contact@c3s-lab.ma"
              className="flex items-center gap-2 text-muted hover:text-[var(--fg)]"
            >
              <Mail className="size-4" /> contact@c3s-lab.ma
            </a>
            <div className="flex items-center gap-2 mt-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="size-8 rounded-full border hairline inline-flex items-center justify-center hover:bg-[var(--surface-2)]"
              >
                <Linkedin className="size-3.5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="size-8 rounded-full border hairline inline-flex items-center justify-center hover:bg-[var(--surface-2)]"
              >
                <Github className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <div>© {new Date().getFullYear()} C3S Laboratory · UH2C / ESTC</div>
          <div>{t('footer.legal')}</div>
        </div>
      </div>
    </footer>
  );
}
