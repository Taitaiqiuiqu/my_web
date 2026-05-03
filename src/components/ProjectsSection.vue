<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects, getAllTags } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'
import TagFilter from './TagFilter.vue'

const { t } = useI18n()

const allTags = getAllTags()
const selectedTag = ref('all')

const filteredProjects = computed(() => {
  if (selectedTag.value === 'all') {
    return projects
  }
  return projects.filter(p => p.tags.includes(selectedTag.value))
})
</script>

<template>
  <section id="projects" class="section">
    <h2 class="section-title">{{ t('projects.title') }}</h2>

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
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
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
