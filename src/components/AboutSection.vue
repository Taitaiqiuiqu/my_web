<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { personalInfo } from '@/data/personalInfo'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="section about-section">
    <h2 class="section-title">{{ t('about.title') }}</h2>

    <div class="about-layout">
      <div class="about-avatar">
        <pre class="ascii-avatar">
{`    +-------+
    | ^ _ ^ |
    |  ___  |
    +---+---+
        |
   -----+-----
  |  o     o  |
  |     _     |
  |    ___    |
  +-----------+`}
        </pre>
      </div>

      <div class="about-text">
        <p>{{ t('about.intro1') }}</p>
        <p>{{ t('about.intro2') }}</p>
        <p>{{ t('about.intro3') }}</p>
      </div>
    </div>

    <div class="skills-area">
      <p class="skills-label">{{ t('about.skills') }}:</p>
      <div class="skills-tags">
        <span v-for="skill in personalInfo.skills" :key="skill" class="skill-tag">
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: var(--card-bg);
}

.section-title {
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.about-layout {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.about-avatar {
  flex-shrink: 0;
}

.ascii-avatar {
  font-family: "Cascadia Code", "Fira Code", "JetBrains Mono", Consolas, monospace;
  font-size: 12px;
  line-height: 1.3;
  color: var(--terminal-green);
  white-space: pre;
}

.about-text p {
  margin-bottom: 16px;
  color: var(--text-primary);
  line-height: 1.8;
}

.skills-area {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.skills-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  font-size: 13px;
  padding: 4px 14px;
  border-radius: 12px;
  background: var(--tag-blue);
  color: #FFFFFF;
  font-family: "SF Mono", Consolas, monospace;
}

@media (max-width: 767px) {
  .about-layout {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }

  .about-avatar {
    text-align: center;
  }
}
</style>
