import { r as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { L as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BKZnQdEA.mjs";
import { C as adminSaveTestimonial, D as adminUploadMedia, E as adminUpdateOrderStatus, O as useServerFn, S as adminSaveReel, T as adminStatus, _ as adminOrderCount, a as adminDeleteProduct, b as adminSaveCoupon, c as adminListCategories, d as adminListPosts, f as adminListProducts, g as adminLogout, i as adminDeletePost, l as adminListCoupons, m as adminListTestimonials, n as adminDeleteCategory, o as adminDeleteReel, p as adminListReels, r as adminDeleteCoupon, s as adminDeleteTestimonial, t as adminCreatePost, u as adminListOrders, v as adminReorderMedia, w as adminSetMediaActive, x as adminSaveProduct, y as adminSaveCategory } from "./admin-gate.functions-Bttsng4n.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { t as Label } from "./label-AutfcB-T.mjs";
import { t as Textarea } from "./textarea-Cp94w9lz.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { B as Check, E as LogOut, H as BellOff, I as ChevronUp, K as ArrowDown, N as Eye, P as EyeOff, V as Bell, W as ArrowUp, o as Upload, z as ChevronDown } from "../_libs/lucide-react.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DvnTAmpI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var shiprocketBookShipment = createServerFn({ method: "POST" }).inputValidator((orderId) => orderId).handler(createSsrRpc("58dcdc20f334ede2954c5969ea650af049196a9970ef2af05bd74b070a8cc1c3"));
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function AdminPage() {
	const router = useRouter();
	const status = useServerFn(adminStatus);
	const logout = useServerFn(adminLogout);
	const [checking, setChecking] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		status({}).then((s) => {
			if (!s.unlocked) router.navigate({ to: "/admin-login" });
			else setChecking(false);
		});
	}, []);
	async function handleLogout() {
		await logout({});
		router.navigate({ to: "/admin-login" });
	}
	if (checking) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-20 text-center text-muted-foreground",
		children: "Checking access…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-6 flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl text-primary",
				children: "Admin Dashboard"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Manage products, categories, coupons, orders, reels, testimonials and blog."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderNotifier, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: handleLogout,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4 mr-2" }), " Sign out"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "orders",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "flex-wrap h-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "orders",
							children: "Orders"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "products",
							children: "Products"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "categories",
							children: "Categories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "coupons",
							children: "Coupons"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "testimonials",
							children: "Testimonials"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "reels",
							children: "Reels"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "posts",
							children: "Blog Posts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "settings",
							children: "Settings"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "orders",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersAdmin, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "products",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsAdmin, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "categories",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoriesAdmin, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "coupons",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CouponsAdmin, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "testimonials",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsAdmin, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "reels",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelsAdmin, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "posts",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostsAdmin, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "settings",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationSettings, {})
				})
			]
		})]
	});
}
var NOTIF_KEY = "hn_admin_last_order_count";
var SETTINGS_KEY = "hn_admin_notif_settings_v1";
var SETTINGS_EVENT = "hn-admin-notif-settings-changed";
var DEFAULT_SETTINGS = {
	soundOn: true,
	browserOn: true,
	toastOn: true,
	pollSeconds: 15,
	quietStart: -1,
	quietEnd: -1
};
function readSettings() {
	try {
		const raw = localStorage.getItem(SETTINGS_KEY);
		if (!raw) return DEFAULT_SETTINGS;
		return {
			...DEFAULT_SETTINGS,
			...JSON.parse(raw)
		};
	} catch {
		return DEFAULT_SETTINGS;
	}
}
function writeSettings(s) {
	localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
	window.dispatchEvent(new CustomEvent(SETTINGS_EVENT));
}
function inQuietHours(s) {
	if (s.quietStart < 0 || s.quietEnd < 0) return false;
	const h = (/* @__PURE__ */ new Date()).getHours();
	return s.quietStart <= s.quietEnd ? h >= s.quietStart && h < s.quietEnd : h >= s.quietStart || h < s.quietEnd;
}
function useNotifSettings() {
	const [s, setS] = (0, import_react.useState)(DEFAULT_SETTINGS);
	(0, import_react.useEffect)(() => {
		setS(readSettings());
		const handler = () => setS(readSettings());
		window.addEventListener(SETTINGS_EVENT, handler);
		window.addEventListener("storage", handler);
		return () => {
			window.removeEventListener(SETTINGS_EVENT, handler);
			window.removeEventListener("storage", handler);
		};
	}, []);
	return s;
}
function playAlarm() {
	try {
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) return;
		const ctx = new AC();
		const now = ctx.currentTime;
		[
			0,
			.25,
			.5
		].forEach((offset) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(880, now + offset);
			gain.gain.setValueAtTime(1e-4, now + offset);
			gain.gain.exponentialRampToValueAtTime(.4, now + offset + .02);
			gain.gain.exponentialRampToValueAtTime(1e-4, now + offset + .18);
			osc.connect(gain).connect(ctx.destination);
			osc.start(now + offset);
			osc.stop(now + offset + .2);
		});
		setTimeout(() => ctx.close?.(), 1500);
	} catch {}
}
function OrderNotifier() {
	const qc = useQueryClient();
	const count = useServerFn(adminOrderCount);
	const lastRef = (0, import_react.useRef)(null);
	const settings = useNotifSettings();
	(0, import_react.useEffect)(() => {
		try {
			const stored = localStorage.getItem(NOTIF_KEY);
			if (stored) lastRef.current = parseInt(stored, 10);
		} catch {}
		if (typeof Notification !== "undefined" && Notification.permission === "default" && settings.browserOn) Notification.requestPermission().catch(() => {});
	}, [settings.browserOn]);
	const { data } = useQuery({
		queryKey: ["adm-order-count"],
		queryFn: () => count({}),
		refetchInterval: Math.max(10, settings.pollSeconds) * 1e3,
		refetchIntervalInBackground: true
	});
	(0, import_react.useEffect)(() => {
		if (!data) return;
		const c = data.count;
		if (lastRef.current === null) {
			lastRef.current = c;
			localStorage.setItem(NOTIF_KEY, String(c));
			return;
		}
		if (c > lastRef.current) {
			const diff = c - lastRef.current;
			const quiet = inQuietHours(settings);
			if (settings.toastOn) toast.success(`🔔 ${diff} new order${diff > 1 ? "s" : ""} received!`);
			if (settings.soundOn && !quiet) playAlarm();
			if (settings.browserOn && !quiet && typeof Notification !== "undefined" && Notification.permission === "granted") try {
				new Notification("New order — The Variety Nutrition", { body: `${diff} new order${diff > 1 ? "s" : ""} received.` });
			} catch {}
			qc.invalidateQueries({ queryKey: ["adm-orders"] });
			lastRef.current = c;
			localStorage.setItem(NOTIF_KEY, String(c));
		}
	}, [
		data,
		settings,
		qc
	]);
	const anyOn = settings.soundOn || settings.browserOn || settings.toastOn;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 h-9 text-sm",
		title: anyOn ? "Notifications on" : "All notifications off",
		children: [anyOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-4 h-4 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellOff, { className: "w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "hidden sm:inline",
			children: [data?.count ?? 0, " orders"]
		})]
	});
}
function NotificationSettings() {
	const [s, setS] = (0, import_react.useState)(DEFAULT_SETTINGS);
	(0, import_react.useEffect)(() => {
		setS(readSettings());
	}, []);
	function update(key, val) {
		const next = {
			...s,
			[key]: val
		};
		setS(next);
		writeSettings(next);
	}
	async function requestBrowser() {
		if (typeof Notification === "undefined") {
			toast.error("Browser notifications not supported");
			return;
		}
		if (await Notification.requestPermission() === "granted") {
			toast.success("Browser notifications enabled");
			update("browserOn", true);
		} else toast.error("Permission denied");
	}
	const perm = typeof Notification !== "undefined" ? Notification.permission : "unsupported";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 max-w-2xl space-y-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl p-5 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold text-lg",
					children: "New order alerts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Choose how you're notified when new orders come in."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-3 py-2 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: "Alarm sound"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Play a 3-beep alarm on new orders"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: s.soundOn,
						onChange: (e) => update("soundOn", e.target.checked),
						className: "w-5 h-5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-3 py-2 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: "Toast notification"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Show an in-page toast alert"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: s.toastOn,
						onChange: (e) => update("toastOn", e.target.checked),
						className: "w-5 h-5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 py-2 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: "Browser notification"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							"System-level pop-up (permission: ",
							perm,
							")"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [perm !== "granted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: requestBrowser,
							children: "Enable"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: s.browserOn,
							onChange: (e) => update("browserOn", e.target.checked),
							className: "w-5 h-5"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-2 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Check for new orders every" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 10,
							max: 300,
							value: s.pollSeconds,
							onChange: (e) => update("pollSeconds", Math.max(10, Math.min(300, parseInt(e.target.value || "15", 10)))),
							className: "w-28"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "seconds (10–300)"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-2 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Quiet hours (mute sound & browser pop-ups)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mt-1 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: s.quietStart,
								onChange: (e) => update("quietStart", parseInt(e.target.value, 10)),
								className: "border border-input bg-background rounded-md h-9 px-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: -1,
									children: "Off"
								}), Array.from({ length: 24 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: i,
									children: [String(i).padStart(2, "0"), ":00"]
								}, i))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "to"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: s.quietEnd,
								onChange: (e) => update("quietEnd", parseInt(e.target.value, 10)),
								className: "border border-input bg-background rounded-md h-9 px-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: -1,
									children: "Off"
								}), Array.from({ length: 24 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: i,
									children: [String(i).padStart(2, "0"), ":00"]
								}, i))]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-2 border-t border-border flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => playAlarm(),
						children: "Test alarm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => {
							writeSettings(DEFAULT_SETTINGS);
							setS(DEFAULT_SETTINGS);
							toast.success("Reset to defaults");
						},
						children: "Reset defaults"
					})]
				})
			]
		})
	});
}
function MediaRowActions({ table, row, queryKey }) {
	const qc = useQueryClient();
	const setActive = useServerFn(adminSetMediaActive);
	const reorder = useServerFn(adminReorderMedia);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function run(fn, okMsg) {
		setBusy(true);
		try {
			await fn();
			if (okMsg) toast.success(okMsg);
			qc.invalidateQueries({ queryKey: [queryKey] });
		} catch (err) {
			toast.error(err.message || "Failed");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				disabled: busy,
				title: "Move up",
				onClick: () => run(() => reorder({ data: {
					table,
					id: row.id,
					direction: "up"
				} })),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "w-4 h-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				disabled: busy,
				title: "Move down",
				onClick: () => run(() => reorder({ data: {
					table,
					id: row.id,
					direction: "down"
				} })),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "w-4 h-4" })
			}),
			row.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				disabled: busy,
				title: "Unpublish",
				onClick: () => run(() => setActive({ data: {
					table,
					id: row.id,
					active: false
				} }), "Unpublished"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				className: "bg-accent text-accent-foreground h-8 px-2",
				disabled: busy,
				title: "Approve & publish",
				onClick: () => run(() => setActive({ data: {
					table,
					id: row.id,
					active: true
				} }), "Published"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
			})
		]
	});
}
function OrdersAdmin() {
	const qc = useQueryClient();
	const list = useServerFn(adminListOrders);
	const update = useServerFn(adminUpdateOrderStatus);
	const bookShipment = useServerFn(shiprocketBookShipment);
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	const [bookingId, setBookingId] = (0, import_react.useState)(null);
	const { data } = useQuery({
		queryKey: ["adm-orders"],
		queryFn: () => list({})
	});
	async function change(id, status) {
		try {
			await update({ data: {
				id,
				status
			} });
			toast.success("Updated");
			qc.invalidateQueries({ queryKey: ["adm-orders"] });
		} catch (e) {
			toast.error(e.message);
		}
	}
	async function handleBookShipment(id) {
		setBookingId(id);
		try {
			await bookShipment({ data: id });
			toast.success("Shipment booked with Shiprocket!");
			qc.invalidateQueries({ queryKey: ["adm-orders"] });
		} catch (e) {
			toast.error(e.message || "Failed to book shipment");
		} finally {
			setBookingId(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-3",
		children: [!data?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm text-muted-foreground",
			children: "No orders yet."
		}), data?.map((o) => {
			const isOpen = expanded === o.id;
			const items = o.order_items ?? [];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-between items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono font-semibold",
								children: o.order_number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [
									new Date(o.created_at).toLocaleString(),
									" · ",
									o.customer_name,
									" · ",
									items.length,
									" item",
									items.length !== 1 ? "s" : ""
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: formatINR(o.total_cents)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: o.status,
							onValueChange: (v) => change(o.id, v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-36",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
								"pending",
								"paid",
								"shipped",
								"delivered",
								"cancelled"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: s,
								children: s
							}, s)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setExpanded(isOpen ? null : o.id),
							children: isOpen ? "Hide details" : "View details"
						})
					]
				}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid md:grid-cols-2 gap-4 border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-secondary/50 rounded-lg p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground",
								children: "Customer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Name:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: o.customer_name
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Email:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${o.customer_email}`,
											className: "font-medium text-accent hover:underline",
											children: o.customer_email
										})
									] }),
									o.customer_phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Phone:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:${o.customer_phone}`,
											className: "font-medium text-accent hover:underline",
											children: o.customer_phone
										}),
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `https://wa.me/${o.customer_phone.replace(/\D/g, "")}`,
											target: "_blank",
											rel: "noreferrer",
											className: "text-xs text-emerald-600 hover:underline",
											children: "WhatsApp"
										})
									] }),
									o.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Notes:"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic",
												children: o.notes
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 pt-4 border-t border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-2",
											children: "Shiprocket Courier"
										}), o.shiprocket_shipment_id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: "Shipment ID:"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono font-medium",
														children: o.shiprocket_shipment_id
													})
												] }),
												o.shiprocket_order_id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: "Shiprocket Order ID:"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono font-medium",
														children: o.shiprocket_order_id
													})
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "pt-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: `https://shiprocket.co/tracking/${o.shiprocket_shipment_id}`,
														target: "_blank",
														rel: "noreferrer",
														className: "text-xs text-accent hover:underline font-medium",
														children: "Track on Shiprocket Dashboard"
													})
												})
											]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Not shipped yet."
											}), o.status === "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												type: "button",
												disabled: bookingId === o.id,
												onClick: () => handleBookShipment(o.id),
												className: "bg-accent hover:bg-accent/90 text-accent-foreground text-xs h-8",
												children: bookingId === o.id ? "Booking..." : "Ship via Shiprocket"
											})]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold mt-4 mb-2 text-sm uppercase tracking-wide text-muted-foreground",
								children: "Shipping address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm leading-relaxed",
								children: [
									o.shipping_address,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									o.shipping_city,
									o.shipping_state ? `, ${o.shipping_state}` : "",
									" ",
									o.shipping_zip,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									o.shipping_country
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-secondary/50 rounded-lg p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground",
								children: [
									"Products (",
									items.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										it.product_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: it.product_image,
											alt: "",
											loading: "lazy",
											decoding: "async",
											className: "w-12 h-12 rounded object-cover shrink-0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-medium truncate",
												children: it.product_name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs text-muted-foreground",
												children: [
													formatINR(it.unit_price_cents),
													" × ",
													it.quantity
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold shrink-0",
											children: formatINR(it.line_total_cents)
										})
									]
								}, it.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-3 border-t border-border space-y-1 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(o.subtotal_cents) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.shipping_cents === 0 ? "Free" : formatINR(o.shipping_cents) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between font-bold text-base pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(o.total_cents) })]
									})
								]
							})
						]
					})]
				})]
			}, o.id);
		})]
	});
}
function CategoriesAdmin() {
	const qc = useQueryClient();
	const list = useServerFn(adminListCategories);
	const save = useServerFn(adminSaveCategory);
	const del = useServerFn(adminDeleteCategory);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const { data } = useQuery({
		queryKey: ["adm-cats"],
		queryFn: () => list({})
	});
	async function submit(e, id) {
		e.preventDefault();
		const fd = Object.fromEntries(new FormData(e.currentTarget));
		const payload = {
			name: fd.name,
			slug: fd.slug,
			description: fd.description || null,
			image_url: fd.image_url || null,
			sort_order: parseInt(fd.sort_order || "0", 10)
		};
		try {
			await save({ data: {
				id,
				payload
			} });
			toast.success("Saved");
			setEditing(null);
			qc.invalidateQueries({ queryKey: ["adm-cats"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	async function remove(id) {
		if (!confirm("Delete this category?")) return;
		try {
			await del({ data: { id } });
			toast.success("Deleted");
			qc.invalidateQueries({ queryKey: ["adm-cats"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	const Form = ({ c, id }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => submit(e, id),
		className: "grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "name",
				placeholder: "Name",
				defaultValue: c?.name ?? "",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "slug",
				placeholder: "slug",
				defaultValue: c?.slug ?? "",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "image_url",
				placeholder: "Image URL",
				defaultValue: c?.image_url ?? ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "sort_order",
				type: "number",
				placeholder: "Sort order",
				defaultValue: c?.sort_order ?? 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				name: "description",
				placeholder: "Description",
				defaultValue: c?.description ?? "",
				className: "sm:col-span-2",
				rows: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "bg-accent text-accent-foreground",
					children: "Save"
				}), id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => setEditing(null),
					children: "Cancel"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "bg-card border border-border rounded-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
				className: "cursor-pointer font-semibold",
				children: "+ Add new category"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {})
			})]
		}), data?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 min-w-0",
					children: [c.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.image_url,
						alt: "",
						loading: "lazy",
						decoding: "async",
						className: "w-12 h-12 rounded object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium truncate",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [
								"/",
								c.slug,
								" · order ",
								c.sort_order
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setEditing(editing === c.id ? null : c.id),
						children: "Edit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => remove(c.id),
						children: "Delete"
					})]
				})]
			}), editing === c.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
					c,
					id: c.id
				})
			})]
		}, c.id))]
	});
}
function ProductsAdmin() {
	const qc = useQueryClient();
	const list = useServerFn(adminListProducts);
	const listCats = useServerFn(adminListCategories);
	const save = useServerFn(adminSaveProduct);
	const del = useServerFn(adminDeleteProduct);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const { data } = useQuery({
		queryKey: ["adm-prods"],
		queryFn: () => list({})
	});
	const { data: cats } = useQuery({
		queryKey: ["adm-cats"],
		queryFn: () => listCats({})
	});
	async function submit(e, id) {
		e.preventDefault();
		const fd = Object.fromEntries(new FormData(e.currentTarget));
		const payload = {
			slug: fd.slug,
			name: fd.name,
			short_description: fd.short_description || null,
			description: fd.description || null,
			price_cents: Math.round(parseFloat(fd.price || "0") * 100),
			compare_at_price_cents: fd.compare_at ? Math.round(parseFloat(fd.compare_at) * 100) : null,
			category_id: fd.category_id || null,
			stock: parseInt(fd.stock || "0", 10),
			image_url: fd.image_url || null,
			active: fd.active === "on",
			featured: fd.featured === "on"
		};
		try {
			await save({ data: {
				id,
				payload
			} });
			toast.success("Saved");
			setEditing(null);
			qc.invalidateQueries({ queryKey: ["adm-prods"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	async function remove(id) {
		if (!confirm("Delete this product?")) return;
		try {
			await del({ data: { id } });
			toast.success("Deleted");
			qc.invalidateQueries({ queryKey: ["adm-prods"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	const Form = ({ p, id }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => submit(e, id),
		className: "grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "name",
				placeholder: "Name",
				defaultValue: p?.name ?? "",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "slug",
				placeholder: "slug",
				defaultValue: p?.slug ?? "",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "short_description",
				placeholder: "Short description",
				defaultValue: p?.short_description ?? ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "image_url",
				placeholder: "Image URL",
				defaultValue: p?.image_url ?? ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "price",
				type: "number",
				step: "0.01",
				placeholder: "Price (₹)",
				defaultValue: p?.price_cents ? p.price_cents / 100 : "",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "compare_at",
				type: "number",
				step: "0.01",
				placeholder: "Compare at (₹)",
				defaultValue: p?.compare_at_price_cents ? p.compare_at_price_cents / 100 : ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "stock",
				type: "number",
				placeholder: "Stock",
				defaultValue: p?.stock ?? 0,
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				name: "category_id",
				defaultValue: p?.category_id ?? "",
				className: "rounded-md border border-input bg-background px-3 py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "— No category —"
				}), cats?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: c.id,
					children: c.name
				}, c.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				name: "description",
				placeholder: "Long description",
				defaultValue: p?.description ?? "",
				className: "sm:col-span-2",
				rows: 3
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					name: "active",
					defaultChecked: p ? p.active : true
				}), " Active"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					name: "featured",
					defaultChecked: p?.featured ?? false
				}), " Featured"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "bg-accent text-accent-foreground",
					children: "Save"
				}), id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => setEditing(null),
					children: "Cancel"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "bg-card border border-border rounded-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
				className: "cursor-pointer font-semibold",
				children: "+ Add new product"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {})
			})]
		}), data?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 min-w-0",
					children: [p.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image_url,
						alt: "",
						loading: "lazy",
						decoding: "async",
						className: "w-12 h-12 rounded object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium truncate",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [
								formatINR(p.price_cents),
								" · Stock ",
								p.stock,
								" · ",
								p.active ? "Active" : "Hidden"
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setEditing(editing === p.id ? null : p.id),
						children: "Edit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => remove(p.id),
						children: "Delete"
					})]
				})]
			}), editing === p.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
					p,
					id: p.id
				})
			})]
		}, p.id))]
	});
}
function CouponsAdmin() {
	const qc = useQueryClient();
	const list = useServerFn(adminListCoupons);
	const save = useServerFn(adminSaveCoupon);
	const del = useServerFn(adminDeleteCoupon);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const { data } = useQuery({
		queryKey: ["adm-coupons"],
		queryFn: () => list({})
	});
	async function submit(e, id) {
		e.preventDefault();
		const fd = Object.fromEntries(new FormData(e.currentTarget));
		const payload = {
			code: fd.code.toUpperCase(),
			description: fd.description || null,
			discount_type: fd.discount_type,
			discount_value: parseFloat(fd.discount_value || "0"),
			min_order_cents: Math.round(parseFloat(fd.min_order || "0") * 100),
			max_uses: fd.max_uses ? parseInt(fd.max_uses, 10) : null,
			active: fd.active === "on",
			expires_at: fd.expires_at || null
		};
		try {
			await save({ data: {
				id,
				payload
			} });
			toast.success("Saved");
			setEditing(null);
			qc.invalidateQueries({ queryKey: ["adm-coupons"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	async function remove(id) {
		if (!confirm("Delete this coupon?")) return;
		try {
			await del({ data: { id } });
			toast.success("Deleted");
			qc.invalidateQueries({ queryKey: ["adm-coupons"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	const Form = ({ c, id }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => submit(e, id),
		className: "grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "code",
				placeholder: "CODE (e.g. HEALTHY15)",
				defaultValue: c?.code ?? "",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				name: "discount_type",
				defaultValue: c?.discount_type ?? "percent",
				className: "rounded-md border border-input bg-background px-3 py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "percent",
					children: "Percent (%)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "flat",
					children: "Flat (₹)"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "discount_value",
				type: "number",
				step: "0.01",
				placeholder: "Value",
				defaultValue: c?.discount_value ?? "",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "min_order",
				type: "number",
				step: "0.01",
				placeholder: "Min order (₹)",
				defaultValue: c ? Number(c.min_order_cents) / 100 : ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "max_uses",
				type: "number",
				placeholder: "Max uses (blank = unlimited)",
				defaultValue: c?.max_uses ?? ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name: "expires_at",
				type: "datetime-local",
				defaultValue: c?.expires_at ? new Date(c.expires_at).toISOString().slice(0, 16) : ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				name: "description",
				placeholder: "Description",
				defaultValue: c?.description ?? "",
				className: "sm:col-span-2",
				rows: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					name: "active",
					defaultChecked: c ? c.active : true
				}), " Active"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "bg-accent text-accent-foreground",
					children: "Save"
				}), id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => setEditing(null),
					children: "Cancel"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "bg-card border border-border rounded-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
				className: "cursor-pointer font-semibold",
				children: "+ Add new coupon"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {})
			})]
		}), data?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center gap-3 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono font-bold text-lg",
						children: c.code
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							c.discount_type === "percent" ? `${c.discount_value}% off` : `₹${c.discount_value} off`,
							c.min_order_cents > 0 && ` · min ₹${c.min_order_cents / 100}`,
							" · ",
							"used ",
							c.times_used,
							c.max_uses ? `/${c.max_uses}` : "",
							" · ",
							c.active ? "Active" : "Inactive",
							c.expires_at && ` · expires ${new Date(c.expires_at).toLocaleDateString()}`
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setEditing(editing === c.id ? null : c.id),
						children: "Edit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => remove(c.id),
						children: "Delete"
					})]
				})]
			}), editing === c.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
					c,
					id: c.id
				})
			})]
		}, c.id))]
	});
}
function PostsAdmin() {
	const qc = useQueryClient();
	const list = useServerFn(adminListPosts);
	const create = useServerFn(adminCreatePost);
	const del = useServerFn(adminDeletePost);
	const { data } = useQuery({
		queryKey: ["adm-posts"],
		queryFn: () => list({})
	});
	async function submit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = Object.fromEntries(new FormData(form));
		const payload = {
			slug: fd.slug,
			title: fd.title,
			excerpt: fd.excerpt,
			content: fd.content,
			cover_image: fd.cover_image || null,
			author_name: fd.author_name || null
		};
		try {
			await create({ data: { payload } });
			toast.success("Published");
			form.reset();
			qc.invalidateQueries({ queryKey: ["adm-posts"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	async function remove(id) {
		if (!confirm("Delete post?")) return;
		try {
			await del({ data: { id } });
			toast.success("Deleted");
			qc.invalidateQueries({ queryKey: ["adm-posts"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "bg-card border border-border rounded-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
				className: "cursor-pointer font-semibold",
				children: "+ New post"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-4 grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "title",
							required: true
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Slug" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "slug",
							required: true
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Cover image URL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { name: "cover_image" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Author" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { name: "author_name" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Excerpt" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { name: "excerpt" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Content (Markdown)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						name: "content",
						rows: 8,
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "bg-accent text-accent-foreground w-fit",
						children: "Publish"
					})
				]
			})]
		}), data?.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl p-4 flex justify-between items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium truncate",
					children: p.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: ["/", p.slug]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				onClick: () => remove(p.id),
				children: "Delete"
			})]
		}, p.id))]
	});
}
function MediaUploadField({ value, onChange, accept = "video/*" }) {
	const upload = useServerFn(adminUploadMedia);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function handleFile(file) {
		if (file.size > 50 * 1024 * 1024) {
			toast.error("File too large (max 50MB)");
			return;
		}
		setBusy(true);
		try {
			const buf = await file.arrayBuffer();
			const bytes = new Uint8Array(buf);
			let bin = "";
			for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
			const b64 = btoa(bin);
			onChange((await upload({ data: {
				filename: file.name,
				contentType: file.type || "application/octet-stream",
				dataBase64: b64
			} })).url);
			toast.success("Uploaded");
		} catch (e) {
			toast.error(e.message || "Upload failed");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2 items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder: "Paste URL or upload…"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: `inline-flex items-center gap-1 rounded-md border border-input bg-background px-3 h-9 text-sm cursor-pointer hover:bg-secondary shrink-0 ${busy ? "opacity-50 pointer-events-none" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-4 h-4" }),
				" ",
				busy ? "…" : "Upload",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept,
					className: "hidden",
					onChange: (e) => {
						const f = e.target.files?.[0];
						if (f) handleFile(f);
						e.target.value = "";
					}
				})
			]
		})]
	});
}
function TestimonialsAdmin() {
	const qc = useQueryClient();
	const list = useServerFn(adminListTestimonials);
	const save = useServerFn(adminSaveTestimonial);
	const del = useServerFn(adminDeleteTestimonial);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [addOpen, setAddOpen] = (0, import_react.useState)(false);
	const { data } = useQuery({
		queryKey: ["adm-testimonials"],
		queryFn: () => list({})
	});
	async function remove(id) {
		if (!confirm("Delete this testimonial?")) return;
		try {
			await del({ data: { id } });
			toast.success("Deleted");
			qc.invalidateQueries({ queryKey: ["adm-testimonials"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	function TestimonialForm({ t, id, onDone }) {
		const [videoUrl, setVideoUrl] = (0, import_react.useState)(t?.video_url ?? "");
		async function submit(e) {
			e.preventDefault();
			const fd = Object.fromEntries(new FormData(e.currentTarget));
			const payload = {
				video_url: videoUrl,
				name: fd.name,
				city: fd.city || null,
				role: fd.role || null,
				caption: fd.caption || null,
				accent: fd.accent || "from-amber-400 to-orange-500",
				sort_order: parseInt(fd.sort_order || "0", 10),
				active: fd.active === "on"
			};
			try {
				await save({ data: {
					id,
					payload
				} });
				toast.success("Saved");
				onDone();
				qc.invalidateQueries({ queryKey: ["adm-testimonials"] });
			} catch (err) {
				toast.error(err.message);
			}
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Video (upload or URL)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaUploadField, {
						value: videoUrl,
						onChange: setVideoUrl
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "name",
					placeholder: "Customer name",
					defaultValue: t?.name ?? "",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "city",
					placeholder: "City",
					defaultValue: t?.city ?? ""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "role",
					placeholder: "Role (e.g. Verified Customer)",
					defaultValue: t?.role ?? "Verified Customer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "accent",
					placeholder: "Accent (Tailwind gradient)",
					defaultValue: t?.accent ?? "from-amber-400 to-orange-500"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "sort_order",
					type: "number",
					placeholder: "Sort order",
					defaultValue: t?.sort_order ?? 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						name: "active",
						defaultChecked: t ? t.active : true
					}), " Active"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					name: "caption",
					placeholder: "Caption",
					defaultValue: t?.caption ?? "",
					className: "sm:col-span-2",
					rows: 2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "bg-accent text-accent-foreground",
						children: "Save"
					}), id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: onDone,
						children: "Cancel"
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setAddOpen((o) => !o),
					className: "font-semibold text-left w-full",
					children: addOpen ? "− Close" : "+ Add new testimonial"
				}), addOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialForm, { onDone: () => setAddOpen(false) })
				})]
			}),
			!data?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-muted-foreground",
				children: "No testimonials yet."
			}),
			data?.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center gap-3 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: t.video_url,
							muted: true,
							playsInline: true,
							className: "w-14 h-20 rounded object-cover bg-black shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-medium truncate flex items-center gap-2",
								children: [t.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[10px] px-2 py-0.5 rounded-full ${t.active ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`,
									children: t.active ? "Published" : "Draft"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground truncate",
								children: [
									t.role,
									t.city ? ` · ${t.city}` : "",
									" · order ",
									t.sort_order
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 shrink-0 flex-wrap justify-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaRowActions, {
								table: "testimonials",
								row: t,
								queryKey: "adm-testimonials"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setEditing(editing === t.id ? null : t.id),
								children: "Edit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => remove(t.id),
								children: "Delete"
							})
						]
					})]
				}), editing === t.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialForm, {
						t,
						id: t.id,
						onDone: () => setEditing(null)
					})
				})]
			}, t.id))
		]
	});
}
function ReelsAdmin() {
	const qc = useQueryClient();
	const list = useServerFn(adminListReels);
	const save = useServerFn(adminSaveReel);
	const del = useServerFn(adminDeleteReel);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [addOpen, setAddOpen] = (0, import_react.useState)(false);
	const { data } = useQuery({
		queryKey: ["adm-reels"],
		queryFn: () => list({})
	});
	async function remove(id) {
		if (!confirm("Delete this reel?")) return;
		try {
			await del({ data: { id } });
			toast.success("Deleted");
			qc.invalidateQueries({ queryKey: ["adm-reels"] });
		} catch (err) {
			toast.error(err.message);
		}
	}
	function ReelForm({ r, id, onDone }) {
		const [videoUrl, setVideoUrl] = (0, import_react.useState)(r?.video_url ?? "");
		async function submit(e) {
			e.preventDefault();
			const fd = Object.fromEntries(new FormData(e.currentTarget));
			const payload = {
				video_url: videoUrl,
				title: fd.title,
				caption: fd.caption || null,
				sort_order: parseInt(fd.sort_order || "0", 10),
				active: fd.active === "on"
			};
			try {
				await save({ data: {
					id,
					payload
				} });
				toast.success("Saved");
				onDone();
				qc.invalidateQueries({ queryKey: ["adm-reels"] });
			} catch (err) {
				toast.error(err.message);
			}
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Video (upload or URL)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaUploadField, {
						value: videoUrl,
						onChange: setVideoUrl
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "title",
					placeholder: "Title",
					defaultValue: r?.title ?? "",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "sort_order",
					type: "number",
					placeholder: "Sort order",
					defaultValue: r?.sort_order ?? 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					name: "caption",
					placeholder: "Caption",
					defaultValue: r?.caption ?? "",
					className: "sm:col-span-2",
					rows: 2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						name: "active",
						defaultChecked: r ? r.active : true
					}), " Active"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "bg-accent text-accent-foreground",
						children: "Save"
					}), id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: onDone,
						children: "Cancel"
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setAddOpen((o) => !o),
					className: "font-semibold text-left w-full",
					children: addOpen ? "− Close" : "+ Add new reel"
				}), addOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelForm, { onDone: () => setAddOpen(false) })
				})]
			}),
			!data?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-muted-foreground",
				children: "No reels yet."
			}),
			data?.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center gap-3 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: r.video_url,
							muted: true,
							playsInline: true,
							className: "w-14 h-20 rounded object-cover bg-black shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-medium truncate flex items-center gap-2",
								children: [r.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[10px] px-2 py-0.5 rounded-full ${r.active ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`,
									children: r.active ? "Published" : "Draft"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground truncate",
								children: ["order ", r.sort_order]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 shrink-0 flex-wrap justify-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaRowActions, {
								table: "reels",
								row: r,
								queryKey: "adm-reels"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setEditing(editing === r.id ? null : r.id),
								children: "Edit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => remove(r.id),
								children: "Delete"
							})
						]
					})]
				}), editing === r.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelForm, {
						r,
						id: r.id,
						onDone: () => setEditing(null)
					})
				})]
			}, r.id))
		]
	});
}
//#endregion
export { AdminPage as component };
