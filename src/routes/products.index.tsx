import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard, type ProductCardData } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Search, MessageCircle, Loader2 } from "lucide-react";
import { whatsappUrl, BRAND } from "@/lib/brand";
import { toast } from "sonner";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Shop Premium Dry Fruits, Nuts & Seeds Online — The Variety Nutrition" },
      { name: "description", content: "Browse TVN's full range of premium dry fruits, nuts, seeds, kismis and Ayurvedic herbs. Farm-fresh, 100% natural, delivered across India." },
      { property: "og:title", content: "Shop Premium Dry Fruits & Nuts — The Variety Nutrition" },
      { property: "og:description", content: "Browse our full collection of premium dry fruits, nuts, seeds and Ayurvedic herbs." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

type ProductRow = ProductCardData & { category_id: string | null };

const AI_GOALS = [
  { key: "weight-loss", label: "Weight loss", kw: ["chia", "flax", "pistachio", "almond", "seed"] },
  { key: "muscle", label: "Muscle & sports", kw: ["almond", "walnut", "cashew", "pumpkin", "peanut"] },
  { key: "immunity", label: "Immunity boost", kw: ["date", "cashew", "berry", "raisin", "walnut"] },
  { key: "heart", label: "Heart health", kw: ["walnut", "flax", "almond", "chia"] },
  { key: "skin-hair", label: "Skin & hair", kw: ["almond", "walnut", "seed", "berry"] },
  { key: "kids", label: "Kids nutrition", kw: ["cashew", "raisin", "almond", "date"] },
];

function Products() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [aiGoal, setAiGoal] = useState<string | null>(null);
  const [aiThinking, setAiThinking] = useState(false);

  const { data } = useQuery({
    queryKey: ["products-all"],
    queryFn: async () => {
      const { data } = await supabase
        .from("products")
        .select("id,slug,name,short_description,price_cents,compare_at_price_cents,image_url,category_id")
        .eq("active", true)
        .order("created_at", { ascending: false });
      return (data ?? []) as ProductRow[];
    },
  });
  const { data: cats } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => (await supabase.from("categories").select("*").order("sort_order")).data ?? [],
  });

  const filtered = useMemo(() => {
    let list = data ?? [];
    if (cat) list = list.filter((p) => p.category_id === cat);
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (aiGoal) {
      const goal = AI_GOALS.find((g) => g.key === aiGoal);
      if (goal) {
        list = list.filter((p) => {
          const hay = `${p.name} ${p.short_description ?? ""}`.toLowerCase();
          return goal.kw.some((k) => hay.includes(k));
        });
      }
    }
    return list;
  }, [data, cat, q, aiGoal]);

  function runAi(goalKey: string) {
    setAiThinking(true);
    setTimeout(() => {
      setAiGoal(goalKey);
      setAiThinking(false);
      const g = AI_GOALS.find((x) => x.key === goalKey);
      toast.success(`AI picked products for ${g?.label}`);
    }, 700);
  }

  const expertMsg = `Hi ${BRAND.name}! I'd like help choosing the right dry fruits for my goal. Can an expert guide me?`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6">
        <h1 className="font-serif text-4xl text-primary">All Products</h1>
        <p className="text-muted-foreground mt-1">{filtered.length} products</p>
      </div>

      {/* SEARCH */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search almonds, dates, seeds…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="pl-10 h-12 text-base"
        />
      </div>

      {/* CATEGORY CHIPS — scrollable */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
        <button
          onClick={() => setCat(null)}
          className={`shrink-0 px-4 py-2 rounded-full text-sm border transition-colors ${
            !cat ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-accent"
          }`}
        >
          All
        </button>
        {cats?.map((c) => (
          <button
            key={c.id}
            onClick={() => setCat(c.id)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm border transition-colors ${
              cat === c.id ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-accent"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* AI RECOMMENDER + EXPERT */}
      <div className="grid md:grid-cols-[1.6fr_1fr] gap-4 mb-8">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-accent" />
            <div className="font-serif text-lg text-primary">AI Selection — tell us your goal</div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Pick a goal and our AI curates the best products for you from our range.
          </p>
          <div className="flex flex-wrap gap-2">
            {AI_GOALS.map((g) => (
              <button
                key={g.key}
                onClick={() => runAi(g.key)}
                className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                  aiGoal === g.key
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-accent/40 hover:bg-accent/10"
                }`}
              >
                {g.label}
              </button>
            ))}
            {aiGoal && (
              <button
                onClick={() => setAiGoal(null)}
                className="px-3 py-1.5 rounded-full text-xs border border-border hover:bg-secondary"
              >
                Clear AI filter ✕
              </button>
            )}
          </div>
          {aiThinking && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
              <Loader2 className="w-3 h-3 animate-spin" /> AI curating your list…
            </div>
          )}
        </div>
        <div className="rounded-2xl bg-primary text-primary-foreground p-5 flex flex-col justify-between">
          <div>
            <div className="font-serif text-lg">Talk to an expert</div>
            <p className="text-sm opacity-85 mt-1">
              Not sure what to buy? Chat with our nutritionist on WhatsApp — free.
            </p>
          </div>
          <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href={whatsappUrl(expertMsg)} target="_blank" rel="noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          No products match your filters. <button onClick={() => { setQ(""); setCat(null); setAiGoal(null); }} className="underline text-accent">Reset</button>
        </div>
      )}
    </div>
  );
}
