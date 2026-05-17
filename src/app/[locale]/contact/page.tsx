import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PageHero} from '@/components/PageHero';
import {Reveal} from '@/components/Reveal';
import {
  MapPin,
  Mail,
  ExternalLink,
  Globe,
  GraduationCap,
  Handshake,
  Send
} from 'lucide-react';

const CHANNELS = [
  {
    id: 'general',
    email: 'contact@c3s-lab.ma',
    Icon: Mail,
    accent: 'text-[var(--color-teal-600)]',
    bg: 'bg-[var(--color-teal-500)]/10'
  },
  {
    id: 'phd',
    email: 'phd@c3s-lab.ma',
    Icon: GraduationCap,
    accent: 'text-[var(--color-coral-600)]',
    bg: 'bg-[var(--color-coral-500)]/10'
  },
  {
    id: 'partnership',
    email: 'partnerships@c3s-lab.ma',
    Icon: Handshake,
    accent: 'text-[var(--color-navy-600)]',
    bg: 'bg-[var(--color-navy-500)]/10'
  }
] as const;

export default async function ContactPage({
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
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-5">
            <div className="card border rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-[var(--color-teal-500)]/10 grid place-items-center shrink-0">
                  <MapPin className="size-5 text-[var(--color-teal-600)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted font-semibold">
                    {t('contact.addressTitle')}
                  </div>
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed">
                    {t('contact.address')}
                  </p>
                </div>
              </div>
            </div>

            <div className="card border rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-[var(--color-coral-500)]/10 grid place-items-center shrink-0">
                  <Mail className="size-5 text-[var(--color-coral-600)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted font-semibold">
                    {t('contact.emailTitle')}
                  </div>
                  <a
                    href="mailto:contact@c3s-lab.ma"
                    className="mt-1 block text-sm font-medium hover:text-[var(--color-teal-600)]"
                  >
                    contact@c3s-lab.ma
                  </a>
                </div>
              </div>
            </div>

            <div className="card border rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-[var(--color-navy-500)]/10 grid place-items-center shrink-0">
                  <Globe className="size-5 text-[var(--color-navy-600)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted font-semibold">
                    {t('contact.websiteTitle')}
                  </div>
                  <a
                    href="https://www.est-uh2c.ac.ma/recherche/laboratoires-de-recherche/computer-science-smart-systems/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--color-teal-600)] break-all"
                  >
                    est-uh2c.ac.ma · C3S
                    <ExternalLink className="size-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            <div className="card border rounded-2xl overflow-hidden">
              <div className="px-6 pt-5 pb-3 text-xs uppercase tracking-wider text-muted font-semibold">
                {t('contact.mapTitle')}
              </div>
              <iframe
                title="C3S — ESTC Casablanca"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-7.6735%2C33.5285%2C-7.6385%2C33.5485&layer=mapnik&marker=33.5385%2C-7.6555"
                className="w-full aspect-[16/10] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {t('contact.channelsTitle')}
              </h2>
              <p className="mt-2 text-muted">{t('contact.channelsSubtitle')}</p>
            </div>

            <div className="mt-6 space-y-4">
              {CHANNELS.map((c, i) => {
                const Icon = c.Icon;
                return (
                  <Reveal key={c.id} delay={i * 0.05}>
                    <a
                      href={`mailto:${c.email}`}
                      className="card border rounded-2xl p-6 flex items-start gap-4 hover:-translate-y-0.5 hover:border-[var(--color-teal-500)]/40 transition group"
                    >
                      <div
                        className={`size-12 rounded-xl ${c.bg} grid place-items-center shrink-0`}
                      >
                        <Icon className={`size-6 ${c.accent}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold">
                          {t(`contact.channels.${c.id}.title`)}
                        </div>
                        <p className="mt-1 text-sm text-muted leading-relaxed">
                          {t(`contact.channels.${c.id}.description`)}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--color-teal-600)] dark:text-[var(--color-teal-400)]">
                          <Send className="size-3.5" />
                          {c.email}
                        </div>
                      </div>
                      <span className="text-muted group-hover:text-[var(--fg)] transition mt-1 hidden sm:inline-flex chip">
                        {t('contact.writeTo')}
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
