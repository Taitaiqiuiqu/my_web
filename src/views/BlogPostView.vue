<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { blogPosts, blogPostsI18n } from '@/data/blogPosts'
import { renderMarkdown } from '@/utils/markdown'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const slug = computed(() => route.params.slug as string)

const post = computed(() => {
  return blogPosts.find(p => p.slug === slug.value)
})

const i18nPost = computed(() => {
  if (!post.value) return { title: '', content: '' }
  return blogPostsI18n[locale.value]?.[post.value.titleKey] || { title: '', content: '' }
})

const renderedContent = computed(() => {
  if (!i18nPost.value.content) return ''
  return renderMarkdown(i18nPost.value.content)
})

function goBack() {
  router.push({ name: 'home', hash: '#blog' })
}
</script>

<template>
  <div class="blog-post-view">
    <div v-if="post" class="post-container">
      <button class="back-link" @click="goBack">
        {{ t('blog.backToBlog') }}
      </button>

      <h1 class="post-title">&gt; {{ i18nPost.title }}</h1>

      <div class="post-meta">
        <span class="post-date">{{ post.date }}</span>
        <span class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
        </span>
      </div>

      <div class="post-content markdown-body" v-html="renderedContent"></div>

      <div class="post-nav">
        <button class="back-link" @click="goBack">
          {{ t('blog.backToBlog') }}
        </button>
      </div>
    </div>

    <div v-else class="not-found">
      <p>&gt; Post not found.</p>
      <button class="back-link" @click="goBack">
        {{ t('blog.backToBlog') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.blog-post-view {
  min-height: calc(100vh - var(--header-height));
}

.post-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 24px;
}

.back-link {
  display: inline-block;
  font-size: 14px;
  color: var(--accent);
  font-family: "SF Mono", Consolas, monospace;
  margin-bottom: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.back-link:hover {
  text-decoration: underline;
}

.post-title {
  font-size: 28px;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
}

.post-date {
  font-size: 14px;
  color: var(--text-secondary);
  font-family: "SF Mono", Consolas, monospace;
}

.post-tags {
  display: flex;
  gap: 8px;
}

.post-tag {
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-family: "SF Mono", Consolas, monospace;
}

.post-content {
  margin-bottom: 48px;
}

.post-nav {
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.not-found {
  text-align: center;
  padding: 120px 24px;
}

.not-found p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

@media (max-width: 767px) {
  .post-container {
    padding: 48px 16px;
  }

  .post-title {
    font-size: 22px;
  }
}
</style>
