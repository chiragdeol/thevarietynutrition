import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ShoppingBag, MessageCircle, Truck, ShieldCheck, Tag } from "lucide-react";
import { whatsappUrl, BRAND } from "@/lib/brand";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardData } from "@/components/ProductCard";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your Cart — The Variety Nutrition" }, { name: "description", content: "Review the items in your cart." }] }),
  component: Cart,
});

const FREE_SHIP = 99900;
const EXTRA_OFF = 159900;

function Cart() {
  const { items, subtotal, setQty, remove } = useCart();
  const shipping = subtotal === 0 ? 0 : subtotal >= FREE_SHIP ? 0 : 4900;
  const total = subtotal + shipping;

  const { data: recommended } = useQuery({
    queryKey: ["cart-recommended"],
    queryFn: async () => {
      const { data } = await supabase
        .from("products")
        .select("id,slug,name,short_description,price_cents,compare_at_price_cents,image_url")
        .eq("active", true)
        .eq("featured", true)
        .limit(4);
      return (data ?? []) as ProductCardData[];
    },
  });

  if (items.length === 0)
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-secondary grid place-items-center">
          <ShoppingBag className="w-9 h-9 text-muted-foreground" />
        </div>
        <h1 className="font-serif text-3xl mt-6">Your cart is empty</h1>
        <p className="text-muted-foreground mt-2">Fill it with delicious dry fruits and nuts.</p>
        <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to="/products">Continue shopping</Link>
        </Button>
      </div>
    );

  const pctShip = Math.min(100, (subtotal / FREE_SHIP) * 100);
  const pctExtra = Math.min(100, (subtotal / EXTRA_OFF) * 100);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-10 pb-32 lg:pb-10">
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="font-serif text-3xl md:text-4xl text-primary">Your Cart</h1>
        <span className="text-sm text-muted-foreground">{items.length} item{items.length !== 1 ? "s" : ""}</span>
      </div>

      {/* Progress bar */}
      <div className="bg-card border border-border rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Truck className="w-4 h-4 text-accent" />
          {subtotal >= FREE_SHIP ? (
            <span className="text-green-700">🎉 You've unlocked FREE shipping!</span>
          ) : (
            <span>Add <b>{formatINR(FREE_SHIP - subtotal)}</b> more to unlock <b>Free Shipping</b></span>
          )}
        </div>
        <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-500"
            style={{ width: `${pctShip}%` }}
          />
          <div className="absolute top-1/2 -translate-y-1/2 h-3 w-0.5 bg-border" style={{ left: `${(FREE_SHIP / EXTRA_OFF) * 100}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span className={pctShip >= 100 ? "text-green-700 font-medium" : ""}>₹999 · Free Shipping</span>
          <span className={pctExtra >= 100 ? "text-green-700 font-medium" : ""}>₹1,599 · Extra 15% Off</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-8">
        {/* Items */}
        <div className="space-y-3">
          {items.map((i) => (
            <div key={i.id} className="flex gap-4 bg-card rounded-xl p-3 md:p-4 border border-border">
              <Link to="/products/$slug" params={{ slug: i.slug }} className="w-24 h-24 md:w-28 md:h-28 bg-secondary rounded-lg overflow-hidden shrink-0">
                {i.image_url && <img src={i.image_url} alt={i.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />}
              </Link>
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <Link to="/products/$slug" params={{ slug: i.slug }} className="font-serif text-base md:text-lg hover:text-accent line-clamp-2">
                    {i.name}
                  </Link>
                  <button onClick={() => remove(i.id)} className="text-muted-foreground hover:text-destructive shrink-0 p-1">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs text-muted-foreground">{formatINR(i.price_cents)} each</div>
                <div className="mt-auto pt-3 flex items-center justify-between">
                  <div className="flex items-center border border-border rounded-md">
                    <button onClick={() => setQty(i.id, i.quantity - 1)} className="p-2 hover:bg-secondary"><Minus className="w-3 h-3" /></button>
                    <span className="w-8 text-center text-sm font-medium">{i.quantity}</span>
                    <button onClick={() => setQty(i.id, i.quantity + 1)} className="p-2 hover:bg-secondary"><Plus className="w-3 h-3" /></button>
                  </div>
                  <div className="font-semibold text-primary">{formatINR(i.price_cents * i.quantity)}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground bg-secondary/50 rounded-lg p-3">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            Secure checkout · Cash on Delivery available · Easy returns
          </div>
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-secondary/60 rounded-2xl p-6">
            <h2 className="font-serif text-xl">Order Summary</h2>

            <div className="mt-4 relative">
              <div className="flex gap-2">
                <input placeholder="Have a coupon? Try HEALTHY15" className="flex-1 h-10 rounded-md border border-border bg-background px-3 text-sm" />
                <Button variant="outline" className="h-10">Apply</Button>
              </div>
              <p className="mt-1.5 text-[11px] text-muted-foreground flex items-center gap-1">
                <Tag className="w-3 h-3" /> First-order code auto-applied at checkout
              </p>
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatINR(subtotal)}</span></div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className={shipping === 0 ? "text-green-700 font-medium" : ""}>{shipping === 0 ? "FREE" : formatINR(shipping)}</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-4 pt-4 border-t border-border">
              <span>Total</span><span className="text-primary">{formatINR(total)}</span>
            </div>

            <Button asChild size="lg" className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/checkout">Proceed to checkout</Link>
            </Button>

            <a
              href={whatsappUrl(
                `Hi ${BRAND.name}! I'd like to order:\n\n` +
                items.map((i) => `• ${i.name} × ${i.quantity} — ${formatINR(i.price_cents * i.quantity)}`).join("\n") +
                `\n\nSubtotal: ${formatINR(subtotal)}\nShipping: ${shipping === 0 ? "FREE" : formatINR(shipping)}\nTotal: ${formatINR(total)}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 w-full h-11 rounded-md bg-[#25D366] hover:bg-[#1eb855] text-white font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" fill="currentColor" /> Order on WhatsApp
            </a>
            <p className="mt-3 text-xs text-muted-foreground text-center">Pay online or place your order via WhatsApp.</p>
          </div>
        </aside>
      </div>

      {/* Recommendations */}
      {recommended && recommended.length > 0 && (
        <section className="mt-16">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-2xl text-primary">You might also love</h2>
            <Link to="/products" className="text-sm underline underline-offset-4 hover:text-accent">Shop all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommended.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}

      {/* Mobile sticky checkout */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-3 flex items-center gap-3 shadow-lg">
        <div className="flex-1">
          <div className="text-[11px] text-muted-foreground">Total</div>
          <div className="font-semibold text-primary">{formatINR(total)}</div>
        </div>
        <Button asChild size="lg" className="flex-[2] bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
