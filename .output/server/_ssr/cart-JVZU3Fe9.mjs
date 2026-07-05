import { n as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-JVZU3Fe9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)(null);
var KEY = "nutraaj_cart_v1";
function CartProvider({ children }) {
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
	const add = (item, qty = 1) => setItems((prev) => {
		if (prev.find((i) => i.id === item.id)) return prev.map((i) => i.id === item.id ? {
			...i,
			quantity: i.quantity + qty
		} : i);
		return [...prev, {
			...item,
			quantity: qty
		}];
	});
	const remove = (id) => setItems((p) => p.filter((i) => i.id !== id));
	const setQty = (id, qty) => setItems((p) => qty <= 0 ? p.filter((i) => i.id !== id) : p.map((i) => i.id === id ? {
		...i,
		quantity: qty
	} : i));
	const clear = () => setItems([]);
	const count = items.reduce((n, i) => n + i.quantity, 0);
	const subtotal = items.reduce((n, i) => n + i.quantity * i.price_cents, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			items,
			count,
			subtotal,
			add,
			remove,
			setQty,
			clear
		},
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(Ctx);
	if (!ctx) throw new Error("useCart must be inside CartProvider");
	return ctx;
}
//#endregion
export { useCart as n, CartProvider as t };
