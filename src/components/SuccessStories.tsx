import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { stats, testimonials } from '@/data/content'
import { Reveal } from './Reveal'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration)
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <p ref={ref} className="font-display text-4xl text-mv-ink dark:text-white">
      {display.toLocaleString()}
      {suffix}
    </p>
  )
}

export function SuccessStories() {
  return (
    <section id="stories" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-14 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mv-sage-dark dark:text-mv-sage">
          Real Results
        </p>
        <h2 className="mt-3 font-display text-4xl text-mv-ink sm:text-5xl dark:text-white">
          Women who found their calm
        </h2>
      </Reveal>

      <Reveal className="glass mb-14 grid grid-cols-2 gap-8 rounded-3xl p-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-xs text-mv-ink/50 dark:text-white/40">{s.label}</p>
          </div>
        ))}
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08} className="glass rounded-3xl p-7">
            <Quote size={22} className="text-mv-gold" />
            <p className="mt-4 leading-relaxed text-mv-ink/75 dark:text-white/65">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={`https://api.dicebear.com/9.x/notionists/svg?seed=${t.avatarSeed}`}
                  alt={t.name}
                  className="h-11 w-11 rounded-full bg-mv-sand"
                />
                <div>
                  <p className="text-sm font-medium text-mv-ink dark:text-white">{t.name}</p>
                  <p className="text-xs text-mv-ink/50 dark:text-white/40">{t.role}</p>
                </div>
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="rounded-full bg-mv-sage/15 px-3 py-1 text-xs font-medium text-mv-sage-dark dark:text-mv-sage"
              >
                {t.result}
              </motion.span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
