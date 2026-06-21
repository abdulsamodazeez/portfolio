import { Github, Linkedin, Twitter, Globe, BookOpen, Mail } from "lucide-react";
import { site, socials } from "@/lib/data";

const socialLinks = [
  { href: socials.github, label: "GitHub", icon: Github },
  { href: socials.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: socials.twitter, label: "Twitter", icon: Twitter },
  { href: socials.hashnode, label: "Blog", icon: BookOpen },
  { href: socials.website, label: "Website", icon: Globe },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-px flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-1">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
