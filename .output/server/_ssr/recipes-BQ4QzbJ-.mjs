import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-fTip6HW0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recipes-BQ4QzbJ-.js
var import_jsx_runtime = require_jsx_runtime();
function Recipes() {
	const { data } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => (await supabase.from("blog_posts").select("*").eq("published", true).order("published_at", { ascending: false })).data ?? []
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center mb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
					children: "The Journal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-5xl text-primary mt-2",
					children: "Recipes & Stories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-3 max-w-xl mx-auto",
					children: "Simple, wholesome recipes and behind-the-scenes stories."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 gap-8",
			children: data?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/recipes/$slug",
				params: { slug: p.slug },
				className: "group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[3/2] rounded-2xl overflow-hidden bg-secondary",
						children: p.cover_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.cover_image,
							alt: p.title,
							loading: "lazy",
							className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl mt-4 group-hover:text-accent transition-colors",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2",
						children: p.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground mt-2",
						children: [
							p.author_name,
							" · ",
							new Date(p.published_at).toLocaleDateString()
						]
					})
				]
			}, p.id))
		})]
	});
}
//#endregion
export { Recipes as component };
