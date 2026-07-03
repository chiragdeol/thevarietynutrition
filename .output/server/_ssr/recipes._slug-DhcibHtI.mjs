import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./recipes._slug-DIiM-xxA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recipes._slug-DhcibHtI.js
var import_jsx_runtime = require_jsx_runtime();
function Post() {
	const { post } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/recipes",
				className: "text-sm text-muted-foreground hover:text-accent",
				children: "← Back to recipes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl md:text-5xl text-primary mt-6",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm text-muted-foreground mt-2",
				children: [
					post.author_name,
					" · ",
					new Date(post.published_at).toLocaleDateString()
				]
			}),
			post.cover_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-8 aspect-[3/2] rounded-2xl overflow-hidden bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.cover_image,
					alt: post.title,
					loading: "eager",
					decoding: "async",
					className: "w-full h-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose max-w-none whitespace-pre-wrap font-sans leading-relaxed text-foreground",
				children: post.content.split("\n").map((line, i) => {
					if (line.startsWith("## ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl mt-8 mb-3 text-primary",
						children: line.slice(3)
					}, i);
					if (line.startsWith("- ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "ml-6 list-disc",
						children: line.slice(2)
					}, i);
					if (/^\d+\. /.test(line)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "ml-6 list-decimal",
						children: line.replace(/^\d+\.\s/, "")
					}, i);
					if (!line.trim()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}, i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: line
					}, i);
				})
			})
		]
	});
}
//#endregion
export { Post as component };
