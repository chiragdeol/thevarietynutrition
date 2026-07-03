import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as Heart, m as Share2 } from "../_libs/lucide-react.mjs";
import { n as useCart } from "./cart-JVZU3Fe9.mjs";
import { n as shareProduct, r as useWishlist } from "./wishlist-D-kkRxhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-BRhZZu1J.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ p }) {
	const { add } = useCart();
	const { has, toggle } = useWishlist();
	const saved = has(p.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group bg-card rounded-xl overflow-hidden border border-border/60 hover:shadow-lg transition-shadow flex flex-col relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-2 right-2 z-10 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": saved ? "Remove from wishlist" : "Add to wishlist",
					onClick: (e) => {
						e.preventDefault();
						const nowSaved = toggle({
							id: p.id,
							slug: p.slug,
							name: p.name,
							price_cents: p.price_cents,
							image_url: p.image_url
						});
						toast.success(nowSaved ? `${p.name} added to wishlist` : `Removed from wishlist`);
					},
					className: `w-9 h-9 rounded-full bg-background/90 backdrop-blur grid place-items-center shadow hover:scale-110 transition-transform ${saved ? "text-rose-500" : "text-muted-foreground hover:text-rose-500"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "w-4 h-4",
						fill: saved ? "currentColor" : "none"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Share product",
					onClick: (e) => {
						e.preventDefault();
						shareProduct(p.name, p.slug);
						if (typeof navigator !== "undefined" && !navigator.share) toast.success("Link copied");
					},
					className: "w-9 h-9 rounded-full bg-background/90 backdrop-blur grid place-items-center shadow hover:scale-110 hover:text-accent text-muted-foreground transition-transform",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-4 h-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/products/$slug",
				params: { slug: p.slug },
				className: "block bg-secondary overflow-hidden min-h-[18rem] md:min-h-[24rem] flex items-center justify-center p-4",
				children: p.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image_url,
					alt: p.name,
					loading: "lazy",
					decoding: "async",
					className: "w-full h-auto max-h-[22rem] md:max-h-[28rem] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 flex-1 flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "font-serif text-lg leading-tight hover:text-accent",
						children: p.name
					}),
					p.short_description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1 line-clamp-2",
						children: p.short_description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-primary",
							children: formatINR(p.price_cents)
						}), p.compare_at_price_cents && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground line-through",
							children: formatINR(p.compare_at_price_cents)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							className: "border-primary/20 hover:bg-primary hover:text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products/$slug",
								params: { slug: p.slug },
								children: "View"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "bg-accent hover:bg-accent/90 text-accent-foreground",
							onClick: () => {
								add({
									id: p.id,
									slug: p.slug,
									name: p.name,
									price_cents: p.price_cents,
									image_url: p.image_url
								});
								toast.success(`${p.name} added to cart`);
							},
							children: "Add to cart"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ProductCard as t };
