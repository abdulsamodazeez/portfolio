import { Section } from "./section";
import { Reveal } from "./reveal";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Turning data & AI into real-world impact">
      <div className="grid gap-14 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {about.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="text-4xl font-bold text-accent sm:text-5xl">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground sm:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
