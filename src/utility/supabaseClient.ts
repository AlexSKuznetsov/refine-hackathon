import { createClient } from "@refinedev/supabase";

const {VITE_SUPABASE_KEY, VITE_SUPABASE_URL} = import.meta.env

console.log('import.meta.env', import.meta.env);

export const supabaseClient = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
