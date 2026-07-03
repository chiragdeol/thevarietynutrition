import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { formatINR } from "@/lib/format";
import { CheckCircle2, QrCode, ClipboardCheck, ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createServerFn } from "@tanstack/react-start";

// Server function to fetch order details securely without exposing public select policies
export const getOrderDetails = createServerFn({ method: "GET" })
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) {
      throw new Error("Invalid Order ID format");
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: order, error: oErr } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (oErr) throw new Error(oErr.message);
    if (!order) return null;

    const { data: items, error: iErr } = await supabaseAdmin
      .from("order_items")
      .select("*")
      .eq("order_id", id);

    if (iErr) throw new Error(iErr.message);

    return { order, items: items ?? [] };
  });

// Server function to submit payment UTR code securely without exposing public update policies
export const submitOrderPayment = createServerFn({ method: "POST" })
  .inputValidator((d: { id: string; utr: string }) => d)
  .handler(async ({ data }) => {
    const { id, utr } = data;
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) throw new Error("Invalid Order ID format");
    if (!utr.trim() || utr.trim().length < 8) throw new Error("Invalid UTR code");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: order, error: fetchErr } = await supabaseAdmin
      .from("orders")
      .select("notes, status")
      .eq("id", id)
      .maybeSingle();

    if (fetchErr) throw new Error(fetchErr.message);
    if (!order) throw new Error("Order not found");

    const updatedNotes = order.notes
      ? `${order.notes}\n[Payment Submitted] UTR: ${utr.trim()}`
      : `[Payment Submitted] UTR: ${utr.trim()}`;

    const { error: updateErr } = await supabaseAdmin
      .from("orders")
      .update({
        status: "paid",
        notes: updatedNotes,
      })
      .eq("id", id);

    if (updateErr) throw new Error(updateErr.message);
    return { success: true };
  });

export const Route = createFileRoute("/order/$id")({
  head: () => ({ meta: [{ title: "Order Details — The Variety Nutrition" }] }),
  component: OrderSuccess,
});

function OrderSuccess() {
  const { id } = Route.useParams();
  const [utr, setUtr] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const res = await getOrderDetails({ data: id });
      if (!res) throw notFound();
      return res;
    },
  });

  if (isLoading) return <div className="p-20 text-center">Loading…</div>;
  if (!data) return <div className="p-20 text-center">Order not found.</div>;

  const isPending = data.order.status === "pending";
  const amount = (data.order.total_cents / 100).toFixed(2);
  const upiId = "9870903026@jupiteraxis"; // Configured payee UPI ID
  const payeeName = "The Variety Nutrition";
  const transactionNote = `Order ${data.order.order_number}`;
  const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

  async function handlePaymentSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!utr.trim() || utr.trim().length < 8) {
      toast.error("Please enter a valid UPI Transaction Ref ID / UTR (typically 12 digits)");
      return;
    }
    setSubmitting(true);
    try {
      await submitOrderPayment({ data: { id, utr: utr.trim() } });
      toast.success("Payment details submitted successfully! Your order is now being processed.");
      refetch();
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to submit payment details");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      {isPending ? (
        <QrCode className="w-16 h-16 mx-auto text-accent animate-pulse" />
      ) : (
        <CheckCircle2 className="w-16 h-16 mx-auto text-emerald-500" />
      )}
      <h1 className="font-serif text-4xl mt-4">
        {isPending ? "Complete Your Payment" : "Payment Submitted!"}
      </h1>
      <p className="text-muted-foreground mt-2">
        Order Number: <span className="font-mono font-semibold text-foreground">{data.order.order_number}</span>
      </p>

      {/* UPI Payment Card */}
      {isPending && (
        <div className="bg-card border border-border rounded-xl p-6 mt-8 text-center shadow-sm">
          <h2 className="font-serif text-xl mb-2 text-primary">Pay securely via UPI (Paytm, GPay, PhonePe)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Scan the QR code below or tap the pay button on your mobile device to pay **{formatINR(data.order.total_cents)}**.
          </p>

          <div className="my-6">
            <img
              src={qrCodeUrl}
              alt="Scan to pay"
              className="mx-auto border p-2 rounded-xl bg-white shadow-sm"
              width={200}
              height={200}
            />
            <p className="text-xs text-muted-foreground mt-2">UPI ID: {upiId}</p>
          </div>

          {/* Mobile Intent Button */}
          <div className="sm:hidden mb-6">
            <Button asChild className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-semibold">
              <a href={upiLink}>
                Pay with UPI App <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <form onSubmit={handlePaymentSubmit} className="border-t border-border pt-6 text-left space-y-4">
            <div>
              <label htmlFor="utr" className="block text-sm font-medium mb-1.5">
                Step 2: Enter 12-digit UPI Transaction Ref ID / UTR
              </label>
              <Input
                id="utr"
                required
                value={utr}
                onChange={(e) => setUtr(e.target.value)}
                placeholder="e.g. 319208392019"
                className="h-11"
              />
              <p className="text-xs text-muted-foreground mt-1">
                You can find this 12-digit number in your payment confirmation inside your UPI App (GPay, PhonePe, Paytm).
              </p>
            </div>
            <Button type="submit" disabled={submitting} className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground">
              {submitting ? "Submitting..." : "Confirm & Submit Payment"}
            </Button>
          </form>
        </div>
      )}

      {/* Success Details */}
      {!isPending && (
        <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-xl p-6 mt-8 text-left">
          <h3 className="font-semibold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5" /> Payment Details Received
          </h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-2">
            Thank you! Your payment details have been submitted. Our team will verify the payment manually and prepare your package for shipping.
          </p>
        </div>
      )}

      {/* Shipping / Tracking Details */}
      {data.order.shiprocket_shipment_id && (
        <div className="bg-card border border-border rounded-xl p-6 mt-6 text-left shadow-sm">
          <h3 className="font-serif text-lg font-medium mb-3 text-primary flex items-center gap-2">
            <Truck className="w-5 h-5 text-accent" /> Track Shipment
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Shipping Status:</span>{" "}
              <span className="capitalize font-semibold text-accent">{data.order.status}</span>
            </div>
            {data.order.courier_name && (
              <div>
                <span className="text-muted-foreground">Courier Partner:</span>{" "}
                <span className="font-medium">{data.order.courier_name}</span>
              </div>
            )}
            {data.order.tracking_number && (
              <div>
                <span className="text-muted-foreground">Tracking Number (AWB):</span>{" "}
                <span className="font-mono font-medium">{data.order.tracking_number}</span>
              </div>
            )}
            <div className="pt-2">
              <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a
                  href={`https://shiprocket.co/tracking/${data.order.shiprocket_shipment_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Track Live Shipment
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Order details summary */}
      <div className="text-left bg-card border border-border rounded-xl p-6 mt-6">
        <h2 className="font-serif text-xl mb-4">Order details</h2>
        <div className="space-y-3">
          {data.items.map((i) => (
            <div key={i.id} className="flex justify-between text-sm">
              <span>{i.product_name} × {i.quantity}</span>
              <span>{formatINR(i.line_total_cents)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border flex justify-between font-semibold">
          <span>Total</span><span>{formatINR(data.order.total_cents)}</span>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">Shipping to: {data.order.shipping_address}, {data.order.shipping_city}, {data.order.shipping_zip}</div>
      </div>

      <div className="mt-8 flex gap-3 justify-center">
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to="/products">Continue shopping</Link>
        </Button>
      </div>
    </div>
  );
}
