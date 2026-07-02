import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { formatINR } from "@/lib/format";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/account")({
  head: () => ({ meta: [{ title: "My Account — The Variety Nutrition" }] }),
  component: Account,
});

function Account() {
  const { user, signOut } = useAuth();
  const { data: orders } = useQuery({
    queryKey: ["my-orders", user?.id],
    queryFn: async () => {
      const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
      return data ?? [];
    },
    enabled: !!user,
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
        <div>
          <h1 className="font-serif text-4xl text-primary">My Account</h1>
          <p className="text-muted-foreground text-sm mt-1">{user?.email}</p>
        </div>
        <Button variant="outline" onClick={signOut}>Sign out</Button>
      </div>

      <h2 className="font-serif text-2xl mb-4">Orders</h2>
      {!orders || orders.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-10 text-center">
          <p className="text-muted-foreground">You haven't placed any orders yet.</p>
          <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"><Link to="/products">Start shopping</Link></Button>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <Link key={o.id} to="/order/$id" params={{ id: o.id }} className="block bg-card border border-border rounded-xl p-4 hover:border-accent transition-colors">
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <div className="font-mono font-semibold">{o.order_number}</div>
                  <div className="text-xs text-muted-foreground">{new Date(o.created_at).toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary">{formatINR(o.total_cents)}</div>
                  <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-secondary">{o.status}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
