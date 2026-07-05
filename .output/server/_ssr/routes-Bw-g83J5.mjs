import { n as __toESM } from "../_runtime.mjs";
import { t as hero_nuts_png_asset_default } from "./hero-nuts.png.asset-BBg8lKzL.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { L as ChevronRight, O as Leaf, R as ChevronLeft, U as Award, X as BadgeCheck, Y as CircleCheck, d as Star, i as Volume2, k as Instagram, p as ShieldCheck, r as VolumeX, s as Truck, y as Play } from "../_libs/lucide-react.mjs";
import { t as BRAND } from "./brand-DfYeJUSd.mjs";
import { t as ProductCard } from "./ProductCard-CvLR6mdD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bw-g83J5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getInstagramShortcode$1(url) {
	if (!url) return null;
	const match = url.match(/(?:instagram\.com\/(?:p|reel|tv)\/)([a-zA-Z0-9_-]+)/);
	return match ? match[1] : null;
}
function ReviewCard({ review }) {
	const videoRef = (0, import_react.useRef)(null);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
			else {
				v.pause();
				setPlaying(false);
			}
		}, { threshold: .5 });
		io.observe(v);
		return () => io.disconnect();
	}, []);
	const toggle = () => {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) {
			v.play();
			setPlaying(true);
		} else {
			v.pause();
			setPlaying(false);
		}
	};
	const shortcode = getInstagramShortcode$1(review.video_url);
	if (shortcode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: "group relative aspect-[9/16] w-[260px] sm:w-[300px] shrink-0 overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			src: `https://www.instagram.com/reel/${shortcode}/embed`,
			className: "w-full h-full border-0",
			scrolling: "no",
			allowFullScreen: true
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "group relative aspect-[9/16] w-[260px] sm:w-[300px] shrink-0 overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: review.video_url,
				loop: true,
				muted,
				playsInline: true,
				preload: "metadata",
				className: "h-full w-full object-cover",
				onClick: toggle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setMuted((m) => !m),
				className: "absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80",
				"aria-label": muted ? "Unmute" : "Mute",
				children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/95 px-2 py-1 text-[10px] font-semibold text-white shadow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-3 w-3" }), " Verified"]
			}),
			!playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggle,
				className: "absolute inset-0 flex items-center justify-center bg-black/20",
				"aria-label": "Play video",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-white/90 p-4 shadow-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6 fill-primary text-primary" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-16 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${review.accent ?? "from-amber-400 to-orange-500"} text-xs font-bold text-white shadow`,
							children: review.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-semibold",
								children: review.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate text-[11px] text-white/70",
								children: [review.role ?? "Customer", review.city ? ` · ${review.city}` : ""]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-auto flex text-amber-400",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								className: "h-3 w-3",
								fill: "currentColor"
							}, i))
						})
					]
				}), review.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-xs text-white/85",
					children: review.caption
				})]
			})
		]
	});
}
function Testimonials() {
	const scrollRef = (0, import_react.useRef)(null);
	const [canLeft, setCanLeft] = (0, import_react.useState)(false);
	const [canRight, setCanRight] = (0, import_react.useState)(true);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const dragStart = (0, import_react.useRef)({
		x: 0,
		scrollLeft: 0
	});
	const { data: reviews } = useQuery({
		queryKey: ["testimonials"],
		queryFn: async () => {
			const { data } = await supabase.from("testimonials").select("id,video_url,name,city,role,caption,accent").eq("active", true).order("sort_order");
			return data ?? [];
		}
	});
	const update = () => {
		const el = scrollRef.current;
		if (!el) return;
		setCanLeft(el.scrollLeft > 1);
		setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
	};
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		update();
		el.addEventListener("scroll", update, { passive: true });
		const ro = new ResizeObserver(update);
		ro.observe(el);
		return () => {
			el.removeEventListener("scroll", update);
			ro.disconnect();
		};
	}, [reviews]);
	const scrollBy = (dir) => scrollRef.current?.scrollBy({
		left: dir === "left" ? -280 : 280,
		behavior: "smooth"
	});
	const onMouseDown = (e) => {
		const el = scrollRef.current;
		if (!el) return;
		setIsDragging(true);
		dragStart.current = {
			x: e.clientX,
			scrollLeft: el.scrollLeft
		};
		el.style.cursor = "grabbing";
	};
	const onMouseMove = (e) => {
		if (!isDragging) return;
		const el = scrollRef.current;
		if (!el) return;
		el.scrollLeft = dragStart.current.scrollLeft + (dragStart.current.x - e.clientX);
	};
	const onMouseUp = () => {
		setIsDragging(false);
		if (scrollRef.current) scrollRef.current.style.cursor = "grab";
	};
	if (!reviews || reviews.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-accent" }),
								" Video Reviews ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-accent" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl text-primary md:text-5xl",
							children: "Real customers, real stories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex text-amber-500",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										className: "h-5 w-5",
										fill: "currentColor"
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-primary",
									children: "4.9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "· 2,400+ reviews"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group",
					children: [
						canLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollBy("left"),
							className: "absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white md:block",
							"aria-label": "Scroll left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: scrollRef,
							onMouseDown,
							onMouseMove,
							onMouseUp,
							onMouseLeave: onMouseUp,
							className: "scrollbar-hide flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 pt-2 active:cursor-grabbing",
							style: {
								scrollbarWidth: "none",
								msOverflowStyle: "none"
							},
							children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "snap-start snap-always",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { review: r })
							}, r.id))
						}),
						canRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => scrollBy("right"),
							className: "absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white md:block",
							"aria-label": "Scroll right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-primary" })
						})
					]
				})]
			})
		]
	});
}
var REVIEWS = [
	{
		id: 1,
		name: "Chirag Deol",
		avatarLetter: "C",
		rating: 5,
		time: "2 days ago",
		text: "Best quality dry fruits in Jind! The premium almonds and walnuts are of high AAA grade. Traditional packing and very fresh. Highly recommended."
	},
	{
		id: 2,
		name: "Pawan Pehalwan",
		avatarLetter: "P",
		rating: 5,
		time: "1 week ago",
		text: "Traditional badam ragda ingredients are superb. Cleanliness and quality is top notch. The packaging is very premium and easy to store."
	},
	{
		id: 3,
		name: "Amit Sharma",
		avatarLetter: "A",
		rating: 5,
		time: "2 weeks ago",
		text: "Great customer service and fast delivery to Delhi. The seeds and nuts are fresh, crunchy and clean. Will order regularly!"
	},
	{
		id: 4,
		name: "Ritu Yadav",
		avatarLetter: "R",
		rating: 5,
		time: "3 weeks ago",
		text: "I ordered Premium Phool Makhana and Chia Seeds. The quality is exceptional and the packaging design same as shown. Great healthy options."
	},
	{
		id: 5,
		name: "Vikram Singh",
		avatarLetter: "V",
		rating: 5,
		time: "1 month ago",
		text: "Pure Ayurvedic herbs and seeds. Found exactly what I was looking for. Highly satisfied with the prompt delivery."
	}
];
function GoogleReviews() {
	const scrollRef = (0, import_react.useRef)(null);
	const [canLeft, setCanLeft] = (0, import_react.useState)(false);
	const [canRight, setCanRight] = (0, import_react.useState)(true);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const dragStart = (0, import_react.useRef)({
		x: 0,
		scrollLeft: 0
	});
	const update = () => {
		const el = scrollRef.current;
		if (!el) return;
		setCanLeft(el.scrollLeft > 1);
		setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
	};
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		update();
		el.addEventListener("scroll", update, { passive: true });
		const ro = new ResizeObserver(update);
		ro.observe(el);
		return () => {
			el.removeEventListener("scroll", update);
			ro.disconnect();
		};
	}, []);
	const scrollBy = (dir) => {
		scrollRef.current?.scrollBy({
			left: dir === "left" ? -320 : 320,
			behavior: "smooth"
		});
	};
	const onMouseDown = (e) => {
		const el = scrollRef.current;
		if (!el) return;
		setIsDragging(true);
		dragStart.current = {
			x: e.clientX,
			scrollLeft: el.scrollLeft
		};
		el.style.cursor = "grabbing";
		el.style.scrollSnapType = "none";
	};
	const onMouseMove = (e) => {
		if (!isDragging) return;
		const el = scrollRef.current;
		if (!el) return;
		el.scrollLeft = dragStart.current.scrollLeft + (dragStart.current.x - e.clientX);
	};
	const onMouseUp = () => {
		setIsDragging(false);
		const el = scrollRef.current;
		if (!el) return;
		el.style.cursor = "grab";
		el.style.scrollSnapType = "x mandatory";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/15 py-16 border-y border-border/40 relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "w-5 h-5",
						viewBox: "0 0 24 24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#4285F4",
								d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#34A853",
								d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#FBBC05",
								d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#EA4335",
								d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold tracking-wide text-foreground uppercase",
						children: "Google Reviews"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl text-primary md:text-4xl",
					children: "What our customers say"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.google.com/search?q=thevarietynutrition",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "bg-card border border-border px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-sm hover:shadow hover:border-accent/40 transition-all cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-lg text-primary",
							children: "4.9"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-amber-500",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground font-medium",
								children: "Based on 500+ reviews"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.google.com/search?q=thevarietynutrition",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "bg-primary text-primary-foreground font-semibold text-xs px-5 py-3 rounded-full hover:bg-primary/95 transition-all shadow-md",
						children: "Write a Review"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative group",
				children: [
					canLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollBy("left"),
						className: "absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white transition hidden md:block",
						"aria-label": "Scroll left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: scrollRef,
						onMouseDown,
						onMouseMove,
						onMouseUp,
						onMouseLeave: onMouseUp,
						className: "flex gap-6 overflow-x-auto pb-6 pt-2 cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory scrollbar-hide",
						style: {
							scrollbarWidth: "none",
							msOverflowStyle: "none"
						},
						children: REVIEWS.map((rev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "snap-start snap-always shrink-0 w-[300px] sm:w-[350px] bg-card border border-border/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-accent/40 transition-all flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent text-sm",
											children: rev.avatarLetter
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-semibold text-sm text-foreground flex items-center gap-1.5",
											children: [rev.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 fill-emerald-500 text-white" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-muted-foreground",
											children: rev.time
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex text-amber-400",
										children: Array.from({ length: rev.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-current" }, i))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground leading-relaxed italic",
									children: [
										"\"",
										rev.text,
										"\""
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border/60 mt-4 pt-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "w-3.5 h-3.5",
										viewBox: "0 0 24 24",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												fill: "#4285F4",
												d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												fill: "#34A853",
												d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												fill: "#FBBC05",
												d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												fill: "#EA4335",
												d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
											})
										]
									}), "Verified Reviewer"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full",
									children: "5/5 Rating"
								})]
							})]
						}, rev.id))
					}),
					canRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollBy("right"),
						className: "absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white transition hidden md:block",
						"aria-label": "Scroll right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-primary" })
					})
				]
			})]
		})
	});
}
function getInstagramShortcode(url) {
	if (!url) return null;
	const match = url.match(/(?:instagram\.com\/(?:p|reel|tv)\/)([a-zA-Z0-9_-]+)/);
	return match ? match[1] : null;
}
function ReelCard({ reel }) {
	const videoRef = (0, import_react.useRef)(null);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
			else {
				v.pause();
				setPlaying(false);
			}
		}, { threshold: .5 });
		io.observe(v);
		return () => io.disconnect();
	}, []);
	const shortcode = getInstagramShortcode(reel.video_url);
	if (shortcode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "group relative aspect-[9/16] w-[260px] sm:w-[300px] shrink-0 overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			src: `https://www.instagram.com/reel/${shortcode}/embed`,
			className: "w-full h-full border-0",
			scrolling: "no",
			allowFullScreen: true
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative aspect-[9/16] w-[260px] sm:w-[300px] shrink-0 overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: reel.video_url,
				loop: true,
				muted,
				playsInline: true,
				preload: "metadata",
				className: "h-full w-full object-cover",
				onClick: () => {
					const v = videoRef.current;
					if (!v) return;
					if (v.paused) {
						v.play();
						setPlaying(true);
					} else {
						v.pause();
						setPlaying(false);
					}
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setMuted((m) => !m),
				className: "absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80",
				"aria-label": muted ? "Unmute" : "Mute",
				children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
			}),
			!playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-full bg-white/90 p-4 shadow-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6 fill-primary text-primary" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-16 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: reel.title
				}), reel.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 line-clamp-2 text-xs text-white/80",
					children: reel.caption
				})]
			})
		]
	});
}
function InstagramReels() {
	const scrollRef = (0, import_react.useRef)(null);
	const [canLeft, setCanLeft] = (0, import_react.useState)(false);
	const [canRight, setCanRight] = (0, import_react.useState)(true);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const dragStart = (0, import_react.useRef)({
		x: 0,
		scrollLeft: 0
	});
	const { data: reels } = useQuery({
		queryKey: ["reels"],
		queryFn: async () => {
			const { data } = await supabase.from("reels").select("id,video_url,title,caption").eq("active", true).order("sort_order");
			return data ?? [];
		}
	});
	const update = () => {
		const el = scrollRef.current;
		if (!el) return;
		setCanLeft(el.scrollLeft > 1);
		setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
	};
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		update();
		el.addEventListener("scroll", update, { passive: true });
		const ro = new ResizeObserver(update);
		ro.observe(el);
		return () => {
			el.removeEventListener("scroll", update);
			ro.disconnect();
		};
	}, [reels]);
	const scrollBy = (dir) => scrollRef.current?.scrollBy({
		left: dir === "left" ? -280 : 280,
		behavior: "smooth"
	});
	const onMouseDown = (e) => {
		const el = scrollRef.current;
		if (!el) return;
		setIsDragging(true);
		dragStart.current = {
			x: e.clientX,
			scrollLeft: el.scrollLeft
		};
		el.style.cursor = "grabbing";
		el.style.scrollSnapType = "none";
	};
	const onMouseMove = (e) => {
		if (!isDragging) return;
		const el = scrollRef.current;
		if (!el) return;
		el.scrollLeft = dragStart.current.scrollLeft + (dragStart.current.x - e.clientX);
	};
	const onMouseUp = () => {
		setIsDragging(false);
		const el = scrollRef.current;
		if (!el) return;
		el.style.cursor = "grab";
		el.style.scrollSnapType = "x mandatory";
	};
	if (!reels || reels.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-accent",
						children: ["@", BRAND.instagram.handle]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-3xl text-primary md:text-5xl",
						children: "Watch our reels"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-sm text-muted-foreground",
						children: "Recipes, remedies and behind-the-scenes moments from our kitchen — straight from the pehalwan's table. Drag or swipe to explore."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: BRAND.instagram.url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " Follow on Instagram"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative group",
				children: [
					canLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollBy("left"),
						className: "absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white hidden md:block",
						"aria-label": "Scroll left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: scrollRef,
						onMouseDown,
						onMouseMove,
						onMouseUp,
						onMouseLeave: onMouseUp,
						className: "flex gap-5 overflow-x-auto pb-4 pt-2 cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory scrollbar-hide",
						style: {
							scrollbarWidth: "none",
							msOverflowStyle: "none"
						},
						children: reels.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "snap-start snap-always",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelCard, { reel: r })
						}, r.id))
					}),
					canRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollBy("right"),
						className: "absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 hover:bg-white hidden md:block",
						"aria-label": "Scroll right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-primary" })
					})
				]
			})]
		})
	});
}
function CategorySlider({ categories }) {
	const scrollRef = (0, import_react.useRef)(null);
	const [canScrollLeft, setCanScrollLeft] = (0, import_react.useState)(false);
	const [canScrollRight, setCanScrollRight] = (0, import_react.useState)(true);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const dragStart = (0, import_react.useRef)({
		x: 0,
		scrollLeft: 0
	});
	const updateArrows = () => {
		const el = scrollRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 1);
		setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
	};
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		updateArrows();
		el.addEventListener("scroll", updateArrows, { passive: true });
		const ro = new ResizeObserver(updateArrows);
		ro.observe(el);
		return () => {
			el.removeEventListener("scroll", updateArrows);
			ro.disconnect();
		};
	}, [categories.length]);
	const scrollBy = (dir) => {
		const el = scrollRef.current;
		if (!el) return;
		const amount = dir === "left" ? -200 : 200;
		el.scrollBy({
			left: amount,
			behavior: "smooth"
		});
	};
	const onMouseDown = (e) => {
		const el = scrollRef.current;
		if (!el) return;
		setIsDragging(true);
		dragStart.current = {
			x: e.clientX,
			scrollLeft: el.scrollLeft
		};
		el.style.cursor = "grabbing";
		el.style.scrollSnapType = "none";
	};
	const onMouseMove = (e) => {
		if (!isDragging) return;
		const el = scrollRef.current;
		if (!el) return;
		const walk = dragStart.current.x - e.clientX;
		el.scrollLeft = dragStart.current.scrollLeft + walk;
	};
	const onMouseUp = () => {
		setIsDragging(false);
		const el = scrollRef.current;
		if (!el) return;
		el.style.cursor = "grab";
		el.style.scrollSnapType = "x mandatory";
	};
	if (categories.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative group",
		children: [
			canScrollLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => scrollBy("left"),
				className: "absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 transition hover:bg-white hover:scale-105 hidden md:block",
				"aria-label": "Scroll categories left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5 text-primary" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				onMouseDown,
				onMouseMove,
				onMouseUp,
				onMouseLeave: onMouseUp,
				className: cn("flex gap-4 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-hide", isDragging ? "cursor-grabbing" : "cursor-grab"),
				style: {
					scrollbarWidth: "none",
					msOverflowStyle: "none"
				},
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/category/$slug",
					params: { slug: c.slug },
					className: "group snap-start snap-always shrink-0 text-center w-[150px] sm:w-[170px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square rounded-full bg-secondary overflow-hidden mb-3 border-2 border-transparent group-hover:border-accent transition-colors",
						children: c.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image_url,
							alt: c.name,
							loading: "lazy",
							className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium text-sm",
						children: c.name
					})]
				}, c.id))
			}),
			canScrollRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => scrollBy("right"),
				className: "absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 transition hover:bg-white hover:scale-105 hidden md:block",
				"aria-label": "Scroll categories right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-primary" })
			})
		]
	});
}
function Home() {
	const { data: categories } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const { data } = await supabase.from("categories").select("*").order("sort_order");
			return data ?? [];
		}
	});
	const { data: newArrivals } = useQuery({
		queryKey: ["new-arrivals"],
		queryFn: async () => {
			const { data } = await supabase.from("products").select("id,slug,name,short_description,price_cents,compare_at_price_cents,image_url").eq("active", true).order("created_at", { ascending: false }).limit(8);
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4",
						children: "100% Natural · Farm Fresh"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-5xl md:text-6xl leading-tight text-primary",
						children: ["Nature's finest, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-accent not-italic",
							children: "delivered."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-muted-foreground max-w-lg",
						children: "Hand-picked dry fruits, nuts and seeds — sourced from the world's best orchards and packed at the peak of freshness."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-accent hover:bg-accent/90 text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								children: "Shop the collection"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-3 gap-4 max-w-md",
						children: [
							{
								n: "50k+",
								l: "Happy customers"
							},
							{
								n: "100%",
								l: "Natural"
							},
							{
								n: "48h",
								l: "Fresh dispatch"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-2xl text-primary",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: s.l
						})] }, s.l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-accent/10 rounded-3xl rotate-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_nuts_png_asset_default.url,
						alt: "The Variety Nutrition product range — premium dry fruits, nuts, seeds and Ayurvedic herbs",
						width: 1600,
						height: 1e3,
						loading: "eager",
						fetchpriority: "high",
						decoding: "async",
						className: "relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm",
				children: [
					{
						i: Leaf,
						t: "100% Natural",
						s: "No preservatives, ever"
					},
					{
						i: Truck,
						t: "Free Shipping",
						s: "On orders above ₹999"
					},
					{
						i: ShieldCheck,
						t: "Quality Assured",
						s: "Lab-tested batches"
					},
					{
						i: Award,
						t: "Premium Grade",
						s: "AAA hand-picked"
					}
				].map(({ i: Icon, t, s }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-8 h-8 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-primary",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: s
					})] })]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl md:text-4xl text-primary mt-1",
					children: "Shop by category"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					className: "text-sm underline underline-offset-4 hover:text-accent",
					children: "View all →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySlider, { categories: categories ?? [] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
					children: "Fresh in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl md:text-4xl text-primary mt-1",
					children: "New arrivals"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					className: "text-sm underline underline-offset-4 hover:text-accent",
					children: "View all →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
				children: newArrivals?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleReviews, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramReels, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
							children: "Nutritionist-crafted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl md:text-4xl text-primary mt-2",
							children: "We create a Diet Plan for you"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Whether you're training for a marathon, chasing a weight-loss goal or just want to eat cleaner — our team builds a dry-fruit-powered plan around your body & lifestyle."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-5",
					children: [
						{
							tag: "For Athletes & Sports",
							title: "Performance & Recovery Plan",
							text: "High-protein, high-omega fuel with almonds, walnuts & pumpkin seeds for stamina, muscle recovery and sustained energy on training days.",
							badge: "🏋️ Sports"
						},
						{
							tag: "For Weight Loss",
							title: "Fat-Burn & Portion Plan",
							text: "Low-GI, fibre-rich snacks built around pistachios, flax and chia — keeps you full longer, curbs cravings and supports a calorie deficit.",
							badge: "⚖️ Weight Loss"
						},
						{
							tag: "For Everyday Wellness",
							title: "Immunity & Glow Plan",
							text: "Antioxidant-loaded mix of dates, cashews and berries for skin, hair, immunity and daily energy — perfect for busy professionals & families.",
							badge: "✨ Wellness"
						}
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card p-6 hover:shadow-lg transition-shadow flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-accent",
								children: p.badge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl text-primary mt-2",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-2 flex-1",
								children: p.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "mt-5 border-primary/20 hover:bg-primary hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/diet-plan",
									children: "Get this plan →"
								})
							})
						]
					}, p.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-xl md:text-2xl",
						children: "Not sure which plan is right for you?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-85 mt-1",
						children: "Book a free 15-min consult with our nutritionist."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "bg-accent hover:bg-accent/90 text-accent-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/diet-plan",
							children: "Talk to a nutritionist →"
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-4 py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
					children: "Our Promise"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl md:text-4xl text-primary mt-2",
					children: "From the world's finest orchards, straight to your home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted-foreground max-w-2xl mx-auto",
					children: "Every batch of The Variety Nutrition dry fruits is hand-picked, cleaned, sorted and packed within 48 hours of harvest — so what reaches you is exactly what the farmer intended. No preservatives, no artificial ripeners, no shortcuts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						children: "Read our story"
					})
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
