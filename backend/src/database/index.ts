import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ocpsnqszjcwgmhutjqdc.supabase.co'
const SUPABASE_KEY = process.env.SUPABASE_KEY || ''

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
console.log('supabase created')

export default supabase