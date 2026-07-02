import { Link } from "@tanstack/react-router";
import tvnLogo from "@/assets/tvn-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-3 bg-white/95 rounded-lg p-3 inline-block">
            <img src={tvnLogo.url} alt="The Variety Nutrition" width={200} height={64} loading="lazy" decoding="async" className="h-16 w-auto" />
          </div>
          <p className="text-sm opacity-80">Premium dry fruits, nuts & seeds. Delivered farm-fresh across India.</p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Shop</h4>
          <ul className="text-sm space-y-2 opacity-80">
            <li><Link to="/category/almonds">Almonds</Link></li>
            <li><Link to="/category/cashews">Cashews</Link></li>
            <li><Link to="/category/dates">Dates</Link></li>
            <li><Link to="/products">All Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Company</h4>
          <ul className="text-sm space-y-2 opacity-80">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/diet-plan">Diet Plan</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Support</h4>
          <ul className="text-sm space-y-2 opacity-80">
            <li>Shipping & Returns</li>
            <li>Track your order</li>
            <li>hello@thevarietynutrition.in</li>
            <li>WhatsApp: +91 98765 43210</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} The Variety Nutrition. All rights reserved.</div>
    </footer>
  );
}
