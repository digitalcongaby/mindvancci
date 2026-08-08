import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Flame, Sparkles, Target, Wind } from 'lucide-react'
import { achievements, weekData } from '@/data/content'
import { Reveal } from './Reveal'

const moods = ['😔', '😐', '🙂', '😊', '🤩']

const iconMap = { flame: Flame, wind: Wind, brain: Brain, target: Target } as const

function RadialScore({ value, label, color }: { value: number; label: string; color: string }) {
  const r = 42
  const circumference = 2 * Math.PI * r
  return (
    <div className="flex flex-col items-center">
      <svg width="110" height="110" viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r={r} strokeWidth="8" className="fill-none stroke-mv-ink/8 dark:stroke-white/10" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          strokeWidth="8"
          strokeLinecap="round"
          className="fill-none"
          stroke={color}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <p className="-mt-16 font-display text-2xl text-mv-ink dark:text-white">{value}</p>
      <p className="mt-16 text-xs text-mv-ink/50 dark:text-white/40">{label}</p>
    </div>
  )
}

export function DashboardDemo() {
  const [mood, setMood] = useState(3)

  return (
    <section id="dashboard" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-14 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mv-sage-dark dark:text-mv-sage">
          Inside the Member App
        </p>
        <h2 className="mt-3 font-display text-4xl text-mv-ink sm:text-5xl dark:text-white">
          Your calm, quantified
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mv-ink/60 dark:text-white/50">
          A live look at the member dashboard — tracking your mental state daily so progress is always visible.
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="glass rounded-3xl p-7 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-mv-ink/50 dark:text-white/40">Today, July 22</p>
              <h3 className="mt-1 font-display text-xl text-mv-ink dark:text-white">Today&rsquo;s mission</h3>
            </div>
            <span className="rounded-full bg-mv-sage/15 px-3 py-1 text-xs font-medium text-mv-sage-dark dark:text-mv-sage">
              2 of 3 complete
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {[
              { label: '10-minute Focus Recovery breathing', done: true },
              { label: 'Brain Dump: clear 5 open loops', done: true },
              { label: 'Evening reflection journal', done: false },
            ].map((task) => (
              <div
                key={task.label}
                className="flex items-center gap-3 rounded-xl bg-mv-ink/[0.03] px-4 py-3 dark:bg-white/[0.04]"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] ${
                    task.done
                      ? 'border-mv-sage bg-mv-sage text-white'
                      : 'border-mv-ink/20 dark:border-white/20'
                  }`}
                >
                  {task.done ? '✓' : ''}
                </span>
                <span
                  className={`text-sm ${task.done ? 'text-mv-ink/40 line-through dark:text-white/30' : 'text-mv-ink/80 dark:text-white/70'}`}
                >
                  {task.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-4 text-sm text-mv-ink/60 dark:text-white/45">Mental saturation — last 7 days</p>
            <div className="flex h-40 items-end gap-3">
              {weekData.map((d, i) => (
                <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${d.saturation}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full rounded-t-md bg-gradient-to-t from-mv-rose to-mv-gold/70"
                    style={{ maxHeight: '100%' }}
                  />
                  <span className="text-[11px] text-mv-ink/40 dark:text-white/35">{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-3xl p-7">
          <p className="mb-4 text-sm text-mv-ink/60 dark:text-white/45">How are you feeling right now?</p>
          <div className="flex justify-between">
            {moods.map((m, i) => (
              <button
                key={m}
                onClick={() => setMood(i)}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-xl transition-transform ${
                  mood === i ? 'scale-110 bg-mv-sage/20' : 'opacity-50 hover:opacity-80'
                }`}
                aria-label={`Mood ${i}`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <RadialScore value={71} label="Focus score" color="#8a9a86" />
            <RadialScore value={33} label="Saturation" color="#d9b8b0" />
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-mv-ink/50 dark:text-white/40">
            <Sparkles size={13} className="text-mv-gold" />
            Energy score: 74 / 100 — trending up
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="glass mt-6 rounded-3xl p-7">
        <p className="mb-5 text-sm text-mv-ink/60 dark:text-white/45">Achievements</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {achievements.map((a) => {
            const Icon = iconMap[a.icon as keyof typeof iconMap]
            return (
              <div
                key={a.title}
                className="rounded-2xl border border-mv-ink/8 p-4 text-center dark:border-white/10"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-mv-gold/15 text-mv-gold">
                  <Icon size={18} />
                </div>
                <p className="mt-3 text-sm font-medium text-mv-ink dark:text-white">{a.title}</p>
                <p className="mt-1 text-xs text-mv-ink/45 dark:text-white/35">{a.description}</p>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
