'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Search, FileText, BookOpen, Mic, ExternalLink, Quote} from 'lucide-react';
import {PUBLICATIONS, type Publication} from '@/data/lab';

const TYPE_META: Record<
  Publication['type'],
  {labelKey: string; Icon: React.ComponentType<{className?: string}>; color: string}
> = {
  journal: {labelKey: 'journal', Icon: BookOpen, color: 'text-[var(--color-teal-600)]'},
  conference: {labelKey: 'conference', Icon: FileText, color: 'text-[var(--color-navy-600)]'},
  communication: {labelKey: 'communication', Icon: Mic, color: 'text-[var(--color-coral-500)]'}
};

export function PublicationsList() {
  const t = useTranslations('publications');
  const [query, setQuery] = useState('');
  const [year, setYear] = useState<'all' | number>('all');
  const [type, setType] = useState<'all' | Publication['type']>('all');
  const [team, setTeam] = useState<'all' | 'dsis' | 'bdios' | 'gedis' | 'd2sf'>(
    'all'
  );

  const years = useMemo(
    () => Array.from(new Set(PUBLICATIONS.map((p) => p.year))).sort((a, b) => b - a),
    []
  );

  const filtered = useMemo(() => {
    return PUBLICATIONS.filter((p) => {
      if (year !== 'all' && p.year !== year) return false;
      if (type !== 'all' && p.type !== type) return false;
      if (team !== 'all' && p.team !== team) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !p.title.toLowerCase().includes(q) &&
          !p.authors.toLowerCase().includes(q) &&
          !p.venue.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return (b.citations ?? 0) - (a.citations ?? 0);
    });
  }, [query, year, type, team]);

  return (
    <div className="space-y-6">
      <div className="card border rounded-2xl p-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1 min-w-0">
          <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('filters.search')}
            className="w-full rounded-xl border hairline pl-9 pr-3 py-2.5 text-sm bg-transparent focus:outline-none focus:border-[var(--color-teal-500)]"
          />
        </div>
        <select
          value={year}
          onChange={(e) =>
            setYear(e.target.value === 'all' ? 'all' : Number(e.target.value))
          }
          className="rounded-xl border hairline px-3 py-2.5 text-sm bg-transparent"
        >
          <option value="all">
            {t('filters.year')} · {t('filters.all')}
          </option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as typeof type)}
          className="rounded-xl border hairline px-3 py-2.5 text-sm bg-transparent"
        >
          <option value="all">
            {t('filters.type')} · {t('filters.all')}
          </option>
          <option value="journal">{t('filters.journal')}</option>
          <option value="conference">{t('filters.conference')}</option>
          <option value="communication">{t('filters.communication')}</option>
        </select>
        <select
          value={team}
          onChange={(e) => setTeam(e.target.value as typeof team)}
          className="rounded-xl border hairline px-3 py-2.5 text-sm bg-transparent"
        >
          <option value="all">
            {t('filters.team')} · {t('filters.all')}
          </option>
          <option value="dsis">DSIS</option>
          <option value="bdios">BDIoS</option>
          <option value="gedis">GEDIS</option>
          <option value="d2sf">D2SF</option>
        </select>
      </div>

      <div className="flex items-center gap-3 text-sm text-muted">
        <span>
          {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
        </span>
      </div>

      <div className="grid gap-3">
        {filtered.map((p) => {
          const meta = TYPE_META[p.type];
          const Icon = meta.Icon;
          const url = p.doi ? `https://doi.org/${p.doi}` : undefined;
          const Wrapper = ({children}: {children: React.ReactNode}) =>
            url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group card border rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-0.5 hover:border-[var(--color-teal-500)]/40 transition block"
              >
                {children}
              </a>
            ) : (
              <div className="card border rounded-2xl p-5 flex items-start gap-4">
                {children}
              </div>
            );
          return (
            <Wrapper key={p.id}>
              <div className="size-10 rounded-xl bg-[var(--surface)] grid place-items-center shrink-0">
                <Icon className={`size-5 ${meta.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="chip">{p.year}</span>
                  <span className="chip uppercase tracking-wider">
                    {t(`filters.${meta.labelKey}`)}
                  </span>
                  {p.team && (
                    <span className="chip uppercase tracking-wider">
                      {p.team}
                    </span>
                  )}
                  {p.citations !== undefined && p.citations > 0 && (
                    <span className="chip border-[var(--color-amber-400)]/40 text-[var(--color-amber-500)]">
                      <Quote className="size-3" />
                      {p.citations}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-semibold leading-snug">
                  {p.title}
                  {url && (
                    <ExternalLink className="size-3.5 inline ml-1.5 opacity-40 group-hover:opacity-100 -mt-0.5" />
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted">{p.authors}</p>
                <p className="text-sm text-muted italic">{p.venue}</p>
                {p.doi && (
                  <p className="mt-1 text-xs text-muted font-mono">
                    DOI: {p.doi}
                  </p>
                )}
              </div>
            </Wrapper>
          );
        })}
        {filtered.length === 0 && (
          <div className="card border rounded-2xl p-10 text-center text-muted text-sm">
            No results match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
