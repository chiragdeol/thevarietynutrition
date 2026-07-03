import { t as supabase } from "./client-6ujG9vBg.mjs";
import { N as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-oCo1yzzv.js
var $$splitComponentImporter = () => import("./category._slug-BLPFXcGd.mjs");
var Route = createFileRoute("/category/$slug")({
	loader: async ({ params }) => {
		const { data: cat } = await supabase.from("categories").select("*").eq("slug", params.slug).maybeSingle();
		if (!cat) throw notFound();
		const { data: products } = await supabase.from("products").select("id,slug,name,short_description,price_cents,compare_at_price_cents,image_url").eq("category_id", cat.id).eq("active", true);
		return {
			category: cat,
			products: products ?? []
		};
	},
	head: ({ loaderData, params }) => {
		const c = loaderData?.category;
		const products = loaderData?.products ?? [];
		return {
			meta: c ? [
				{ title: `Buy ${c.name} Online — The Variety Nutrition` },
				{
					name: "description",
					content: c.description ?? `Shop premium ${c.name} from The Variety Nutrition. 100% natural, farm-fresh, delivered across India.`
				},
				{
					property: "og:title",
					content: `${c.name} — The Variety Nutrition`
				},
				{
					property: "og:description",
					content: c.description ?? `Premium ${c.name} online in India.`
				},
				{
					property: "og:url",
					content: `/category/${params.slug}`
				},
				{
					property: "og:type",
					content: "website"
				},
				...c.image_url ? [{
					property: "og:image",
					content: c.image_url
				}, {
					property: "og:image:alt",
					content: c.name
				}] : []
			] : [],
			links: c ? [{
				rel: "canonical",
				href: `/category/${params.slug}`
			}] : [],
			scripts: c ? [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "CollectionPage",
					name: c.name,
					description: c.description ?? void 0,
					url: `/category/${params.slug}`,
					mainEntity: {
						"@type": "ItemList",
						numberOfItems: products.length,
						itemListElement: products.slice(0, 20).map((p, i) => ({
							"@type": "ListItem",
							position: i + 1,
							url: `/products/${p.slug}`,
							name: p.name
						}))
					}
				})
			}] : []
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
