import { r as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-D-kkRxhE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)(null);
var KEY = "hn_wishlist_v1";
function WishlistProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) setItems(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) localStorage.setItem(KEY, JSON.stringify(items));
	}, [items, ready]);
	const has = (id) => items.some((i) => i.id === id);
	const toggle = (item) => {
		let saved = false;
		setItems((prev) => {
			if (prev.some((i) => i.id === item.id)) {
				saved = false;
				return prev.filter((i) => i.id !== item.id);
			}
			saved = true;
			return [...prev, item];
		});
		return saved;
	};
	const remove = (id) => setItems((p) => p.filter((i) => i.id !== id));
	const clear = () => setItems([]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			items,
			count: items.length,
			has,
			toggle,
			remove,
			clear
		},
		children
	});
}
function useWishlist() {
	const ctx = (0, import_react.useContext)(Ctx);
	if (!ctx) throw new Error("useWishlist must be inside WishlistProvider");
	return ctx;
}
function shareProduct(name, slug) {
	if (typeof window === "undefined") return;
	const url = `${window.location.origin}/products/${slug}`;
	if (navigator.share) navigator.share({
		title: name,
		url
	}).catch(() => {});
	else navigator.clipboard?.writeText(url);
}
//#endregion
export { shareProduct as n, useWishlist as r, WishlistProvider as t };
