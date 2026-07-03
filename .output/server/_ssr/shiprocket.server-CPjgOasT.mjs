import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shiprocket.server-CPjgOasT.js
var cachedToken = null;
var tokenExpiry = null;
async function getShiprocketToken() {
	const now = Date.now();
	if (cachedToken && tokenExpiry && now < tokenExpiry) return cachedToken;
	const email = process.env.SHIPROCKET_EMAIL || "";
	const password = process.env.SHIPROCKET_PASSWORD || "";
	if (!email || !password) throw new Error("Missing Shiprocket API credentials (SHIPROCKET_EMAIL / SHIPROCKET_PASSWORD)");
	const response = await fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email,
			password
		})
	});
	if (!response.ok) {
		const errText = await response.text();
		console.error("Shiprocket Login Error:", errText);
		throw new Error(`Failed to log in to Shiprocket: ${response.statusText}`);
	}
	const data = await response.json();
	if (!data.token) throw new Error("Shiprocket authentication did not return a token");
	cachedToken = data.token;
	tokenExpiry = now + 12960 * 60 * 1e3;
	return cachedToken;
}
var shiprocketBookShipment_createServerFn_handler = createServerRpc({
	id: "58dcdc20f334ede2954c5969ea650af049196a9970ef2af05bd74b070a8cc1c3",
	name: "shiprocketBookShipment",
	filename: "src/lib/shiprocket.server.ts"
}, (opts) => shiprocketBookShipment.__executeServer(opts));
var shiprocketBookShipment = createServerFn({ method: "POST" }).inputValidator((orderId) => orderId).handler(shiprocketBookShipment_createServerFn_handler, async ({ data: orderId }) => {
	const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
	const { data: order, error: oErr } = await supabaseAdmin.from("orders").select("*").eq("id", orderId).maybeSingle();
	if (oErr || !order) throw new Error(oErr?.message || "Order not found");
	const { data: items, error: iErr } = await supabaseAdmin.from("order_items").select("*").eq("order_id", orderId);
	if (iErr) throw new Error(iErr.message);
	const token = await getShiprocketToken();
	const nameParts = order.customer_name.trim().split(/\s+/);
	const firstName = nameParts[0] || "Customer";
	const lastName = nameParts.slice(1).join(" ") || ".";
	const totalWeight = .5;
	const pickupLocation = process.env.SHIPROCKET_PICKUP_LOCATION || "Home";
	const payload = {
		order_id: order.order_number,
		order_date: new Date(order.created_at).toISOString().slice(0, 16).replace("T", " "),
		pickup_location: pickupLocation,
		billing_customer_name: firstName,
		billing_last_name: lastName,
		billing_address: order.shipping_address,
		billing_city: order.shipping_city,
		billing_pincode: order.shipping_zip,
		billing_state: order.shipping_state || "State",
		billing_country: order.shipping_country || "India",
		billing_email: order.customer_email,
		billing_phone: order.customer_phone || "9999999999",
		shipping_is_billing: true,
		order_items: (items ?? []).map((it) => ({
			name: it.product_name,
			sku: `PROD-${it.product_id.slice(0, 8).toUpperCase()}`,
			units: it.quantity,
			selling_price: (it.unit_price_cents / 100).toString()
		})),
		payment_method: "Prepaid",
		sub_total: order.total_cents / 100,
		length: 15,
		breadth: 15,
		height: 10,
		weight: totalWeight
	};
	const response = await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(payload)
	});
	if (!response.ok) {
		const errText = await response.text();
		console.error("Shiprocket Create Order Error:", errText);
		throw new Error(`Shiprocket API Error: ${errText}`);
	}
	const resData = await response.json();
	const shiprocketOrderId = resData.order_id?.toString() || null;
	const shiprocketShipmentId = resData.shipment_id?.toString() || null;
	const { error: updateErr } = await supabaseAdmin.from("orders").update({
		shiprocket_order_id: shiprocketOrderId,
		shiprocket_shipment_id: shiprocketShipmentId,
		notes: order.notes ? `${order.notes}\n[Shiprocket Booked] ID: ${shiprocketOrderId}, Shipment ID: ${shiprocketShipmentId}` : `[Shiprocket Booked] ID: ${shiprocketOrderId}, Shipment ID: ${shiprocketShipmentId}`
	}).eq("id", orderId);
	if (updateErr) throw new Error(`Database Update Error: ${updateErr.message}`);
	return {
		success: true,
		shiprocketOrderId,
		shiprocketShipmentId
	};
});
//#endregion
export { shiprocketBookShipment_createServerFn_handler };
