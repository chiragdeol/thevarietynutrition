import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  adminStatus,
  adminLogout,
  adminListOrders,
  adminUpdateOrderStatus,
  adminListCategories,
  adminSaveCategory,
  adminDeleteCategory,
  adminListProducts,
  adminSaveProduct,
  adminDeleteProduct,
  adminListCoupons,
  adminSaveCoupon,
  adminDeleteCoupon,
  adminListPosts,
  adminCreatePost,
  adminDeletePost,
  adminListTestimonials,
  adminSaveTestimonial,
  adminDeleteTestimonial,
  adminListReels,
  adminSaveReel,
  adminDeleteReel,
  adminUploadMedia,
  adminOrderCount,
  adminSetMediaActive,
  adminReorderMedia,
} from "@/lib/admin-gate.functions";
import { Button } from "@/components/ui/button";
import { shiprocketBookShipment } from "@/lib/shiprocket.server";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { formatINR } from "@/lib/format";
import { LogOut, Bell, BellOff, Upload, ArrowUp, ArrowDown, Eye, EyeOff } from "lucide-react";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({ meta: [{ title: "Admin — The Variety Nutrition" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminPage,
});

function AdminPage() {
  const router = useRouter();
  const status = useServerFn(adminStatus);
  const logout = useServerFn(adminLogout);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    status({}).then((s) => {
      if (!s.unlocked) router.navigate({ to: "/admin-login" });
      else setChecking(false);
    });
  }, []);

  async function handleLogout() {
    await logout({});
    router.navigate({ to: "/admin-login" });
  }

  if (checking) return <div className="p-20 text-center text-muted-foreground">Checking access…</div>;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="font-serif text-4xl text-primary">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground">Manage products, categories, coupons, orders, reels, testimonials and blog.</p>
        </div>
        <div className="flex items-center gap-2">
          <OrderNotifier />
          <Button variant="outline" onClick={handleLogout}><LogOut className="w-4 h-4 mr-2" /> Sign out</Button>
        </div>
      </div>
      <Tabs defaultValue="orders">
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="coupons">Coupons</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="reels">Reels</TabsTrigger>
          <TabsTrigger value="posts">Blog Posts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="orders"><OrdersAdmin /></TabsContent>
        <TabsContent value="products"><ProductsAdmin /></TabsContent>
        <TabsContent value="categories"><CategoriesAdmin /></TabsContent>
        <TabsContent value="coupons"><CouponsAdmin /></TabsContent>
        <TabsContent value="testimonials"><TestimonialsAdmin /></TabsContent>
        <TabsContent value="reels"><ReelsAdmin /></TabsContent>
        <TabsContent value="posts"><PostsAdmin /></TabsContent>
        <TabsContent value="settings"><NotificationSettings /></TabsContent>
      </Tabs>
    </div>
  );
}

// ---------- Order notification bell (polls for new orders + plays alarm) ----------
// ---------- Notification settings (shared via localStorage + custom event) ----------
const NOTIF_KEY = "hn_admin_last_order_count";
const SETTINGS_KEY = "hn_admin_notif_settings_v1";
const SETTINGS_EVENT = "hn-admin-notif-settings-changed";

type NotifSettings = {
  soundOn: boolean;
  browserOn: boolean;
  toastOn: boolean;
  pollSeconds: number; // 10..300
  quietStart: number;  // 0..23, -1 disabled
  quietEnd: number;    // 0..23
};
const DEFAULT_SETTINGS: NotifSettings = {
  soundOn: true, browserOn: true, toastOn: true, pollSeconds: 15,
  quietStart: -1, quietEnd: -1,
};

function readSettings(): NotifSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch { return DEFAULT_SETTINGS; }
}
function writeSettings(s: NotifSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  window.dispatchEvent(new CustomEvent(SETTINGS_EVENT));
}
function inQuietHours(s: NotifSettings): boolean {
  if (s.quietStart < 0 || s.quietEnd < 0) return false;
  const h = new Date().getHours();
  return s.quietStart <= s.quietEnd
    ? h >= s.quietStart && h < s.quietEnd
    : h >= s.quietStart || h < s.quietEnd;
}
function useNotifSettings() {
  const [s, setS] = useState<NotifSettings>(DEFAULT_SETTINGS);
  useEffect(() => {
    setS(readSettings());
    const handler = () => setS(readSettings());
    window.addEventListener(SETTINGS_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(SETTINGS_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return s;
}

function playAlarm() {
  try {
    const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const now = ctx.currentTime;
    const beeps = [0, 0.25, 0.5];
    beeps.forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now + offset);
      gain.gain.setValueAtTime(0.0001, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.4, now + offset + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.18);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + 0.2);
    });
    setTimeout(() => ctx.close?.(), 1500);
  } catch {}
}

function OrderNotifier() {
  const qc = useQueryClient();
  const count = useServerFn(adminOrderCount);
  const lastRef = useRef<number | null>(null);
  const settings = useNotifSettings();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(NOTIF_KEY);
      if (stored) lastRef.current = parseInt(stored, 10);
    } catch {}
    if (typeof Notification !== "undefined" && Notification.permission === "default" && settings.browserOn) {
      Notification.requestPermission().catch(() => {});
    }
  }, [settings.browserOn]);

  const { data } = useQuery({
    queryKey: ["adm-order-count"],
    queryFn: () => count({}),
    refetchInterval: Math.max(10, settings.pollSeconds) * 1000,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (!data) return;
    const c = data.count;
    if (lastRef.current === null) {
      lastRef.current = c;
      localStorage.setItem(NOTIF_KEY, String(c));
      return;
    }
    if (c > lastRef.current) {
      const diff = c - lastRef.current;
      const quiet = inQuietHours(settings);
      if (settings.toastOn) toast.success(`🔔 ${diff} new order${diff > 1 ? "s" : ""} received!`);
      if (settings.soundOn && !quiet) playAlarm();
      if (settings.browserOn && !quiet && typeof Notification !== "undefined" && Notification.permission === "granted") {
        try { new Notification("New order — The Variety Nutrition", { body: `${diff} new order${diff > 1 ? "s" : ""} received.` }); } catch {}
      }
      qc.invalidateQueries({ queryKey: ["adm-orders"] });
      lastRef.current = c;
      localStorage.setItem(NOTIF_KEY, String(c));
    }
  }, [data, settings, qc]);

  const anyOn = settings.soundOn || settings.browserOn || settings.toastOn;
  return (
    <div
      className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 h-9 text-sm"
      title={anyOn ? "Notifications on" : "All notifications off"}
    >
      {anyOn ? <Bell className="w-4 h-4 text-accent" /> : <BellOff className="w-4 h-4 text-muted-foreground" />}
      <span className="hidden sm:inline">{data?.count ?? 0} orders</span>
    </div>
  );
}

function NotificationSettings() {
  const [s, setS] = useState<NotifSettings>(DEFAULT_SETTINGS);
  useEffect(() => { setS(readSettings()); }, []);
  function update<K extends keyof NotifSettings>(key: K, val: NotifSettings[K]) {
    const next = { ...s, [key]: val };
    setS(next);
    writeSettings(next);
  }
  async function requestBrowser() {
    if (typeof Notification === "undefined") { toast.error("Browser notifications not supported"); return; }
    const perm = await Notification.requestPermission();
    if (perm === "granted") { toast.success("Browser notifications enabled"); update("browserOn", true); }
    else toast.error("Permission denied");
  }
  const perm = typeof Notification !== "undefined" ? Notification.permission : "unsupported";
  return (
    <div className="mt-6 max-w-2xl space-y-4">
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <div>
          <h2 className="font-semibold text-lg">New order alerts</h2>
          <p className="text-sm text-muted-foreground">Choose how you're notified when new orders come in.</p>
        </div>
        <label className="flex items-center justify-between gap-3 py-2 border-t border-border">
          <span><div className="font-medium">Alarm sound</div><div className="text-xs text-muted-foreground">Play a 3-beep alarm on new orders</div></span>
          <input type="checkbox" checked={s.soundOn} onChange={(e) => update("soundOn", e.target.checked)} className="w-5 h-5" />
        </label>
        <label className="flex items-center justify-between gap-3 py-2 border-t border-border">
          <span><div className="font-medium">Toast notification</div><div className="text-xs text-muted-foreground">Show an in-page toast alert</div></span>
          <input type="checkbox" checked={s.toastOn} onChange={(e) => update("toastOn", e.target.checked)} className="w-5 h-5" />
        </label>
        <div className="flex items-center justify-between gap-3 py-2 border-t border-border">
          <span><div className="font-medium">Browser notification</div><div className="text-xs text-muted-foreground">System-level pop-up (permission: {perm})</div></span>
          <div className="flex items-center gap-2">
            {perm !== "granted" && <Button size="sm" variant="outline" onClick={requestBrowser}>Enable</Button>}
            <input type="checkbox" checked={s.browserOn} onChange={(e) => update("browserOn", e.target.checked)} className="w-5 h-5" />
          </div>
        </div>
        <div className="py-2 border-t border-border">
          <Label>Check for new orders every</Label>
          <div className="flex items-center gap-2 mt-1">
            <Input type="number" min={10} max={300} value={s.pollSeconds} onChange={(e) => update("pollSeconds", Math.max(10, Math.min(300, parseInt(e.target.value || "15", 10))))} className="w-28" />
            <span className="text-sm text-muted-foreground">seconds (10–300)</span>
          </div>
        </div>
        <div className="py-2 border-t border-border">
          <Label>Quiet hours (mute sound & browser pop-ups)</Label>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <select value={s.quietStart} onChange={(e) => update("quietStart", parseInt(e.target.value, 10))} className="border border-input bg-background rounded-md h-9 px-2 text-sm">
              <option value={-1}>Off</option>
              {Array.from({ length: 24 }, (_, i) => <option key={i} value={i}>{String(i).padStart(2, "0")}:00</option>)}
            </select>
            <span className="text-sm text-muted-foreground">to</span>
            <select value={s.quietEnd} onChange={(e) => update("quietEnd", parseInt(e.target.value, 10))} className="border border-input bg-background rounded-md h-9 px-2 text-sm">
              <option value={-1}>Off</option>
              {Array.from({ length: 24 }, (_, i) => <option key={i} value={i}>{String(i).padStart(2, "0")}:00</option>)}
            </select>
          </div>
        </div>
        <div className="pt-2 border-t border-border flex gap-2">
          <Button variant="outline" onClick={() => playAlarm()}>Test alarm</Button>
          <Button variant="outline" onClick={() => { writeSettings(DEFAULT_SETTINGS); setS(DEFAULT_SETTINGS); toast.success("Reset to defaults"); }}>Reset defaults</Button>
        </div>
      </div>
    </div>
  );
}

// ---------- Row actions used by Testimonials + Reels ----------
function MediaRowActions({ table, row, queryKey }: { table: "testimonials" | "reels"; row: any; queryKey: string }) {
  const qc = useQueryClient();
  const setActive = useServerFn(adminSetMediaActive);
  const reorder = useServerFn(adminReorderMedia);
  const [busy, setBusy] = useState(false);
  async function run(fn: () => Promise<any>, okMsg?: string) {
    setBusy(true);
    try { await fn(); if (okMsg) toast.success(okMsg); qc.invalidateQueries({ queryKey: [queryKey] }); }
    catch (err: any) { toast.error(err.message || "Failed"); }
    finally { setBusy(false); }
  }
  return (
    <div className="flex gap-1">
      <Button size="sm" variant="outline" disabled={busy} title="Move up" onClick={() => run(() => reorder({ data: { table, id: row.id, direction: "up" } }))}>
        <ArrowUp className="w-4 h-4" />
      </Button>
      <Button size="sm" variant="outline" disabled={busy} title="Move down" onClick={() => run(() => reorder({ data: { table, id: row.id, direction: "down" } }))}>
        <ArrowDown className="w-4 h-4" />
      </Button>
      {row.active ? (
        <Button size="sm" variant="outline" disabled={busy} title="Unpublish" onClick={() => run(() => setActive({ data: { table, id: row.id, active: false } }), "Unpublished")}>
          <EyeOff className="w-4 h-4" />
        </Button>
      ) : (
        <Button size="sm" className="bg-accent text-accent-foreground h-8 px-2" disabled={busy} title="Approve & publish" onClick={() => run(() => setActive({ data: { table, id: row.id, active: true } }), "Published")}>
          <Eye className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}

// ---------- Orders ----------
function OrdersAdmin() {
  const qc = useQueryClient();
  const list = useServerFn(adminListOrders);
  const update = useServerFn(adminUpdateOrderStatus);
  const bookShipment = useServerFn(shiprocketBookShipment);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const { data } = useQuery({ queryKey: ["adm-orders"], queryFn: () => list({}) });

  async function change(id: string, status: string) {
    try { await update({ data: { id, status } }); toast.success("Updated"); qc.invalidateQueries({ queryKey: ["adm-orders"] }); }
    catch (e: any) { toast.error(e.message); }
  }

  async function handleBookShipment(id: string) {
    setBookingId(id);
    try {
      await bookShipment({ data: id });
      toast.success("Shipment booked with Shiprocket!");
      qc.invalidateQueries({ queryKey: ["adm-orders"] });
    } catch (e: any) {
      toast.error(e.message || "Failed to book shipment");
    } finally {
      setBookingId(null);
    }
  }
  return (
    <div className="mt-6 space-y-3">
      {!data?.length && <div className="text-sm text-muted-foreground">No orders yet.</div>}
      {data?.map((o: any) => {
        const isOpen = expanded === o.id;
        const items: any[] = o.order_items ?? [];
        return (
          <div key={o.id} className="bg-card border border-border rounded-xl p-4">
            <div className="flex flex-wrap justify-between items-center gap-3">
              <div className="min-w-0">
                <div className="font-mono font-semibold">{o.order_number}</div>
                <div className="text-xs text-muted-foreground">{new Date(o.created_at).toLocaleString()} · {o.customer_name} · {items.length} item{items.length !== 1 ? "s" : ""}</div>
              </div>
              <div className="font-semibold">{formatINR(o.total_cents)}</div>
              <Select value={o.status} onValueChange={(v) => change(o.id, v)}>
                <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["pending", "paid", "shipped", "delivered", "cancelled"].map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button size="sm" variant="outline" onClick={() => setExpanded(isOpen ? null : o.id)}>
                {isOpen ? "Hide details" : "View details"}
              </Button>
            </div>

            {isOpen && (
              <div className="mt-4 grid md:grid-cols-2 gap-4 border-t border-border pt-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Customer</h4>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-muted-foreground">Name:</span> <span className="font-medium">{o.customer_name}</span></div>
                    <div><span className="text-muted-foreground">Email:</span> <a href={`mailto:${o.customer_email}`} className="font-medium text-accent hover:underline">{o.customer_email}</a></div>
                    {o.customer_phone && (
                      <div><span className="text-muted-foreground">Phone:</span> <a href={`tel:${o.customer_phone}`} className="font-medium text-accent hover:underline">{o.customer_phone}</a> · <a href={`https://wa.me/${o.customer_phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="text-xs text-emerald-600 hover:underline">WhatsApp</a></div>
                    )}
                    {o.notes && <div className="pt-2"><span className="text-muted-foreground">Notes:</span> <span className="italic">{o.notes}</span></div>}

                    {/* Shiprocket Section */}
                    <div className="mt-4 pt-4 border-t border-border/60">
                      <h5 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground mb-2">Shiprocket Courier</h5>
                      {o.shiprocket_shipment_id ? (
                        <div className="space-y-1">
                          <div>
                            <span className="text-muted-foreground">Shipment ID:</span>{" "}
                            <span className="font-mono font-medium">{o.shiprocket_shipment_id}</span>
                          </div>
                          {o.shiprocket_order_id && (
                            <div>
                              <span className="text-muted-foreground">Shiprocket Order ID:</span>{" "}
                              <span className="font-mono font-medium">{o.shiprocket_order_id}</span>
                            </div>
                          )}
                          <div className="pt-1">
                            <a
                              href={`https://shiprocket.co/tracking/${o.shiprocket_shipment_id}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs text-accent hover:underline font-medium"
                            >
                              Track on Shiprocket Dashboard
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground">Not shipped yet.</p>
                          {o.status === "paid" && (
                            <Button
                              size="sm"
                              type="button"
                              disabled={bookingId === o.id}
                              onClick={() => handleBookShipment(o.id)}
                              className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs h-8"
                            >
                              {bookingId === o.id ? "Booking..." : "Ship via Shiprocket"}
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <h4 className="font-semibold mt-4 mb-2 text-sm uppercase tracking-wide text-muted-foreground">Shipping address</h4>
                  <div className="text-sm leading-relaxed">
                    {o.shipping_address}<br />
                    {o.shipping_city}{o.shipping_state ? `, ${o.shipping_state}` : ""} {o.shipping_zip}<br />
                    {o.shipping_country}
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Products ({items.length})</h4>
                  <div className="space-y-3">
                    {items.map((it) => (
                      <div key={it.id} className="flex items-center gap-3">
                        {it.product_image && <img src={it.product_image} alt="" loading="lazy" decoding="async" className="w-12 h-12 rounded object-cover shrink-0" />}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{it.product_name}</div>
                          <div className="text-xs text-muted-foreground">{formatINR(it.unit_price_cents)} × {it.quantity}</div>
                        </div>
                        <div className="text-sm font-semibold shrink-0">{formatINR(it.line_total_cents)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-border space-y-1 text-sm">
                    <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>{formatINR(o.subtotal_cents)}</span></div>
                    <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>{o.shipping_cents === 0 ? "Free" : formatINR(o.shipping_cents)}</span></div>
                    <div className="flex justify-between font-bold text-base pt-1"><span>Total</span><span>{formatINR(o.total_cents)}</span></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---------- Categories ----------
function CategoriesAdmin() {
  const qc = useQueryClient();
  const list = useServerFn(adminListCategories);
  const save = useServerFn(adminSaveCategory);
  const del = useServerFn(adminDeleteCategory);
  const [editing, setEditing] = useState<string | null>(null);
  const { data } = useQuery({ queryKey: ["adm-cats"], queryFn: () => list({}) });

  async function submit(e: React.FormEvent<HTMLFormElement>, id?: string) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const payload = {
      name: fd.name, slug: fd.slug, description: fd.description || null,
      image_url: fd.image_url || null, sort_order: parseInt(fd.sort_order || "0", 10),
    };
    try { await save({ data: { id, payload } }); toast.success("Saved"); setEditing(null); qc.invalidateQueries({ queryKey: ["adm-cats"] }); }
    catch (err: any) { toast.error(err.message); }
  }
  async function remove(id: string) {
    if (!confirm("Delete this category?")) return;
    try { await del({ data: { id } }); toast.success("Deleted"); qc.invalidateQueries({ queryKey: ["adm-cats"] }); }
    catch (err: any) { toast.error(err.message); }
  }
  const Form = ({ c, id }: { c?: any; id?: string }) => (
    <form onSubmit={(e) => submit(e, id)} className="grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4">
      <Input name="name" placeholder="Name" defaultValue={c?.name ?? ""} required />
      <Input name="slug" placeholder="slug" defaultValue={c?.slug ?? ""} required />
      <Input name="image_url" placeholder="Image URL" defaultValue={c?.image_url ?? ""} />
      <Input name="sort_order" type="number" placeholder="Sort order" defaultValue={c?.sort_order ?? 0} />
      <Textarea name="description" placeholder="Description" defaultValue={c?.description ?? ""} className="sm:col-span-2" rows={2} />
      <div className="sm:col-span-2 flex gap-2">
        <Button type="submit" className="bg-accent text-accent-foreground">Save</Button>
        {id && <Button type="button" variant="outline" onClick={() => setEditing(null)}>Cancel</Button>}
      </div>
    </form>
  );
  return (
    <div className="mt-6 space-y-4">
      <details className="bg-card border border-border rounded-xl p-4">
        <summary className="cursor-pointer font-semibold">+ Add new category</summary>
        <div className="mt-4"><Form /></div>
      </details>
      {data?.map((c: any) => (
        <div key={c.id} className="bg-card border border-border rounded-xl p-4">
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {c.image_url && <img src={c.image_url} alt="" loading="lazy" decoding="async" className="w-12 h-12 rounded object-cover" />}
              <div className="min-w-0">
                <div className="font-medium truncate">{c.name}</div>
                <div className="text-xs text-muted-foreground">/{c.slug} · order {c.sort_order}</div>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button size="sm" variant="outline" onClick={() => setEditing(editing === c.id ? null : c.id)}>Edit</Button>
              <Button size="sm" variant="outline" onClick={() => remove(c.id)}>Delete</Button>
            </div>
          </div>
          {editing === c.id && <div className="mt-4"><Form c={c} id={c.id} /></div>}
        </div>
      ))}
    </div>
  );
}

// ---------- Products ----------
function ProductsAdmin() {
  const qc = useQueryClient();
  const list = useServerFn(adminListProducts);
  const listCats = useServerFn(adminListCategories);
  const save = useServerFn(adminSaveProduct);
  const del = useServerFn(adminDeleteProduct);
  const [editing, setEditing] = useState<string | null>(null);
  const { data } = useQuery({ queryKey: ["adm-prods"], queryFn: () => list({}) });
  const { data: cats } = useQuery({ queryKey: ["adm-cats"], queryFn: () => listCats({}) });

  async function submit(e: React.FormEvent<HTMLFormElement>, id?: string) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const payload = {
      slug: fd.slug, name: fd.name,
      short_description: fd.short_description || null,
      description: fd.description || null,
      price_cents: Math.round(parseFloat(fd.price || "0") * 100),
      compare_at_price_cents: fd.compare_at ? Math.round(parseFloat(fd.compare_at) * 100) : null,
      category_id: fd.category_id || null,
      stock: parseInt(fd.stock || "0", 10),
      image_url: fd.image_url || null,
      active: fd.active === "on",
      featured: fd.featured === "on",
    };
    try { await save({ data: { id, payload } }); toast.success("Saved"); setEditing(null); qc.invalidateQueries({ queryKey: ["adm-prods"] }); }
    catch (err: any) { toast.error(err.message); }
  }
  async function remove(id: string) {
    if (!confirm("Delete this product?")) return;
    try { await del({ data: { id } }); toast.success("Deleted"); qc.invalidateQueries({ queryKey: ["adm-prods"] }); }
    catch (err: any) { toast.error(err.message); }
  }
  const Form = ({ p, id }: { p?: any; id?: string }) => (
    <form onSubmit={(e) => submit(e, id)} className="grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4">
      <Input name="name" placeholder="Name" defaultValue={p?.name ?? ""} required />
      <Input name="slug" placeholder="slug" defaultValue={p?.slug ?? ""} required />
      <Input name="short_description" placeholder="Short description" defaultValue={p?.short_description ?? ""} />
      <Input name="image_url" placeholder="Image URL" defaultValue={p?.image_url ?? ""} />
      <Input name="price" type="number" step="0.01" placeholder="Price (₹)" defaultValue={p?.price_cents ? p.price_cents / 100 : ""} required />
      <Input name="compare_at" type="number" step="0.01" placeholder="Compare at (₹)" defaultValue={p?.compare_at_price_cents ? p.compare_at_price_cents / 100 : ""} />
      <Input name="stock" type="number" placeholder="Stock" defaultValue={p?.stock ?? 0} required />
      <select name="category_id" defaultValue={p?.category_id ?? ""} className="rounded-md border border-input bg-background px-3 py-2 text-sm">
        <option value="">— No category —</option>
        {cats?.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <Textarea name="description" placeholder="Long description" defaultValue={p?.description ?? ""} className="sm:col-span-2" rows={3} />
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="active" defaultChecked={p ? p.active : true} /> Active</label>
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="featured" defaultChecked={p?.featured ?? false} /> Featured</label>
      <div className="sm:col-span-2 flex gap-2">
        <Button type="submit" className="bg-accent text-accent-foreground">Save</Button>
        {id && <Button type="button" variant="outline" onClick={() => setEditing(null)}>Cancel</Button>}
      </div>
    </form>
  );
  return (
    <div className="mt-6 space-y-4">
      <details className="bg-card border border-border rounded-xl p-4">
        <summary className="cursor-pointer font-semibold">+ Add new product</summary>
        <div className="mt-4"><Form /></div>
      </details>
      {data?.map((p: any) => (
        <div key={p.id} className="bg-card border border-border rounded-xl p-4">
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {p.image_url && <img src={p.image_url} alt="" loading="lazy" decoding="async" className="w-12 h-12 rounded object-cover" />}
              <div className="min-w-0">
                <div className="font-medium truncate">{p.name}</div>
                <div className="text-xs text-muted-foreground">{formatINR(p.price_cents)} · Stock {p.stock} · {p.active ? "Active" : "Hidden"}</div>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button size="sm" variant="outline" onClick={() => setEditing(editing === p.id ? null : p.id)}>Edit</Button>
              <Button size="sm" variant="outline" onClick={() => remove(p.id)}>Delete</Button>
            </div>
          </div>
          {editing === p.id && <div className="mt-4"><Form p={p} id={p.id} /></div>}
        </div>
      ))}
    </div>
  );
}

// ---------- Coupons ----------
function CouponsAdmin() {
  const qc = useQueryClient();
  const list = useServerFn(adminListCoupons);
  const save = useServerFn(adminSaveCoupon);
  const del = useServerFn(adminDeleteCoupon);
  const [editing, setEditing] = useState<string | null>(null);
  const { data } = useQuery({ queryKey: ["adm-coupons"], queryFn: () => list({}) });

  async function submit(e: React.FormEvent<HTMLFormElement>, id?: string) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const payload = {
      code: fd.code.toUpperCase(),
      description: fd.description || null,
      discount_type: fd.discount_type,
      discount_value: parseFloat(fd.discount_value || "0"),
      min_order_cents: Math.round(parseFloat(fd.min_order || "0") * 100),
      max_uses: fd.max_uses ? parseInt(fd.max_uses, 10) : null,
      active: fd.active === "on",
      expires_at: fd.expires_at || null,
    };
    try { await save({ data: { id, payload } }); toast.success("Saved"); setEditing(null); qc.invalidateQueries({ queryKey: ["adm-coupons"] }); }
    catch (err: any) { toast.error(err.message); }
  }
  async function remove(id: string) {
    if (!confirm("Delete this coupon?")) return;
    try { await del({ data: { id } }); toast.success("Deleted"); qc.invalidateQueries({ queryKey: ["adm-coupons"] }); }
    catch (err: any) { toast.error(err.message); }
  }
  const Form = ({ c, id }: { c?: any; id?: string }) => (
    <form onSubmit={(e) => submit(e, id)} className="grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4">
      <Input name="code" placeholder="CODE (e.g. HEALTHY15)" defaultValue={c?.code ?? ""} required />
      <select name="discount_type" defaultValue={c?.discount_type ?? "percent"} className="rounded-md border border-input bg-background px-3 py-2 text-sm">
        <option value="percent">Percent (%)</option>
        <option value="flat">Flat (₹)</option>
      </select>
      <Input name="discount_value" type="number" step="0.01" placeholder="Value" defaultValue={c?.discount_value ?? ""} required />
      <Input name="min_order" type="number" step="0.01" placeholder="Min order (₹)" defaultValue={c ? Number(c.min_order_cents) / 100 : ""} />
      <Input name="max_uses" type="number" placeholder="Max uses (blank = unlimited)" defaultValue={c?.max_uses ?? ""} />
      <Input name="expires_at" type="datetime-local" defaultValue={c?.expires_at ? new Date(c.expires_at).toISOString().slice(0,16) : ""} />
      <Textarea name="description" placeholder="Description" defaultValue={c?.description ?? ""} className="sm:col-span-2" rows={2} />
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="active" defaultChecked={c ? c.active : true} /> Active</label>
      <div className="sm:col-span-2 flex gap-2">
        <Button type="submit" className="bg-accent text-accent-foreground">Save</Button>
        {id && <Button type="button" variant="outline" onClick={() => setEditing(null)}>Cancel</Button>}
      </div>
    </form>
  );
  return (
    <div className="mt-6 space-y-4">
      <details className="bg-card border border-border rounded-xl p-4">
        <summary className="cursor-pointer font-semibold">+ Add new coupon</summary>
        <div className="mt-4"><Form /></div>
      </details>
      {data?.map((c: any) => (
        <div key={c.id} className="bg-card border border-border rounded-xl p-4">
          <div className="flex justify-between items-center gap-3 flex-wrap">
            <div className="min-w-0">
              <div className="font-mono font-bold text-lg">{c.code}</div>
              <div className="text-xs text-muted-foreground">
                {c.discount_type === "percent" ? `${c.discount_value}% off` : `₹${c.discount_value} off`}
                {c.min_order_cents > 0 && ` · min ₹${c.min_order_cents / 100}`}
                {" · "}used {c.times_used}{c.max_uses ? `/${c.max_uses}` : ""}
                {" · "}{c.active ? "Active" : "Inactive"}
                {c.expires_at && ` · expires ${new Date(c.expires_at).toLocaleDateString()}`}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button size="sm" variant="outline" onClick={() => setEditing(editing === c.id ? null : c.id)}>Edit</Button>
              <Button size="sm" variant="outline" onClick={() => remove(c.id)}>Delete</Button>
            </div>
          </div>
          {editing === c.id && <div className="mt-4"><Form c={c} id={c.id} /></div>}
        </div>
      ))}
    </div>
  );
}

// ---------- Posts ----------
function PostsAdmin() {
  const qc = useQueryClient();
  const list = useServerFn(adminListPosts);
  const create = useServerFn(adminCreatePost);
  const del = useServerFn(adminDeletePost);
  const { data } = useQuery({ queryKey: ["adm-posts"], queryFn: () => list({}) });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const payload = {
      slug: fd.slug, title: fd.title, excerpt: fd.excerpt, content: fd.content,
      cover_image: fd.cover_image || null, author_name: fd.author_name || null,
    };
    try { await create({ data: { payload } }); toast.success("Published"); form.reset(); qc.invalidateQueries({ queryKey: ["adm-posts"] }); }
    catch (err: any) { toast.error(err.message); }
  }
  async function remove(id: string) {
    if (!confirm("Delete post?")) return;
    try { await del({ data: { id } }); toast.success("Deleted"); qc.invalidateQueries({ queryKey: ["adm-posts"] }); }
    catch (err: any) { toast.error(err.message); }
  }
  return (
    <div className="mt-6 space-y-4">
      <details className="bg-card border border-border rounded-xl p-4">
        <summary className="cursor-pointer font-semibold">+ New post</summary>
        <form onSubmit={submit} className="mt-4 grid gap-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <div><Label>Title</Label><Input name="title" required /></div>
            <div><Label>Slug</Label><Input name="slug" required /></div>
          </div>
          <div><Label>Cover image URL</Label><Input name="cover_image" /></div>
          <div><Label>Author</Label><Input name="author_name" /></div>
          <div><Label>Excerpt</Label><Input name="excerpt" /></div>
          <div><Label>Content (Markdown)</Label><Textarea name="content" rows={8} required /></div>
          <Button type="submit" className="bg-accent text-accent-foreground w-fit">Publish</Button>
        </form>
      </details>
      {data?.map((p: any) => (
        <div key={p.id} className="bg-card border border-border rounded-xl p-4 flex justify-between items-center gap-3">
          <div className="min-w-0">
            <div className="font-medium truncate">{p.title}</div>
            <div className="text-xs text-muted-foreground">/{p.slug}</div>
          </div>
          <Button size="sm" variant="outline" onClick={() => remove(p.id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
}

// ---------- Media upload helper ----------
function MediaUploadField({ value, onChange, accept = "video/*" }: { value: string; onChange: (url: string) => void; accept?: string }) {
  const upload = useServerFn(adminUploadMedia);
  const [busy, setBusy] = useState(false);

  async function handleFile(file: File) {
    if (file.size > 50 * 1024 * 1024) {
      toast.error("File too large (max 50MB)"); return;
    }
    setBusy(true);
    try {
      const buf = await file.arrayBuffer();
      const bytes = new Uint8Array(buf);
      let bin = "";
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      const b64 = btoa(bin);
      const res = await upload({ data: { filename: file.name, contentType: file.type || "application/octet-stream", dataBase64: b64 } });
      onChange(res.url);
      toast.success("Uploaded");
    } catch (e: any) {
      toast.error(e.message || "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Paste URL or upload…" />
      <label className={`inline-flex items-center gap-1 rounded-md border border-input bg-background px-3 h-9 text-sm cursor-pointer hover:bg-secondary shrink-0 ${busy ? "opacity-50 pointer-events-none" : ""}`}>
        <Upload className="w-4 h-4" /> {busy ? "…" : "Upload"}
        <input type="file" accept={accept} className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }} />
      </label>
    </div>
  );
}

// ---------- Testimonials ----------
function TestimonialsAdmin() {
  const qc = useQueryClient();
  const list = useServerFn(adminListTestimonials);
  const save = useServerFn(adminSaveTestimonial);
  const del = useServerFn(adminDeleteTestimonial);
  const [editing, setEditing] = useState<string | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const { data } = useQuery({ queryKey: ["adm-testimonials"], queryFn: () => list({}) });

  async function remove(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    try { await del({ data: { id } }); toast.success("Deleted"); qc.invalidateQueries({ queryKey: ["adm-testimonials"] }); }
    catch (err: any) { toast.error(err.message); }
  }

  function TestimonialForm({ t, id, onDone }: { t?: any; id?: string; onDone: () => void }) {
    const [videoUrl, setVideoUrl] = useState(t?.video_url ?? "");
    async function submit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
      const payload = {
        video_url: videoUrl,
        name: fd.name, city: fd.city || null, role: fd.role || null,
        caption: fd.caption || null, accent: fd.accent || "from-amber-400 to-orange-500",
        sort_order: parseInt(fd.sort_order || "0", 10),
        active: fd.active === "on",
      };
      try { await save({ data: { id, payload } }); toast.success("Saved"); onDone(); qc.invalidateQueries({ queryKey: ["adm-testimonials"] }); }
      catch (err: any) { toast.error(err.message); }
    }
    return (
      <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4">
        <div className="sm:col-span-2">
          <Label>Video (upload or URL)</Label>
          <MediaUploadField value={videoUrl} onChange={setVideoUrl} />
        </div>
        <Input name="name" placeholder="Customer name" defaultValue={t?.name ?? ""} required />
        <Input name="city" placeholder="City" defaultValue={t?.city ?? ""} />
        <Input name="role" placeholder="Role (e.g. Verified Customer)" defaultValue={t?.role ?? "Verified Customer"} />
        <Input name="accent" placeholder="Accent (Tailwind gradient)" defaultValue={t?.accent ?? "from-amber-400 to-orange-500"} />
        <Input name="sort_order" type="number" placeholder="Sort order" defaultValue={t?.sort_order ?? 0} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="active" defaultChecked={t ? t.active : true} /> Active</label>
        <Textarea name="caption" placeholder="Caption" defaultValue={t?.caption ?? ""} className="sm:col-span-2" rows={2} />
        <div className="sm:col-span-2 flex gap-2">
          <Button type="submit" className="bg-accent text-accent-foreground">Save</Button>
          {id && <Button type="button" variant="outline" onClick={onDone}>Cancel</Button>}
        </div>
      </form>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="bg-card border border-border rounded-xl p-4">
        <button onClick={() => setAddOpen((o) => !o)} className="font-semibold text-left w-full">{addOpen ? "− Close" : "+ Add new testimonial"}</button>
        {addOpen && <div className="mt-4"><TestimonialForm onDone={() => setAddOpen(false)} /></div>}
      </div>
      {!data?.length && <div className="text-sm text-muted-foreground">No testimonials yet.</div>}
      {data?.map((t: any) => (
        <div key={t.id} className="bg-card border border-border rounded-xl p-4">
          <div className="flex justify-between items-center gap-3 flex-wrap">
            <div className="flex items-center gap-3 min-w-0">
              <video src={t.video_url} muted playsInline className="w-14 h-20 rounded object-cover bg-black shrink-0" />
              <div className="min-w-0">
                <div className="font-medium truncate flex items-center gap-2">
                  {t.name}
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${t.active ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}>{t.active ? "Published" : "Draft"}</span>
                </div>
                <div className="text-xs text-muted-foreground truncate">{t.role}{t.city ? ` · ${t.city}` : ""} · order {t.sort_order}</div>
              </div>
            </div>
            <div className="flex gap-2 shrink-0 flex-wrap justify-end">
              <MediaRowActions table="testimonials" row={t} queryKey="adm-testimonials" />
              <Button size="sm" variant="outline" onClick={() => setEditing(editing === t.id ? null : t.id)}>Edit</Button>
              <Button size="sm" variant="outline" onClick={() => remove(t.id)}>Delete</Button>
            </div>
          </div>
          {editing === t.id && <div className="mt-4"><TestimonialForm t={t} id={t.id} onDone={() => setEditing(null)} /></div>}
        </div>
      ))}
    </div>
  );
}

// ---------- Reels ----------
function ReelsAdmin() {
  const qc = useQueryClient();
  const list = useServerFn(adminListReels);
  const save = useServerFn(adminSaveReel);
  const del = useServerFn(adminDeleteReel);
  const [editing, setEditing] = useState<string | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const { data } = useQuery({ queryKey: ["adm-reels"], queryFn: () => list({}) });

  async function remove(id: string) {
    if (!confirm("Delete this reel?")) return;
    try { await del({ data: { id } }); toast.success("Deleted"); qc.invalidateQueries({ queryKey: ["adm-reels"] }); }
    catch (err: any) { toast.error(err.message); }
  }

  function ReelForm({ r, id, onDone }: { r?: any; id?: string; onDone: () => void }) {
    const [videoUrl, setVideoUrl] = useState(r?.video_url ?? "");
    async function submit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
      const payload = {
        video_url: videoUrl,
        title: fd.title,
        caption: fd.caption || null,
        sort_order: parseInt(fd.sort_order || "0", 10),
        active: fd.active === "on",
      };
      try { await save({ data: { id, payload } }); toast.success("Saved"); onDone(); qc.invalidateQueries({ queryKey: ["adm-reels"] }); }
      catch (err: any) { toast.error(err.message); }
    }
    return (
      <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3 bg-secondary/60 rounded-lg p-4">
        <div className="sm:col-span-2">
          <Label>Video (upload or URL)</Label>
          <MediaUploadField value={videoUrl} onChange={setVideoUrl} />
        </div>
        <Input name="title" placeholder="Title" defaultValue={r?.title ?? ""} required />
        <Input name="sort_order" type="number" placeholder="Sort order" defaultValue={r?.sort_order ?? 0} />
        <Textarea name="caption" placeholder="Caption" defaultValue={r?.caption ?? ""} className="sm:col-span-2" rows={2} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="active" defaultChecked={r ? r.active : true} /> Active</label>
        <div className="sm:col-span-2 flex gap-2">
          <Button type="submit" className="bg-accent text-accent-foreground">Save</Button>
          {id && <Button type="button" variant="outline" onClick={onDone}>Cancel</Button>}
        </div>
      </form>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="bg-card border border-border rounded-xl p-4">
        <button onClick={() => setAddOpen((o) => !o)} className="font-semibold text-left w-full">{addOpen ? "− Close" : "+ Add new reel"}</button>
        {addOpen && <div className="mt-4"><ReelForm onDone={() => setAddOpen(false)} /></div>}
      </div>
      {!data?.length && <div className="text-sm text-muted-foreground">No reels yet.</div>}
      {data?.map((r: any) => (
        <div key={r.id} className="bg-card border border-border rounded-xl p-4">
          <div className="flex justify-between items-center gap-3 flex-wrap">
            <div className="flex items-center gap-3 min-w-0">
              <video src={r.video_url} muted playsInline className="w-14 h-20 rounded object-cover bg-black shrink-0" />
              <div className="min-w-0">
                <div className="font-medium truncate flex items-center gap-2">
                  {r.title}
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${r.active ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}>{r.active ? "Published" : "Draft"}</span>
                </div>
                <div className="text-xs text-muted-foreground truncate">order {r.sort_order}</div>
              </div>
            </div>
            <div className="flex gap-2 shrink-0 flex-wrap justify-end">
              <MediaRowActions table="reels" row={r} queryKey="adm-reels" />
              <Button size="sm" variant="outline" onClick={() => setEditing(editing === r.id ? null : r.id)}>Edit</Button>
              <Button size="sm" variant="outline" onClick={() => remove(r.id)}>Delete</Button>
            </div>
          </div>
          {editing === r.id && <div className="mt-4"><ReelForm r={r} id={r.id} onDone={() => setEditing(null)} /></div>}
        </div>
      ))}
    </div>
  );
}
