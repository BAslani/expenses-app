import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zefnkinlqvrwhvopwmfr.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZm5raW5scXZyd2h2b3B3bWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MDE2MzUsImV4cCI6MjAzNDM3NzYzNX0.tbl3cjRmtSjTePLGuPmDQIPT06sGB6aM6iv_i_pzeDY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
