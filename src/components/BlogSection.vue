<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { blogPosts, getAllTags } from '@/data/blogPosts'
import BlogListItem from './BlogListItem.vue'
import TagFilter from './TagFilter.vue'

const { t } = useI18n()

const allTags = getAllTags()
const selectedTag = ref('all')
const currentPage = ref(1)
const perPage = 5

const filteredPosts = computed(() => {
  if (selectedTag.value === 'all') {
    return blogPosts
  }
  return blogPosts.filter(p => p.tags.includes(selectedTag.value))
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredPosts.value.length / perPage)))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredPosts.value.slice(start, start + perPage)
})

function goToPage(page: number) {
  currentPage.value = page
  document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="blog" class="section">
    <h2 class="section-title">{{ t('blog.title') }}</h2>

    <TagFilter
      :tags="allTags"
      :selected-tag="selectedTag"
      all-label-key="blog.filterAll"
      @select="selectedTag = $event; currentPage = 1"
    />

    <div v-if="paginatedPosts.length > 0" class="blog-list">
      <BlogListItem
        v-for="post in paginatedPosts"
        :key="post.slug"
        :post="post"
      />
    </div>

    <p v-else class="empty-message">&gt; {{ t('blog.empty') }}</p>

    <div v-if="totalPages > 1" class="pagination">
      <button
        class="page-btn"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        &larr; {{ t('blog.previous') }}
      </button>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <button
        class="page-btn"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        {{ t('blog.next') }} &rarr;
      </button>
    </div>
  </section>
</template>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.empty-message {
  text-align: center;
  color: var(--text-secondary);
  font-family: "SF Mono", Consolas, monospace;
  font-size: 15px;
  padding: 48px 0;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
}

.page-btn {
  font-size: 14px;
  color: var(--accent);
  font-family: "SF Mono", Consolas, monospace;
  padding: 4px 12px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--accent);
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.page-info {
  font-size: 14px;
  color: var(--text-secondary);
  font-family: "SF Mono", Consolas, monospace;
}
</style>
