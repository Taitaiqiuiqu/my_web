import { ref, computed } from 'vue'
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

export function useProjects() {
  const projects = ref<Project[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

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

      projects.value = (data || []).map((row: ProjectRow) => ({
        id: row.project_id,
        nameKey: row.project_id,
        descriptionKey: `${row.project_id}Desc`,
        tags: row.tags || [],
        image: row.image_url || '',
        githubUrl: row.github_url || undefined,
        demoUrl: row.demo_url || undefined
      }))
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch projects'
      console.error('Error fetching projects:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    projects,
    loading,
    error,
    fetchProjects
  }
}

export function createProjectI18nEntry(row: ProjectRow) {
  return {
    name: row.name_en,
    description: row.description_en
  }
}

export function createProjectI18nMap(rows: ProjectRow[]): Record<string, Record<string, { name: string; description: string }>> {
  const map: Record<string, Record<string, { name: string; description: string }>> = {
    'zh-CN': {},
    'en-US': {}
  }

  rows.forEach(row => {
    map['zh-CN'][row.project_id] = {
      name: row.name_zh,
      description: row.description_zh
    }
    map['en-US'][row.project_id] = {
      name: row.name_en,
      description: row.description_en
    }
  })

  return map
}