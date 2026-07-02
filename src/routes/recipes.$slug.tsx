import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/recipes/$slug")({
  loader: async ({ params }) => {
    const { data } = await supabase.from("blog_posts").select("*").eq("slug", params.slug).eq("published", true).maybeSingle();
    if (!data) throw notFound();
    return { post: data };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.post;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — The Variety Nutrition` },
        { name: "description", content: (p.excerpt ?? "").slice(0, 158) },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/recipes/${params.slug}` },
        { property: "article:published_time", content: p.published_at ?? "" },
        { property: "article:author", content: p.author_name ?? "The Variety Nutrition" },
        ...(p.cover_image ? [{ property: "og:image", content: p.cover_image }, { property: "og:image:alt", content: p.title }, { name: "twitter:image", content: p.cover_image }] : []),
      ],
      links: [{ rel: "canonical", href: `/recipes/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt ?? undefined,
            image: p.cover_image ? [p.cover_image] : undefined,
            datePublished: p.published_at ?? undefined,
            author: { "@type": "Person", name: p.author_name ?? "The Variety Nutrition" },
            publisher: {
              "@type": "Organization",
              name: "The Variety Nutrition",
              logo: { "@type": "ImageObject", url: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png" },
            },
            mainEntityOfPage: `/recipes/${params.slug}`,
          }),
        },
      ],
    };
  },
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/recipes" className="text-sm text-muted-foreground hover:text-accent">← Back to recipes</Link>
      <h1 className="font-serif text-4xl md:text-5xl text-primary mt-6">{post.title}</h1>
      <div className="text-sm text-muted-foreground mt-2">{post.author_name} · {new Date(post.published_at).toLocaleDateString()}</div>
      {post.cover_image && (
        <div className="my-8 aspect-[3/2] rounded-2xl overflow-hidden bg-secondary">
          <img src={post.cover_image} alt={post.title} loading="eager" decoding="async" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="prose max-w-none whitespace-pre-wrap font-sans leading-relaxed text-foreground">
        {post.content.split("\n").map((line: string, i: number) => {
          if (line.startsWith("## ")) return <h2 key={i} className="font-serif text-2xl mt-8 mb-3 text-primary">{line.slice(3)}</h2>;
          if (line.startsWith("- ")) return <li key={i} className="ml-6 list-disc">{line.slice(2)}</li>;
          if (/^\d+\. /.test(line)) return <li key={i} className="ml-6 list-decimal">{line.replace(/^\d+\.\s/, "")}</li>;
          if (!line.trim()) return <br key={i} />;
          return <p key={i} className="mt-3">{line}</p>;
        })}
      </div>
    </article>
  );
}
