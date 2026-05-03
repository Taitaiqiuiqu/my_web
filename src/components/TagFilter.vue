<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  tags: string[]
  selectedTag: string
  allLabelKey: string
}>()

const emit = defineEmits<{
  select: [tag: string]
}>()

const { t } = useI18n()
</script>

<template>
  <div class="tag-filter">
    <button
      class="tag-btn"
      :class="{ active: selectedTag === 'all' }"
      @click="emit('select', 'all')"
    >
      {{ t(allLabelKey) }}
    </button>
    <button
      v-for="tag in tags"
      :key="tag"
      class="tag-btn"
      :class="{ active: selectedTag === tag }"
      @click="emit('select', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<style scoped>
.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.tag-btn {
  font-size: 13px;
  padding: 4px 14px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-family: "SF Mono", Consolas, monospace;
  background: transparent;
}

.tag-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.tag-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #FFFFFF;
}
</style>
