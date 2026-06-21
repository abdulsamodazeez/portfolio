"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileText,
} from "lucide-react";
import { site, socials } from "@/lib/data";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % site.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" aria-hidden />

      <div className="container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for select opportunities
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>.
          </h1>

          <div className="mt-6 flex h-10 items-center text-2xl font-medium text-muted-foreground sm:text-3xl">
            <span className="font-mono text-accent">{"> "}</span>
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="ml-2"
            >
              {site.roles[roleIndex]}
            </motion.span>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {site.tagline}
          </p>

          <div className="mt-6 flex items-center gap-2 text-base text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {site.location}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-base font-medium transition-colors hover:border-accent/50"
            >
              <FileText className="h-4 w-4" />
              Résumé
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: socials.github, label: "GitHub", icon: Github },
                { href: socials.linkedin, label: "LinkedIn", icon: Linkedin },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:border-accent/50"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
