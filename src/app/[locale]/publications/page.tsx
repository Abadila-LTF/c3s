import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PageHero} from '@/components/PageHero';
import {PublicationsList} from '@/components/PublicationsList';

export default async function PublicationsPage({
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
        eyebrow={t('publications.eyebrow')}
        title={t('publications.title')}
        subtitle={t('publications.subtitle')}
      />
      <section className="container-page py-12 sm:py-16">
        <PublicationsList />
      </section>
    </>
  );
}
