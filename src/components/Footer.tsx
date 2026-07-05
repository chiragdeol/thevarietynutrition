import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import tvnLogo from "@/assets/tvn-logo.png.asset.json";
import { useState } from "react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-black text-white mt-20 pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-start gap-12 pb-12 border-b border-white/10">
        
        {/* Left Column - Contact Details & Logo */}
        <div className="flex flex-col gap-6 max-w-xl w-full">
          <div>
            <Link to="/" className="inline-block">
              <img 
                src={tvnLogo.url} 
                alt="The Variety Nutrition" 
                width={200} 
                height={80} 
                loading="lazy" 
                decoding="async" 
                className="h-16 md:h-20 w-auto" 
              />
            </Link>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 flex-shrink-0">
                <MapPin className="w-5 h-5 text-white/80" />
              </div>
              <span className="text-sm md:text-base text-white/80 font-normal leading-relaxed">
                Pegasus Tower, Office No. 702, 7th Floor, Sector 68, Noida, Uttar Pradesh 201307
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 flex-shrink-0">
                <Phone className="w-5 h-5 text-white/80" />
              </div>
              <a href="tel:+919971095414" className="text-sm md:text-base text-white/80 font-normal hover:text-white transition-colors">
                +91-9971095414
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 flex-shrink-0">
                <Mail className="w-5 h-5 text-white/80" />
              </div>
              <a href="mailto:customercare@nutraj.com" className="text-sm md:text-base text-white/80 font-normal hover:text-white transition-colors">
                customercare@nutraj.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Newsletter & FSSAI */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto gap-6">
          
          {/* Newsletter Subscription */}
          <div className="w-full max-w-md">
            <p className="text-white/95 text-sm mb-3 text-center md:text-right font-medium">
              Subscribe to our newsletter for updates and special offers!
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center border border-white/30 rounded-full p-1 pl-4 bg-transparent max-w-md w-full">
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none outline-none text-white text-sm placeholder:text-white/50 flex-grow py-2.5 w-full"
              />
              <button 
                type="submit"
                className="bg-white text-black font-semibold text-xs px-6 py-3 rounded-full hover:bg-white/90 transition-colors uppercase tracking-wider flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* FSSAI Licenses */}
          <div className="flex flex-col items-center md:items-end gap-2 mt-4">
            <div className="flex gap-2">
              <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center">
                <img 
                  src="/images/fssai-logo.png" 
                  alt="FSSAI Logo" 
                  className="h-6 w-auto object-contain" 
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center">
                <img 
                  src="/images/fssai-logo.png" 
                  alt="FSSAI Logo" 
                  className="h-6 w-auto object-contain" 
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-xs text-white/60 font-mono tracking-wide text-center md:text-right mt-1 space-y-1">
              <div>FSSAI License No. - 10016051001876</div>
              <div>FSSAI License No. - 10017061000315</div>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright & Bottom Links */}
      <div className="mx-auto max-w-7xl px-4 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <div>
          © {new Date().getFullYear()} The Variety Nutrition. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Shipping & Returns</Link>
        </div>
      </div>
    </footer>
  );
}
