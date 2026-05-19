'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {
  Search,
  FileText,
  BookOpen,
  Mic,
  ExternalLink,
  X,
  ArrowDownUp,
  Sparkles
} from 'lucide-react';
import {PUBLICATIONS, type Publication} from '@/data/lab';

type TypeId = Publication['type'];
type TeamId = 'dsis' | 'bdios' | 'gedis' | 'd2sf';
type SortId = 'newest' | 'oldest' | 'title';

const TYPE_META: Record<
  TypeId,
  {labelKey: string; Icon: React.ComponentType<{className?: string}>; color: string; hex: string}
> = {
  journal: {
    labelKey: 'journal',
    Icon: BookOpen,
    color: 'text-[var(--color-teal-600)]',
    hex: 'var(--color-teal-500)'
  },
  conference: {
    labelKey: 'conference',
    Icon: FileText,
    color: 'text-[var(--color-navy-600)]',
    hex: 'var(--color-coral-500)'
  },
  communication: {
    labelKey: 'communication',
    Icon: Mic,
    color: 'text-[var(--color-coral-500)]',
    hex: 'var(--color-amber-400)'
  }
};

const TEAMS: TeamId[] = ['dsis', 'bdios', 'gedis', 'd2sf'];

const PAGE_SIZE = 30;

export function PublicationsList() {
  const t = useTranslations('publications');
  const [query, setQuery] = useState('');
  const [year, setYear] = useState<'all' | number>('all');
  const [type, setType] = useState<'all' | TypeId>('all');
  const [team, setTeam] = useState<'all' | TeamId>('all');
  const [sort, setSort] = useState<SortId>('newest');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const allYears = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const set = new Set<number>(PUBLICATIONS.map((p) => p.year));
    set.add(currentYear);
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  // Stats are computed from the full dataset, independent of filters
  const stats = useMemo(() => {
    const total = PUBLICATIONS.length;
    const journals = PUBLICATIONS.filter((p) => p.type === 'journal').length;
    const conferences = PUBLICATIONS.filter((p) => p.type === 'conference').length;
    const years = PUBLICATIONS.map((p) => p.year);
    const yearMin = Math.min(...years);
    const yearMax = Math.max(...years);
    const venues = new Set(PUBLICATIONS.map((p) => p.venue.trim().toLowerCase())).size;
    const perYear = new Map<number, number>();
    for (const p of PUBLICATIONS) perYear.set(p.year, (perYear.get(p.year) ?? 0) + 1);
    let peakYear = yearMax;
    let peakCount = 0;
    for (const [y, c] of perYear) {
      if (c > peakCount) {
        peakCount = c;
        peakYear = y;
      }
    }
    return {total, journals, conferences, yearMin, yearMax, venues, peakYear, peakCount};
  }, []);

  // Per-year buckets (only years that actually have publications)
  const perYearData = useMemo(() => {
    const map = new Map<number, number>();
    for (const p of PUBLICATIONS) map.set(p.year, (map.get(p.year) ?? 0) + 1);
    return Array.from(map.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([y, c]) => ({year: y, count: c}));
  }, []);

  const perTypeData = useMemo(() => {
    const map = new Map<TypeId, number>();
    for (const p of PUBLICATIONS) map.set(p.type, (map.get(p.type) ?? 0) + 1);
    return Array.from(map.entries()).map(([k, v]) => ({type: k, count: v}));
  }, []);

  const filtered = useMemo(() => {
    const out = PUBLICATIONS.filter((p) => {
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
    });
    if (sort === 'newest') out.sort((a, b) => b.year - a.year);
    else if (sort === 'oldest') out.sort((a, b) => a.year - b.year);
    else out.sort((a, b) => a.title.localeCompare(b.title));
    return out;
  }, [query, year, type, team, sort]);

  // Clamp visible count to current result set (avoids stale "load more" state)
  const effectiveCount = Math.min(visibleCount, filtered.length);
  const visible = filtered.slice(0, effectiveCount);
  const grouped = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const p of visible) {
      const arr = map.get(p.year) ?? [];
      arr.push(p);
      map.set(p.year, arr);
    }
    return Array.from(map.entries());
  }, [visible]);

  const activeFilters: {key: string; label: string; onClear: () => void}[] = [];
  if (year !== 'all')
    activeFilters.push({key: 'year', label: String(year), onClear: () => setYear('all')});
  if (type !== 'all')
    activeFilters.push({
      key: 'type',
      label: t(`filters.${type}`),
      onClear: () => setType('all')
    });
  if (team !== 'all')
    activeFilters.push({
      key: 'team',
      label: team.toUpperCase(),
      onClear: () => setTeam('all')
    });
  if (query)
    activeFilters.push({
      key: 'q',
      label: `"${query}"`,
      onClear: () => setQuery('')
    });

  const clearAll = () => {
    setYear('all');
    setType('all');
    setTeam('all');
    setQuery('');
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="space-y-8">
      {/* Stats band */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <StatTile value={String(stats.total)} label={t('stats.total')} accent="teal" />
        <StatTile
          value={String(stats.journals)}
          label={t('stats.journals')}
          accent="coral"
        />
        <StatTile
          value={String(stats.conferences)}
          label={t('stats.conferences')}
          accent="navy"
        />
        <StatTile
          value={`${stats.yearMin}–${stats.yearMax}`}
          label={t('stats.yearSpan')}
          accent="teal"
          dense
        />
        <StatTile
          value={String(stats.venues)}
          label={t('stats.venues')}
          accent="amber"
        />
        <StatTile
          value={`${stats.peakYear}`}
          label={`${t('stats.peak')} · ${stats.peakCount}`}
          accent="coral"
          dense
        />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 rounded-2xl border hairline p-5 surface">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              {t('charts.byYearTitle')}
            </h3>
            <span className="text-xs text-muted hidden sm:inline">
              {t('charts.byYearHint')}
            </span>
          </div>
          <YearBars
            data={perYearData}
            selectedYear={year === 'all' ? null : year}
            onSelect={(y) => {
              setYear((prev) => (prev === y ? 'all' : y));
              setVisibleCount(PAGE_SIZE);
            }}
          />
        </div>
        <div className="lg:col-span-4 rounded-2xl border hairline p-5 surface">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {t('charts.byTypeTitle')}
          </h3>
          <TypeDonut
            data={perTypeData}
            selectedType={type === 'all' ? null : type}
            onSelect={(typ) => {
              setType((prev) => (prev === typ ? 'all' : typ));
              setVisibleCount(PAGE_SIZE);
            }}
            labels={{
              journal: t('filters.journal'),
              conference: t('filters.conference'),
              communication: t('filters.communication')
            }}
          />
        </div>
      </div>

      {/* Filter bar */}
      <div className="card border rounded-2xl p-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1 min-w-0">
          <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            placeholder={t('filters.search')}
            className="w-full rounded-xl border hairline pl-9 pr-3 py-2.5 text-sm bg-transparent focus:outline-none focus:border-[var(--color-teal-500)]"
          />
        </div>
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value === 'all' ? 'all' : Number(e.target.value));
            setVisibleCount(PAGE_SIZE);
          }}
          className="rounded-xl border hairline px-3 py-2.5 text-sm bg-transparent"
        >
          <option value="all">
            {t('filters.year')} · {t('filters.all')}
          </option>
          {allYears.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        {/* Team chip toggles */}
        <div className="flex items-center gap-1 flex-wrap">
          <ChipToggle
            active={team === 'all'}
            onClick={() => {
              setTeam('all');
              setVisibleCount(PAGE_SIZE);
            }}
          >
            {t('filters.team')} · {t('filters.all')}
          </ChipToggle>
          {TEAMS.map((tm) => (
            <ChipToggle
              key={tm}
              active={team === tm}
              onClick={() => {
                setTeam((prev) => (prev === tm ? 'all' : tm));
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {tm.toUpperCase()}
            </ChipToggle>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ArrowDownUp className="size-4 text-muted" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortId)}
            className="rounded-xl border hairline px-3 py-2.5 text-sm bg-transparent"
            aria-label={t('list.sort')}
          >
            <option value="newest">{t('list.sortNewest')}</option>
            <option value="oldest">{t('list.sortOldest')}</option>
            <option value="title">{t('list.sortTitle')}</option>
          </select>
        </div>
      </div>

      {/* Active filter pills + result count */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {activeFilters.length > 0 && (
            <span className="text-xs uppercase tracking-wider text-muted">
              {t('list.activeFilters')}:
            </span>
          )}
          {activeFilters.map((f) => (
            <button
              key={f.key}
              onClick={f.onClear}
              className="inline-flex items-center gap-1 rounded-full border hairline pl-3 pr-2 py-1 text-xs hover:border-[var(--color-coral-500)]/40 hover:text-[var(--color-coral-500)] transition"
            >
              {f.label}
              <X className="size-3" />
            </button>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-[var(--color-coral-500)] hover:underline ml-1"
            >
              {t('list.clearAll')}
            </button>
          )}
        </div>
        <span className="text-sm text-muted">
          {filtered.length} {filtered.length === 1 ? t('list.result') : t('list.results')}
        </span>
      </div>

      {/* Grouped result list */}
      <div className="space-y-6">
        {grouped.map(([y, items]) => (
          <div key={y}>
            <div className="sticky top-16 z-10 flex items-baseline gap-3 py-2 bg-[var(--background)]/85 backdrop-blur border-b hairline mb-3">
              <span className="text-xl font-bold gradient-text">{y}</span>
              <span className="text-xs uppercase tracking-wider text-muted">
                {items.length}{' '}
                {items.length === 1 ? t('list.result') : t('list.results')}
              </span>
            </div>
            <div className="grid gap-3">
              {items.map((p) => (
                <PubCard key={p.id} pub={p} t={t} />
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="card border rounded-2xl p-10 text-center text-muted text-sm">
            <Sparkles className="size-5 mx-auto mb-2 opacity-50" />
            {t('list.noResults')}
          </div>
        )}

        {visible.length < filtered.length && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="btn btn-ghost"
            >
              {t('list.loadMore')} ({visible.length} / {filtered.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function StatTile({
  value,
  label,
  accent,
  dense
}: {
  value: string;
  label: string;
  accent: 'teal' | 'coral' | 'navy' | 'amber';
  dense?: boolean;
}) {
  const accentClass = {
    teal: 'text-[var(--color-teal-600)]',
    coral: 'text-[var(--color-coral-500)]',
    navy: 'text-[var(--color-navy-700)] dark:text-[var(--color-teal-400)]',
    amber: 'text-[var(--color-amber-500)]'
  }[accent];
  return (
    <div className="rounded-2xl border hairline p-4 surface">
      <div className={`font-bold ${accentClass} ${dense ? 'text-xl' : 'text-2xl'}`}>
        {value}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted leading-snug">
        {label}
      </div>
    </div>
  );
}

function ChipToggle({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
        active
          ? 'bg-[var(--color-teal-500)]/15 border-[var(--color-teal-500)]/40 text-[var(--color-teal-600)]'
          : 'hairline text-muted hover:text-[var(--color-teal-600)] hover:border-[var(--color-teal-500)]/30'
      }`}
    >
      {children}
    </button>
  );
}

function PubCard({
  pub,
  t
}: {
  pub: Publication;
  t: ReturnType<typeof useTranslations<'publications'>>;
}) {
  const meta = TYPE_META[pub.type];
  const Icon = meta.Icon;
  const url = pub.doi ? `https://doi.org/${pub.doi}` : undefined;
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
      <div className="card border rounded-2xl p-5 flex items-start gap-4">{children}</div>
    );
  return (
    <Wrapper>
      <div className="size-10 rounded-xl bg-[var(--surface)] grid place-items-center shrink-0">
        <Icon className={`size-5 ${meta.color}`} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="chip uppercase tracking-wider">
            {t(`filters.${meta.labelKey}`)}
          </span>
          {pub.team && (
            <span className="chip uppercase tracking-wider">{pub.team}</span>
          )}
        </div>
        <h3 className="mt-2 font-semibold leading-snug">
          {pub.title}
          {url && (
            <ExternalLink className="size-3.5 inline ml-1.5 opacity-40 group-hover:opacity-100 -mt-0.5" />
          )}
        </h3>
        <p className="mt-1 text-sm text-muted">{pub.authors}</p>
        <p className="text-sm text-muted italic">{pub.venue}</p>
        {pub.doi && (
          <p className="mt-1 text-xs text-muted font-mono break-all">DOI: {pub.doi}</p>
        )}
      </div>
    </Wrapper>
  );
}

function YearBars({
  data,
  selectedYear,
  onSelect
}: {
  data: {year: number; count: number}[];
  selectedYear: number | null;
  onSelect: (year: number) => void;
}) {
  const max = Math.max(1, ...data.map((d) => d.count));
  return (
    <div className="mt-5">
      <div className="flex items-end gap-1.5 h-44">
        {data.map((d) => {
          const h = Math.max(4, (d.count / max) * 100);
          const isSel = selectedYear === d.year;
          return (
            <button
              key={d.year}
              onClick={() => onSelect(d.year)}
              title={`${d.year} — ${d.count}`}
              className="group relative flex-1 min-w-[10px] flex flex-col items-stretch justify-end h-full focus:outline-none"
            >
              <span
                className={`absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold transition ${
                  isSel
                    ? 'opacity-100 text-[var(--color-coral-500)]'
                    : 'opacity-0 group-hover:opacity-100 text-muted'
                }`}
              >
                {d.count}
              </span>
              <span
                style={{height: `${h}%`}}
                className={`block rounded-t-md transition ${
                  isSel
                    ? 'bg-[var(--color-coral-500)]'
                    : 'bg-gradient-to-t from-[var(--color-teal-500)]/40 to-[var(--color-teal-500)] group-hover:from-[var(--color-teal-500)]/60 group-hover:to-[var(--color-teal-400)]'
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-2 flex gap-1.5">
        {data.map((d, i) => {
          // Show every other label on narrow screens — keep them all on lg+
          const showAlways = i % 2 === 0 || i === data.length - 1;
          return (
            <span
              key={d.year}
              className={`flex-1 min-w-[10px] text-center text-[10px] text-muted tabular-nums ${
                showAlways ? '' : 'hidden lg:inline'
              }`}
            >
              {String(d.year).slice(-2)}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function TypeDonut({
  data,
  selectedType,
  onSelect,
  labels
}: {
  data: {type: TypeId; count: number}[];
  selectedType: TypeId | null;
  onSelect: (type: TypeId) => void;
  labels: Record<TypeId, string>;
}) {
  const total = data.reduce((s, d) => s + d.count, 0) || 1;
  const radius = 56;
  const circumference = 2 * Math.PI * radius;

  // Build segments (offsets along the stroke)
  let offset = 0;
  const segments = data.map((d) => {
    const len = (d.count / total) * circumference;
    const seg = {
      type: d.type,
      count: d.count,
      length: len,
      gap: circumference - len,
      offset
    };
    offset += len;
    return seg;
  });

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="relative">
        <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
          <circle cx="80" cy="80" r={radius} fill="none" stroke="var(--surface)" strokeWidth="18" />
          {segments.map((s) => {
            const isSel = selectedType === s.type;
            return (
              <circle
                key={s.type}
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke={TYPE_META[s.type].hex}
                strokeWidth={isSel ? 22 : 18}
                strokeDasharray={`${s.length} ${s.gap}`}
                strokeDashoffset={-s.offset}
                strokeLinecap="butt"
                onClick={() => onSelect(s.type)}
                className="cursor-pointer transition-[stroke-width] hover:opacity-90"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">{total}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted">total</div>
          </div>
        </div>
      </div>
      <ul className="mt-4 w-full space-y-1.5">
        {data.map((d) => {
          const isSel = selectedType === d.type;
          const pct = Math.round((d.count / total) * 100);
          return (
            <li key={d.type}>
              <button
                onClick={() => onSelect(d.type)}
                className={`w-full flex items-center justify-between gap-3 text-xs px-2 py-1.5 rounded-lg transition ${
                  isSel ? 'bg-[var(--surface)]' : 'hover:bg-[var(--surface)]'
                }`}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <span
                    className="size-2.5 rounded-full shrink-0"
                    style={{background: TYPE_META[d.type].hex}}
                  />
                  <span className="truncate">{labels[d.type]}</span>
                </span>
                <span className="tabular-nums text-muted">
                  {d.count} · {pct}%
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
