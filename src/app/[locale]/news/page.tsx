import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PageHero} from '@/components/PageHero';
import {Card} from '@/components/Section';
import {Reveal} from '@/components/Reveal';
import {Calendar, Award, FileCheck2, Trophy, Users} from 'lucide-react';

const NEWS = [
  {key: 'ag', img: '/images/events/journees-recherche.jpg', Icon: Users},
  {key: 'accreditation', img: null, Icon: FileCheck2},
  {key: 'leyton', img: '/images/events/leyton-hackathon.jpg', Icon: Trophy},
  {key: 'wkde', img: '/images/events/workshop-data-eng.jpg', Icon: Award}
] as const;

export default async function NewsPage({
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
        eyebrow={t('news.eyebrow')}
        title={t('news.title')}
        subtitle={t('news.subtitle')}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-5">
          {NEWS.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.04}>
              <Card className="p-0 overflow-hidden h-full flex flex-col">
                {item.img ? (
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={item.img}
                      alt={t(`news.items.${item.key}.title`)}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-navy-700)] via-[var(--color-navy-500)] to-[var(--color-teal-500)]/40 grid place-items-center">
                    <item.Icon className="size-16 text-white/80" />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar className="size-3.5" />
                    {t(`news.items.${item.key}.date`)}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">
                    {t(`news.items.${item.key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                    {t(`news.items.${item.key}.summary`)}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
