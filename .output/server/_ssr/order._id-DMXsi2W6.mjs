import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { N as notFound, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { K as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as Route } from "./order._id-C3KVmu1d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-DMXsi2W6.js
var import_jsx_runtime = require_jsx_runtime();
function OrderSuccess() {
	const { id } = Route.useParams();
	const { data, isLoading } = useQuery({
		queryKey: ["order", id],
		queryFn: async () => {
			const { data: order } = await supabase.from("orders").select("*").eq("id", id).maybeSingle();
			if (!order) throw notFound();
			const { data: items } = await supabase.from("order_items").select("*").eq("order_id", id);
			return {
				order,
				items: items ?? []
			};
		}
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-20 text-center",
		children: "Loading…"
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-20 text-center",
		children: "Order not found."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-16 h-16 mx-auto text-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl mt-4",
				children: "Thank you!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground mt-2",
				children: [
					"Your order ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono font-semibold text-foreground",
						children: data.order.order_number
					}),
					" has been placed."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-left bg-card border border-border rounded-xl p-6 mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl mb-4",
						children: "Order details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: data.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								i.product_name,
								" × ",
								i.quantity
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(i.line_total_cents) })]
						}, i.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 pt-4 border-t border-border flex justify-between font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(data.order.total_cents) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-sm text-muted-foreground",
						children: [
							"Shipping to: ",
							data.order.shipping_address,
							", ",
							data.order.shipping_city,
							", ",
							data.order.shipping_zip
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3 justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/account",
						children: "View orders"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "bg-accent hover:bg-accent/90 text-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						children: "Continue shopping"
					})
				})]
			})
		]
	});
}
//#endregion
export { OrderSuccess as component };
