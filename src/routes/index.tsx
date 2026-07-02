import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardData } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Leaf, Truck, ShieldCheck, Award, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-nuts.png.asset.json";
import { Testimonials } from "@/components/Testimonials";
import { InstagramReels } from "@/components/InstagramReels";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/__l5e/assets-v1/a083104b-4bb3-4afd-8dbd-e8e303b136d5/tvn-logo.png" },
      { property: "og:image:alt", content: "The Variety Nutrition — premium dry fruits, nuts & Ayurvedic herbs" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg.url, fetchpriority: "high" } as any,
    ],
  }),
  component: Home,
});

type Category = {
  id: string;
  slug: string;
  name: string;
  image_url: string | null;
};

function CategorySlider({ categories }: { categories: Category[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [categories.length]);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -200 : 200;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
    el.style.scrollSnapType = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    const walk = dragStart.current.x - e.clientX;
    el.scrollLeft = dragStart.current.scrollLeft + walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    const el = scrollRef.current;
    if (!el) return;
    el.style.cursor = "grab";
    el.style.scrollSnapType = "x mandatory";
  };

  if (categories.length === 0) return null;

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          onClick={() => scrollBy("left")}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 transition hover:bg-white hover:scale-105 hidden md:block"
          aria-label="Scroll categories left"
        >
          <ChevronLeft className="h-5 w-5 text-primary" />
        </button>
      )}

      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className={cn(
          "flex gap-4 overflow-x-auto pb-4 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-hide",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((c) => (
          <Link
            key={c.id}
            to="/category/$slug"
            params={{ slug: c.slug }}
            className="group snap-start snap-always shrink-0 text-center w-[150px] sm:w-[170px]"
          >
            <div className="aspect-square rounded-full bg-secondary overflow-hidden mb-3 border-2 border-transparent group-hover:border-accent transition-colors">
              {c.image_url && (
                <img
                  src={c.image_url}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
            </div>
            <div className="font-medium text-sm">{c.name}</div>
          </Link>
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scrollBy("right")}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-border/60 transition hover:bg-white hover:scale-105 hidden md:block"
          aria-label="Scroll categories right"
        >
          <ChevronRight className="h-5 w-5 text-primary" />
        </button>
      )}
    </div>
  );
}

function Home() {
  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await supabase.from("categories").select("*").order("sort_order");
      return (data ?? []) as Category[];
    },
  });

  const { data: newArrivals } = useQuery({
    queryKey: ["new-arrivals"],
    queryFn: async () => {
      const { data } = await supabase
        .from("products")
        .select("id,slug,name,short_description,price_cents,compare_at_price_cents,image_url")
        .eq("active", true)
        .order("created_at", { ascending: false })
        .limit(8);
      return (data ?? []) as ProductCardData[];
    },
  });


  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">
              100% Natural · Farm Fresh
            </span>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight text-primary">
              Nature's finest, <em className="text-accent not-italic">delivered.</em>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Hand-picked dry fruits, nuts and seeds — sourced from the world's best orchards
              and packed at the peak of freshness.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/products">Shop the collection</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { n: "50k+", l: "Happy customers" },
                { n: "100%", l: "Natural" },
                { n: "48h", l: "Fresh dispatch" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-2xl text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl rotate-3" />
            <img
              src={heroImg.url}
              alt="The Variety Nutrition product range — premium dry fruits, nuts, seeds and Ayurvedic herbs"
              width={1600}
              height={1000}
              loading="eager"
              // @ts-expect-error fetchpriority is valid HTML
              fetchpriority="high"
              decoding="async"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { i: Leaf, t: "100% Natural", s: "No preservatives, ever" },
            { i: Truck, t: "Free Shipping", s: "On orders above ₹999" },
            { i: ShieldCheck, t: "Quality Assured", s: "Lab-tested batches" },
            { i: Award, t: "Premium Grade", s: "AAA hand-picked" },
          ].map(({ i: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <Icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <div className="font-semibold text-primary">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES — scrollable slider */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Explore</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-1">Shop by category</h2>
          </div>
          <Link to="/products" className="text-sm underline underline-offset-4 hover:text-accent">
            View all →
          </Link>
        </div>
        <CategorySlider categories={categories ?? []} />
      </section>

      {/* NEW ARRIVALS / BESTSELLERS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Fresh in</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mt-1">New arrivals</h2>
          </div>
          <Link to="/products" className="text-sm underline underline-offset-4 hover:text-accent">View all →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {newArrivals?.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* INSTAGRAM */}
      <InstagramReels />


      {/* DIET PLAN — SPORTS / WEIGHT LOSS / WELLNESS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Nutritionist-crafted</span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mt-2">We create a Diet Plan for you</h2>
          <p className="mt-3 text-muted-foreground">
            Whether you're training for a marathon, chasing a weight-loss goal or just want
            to eat cleaner — our team builds a dry-fruit-powered plan around your body & lifestyle.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              tag: "For Athletes & Sports",
              title: "Performance & Recovery Plan",
              text: "High-protein, high-omega fuel with almonds, walnuts & pumpkin seeds for stamina, muscle recovery and sustained energy on training days.",
              badge: "🏋️ Sports",
            },
            {
              tag: "For Weight Loss",
              title: "Fat-Burn & Portion Plan",
              text: "Low-GI, fibre-rich snacks built around pistachios, flax and chia — keeps you full longer, curbs cravings and supports a calorie deficit.",
              badge: "⚖️ Weight Loss",
            },
            {
              tag: "For Everyday Wellness",
              title: "Immunity & Glow Plan",
              text: "Antioxidant-loaded mix of dates, cashews and berries for skin, hair, immunity and daily energy — perfect for busy professionals & families.",
              badge: "✨ Wellness",
            },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-lg transition-shadow flex flex-col">
              <span className="text-xs font-semibold text-accent">{p.badge}</span>
              <h3 className="font-serif text-xl text-primary mt-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{p.text}</p>
              <Button asChild variant="outline" className="mt-5 border-primary/20 hover:bg-primary hover:text-primary-foreground">
                <Link to="/diet-plan">Get this plan →</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-serif text-xl md:text-2xl">Not sure which plan is right for you?</div>
            <p className="text-sm opacity-85 mt-1">Book a free 15-min consult with our nutritionist.</p>
          </div>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/diet-plan">Talk to a nutritionist →</Link>
          </Button>
        </div>
      </section>

      {/* STORY BAND */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Our Promise</span>
        <h2 className="font-serif text-3xl md:text-4xl text-primary mt-2">From the world's finest orchards, straight to your home.</h2>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
          Every batch of The Variety Nutrition dry fruits is hand-picked, cleaned, sorted and packed within 48
          hours of harvest — so what reaches you is exactly what the farmer intended. No
          preservatives, no artificial ripeners, no shortcuts.
        </p>
        <Button asChild variant="outline" size="lg" className="mt-8">
          <Link to="/about">Read our story</Link>
        </Button>
      </section>
    </div>
  );
}
