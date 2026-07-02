import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const KEY = "hn_promo_dismissed_v1";

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(KEY)) return;
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    localStorage.setItem(KEY, "1");
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-in fade-in">
      <div className="relative bg-background rounded-2xl overflow-hidden max-w-md w-full shadow-2xl border border-border">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-full bg-background/80 hover:bg-secondary"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="bg-accent/10 p-8 text-center">
          <Gift className="w-12 h-12 mx-auto text-accent" />
          <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            Welcome offer
          </span>
          <h3 className="font-serif text-3xl text-primary mt-2">Flat 15% off</h3>
          <p className="text-muted-foreground mt-2">
            On your first order above ₹999. Use code{" "}
            <span className="font-mono font-bold text-primary">HEALTHY15</span> at checkout.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground w-full" onClick={close}>
            <Link to="/products">Shop now</Link>
          </Button>
          <button onClick={close} className="mt-3 text-xs text-muted-foreground underline underline-offset-4">
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}
