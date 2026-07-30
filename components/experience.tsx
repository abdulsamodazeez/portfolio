import { Award, GraduationCap, Users, BookText } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import {
  experiences,
  education,
  certifications,
  community,
  publications,
} from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title="Where I've worked"
      description="Years of experience across ML engineering, data science, software, and mentorship."
      className="bg-muted/30"
    >
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <ol className="relative border-l border-border">
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.company}-${i}`} delay={i * 0.05}>
                <li className="mb-12 ml-8">
                  <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold sm:text-2xl">
                      {exp.role}{" "}
                      <span className="text-accent">· {exp.company}</span>
                    </h3>
                    <span className="font-mono text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {exp.description.map((d, j) => (
                      <li
                        key={j}
                        className="text-base leading-relaxed text-muted-foreground"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Side panels */}
        <div className="space-y-6">
          <Reveal>
            <Panel icon={GraduationCap} title="Education">
              {education.map((e) => (
                <div key={e.school}>
                  <p className="font-medium text-foreground">{e.degree}</p>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {e.period}
                  </p>
                </div>
              ))}
            </Panel>
          </Reveal>

          <Reveal delay={0.05}>
            <Panel icon={Award} title="Certifications">
              {certifications.map((c) => (
                <div key={c.name}>
                  <p className="font-medium text-foreground">{c.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {c.issuer} · {c.date}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    ID: {c.credentialId}
                  </p>
                </div>
              ))}
            </Panel>
          </Reveal>

          <Reveal delay={0.1}>
            <Panel icon={Users} title="Community & Leadership">
              <ul className="space-y-2">
                {community.map((c) => (
                  <li key={c.org} className="text-sm">
                    <span className="font-medium text-foreground">{c.role}</span>
                    <span className="text-muted-foreground"> — {c.org}</span>
                    {c.period && (
                      <span className="block font-mono text-xs text-muted-foreground">
                        {c.period}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>

          <Reveal delay={0.15}>
            <Panel icon={BookText} title="Publications">
              {publications.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="font-medium text-foreground group-hover:text-accent">
                    {p.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{p.venue}</p>
                </a>
              ))}
            </Panel>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Panel({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-accent" />
        <h3 className="text-base font-semibold uppercase tracking-wide">
          {title}
        </h3>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
