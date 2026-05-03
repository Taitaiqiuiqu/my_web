<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <p>{{ t('footer.built') }} &nbsp;|&nbsp; &copy; {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--border-color);
  background: var(--card-bg);
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 16px 24px;
  text-align: center;
}

.footer-inner p {
  font-size: 12px;
  color: var(--text-secondary);
}
</style>
