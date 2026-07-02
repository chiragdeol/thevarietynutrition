import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { n as useAuth } from "./auth-Bu-nY_Ep.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-BBimnPzQ.js
var import_jsx_runtime = require_jsx_runtime();
function Account() {
	const { user, signOut } = useAuth();
	const { data: orders } = useQuery({
		queryKey: ["my-orders", user?.id],
		queryFn: async () => {
			const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
			return data ?? [];
		},
		enabled: !!user
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-8 gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl text-primary",
					children: "My Account"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mt-1",
					children: user?.email
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: signOut,
					children: "Sign out"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl mb-4",
				children: "Orders"
			}),
			!orders || orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-xl p-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "You haven't placed any orders yet."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-4 bg-accent hover:bg-accent/90 text-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						children: "Start shopping"
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/order/$id",
					params: { id: o.id },
					className: "block bg-card border border-border rounded-xl p-4 hover:border-accent transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono font-semibold",
							children: o.order_number
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: new Date(o.created_at).toLocaleString()
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-primary",
								children: formatINR(o.total_cents)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-secondary",
								children: o.status
							})]
						})]
					})
				}, o.id))
			})
		]
	});
}
//#endregion
export { Account as component };
