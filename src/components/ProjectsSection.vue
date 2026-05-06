<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, provide } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProjects } from '@/composables/useProjects'
import ProjectCard from './ProjectCard.vue'
import TagFilter from './TagFilter.vue'

const { t } = useI18n()

const { projects, projectsI18n, loading, error, fetchProjects, subscribeToRealtime, unsubscribe } = useProjects()

provide('projectsI18n', projectsI18n)

const allTags = computed(() => {
  const tags = new Set<string>()
  projects.value.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags)
})

const selectedTag = ref('all')

const filteredProjects = computed(() => {
  if (selectedTag.value === 'all') {
    return projects.value
  }
  return projects.value.filter(p => p.tags.includes(selectedTag.value))
})

onMounted(async () => {
  await fetchProjects()
  subscribeToRealtime()
})

onUnmounted(() => {
  unsubscribe()
})
</script>

<template>
  <section id="projects" class="section">
    <h2 class="section-title">{{ t('projects.title') }}</h2>

    <div v-if="loading" class="loading-message">&gt; {{ t('projects.loading') }}</div>

    <div v-else-if="error" class="error-message">&gt; {{ error }}</div>

    <template v-else>
      <TagFilter
        :tags="allTags"
        :selected-tag="selectedTag"
        all-label-key="projects.filterAll"
        @select="selectedTag = $event"
      />

      <div v-if="filteredProjects.length > 0" class="projects-grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <p v-else class="empty-message">&gt; {{ t('projects.empty') }}</p>
    </template>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.loading-message,
.error-message {
  text-align: center;
  color: var(--text-secondary);
  font-family: "SF Mono", Consolas, monospace;
  font-size: 15px;
  padding: 48px 0;
}

.error-message {
  color: var(--accent);
}

.empty-message {
  text-align: center;
  color: var(--text-secondary);
  font-family: "SF Mono", Consolas, monospace;
  font-size: 15px;
  padding: 48px 0;
}

@media (max-width: 1023px) and (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>