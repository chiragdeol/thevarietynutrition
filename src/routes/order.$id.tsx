import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { formatINR } from "@/lib/format";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/order/$id")({
  head: () => ({ meta: [{ title: "Order confirmed — The Variety Nutrition" }] }),
  component: OrderSuccess,
});

function OrderSuccess() {
  const { id } = Route.useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const { data: order } = await supabase.from("orders").select("*").eq("id", id).maybeSingle();
      if (!order) throw notFound();
      const { data: items } = await supabase.from("order_items").select("*").eq("order_id", id);
      return { order, items: items ?? [] };
    },
  });

  if (isLoading) return <div className="p-20 text-center">Loading…</div>;
  if (!data) return <div className="p-20 text-center">Order not found.</div>;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <CheckCircle2 className="w-16 h-16 mx-auto text-accent" />
      <h1 className="font-serif text-4xl mt-4">Thank you!</h1>
      <p className="text-muted-foreground mt-2">Your order <span className="font-mono font-semibold text-foreground">{data.order.order_number}</span> has been placed.</p>
      <div className="text-left bg-card border border-border rounded-xl p-6 mt-8">
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
      <div className="mt-6 flex gap-3 justify-center">
        <Button asChild variant="outline"><Link to="/account">View orders</Link></Button>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground"><Link to="/products">Continue shopping</Link></Button>
      </div>
    </div>
  );
}
