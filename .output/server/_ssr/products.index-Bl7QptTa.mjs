import { n as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { J as LoaderCircle, S as MessageCircle, h as Search, q as Sparkles } from "../_libs/lucide-react.mjs";
import { n as whatsappUrl, t as BRAND } from "./brand-DfYeJUSd.mjs";
import { t as ProductCard } from "./ProductCard-CvLR6mdD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-Bl7QptTa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AI_GOALS = [
	{
		key: "weight-loss",
		label: "Weight loss",
		kw: [
			"chia",
			"flax",
			"pistachio",
			"almond",
			"seed"
		]
	},
	{
		key: "muscle",
		label: "Muscle & sports",
		kw: [
			"almond",
			"walnut",
			"cashew",
			"pumpkin",
			"peanut"
		]
	},
	{
		key: "immunity",
		label: "Immunity boost",
		kw: [
			"date",
			"cashew",
			"berry",
			"raisin",
			"walnut"
		]
	},
	{
		key: "heart",
		label: "Heart health",
		kw: [
			"walnut",
			"flax",
			"almond",
			"chia"
		]
	},
	{
		key: "skin-hair",
		label: "Skin & hair",
		kw: [
			"almond",
			"walnut",
			"seed",
			"berry"
		]
	},
	{
		key: "kids",
		label: "Kids nutrition",
		kw: [
			"cashew",
			"raisin",
			"almond",
			"date"
		]
	}
];
function Products() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)(null);
	const [aiGoal, setAiGoal] = (0, import_react.useState)(null);
	const [aiThinking, setAiThinking] = (0, import_react.useState)(false);
	const { data } = useQuery({
		queryKey: ["products-all"],
		queryFn: async () => {
			const { data } = await supabase.from("products").select("id,slug,name,short_description,price_cents,compare_at_price_cents,image_url,category_id").eq("active", true).order("created_at", { ascending: false });
			return data ?? [];
		}
	});
	const { data: cats } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => (await supabase.from("categories").select("*").order("sort_order")).data ?? []
	});
	const filtered = (0, import_react.useMemo)(() => {
		let list = data ?? [];
		if (cat) list = list.filter((p) => p.category_id === cat);
		if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
		if (aiGoal) {
			const goal = AI_GOALS.find((g) => g.key === aiGoal);
			if (goal) list = list.filter((p) => {
				const hay = `${p.name} ${p.short_description ?? ""}`.toLowerCase();
				return goal.kw.some((k) => hay.includes(k));
			});
		}
		return list;
	}, [
		data,
		cat,
		q,
		aiGoal
	]);
	function runAi(goalKey) {
		setAiThinking(true);
		setTimeout(() => {
			setAiGoal(goalKey);
			setAiThinking(false);
			const g = AI_GOALS.find((x) => x.key === goalKey);
			toast.success(`AI picked products for ${g?.label}`);
		}, 700);
	}
	const expertMsg = `Hi ${BRAND.name}! I'd like help choosing the right dry fruits for my goal. Can an expert guide me?`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl text-primary",
					children: "All Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground mt-1",
					children: [filtered.length, " products"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search almonds, dates, seeds…",
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "pl-10 h-12 text-base"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(null),
					className: `shrink-0 px-4 py-2 rounded-full text-sm border transition-colors ${!cat ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-accent"}`,
					children: "All"
				}), cats?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c.id),
					className: `shrink-0 px-4 py-2 rounded-full text-sm border transition-colors ${cat === c.id ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-accent"}`,
					children: c.name
				}, c.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-[1.6fr_1fr] gap-4 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-accent/30 bg-accent/5 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-lg text-primary",
								children: "AI Selection — tell us your goal"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mb-3",
							children: "Pick a goal and our AI curates the best products for you from our range."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [AI_GOALS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => runAi(g.key),
								className: `px-3 py-1.5 rounded-full text-xs border transition-colors ${aiGoal === g.key ? "bg-accent text-accent-foreground border-accent" : "border-accent/40 hover:bg-accent/10"}`,
								children: g.label
							}, g.key)), aiGoal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setAiGoal(null),
								className: "px-3 py-1.5 rounded-full text-xs border border-border hover:bg-secondary",
								children: "Clear AI filter ✕"
							})]
						}),
						aiThinking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3 h-3 animate-spin" }), " AI curating your list…"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-primary text-primary-foreground p-5 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-lg",
						children: "Talk to an expert"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-85 mt-1",
						children: "Not sure what to buy? Chat with our nutritionist on WhatsApp — free."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-4 bg-accent hover:bg-accent/90 text-accent-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl(expertMsg),
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 mr-2" }), " Chat on WhatsApp"]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
				children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
			}),
			filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-16 text-muted-foreground",
				children: ["No products match your filters. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setQ("");
						setCat(null);
						setAiGoal(null);
					},
					className: "underline text-accent",
					children: "Reset"
				})]
			})
		]
	});
}
//#endregion
export { Products as component };
