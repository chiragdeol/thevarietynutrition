import { o as __toESM } from "../_runtime.mjs";
import { t as require_nodemailer } from "../_libs/nodemailer+unenv.mjs";
import process from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications.server-DgUQPcvV.js
var import_nodemailer = /* @__PURE__ */ __toESM(require_nodemailer());
var smtpHost = (process.env.CUSTOMER_SMTP_HOST || "smtp.hostinger.com").trim();
var smtpPort = parseInt((process.env.CUSTOMER_SMTP_PORT || "587").trim(), 10);
var smtpUser = (process.env.CUSTOMER_SMTP_USER || "customer@thevarietynutrition.com").trim();
process.env.CUSTOMER_SMTP_PASS && process.env.CUSTOMER_SMTP_PASS.trim();
var transporter = import_nodemailer.default.createTransport({
	host: smtpHost,
	port: smtpPort,
	secure: smtpPort === 465,
	auth: {
		user: "customer@thevarietynutrition.com",
		pass: "Chirag@123#321$"
	},
	tls: { rejectUnauthorized: false }
});
function formatINR(cents) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(cents / 100);
}
async function sendWhatsAppMessage(phone, message) {
	const apiUrl = process.env.WHATSAPP_API_URL;
	const token = process.env.WHATSAPP_TOKEN;
	if (!apiUrl || !token) {
		console.warn("WhatsApp Notification skipped: WHATSAPP_API_URL or WHATSAPP_TOKEN environment variables not configured.");
		return;
	}
	let cleanPhone = phone.replace(/\D/g, "");
	if (cleanPhone.length === 10) cleanPhone = `91${cleanPhone}`;
	try {
		const res = await fetch(apiUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				token,
				to: cleanPhone,
				body: message
			})
		});
		if (!res.ok) {
			const text = await res.text();
			console.error("WhatsApp API error:", text);
		} else console.log(`WhatsApp notification sent successfully to ${cleanPhone}`);
	} catch (err) {
		console.error("Failed to send WhatsApp message:", err);
	}
}
async function sendOrderPlacedNotification(orderId) {
	try {
		const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
		const { data: order, error: oErr } = await supabaseAdmin.from("orders").select("*, order_items(*)").eq("id", orderId).single();
		if (oErr || !order) {
			console.error("Failed to fetch order for notification:", oErr?.message);
			return;
		}
		const itemsHtml = (order.order_items ?? []).map((it) => `<tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${it.product_name}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${it.quantity}</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">${formatINR(it.line_total_cents)}</td>
          </tr>`).join("");
		const customerMailOptions = {
			from: `"The Variety Nutrition" <${smtpUser}>`,
			to: order.customer_email,
			subject: `Order Placed Successfully - ${order.order_number}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #111;">The Variety Nutrition</h2>
            <p style="color: #666; font-size: 14px;">Thank you for your order!</p>
          </div>
          <p>Dear <strong>${order.customer_name}</strong>,</p>
          <p>Your order <strong>${order.order_number}</strong> has been successfully placed on our website.</p>
          
          <h3 style="border-bottom: 2px solid #111; padding-bottom: 8px;">Order Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f8f8f8;">
                <th style="padding: 8px; text-align: left;">Product</th>
                <th style="padding: 8px; text-align: center;">Qty</th>
                <th style="padding: 8px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
          
          <div style="text-align: right; margin-top: 15px; font-size: 16px;">
            <p style="margin: 4px 0;">Subtotal: ${formatINR(order.subtotal_cents)}</p>
            <p style="margin: 4px 0;">Shipping: ${order.shipping_cents === 0 ? "Free" : formatINR(order.shipping_cents)}</p>
            <p style="margin: 4px 0; font-weight: bold; font-size: 18px;">Total: ${formatINR(order.total_cents)}</p>
          </div>

          <h3 style="border-bottom: 2px solid #111; padding-bottom: 8px; margin-top: 30px;">Shipping Address</h3>
          <p style="font-size: 14px; line-height: 1.6; color: #555;">
            ${order.customer_name}<br/>
            ${order.shipping_address}<br/>
            ${order.shipping_city}, ${order.shipping_state || ""} ${order.shipping_zip}<br/>
            Phone: ${order.customer_phone}
          </p>

          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            This is an automated email from The Variety Nutrition. If you have any questions, contact us at customer@thevarietynutrition.com.
          </p>
        </div>
      `
		};
		transporter.sendMail(customerMailOptions, (err, info) => {
			if (err) console.error("Error sending customer placement email:", err);
			else console.log("Customer placement email sent:", info.response);
		});
		const adminMailOptions = {
			from: `"The Variety Nutrition Alerts" <${smtpUser}>`,
			to: "cdeol48@gmail.com",
			subject: `🔔 New Order Received - ${order.order_number}`,
			html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc;">
          <h2>New Order Alert!</h2>
          <p>Order Number: <strong>${order.order_number}</strong></p>
          <p>Customer: <strong>${order.customer_name}</strong> (${order.customer_email})</p>
          <p>Phone: <strong>${order.customer_phone}</strong></p>
          <p>Total Amount: <strong>${formatINR(order.total_cents)}</strong></p>
          <p>Please log in to the <a href="https://thevarietynutrition.com/admin">Admin Panel</a> to fulfill the order.</p>
        </div>
      `
		};
		transporter.sendMail(adminMailOptions, (err) => {
			if (err) console.error("Error sending admin notification email:", err);
		});
		const customerMsg = `Hello ${order.customer_name},\n\nYour order ${order.order_number} for ${formatINR(order.total_cents)} has been successfully placed on The Variety Nutrition!\n\nWe will notify you once it's shipped.\n\nThank you for shopping with us!`;
		await sendWhatsAppMessage(order.customer_phone, customerMsg);
		const adminMsg = `🔔 New Order Received!\nOrder: ${order.order_number}\nCustomer: ${order.customer_name}\nPhone: ${order.customer_phone}\nTotal: ${formatINR(order.total_cents)}`;
		await sendWhatsAppMessage(process.env.ADMIN_WHATSAPP_PHONE || "9971095414", adminMsg);
	} catch (e) {
		console.error("Failed to run sendOrderPlacedNotification:", e);
	}
}
async function sendOrderPaidNotification(orderId) {
	try {
		const { supabaseAdmin } = await import("./client.server-CRe3Mxtu.mjs");
		const { data: order, error: oErr } = await supabaseAdmin.from("orders").select("*").eq("id", orderId).single();
		if (oErr || !order) {
			console.error("Failed to fetch order for notification:", oErr?.message);
			return;
		}
		const mailOptions = {
			from: `"The Variety Nutrition" <${smtpUser}>`,
			to: order.customer_email,
			subject: `Payment Confirmed - Order ${order.order_number}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #111;">The Variety Nutrition</h2>
            <h3 style="color: #2e7d32;">Payment Confirmed!</h3>
          </div>
          <p>Dear <strong>${order.customer_name}</strong>,</p>
          <p>We are pleased to inform you that we have received your payment for order <strong>${order.order_number}</strong>.</p>
          <p>Your order is now being processed by our packaging team and will be shipped shortly.</p>
          <p>Order Total: <strong>${formatINR(order.total_cents)}</strong></p>

          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            This is an automated email from The Variety Nutrition. If you have any questions, contact us at customer@thevarietynutrition.com.
          </p>
        </div>
      `
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) console.error("Error sending customer payment email:", err);
			else console.log("Customer payment email sent:", info.response);
		});
		const customerMsg = `Hello ${order.customer_name},\n\nPayment received for your order ${order.order_number}! Your package is now being packed and prepared for dispatch.\n\nThank you for choosing The Variety Nutrition!`;
		await sendWhatsAppMessage(order.customer_phone, customerMsg);
	} catch (e) {
		console.error("Failed to run sendOrderPaidNotification:", e);
	}
}
//#endregion
export { sendOrderPaidNotification, sendOrderPlacedNotification, smtpUser, transporter };
