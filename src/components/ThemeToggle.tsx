import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useThemeStore } from '@/lib/theme'

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme)
  const toggle = useThemeStore((s) => s.toggle)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-mv-ink/10 dark:border-white/10 text-mv-ink dark:text-white/80 transition-colors hover:bg-mv-ink/5 dark:hover:bg-white/5"
    >
      {mounted && theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
