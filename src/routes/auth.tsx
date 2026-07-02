import { createFileRoute, useNavigate, Link, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Leaf, ShieldCheck, Truck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-nuts.png.asset.json";
import logoImg from "@/assets/tvn-logo.png.asset.json";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/auth")({
  validateSearch: (s: Record<string, unknown>) => ({ mode: (s.mode as string) || "signin" }),
  head: () => ({ meta: [{ title: "Sign in — The Variety Nutrition" }] }),
  component: AuthPage,
});

function AuthPage() {
  const { mode } = useSearch({ from: "/auth" });
  const isSignup = mode === "signup";
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: "/account" });
  }, [user, navigate]);

  async function handleEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = z.object({
      email: z.string().trim().email().max(255),
      password: z.string().min(6).max(100),
      full_name: z.string().trim().max(100).optional(),
    }).safeParse(Object.fromEntries(fd));
    if (!parsed.success) return toast.error(parsed.error.issues[0]?.message ?? "Invalid input");

    setLoading(true);
    try {
      if (isSignup) {
        const { error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: parsed.data.full_name },
          },
        });
        if (error) throw error;
        toast.success("Account created!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) throw error;
        toast.success("Welcome back!");
      }
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) toast.error("Google sign-in failed");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* LEFT — brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-primary text-primary-foreground p-12">
        <img
          src={heroImg.url}
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/95" />

        <div className="relative">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="inline-block bg-background/90 rounded-xl p-2 shadow-sm">
              <img src={logoImg.url} alt="" width={120} height={48} decoding="async" className="h-10 w-auto" />
            </span>
            <span className="sr-only">{BRAND.name}</span>
          </Link>
        </div>

        <div className="relative">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Welcome</span>
          <h2 className="font-serif text-4xl xl:text-5xl leading-tight mt-3">
            Nature's finest, <em className="text-accent not-italic">delivered fresh.</em>
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-md">
            Sign in to track orders, save favourites and unlock member-only pricing on our
            farm-fresh dry fruits and nuts.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 max-w-md">
            {[
              { i: Leaf, t: "100% Natural" },
              { i: Truck, t: "Free shipping ₹999+" },
              { i: ShieldCheck, t: "Lab-tested batches" },
              { i: Sparkles, t: "Member-only offers" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="flex items-center gap-2 text-sm">
                <Icon className="w-4 h-4 text-accent shrink-0" /> {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {BRAND.name}
        </div>
      </div>

      {/* RIGHT — form */}
      <div className="flex items-center justify-center px-4 py-14 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Link to="/" className="inline-flex items-center justify-center gap-3">
              <img src={logoImg.url} alt="" width={120} height={48} decoding="async" className="h-12 w-auto" />
              <span className="sr-only">{BRAND.name}</span>
            </Link>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-primary">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {isSignup
              ? "Join thousands of families eating cleaner every day."
              : "Sign in to continue where you left off."}
          </p>

          <Button
            onClick={handleGoogle}
            variant="outline"
            className="w-full mt-8 h-11 gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"/></svg>
            Continue with Google
          </Button>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> OR CONTINUE WITH EMAIL <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleEmail} className="space-y-4">
            {isSignup && (
              <div>
                <Label htmlFor="full_name">Full name</Label>
                <Input id="full_name" name="full_name" placeholder="Your name" className="h-11 mt-1.5" required />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" className="h-11 mt-1.5" required />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {!isSignup && <span className="text-xs text-muted-foreground">Min. 6 characters</span>}
              </div>
              <Input id="password" name="password" type="password" placeholder="••••••••" className="h-11 mt-1.5" minLength={6} required />
            </div>
            <Button type="submit" disabled={loading} className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground">
              {loading ? "Please wait…" : isSignup ? "Create account" : "Sign in"}
            </Button>
          </form>

          <p className="text-center text-sm mt-8 text-muted-foreground">
            {isSignup ? "Already have an account?" : "New to The Variety Nutrition?"}{" "}
            <Link to="/auth" search={{ mode: isSignup ? "signin" : "signup" }} className="text-accent font-medium hover:underline">
              {isSignup ? "Sign in" : "Create one"}
            </Link>
          </p>

          <p className="text-center text-xs text-muted-foreground mt-6">
            By continuing you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
