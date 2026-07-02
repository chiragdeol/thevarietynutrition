import { t as supabase } from "./client-fTip6HW0.mjs";
import { N as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-OuBpmKUY.js
var $$splitComponentImporter = () => import("./products._slug-CX5IbgvO.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: async ({ params }) => {
		const { data } = await supabase.from("products").select("*, categories(name,slug)").eq("slug", params.slug).eq("active", true).maybeSingle();
		if (!data) throw notFound();
		return { product: data };
	},
	head: ({ loaderData, params }) => {
		const p = loaderData?.product;
		if (!p) return {};
		const priceINR = (p.price_cents / 100).toFixed(2);
		const availability = p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";
		return {
			meta: [
				{ title: `${p.name} — Buy Online at The Variety Nutrition` },
				{
					name: "description",
					content: (p.short_description ?? p.description ?? `Buy ${p.name} online.`).slice(0, 158)
				},
				{
					property: "og:title",
					content: `${p.name} — The Variety Nutrition`
				},
				{
					property: "og:description",
					content: (p.short_description ?? "").slice(0, 200)
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `/products/${params.slug}`
				},
				{
					property: "product:price:amount",
					content: priceINR
				},
				{
					property: "product:price:currency",
					content: "INR"
				},
				{
					property: "product:availability",
					content: p.stock > 0 ? "in stock" : "out of stock"
				},
				...p.image_url ? [
					{
						property: "og:image",
						content: p.image_url
					},
					{
						property: "og:image:alt",
						content: p.name
					},
					{
						name: "twitter:image",
						content: p.image_url
					}
				] : []
			],
			links: [{
				rel: "canonical",
				href: `/products/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					name: p.name,
					description: p.description ?? p.short_description ?? void 0,
					image: p.image_url ? [p.image_url] : void 0,
					sku: p.id,
					brand: {
						"@type": "Brand",
						name: "The Variety Nutrition"
					},
					category: p.categories?.name,
					offers: {
						"@type": "Offer",
						url: `/products/${params.slug}`,
						priceCurrency: "INR",
						price: priceINR,
						availability,
						itemCondition: "https://schema.org/NewCondition",
						seller: {
							"@type": "Organization",
							name: "The Variety Nutrition"
						}
					},
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: "4.8",
						reviewCount: "240"
					}
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "/"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Shop",
							item: "/products"
						},
						...p.categories ? [{
							"@type": "ListItem",
							position: 3,
							name: p.categories.name,
							item: `/category/${p.categories.slug}`
						}] : [],
						{
							"@type": "ListItem",
							position: p.categories ? 4 : 3,
							name: p.name,
							item: `/products/${params.slug}`
						}
					]
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
