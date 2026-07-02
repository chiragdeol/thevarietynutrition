import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type WishlistItem = {
  id: string;
  slug: string;
  name: string;
  price_cents: number;
  image_url: string | null;
};

type WishlistCtx = {
  items: WishlistItem[];
  count: number;
  has: (id: string) => boolean;
  toggle: (item: WishlistItem) => boolean; // returns new "isSaved" state
  remove: (id: string) => void;
  clear: () => void;
};

const Ctx = createContext<WishlistCtx | null>(null);
const KEY = "hn_wishlist_v1";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, ready]);

  const has = (id: string) => items.some((i) => i.id === id);
  const toggle = (item: WishlistItem) => {
    let saved = false;
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        saved = false;
        return prev.filter((i) => i.id !== item.id);
      }
      saved = true;
      return [...prev, item];
    });
    return saved;
  };
  const remove = (id: string) => setItems((p) => p.filter((i) => i.id !== id));
  const clear = () => setItems([]);

  return (
    <Ctx.Provider value={{ items, count: items.length, has, toggle, remove, clear }}>
      {children}
    </Ctx.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWishlist must be inside WishlistProvider");
  return ctx;
}

export function shareProduct(name: string, slug: string) {
  if (typeof window === "undefined") return;
  const url = `${window.location.origin}/products/${slug}`;
  if (navigator.share) {
    navigator.share({ title: name, url }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(url);
  }
}
