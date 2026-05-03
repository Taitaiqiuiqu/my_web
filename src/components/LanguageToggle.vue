<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggleLang() {
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
}
</script>

<template>
  <button class="lang-toggle" @click="toggleLang">
    {{ locale === 'zh-CN' ? 'EN' : '中' }}
  </button>
</template>

<style scoped>
.lang-toggle {
  font-size: 13px;
  font-weight: bold;
  padding: 4px 8px;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 2px;
  font-family: inherit;
}

.lang-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
