import { createFileRoute, notFound } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardData } from "@/components/ProductCard";

export const Route = createFileRoute("/category/$slug")({
  loader: async ({ params }) => {
    const { data: cat } = await supabase.from("categories").select("*").eq("slug", params.slug).maybeSingle();
    if (!cat) throw notFound();
    const { data: products } = await supabase
      .from("products")
      .select("id,slug,name,short_description,price_cents,compare_at_price_cents,image_url")
      .eq("category_id", cat.id)
      .eq("active", true);
    return { category: cat, products: (products ?? []) as ProductCardData[] };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.category;
    const products = loaderData?.products ?? [];
    return {
      meta: c
        ? [
            { title: `Buy ${c.name} Online — The Variety Nutrition` },
            { name: "description", content: c.description ?? `Shop premium ${c.name} from The Variety Nutrition. 100% natural, farm-fresh, delivered across India.` },
            { property: "og:title", content: `${c.name} — The Variety Nutrition` },
            { property: "og:description", content: c.description ?? `Premium ${c.name} online in India.` },
            { property: "og:url", content: `/category/${params.slug}` },
            { property: "og:type", content: "website" },
            ...(c.image_url ? [{ property: "og:image", content: c.image_url }, { property: "og:image:alt", content: c.name }] : []),
          ]
        : [],
      links: c ? [{ rel: "canonical", href: `/category/${params.slug}` }] : [],
      scripts: c
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: c.name,
                description: c.description ?? undefined,
                url: `/category/${params.slug}`,
                mainEntity: {
                  "@type": "ItemList",
                  numberOfItems: products.length,
                  itemListElement: products.slice(0, 20).map((p, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    url: `/products/${p.slug}`,
                    name: p.name,
                  })),
                },
              }),
            },
          ]
        : [],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  return (
    <div>
      <div className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary">{category.name}</h1>
          {category.description && <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{category.description}</p>}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10">
        {products.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No products yet in this category.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((p: ProductCardData) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
