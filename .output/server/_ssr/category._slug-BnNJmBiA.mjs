import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ProductCard } from "./ProductCard-BRhZZu1J.mjs";
import { t as Route } from "./category._slug-CzF3KXck.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-BnNJmBiA.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category, products } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-secondary/60 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl md:text-5xl text-primary",
				children: category.name
			}), category.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground max-w-xl mx-auto",
				children: category.description
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 py-10",
		children: products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-muted-foreground py-20",
			children: "No products yet in this category."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
			children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
		})
	})] });
}
//#endregion
export { CategoryPage as component };
