import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-nuts.png.asset.json";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The Variety Nutrition — Our Story & Sourcing Promise" },
      { name: "description", content: "The Variety Nutrition (TVN) brings the world's finest dry fruits, nuts and Ayurvedic herbs to Indian homes — hand-picked, farm-fresh, packed within 48 hours." },
      { property: "og:title", content: "About The Variety Nutrition" },
      { property: "og:description", content: "The story behind India's freshest dry fruits, nuts and Ayurvedic herbs." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Our Story</span>
        <h1 className="font-serif text-5xl text-primary mt-2">A family obsession with freshness</h1>
        <p className="text-lg text-muted-foreground mt-6">
          The Variety Nutrition was born in a small warehouse in 2018, from a simple idea — that the dry fruits reaching Indian
          homes deserved to be as fresh as the day they were harvested.
        </p>
      </div>
      <div className="mx-auto max-w-5xl px-4">
        <img src={heroImg.url} alt="The Variety Nutrition assortment" loading="eager" decoding="async" className="rounded-2xl shadow-xl w-full aspect-[16/9] object-cover" />
      </div>
      <div className="mx-auto max-w-3xl px-4 py-16 space-y-6 text-muted-foreground leading-relaxed">
        <p>We work directly with growers in California, Iran, Turkey, Afghanistan and India — cutting out middlemen
          so we can deliver premium AAA-grade produce at fair prices.</p>
        <p>Every batch is hand-cleaned, sorted and vacuum-sealed within 48 hours of harvest. No preservatives, no
          artificial colouring, no shortcuts — just nature's finest, delivered.</p>
        <p>Today, over 50,000 families across India start their day with The Variety Nutrition. We're just getting started.</p>
      </div>
    </div>
  );
}
