import { createFileRoute, notFound, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { formatINR } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { Minus, Plus, Check, Zap, Truck, ShieldCheck, RotateCcw, Leaf, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


function ProductFAQ({ productName }: { productName: string }) {
  const faqs = [
    { q: `Is ${productName} 100% natural?`, a: "Yes. Every pack is preservative-free, unsalted and unroasted unless specified. We source directly from trusted farms and hand-sort each batch." },
    { q: "How should I store it?", a: "Store in an airtight container in a cool, dry place away from direct sunlight. For longer freshness (especially in humid regions), refrigerate after opening." },
    { q: "What is the shelf life?", a: "9 months from the packaging date when stored correctly. The best-before date is printed on every pack." },
    { q: "How long does delivery take?", a: "Orders are dispatched within 48 hours and typically delivered in 3–6 business days across India. You'll receive a tracking link over SMS/WhatsApp." },
    { q: "Do you offer Cash on Delivery?", a: "Yes, COD is available on most pin codes across India for orders under ₹5,000. You can also pay via UPI, cards or netbanking at checkout." },
    { q: "Can I return or exchange the product?", a: "If your order arrives damaged or you're unsatisfied with the quality, contact us within 7 days of delivery for a free replacement or refund." },
    { q: "Is it safe during pregnancy and for kids?", a: "Absolutely — our dry fruits are a wholesome source of nutrients for all ages. For personalised guidance, try our free Diet Plan consultation." },
  ];
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export const Route = createFileRoute("/products/$slug")({
  loader: async ({ params }) => {
    const { data } = await supabase
      .from("products")
      .select("*, categories(name,slug)")
      .eq("slug", params.slug)
      .eq("active", true)
      .maybeSingle();
    if (!data) throw notFound();
    return { product: data };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    if (!p) return {};
    const priceINR = (p.price_cents / 100).toFixed(2);
    const availability = p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";
    return {
      meta: [
        { title: `${p.name} — Buy Online at The Variety Nutrition` },
        { name: "description", content: (p.short_description ?? p.description ?? `Buy ${p.name} online.`).slice(0, 158) },
        { property: "og:title", content: `${p.name} — The Variety Nutrition` },
        { property: "og:description", content: (p.short_description ?? "").slice(0, 200) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
        { property: "product:price:amount", content: priceINR },
        { property: "product:price:currency", content: "INR" },
        { property: "product:availability", content: p.stock > 0 ? "in stock" : "out of stock" },
        ...(p.image_url ? [{ property: "og:image", content: p.image_url }, { property: "og:image:alt", content: p.name }, { name: "twitter:image", content: p.image_url }] : []),
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description ?? p.short_description ?? undefined,
            image: p.image_url ? [p.image_url] : undefined,
            sku: p.id,
            brand: { "@type": "Brand", name: "The Variety Nutrition" },
            category: p.categories?.name,
            offers: {
              "@type": "Offer",
              url: `/products/${params.slug}`,
              priceCurrency: "INR",
              price: priceINR,
              availability,
              itemCondition: "https://schema.org/NewCondition",
              seller: { "@type": "Organization", name: "The Variety Nutrition" },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "240",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Shop", item: "/products" },
              ...(p.categories ? [{ "@type": "ListItem", position: 3, name: p.categories.name, item: `/category/${p.categories.slug}` }] : []),
              { "@type": "ListItem", position: p.categories ? 4 : 3, name: p.name, item: `/products/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);


  const discount =
    product.compare_at_price_cents && product.compare_at_price_cents > product.price_cents
      ? Math.round((1 - product.price_cents / product.compare_at_price_cents) * 100)
      : 0;

  const { data: related } = useQuery({
    queryKey: ["related", product.category_id],
    queryFn: async () => {
      if (!product.category_id) return [];
      const { data } = await supabase
        .from("products")
        .select("id,slug,name,image_url,price_cents,compare_at_price_cents")
        .eq("category_id", product.category_id)
        .eq("active", true)
        .neq("id", product.id)
        .limit(4);
      return data ?? [];
    },
  });

  function addToCart() {
    add(
      { id: product.id, slug: product.slug, name: product.name, price_cents: product.price_cents, image_url: product.image_url },
      qty,
    );
    toast.success(`${product.name} added to cart`);
  }

  function buyNow() {
    add(
      { id: product.id, slug: product.slug, name: product.name, price_cents: product.price_cents, image_url: product.image_url },
      qty,
    );
    navigate({ to: "/checkout" });
  }


  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:py-10 pb-32 lg:pb-10">
      <nav className="text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-accent">Home</Link> /{" "}
        <Link to="/products" className="hover:text-accent">Shop</Link>
        {product.categories && (
          <>
            {" / "}
            <Link to="/category/$slug" params={{ slug: product.categories.slug }} className="hover:text-accent">
              {product.categories.name}
            </Link>
          </>
        )}
        {" / "}<span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
        {/* Gallery */}
        <div>
          <div className="relative bg-secondary rounded-2xl overflow-hidden min-h-[22rem] md:min-h-[32rem] flex items-center justify-center p-4 md:p-6">
            {product.image_url && (
              <img src={product.image_url} alt={product.name} loading="eager" decoding="async" className="w-full h-auto max-h-[22rem] md:max-h-[32rem] object-contain mx-auto" />
            )}
            {discount > 0 && (
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-bold px-3 py-1.5 rounded-full shadow">
                −{discount}% OFF
              </div>
            )}
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur grid place-items-center hover:text-accent shadow">
              <Heart className="w-4 h-4" />
            </button>
          </div>
          {/* Thumbnail placeholders — currently single image; use as decorative row */}
          <div className="hidden md:grid grid-cols-4 gap-3 mt-3">
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className={`aspect-square rounded-lg overflow-hidden bg-secondary border-2 p-2 flex items-center justify-center ${n === 0 ? "border-accent" : "border-transparent"}`}>
                {product.image_url && (
                  <img src={product.image_url} alt="" loading="lazy" decoding="async" aria-hidden="true" className="w-full h-full object-contain opacity-80" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          {product.categories && (
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{product.categories.name}</span>
          )}
          <h1 className="font-serif text-3xl md:text-4xl text-primary mt-2">{product.name}</h1>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <div className="flex text-amber-500">{"★★★★★"}</div>
            <span className="text-muted-foreground">4.8 · 240+ reviews</span>
          </div>

          {product.short_description && (
            <p className="text-muted-foreground mt-4">{product.short_description}</p>
          )}

          <div className="mt-5 flex items-baseline gap-3 flex-wrap">
            <span className="text-3xl font-bold text-primary">{formatINR(product.price_cents)}</span>
            {product.compare_at_price_cents && (
              <>
                <span className="text-lg text-muted-foreground line-through">{formatINR(product.compare_at_price_cents)}</span>
                {discount > 0 && (
                  <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">Save {discount}%</span>
                )}
              </>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Inclusive of all taxes {product.weight_grams ? `· ${product.weight_grams}g pack` : ""}</p>

          {product.stock > 0 ? (
            <p className="mt-4 text-sm text-green-700 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4" /> In stock — dispatched within 48 hours
            </p>
          ) : (
            <p className="mt-4 text-sm text-destructive font-medium">Currently out of stock</p>
          )}

          {/* Qty + Add to cart */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border border-border rounded-md h-12">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 h-full hover:bg-secondary"><Minus className="w-4 h-4" /></button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 h-full hover:bg-secondary"><Plus className="w-4 h-4" /></button>
            </div>
            <Button
              size="lg"
              className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
              disabled={product.stock <= 0}
              onClick={addToCart}
            >
              Add to cart · {formatINR(product.price_cents * qty)}
            </Button>
          </div>

          <button
            type="button"
            onClick={buyNow}
            disabled={product.stock <= 0}
            className="mt-3 inline-flex items-center justify-center gap-2 w-full h-12 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors disabled:opacity-50"
          >
            <Zap className="w-5 h-5" /> Buy Direct — Checkout Now
          </button>


          {/* Trust badges */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { i: Truck, t: "Free shipping ₹999+" },
              { i: RotateCcw, t: "Easy returns" },
              { i: ShieldCheck, t: "Secure payments" },
              { i: Leaf, t: "100% Natural" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="flex items-center gap-2 text-xs bg-secondary/60 rounded-lg px-3 py-2.5">
                <Icon className="w-4 h-4 text-accent shrink-0" />
                <span className="font-medium leading-tight">{t}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.share) {
                navigator.share({ title: product.name, url: window.location.href }).catch(() => {});
              } else if (typeof navigator !== "undefined") {
                navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied");
              }
            }}
            className="mt-4 text-xs text-muted-foreground inline-flex items-center gap-1.5 hover:text-accent"
          >
            <Share2 className="w-3.5 h-3.5" /> Share this product
          </button>

        </div>
      </div>

      {/* Description & FAQ */}
      <div className="mt-14 md:mt-20 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
        <section>
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-5">Product Description</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
            {product.description ? (
              <p className="whitespace-pre-wrap">{product.description}</p>
            ) : (
              <p>{product.short_description}</p>
            )}
            <div className="mt-6 grid sm:grid-cols-2 gap-4 not-prose">
              <div className="rounded-xl border border-border p-4 bg-secondary/40">
                <h3 className="font-serif text-base text-primary mb-2">Key Benefits</h3>
                <ul className="text-sm space-y-1.5">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 100% natural, no preservatives</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Rich in protein, fibre & healthy fats</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Supports heart & brain health</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Ideal for daily snacking & recipes</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border p-4 bg-secondary/40">
                <h3 className="font-serif text-base text-primary mb-2">Product Details</h3>
                <ul className="text-sm space-y-1.5">
                  {product.weight_grams && <li><span className="text-muted-foreground">Net weight:</span> <span className="font-medium">{product.weight_grams}g</span></li>}
                  <li><span className="text-muted-foreground">Storage:</span> <span className="font-medium">Cool, dry place</span></li>
                  <li><span className="text-muted-foreground">Shelf life:</span> <span className="font-medium">9 months from packaging</span></li>
                  <li><span className="text-muted-foreground">Country of origin:</span> <span className="font-medium">India</span></li>
                  {product.categories && <li><span className="text-muted-foreground">Category:</span> <span className="font-medium">{product.categories.name}</span></li>}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-5">Frequently Asked Questions</h2>
          <ProductFAQ productName={product.name} />
        </section>
      </div>

      {related && related.length > 0 && (
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((r) => (
              <Link key={r.id} to="/products/$slug" params={{ slug: r.slug }} className="group">
                <div className="bg-secondary rounded-xl overflow-hidden min-h-[14rem] md:min-h-[18rem] flex items-center justify-center p-3">
                  {r.image_url && <img src={r.image_url} alt={r.name} loading="lazy" className="w-full h-auto max-h-[14rem] md:max-h-[18rem] object-contain mx-auto group-hover:scale-[1.02] transition-transform" />}
                </div>
                <div className="mt-2 text-sm font-medium line-clamp-2">{r.name}</div>
                <div className="text-sm text-primary font-semibold">{formatINR(r.price_cents)}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile sticky Add-to-Cart */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-3 flex items-center gap-3 shadow-lg">
        <div className="flex-1">
          <div className="text-[11px] text-muted-foreground">Price</div>
          <div className="font-semibold text-primary">{formatINR(product.price_cents * qty)}</div>
        </div>
        <Button
          size="lg"
          className="flex-[2] bg-accent hover:bg-accent/90 text-accent-foreground"
          disabled={product.stock <= 0}
          onClick={addToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
