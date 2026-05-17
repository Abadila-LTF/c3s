'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {useParams} from 'next/navigation';
import {Languages} from 'lucide-react';
import {useTransition} from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: 'fr' | 'en') {
    if (next === locale) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error - dynamic params
        {pathname, params},
        {locale: next}
      );
    });
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border hairline p-1 text-xs font-semibold">
      <Languages className="size-3.5 ml-1.5 mr-0.5 opacity-60" />
      <button
        type="button"
        onClick={() => switchTo('fr')}
        className={`rounded-full px-2.5 py-1 transition ${
          locale === 'fr' ? 'bg-[var(--surface-2)]' : 'opacity-60 hover:opacity-100'
        }`}
        disabled={isPending}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => switchTo('en')}
        className={`rounded-full px-2.5 py-1 transition ${
          locale === 'en' ? 'bg-[var(--surface-2)]' : 'opacity-60 hover:opacity-100'
        }`}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  );
}
