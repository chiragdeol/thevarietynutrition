import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const bootstrapAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userId = context.userId;

    const { data: existingAdmins } = await supabaseAdmin
      .from("user_roles")
      .select("id")
      .eq("role", "admin")
      .limit(1);

    if (existingAdmins && existingAdmins.length > 0) {
      return { ok: false, reason: "An admin already exists. Contact them for access." };
    }

    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: userId, role: "admin" })
      .single();

    if (error) {
      return { ok: false, reason: error.message };
    }

    return { ok: true };
  });
