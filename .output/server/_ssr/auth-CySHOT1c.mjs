import { r as __toESM } from "../_runtime.mjs";
import { t as hero_nuts_png_asset_default } from "./hero-nuts.png.asset-BBg8lKzL.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-6ujG9vBg.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as useAuth } from "./auth-Bu-nY_Ep.mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { _ as useSearch, g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as Leaf, W as Sparkles, p as ShieldCheck, s as Truck } from "../_libs/lucide-react.mjs";
import { t as tvn_logo_png_asset_default } from "./tvn-logo.png.asset-LrE-vGw3.mjs";
import { t as BRAND } from "./brand-DfYeJUSd.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CySHOT1c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const { mode } = useSearch({ from: "/auth" });
	const isSignup = mode === "signup";
	const { user } = useAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (user) navigate({ to: "/products" });
	}, [user, navigate]);
	async function handleEmail(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = objectType({
			email: stringType().trim().email().max(255),
			password: stringType().min(6).max(100),
			full_name: stringType().trim().max(100).optional()
		}).safeParse(Object.fromEntries(fd));
		if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
		setLoading(true);
		try {
			if (isSignup) {
				const { error } = await supabase.auth.signUp({
					email: parsed.data.email,
					password: parsed.data.password,
					options: {
						emailRedirectTo: window.location.origin,
						data: { full_name: parsed.data.full_name }
					}
				});
				if (error) throw error;
				toast.success("Account created!");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email: parsed.data.email,
					password: parsed.data.password
				});
				if (error) throw error;
				toast.success("Welcome back!");
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Authentication failed");
		} finally {
			setLoading(false);
		}
	}
	async function handleGoogle() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: { redirectTo: window.location.origin + "/auth" }
		});
		if (error) {
			console.error(error);
			toast.error(error.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[calc(100vh-4rem)] grid lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden lg:flex flex-col justify-between overflow-hidden bg-primary text-primary-foreground p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_nuts_png_asset_default.url,
					alt: "",
					loading: "lazy",
					decoding: "async",
					"aria-hidden": "true",
					className: "absolute inset-0 w-full h-full object-cover opacity-25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/95" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block bg-background/90 rounded-xl p-2 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: tvn_logo_png_asset_default.url,
								alt: "",
								width: 120,
								height: 48,
								decoding: "async",
								className: "h-10 w-auto"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: BRAND.name
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.25em] text-accent font-semibold",
							children: "Welcome"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-4xl xl:text-5xl leading-tight mt-3",
							children: ["Nature's finest, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-accent not-italic",
								children: "delivered fresh."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-primary-foreground/80 max-w-md",
							children: "Sign in to track orders, save favourites and unlock member-only pricing on our farm-fresh dry fruits and nuts."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid grid-cols-2 gap-5 max-w-md",
							children: [
								{
									i: Leaf,
									t: "100% Natural"
								},
								{
									i: Truck,
									t: "Free shipping ₹999+"
								},
								{
									i: ShieldCheck,
									t: "Lab-tested batches"
								},
								{
									i: Sparkles,
									t: "Member-only offers"
								}
							].map(({ i: Icon, t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 text-accent shrink-0" }),
									" ",
									t
								]
							}, t))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative text-xs text-primary-foreground/60",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						BRAND.name
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center px-4 py-14 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden mb-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: tvn_logo_png_asset_default.url,
								alt: "",
								width: 120,
								height: 48,
								decoding: "async",
								className: "h-12 w-auto"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: BRAND.name
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-3xl md:text-4xl text-primary",
						children: isSignup ? "Create your account" : "Welcome back"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-2",
						children: isSignup ? "Join thousands of families eating cleaner every day." : "Sign in to continue where you left off."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: handleGoogle,
						variant: "outline",
						className: "w-full mt-8 h-11 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "w-4 h-4",
							viewBox: "0 0 24 24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "#4285F4",
									d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09Z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "#34A853",
									d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "#FBBC05",
									d: "M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "#EA4335",
									d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
								})
							]
						}), "Continue with Google"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-6 flex items-center gap-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
							" OR CONTINUE WITH EMAIL ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleEmail,
						className: "space-y-4",
						children: [
							isSignup && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "full_name",
								children: "Full name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "full_name",
								name: "full_name",
								placeholder: "Your name",
								className: "h-11 mt-1.5",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								placeholder: "you@example.com",
								className: "h-11 mt-1.5",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Password"
								}), !isSignup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Min. 6 characters"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								name: "password",
								type: "password",
								placeholder: "••••••••",
								className: "h-11 mt-1.5",
								minLength: 6,
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: loading,
								className: "w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground",
								children: loading ? "Please wait…" : isSignup ? "Create account" : "Sign in"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-sm mt-8 text-muted-foreground",
						children: [
							isSignup ? "Already have an account?" : "New to The Variety Nutrition?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth",
								search: { mode: isSignup ? "signin" : "signup" },
								className: "text-accent font-medium hover:underline",
								children: isSignup ? "Sign in" : "Create one"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-muted-foreground mt-6",
						children: "By continuing you agree to our Terms & Privacy Policy."
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };
