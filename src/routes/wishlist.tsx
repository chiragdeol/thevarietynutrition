import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Trash2, ShoppingBag } from "lucide-react";
import { useWishlist } from "@/lib/wishlist";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/wishlist")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Your Wishlist — The Variety Nutrition" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { items, remove, clear } = useWishlist();
  const { add } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <Heart className="w-16 h-16 mx-auto text-muted-foreground/50" />
        <h1 className="font-serif text-3xl md:text-4xl text-primary mt-6">Your wishlist is empty</h1>
        <p className="text-muted-foreground mt-2">Save your favourite nuts & seeds to shop them later.</p>
        <Button asChild className="mt-6 bg-accent text-accent-foreground">
          <Link to="/products">Browse products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between mb-8 gap-3 flex-wrap">
        <h1 className="font-serif text-3xl md:text-4xl text-primary">Your Wishlist ({items.length})</h1>
        <Button variant="outline" onClick={clear}>Clear all</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((p) => (
          <div key={p.id} className="bg-card rounded-xl overflow-hidden border border-border/60 flex flex-col">
            <Link to="/products/$slug" params={{ slug: p.slug }} className="block bg-secondary p-4 min-h-[16rem] flex items-center justify-center">
              {p.image_url && <img src={p.image_url} alt={p.name} loading="lazy" decoding="async" className="max-h-[16rem] object-contain" />}
            </Link>
            <div className="p-4 flex-1 flex flex-col">
              <Link to="/products/$slug" params={{ slug: p.slug }} className="font-serif text-base hover:text-accent line-clamp-2">
                {p.name}
              </Link>
              <div className="mt-2 font-semibold text-primary">{formatINR(p.price_cents)}</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground"
                  onClick={() => {
                    add(p);
                    toast.success(`${p.name} added to cart`);
                  }}
                >
                  <ShoppingBag className="w-4 h-4 mr-1" /> Add
                </Button>
                <Button size="sm" variant="outline" onClick={() => remove(p.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
