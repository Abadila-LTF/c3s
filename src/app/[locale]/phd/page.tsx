import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {PageHero} from '@/components/PageHero';
import {Card} from '@/components/Section';
import {Reveal} from '@/components/Reveal';
import {ArrowRight, GraduationCap, Briefcase, Sprout, Zap, FileText, Brain, HeartPulse, Stethoscope} from 'lucide-react';

const TOPICS = [
  {key: 'vrdu', Icon: FileText, status: 'draft'},
  {key: 'longdoc', Icon: FileText, status: 'draft'},
  {key: 'agritech', Icon: Sprout, status: 'open'},
  {key: 'energy', Icon: Zap, status: 'open'},
  {key: 'nlp', Icon: Brain, status: 'open'},
  {key: 'llm', Icon: Brain, status: 'open'},
  {key: 'health', Icon: HeartPulse, status: 'open'},
  {key: 'renal', Icon: Stethoscope, status: 'ongoing'}
] as const;

const STATUS_STYLES: Record<string, string> = {
  ongoing: 'bg-[var(--color-teal-500)]/10 text-[var(--color-teal-600)] border-[var(--color-teal-500)]/30',
  open: 'bg-[var(--color-coral-500)]/10 text-[var(--color-coral-600)] border-[var(--color-coral-500)]/30',
  draft: 'bg-[var(--color-amber-400)]/15 text-[var(--color-amber-500)] border-[var(--color-amber-400)]/30'
};

export default async function PhdPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <PageHero
        eyebrow={t('phd.eyebrow')}
        title={t('phd.title')}
        subtitle={t('phd.subtitle')}
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {t('phd.openTitle')}
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {TOPICS.map(({key, Icon, status}, i) => (
            <Reveal key={key} delay={i * 0.04}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-11 rounded-xl bg-gradient-to-br from-[var(--color-navy-100)] to-[var(--color-teal-500)]/20 dark:from-[var(--color-navy-800)] dark:to-[var(--color-teal-500)]/30 grid place-items-center">
                    <Icon className="size-5 text-[var(--color-navy-700)] dark:text-[var(--color-teal-400)]" />
                  </div>
                  <span
                    className={`chip border ${STATUS_STYLES[status]}`}
                  >
                    {t(`phd.status.${status}`)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  {t(`phd.topics.${key}.title`)}
                </h3>
                <p className="mt-2 text-xs text-muted font-medium">
                  {t(`phd.topics.${key}.advisor`)}
                </p>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {t(`phd.topics.${key}.summary`)}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16 sm:py-20 border-t hairline">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-500)]">
              {t('phd.eyebrow')}
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              {t('phd.applyTitle')}
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {t('phd.applyText')}
            </p>
            <Link href="/contact" className="mt-6 btn btn-primary">
              {t('phd.applyCta')} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {(
              [
                {Icon: GraduationCap, color: 'text-[var(--color-teal-500)]', n: 1},
                {Icon: Briefcase, color: 'text-[var(--color-coral-500)]', n: 2},
                {Icon: FileText, color: 'text-[var(--color-amber-500)]', n: 3},
                {Icon: Brain, color: 'text-[var(--color-navy-600)]', n: 4}
              ] as const
            ).map(({Icon, color, n}) => (
              <Card key={n}>
                <Icon className={`size-7 ${color}`} />
                <div className="mt-3 text-xs uppercase tracking-wider text-muted font-semibold">
                  {t('phd.steps.step')} {n}
                </div>
                <h3 className="font-semibold mt-1">
                  {t(`phd.steps.s${n}Title`)}
                </h3>
                <p className="text-sm text-muted mt-2">
                  {t(`phd.steps.s${n}Desc`)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
