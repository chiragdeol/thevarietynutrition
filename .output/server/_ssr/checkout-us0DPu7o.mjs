import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-zvjv51uO.mjs";
import { i as stringType, n as numberType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-us0DPu7o.js
var $$splitComponentImporter = () => import("./checkout-BZPC8fFO.mjs");
var Route = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — The Variety Nutrition" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var placeOrderServerFn = createServerFn({ method: "POST" }).inputValidator(objectType({
	customer_name: stringType(),
	customer_email: stringType(),
	customer_phone: stringType(),
	shipping_address: stringType(),
	shipping_city: stringType(),
	shipping_state: stringType().optional(),
	shipping_zip: stringType(),
	notes: stringType().optional(),
	items: arrayType(objectType({
		id: stringType(),
		quantity: numberType().int().positive()
	})),
	user_id: stringType().nullable().optional()
})).handler(createSsrRpc("3470d08d3a48857491dd209252495b39df79ed9208c1a8e0096cbe9c6e295392"));
//#endregion
export { placeOrderServerFn as n, Route as t };
