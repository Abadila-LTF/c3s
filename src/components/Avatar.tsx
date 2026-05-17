import {Crown, Star} from 'lucide-react';

const PALETTES = [
  ['from-[var(--color-navy-700)]', 'to-[var(--color-teal-500)]'],
  ['from-[var(--color-coral-500)]', 'to-[var(--color-amber-400)]'],
  ['from-[var(--color-teal-500)]', 'to-[var(--color-coral-500)]'],
  ['from-[var(--color-navy-500)]', 'to-[var(--color-coral-500)]'],
  ['from-[var(--color-amber-400)]', 'to-[var(--color-coral-500)]'],
  ['from-[var(--color-teal-600)]', 'to-[var(--color-navy-700)]']
] as const;

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function initials(name: string) {
  const parts = name
    .replace(/^Pr\.?\s*/i, '')
    .replace(/^Dr\.?\s*/i, '')
    .replace(/['\u2019]/g, ' ')
    .split(/\s+/)
    .filter((p) => p.length > 0 && !/^\.+$/.test(p));
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  const last = parts[parts.length - 1]!;
  return (parts[0]![0]! + last[0]!).toUpperCase();
}

export function Avatar({
  name,
  size = 'md',
  isLead = false,
  isDirector = false
}: {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLead?: boolean;
  isDirector?: boolean;
}) {
  const palette = PALETTES[hash(name) % PALETTES.length]!;
  const sizeClass =
    size === 'xl'
      ? 'size-20 text-2xl'
      : size === 'lg'
        ? 'size-14 text-lg'
        : size === 'md'
          ? 'size-11 text-sm'
          : 'size-9 text-xs';

  return (
    <div className="relative shrink-0">
      <div
        className={`${sizeClass} rounded-full bg-gradient-to-br ${palette[0]} ${palette[1]} grid place-items-center font-bold text-white shadow-sm`}
        aria-hidden="true"
      >
        {initials(name)}
      </div>
      {isDirector && (
        <span className="absolute -top-1 -right-1 size-5 rounded-full bg-[var(--color-amber-400)] grid place-items-center shadow-sm ring-2 ring-[var(--card)]">
          <Crown className="size-3 text-[var(--color-navy-900)]" strokeWidth={2.5} />
        </span>
      )}
      {isLead && !isDirector && (
        <span className="absolute -top-1 -right-1 size-5 rounded-full bg-[var(--color-teal-500)] grid place-items-center shadow-sm ring-2 ring-[var(--card)]">
          <Star className="size-3 text-white" strokeWidth={2.5} />
        </span>
      )}
    </div>
  );
}
