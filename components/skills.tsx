import { Section } from "./section";
import { Reveal } from "./reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Technical toolkit"
      description="The tools and technologies I reach for to take models from notebook to production — and keep them running."
      className="bg-muted/30"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-5 text-base font-semibold uppercase tracking-wide text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
