<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import type { BlogPost } from '@/data/blogPosts'
import { blogPostsI18n } from '@/data/blogPosts'

const props = defineProps<{
  post: BlogPost
}>()

const { t, locale } = useI18n()
const router = useRouter()

const i18n = computed(() => {
  return blogPostsI18n[locale.value]?.[props.post.titleKey] || { title: '', summary: '' }
})

function goToPost() {
  router.push({ name: 'blog-post', params: { slug: props.post.slug } })
}
</script>

<template>
  <article class="blog-item" @click="goToPost">
    <div class="blog-date">{{ post.date }}</div>
    <div class="blog-main">
      <h3 class="blog-title">&gt; {{ i18n.title }}</h3>
      <p class="blog-summary">{{ i18n.summary }}</p>
      <div class="blog-meta">
        <div class="blog-tags">
          <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
        </div>
        <span class="blog-readmore">{{ t('blog.readMore') }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.blog-item {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 24px;
  cursor: pointer;
  background: var(--page-bg);
}

.blog-item:hover {
  border-color: var(--accent);
}

.blog-date {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
  font-family: "SF Mono", "Fira Code", "JetBrains Mono", Consolas, monospace;
}

.blog-title {
  font-size: 18px;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.blog-summary {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.blog-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.blog-tag {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-family: "SF Mono", Consolas, monospace;
}

.blog-readmore {
  font-size: 14px;
  color: var(--accent);
  font-family: "SF Mono", Consolas, monospace;
  white-space: nowrap;
}
</style>
