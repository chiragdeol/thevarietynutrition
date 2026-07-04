import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { i as stringType, n as numberType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-Dnz1Xjps.js
var placeOrderServerFn_createServerFn_handler = createServerRpc({
	id: "3470d08d3a48857491dd209252495b39df79ed9208c1a8e0096cbe9c6e295392",
	name: "placeOrderServerFn",
	filename: "src/routes/checkout.tsx"
}, (opts) => placeOrderServerFn.__executeServer(opts));
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
})).handler(placeOrderServerFn_createServerFn_handler, async ({ data }) => {
	const { customer_name, customer_email, customer_phone, shipping_address, shipping_city, shipping_state, shipping_zip, notes, items, user_id } = data;
	const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
	const productIds = items.map((i) => i.id);
	const { data: dbProducts, error: pErr } = await supabaseAdmin.from("products").select("id, name, price_cents, image_url").in("id", productIds);
	if (pErr || !dbProducts) throw new Error("Failed to retrieve products");
	let subtotalCents = 0;
	const orderItemsPayload = [];
	for (const item of items) {
		const dbProd = dbProducts.find((p) => p.id === item.id);
		if (!dbProd) throw new Error(`Product not found: ${item.id}`);
		const lineTotal = dbProd.price_cents * item.quantity;
		subtotalCents += lineTotal;
		orderItemsPayload.push({
			product_id: dbProd.id,
			product_name: dbProd.name,
			product_image: dbProd.image_url,
			unit_price_cents: dbProd.price_cents,
			quantity: item.quantity,
			line_total_cents: lineTotal
		});
	}
	const shippingCents = subtotalCents >= 99900 ? 0 : items.length ? 4900 : 0;
	const totalCents = subtotalCents + shippingCents;
	const { data: order, error: oErr } = await supabaseAdmin.from("orders").insert({
		user_id: user_id || null,
		customer_name,
		customer_email,
		customer_phone,
		shipping_address,
		shipping_city,
		shipping_state,
		shipping_zip,
		notes,
		subtotal_cents: subtotalCents,
		shipping_cents: shippingCents,
		total_cents: totalCents
	}).select().single();
	if (oErr || !order) throw oErr ?? /* @__PURE__ */ new Error("Failed to insert order");
	const itemsWithOrderId = orderItemsPayload.map((item) => ({
		...item,
		order_id: order.id
	}));
	const { error: oiErr } = await supabaseAdmin.from("order_items").insert(itemsWithOrderId);
	if (oiErr) throw oiErr;
	return { orderId: order.id };
});
//#endregion
export { placeOrderServerFn_createServerFn_handler };
