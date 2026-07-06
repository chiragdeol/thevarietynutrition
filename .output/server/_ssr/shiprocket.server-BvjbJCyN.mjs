import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shiprocket.server-BvjbJCyN.js
var cachedToken = null;
var tokenExpiry = null;
async function getShiprocketToken() {
	const now = Date.now();
	if (cachedToken && tokenExpiry && now < tokenExpiry) return cachedToken;
	const response = await fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: "api@thevarietynutrition.com",
			password: "#eli#yjrkdmYMeRWq86L3n*JaUk^TnYv"
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
	const payload = {
		order_id: order.order_number,
		order_date: new Date(order.created_at).toISOString().slice(0, 16).replace("T", " "),
		pickup_location: "Home",
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
		order_items: (items ?? []).map((it, idx) => ({
			name: it.product_name,
			sku: it.product_id ? `PROD-${it.product_id.slice(-12).toUpperCase()}` : `PROD-GEN-${idx}`,
			units: it.quantity,
			selling_price: (it.unit_price_cents / 100).toString()
		})),
		payment_method: "Prepaid",
		sub_total: order.total_cents / 100,
		length: 15,
		breadth: 15,
		height: 10,
		weight: .5
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
	if (!resData.order_id) throw new Error(resData.message || `Shiprocket API rejected order: ${JSON.stringify(resData)}`);
	const shiprocketOrderId = resData.order_id.toString();
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
var shiprocketGetLabel_createServerFn_handler = createServerRpc({
	id: "4f99b4a4ff2324cef80e368d76b698b530aec804659d7d38fe3d96026d06d63e",
	name: "shiprocketGetLabel",
	filename: "src/lib/shiprocket.server.ts"
}, (opts) => shiprocketGetLabel.__executeServer(opts));
var shiprocketGetLabel = createServerFn({ method: "POST" }).inputValidator((orderId) => orderId).handler(shiprocketGetLabel_createServerFn_handler, async ({ data: orderId }) => {
	const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
	const { data: order, error } = await supabaseAdmin.from("orders").select("shiprocket_shipment_id").eq("id", orderId).maybeSingle();
	if (error || !order || !order.shiprocket_shipment_id) throw new Error("Shipment ID not found. Please book shipment first.");
	const shipmentId = order.shiprocket_shipment_id;
	const token = await getShiprocketToken();
	try {
		const awbData = await (await fetch("https://apiv2.shiprocket.in/v1/external/courier/assign/awb", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ shipment_id: shipmentId })
		})).json();
		console.log("Shiprocket AWB Assignment:", awbData);
	} catch (e) {
		console.error("AWB assignment error:", e);
	}
	const labelRes = await fetch("https://apiv2.shiprocket.in/v1/external/courier/generate/label", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ shipment_id: [parseInt(shipmentId, 10)] })
	});
	if (!labelRes.ok) {
		const errText = await labelRes.text();
		console.error("Shiprocket Label API Error:", errText);
		throw new Error(`Shiprocket API Error: ${errText}`);
	}
	const labelData = await labelRes.json();
	if (!labelData.label_url) throw new Error(labelData.message || "Failed to generate label from Shiprocket");
	return {
		success: true,
		labelUrl: labelData.label_url
	};
});
//#endregion
export { shiprocketBookShipment_createServerFn_handler, shiprocketGetLabel_createServerFn_handler };
