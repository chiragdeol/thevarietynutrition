import { o as __toESM } from "../_runtime.mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as Heart, B as Check, O as Leaf, g as RotateCcw, m as Share2, p as ShieldCheck, s as Truck, t as Zap, v as Plus, x as Minus, z as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as useCart } from "./cart-JVZU3Fe9.mjs";
import { t as Route } from "./products._slug-BMAE4i1Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-CXZD98b9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function ProductFAQ({ productName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "w-full",
		children: [
			{
				q: `Is ${productName} 100% natural?`,
				a: "Yes. Every pack is preservative-free, unsalted and unroasted unless specified. We source directly from trusted farms and hand-sort each batch."
			},
			{
				q: "How should I store it?",
				a: "Store in an airtight container in a cool, dry place away from direct sunlight. For longer freshness (especially in humid regions), refrigerate after opening."
			},
			{
				q: "What is the shelf life?",
				a: "9 months from the packaging date when stored correctly. The best-before date is printed on every pack."
			},
			{
				q: "How long does delivery take?",
				a: "Orders are dispatched within 48 hours and typically delivered in 3–6 business days across India. You'll receive a tracking link over SMS/WhatsApp."
			},
			{
				q: "Do you offer Cash on Delivery?",
				a: "Yes, COD is available on most pin codes across India for orders under ₹5,000. You can also pay via UPI, cards or netbanking at checkout."
			},
			{
				q: "Can I return or exchange the product?",
				a: "If your order arrives damaged or you're unsatisfied with the quality, contact us within 7 days of delivery for a free replacement or refund."
			},
			{
				q: "Is it safe during pregnancy and for kids?",
				a: "Absolutely — our dry fruits are a wholesome source of nutrients for all ages. For personalised guidance, try our free Diet Plan consultation."
			}
		].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `item-${i}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "text-left font-medium",
				children: f.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "text-muted-foreground leading-relaxed",
				children: f.a
			})]
		}, i))
	});
}
function ProductDetail() {
	const { product } = Route.useLoaderData();
	const { add } = useCart();
	const navigate = useNavigate();
	const [qty, setQty] = (0, import_react.useState)(1);
	const discount = product.compare_at_price_cents && product.compare_at_price_cents > product.price_cents ? Math.round((1 - product.price_cents / product.compare_at_price_cents) * 100) : 0;
	const { data: related } = useQuery({
		queryKey: ["related", product.category_id],
		queryFn: async () => {
			if (!product.category_id) return [];
			const { data } = await supabase.from("products").select("id,slug,name,image_url,price_cents,compare_at_price_cents").eq("category_id", product.category_id).eq("active", true).neq("id", product.id).limit(4);
			return data ?? [];
		}
	});
	function addToCart() {
		add({
			id: product.id,
			slug: product.slug,
			name: product.name,
			price_cents: product.price_cents,
			image_url: product.image_url
		}, qty);
		toast.success(`${product.name} added to cart`);
	}
	function buyNow() {
		add({
			id: product.id,
			slug: product.slug,
			name: product.name,
			price_cents: product.price_cents,
			image_url: product.image_url
		}, qty);
		navigate({ to: "/checkout" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-6 md:py-10 pb-32 lg:pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "text-xs text-muted-foreground mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-accent",
						children: "Home"
					}),
					" /",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "hover:text-accent",
						children: "Shop"
					}),
					product.categories && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" / ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: product.categories.slug },
						className: "hover:text-accent",
						children: product.categories.name
					})] }),
					" / ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: product.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-8 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-secondary rounded-2xl overflow-hidden min-h-[22rem] md:min-h-[32rem] flex items-center justify-center p-4 md:p-6",
					children: [
						product.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image_url,
							alt: product.name,
							loading: "eager",
							decoding: "async",
							className: "w-full h-auto max-h-[22rem] md:max-h-[32rem] object-contain mx-auto"
						}),
						discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-bold px-3 py-1.5 rounded-full shadow",
							children: [
								"−",
								discount,
								"% OFF"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur grid place-items-center hover:text-accent shadow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-4 h-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:grid grid-cols-4 gap-3 mt-3",
					children: [
						0,
						1,
						2,
						3
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `aspect-square rounded-lg overflow-hidden bg-secondary border-2 p-2 flex items-center justify-center ${n === 0 ? "border-accent" : "border-transparent"}`,
						children: product.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image_url,
							alt: "",
							loading: "lazy",
							decoding: "async",
							"aria-hidden": "true",
							className: "w-full h-full object-contain opacity-80"
						})
					}, n))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					product.categories && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
						children: product.categories.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl md:text-4xl text-primary mt-2",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex text-amber-500",
							children: "★★★★★"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "4.8 · 240+ reviews"
						})]
					}),
					product.short_description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-4",
						children: product.short_description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-baseline gap-3 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl font-bold text-primary",
							children: formatINR(product.price_cents)
						}), product.compare_at_price_cents && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg text-muted-foreground line-through",
							children: formatINR(product.compare_at_price_cents)
						}), discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded",
							children: [
								"Save ",
								discount,
								"%"
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: ["Inclusive of all taxes ", product.weight_grams ? `· ${product.weight_grams}g pack` : ""]
					}),
					product.stock > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-green-700 flex items-center gap-1.5 font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }), " In stock — dispatched within 48 hours"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-destructive font-medium",
						children: "Currently out of stock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center border border-border rounded-md h-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty(Math.max(1, qty - 1)),
									className: "px-4 h-full hover:bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 text-center font-medium",
									children: qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty(qty + 1),
									className: "px-4 h-full hover:bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "h-12 bg-accent hover:bg-accent/90 text-accent-foreground flex-1",
							disabled: product.stock <= 0,
							onClick: addToCart,
							children: ["Add to cart · ", formatINR(product.price_cents * qty)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: buyNow,
						disabled: product.stock <= 0,
						className: "mt-3 inline-flex items-center justify-center gap-2 w-full h-12 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors disabled:opacity-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-5 h-5" }), " Buy Direct — Checkout Now"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-2 md:grid-cols-4 gap-3",
						children: [
							{
								i: Truck,
								t: "Free shipping ₹999+"
							},
							{
								i: RotateCcw,
								t: "Easy returns"
							},
							{
								i: ShieldCheck,
								t: "Secure payments"
							},
							{
								i: Leaf,
								t: "100% Natural"
							}
						].map(({ i: Icon, t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs bg-secondary/60 rounded-lg px-3 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium leading-tight",
								children: t
							})]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							if (typeof navigator !== "undefined" && navigator.share) navigator.share({
								title: product.name,
								url: window.location.href
							}).catch(() => {});
							else if (typeof navigator !== "undefined") {
								navigator.clipboard.writeText(window.location.href);
								toast.success("Link copied");
							}
						},
						className: "mt-4 text-xs text-muted-foreground inline-flex items-center gap-1.5 hover:text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-3.5 h-3.5" }), " Share this product"]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 md:mt-20 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl md:text-3xl text-primary mb-5",
					children: "Product Description"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4",
					children: [product.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-wrap",
						children: product.description
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.short_description }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid sm:grid-cols-2 gap-4 not-prose",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border p-4 bg-secondary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-base text-primary mb-2",
								children: "Key Benefits"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "text-sm space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }), " 100% natural, no preservatives"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }), " Rich in protein, fibre & healthy fats"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }), " Supports heart & brain health"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }), " Ideal for daily snacking & recipes"]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border p-4 bg-secondary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-base text-primary mb-2",
								children: "Product Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "text-sm space-y-1.5",
								children: [
									product.weight_grams && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Net weight:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium",
											children: [product.weight_grams, "g"]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Storage:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "Cool, dry place"
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Shelf life:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "9 months from packaging"
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Country of origin:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: "India"
										})
									] }),
									product.categories && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Category:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: product.categories.name
										})
									] })
								]
							})]
						})]
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl md:text-3xl text-primary mb-5",
					children: "Frequently Asked Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductFAQ, { productName: product.name })] })]
			}),
			related && related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 md:mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl md:text-3xl text-primary mb-6",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-5",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: r.slug },
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-secondary rounded-xl overflow-hidden min-h-[14rem] md:min-h-[18rem] flex items-center justify-center p-3",
								children: r.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.image_url,
									alt: r.name,
									loading: "lazy",
									className: "w-full h-auto max-h-[14rem] md:max-h-[18rem] object-contain mx-auto group-hover:scale-[1.02] transition-transform"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm font-medium line-clamp-2",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-primary font-semibold",
								children: formatINR(r.price_cents)
							})
						]
					}, r.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-3 flex items-center gap-3 shadow-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted-foreground",
						children: "Price"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-primary",
						children: formatINR(product.price_cents * qty)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "flex-[2] bg-accent hover:bg-accent/90 text-accent-foreground",
					disabled: product.stock <= 0,
					onClick: addToCart,
					children: "Add to cart"
				})]
			})
		]
	});
}
//#endregion
export { ProductDetail as component };
