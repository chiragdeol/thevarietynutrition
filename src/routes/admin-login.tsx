import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, useEffect } from "react";
import { adminLogin, adminStatus } from "@/lib/admin-gate.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/admin-login")({
  ssr: false,
  head: () => ({ meta: [{ title: "Admin Login — The Variety Nutrition" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const router = useRouter();
  const login = useServerFn(adminLogin);
  const status = useServerFn(adminStatus);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    status({}).then((s) => {
      if (s.unlocked) router.navigate({ to: "/admin" });
    });
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await login({ data: { password } });
    setLoading(false);
    if (res.ok) {
      await router.navigate({ to: "/admin" });
    } else {
      setError(res.reason ?? "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/40 to-background px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Lock className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-serif text-3xl text-primary">Admin Access</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter the admin password to manage the store.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              autoFocus
            />
          </div>
          {error && (
            <div className="text-sm text-destructive bg-destructive/10 rounded-md px-3 py-2">
              {error}
            </div>
          )}
          <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground">
            {loading ? "Signing in…" : "Sign in to Admin"}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-6">
          This area is restricted. All actions are logged.
        </p>
      </div>
    </div>
  );
}
