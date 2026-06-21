import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-28 sm:py-36 ${className ?? ""}`}
    >
      <div className="container-px">
        {(eyebrow || title) && (
          <Reveal className="mb-16 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 font-mono text-base font-medium text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
