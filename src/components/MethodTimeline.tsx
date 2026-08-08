import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { methodStages } from '@/data/content'
import { Reveal } from './Reveal'

export function MethodTimeline() {
  const [open, setOpen] = useState<number>(1)

  return (
    <section id="method" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal className="mb-16 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mv-sage-dark dark:text-mv-sage">
          The Method
        </p>
        <h2 className="mt-3 font-display text-4xl text-mv-ink sm:text-5xl dark:text-white">
          Five stages to a calmer mind
        </h2>
      </Reveal>

      <div className="relative">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-mv-ink/10 dark:bg-white/10" aria-hidden />
        <div className="space-y-4">
          {methodStages.map((stage, i) => {
            const isOpen = open === stage.stage
            return (
              <Reveal key={stage.stage} delay={i * 0.05}>
                <div className="relative pl-16">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : stage.stage)}
                    className={`absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? 'border-mv-plum bg-mv-plum text-white dark:bg-white dark:text-mv-plum-deep'
                        : 'border-mv-ink/15 bg-mv-cream text-mv-ink/60 dark:border-white/15 dark:bg-[#1f1b25] dark:text-white/50'
                    }`}
                    aria-label={`Toggle stage ${stage.stage}`}
                  >
                    {isOpen ? <Check size={18} /> : <span className="font-display text-sm">{stage.stage}</span>}
                  </button>

                  <div
                    className="glass w-full cursor-pointer rounded-2xl p-6 transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                    onClick={() => setOpen(isOpen ? -1 : stage.stage)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-mv-sage-dark dark:text-mv-sage">
                          Stage {stage.stage}
                        </p>
                        <h3 className="mt-1 font-display text-2xl text-mv-ink dark:text-white">{stage.title}</h3>
                        <p className="mt-1 text-sm text-mv-ink/55 dark:text-white/50">{stage.subtitle}</p>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-mv-ink/40 dark:text-white/40">
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 leading-relaxed text-mv-ink/70 dark:text-white/60">
                            {stage.description}
                          </p>
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {stage.practices.map((practice) => (
                              <li
                                key={practice}
                                className="rounded-full bg-mv-ink/5 px-3 py-1 text-xs text-mv-ink/70 dark:bg-white/10 dark:text-white/60"
                              >
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
