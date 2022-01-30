import { createClient } from '@supabase/supabase-js'
import useAuthUser from '@/composables/UseAuthUser'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ⬇ setup auth state listener ⬇
supabase.auth.onAuthStateChange((event: string, session: any) => {
  // the "event" is a string indicating what trigger the state change (ie. SIGN_IN, SIGN_OUT, etc)
  // the session contains info about the current session most importanly the user dat
  const { user } = useAuthUser()

  // if the user exists in the session we're logged in
  // and we can set our user reactive ref
  user.value = session?.user || (null as any)
})

export default function useSupabase() {
  return { supabase }
}
