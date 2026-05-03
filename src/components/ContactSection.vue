<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/personalInfo'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section contact-section">
    <h2 class="section-title">{{ t('contact.title') }}</h2>

    <p class="contact-tagline">&gt; {{ t('contact.tagline') }}</p>

    <div class="social-links">
      <a
        v-for="social in personalInfo.socials"
        :key="social.label"
        :href="social.url"
        target="_blank"
        rel="noopener"
        class="social-link"
      >
        <span class="social-icon">{{ social.icon }}</span>
        <span class="social-label">{{ social.label }}</span>
        <span class="social-url">{{ social.url.replace('https://', '').replace('mailto:', '') }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--card-bg);
}

.contact-tagline {
  font-size: 20px;
  color: var(--terminal-green);
  font-family: "SF Mono", "Fira Code", "JetBrains Mono", Consolas, monospace;
  margin-bottom: 40px;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 24px;
  background: var(--page-bg);
}

.social-link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "SF Mono", "Fira Code", "JetBrains Mono", Consolas, monospace;
  font-size: 15px;
  color: var(--text-primary);
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.social-link:last-child {
  border-bottom: none;
}

.social-link:hover {
  color: var(--accent);
  text-decoration: none;
}

.social-icon {
  font-size: 18px;
  font-weight: bold;
  color: var(--accent);
  width: 32px;
  text-align: center;
  flex-shrink: 0;
}

.social-label {
  font-size: 14px;
  color: var(--text-secondary);
  width: 80px;
  flex-shrink: 0;
}

.social-url {
  font-size: 14px;
  color: var(--text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
