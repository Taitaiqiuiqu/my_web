import { ref } from 'vue'
import type { RealtimeChannel } from '@supabase/supabase-js'
import { supabase } from '@/utils/supabase'
import type { Project } from '@/data/projects'

export interface ProjectRow {
  id: string
  project_id: string
  name_zh: string
  name_en: string
  description_zh: string
  description_en: string
  tags: string[]
  image_url: string | null
  github_url: string | null
  demo_url: string | null
}

function rowToProject(row: ProjectRow): Project {
  return {
    id: row.project_id,
    nameKey: row.project_id,
    descriptionKey: `${row.project_id}Desc`,
    tags: row.tags || [],
    image: row.image_url || '',
    githubUrl: row.github_url || undefined,
    demoUrl: row.demo_url || undefined
  }
}

function buildI18nMap(projects: Project[]) {
  const zhCN: Record<string, { name: string; description: string }> = {}
  const enUS: Record<string, { name: string; description: string }> = {}

  projects.forEach(p => {
    zhCN[p.id] = {
      name: (p as any)._nameZh || '',
      description: (p as any)._descZh || ''
    }
    enUS[p.id] = {
      name: (p as any)._nameEn || '',
      description: (p as any)._descEn || ''
    }
  })

  return { 'zh-CN': zhCN, 'en-US': enUS } as Record<string, Record<string, { name: string; description: string }>>
}

export function useProjects() {
  const projects = ref<Project[]>([])
  const projectsI18n = ref<Record<string, Record<string, { name: string; description: string }>>>({
    'zh-CN': {},
    'en-US': {}
  })
  const loading = ref(false)
  const error = ref<string | null>(null)
  let channel: RealtimeChannel | null = null

  const updateFromRows = (rows: ProjectRow[]) => {
    projects.value = rows.map(row => {
      const p = rowToProject(row)
      ;(p as any)._nameZh = row.name_zh
      ;(p as any)._nameEn = row.name_en
      ;(p as any)._descZh = row.description_zh
      ;(p as any)._descEn = row.description_en
      return p
    })

    const zhCN: Record<string, { name: string; description: string }> = {}
    const enUS: Record<string, { name: string; description: string }> = {}
    rows.forEach(row => {
      zhCN[row.project_id] = { name: row.name_zh, description: row.description_zh }
      enUS[row.project_id] = { name: row.name_en, description: row.description_en }
    })
    projectsI18n.value = { 'zh-CN': zhCN, 'en-US': enUS }
  }

  const fetchProjects = async () => {
    if (!supabase) {
      error.value = 'Supabase client not configured'
      return
    }

    loading.value = true
    error.value = null

    try {
      const { data, error: fetchError } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: true })

      if (fetchError) throw fetchError

      updateFromRows((data || []) as ProjectRow[])
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch projects'
      console.error('Error fetching projects:', err)
    } finally {
      loading.value = false
    }
  }

  const subscribeToRealtime = () => {
    if (!supabase) return

    channel = supabase
      .channel('projects-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'projects' },
        async () => {
          await fetchProjects()
        }
      )
      .subscribe()
  }

  const unsubscribe = () => {
    if (channel) {
      supabase?.removeChannel(channel)
      channel = null
    }
  }

  return {
    projects,
    projectsI18n,
    loading,
    error,
    fetchProjects,
    subscribeToRealtime,
    unsubscribe
  }
}
