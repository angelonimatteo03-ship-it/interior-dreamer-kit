import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

export type PlacedItem = {
  uid: string;
  productId: string;
  x: number;
  y: number;
  rotation: 0 | 90 | 180 | 270;
};

export type RoomDesignInput = {
  id?: string;
  name: string;
  width: number;
  length: number;
  wallColor: string;
  items: PlacedItem[];
  isPublic: boolean;
};

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

function randomSlug() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";
  for (let i = 0; i < 10; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function createPublicClient() {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  return createClient<Database>(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

/* ------------------------------------------------------------------ */
/* Server functions                                                   */
/* ------------------------------------------------------------------ */

export const saveDesign = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: RoomDesignInput) => data)
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const payload = {
      user_id: userId,
      name: data.name || "Progetto senza nome",
      slug: randomSlug(),
      width: data.width,
      length: data.length,
      wall_color: data.wallColor,
      items: data.items as any,
      is_public: data.isPublic,
    };

    if (data.id) {
      // Verify ownership before updating.
      const { data: existing } = await supabase
        .from("room_designs")
        .select("id")
        .eq("id", data.id)
        .eq("user_id", userId)
        .single();

      if (!existing) {
        throw new Error("Design not found or not owned by user");
      }

      const { data: updated, error } = await supabase
        .from("room_designs")
        .update({
          name: payload.name,
          width: payload.width,
          length: payload.length,
          wall_color: payload.wall_color,
          items: payload.items,
          is_public: payload.is_public,
        })
        .eq("id", data.id)
        .select("id, name, slug, is_public")
        .single();

      if (error) throw error;
      return updated;
    }

    const { data: inserted, error } = await supabase
      .from("room_designs")
      .insert(payload)
      .select("id, name, slug, is_public")
      .single();

    if (error) throw error;
    return inserted;
  });

export const listMyDesigns = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("room_designs")
      .select("id, name, slug, is_public, created_at, updated_at, width, length, wall_color")
      .eq("user_id", context.userId)
      .order("updated_at", { ascending: false });

    if (error) throw error;
    return data ?? [];
  });

export const loadDesign = createServerFn({ method: "GET" })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const supabasePublic = createPublicClient();
    const { data, error } = await supabasePublic
      .from("room_designs")
      .select("id, name, slug, width, length, wall_color, items, is_public, user_id, created_at")
      .eq("slug", slug)
      .maybeSingle();

    if (error) throw error;
    if (!data || !data.is_public) {
      throw new Error("Design not found or not public");
    }
    return data;
  });

export const loadMyDesign = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((id: string) => id)
  .handler(async ({ data: id, context }) => {
    const { data, error } = await context.supabase
      .from("room_designs")
      .select("id, name, slug, width, length, wall_color, items, is_public")
      .eq("id", id)
      .eq("user_id", context.userId)
      .maybeSingle();

    if (error) throw error;
    if (!data) throw new Error("Design not found");
    return data;
  });

export const deleteDesign = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((id: string) => id)
  .handler(async ({ data: id, context }) => {
    const { error } = await context.supabase
      .from("room_designs")
      .delete()
      .eq("id", id)
      .eq("user_id", context.userId);

    if (error) throw error;
    return { ok: true };
  });

export const togglePublic = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: { id: string; isPublic: boolean }) => input)
  .handler(async ({ data, context }) => {
    const { data: updated, error } = await context.supabase
      .from("room_designs")
      .update({ is_public: data.isPublic })
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .select("id, slug, is_public")
      .single();

    if (error) throw error;
    return updated;
  });
