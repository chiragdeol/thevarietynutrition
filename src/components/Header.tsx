import { Link } from "@tanstack/react-router";
import { ShoppingBag, User, Search, Menu, ChevronDown, Heart } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import tvnLogo from "@/assets/tvn-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop All" },
  { to: "/diet-plan", label: "Diet Plan" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const { count } = useCart();
  const { count: wishCount } = useWishlist();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);

  const { data: categories } = useQuery({
    queryKey: ["header-categories"],
    queryFn: async () => {
      const { data } = await supabase
        .from("categories")
        .select("slug,name")
        .order("sort_order");
      return data ?? [];
    },
  });

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="bg-primary text-primary-foreground text-xs py-2 text-center px-4">
        Free shipping on orders above ₹999 · 100% natural · No preservatives
      </div>
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-20 md:h-24 gap-4">
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={tvnLogo.url} alt="The Variety Nutrition" width={200} height={80} decoding="async" className="h-16 md:h-20 w-auto" />
          <span className="sr-only">The Variety Nutrition</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setCatOpen(true)}
            onMouseLeave={() => setCatOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 hover:text-accent transition-colors"
              onClick={() => setCatOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={catOpen}
            >
              Categories <ChevronDown className="w-4 h-4" />
            </button>
            {catOpen && (
              <div className="absolute left-0 top-full pt-2 w-56 z-50">
                <div className="bg-background border border-border rounded-md shadow-lg py-2 max-h-[320px] overflow-y-auto">
                  {categories?.map((c) => (
                    <Link
                      key={c.slug}
                      to="/category/$slug"
                      params={{ slug: c.slug }}
                      onClick={() => setCatOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-secondary hover:text-accent"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/products" aria-label="Search" className="hidden sm:block">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/wishlist" aria-label="Wishlist" className="relative">
            <Heart className="w-5 h-5" />
            {wishCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishCount}
              </span>
            )}
          </Link>
          <Link to={user ? "/account" : "/auth"} aria-label="Account">
            <User className="w-5 h-5" />
          </Link>
          <Link to="/cart" aria-label="Cart" className="relative">
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className={cn("md:hidden border-t border-border overflow-hidden transition-all", open ? "max-h-[600px]" : "max-h-0")}>
        <nav className="flex flex-col p-4 gap-3 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1">
              {n.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setMobileCatOpen((v) => !v)}
            className="py-1 flex items-center justify-between font-medium"
          >
            Categories <ChevronDown className={cn("w-4 h-4 transition-transform", mobileCatOpen && "rotate-180")} />
          </button>
          {mobileCatOpen && (
            <div className="pl-3 flex flex-col gap-2 border-l border-border">
              {categories?.map((c) => (
                <Link
                  key={c.slug}
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpen(false)}
                  className="py-1 text-muted-foreground hover:text-accent"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

