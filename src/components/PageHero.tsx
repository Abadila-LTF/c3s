import {ReactNode} from 'react';

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <div className="absolute inset-0 gradient-hero -z-10 opacity-70" />
      <div className="absolute inset-0 grid-bg -z-10 opacity-40" />
      <div className="container-page py-14 sm:py-20 lg:py-24">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-500)]">
          {eyebrow}
        </div>
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
