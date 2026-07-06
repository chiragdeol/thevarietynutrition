import { createServerFn } from "@tanstack/react-start";
import { useSession, getCookie } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

type AdminSession = { unlocked?: boolean; at?: number };

function sessionConfig() {
  return {
    password: process.env.ADMIN_SESSION_SECRET || "d3b07384d113edec49eaa6238ad5ffd2cd0709d18b1c255e39660ff238c30c0f",
    name: "hn-admin-session",
    maxAge: 60 * 60 * 8, // 8 hours
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

function passwordMatches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

async function requireAdmin() {
  const session = await useSession<AdminSession>(sessionConfig());
  if (!session.data.unlocked) throw new Error("UNAUTHORIZED_ADMIN");
  return session;
}

export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const expected = process.env.ADMIN_PASSWORD || "HealthyAdmin@2026";
    if (!expected) return { ok: false as const, reason: "Admin password not configured" };
    if (!data?.password || typeof data.password !== "string") {
      return { ok: false as const, reason: "Password required" };
    }
    if (!passwordMatches(data.password, expected)) {
      return { ok: false as const, reason: "Incorrect password" };
    }
    const session = await useSession<AdminSession>(sessionConfig());
    await session.update({ unlocked: true, at: Date.now() });
    return { ok: true as const };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const adminStatus = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  return { unlocked: !!session.data.unlocked };
});

// ---------- Admin data operations (all gated) ----------

async function admin() {
  await requireAdmin();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin;
}

// ORDERS
export const adminListOrders = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const { data, error } = await sb
    .from("orders")
    .select("*, order_items(*)")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const adminUpdateOrderStatus = createServerFn({ method: "POST" })
  .inputValidator((d: { id: string; status: string }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await sb.from("orders").update({ status: data.status as never }).eq("id", data.id);
    if (error) throw new Error(error.message);

    // If status is marked as paid, trigger customer paid notification
    if (data.status === "paid") {
      const { sendOrderPaidNotification } = await import("@/lib/notifications.server");
      sendOrderPaidNotification(data.id).catch((err) => {
        console.error("Failed to send payment confirmation notification:", err);
      });
    }

    return { ok: true };
  });

// CATEGORIES
export const adminListCategories = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const { data, error } = await sb.from("categories").select("*").order("sort_order");
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const adminSaveCategory = createServerFn({ method: "POST" })
  .inputValidator((d: { id?: string; payload: Record<string, unknown> }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = data.id
      ? await sb.from("categories").update(data.payload as never).eq("id", data.id)
      : await sb.from("categories").insert(data.payload as never);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminDeleteCategory = createServerFn({ method: "POST" })
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await sb.from("categories").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// PRODUCTS
export const adminListProducts = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const { data, error } = await sb
    .from("products")
    .select("*, categories(name)")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const adminSaveProduct = createServerFn({ method: "POST" })
  .inputValidator((d: { id?: string; payload: Record<string, unknown> }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = data.id
      ? await sb.from("products").update(data.payload as never).eq("id", data.id)
      : await sb.from("products").insert(data.payload as never);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminDeleteProduct = createServerFn({ method: "POST" })
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await sb.from("products").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// COUPONS
export const adminListCoupons = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const { data, error } = await (sb as any)
    .from("coupons")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const adminSaveCoupon = createServerFn({ method: "POST" })
  .inputValidator((d: { id?: string; payload: Record<string, unknown> }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = data.id
      ? await (sb as any).from("coupons").update(data.payload).eq("id", data.id)
      : await (sb as any).from("coupons").insert(data.payload);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminDeleteCoupon = createServerFn({ method: "POST" })
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await (sb as any).from("coupons").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// BLOG POSTS
export const adminListPosts = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const { data, error } = await sb
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const adminCreatePost = createServerFn({ method: "POST" })
  .inputValidator((d: { payload: Record<string, unknown> }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await sb.from("blog_posts").insert(data.payload as never);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminDeletePost = createServerFn({ method: "POST" })
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await sb.from("blog_posts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// TESTIMONIALS
export const adminListTestimonials = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const { data, error } = await (sb as any).from("testimonials").select("*").order("sort_order");
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const adminSaveTestimonial = createServerFn({ method: "POST" })
  .inputValidator((d: { id?: string; payload: Record<string, unknown> }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = data.id
      ? await (sb as any).from("testimonials").update(data.payload).eq("id", data.id)
      : await (sb as any).from("testimonials").insert(data.payload);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminDeleteTestimonial = createServerFn({ method: "POST" })
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await (sb as any).from("testimonials").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// REELS
export const adminListReels = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const { data, error } = await (sb as any).from("reels").select("*").order("sort_order");
  if (error) throw new Error(error.message);
  return data ?? [];
});

export const adminSaveReel = createServerFn({ method: "POST" })
  .inputValidator((d: { id?: string; payload: Record<string, unknown> }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = data.id
      ? await (sb as any).from("reels").update(data.payload).eq("id", data.id)
      : await (sb as any).from("reels").insert(data.payload);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminDeleteReel = createServerFn({ method: "POST" })
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await (sb as any).from("reels").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// Toggle active + reorder helpers (shared by testimonials and reels)
type MediaTable = "testimonials" | "reels";

export const adminSetMediaActive = createServerFn({ method: "POST" })
  .inputValidator((d: { table: MediaTable; id: string; active: boolean }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { error } = await (sb as any).from(data.table).update({ active: data.active }).eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const adminReorderMedia = createServerFn({ method: "POST" })
  .inputValidator((d: { table: MediaTable; id: string; direction: "up" | "down" }) => d)
  .handler(async ({ data }) => {
    const sb = await admin();
    const { data: rows, error: e1 } = await (sb as any)
      .from(data.table)
      .select("id, sort_order")
      .order("sort_order", { ascending: true });
    if (e1) throw new Error(e1.message);
    const list: { id: string; sort_order: number }[] = rows ?? [];
    const idx = list.findIndex((r) => r.id === data.id);
    if (idx === -1) throw new Error("Not found");
    const swapIdx = data.direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= list.length) return { ok: true, noop: true };
    // Normalise sort_order values in case duplicates exist
    const a = list[idx];
    const b = list[swapIdx];
    const aOrder = a.sort_order;
    const bOrder = b.sort_order === aOrder ? aOrder + (data.direction === "up" ? -1 : 1) : b.sort_order;
    const { error: e2 } = await (sb as any).from(data.table).update({ sort_order: bOrder }).eq("id", a.id);
    if (e2) throw new Error(e2.message);
    const { error: e3 } = await (sb as any).from(data.table).update({ sort_order: aOrder }).eq("id", b.id);
    if (e3) throw new Error(e3.message);
    return { ok: true };
  });


// UPLOAD (base64 → storage bucket "media")
export const adminUploadMedia = createServerFn({ method: "POST" })
  .inputValidator((d: { filename: string; contentType: string; dataBase64: string }) => d)
  .handler(async ({ data }) => {
    await requireAdmin();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    // Ensure the "media" bucket exists (public)
    const { data: buckets } = await supabaseAdmin.storage.listBuckets();
    if (!buckets?.find((b) => b.name === "media")) {
      await supabaseAdmin.storage.createBucket("media", { public: true });
    }
    const safe = data.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${Date.now()}-${safe}`;
    const buffer = Buffer.from(data.dataBase64, "base64");
    const { error } = await supabaseAdmin.storage.from("media").upload(path, buffer, {
      contentType: data.contentType,
      upsert: false,
    });
    if (error) throw new Error(error.message);
    const { data: pub } = supabaseAdmin.storage.from("media").getPublicUrl(path);
    return { url: pub.publicUrl };
  });

// ORDER COUNT (for notification polling)
export const adminOrderCount = createServerFn({ method: "GET" }).handler(async () => {
  const sb = await admin();
  const { count, error } = await sb.from("orders").select("id", { count: "exact", head: true });
  if (error) throw new Error(error.message);
  return { count: count ?? 0 };
});

// LIST TEMP IMAGES
export const adminListTempImages = createServerFn({ method: "GET" }).handler(async () => {
  await requireAdmin();
  const fs = await import("fs");
  const path = await import("path");
  const dirPath = path.join(process.cwd(), "public/images/temp_uploads");
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const files = fs.readdirSync(dirPath);
  return files.filter((f) => /\.(png|jpg|jpeg)$/i.test(f));
});

// MAP TEMP IMAGE
export const adminMapTempImage = createServerFn({ method: "POST" })
  .inputValidator((d: { filename: string; productId: string }) => d)
  .handler(async ({ data }) => {
    await requireAdmin();
    const fs = await import("fs");
    const path = await import("path");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    
    const { data: product, error: pErr } = await supabaseAdmin
      .from("products")
      .select("slug")
      .eq("id", data.productId)
      .single();
      
    if (pErr || !product) {
      throw new Error("Product not found");
    }
    
    const ext = path.extname(data.filename) || ".png";
    const newFilename = `${product.slug}${ext}`;
    
    const srcPath = path.join(process.cwd(), "public/images/temp_uploads", data.filename);
    const destDir = path.join(process.cwd(), "public/images/products");
    const destPath = path.join(destDir, newFilename);
    
    if (!fs.existsSync(srcPath)) {
      throw new Error("Source image not found");
    }
    
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    fs.copyFileSync(srcPath, destPath);
    
    const dbUrl = `/images/products/${newFilename}`;
    const { error: uErr } = await supabaseAdmin
      .from("products")
      .update({ image_url: dbUrl })
      .eq("id", data.productId);
      
    if (uErr) {
      throw new Error(`Database Update Error: ${uErr.message}`);
    }
    
    try {
      fs.unlinkSync(srcPath);
    } catch (e) {
      console.error("Failed to delete temp file:", e);
    }
    
    return { success: true, url: dbUrl };
  });

export const adminTestSMTPSend = createServerFn({ method: "POST" })
  .handler(async () => {
    try {
      const { transporter, smtpUser } = await import("@/lib/notifications.server");
      
      // Test SMTP connection verification
      await new Promise<void>((resolve, reject) => {
        transporter.verify((error) => {
          if (error) reject(error);
          else resolve();
        });
      });

      // Send a test email to admin
      await transporter.sendMail({
        from: `"The Variety Nutrition Test" <${smtpUser}>`,
        to: "customercare@nutraj.com",
        subject: "SMTP Connection Test Success",
        text: "Congratulations! Your Hostinger SMTP email connection is configured correctly and working fine.",
      });

      return { success: true, message: `SMTP connection verified! Test email sent successfully from ${smtpUser}.` };
    } catch (e: any) {
      console.error("SMTP Test Error:", e);
      return { success: false, error: e.message || String(e) };
    }
  });

