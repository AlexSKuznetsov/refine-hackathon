import { createClient } from "@refinedev/supabase";

const {SUPABASE_KEY, SUPABASE_URL} = process.env

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
