<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/personalInfo'

const { t } = useI18n()

function scrollToProjects() {
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-line hero-greeting">
        <span class="prompt">&gt;</span>
        {{ t('hero.greeting', { name: personalInfo.name }) }}
      </h1>

      <h2 class="hero-line hero-tagline">
        <span class="prompt">&gt;</span>
        {{ t('hero.tagline') }}
      </h2>

      <p class="hero-line hero-subtitle">
        <span class="prompt dim">&gt;</span>
        <span class="typewriter">{{ t('hero.subtitle') }}</span>
      </p>

      <a
        class="hero-cta"
        href="#projects"
        @click.prevent="scrollToProjects"
      >
        <span class="prompt">&gt;</span>
        {{ t('hero.cta') }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--page-bg);
  padding: 24px;
}

.hero-content {
  max-width: var(--max-width);
  width: 100%;
}

.hero-line {
  font-family: "SF Mono", "Fira Code", "JetBrains Mono", Consolas, monospace;
  font-size: 28px;
  line-height: 1.8;
  color: var(--terminal-green);
}

.hero-greeting {
  font-size: 36px;
  font-weight: bold;
}

.hero-tagline {
  font-size: 32px;
  color: var(--accent);
}

.hero-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  margin-top: 16px;
}

.prompt {
  color: var(--terminal-green);
  margin-right: 8px;
  font-weight: bold;
}

.prompt.dim {
  color: var(--text-secondary);
  opacity: 0.5;
}

.hero-cta {
  display: inline-block;
  margin-top: 40px;
  font-size: 16px;
  color: var(--accent);
  font-family: "SF Mono", "Fira Code", "JetBrains Mono", Consolas, monospace;
  border: 1px solid var(--accent);
  padding: 12px 24px;
  border-radius: 2px;
}

.hero-cta:hover {
  background: var(--accent);
  color: var(--page-bg);
  text-decoration: none;
}

@media (max-width: 767px) {
  .hero-greeting {
    font-size: 24px;
  }

  .hero-tagline {
    font-size: 22px;
  }

  .hero-line {
    font-size: 20px;
  }
}
</style>
