import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PageHero} from '@/components/PageHero';
import {Card} from '@/components/Section';
import {Reveal} from '@/components/Reveal';
import {
  Database,
  BarChart3,
  Wifi,
  Radio,
  Cloud,
  Server,
  Shield,
  GitBranch,
  Bot
} from 'lucide-react';
import {RESEARCH_AREAS} from '@/data/lab';

const ICONS: Record<string, React.ComponentType<{className?: string}>> = {
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

export default async function ResearchPage({
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
        eyebrow={t('research.eyebrow')}
        title={t('research.title')}
        subtitle={t('research.subtitle')}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESEARCH_AREAS.map((id, i) => {
            const Icon = ICONS[id];
            return (
              <Reveal key={id} delay={i * 0.04}>
                <Card className="h-full group relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 size-32 rounded-full bg-gradient-to-br from-[var(--color-teal-500)]/15 to-[var(--color-coral-500)]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-[var(--color-navy-100)] to-[var(--color-teal-500)]/30 dark:from-[var(--color-navy-800)] dark:to-[var(--color-teal-500)]/30 grid place-items-center">
                      <Icon className="size-6 text-[var(--color-navy-700)] dark:text-[var(--color-teal-400)]" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">
                      {t(`research.areas.${id}.title`)}
                    </h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {t(`research.areas.${id}.description`)}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
