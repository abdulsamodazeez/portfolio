import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { site, socials } from "@/lib/data";

const channels = [
  { href: socials.github, label: "GitHub", icon: Github },
  { href: socials.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: socials.twitter, label: "Twitter", icon: Twitter },
  { href: socials.hashnode, label: "Hashnode", icon: BookOpen },
  { href: socials.website, label: "Website", icon: Globe },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's build something">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m open to roles, collaborations, and conversations about AI,
            ML, and using data to solve hard problems. The fastest way to reach
            me is email, and I read every message.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-3 text-foreground"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-accent">
                <Mail className="h-4 w-4" />
              </span>
              <span className="font-medium group-hover:text-accent">
                {site.email}
              </span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-accent">
                <MapPin className="h-4 w-4" />
              </span>
              <span>{site.location}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="mb-5 text-base font-semibold uppercase tracking-wide">
              Find me online
            </h3>
            <div className="grid gap-2.5">
              {channels.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 transition-colors hover:border-accent/50"
                >
                  <span className="flex items-center gap-3 text-base font-medium">
                    <Icon className="h-5 w-5 text-accent" />
                    {label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
