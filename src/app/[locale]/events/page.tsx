import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PageHero} from '@/components/PageHero';
import {Card} from '@/components/Section';
import {Reveal} from '@/components/Reveal';
import {Calendar, MapPin, Mic2, ExternalLink, History} from 'lucide-react';

export default async function EventsPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const flagship = [
    {key: 'wincom', img: '/images/events/audience.jpg', url: 'https://www.wincom-conf.org'},
    {key: 'wkde', img: '/images/events/workshop-data-eng.jpg', url: 'https://estc3s.univh2c.ma/wkde'},
    {key: 'syscobiots', img: '/images/events/event-3.jpg'},
    {key: 'mind', img: '/images/events/event-4.jpg'},
    {key: 'journees', img: '/images/events/journees-recherche.jpg'}
  ];

  const talks = [
    {key: 'talk1', date: 'talk1Date', speaker: 'talk1Speaker'},
    {key: 'talk2', date: 'talk2Date', speaker: 'talk2Speaker'},
    {key: 'talk3', date: 'talk3Date', speaker: 'talk3Speaker'}
  ];

  const recentEvents = [
    'wincom24',
    'talkResearchProjects',
    'talkLLMs',
    'talkDigitalCurrency',
    'leytonHackathon',
    'nextgenData',
    'wincom23'
  ];

  return (
    <>
      <PageHero
        eyebrow={t('events.eyebrow')}
        title={t('events.title')}
        subtitle={t('events.subtitle')}
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {t('events.flagshipTitle')}
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {flagship.map((e, i) => (
            <Reveal key={e.key} delay={i * 0.04}>
              <Card className="p-0 overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={e.img}
                    alt={t(`events.${e.key}.title`)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 left-3 chip backdrop-blur">
                    <Calendar className="size-3" />
                    {t('events.flagshipTitle')}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold">
                    {t(`events.${e.key}.title`)}
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    {t(`events.${e.key}.subtitle`)}
                  </p>
                  <p className="mt-3 text-sm text-muted flex-1">
                    {t(`events.${e.key}.description`)}
                  </p>
                  {e.url && (
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal-600)] hover:underline"
                    >
                      {e.url.replace('https://', '')}
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16 sm:py-20 border-t hairline">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {t('events.recentTitle')}
            </h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              {t('events.recentSubtitle')}
            </p>
          </div>
          <span className="chip">
            <History className="size-3" />
            2023 — 2024
          </span>
        </div>
        <ol className="mt-8 relative border-l hairline pl-6 sm:pl-8 space-y-5">
          {recentEvents.map((key, i) => (
            <Reveal key={key} delay={i * 0.03}>
              <li className="relative">
                <span className="absolute -left-[33px] sm:-left-[41px] top-2 size-3 rounded-full bg-[var(--color-teal-500)] ring-4 ring-white dark:ring-[var(--color-navy-900)]" />
                <Card className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar className="size-3.5" />
                    <span className="chip">
                      {t(`events.recent.${key}.date`)}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base sm:text-lg font-semibold leading-snug">
                    {t(`events.recent.${key}.title`)}
                  </h3>
                </Card>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-page py-16 sm:py-20 border-t hairline">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {t('events.talksTitle')}
        </h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-5">
          {talks.map((talk, i) => (
            <Reveal key={talk.key} delay={i * 0.04}>
              <Card className="h-full">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <Calendar className="size-3.5" />
                  {t(`events.${talk.date}`)}
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-[var(--color-coral-500)]/20 to-[var(--color-amber-400)]/20 grid place-items-center shrink-0">
                    <Mic2 className="size-5 text-[var(--color-coral-500)]" />
                  </div>
                  <div>
                    <p className="font-semibold leading-snug">
                      {t(`events.${talk.key}`)}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {t(`events.${talk.speaker}`)}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16 sm:py-20 border-t hairline">
        <div className="rounded-3xl border hairline overflow-hidden bg-gradient-to-br from-[var(--color-navy-900)] to-[var(--color-navy-700)] text-white p-10 lg:p-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal-400)] font-semibold">
              {t('events.annualTitle')}
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">
              {t('events.journees.title')}
            </h3>
            <p className="mt-3 text-white/70 max-w-2xl">
              {t('events.journees.description')}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="chip border-white/15 bg-white/5 text-white">
                <MapPin className="size-3" /> ESTC Casablanca
              </span>
              <span className="chip border-white/15 bg-white/5 text-white">
                Annual
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/events/journees-recherche.jpg"
              alt="Journées Recherche C3S"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
