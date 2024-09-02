import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zefnkinlqvrwhvopwmfr.supabase.co'
const supabaseAnonKey = process.env.EXPO_PUBLIC_API_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey!)
