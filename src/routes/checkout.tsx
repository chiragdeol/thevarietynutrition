import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { formatINR } from "@/lib/format";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — The Variety Nutrition" }] }),
  component: Checkout,
});

const schema = z.object({
  customer_name: z.string().trim().min(2).max(100),
  customer_email: z.string().trim().email().max(255),
  customer_phone: z.string().trim().min(6).max(20),
  shipping_address: z.string().trim().min(5).max(300),
  shipping_city: z.string().trim().min(2).max(80),
  shipping_state: z.string().trim().max(80).optional(),
  shipping_zip: z.string().trim().min(4).max(12),
  notes: z.string().trim().max(500).optional(),
});

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const shipping = subtotal >= 99900 ? 0 : items.length ? 4900 : 0;
  const total = subtotal + shipping;

  if (items.length === 0)
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl">Your cart is empty</h1>
        <Button asChild className="mt-6"><Link to="/products">Shop products</Link></Button>
      </div>
    );

  if (!user)
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl">Sign in to checkout</h1>
        <p className="text-muted-foreground mt-2">Create an account or sign in to place your order.</p>
        <Button asChild className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"><Link to="/auth">Sign in</Link></Button>
      </div>
    );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please fill all required fields");
      return;
    }
    setSubmitting(true);
    try {
      const { data: order, error } = await supabase
        .from("orders")
        .insert({
          user_id: user!.id,
          ...parsed.data,
          subtotal_cents: subtotal,
          shipping_cents: shipping,
          total_cents: total,
        })
        .select()
        .single();
      if (error || !order) throw error ?? new Error("Order failed");

      const orderItems = items.map((i) => ({
        order_id: order.id,
        product_id: i.id,
        product_name: i.name,
        product_image: i.image_url,
        unit_price_cents: i.price_cents,
        quantity: i.quantity,
        line_total_cents: i.price_cents * i.quantity,
      }));
      const { error: iErr } = await supabase.from("order_items").insert(orderItems);
      if (iErr) throw iErr;

      clear();
      toast.success("Order placed!");
      navigate({ to: "/order/$id", params: { id: order.id } });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-4xl text-primary mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-[1fr_360px] gap-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-card rounded-xl p-6 border border-border space-y-4">
            <h2 className="font-serif text-xl">Contact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label htmlFor="customer_name">Full name</Label><Input id="customer_name" name="customer_name" defaultValue={user.user_metadata?.full_name ?? ""} required /></div>
              <div><Label htmlFor="customer_email">Email</Label><Input id="customer_email" name="customer_email" type="email" defaultValue={user.email ?? ""} required /></div>
              <div className="sm:col-span-2"><Label htmlFor="customer_phone">Phone</Label><Input id="customer_phone" name="customer_phone" required /></div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border space-y-4">
            <h2 className="font-serif text-xl">Shipping address</h2>
            <div><Label htmlFor="shipping_address">Address</Label><Input id="shipping_address" name="shipping_address" required /></div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div><Label htmlFor="shipping_city">City</Label><Input id="shipping_city" name="shipping_city" required /></div>
              <div><Label htmlFor="shipping_state">State</Label><Input id="shipping_state" name="shipping_state" /></div>
              <div><Label htmlFor="shipping_zip">PIN code</Label><Input id="shipping_zip" name="shipping_zip" required /></div>
            </div>
            <div><Label htmlFor="notes">Order notes (optional)</Label><Textarea id="notes" name="notes" rows={3} /></div>
          </div>
          <Button type="submit" size="lg" disabled={submitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {submitting ? "Placing order…" : `Place order · ${formatINR(total)}`}
          </Button>
          <p className="text-xs text-muted-foreground text-center">This is a demo — no real payment is processed.</p>
        </form>
        <div className="bg-secondary/60 rounded-xl p-6 h-fit">
          <h2 className="font-serif text-xl mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4">
            {items.map((i) => (
              <div key={i.id} className="flex gap-3 text-sm">
                <div className="w-14 h-14 bg-card rounded overflow-hidden shrink-0">
                  {i.image_url && <img src={i.image_url} alt={i.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{i.name}</div>
                  <div className="text-muted-foreground text-xs">Qty {i.quantity}</div>
                </div>
                <div>{formatINR(i.price_cents * i.quantity)}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2 text-sm pt-4 border-t border-border">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "FREE" : formatINR(shipping)}</span></div>
            <div className="flex justify-between text-base font-semibold pt-2 border-t border-border"><span>Total</span><span>{formatINR(total)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
