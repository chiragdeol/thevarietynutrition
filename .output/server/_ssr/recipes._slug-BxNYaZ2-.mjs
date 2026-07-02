import { t as supabase } from "./client-6ujG9vBg.mjs";
import { N as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recipes._slug-BxNYaZ2-.js
var $$splitComponentImporter = () => import("./recipes2._slug-BfGWXsCD.mjs");
var Route = createFileRoute("/recipes/$slug")({
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
				{
					name: "description",
					content: (p.excerpt ?? "").slice(0, 158)
				},
				{
					property: "og:title",
					content: p.title
				},
				{
					property: "og:description",
					content: p.excerpt ?? ""
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/recipes/${params.slug}`
				},
				{
					property: "article:published_time",
					content: p.published_at ?? ""
				},
				{
					property: "article:author",
					content: p.author_name ?? "The Variety Nutrition"
				},
				...p.cover_image ? [
					{
						property: "og:image",
						content: p.cover_image
					},
					{
						property: "og:image:alt",
						content: p.title
					},
					{
						name: "twitter:image",
						content: p.cover_image
					}
				] : []
			],
			links: [{
				rel: "canonical",
				href: `/recipes/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: p.title,
					description: p.excerpt ?? void 0,
					image: p.cover_image ? [p.cover_image] : void 0,
					datePublished: p.published_at ?? void 0,
					author: {
						"@type": "Person",
						name: p.author_name ?? "The Variety Nutrition"
					},
					publisher: {
						"@type": "Organization",
						name: "The Variety Nutrition",
						logo: {
							"@type": "ImageObject",
							url: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png"
						}
					},
					mainEntityOfPage: `/recipes/${params.slug}`
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
