import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as MessageCircle, f as ShoppingBag, n as X, p as ShieldCheck, s as Truck, u as Tag, v as Plus, x as Minus } from "../_libs/lucide-react.mjs";
import { n as whatsappUrl, t as BRAND } from "./brand-DfYeJUSd.mjs";
import { n as useCart } from "./cart-JVZU3Fe9.mjs";
import { t as ProductCard } from "./ProductCard-CvLR6mdD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-C1CWrHY_2.js
var import_jsx_runtime = require_jsx_runtime();
var FREE_SHIP = 99900;
var EXTRA_OFF = 159900;
function Cart() {
	const { items, subtotal, setQty, remove } = useCart();
	const shipping = subtotal === 0 ? 0 : subtotal >= FREE_SHIP ? 0 : 4900;
	const total = subtotal + shipping;
	const { data: recommended } = useQuery({
		queryKey: ["cart-recommended"],
		queryFn: async () => {
			const { data } = await supabase.from("products").select("id,slug,name,short_description,price_cents,compare_at_price_cents,image_url").eq("active", true).eq("featured", true).limit(4);
			return data ?? [];
		}
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-20 h-20 mx-auto rounded-full bg-secondary grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-9 h-9 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl mt-6",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: "Fill it with delicious dry fruits and nuts."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				className: "mt-6 bg-accent hover:bg-accent/90 text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					children: "Continue shopping"
				})
			})
		]
	});
	const pctShip = Math.min(100, subtotal / FREE_SHIP * 100);
	const pctExtra = Math.min(100, subtotal / EXTRA_OFF * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 md:py-10 pb-32 lg:pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl md:text-4xl text-primary",
					children: "Your Cart"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-muted-foreground",
					children: [
						items.length,
						" item",
						items.length !== 1 ? "s" : ""
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-2xl p-5 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-4 h-4 text-accent" }), subtotal >= FREE_SHIP ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-green-700",
							children: "🎉 You've unlocked FREE shipping!"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Add ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: formatINR(FREE_SHIP - subtotal) }),
							" more to unlock ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Free Shipping" })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 h-2 rounded-full bg-secondary overflow-hidden relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-500",
							style: { width: `${pctShip}%` }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-1/2 -translate-y-1/2 h-3 w-0.5 bg-border",
							style: { left: `${FREE_SHIP / EXTRA_OFF * 100}%` }
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: pctShip >= 100 ? "text-green-700 font-medium" : "",
							children: "₹999 · Free Shipping"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: pctExtra >= 100 ? "text-green-700 font-medium" : "",
							children: "₹1,599 · Extra 15% Off"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_380px] gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 bg-card rounded-xl p-3 md:p-4 border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: i.slug },
							className: "w-24 h-24 md:w-28 md:h-28 bg-secondary rounded-lg overflow-hidden shrink-0",
							children: i.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: i.image_url,
								alt: i.name,
								loading: "lazy",
								decoding: "async",
								className: "w-full h-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products/$slug",
										params: { slug: i.slug },
										className: "font-serif text-base md:text-lg hover:text-accent line-clamp-2",
										children: i.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => remove(i.id),
										className: "text-muted-foreground hover:text-destructive shrink-0 p-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [formatINR(i.price_cents), " each"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto pt-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center border border-border rounded-md",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setQty(i.id, i.quantity - 1),
												className: "p-2 hover:bg-secondary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-3 h-3" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-8 text-center text-sm font-medium",
												children: i.quantity
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setQty(i.id, i.quantity + 1),
												className: "p-2 hover:bg-secondary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-primary",
										children: formatINR(i.price_cents * i.quantity)
									})]
								})
							]
						})]
					}, i.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3 text-xs text-muted-foreground bg-secondary/50 rounded-lg p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-accent shrink-0" }), "Secure checkout · Cash on Delivery available · Easy returns"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:sticky lg:top-24 h-fit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-secondary/60 rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-xl",
								children: "Order Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										placeholder: "Have a coupon? Try HEALTHY15",
										className: "flex-1 h-10 rounded-md border border-border bg-background px-3 text-sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										className: "h-10",
										children: "Apply"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 text-[11px] text-muted-foreground flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "w-3 h-3" }), " First-order code auto-applied at checkout"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Subtotal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(subtotal) })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Shipping"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: shipping === 0 ? "text-green-700 font-medium" : "",
										children: shipping === 0 ? "FREE" : formatINR(shipping)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-lg font-semibold mt-4 pt-4 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: formatINR(total)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/checkout",
									children: "Proceed to checkout"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappUrl(`Hi ${BRAND.name}! I'd like to order:\n\n` + items.map((i) => `• ${i.name} × ${i.quantity} — ${formatINR(i.price_cents * i.quantity)}`).join("\n") + `\n\nSubtotal: ${formatINR(subtotal)}\nShipping: ${shipping === 0 ? "FREE" : formatINR(shipping)}\nTotal: ${formatINR(total)}`),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-3 inline-flex items-center justify-center gap-2 w-full h-11 rounded-md bg-[#25D366] hover:bg-[#1eb855] text-white font-medium transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "w-5 h-5",
									fill: "currentColor"
								}), " Order on WhatsApp"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted-foreground text-center",
								children: "Pay online or place your order via WhatsApp."
							})
						]
					})
				})]
			}),
			recommended && recommended.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-primary",
						children: "You might also love"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "text-sm underline underline-offset-4 hover:text-accent",
						children: "Shop all →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4",
					children: recommended.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-3 flex items-center gap-3 shadow-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted-foreground",
						children: "Total"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-primary",
						children: formatINR(total)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "flex-[2] bg-accent hover:bg-accent/90 text-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						children: "Checkout"
					})
				})]
			})
		]
	});
}
//#endregion
export { Cart as component };
