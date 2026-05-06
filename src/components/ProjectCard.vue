<script setup lang="ts">
import { computed, inject, ref, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Project } from '@/data/projects'
import { projectsI18n as staticProjectsI18n } from '@/data/projects'

const props = defineProps<{
  project: Project
}>()

const { t, locale } = useI18n()

type I18nMap = Record<string, Record<string, { name: string; description: string }>>
const dynamicProjectsI18n = inject<Ref<I18nMap>>('projectsI18n', ref({ 'zh-CN': {}, 'en-US': {} }))

const i18n = computed(() => {
  const map = dynamicProjectsI18n.value
  if (map && map[locale.value]?.[props.project.nameKey]) {
    return map[locale.value][props.project.nameKey]
  }
  return staticProjectsI18n[locale.value]?.[props.project.nameKey] || { name: '', description: '' }
})

const imageError = ref(false)
const imageLoaded = ref(false)

function handleImageError() {
  imageError.value = true
}

function handleImageLoad() {
  imageLoaded.value = true
}

const showPlaceholder = computed(() => {
  return !props.project.image || imageError.value || !imageLoaded.value
})

function getTagColor(tag: string): string {
  const colors: Record<string, string> = {
    'Vue 3': 'var(--tag-green)',
    'React': 'var(--tag-blue)',
    'TypeScript': 'var(--tag-blue)',
    'JavaScript': 'var(--tag-purple)',
    'Python': 'var(--tag-purple)',
    'Go': 'var(--tag-blue)',
    'Node.js': 'var(--tag-green)',
    'OpenAI API': 'var(--tag-purple)',
    'API': 'var(--tag-green)',
    'CLI': 'var(--tag-purple)',
    'Chrome': 'var(--tag-blue)',
    'Bot': 'var(--tag-green)',
    'Markdown': 'var(--tag-blue)',
    'Vite': 'var(--tag-purple)',
    'SSG': 'var(--tag-green)',
    'Docker': 'var(--tag-blue)',
    'D3.js': 'var(--tag-purple)',
    'REST': 'var(--tag-green)',
    'AI': 'var(--tag-purple)'
  }
  return colors[tag] || 'var(--tag-blue)'
}
</script>

<template>
  <article class="project-card">
    <div class="card-image">
      <div v-if="showPlaceholder" class="image-placeholder">
        <pre class="placeholder-ascii">+-------------+
|             |
|   Project   |
|             |
+-------------+</pre>
      </div>
      <img
        v-else
        :src="project.image"
        :alt="i18n.name"
        class="card-img"
        @error="handleImageError"
        @load="handleImageLoad"
      />
    </div>
    <div class="card-body">
      <h3 class="card-title">&gt; {{ i18n.name }}</h3>
      <p class="card-desc">{{ i18n.description }}</p>
    </div>
    <div class="card-footer">
      <div class="card-tags">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="card-tag"
          :style="{ background: getTagColor(tag) }"
        >
          {{ tag }}
        </span>
      </div>
      <div class="card-links">
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener">
          &lt;&gt; {{ t('projects.source') }}
        </a>
        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener">
          &#9654; {{ t('projects.demo') }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  background: var(--page-bg);
}

.project-card:hover {
  border-color: var(--accent);
}

.card-image {
  background: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
}

.card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
}

.placeholder-ascii {
  font-family: "Cascadia Code", "Fira Code", "JetBrains Mono", Consolas, monospace;
  font-size: 11px;
  line-height: 1.4;
  color: var(--text-secondary);
  opacity: 0.6;
}

.card-body {
  padding: 20px 20px 12px;
}

.card-title {
  font-size: 18px;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.card-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.card-footer {
  padding: 0 20px 20px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.card-tag {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
  color: #FFFFFF;
  font-family: "SF Mono", Consolas, monospace;
}

.card-links {
  display: flex;
  gap: 16px;
}

.card-links a {
  font-size: 13px;
  color: var(--accent);
  font-family: "SF Mono", Consolas, monospace;
}

.card-links a:hover {
  text-decoration: underline;
}
</style>
