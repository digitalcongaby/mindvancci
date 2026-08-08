import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-mv-cream via-mv-cream-soft to-mv-cream dark:from-[#16131a] dark:via-[#1b1720] dark:to-[#16131a]" />
        <motion.div
          className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-mv-sage/30 blur-3xl dark:bg-mv-sage/15"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[-10%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-mv-rose/30 blur-3xl dark:bg-mv-plum/25"
          animate={{ y: [0, 40, 0], x: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-mv-gold/20 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-mv-plum dark:text-mv-rose"
        >
          <Sparkles size={13} />
          A science-inspired method, not another course
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-5xl leading-[1.05] text-mv-ink sm:text-6xl md:text-7xl dark:text-white"
        >
          Your mind isn&rsquo;t broken.
          <br />
          <span className="italic text-mv-sage-dark dark:text-mv-sage">It&rsquo;s overloaded.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-mv-ink/65 dark:text-white/60"
        >
          Discover the MINDVANCCI Method, a science-inspired framework that helps overwhelmed women reduce mental
          saturation, regain focus and build a calmer life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            to="/assessment"
            className="group inline-flex items-center gap-2 rounded-full bg-mv-plum px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(75,59,79,0.35)] transition-transform hover:scale-[1.03] dark:bg-white dark:text-mv-plum-deep"
          >
            Take the Mental Saturation Assessment
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#method"
            className="inline-flex items-center gap-2 rounded-full border border-mv-ink/15 px-7 py-3.5 text-sm font-medium text-mv-ink/80 transition-colors hover:bg-mv-ink/5 dark:border-white/15 dark:text-white/75 dark:hover:bg-white/5"
          >
            Learn the Method
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 text-center"
        >
          {[
            ['12,400+', 'women guided'],
            ['58%', 'avg. saturation drop'],
            ['97%', 'would recommend'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-2xl text-mv-ink dark:text-white">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-mv-ink/45 dark:text-white/40">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
