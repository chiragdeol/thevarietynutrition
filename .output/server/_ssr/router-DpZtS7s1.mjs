import { n as __toESM } from "../_runtime.mjs";
import { t as hero_nuts_png_asset_default } from "./hero-nuts.png.asset-BBg8lKzL.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as useAuth, t as AuthProvider } from "./auth-Bu-nY_Ep.mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { A as redirect, L as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { A as Heart, C as Menu, M as Gift, S as MessageCircle, T as Mail, a as User, b as Phone, f as ShoppingBag, h as Search, n as X, w as MapPin, z as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as tvn_logo_png_asset_default } from "./tvn-logo.png.asset-LrE-vGw3.mjs";
import { n as whatsappUrl } from "./brand-DfYeJUSd.mjs";
import { n as useCart, t as CartProvider } from "./cart-JVZU3Fe9.mjs";
import { r as useWishlist, t as WishlistProvider } from "./wishlist-D-kkRxhE.mjs";
import { t as Route$16 } from "./category._slug-oCo1yzzv.mjs";
import { t as Route$17 } from "./checkout-DVOPvm2X.mjs";
import { t as Route$18 } from "./order._id-DIvRIRBU.mjs";
import { t as Route$19 } from "./products._slug-BMAE4i1Y.mjs";
import { t as Route$20 } from "./recipes._slug-DIiM-xxA.mjs";
import process from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DpZtS7s1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dvrhe2U5.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/products",
		label: "Shop All"
	},
	{
		to: "/diet-plan",
		label: "Diet Plan"
	},
	{
		to: "/about",
		label: "About"
	}
];
function Header() {
	const { count } = useCart();
	const { count: wishCount } = useWishlist();
	const { user } = useAuth();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [catOpen, setCatOpen] = (0, import_react.useState)(false);
	const [mobileCatOpen, setMobileCatOpen] = (0, import_react.useState)(false);
	const { data: categories } = useQuery({
		queryKey: ["header-categories"],
		queryFn: async () => {
			const { data } = await supabase.from("categories").select("slug,name").order("sort_order");
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-primary text-primary-foreground text-xs py-2 text-center px-4",
				children: "Free shipping on orders above ₹999 · 100% natural · No preservatives"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 flex items-center justify-between h-20 md:h-24 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "md:hidden",
						onClick: () => setOpen(!open),
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: tvn_logo_png_asset_default.url,
							alt: "The Variety Nutrition",
							width: 200,
							height: 80,
							decoding: "async",
							className: "h-16 md:h-20 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "The Variety Nutrition"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden md:flex items-center gap-6 text-sm font-medium",
						children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "hover:text-accent transition-colors",
							activeProps: { className: "text-accent" },
							children: n.label
						}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => setCatOpen(true),
							onMouseLeave: () => setCatOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex items-center gap-1 hover:text-accent transition-colors",
								onClick: () => setCatOpen((v) => !v),
								"aria-haspopup": "true",
								"aria-expanded": catOpen,
								children: ["Categories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4" })]
							}), catOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-full pt-2 w-56 z-50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-background border border-border rounded-md shadow-lg py-2 max-h-[320px] overflow-y-auto",
									children: categories?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/category/$slug",
										params: { slug: c.slug },
										onClick: () => setCatOpen(false),
										className: "block px-4 py-2 text-sm hover:bg-secondary hover:text-accent",
										children: c.name
									}, c.slug))
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								"aria-label": "Search",
								className: "hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								"aria-label": "Wishlist",
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-5 h-5" }), wishCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center",
									children: wishCount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: user ? "/account" : "/auth",
								"aria-label": "Account",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								"aria-label": "Cart",
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-5 h-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center",
									children: count
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("md:hidden border-t border-border overflow-hidden transition-all", open ? "max-h-[600px]" : "max-h-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col p-4 gap-3 text-sm",
					children: [
						nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							onClick: () => setOpen(false),
							className: "py-1",
							children: n.label
						}, n.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMobileCatOpen((v) => !v),
							className: "py-1 flex items-center justify-between font-medium",
							children: ["Categories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("w-4 h-4 transition-transform", mobileCatOpen && "rotate-180") })]
						}),
						mobileCatOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pl-3 flex flex-col gap-2 border-l border-border",
							children: categories?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/category/$slug",
								params: { slug: c.slug },
								onClick: () => setOpen(false),
								className: "py-1 text-muted-foreground hover:text-accent",
								children: c.name
							}, c.slug))
						})
					]
				})
			})
		]
	});
}
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const handleSubscribe = (e) => {
		e.preventDefault();
		if (!email) return;
		toast.success("Subscribed successfully!");
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-black text-white mt-20 pt-16 pb-8 border-t border-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-start gap-12 pb-12 border-b border-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 max-w-xl w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: tvn_logo_png_asset_default.url,
						alt: "The Variety Nutrition",
						width: 200,
						height: 80,
						loading: "lazy",
						decoding: "async",
						className: "h-16 md:h-20 w-auto"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center w-10 h-10 rounded-full border border-white/20 flex-shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-white/80" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm md:text-base text-white/80 font-normal leading-relaxed",
								children: "Pegasus Tower, Office No. 702, 7th Floor, Sector 68, Noida, Uttar Pradesh 201307"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center w-10 h-10 rounded-full border border-white/20 flex-shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5 text-white/80" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+919971095414",
								className: "text-sm md:text-base text-white/80 font-normal hover:text-white transition-colors",
								children: "+91-9971095414"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center w-10 h-10 rounded-full border border-white/20 flex-shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-5 h-5 text-white/80" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:customercare@nutraj.com",
								className: "text-sm md:text-base text-white/80 font-normal hover:text-white transition-colors",
								children: "customercare@nutraj.com"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center md:items-end w-full md:w-auto gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/95 text-sm mb-3 text-center md:text-right font-medium",
						children: "Subscribe to our newsletter for updates and special offers!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubscribe,
						className: "flex items-center border border-white/30 rounded-full p-1 pl-4 bg-transparent max-w-md w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "Enter Your Email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "bg-transparent border-none outline-none text-white text-sm placeholder:text-white/50 flex-grow py-2.5 w-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "bg-white text-black font-semibold text-xs px-6 py-3 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wider flex-shrink-0",
							children: "Subscribe"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center md:items-end gap-2 mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-white rounded px-2 py-1 h-8 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/fssai-logo.png",
								alt: "FSSAI Logo",
								className: "h-6 w-auto object-contain",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-white rounded px-2 py-1 h-8 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/fssai-logo.png",
								alt: "FSSAI Logo",
								className: "h-6 w-auto object-contain",
								loading: "lazy"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-white/60 font-mono tracking-wide text-center md:text-right mt-1 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "FSSAI License No. - 10016051001876" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "FSSAI License No. - 10017061000315" })]
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" The Variety Nutrition. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "hover:text-white transition-colors",
						children: "Privacy Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "hover:text-white transition-colors",
						children: "Terms of Service"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hover:text-white transition-colors",
						children: "Shipping & Returns"
					})
				]
			})]
		})]
	});
}
var KEY = "hn_promo_dismissed_v1";
function PromoPopup() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (localStorage.getItem(KEY)) return;
		const t = setTimeout(() => setOpen(true), 2500);
		return () => clearTimeout(t);
	}, []);
	const close = () => {
		localStorage.setItem(KEY, "1");
		setOpen(false);
	};
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-in fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative bg-background rounded-2xl overflow-hidden max-w-md w-full shadow-2xl border border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: close,
				"aria-label": "Close",
				className: "absolute top-3 right-3 p-1.5 rounded-full bg-background/80 hover:bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-accent/10 p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-12 h-12 mx-auto text-accent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block mt-4 text-xs uppercase tracking-[0.2em] text-accent font-semibold",
						children: "Welcome offer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-3xl text-primary mt-2",
						children: "Flat 15% off"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-2",
						children: [
							"On your first order above ₹999. Use code",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-bold text-primary",
								children: "HEALTHY15"
							}),
							" at checkout."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-6 bg-accent hover:bg-accent/90 text-accent-foreground w-full",
						onClick: close,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							children: "Shop now"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: close,
						className: "mt-3 text-xs text-muted-foreground underline underline-offset-4",
						children: "No thanks"
					})
				]
			})]
		})
	});
}
function WhatsAppFAB() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappUrl("Hi The Variety Nutrition, I'd like to know more about your products."),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#1eb855] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "w-7 h-7",
			fill: "currentColor"
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-serif font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try refreshing or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input bg-background px-4 py-2 text-sm",
						children: "Go home"
					})]
				})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-serif font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "This page has wandered off."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground",
					children: "Back home"
				})
			]
		})
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "The Variety Nutrition — Premium Dry Fruits, Nuts, Seeds & Ayurvedic Herbs in India" },
			{
				name: "description",
				content: "Shop TVN premium almonds, cashews, pistachios, seeds, kismis & Ayurvedic herbs. 100% natural, farm-fresh, delivered across India. Personalised diet plans available."
			},
			{
				name: "keywords",
				content: "dry fruits online India, premium almonds, pistachio, kismis, chia seeds, flax seeds, ayurvedic herbs, shatavari, hadjod, healthy snacks, TVN, The Variety Nutrition"
			},
			{
				name: "author",
				content: "The Variety Nutrition"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1"
			},
			{
				name: "theme-color",
				content: "#3d2817"
			},
			{
				name: "format-detection",
				content: "telephone=no"
			},
			{
				property: "og:site_name",
				content: "The Variety Nutrition"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@thevarietynutritionjind2026"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png"
			},
			{
				rel: "preconnect",
				href: "https://mzswogaxwyfolvktuyvg.supabase.co"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "Organization",
					"@id": "#organization",
					name: "The Variety Nutrition",
					alternateName: "TVN",
					url: "/",
					logo: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png",
					sameAs: ["https://www.instagram.com/thevarietynutritionjind2026/"],
					contactPoint: {
						"@type": "ContactPoint",
						telephone: "+91-98765-43210",
						contactType: "customer service",
						areaServed: "IN",
						availableLanguage: ["English", "Hindi"]
					}
				}, {
					"@type": "WebSite",
					"@id": "#website",
					url: "/",
					name: "The Variety Nutrition",
					publisher: { "@id": "#organization" },
					potentialAction: {
						"@type": "SearchAction",
						target: "/products?q={search_term_string}",
						"query-input": "required name=search_term_string"
					}
				}]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WishlistProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-screen flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoPopup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFAB, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				richColors: true
			})
		] }) }) })
	});
}
var $$splitComponentImporter$13 = () => import("./wishlist-CzrheKhS.mjs");
var Route$14 = createFileRoute("/wishlist")({
	ssr: false,
	head: () => ({ meta: [{ title: "Your Wishlist — The Variety Nutrition" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var BASE_URL = "";
var Route$13 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		"/",
		"/products",
		"/recipes",
		"/about",
		"/contact",
		"/auth"
	];
	const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} });
	const { data: cats } = await supabase.from("categories").select("slug");
	const { data: prods } = await supabase.from("products").select("slug,updated_at").eq("active", true);
	const { data: posts } = await supabase.from("blog_posts").select("slug,updated_at").eq("published", true);
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			...staticPaths.map((p) => ({ path: p })),
			...(cats ?? []).map((c) => ({ path: `/category/${c.slug}` })),
			...(prods ?? []).map((p) => ({
				path: `/products/${p.slug}`,
				lastmod: p.updated_at
			})),
			...(posts ?? []).map((p) => ({
				path: `/recipes/${p.slug}`,
				lastmod: p.updated_at
			}))
		].map((u) => `  <url><loc>${BASE_URL}${u.path}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$12 = () => import("./recipes-CIfD2HqT.mjs");
var Route$12 = createFileRoute("/recipes")({
	head: () => ({
		meta: [
			{ title: "Healthy Recipes & Nutrition Stories — The Variety Nutrition" },
			{
				name: "description",
				content: "Simple, wholesome recipes and stories featuring premium dry fruits, nuts, seeds and Ayurvedic herbs."
			},
			{
				property: "og:title",
				content: "Recipes & Stories — The Variety Nutrition"
			},
			{
				property: "og:description",
				content: "Healthy recipes with dry fruits, nuts and seeds."
			},
			{
				property: "og:url",
				content: "/recipes"
			}
		],
		links: [{
			rel: "canonical",
			href: "/recipes"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./products-C7F03LXy.mjs");
var Route$11 = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./diet-plan-D1hXgcGf.mjs");
var Route$10 = createFileRoute("/diet-plan")({
	head: () => ({
		meta: [
			{ title: "Personalised Diet Plans in India — The Variety Nutrition" },
			{
				name: "description",
				content: "Nutritionist-curated diet plans built around dry fruits, nuts and seeds. Weight loss, muscle gain, diabetes-friendly, pregnancy & wellness plans from ₹499."
			},
			{
				property: "og:title",
				content: "Personalised Diet Plans — The Variety Nutrition"
			},
			{
				property: "og:description",
				content: "Customised diet plans powered by nature's finest superfoods."
			},
			{
				property: "og:url",
				content: "/diet-plan"
			}
		],
		links: [{
			rel: "canonical",
			href: "/diet-plan"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./contact-CxJLkFgD.mjs");
var Route$9 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact The Variety Nutrition — Support, Orders & Wholesale" },
			{
				name: "description",
				content: "Reach the The Variety Nutrition team for orders, wholesale enquiries and support. Call, WhatsApp or email — we usually reply within 1 business day."
			},
			{
				property: "og:title",
				content: "Contact The Variety Nutrition"
			},
			{
				property: "og:description",
				content: "Questions, orders, wholesale — we'd love to hear from you."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./cart-C1CWrHY_2.mjs");
var Route$8 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Your Cart — The Variety Nutrition" }, {
		name: "description",
		content: "Review the items in your cart."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./auth-CGzOM59E.mjs");
var Route$7 = createFileRoute("/auth")({
	validateSearch: (s) => ({ mode: s.mode || "signin" }),
	head: () => ({ meta: [{ title: "Sign in — The Variety Nutrition" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./admin-login-CooJRxgB.mjs");
var Route$6 = createFileRoute("/admin-login")({
	ssr: false,
	head: () => ({ meta: [{ title: "Admin Login — The Variety Nutrition" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin-XakW1i6r.mjs");
var Route$5 = createFileRoute("/admin")({
	ssr: false,
	head: () => ({ meta: [{ title: "Admin — The Variety Nutrition" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-DYR4JWn9.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About The Variety Nutrition — Our Story & Sourcing Promise" },
			{
				name: "description",
				content: "The Variety Nutrition (TVN) brings the world's finest dry fruits, nuts and Ayurvedic herbs to Indian homes — hand-picked, farm-fresh, packed within 48 hours."
			},
			{
				property: "og:title",
				content: "About The Variety Nutrition"
			},
			{
				property: "og:description",
				content: "The story behind India's freshest dry fruits, nuts and Ayurvedic herbs."
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./route-Di7iQBCH.mjs");
var Route$3 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-Bw-g83J5.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:image",
				content: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png"
			},
			{
				property: "og:image:alt",
				content: "The Variety Nutrition — premium dry fruits, nuts & Ayurvedic herbs"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}, {
			rel: "preload",
			as: "image",
			href: hero_nuts_png_asset_default.url,
			fetchpriority: "high"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./products.index-Bl7QptTa.mjs");
var Route$1 = createFileRoute("/products/")({
	head: () => ({
		meta: [
			{ title: "Shop Premium Dry Fruits, Nuts & Seeds Online — The Variety Nutrition" },
			{
				name: "description",
				content: "Browse TVN's full range of premium dry fruits, nuts, seeds, kismis and Ayurvedic herbs. Farm-fresh, 100% natural, delivered across India."
			},
			{
				property: "og:title",
				content: "Shop Premium Dry Fruits & Nuts — The Variety Nutrition"
			},
			{
				property: "og:description",
				content: "Browse our full collection of premium dry fruits, nuts, seeds and Ayurvedic herbs."
			},
			{
				property: "og:url",
				content: "/products"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./account-BBimnPzQ.mjs");
var Route = createFileRoute("/_authenticated/account")({
	head: () => ({ meta: [{ title: "My Account — The Variety Nutrition" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WishlistRoute = Route$14.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$15
});
var SitemapDotxmlRoute = Route$13.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$15
});
var RecipesRoute = Route$12.update({
	id: "/recipes",
	path: "/recipes",
	getParentRoute: () => Route$15
});
var ProductsRoute = Route$11.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$15
});
var DietPlanRoute = Route$10.update({
	id: "/diet-plan",
	path: "/diet-plan",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var CheckoutRoute = Route$17.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$15
});
var CartRoute = Route$8.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$15
});
var AuthRoute = Route$7.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$15
});
var AdminLoginRoute = Route$6.update({
	id: "/admin-login",
	path: "/admin-login",
	getParentRoute: () => Route$15
});
var AdminRoute = Route$5.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$15
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$15
});
var AuthenticatedRouteRoute = Route$3.update({
	id: "/_authenticated",
	getParentRoute: () => Route$15
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var ProductsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProductsRoute
});
var RecipesSlugRoute = Route$20.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RecipesRoute
});
var ProductsSlugRoute = Route$19.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProductsRoute
});
var OrderIdRoute = Route$18.update({
	id: "/order/$id",
	path: "/order/$id",
	getParentRoute: () => Route$15
});
var CategorySlugRoute = Route$16.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => Route$15
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAccountRoute: Route.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var ProductsRouteChildren = {
	ProductsSlugRoute,
	ProductsIndexRoute
};
var ProductsRouteWithChildren = ProductsRoute._addFileChildren(ProductsRouteChildren);
var RecipesRouteChildren = { RecipesSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AboutRoute,
	AdminRoute,
	AdminLoginRoute,
	AuthRoute,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	DietPlanRoute,
	ProductsRoute: ProductsRouteWithChildren,
	RecipesRoute: RecipesRoute._addFileChildren(RecipesRouteChildren),
	SitemapDotxmlRoute,
	WishlistRoute,
	CategorySlugRoute,
	OrderIdRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
