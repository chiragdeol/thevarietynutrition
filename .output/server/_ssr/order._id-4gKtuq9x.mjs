import { n as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as formatINR } from "./format-Br5XBkvk.mjs";
import { N as notFound, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { F as ClipboardCheck, G as ArrowRight, Y as CircleCheck, _ as QrCode, s as Truck } from "../_libs/lucide-react.mjs";
import { n as getOrderDetails, r as submitOrderPayment, t as Route } from "./order._id-DIvRIRBU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-4gKtuq9x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderSuccess() {
	const { id } = Route.useParams();
	const [utr, setUtr] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["order", id],
		queryFn: async () => {
			const res = await getOrderDetails({ data: id });
			if (!res) throw notFound();
			return res;
		}
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-20 text-center",
		children: "Loading…"
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-20 text-center",
		children: "Order not found."
	});
	const isPending = data.order.status === "pending";
	const amount = (data.order.total_cents / 100).toFixed(2);
	const upiId = "9870903026@jupiteraxis";
	const payeeName = "The Variety Nutrition";
	const transactionNote = `Order ${data.order.order_number}`;
	const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
	const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;
	async function handlePaymentSubmit(e) {
		e.preventDefault();
		if (!utr.trim() || utr.trim().length < 8) {
			toast.error("Please enter a valid UPI Transaction Ref ID / UTR (typically 12 digits)");
			return;
		}
		setSubmitting(true);
		try {
			await submitOrderPayment({ data: {
				id,
				utr: utr.trim()
			} });
			toast.success("Payment details submitted successfully! Your order is now being processed.");
			refetch();
		} catch (err) {
			console.error(err);
			toast.error(err.message || "Failed to submit payment details");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-16 text-center",
		children: [
			isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-16 h-16 mx-auto text-accent animate-pulse" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-16 h-16 mx-auto text-emerald-500" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl mt-4",
				children: isPending ? "Complete Your Payment" : "Payment Submitted!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground mt-2",
				children: ["Order Number: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono font-semibold text-foreground",
					children: data.order.order_number
				})]
			}),
			isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-xl p-6 mt-8 text-center shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl mb-2 text-primary",
						children: "Pay securely via UPI (Paytm, GPay, PhonePe)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mb-4",
						children: [
							"Scan the QR code below or tap the pay button on your mobile device to pay",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: formatINR(data.order.total_cents) }),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: qrCodeUrl,
							alt: "Scan to pay",
							className: "mx-auto border p-2 rounded-xl bg-white shadow-sm",
							width: 200,
							height: 200
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-2",
							children: ["UPI ID: ", upiId]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:hidden mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: upiLink,
								children: ["Pay with UPI App ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handlePaymentSubmit,
						className: "border-t border-border pt-6 text-left space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "utr",
								className: "block text-sm font-medium mb-1.5",
								children: "Step 2: Enter 12-digit UPI Transaction Ref ID / UTR"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "utr",
								required: true,
								value: utr,
								onChange: (e) => setUtr(e.target.value),
								placeholder: "e.g. 319208392019",
								className: "h-11"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: "You can find this 12-digit number in your payment confirmation inside your UPI App (GPay, PhonePe, Paytm)."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: submitting,
							className: "w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground",
							children: submitting ? "Submitting..." : "Confirm & Submit Payment"
						})]
					})
				]
			}),
			!isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-xl p-6 mt-8 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-semibold text-emerald-800 dark:text-emerald-400 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "w-5 h-5" }), " Payment Details Received"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-emerald-700 dark:text-emerald-300 mt-2",
					children: "Thank you! Your payment details have been submitted. Our team will verify the payment manually and prepare your package for shipping."
				})]
			}),
			data.order.shiprocket_shipment_id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border rounded-xl p-6 mt-6 text-left shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-serif text-lg font-medium mb-3 text-primary flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-5 h-5 text-accent" }), " Track Shipment"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Shipping Status:"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "capitalize font-semibold text-accent",
								children: data.order.status
							})
						] }),
						data.order.courier_name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Courier Partner:"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: data.order.courier_name
							})
						] }),
						data.order.tracking_number && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Tracking Number (AWB):"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-medium",
								children: data.order.tracking_number
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "bg-accent hover:bg-accent/90 text-accent-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://shiprocket.co/tracking/${data.order.shiprocket_shipment_id}`,
									target: "_blank",
									rel: "noreferrer",
									children: "Track Live Shipment"
								})
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-left bg-card border border-border rounded-xl p-6 mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl mb-4",
						children: "Order details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: data.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								i.product_name,
								" × ",
								i.quantity
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(i.line_total_cents) })]
						}, i.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 pt-4 border-t border-border flex justify-between font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(data.order.total_cents) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-sm text-muted-foreground",
						children: [
							"Shipping to: ",
							data.order.shipping_address,
							", ",
							data.order.shipping_city,
							", ",
							data.order.shipping_zip
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex gap-3 justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "bg-accent hover:bg-accent/90 text-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						children: "Continue shopping"
					})
				})
			})
		]
	});
}
//#endregion
export { OrderSuccess as component };
