import { Link } from "@tanstack/react-router";
import { Heart, Share2 } from "lucide-react";
import { formatINR } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { useWishlist, shareProduct } from "@/lib/wishlist";
import { toast } from "sonner";

export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  short_description: string | null;
  price_cents: number;
  compare_at_price_cents: number | null;
  image_url: string | null;
};

export function ProductCard({ p }: { p: ProductCardData }) {
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const saved = has(p.id);

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border/60 hover:shadow-lg transition-shadow flex flex-col relative">
      <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
        <button
          type="button"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.preventDefault();
            const nowSaved = toggle({
              id: p.id, slug: p.slug, name: p.name,
              price_cents: p.price_cents, image_url: p.image_url,
            });
            toast.success(nowSaved ? `${p.name} added to wishlist` : `Removed from wishlist`);
          }}
          className={`w-9 h-9 rounded-full bg-background/90 backdrop-blur grid place-items-center shadow hover:scale-110 transition-transform ${saved ? "text-rose-500" : "text-muted-foreground hover:text-rose-500"}`}
        >
          <Heart className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
        </button>
        <button
          type="button"
          aria-label="Share product"
          onClick={(e) => {
            e.preventDefault();
            shareProduct(p.name, p.slug);
            if (typeof navigator !== "undefined" && !navigator.share) toast.success("Link copied");
          }}
          className="w-9 h-9 rounded-full bg-background/90 backdrop-blur grid place-items-center shadow hover:scale-110 hover:text-accent text-muted-foreground transition-transform"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
      <Link to="/products/$slug" params={{ slug: p.slug }} className="block bg-secondary overflow-hidden min-h-[18rem] md:min-h-[24rem] flex items-center justify-center p-4">
        <img
          src={p.image_url || "/images/prod-placeholder.jpg"}
          alt={p.name}
          loading="lazy"
          decoding="async"
          className="w-full h-auto max-h-[22rem] md:max-h-[28rem] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500"
          onError={(e) => {
            const t = e.currentTarget;
            if (!t.src.endsWith("/images/prod-placeholder.jpg")) {
              t.src = "/images/prod-placeholder.jpg";
            }
          }}
        />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link to="/products/$slug" params={{ slug: p.slug }} className="font-serif text-lg leading-tight hover:text-accent">
          {p.name}
        </Link>
        {p.short_description && <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.short_description}</p>}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-semibold text-primary">{formatINR(p.price_cents)}</span>
          {p.compare_at_price_cents && (
            <span className="text-xs text-muted-foreground line-through">{formatINR(p.compare_at_price_cents)}</span>
          )}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-primary/20 hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/products/$slug" params={{ slug: p.slug }}>View</Link>
          </Button>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => {
              add({ id: p.id, slug: p.slug, name: p.name, price_cents: p.price_cents, image_url: p.image_url });
              toast.success(`${p.name} added to cart`);
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
