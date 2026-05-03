import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const theme = ref<'dark' | 'light'>('dark')

export function useTheme() {
  const { t, locale } = useI18n()

  const themeLabel = computed(() => {
    return t(`theme.${theme.value}`)
  })

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme()
    try {
      localStorage.setItem('vibe-coding-theme', theme.value)
    } catch {}
  }

  function initTheme() {
    try {
      const saved = localStorage.getItem('vibe-coding-theme')
      if (saved === 'light' || saved === 'dark') {
        theme.value = saved
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        theme.value = prefersDark ? 'dark' : 'light'
      }
    } catch {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }
    applyTheme()
  }

  onMounted(initTheme)

  return {
    theme,
    themeLabel,
    toggleTheme
  }
}
