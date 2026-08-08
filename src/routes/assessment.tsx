import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { computeScore, profileForScore, profiles, questions } from '@/lib/assessment'

export const Route = createFileRoute('/assessment')({
  component: Assessment,
})

function Assessment() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Array<number | null>>(Array(questions.length).fill(null))
  const [finished, setFinished] = useState(false)

  const progress = Math.round((step / questions.length) * 100)
  const current = questions[step]

  function selectAnswer(value: number) {
    const next = [...answers]
    next[step] = value
    setAnswers(next)
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1)
      } else {
        setFinished(true)
      }
    }, 250)
  }

  const score = finished ? computeScore(answers.map((a) => a ?? 0)) : 0
  const profile = finished ? profileForScore(score) : null

  return (
    <div className="min-h-screen bg-mv-cream dark:bg-[#16131a]">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        {!finished ? (
          <>
            <div className="mb-10 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-mv-sage-dark dark:text-mv-sage">
                Mental Saturation Assessment
              </p>
              <p className="text-xs text-mv-ink/45 dark:text-white/35">
                {step + 1} / {questions.length}
              </p>
            </div>

            <div className="mb-12 h-1.5 w-full overflow-hidden rounded-full bg-mv-ink/8 dark:bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-mv-sage to-mv-gold"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-balance font-display text-2xl leading-snug text-mv-ink sm:text-3xl dark:text-white">
                  {current.prompt}
                </h2>

                <div className="mt-10 grid gap-3">
                  {current.options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => selectAnswer(option.value)}
                      className={`glass rounded-2xl px-6 py-4 text-left text-sm transition-all hover:border-mv-sage hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] ${
                        answers[step] === option.value ? 'border-mv-sage ring-1 ring-mv-sage' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="mt-10 flex justify-between">
                  <button
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="inline-flex items-center gap-1 text-sm text-mv-ink/50 disabled:opacity-30 dark:text-white/40"
                  >
                    <ArrowLeft size={15} /> Back
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <ResultView score={score} profileKey={profile!.key} />
        )}
      </main>
      <Footer />
    </div>
  )
}

function ResultView({ score, profileKey }: { score: number; profileKey: string }) {
  const profile = profiles.find((p) => p.key === profileKey)!

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mv-sage-dark dark:text-mv-sage">
          Your result
        </p>
        <h1 className="mt-3 font-display text-4xl text-mv-ink sm:text-5xl dark:text-white">{profile.name}</h1>
        <p className="mt-2 text-mv-ink/55 dark:text-white/45">{profile.tagline}</p>
      </div>

      <div
        className={`relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br p-10 ${profile.gradient} glass`}
      >
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center">
            <svg width="150" height="150" viewBox="0 0 100 100" className="-rotate-90">
              <circle cx="50" cy="50" r="44" strokeWidth="7" className="fill-none stroke-mv-ink/8 dark:stroke-white/10" />
              <motion.circle
                cx="50"
                cy="50"
                r="44"
                strokeWidth="7"
                strokeLinecap="round"
                className={`fill-none ${profile.accent}`}
                stroke="currentColor"
                strokeDasharray={2 * Math.PI * 44}
                initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 44 * (1 - score / 100) }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
            <p className="-mt-24 font-display text-3xl text-mv-ink dark:text-white">{score}</p>
            <p className="mt-24 text-xs text-mv-ink/50 dark:text-white/40">Saturation score</p>
          </div>

          <p className="max-w-md leading-relaxed text-mv-ink/75 dark:text-white/65">{profile.description}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-mv-ink dark:text-white">Strengths</p>
            <ul className="mt-2 space-y-1.5 text-sm text-mv-ink/65 dark:text-white/55">
              {profile.strengths.map((s) => (
                <li key={s}>+ {s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-mv-ink dark:text-white">Watch for</p>
            <ul className="mt-2 space-y-1.5 text-sm text-mv-ink/65 dark:text-white/55">
              {profile.weaknesses.map((w) => (
                <li key={w}>· {w}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white/60 p-5 dark:bg-white/10">
          <p className="flex items-center gap-2 text-sm font-medium text-mv-ink dark:text-white">
            <Sparkles size={15} className="text-mv-gold" /> Recommended next step
          </p>
          <p className="mt-1.5 text-sm text-mv-ink/70 dark:text-white/60">{profile.nextStep}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href="/#courses"
          className="inline-flex items-center gap-2 rounded-full bg-mv-plum px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-mv-plum-deep"
        >
          Get your personalized protocol
          <ArrowRight size={15} />
        </a>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-mv-ink/15 px-7 py-3.5 text-sm font-medium text-mv-ink/80 dark:border-white/15 dark:text-white/70"
        >
          Back to home
        </Link>
      </div>
    </motion.div>
  )
}
