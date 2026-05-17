import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {Card, SectionHeader} from '@/components/Section';
import {Reveal} from '@/components/Reveal';
import {
  ArrowRight,
  Database,
  BarChart3,
  Wifi,
  Radio,
  Cloud,
  Server,
  Shield,
  GitBranch,
  Bot,
  Calendar,
  Users,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import {RESEARCH_AREAS} from '@/data/lab';

const AREA_ICONS: Record<string, React.ComponentType<{className?: string}>> = {
  data: Database,
  bigdata: BarChart3,
  iot: Wifi,
  wireless: Radio,
  cloud: Cloud,
  info: Server,
  cyber: Shield,
  modelling: GitBranch,
  robotics: Bot
};

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero -z-10" />
        <div className="absolute inset-0 grid-bg -z-10 opacity-60" />
        <div className="container-page pt-16 sm:pt-24 pb-20 sm:pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="chip">
                  <span className="size-1.5 rounded-full bg-[var(--color-teal-500)]" />
                  {t('home.eyebrow')}
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
                  {t('home.title1')}
                  <br />
                  <span className="gradient-text">{t('home.title2')}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
                  {t('home.subtitle')}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/research" className="btn btn-primary">
                    {t('home.ctaPrimary')}
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link href="/phd" className="btn btn-ghost">
                    {t('home.ctaSecondary')}
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="lg:col-span-5">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[var(--color-navy-700)] via-[var(--color-teal-500)]/30 to-[var(--color-coral-500)]/40 blur-2xl opacity-40" />
                <div className="relative h-full w-full rounded-[36px] border hairline overflow-hidden card grid place-items-center p-10 animate-float">
                  <Image
                    src="/images/logos/c3s-logo.png"
                    alt="C3S Logo"
                    width={420}
                    height={420}
                    className="w-3/4 h-auto"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 chip backdrop-blur shadow-lg">
                  <Sparkles className="size-3.5 text-[var(--color-amber-500)]" />
                  Computer Science · Smart Systems
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-page -mt-10 sm:-mt-16 relative z-10">
        <Reveal>
          <div className="rounded-3xl border hairline bg-[var(--card)] p-2 grid grid-cols-2 lg:grid-cols-4 gap-2">
            {[
              {key: 'papers', value: '250+'},
              {key: 'phds', value: '25+'},
              {key: 'events', value: '14+'},
              {key: 'hindex', value: '50+'}
            ].map((s) => (
              <div
                key={s.key}
                className="rounded-2xl px-6 py-7 surface border hairline"
              >
                <div className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-semibold">
                  {t(`home.stats.${s.key}`)}
                </div>
                <div className="mt-1 text-xs text-muted">
                  {t(`home.stats.${s.key}Detail`)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MISSION */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <SectionHeader
              eyebrow={t('home.eyebrow')}
              title={t('home.missionTitle')}
            />
          </Reveal>
          <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed">
            <Reveal delay={0.05}>
              <p>{t('home.mission1')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted">{t('home.mission2')}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal-600)] hover:underline"
              >
                {t('common.learnMore')} <ArrowRight className="size-3.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="container-page py-16 sm:py-20 border-t hairline">
        <SectionHeader
          eyebrow={t('research.eyebrow')}
          title={t('home.domainsTitle')}
          subtitle={t('home.domainsSubtitle')}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESEARCH_AREAS.map((id, i) => {
            const Icon = AREA_ICONS[id];
            return (
              <Reveal key={id} delay={i * 0.04}>
                <Card className="h-full">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-[var(--color-navy-100)] to-[var(--color-teal-500)]/20 dark:from-[var(--color-navy-800)] dark:to-[var(--color-teal-500)]/30 grid place-items-center">
                    <Icon className="size-5 text-[var(--color-navy-700)] dark:text-[var(--color-teal-400)]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {t(`research.areas.${id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {t(`research.areas.${id}.description`)}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* TEAMS */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeader
          eyebrow={t('teams.eyebrow')}
          title={t('home.teamsTitle')}
          subtitle={t('home.teamsSubtitle')}
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {(['dsis', 'bdios', 'gedis', 'd2sf'] as const).map((id, i) => (
            <Reveal key={id} delay={i * 0.05}>
              <Card className="group relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 size-48 rounded-full -translate-y-16 translate-x-16 bg-gradient-to-br from-[var(--color-teal-400)]/10 to-[var(--color-coral-400)]/10 blur-2xl group-hover:scale-125 transition-transform duration-700" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black tracking-tight gradient-text">
                      {t(`teams.${id}.name`)}
                    </span>
                    <span className="chip">
                      <Users className="size-3" />
                      {t('common.members')}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    {t(`teams.${id}.fullName`)}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">
                    {t(`teams.${id}.description`)}
                  </p>
                  <Link
                    href="/teams"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal-600)] dark:text-[var(--color-teal-400)] hover:underline"
                  >
                    {t('common.discoverTeams')} <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="container-page py-16 sm:py-20 border-t hairline">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow={t('events.eyebrow')}
            title={t('home.eventsTitle')}
            subtitle={t('home.eventsSubtitle')}
          />
          <Link href="/events" className="btn btn-ghost text-sm">
            {t('common.viewAll')} <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {[
            {key: 'wincom', img: '/images/events/audience.jpg'},
            {key: 'wkde', img: '/images/events/workshop-data-eng.jpg'},
            {key: 'journees', img: '/images/events/journees-recherche.jpg'}
          ].map((e, i) => (
            <Reveal key={e.key} delay={i * 0.05}>
              <Card className="p-0 overflow-hidden">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={e.img}
                    alt={t(`events.${e.key}.title`)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 chip backdrop-blur">
                    <Calendar className="size-3" />
                    {t('events.flagshipTitle')}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {t(`events.${e.key}.title`)}
                  </h3>
                  <p className="mt-1 text-xs text-muted">
                    {t(`events.${e.key}.subtitle`)}
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    {t(`events.${e.key}.description`)}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container-page py-16 sm:py-20 border-t hairline">
        <SectionHeader
          eyebrow={t('partners.eyebrow')}
          title={t('home.partnersTitle')}
          subtitle={t('home.partnersSubtitle')}
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {(
            [
              {id: 'leyton', logo: '/images/partners/leyton.png', dark: true},
              {id: 'nrci', logo: '/images/partners/nrci.png', dark: false},
              {id: 'mobitic', logo: null, dark: false},
              {id: 'revatis', logo: '/images/partners/revatis.svg', dark: true},
              {id: 'chu', logo: '/images/partners/chu-oujda.png', dark: false},
              {id: 'estc', logo: '/images/partners/estc.png', dark: false}
            ] as const
          ).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <div
                className={`card border rounded-2xl aspect-[3/2] grid place-items-center p-5 hover:border-[var(--color-teal-500)] transition ${
                  p.dark ? 'bg-[var(--color-navy-900)]' : ''
                }`}
              >
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={t(`partners.${p.id}.name`)}
                    width={140}
                    height={70}
                    className="max-w-[80%] max-h-12 w-auto h-auto object-contain"
                  />
                ) : (
                  <span className="text-lg font-bold tracking-tight gradient-text">
                    {t(`partners.${p.id}.name`)}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border hairline bg-gradient-to-br from-[var(--color-navy-900)] via-[var(--color-navy-800)] to-[var(--color-navy-700)] text-white p-10 sm:p-16">
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-[var(--color-teal-500)]/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-[var(--color-coral-500)]/30 blur-3xl" />
            <div className="relative max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-400)]">
                {t('partners.eyebrow')}
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                {t('home.ctaCardTitle')}
              </h2>
              <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
                {t('home.ctaCardSubtitle')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn bg-white text-[var(--color-navy-900)] hover:bg-white/90"
                >
                  {t('home.ctaCardButton')}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/phd"
                  className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20"
                >
                  {t('nav.phd')}
                  <ExternalLink className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
