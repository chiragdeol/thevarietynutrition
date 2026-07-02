import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [
      { title: "Healthy Recipes & Nutrition Stories — The Variety Nutrition" },
      { name: "description", content: "Simple, wholesome recipes and stories featuring premium dry fruits, nuts, seeds and Ayurvedic herbs." },
      { property: "og:title", content: "Recipes & Stories — The Variety Nutrition" },
      { property: "og:description", content: "Healthy recipes with dry fruits, nuts and seeds." },
      { property: "og:url", content: "/recipes" },
    ],
    links: [{ rel: "canonical", href: "/recipes" }],
  }),
  component: Recipes,
});

function Recipes() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => (await supabase.from("blog_posts").select("*").eq("published", true).order("published_at", { ascending: false })).data ?? [],
  });
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">The Journal</span>
        <h1 className="font-serif text-5xl text-primary mt-2">Recipes & Stories</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Simple, wholesome recipes and behind-the-scenes stories.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {data?.map((p) => (
          <Link key={p.id} to="/recipes/$slug" params={{ slug: p.slug }} className="group">
            <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-secondary">
              {p.cover_image && <img src={p.cover_image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
            </div>
            <h2 className="font-serif text-2xl mt-4 group-hover:text-accent transition-colors">{p.title}</h2>
            <p className="text-muted-foreground mt-2">{p.excerpt}</p>
            <div className="text-xs text-muted-foreground mt-2">{p.author_name} · {new Date(p.published_at).toLocaleDateString()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
