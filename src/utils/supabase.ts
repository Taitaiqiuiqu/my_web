import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const hasConfig = !!(supabaseUrl && supabaseAnonKey)

if (!hasConfig) {
  console.warn(
    '[Supabase] 环境变量未配置，将使用静态数据。\n' +
    '请在 Netlify 设置中添加 VITE_SUPABASE_URL 和 VITE_SUPABASE_ANON_KEY，然后重新部署。'
  )
}

export const supabase = hasConfig
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null