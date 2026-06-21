import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Selected work"
      description="A few systems I've built end-to-end — from raw data and modelling through to deployment and monitoring."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50">
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                  {project.title}
                </h3>
                {project.links?.[0] && (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="text-muted-foreground transition-colors group-hover:text-accent"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                )}
              </div>

              <p className="text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-base text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
