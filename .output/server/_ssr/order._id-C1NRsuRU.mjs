import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-C1NRsuRU.js
var getOrderDetails_createServerFn_handler = createServerRpc({
	id: "a0208755e4d9d7f4634cae565924d5625084137032c1f661523ca9068ee95841",
	name: "getOrderDetails",
	filename: "src/routes/order.$id.tsx"
}, (opts) => getOrderDetails.__executeServer(opts));
var getOrderDetails = createServerFn({ method: "GET" }).inputValidator((id) => id).handler(getOrderDetails_createServerFn_handler, async ({ data: id }) => {
	if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) throw new Error("Invalid Order ID format");
	const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
	const { data: order, error: oErr } = await supabaseAdmin.from("orders").select("*").eq("id", id).maybeSingle();
	if (oErr) throw new Error(oErr.message);
	if (!order) return null;
	const { data: items, error: iErr } = await supabaseAdmin.from("order_items").select("*").eq("order_id", id);
	if (iErr) throw new Error(iErr.message);
	return {
		order,
		items: items ?? []
	};
});
var submitOrderPayment_createServerFn_handler = createServerRpc({
	id: "d5d4b3bd50b0c8865c953a8f7c9299b1def85d505552023b296456133470b7ed",
	name: "submitOrderPayment",
	filename: "src/routes/order.$id.tsx"
}, (opts) => submitOrderPayment.__executeServer(opts));
var submitOrderPayment = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(submitOrderPayment_createServerFn_handler, async ({ data }) => {
	const { id, utr } = data;
	if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) throw new Error("Invalid Order ID format");
	if (!utr.trim() || utr.trim().length < 8) throw new Error("Invalid UTR code");
	const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
	const { data: order, error: fetchErr } = await supabaseAdmin.from("orders").select("notes, status").eq("id", id).maybeSingle();
	if (fetchErr) throw new Error(fetchErr.message);
	if (!order) throw new Error("Order not found");
	const updatedNotes = order.notes ? `${order.notes}\n[Payment Submitted] UTR: ${utr.trim()}` : `[Payment Submitted] UTR: ${utr.trim()}`;
	const { error: updateErr } = await supabaseAdmin.from("orders").update({
		status: "paid",
		notes: updatedNotes
	}).eq("id", id);
	if (updateErr) throw new Error(updateErr.message);
	return { success: true };
});
//#endregion
export { getOrderDetails_createServerFn_handler, submitOrderPayment_createServerFn_handler };
