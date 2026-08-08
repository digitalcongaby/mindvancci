import { Link } from '@tanstack/react-router'
import { Instagram, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-mv-ink/10 bg-mv-cream-soft/60 px-6 py-16 dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl text-mv-ink dark:text-white">MINDVANCCI</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-mv-ink/60 dark:text-white/50">
            A science-inspired method for overwhelmed women to reduce mental saturation and reclaim a calmer,
            clearer mind.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-mv-ink/10 text-mv-ink/60 transition-colors hover:bg-mv-ink/5 dark:border-white/10 dark:text-white/50"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-mv-ink dark:text-white">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-mv-ink/60 dark:text-white/50">
            <li><a href="/#method" className="hover:text-mv-ink dark:hover:text-white">The Method</a></li>
            <li><a href="/#dashboard" className="hover:text-mv-ink dark:hover:text-white">Dashboard</a></li>
            <li><a href="/#tools" className="hover:text-mv-ink dark:hover:text-white">Tools</a></li>
            <li><Link to="/assessment" className="hover:text-mv-ink dark:hover:text-white">Assessment</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-mv-ink dark:text-white">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-mv-ink/60 dark:text-white/50">
            <li><a href="/#stories" className="hover:text-mv-ink dark:hover:text-white">Success Stories</a></li>
            <li><a href="/#courses" className="hover:text-mv-ink dark:hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-mv-ink dark:hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-mv-ink dark:hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-mv-ink dark:text-white">Stay in touch</p>
          <p className="mt-4 text-sm text-mv-ink/60 dark:text-white/50">hello@mindvancci.com</p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-mv-ink/10 pt-6 text-xs text-mv-ink/40 dark:border-white/10 dark:text-white/30 md:flex-row">
        <p>© 2026 MINDVANCCI. All rights reserved.</p>
        <p>Designed for the overwhelmed, built for the calm.</p>
      </div>
    </footer>
  )
}
