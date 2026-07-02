import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact The Variety Nutrition — Support, Orders & Wholesale" },
      { name: "description", content: "Reach the The Variety Nutrition team for orders, wholesale enquiries and support. Call, WhatsApp or email — we usually reply within 1 business day." },
      { property: "og:title", content: "Contact The Variety Nutrition" },
      { property: "og:description", content: "Questions, orders, wholesale — we'd love to hear from you." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="font-serif text-4xl text-primary">Get in touch</h1>
        <p className="text-muted-foreground mt-2">We usually reply within one business day.</p>
        <div className="mt-8 space-y-4 text-sm">
          <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent" /> hello@thevarietynutrition.in</div>
          <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /> +91 98765 43210</div>
          <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent" /> Mumbai, India</div>
        </div>
      </div>
      <form
        className="space-y-4 bg-card border border-border rounded-2xl p-6"
        onSubmit={(e) => { e.preventDefault(); toast.success("Thanks! We'll be in touch."); (e.target as HTMLFormElement).reset(); }}
      >
        <div><Label htmlFor="c-name">Name</Label><Input id="c-name" required maxLength={100} /></div>
        <div><Label htmlFor="c-email">Email</Label><Input id="c-email" type="email" required maxLength={255} /></div>
        <div><Label htmlFor="c-msg">Message</Label><Textarea id="c-msg" rows={5} required maxLength={1000} /></div>
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send message</Button>
      </form>
    </div>
  );
}
