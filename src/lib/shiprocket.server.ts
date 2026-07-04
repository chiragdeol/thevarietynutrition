import { createServerFn } from "@tanstack/react-start";

let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

// Helper to authenticate and cache the Shiprocket JWT token (valid for 10 days)
async function getShiprocketToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  const email = "api@thevarietynutrition.com";
  const password = "#eli#yjrkdmYMeRWq86L3n*JaUk^TnYv";

  if (!email || !password) {
    throw new Error("Missing Shiprocket API credentials (SHIPROCKET_EMAIL / SHIPROCKET_PASSWORD)");
  }

  const response = await fetch("https://apiv2.shiprocket.in/v1/external/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("Shiprocket Login Error:", errText);
    throw new Error(`Failed to log in to Shiprocket: ${response.statusText}`);
  }

  const data = await response.json();
  if (!data.token) {
    throw new Error("Shiprocket authentication did not return a token");
  }

  cachedToken = data.token;
  // Cache for 9 days (token is valid for 10 days)
  tokenExpiry = now + 9 * 24 * 60 * 60 * 1000;

  return cachedToken;
}

// Server function to push a paid order to Shiprocket
export const shiprocketBookShipment = createServerFn({ method: "POST" })
  .inputValidator((orderId: string) => orderId)
  .handler(async ({ data: orderId }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // 1. Fetch order and items
    const { data: order, error: oErr } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .maybeSingle();

    if (oErr || !order) throw new Error(oErr?.message || "Order not found");

    const { data: items, error: iErr } = await supabaseAdmin
      .from("order_items")
      .select("*")
      .eq("order_id", orderId);

    if (iErr) throw new Error(iErr.message);

    // 2. Obtain Shiprocket authentication token
    const token = await getShiprocketToken();

    // 3. Prepare payload details
    const nameParts = order.customer_name.trim().split(/\s+/);
    const firstName = nameParts[0] || "Customer";
    const lastName = nameParts.slice(1).join(" ") || ".";

    // Default weight is 0.5kg (500g), or calculate roughly if weight info is available
    const totalWeight = 0.5; 
    const pickupLocation = "Home";

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
      order_items: (items ?? []).map((it, idx) => ({
        name: it.product_name,
        sku: it.product_id ? `PROD-${it.product_id.slice(-12).toUpperCase()}` : `PROD-GEN-${idx}`,
        units: it.quantity,
        selling_price: (it.unit_price_cents / 100).toString(),
      })),
      payment_method: "Prepaid",
      sub_total: order.total_cents / 100,
      length: 15, // Package dimensions in cm
      breadth: 15,
      height: 10,
      weight: totalWeight, // Package weight in kg
    };

    // 4. Send request to Shiprocket
    const response = await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Shiprocket Create Order Error:", errText);
      throw new Error(`Shiprocket API Error: ${errText}`);
    }

    const resData = await response.json();
    if (!resData.order_id) {
      throw new Error(resData.message || `Shiprocket API rejected order: ${JSON.stringify(resData)}`);
    }
    const shiprocketOrderId = resData.order_id.toString();
    const shiprocketShipmentId = resData.shipment_id?.toString() || null;

    // 5. Save Shiprocket identifiers back to the database order
    const { error: updateErr } = await supabaseAdmin
      .from("orders")
      .update({
        shiprocket_order_id: shiprocketOrderId,
        shiprocket_shipment_id: shiprocketShipmentId,
        notes: order.notes
          ? `${order.notes}\n[Shiprocket Booked] ID: ${shiprocketOrderId}, Shipment ID: ${shiprocketShipmentId}`
          : `[Shiprocket Booked] ID: ${shiprocketOrderId}, Shipment ID: ${shiprocketShipmentId}`,
      })
      .eq("id", orderId);

    if (updateErr) throw new Error(`Database Update Error: ${updateErr.message}`);

    return {
      success: true,
      shiprocketOrderId,
      shiprocketShipmentId,
    };
  });
