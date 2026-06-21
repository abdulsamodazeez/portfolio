import { site } from "./data";

export type BlogPost = {
  title: string;
  brief: string;
  slug: string;
  url: string;
  coverImage: string | null;
  publishedAt: string;
  readTimeInMinutes: number;
};

const HASHNODE_API = "https://gql.hashnode.com/";

const POSTS_QUERY = `
  query Publication($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            title
            brief
            slug
            url
            readTimeInMinutes
            publishedAt
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetches the latest posts from Hashnode via their public GraphQL API.
 * Revalidates hourly so new posts appear without a rebuild.
 * Returns [] on any failure so the UI degrades gracefully.
 */
export async function getLatestPosts(first = 6): Promise<BlogPost[]> {
  try {
    const res = await fetch(HASHNODE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: POSTS_QUERY,
        variables: { host: site.blogHost, first },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const json = await res.json();
    const edges = json?.data?.publication?.posts?.edges ?? [];

    return edges.map((edge: any) => ({
      title: edge.node.title,
      brief: edge.node.brief,
      slug: edge.node.slug,
      url: edge.node.url,
      coverImage: edge.node.coverImage?.url ?? null,
      publishedAt: edge.node.publishedAt,
      readTimeInMinutes: edge.node.readTimeInMinutes ?? 1,
    }));
  } catch {
    return [];
  }
}
