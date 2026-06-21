import { ArrowUpRight, Clock } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { getLatestPosts } from "@/lib/hashnode";
import { site } from "@/lib/data";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export async function Blog() {
  const posts = await getLatestPosts(6);

  return (
    <Section
      id="blog"
      eyebrow="05 — Writing"
      title="From the blog"
      description="Notes on machine learning, MLOps, and building real systems with AI."
    >
      {posts.length === 0 ? (
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              My latest articles live on Hashnode.
            </p>
            <a
              href={site.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Visit the blog <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50"
                >
                  {post.coverImage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.coverImage}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTimeInMinutes} min
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-base text-muted-foreground">
                      {post.brief}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-base font-medium text-accent">
                      Read article{" "}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <a
                href={site.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50"
              >
                View all posts on Hashnode
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </>
      )}
    </Section>
  );
}
