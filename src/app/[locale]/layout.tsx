import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Plus_Jakarta_Sans, JetBrains_Mono} from 'next/font/google';
import type {Metadata} from 'next';
import {routing} from '@/i18n/routing';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {ThemeScript} from '@/components/ThemeScript';
import '../globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap'
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const isFr = locale === 'fr';
  return {
    metadataBase: new URL('https://c3s-laboratory.example'),
    title: {
      default: isFr
        ? 'C3S — Laboratoire Computer Science and Smart Systems'
        : 'C3S — Computer Science and Smart Systems Laboratory',
      template: '%s · C3S'
    },
    description: isFr
      ? "Laboratoire de recherche en informatique de l'Université Hassan II de Casablanca, ESTC. Data Science, IoT, Cybersécurité, IA, Cloud & Big Data."
      : 'Computer Science research laboratory at Hassan II University of Casablanca, ESTC. Data Science, IoT, Cybersecurity, AI, Cloud & Big Data.',
    icons: {icon: '/images/logos/c3s-logo.png'},
    openGraph: {
      type: 'website',
      title: 'C3S Laboratory',
      description: isFr
        ? "Laboratoire Computer Science and Smart Systems — UH2C / ESTC"
        : 'Computer Science and Smart Systems Laboratory — UH2C / ESTC',
      images: ['/images/logos/c3s-logo.png']
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
