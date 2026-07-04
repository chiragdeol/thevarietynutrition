import { r as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as useAuth } from "./auth-Bu-nY_Ep.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { t as Textarea } from "./textarea-Cp94w9lz.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as useCart } from "./cart-JVZU3Fe9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-C_u0ynqW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	customer_name: stringType().trim().min(2).max(100),
	customer_email: stringType().trim().email().max(255),
	customer_phone: stringType().trim().min(6).max(20),
	shipping_address: stringType().trim().min(5).max(300),
	shipping_city: stringType().trim().min(2).max(80),
	shipping_state: stringType().trim().max(80).optional(),
	shipping_zip: stringType().trim().min(4).max(12),
	notes: stringType().trim().max(500).optional()
});
function Checkout() {
	const { items, subtotal, clear } = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const shipping = subtotal >= 99900 ? 0 : items.length ? 4900 : 0;
	const total = subtotal + shipping;
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-3xl",
			children: "Your cart is empty"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/products",
				children: "Shop products"
			})
		})]
	});
	async function handleSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse(Object.fromEntries(fd));
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Please fill all required fields");
			return;
		}
		setSubmitting(true);
		try {
			const { data: order, error } = await supabase.from("orders").insert({
				user_id: user?.id || null,
				...parsed.data,
				subtotal_cents: subtotal,
				shipping_cents: shipping,
				total_cents: total
			}).select().single();
			if (error || !order) throw error ?? /* @__PURE__ */ new Error("Order failed");
			const orderItems = items.map((i) => ({
				order_id: order.id,
				product_id: i.id,
				product_name: i.name,
				product_image: i.image_url,
				unit_price_cents: i.price_cents,
				quantity: i.quantity,
				line_total_cents: i.price_cents * i.quantity
			}));
			const { error: iErr } = await supabase.from("order_items").insert(orderItems);
			if (iErr) throw iErr;
			clear();
			toast.success("Order placed!");
			navigate({
				to: "/order/$id",
				params: { id: order.id }
			});
		} catch (err) {
			console.error(err);
			toast.error("Something went wrong. Please try again.");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-4xl text-primary mb-8",
			children: "Checkout"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[1fr_360px] gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card rounded-xl p-6 border border-border space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "customer_name",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "customer_name",
									name: "customer_name",
									defaultValue: user?.user_metadata?.full_name ?? "",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "customer_email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "customer_email",
									name: "customer_email",
									type: "email",
									defaultValue: user?.email ?? "",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "customer_phone",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "customer_phone",
										name: "customer_phone",
										required: true
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card rounded-xl p-6 border border-border space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-xl",
								children: "Shipping address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "shipping_address",
								children: "Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "shipping_address",
								name: "shipping_address",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-3 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "shipping_city",
										children: "City"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "shipping_city",
										name: "shipping_city",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "shipping_state",
										children: "State"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "shipping_state",
										name: "shipping_state"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "shipping_zip",
										children: "PIN code"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "shipping_zip",
										name: "shipping_zip",
										required: true
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "notes",
								children: "Order notes (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "notes",
								name: "notes",
								rows: 3
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: submitting,
						className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground",
						children: submitting ? "Placing order…" : `Place order · ${formatINR(total)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground text-center",
						children: "🔒 Your information is safe and secure. Pay via UPI after placing your order."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-secondary/60 rounded-xl p-6 h-fit",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl mb-4",
						children: "Order Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 mb-4",
						children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-14 h-14 bg-card rounded overflow-hidden shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: i.image_url || "/images/prod-placeholder.jpg",
										alt: i.name,
										loading: "lazy",
										decoding: "async",
										className: "w-full h-full object-cover",
										onError: (e) => {
											const t = e.currentTarget;
											if (!t.src.endsWith("/images/prod-placeholder.jpg")) t.src = "/images/prod-placeholder.jpg";
										}
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: i.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-muted-foreground text-xs",
										children: ["Qty ", i.quantity]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: formatINR(i.price_cents * i.quantity) })
							]
						}, i.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 text-sm pt-4 border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(subtotal) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "FREE" : formatINR(shipping) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-base font-semibold pt-2 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(total) })]
							})
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { Checkout as component };
