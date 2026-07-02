import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/products", "/recipes", "/about", "/contact", "/auth"];
        const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
          auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
        });
        const { data: cats } = await supabase.from("categories").select("slug");
        const { data: prods } = await supabase.from("products").select("slug,updated_at").eq("active", true);
        const { data: posts } = await supabase.from("blog_posts").select("slug,updated_at").eq("published", true);

        const urls: { path: string; lastmod?: string }[] = [
          ...staticPaths.map((p) => ({ path: p })),
          ...(cats ?? []).map((c) => ({ path: `/category/${c.slug}` })),
          ...(prods ?? []).map((p) => ({ path: `/products/${p.slug}`, lastmod: p.updated_at })),
          ...(posts ?? []).map((p) => ({ path: `/recipes/${p.slug}`, lastmod: p.updated_at })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls.map(
            (u) =>
              `  <url><loc>${BASE_URL}${u.path}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`,
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
