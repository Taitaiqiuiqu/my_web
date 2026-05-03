<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()
const mobileMenuOpen = ref(false)

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'blog', href: '#blog' },
  { key: 'contact', href: '#contact' }
]

function scrollTo(href: string) {
  mobileMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="app-header">
    <div class="header-inner">
      <a class="logo" href="#" @click.prevent="scrollTo('#hero')">
        > VC_
      </a>

      <nav class="desktop-nav">
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="item.href"
          class="nav-link"
          @click.prevent="scrollTo(item.href)"
        >
          /{{ t(`nav.${item.key}`).toLowerCase() }}
        </a>
      </nav>

      <div class="header-actions">
        <ThemeToggle />
        <LanguageToggle />
        <button class="hamburger" @click="toggleMobileMenu" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <Transition name="slide">
      <nav v-if="mobileMenuOpen" class="mobile-nav">
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="item.href"
          class="mobile-nav-link"
          @click.prevent="scrollTo(item.href)"
        >
          > /{{ t(`nav.${item.key}`).toLowerCase() }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--page-bg);
  border-bottom: 1px solid var(--border-color);
  height: var(--header-height);
}

.header-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  font-size: 18px;
  font-weight: bold;
  color: var(--terminal-green);
}

.logo:hover {
  text-decoration: none;
  opacity: 0.8;
}

.desktop-nav {
  display: flex;
  gap: 24px;
}

.nav-link {
  font-size: 15px;
  color: var(--text-secondary);
}

.nav-link:hover {
  color: var(--accent);
  text-decoration: none;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 1px;
}

.mobile-nav {
  position: absolute;
  top: var(--header-height);
  left: 0;
  right: 0;
  background: var(--page-bg);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-nav-link {
  font-size: 16px;
  color: var(--text-primary);
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.mobile-nav-link:last-child {
  border-bottom: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 767px) {
  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .header-inner {
    padding: 0 16px;
  }
}
</style>
