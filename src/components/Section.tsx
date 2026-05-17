import {ReactNode} from 'react';

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left'
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}
    >
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-500)]">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card border rounded-2xl p-6 transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}
