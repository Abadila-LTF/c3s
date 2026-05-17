import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PageHero} from '@/components/PageHero';
import {Card} from '@/components/Section';
import {Reveal} from '@/components/Reveal';
import {ExternalLink} from 'lucide-react';

type Partner = {
  id: 'leyton' | 'nrci' | 'daki' | 'revatis' | 'chu' | 'estc';
  type: 'industrial' | 'academic';
  logo: string;
  logoBg: 'light' | 'dark';
  accent: string;
  url?: string;
};

const PARTNERS: Partner[] = [
  {
    id: 'leyton',
    type: 'industrial',
    logo: '/images/partners/leyton.png',
    logoBg: 'dark',
    accent: 'from-[var(--color-coral-500)]/15 to-[var(--color-amber-400)]/15',
    url: 'https://leyton.com'
  },
  {
    id: 'nrci',
    type: 'industrial',
    logo: '/images/partners/nrci.png',
    logoBg: 'light',
    accent: 'from-[var(--color-navy-500)]/15 to-[var(--color-teal-500)]/15',
    url: 'https://www.nrci.fr'
  },
  {
    id: 'daki',
    type: 'industrial',
    logo: '/images/partners/daki-farm.png',
    logoBg: 'light',
    accent: 'from-[var(--color-teal-500)]/20 to-[var(--color-amber-400)]/15',
    url: 'https://daki-farm.com'
  },
  {
    id: 'revatis',
    type: 'industrial',
    logo: '/images/partners/revatis.svg',
    logoBg: 'dark',
    accent: 'from-[var(--color-coral-500)]/15 to-[var(--color-navy-500)]/15',
    url: 'https://www.revatis.com'
  },
  {
    id: 'chu',
    type: 'academic',
    logo: '/images/partners/chu-oujda.png',
    logoBg: 'light',
    accent: 'from-[var(--color-navy-500)]/15 to-[var(--color-coral-500)]/12'
  },
  {
    id: 'estc',
    type: 'academic',
    logo: '/images/partners/estc.png',
    logoBg: 'light',
    accent: 'from-[var(--color-teal-500)]/20 to-[var(--color-navy-500)]/15',
    url: 'https://www.est-uh2c.ac.ma'
  }
];

function PartnerCard({partner, label}: {partner: Partner; label: string}) {
  const t = label;
  return (
    <Card className={`h-full bg-gradient-to-br ${partner.accent} relative overflow-hidden`}>
      <div className="flex items-start gap-4">
        <div
          className={`size-20 rounded-2xl grid place-items-center shrink-0 p-3 ${
            partner.logoBg === 'dark'
              ? 'bg-[var(--color-navy-900)]'
              : 'bg-white dark:bg-white/95'
          }`}
        >
          <Image
            src={partner.logo}
            alt={partner.id}
            width={64}
            height={64}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            {t}
          </div>
          <h3 className="text-xl font-bold mt-1">
            <PartnerName id={partner.id} />
          </h3>
          <PartnerDescription id={partner.id} />
          {partner.url && (
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal-600)] dark:text-[var(--color-teal-400)] hover:underline"
            >
              {partner.url.replace(/^https?:\/\//, '')}
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

async function PartnerName({id}: {id: Partner['id']}) {
  const t = await getTranslations();
  return <>{t(`partners.${id}.name`)}</>;
}

async function PartnerDescription({id}: {id: Partner['id']}) {
  const t = await getTranslations();
  return (
    <p className="mt-3 text-sm text-muted leading-relaxed">
      {t(`partners.${id}.description`)}
    </p>
  );
}

export default async function PartnersPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const industrial = PARTNERS.filter((p) => p.type === 'industrial');
  const academic = PARTNERS.filter((p) => p.type === 'academic');

  return (
    <>
      <PageHero
        eyebrow={t('partners.eyebrow')}
        title={t('partners.title')}
        subtitle={t('partners.subtitle')}
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {t('partners.industrial')}
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {industrial.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <PartnerCard partner={p} label={t('partners.industrial')} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16 sm:py-20 border-t hairline">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {t('partners.academic')}
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {academic.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <PartnerCard partner={p} label={t('partners.academic')} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
