import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PageHero} from '@/components/PageHero';
import {Card} from '@/components/Section';
import {Reveal} from '@/components/Reveal';
import {Avatar} from '@/components/Avatar';
import {Linkedin, GraduationCap, ExternalLink} from 'lucide-react';
import {MEMBERS, TEAM_TOPICS, type TeamId, type Member} from '@/data/lab';

const TEAMS: TeamId[] = ['dsis', 'bdios', 'gedis', 'd2sf'];

const TEAM_GRADIENTS: Record<TeamId, string> = {
  dsis: 'from-[var(--color-coral-500)]/30 to-[var(--color-amber-400)]/20',
  bdios: 'from-[var(--color-teal-500)]/30 to-[var(--color-navy-500)]/20',
  gedis: 'from-[var(--color-navy-500)]/30 to-[var(--color-coral-500)]/20',
  d2sf: 'from-[var(--color-amber-400)]/30 to-[var(--color-teal-500)]/20'
};

function scopusHref(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  return `https://www.scopus.com/authid/detail.uri?authorId=${value}`;
}

function MemberLinks({member}: {member: Member}) {
  if (
    !member.linkedin &&
    !member.scholar &&
    !member.orcid &&
    !member.scopus
  )
    return null;
  return (
    <div className="flex items-center gap-1.5">
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} profile`}
          className="size-7 rounded-full border hairline grid place-items-center text-muted hover:text-[var(--fg)] hover:bg-[var(--surface-2)]"
        >
          <Linkedin className="size-3" />
        </a>
      )}
      {member.scholar && (
        <a
          href={member.scholar}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} on Google Scholar`}
          className="size-7 rounded-full border hairline grid place-items-center text-muted hover:text-[var(--fg)] hover:bg-[var(--surface-2)]"
        >
          <GraduationCap className="size-3.5" />
        </a>
      )}
      {member.orcid && (
        <a
          href={`https://orcid.org/${member.orcid}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} ORCID`}
          className="px-2 h-7 rounded-full border hairline grid place-items-center text-[10px] font-bold tracking-wider text-muted hover:text-[var(--fg)] hover:bg-[var(--surface-2)]"
        >
          ORCID
        </a>
      )}
      {member.scopus && (
        <a
          href={scopusHref(member.scopus)}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} on Scopus`}
          className="px-2 h-7 rounded-full border hairline grid place-items-center text-[10px] font-bold tracking-wider text-muted hover:text-[var(--fg)] hover:bg-[var(--surface-2)]"
        >
          SCOPUS
        </a>
      )}
    </div>
  );
}

export default async function TeamsPage({
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
        eyebrow={t('teams.eyebrow')}
        title={t('teams.title')}
        subtitle={t('teams.subtitle')}
      />

      <section className="container-page py-16 sm:py-20 space-y-16">
        {TEAMS.map((id, i) => {
          const members = MEMBERS.filter((m) => m.team === id);
          const lead = members.find((m) => m.isLead);
          const others = members.filter((m) => !m.isLead);
          return (
            <Reveal key={id} delay={i * 0.05}>
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5">
                  <div
                    className={`relative rounded-3xl border hairline p-8 lg:p-10 bg-gradient-to-br ${TEAM_GRADIENTS[id]} overflow-hidden`}
                  >
                    <div className="text-[6rem] sm:text-[8rem] font-black tracking-tight leading-none gradient-text">
                      {t(`teams.${id}.name`)}
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                      {t(`teams.${id}.fullName`)}
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      {t(`teams.${id}.tagline`)}
                    </div>
                    <p className="mt-6 text-sm leading-relaxed">
                      {t(`teams.${id}.description`)}
                    </p>

                    <div className="mt-6">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {t('teams.topics')}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {TEAM_TOPICS[id].map((topic) => (
                          <span key={topic} className="chip">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  {lead && (
                    <Card className="border-[var(--color-teal-500)]/40">
                      <div className="flex items-start gap-4">
                        <Avatar name={lead.name} size="lg" isLead isDirector={lead.role?.includes('Director')} />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-wider text-[var(--color-teal-600)] font-semibold">
                            {lead.role ?? t('teams.teamLead')}
                          </div>
                          <div className="text-lg font-semibold mt-0.5">
                            {lead.name}
                          </div>
                          <div className="mt-2">
                            <MemberLinks member={lead} />
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}

                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted font-semibold mb-3">
                      {t('teams.members')} · {members.length}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {others.map((m) => (
                        <div
                          key={m.name}
                          className="card border rounded-xl p-4 flex items-center gap-3 hover:-translate-y-0.5 transition"
                        >
                          <Avatar
                            name={m.name}
                            size="md"
                            isDirector={m.role?.includes('Director · C3S')}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium truncate">
                              {m.name}
                            </div>
                            {m.role && (
                              <div className="text-[11px] text-muted truncate">
                                {m.role}
                              </div>
                            )}
                          </div>
                          <MemberLinks member={m} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>
    </>
  );
}
