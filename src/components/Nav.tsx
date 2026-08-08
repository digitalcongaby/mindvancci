import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '/#method', label: 'The Method' },
  { href: '/#dashboard', label: 'Dashboard' },
  { href: '/#ai-coach', label: 'AI Coach' },
  { href: '/#tools', label: 'Tools' },
  { href: '/#stories', label: 'Stories' },
  { href: '/#courses', label: 'Courses' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <Link to="/" className="font-display text-lg tracking-tight text-mv-ink dark:text-white">
          MINDVANCCI
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mv-ink/70 transition-colors hover:text-mv-ink dark:text-white/60 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/assessment"
            className="hidden rounded-full bg-mv-plum px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-mv-plum-deep md:inline-block"
          >
            Take the Assessment
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass absolute inset-x-4 top-20 flex flex-col gap-1 rounded-2xl p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-mv-ink/80 hover:bg-mv-ink/5 dark:text-white/80"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/assessment"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-lg bg-mv-plum px-3 py-2 text-center text-sm font-medium text-white"
          >
            Take the Assessment
          </Link>
        </div>
      )}
    </header>
  )
}
