import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Target, Sparkles, HeartPulse, MessageCircle } from "lucide-react";
import { whatsappUrl, BRAND } from "@/lib/brand";

export const Route = createFileRoute("/diet-plan")({
  head: () => ({
    meta: [
      { title: "Personalised Diet Plans in India — The Variety Nutrition" },
      { name: "description", content: "Nutritionist-curated diet plans built around dry fruits, nuts and seeds. Weight loss, muscle gain, diabetes-friendly, pregnancy & wellness plans from ₹499." },
      { property: "og:title", content: "Personalised Diet Plans — The Variety Nutrition" },
      { property: "og:description", content: "Customised diet plans powered by nature's finest superfoods." },
      { property: "og:url", content: "/diet-plan" },
    ],
    links: [{ rel: "canonical", href: "/diet-plan" }],
  }),
  component: DietPlan,
});

const goals = [
  { icon: Target, title: "Weight Management", text: "Balanced calorie plans built around fibre-rich nuts and seeds." },
  { icon: HeartPulse, title: "Heart & Diabetes", text: "Low-GI, high-omega plans crafted with clinical guidance." },
  { icon: Sparkles, title: "Skin, Hair & Immunity", text: "Antioxidant-rich foods for a natural glow from within." },
  { icon: Leaf, title: "Everyday Wellness", text: "Simple daily rituals to feel lighter, sharper and stronger." },
];

function DietPlan() {
  const [form, setForm] = useState({ name: "", age: "", goal: "Weight Management", notes: "" });

  const message = `Hi ${BRAND.name}! I'd like a personalised diet plan.

Name: ${form.name}
Age: ${form.age}
Goal: ${form.goal}
Notes: ${form.notes}`;

  return (
    <div>
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">New</span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary mt-2">Personalised Diet Plans</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Get a nutritionist-curated diet plan built around our farm-fresh dry fruits, nuts and seeds.
            Tell us your goal — we'll design a 4-week plan just for you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {goals.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border p-6 bg-background">
              <Icon className="w-8 h-8 text-accent" />
              <h3 className="font-serif text-lg text-primary mt-4">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20">
        <div className="rounded-2xl border border-border p-8 bg-background">
          <h2 className="font-serif text-2xl text-primary">Request your plan</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Fill this in and we'll continue on WhatsApp — usually within 2 hours.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Priya Sharma" />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} placeholder="32" />
              </div>
            </div>
            <div>
              <Label htmlFor="goal">Your primary goal</Label>
              <select
                id="goal"
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                {goals.map((g) => <option key={g.title}>{g.title}</option>)}
                <option>Muscle Gain</option>
                <option>Pregnancy Nutrition</option>
              </select>
            </div>
            <div>
              <Label htmlFor="notes">Anything we should know? (allergies, preferences)</Label>
              <Textarea id="notes" rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
            </div>
            <Button
              asChild
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#1eb855] text-white"
              disabled={!form.name}
            >
              <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" fill="currentColor" /> Continue on WhatsApp
              </a>
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Free consultation. Plans start from ₹499.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
