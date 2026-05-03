<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme, themeLabel } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    :title="themeLabel"
    @click="toggleTheme"
  >
    <span v-if="theme === 'dark'">☀</span>
    <span v-else>☾</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  font-size: 18px;
  padding: 4px 8px;
  line-height: 1;
  color: var(--text-primary);
  border-radius: 2px;
}

.theme-toggle:hover {
  color: var(--accent);
}
</style>
