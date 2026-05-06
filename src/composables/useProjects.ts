import { ref } from 'vue'
import type { RealtimeChannel } from '@supabase/supabase-js'
import { supabase } from '@/utils/supabase'
import { projects as staticProjects, projectsI18n as staticProjectsI18n } from '@/data/projects'
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

export function useProjects() {
  const projects = ref<Project[]>([])
  const projectsI18n = ref<Record<string, Record<string, { name: string; description: string }>>>({
    'zh-CN': {},
    'en-US': {}
  })
  const loading = ref(false)
  const error = ref<string | null>(null)
  const usingStaticData = ref(false)
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
      zhCN[row.project_id] = { name: row.name_zh, description: