import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Heart, c as Trash2, f as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as useCart } from "./cart-JVZU3Fe9.mjs";
import { r as useWishlist } from "./wishlist-D-kkRxhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-CzrheKhS.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const { items, remove, clear } = useWishlist();
	const { add } = useCart();
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-16 h-16 mx-auto text-muted-foreground/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl md:text-4xl text-primary mt-6",
				children: "Your wishlist is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: "Save your favourite nuts & seeds to shop them later."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6 bg-accent text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					children: "Browse products"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-8 gap-3 flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-serif text-3xl md:text-4xl text-primary",
				children: [
					"Your Wishlist (",
					items.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: clear,
				children: "Clear all"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card rounded-xl overflow-hidden border border-border/60 flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products/$slug",
					params: { slug: p.slug },
					className: "block bg-secondary p-4 min-h-[16rem] flex items-center justify-center",
					children: p.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image_url,
						alt: p.name,
						loading: "lazy",
						decoding: "async",
						className: "max-h-[16rem] object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 flex-1 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: p.slug },
							className: "font-serif text-base hover:text-accent line-clamp-2",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-semibold text-primary",
							children: formatINR(p.price_cents)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "bg-accent text-accent-foreground",
								onClick: () => {
									add(p);
									toast.success(`${p.name} added to cart`);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-4 h-4 mr-1" }), " Add"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => remove(p.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
							})]
						})
					]
				})]
			}, p.id))
		})]
	});
}
//#endregion
export { WishlistPage as component };
