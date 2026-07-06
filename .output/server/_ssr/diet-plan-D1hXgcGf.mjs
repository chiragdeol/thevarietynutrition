import { o as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { t as Textarea } from "./textarea-Cp94w9lz.mjs";
import { O as Leaf, S as MessageCircle, j as HeartPulse, l as Target, q as Sparkles } from "../_libs/lucide-react.mjs";
import { n as whatsappUrl, t as BRAND } from "./brand-DfYeJUSd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/diet-plan-D1hXgcGf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var goals = [
	{
		icon: Target,
		title: "Weight Management",
		text: "Balanced calorie plans built around fibre-rich nuts and seeds."
	},
	{
		icon: HeartPulse,
		title: "Heart & Diabetes",
		text: "Low-GI, high-omega plans crafted with clinical guidance."
	},
	{
		icon: Sparkles,
		title: "Skin, Hair & Immunity",
		text: "Antioxidant-rich foods for a natural glow from within."
	},
	{
		icon: Leaf,
		title: "Everyday Wellness",
		text: "Simple daily rituals to feel lighter, sharper and stronger."
	}
];
function DietPlan() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		age: "",
		goal: "Weight Management",
		notes: ""
	});
	const message = `Hi ${BRAND.name}! I'd like a personalised diet plan.

Name: ${form.name}
Age: ${form.age}
Goal: ${form.goal}
Notes: ${form.notes}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
						children: "New"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-4xl md:text-5xl text-primary mt-2",
						children: "Personalised Diet Plans"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-2xl mx-auto",
						children: "Get a nutritionist-curated diet plan built around our farm-fresh dry fruits, nuts and seeds. Tell us your goal — we'll design a 4-week plan just for you."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5",
				children: goals.map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border p-6 bg-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-8 h-8 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg text-primary mt-4",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-2",
							children: text
						})
					]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-4 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border p-8 bg-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-primary",
						children: "Request your plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Fill this in and we'll continue on WhatsApp — usually within 2 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									placeholder: "Priya Sharma"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "age",
									children: "Age"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "age",
									type: "number",
									value: form.age,
									onChange: (e) => setForm({
										...form,
										age: e.target.value
									}),
									placeholder: "32"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "goal",
								children: "Your primary goal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "goal",
								value: form.goal,
								onChange: (e) => setForm({
									...form,
									goal: e.target.value
								}),
								className: "mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
								children: [
									goals.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: g.title }, g.title)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Muscle Gain" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pregnancy Nutrition" })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "notes",
								children: "Anything we should know? (allergies, preferences)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "notes",
								rows: 4,
								value: form.notes,
								onChange: (e) => setForm({
									...form,
									notes: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "w-full bg-[#25D366] hover:bg-[#1eb855] text-white",
								disabled: !form.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappUrl(message),
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "w-5 h-5 mr-2",
										fill: "currentColor"
									}), " Continue on WhatsApp"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground text-center",
								children: "Free consultation. Plans start from ₹499."
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { DietPlan as component };
