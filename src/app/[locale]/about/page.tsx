import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PageHero} from '@/components/PageHero';
import {Card} from '@/components/Section';
import {Reveal} from '@/components/Reveal';
import {GraduationCap, Wrench, Globe, Crown, Users2, Building2} from 'lucide-react';
import {DIRECTION} from '@/data/lab';

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const visions = [
    {key: 'training', Icon: GraduationCap},
    {key: 'applied', Icon: Wrench},
    {key: 'collab', Icon: Globe}
  ] as const;

  const strategies = ['strategy1', 'strategy2', 'strategy3'] as const;
  const governances = ['governance1', 'governance2', 'governance3'] as const;

  return (
    <>
      <PageHero
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        subtitle={t('about.intro')}
      />

      {/* Presentation */}
      <section className="container-page py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight">
              {t('about.presentationTitle')}
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                {l: '2019', s: 'Création'},
                {l: '20+', s: 'Chercheurs'},
                {l: '4', s: 'Équipes'},
                {l: 'h>50', s: 'h-index'}
              ].map((b) => (
                <div
                  key={b.l}
                  className="rounded-2xl border hairline p-4 text-center surface"
                >
                  <div className="text-2xl font-bold gradient-text">{b.l}</div>
                  <div className="text-xs uppercase tracking-wider text-muted mt-1">
                    {b.s}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed">
            <Reveal delay={0.05}>
              <p>{t('about.presentation')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted">{t('about.presentation2')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t hairline bg-[var(--surface)]">
        <div className="container-page py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-500)]">
            {t('about.eyebrow')}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            {t('about.visionTitle')}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            {t('about.visionSubtitle')}
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {visions.map(({key, Icon}, i) => (
              <Reveal key={key} delay={i * 0.05}>
                <Card>
                  <div className="size-11 rounded-xl bg-gradient-to-br from-[var(--color-teal-500)]/15 to-[var(--color-coral-500)]/15 grid place-items-center">
                    <Icon className="size-5 text-[var(--color-navy-700)] dark:text-[var(--color-teal-400)]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {t(`about.vision.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {t(`about.vision.${key}.description`)}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="container-page py-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {t('about.strategyTitle')}
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {strategies.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <Card>
                <div className="text-xs font-mono text-muted">
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold">
                  {t(`about.${s}Title`)}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {t(`about.${s}`)}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Direction */}
      <section className="border-t hairline">
        <div className="container-page py-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t('about.directionTitle')}
          </h2>
          <p className="mt-3 text-muted">{t('about.directionSubtitle')}</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card className="relative overflow-hidden">
              <div className="absolute -top-10 -right-10 size-40 rounded-full bg-[var(--color-amber-400)]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="size-14 rounded-xl overflow-hidden bg-[var(--surface)] border hairline">
                    <Image
                      src="/images/team/pr-ouzzif.png"
                      alt={DIRECTION.director}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[var(--color-coral-500)] font-semibold">
                      <Crown className="size-3 inline -mt-0.5" /> Director
                    </div>
                    <div className="font-semibold">{DIRECTION.director}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Team: GEDIS · Governance & Engineering of Data and Intelligent Systems
                </p>
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-3">
                <div className="size-14 rounded-xl bg-gradient-to-br from-[var(--color-navy-100)] to-[var(--color-teal-500)]/30 grid place-items-center">
                  <Users2 className="size-6 text-[var(--color-navy-700)] dark:text-[var(--color-teal-400)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-teal-600)] font-semibold">
                    Deputy Director
                  </div>
                  <div className="font-semibold">{DIRECTION.deputy}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted">
                Co-leadership of scientific and administrative affairs.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-3">
                <div className="size-14 rounded-xl bg-gradient-to-br from-[var(--color-coral-500)]/20 to-[var(--color-amber-400)]/20 grid place-items-center">
                  <Building2 className="size-6 text-[var(--color-coral-600)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-coral-500)] font-semibold">
                    Co-leadership
                  </div>
                  <div className="font-semibold">{DIRECTION.deputy2}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted">
                Co-leadership · external relations & strategy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="container-page py-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {t('about.governanceTitle')}
        </h2>
        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          {governances.map((g, i) => (
            <Reveal key={g} delay={i * 0.05}>
              <Card>
                <div className="text-xs font-mono text-muted">G/{i + 1}</div>
                <h3 className="mt-2 text-lg font-semibold">
                  {t(`about.${g}Title`)}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {t(`about.${g}`)}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border hairline p-6 surface">
          <div className="text-xs uppercase tracking-wider font-semibold text-[var(--color-teal-600)]">
            {t('about.committeesTitle')}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {(['committee1', 'committee2', 'committee3'] as const).map((c) => (
              <span key={c} className="chip">
                {t(`about.${c}`)}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
