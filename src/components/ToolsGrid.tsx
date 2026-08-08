import { useEffect, useRef, useState } from 'react'
import type { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { Brain, Calculator, CheckSquare, ListChecks, NotebookPen, Timer } from 'lucide-react'
import { Reveal } from './Reveal'

type ToolKey = 'load' | 'fatigue' | 'timer' | 'reset' | 'dump' | 'reflection'

const tools: { key: ToolKey; label: string; icon: typeof Brain }[] = [
  { key: 'load', label: 'Mental Load Calculator', icon: Calculator },
  { key: 'fatigue', label: 'Decision Fatigue Calculator', icon: ListChecks },
  { key: 'timer', label: 'Focus Timer', icon: Timer },
  { key: 'reset', label: 'Morning Reset Checklist', icon: CheckSquare },
  { key: 'dump', label: 'Brain Dump Tool', icon: NotebookPen },
  { key: 'reflection', label: 'Weekly Reflection', icon: Brain },
]

const loadItems = [
  'Managing household logistics',
  'Remembering everyone’s schedules',
  'Emotional support for others',
  'Work deadlines and meetings',
  'Financial planning and bills',
  'Meal planning and groceries',
  'Childcare or caregiving',
  'Keeping up with messages',
]

function MentalLoadCalculator() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const score = Math.round((checked.size / loadItems.length) * 100)

  return (
    <div>
      <p className="mb-4 text-sm text-mv-ink/60 dark:text-white/50">Check what you’re currently carrying:</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {loadItems.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-mv-ink/8 px-3 py-2 text-sm text-mv-ink/75 dark:border-white/10 dark:text-white/65"
          >
            <input
              type="checkbox"
              checked={checked.has(item)}
              onChange={() =>
                setChecked((prev) => {
                  const next = new Set(prev)
                  next.has(item) ? next.delete(item) : next.add(item)
                  return next
                })
              }
              className="accent-mv-plum"
            />
            {item}
          </label>
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-mv-ink/[0.03] p-4 dark:bg-white/[0.04]">
        <p className="text-sm text-mv-ink/60 dark:text-white/50">Your mental load</p>
        <div className="mt-2 h-2 w-full rounded-full bg-mv-ink/10 dark:bg-white/10">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-mv-sage to-mv-rose"
            animate={{ width: `${score}%` }}
          />
        </div>
        <p className="mt-2 font-display text-xl text-mv-ink dark:text-white">{score} / 100</p>
      </div>
    </div>
  )
}

function DecisionFatigueCalculator() {
  const [decisions, setDecisions] = useState(30)
  const fatigue = Math.min(100, Math.round((decisions / 60) * 100))

  return (
    <div>
      <p className="mb-4 text-sm text-mv-ink/60 dark:text-white/50">
        Roughly how many decisions do you make before noon?
      </p>
      <input
        type="range"
        min={0}
        max={60}
        value={decisions}
        onChange={(e) => setDecisions(Number(e.target.value))}
        className="w-full accent-mv-plum"
      />
      <p className="mt-2 text-sm text-mv-ink/70 dark:text-white/60">{decisions} decisions</p>
      <div className="mt-5 rounded-xl bg-mv-ink/[0.03] p-4 dark:bg-white/[0.04]">
        <p className="text-sm text-mv-ink/60 dark:text-white/50">Estimated decision fatigue</p>
        <p className="mt-2 font-display text-xl text-mv-ink dark:text-white">{fatigue}%</p>
        <p className="mt-1 text-xs text-mv-ink/45 dark:text-white/35">
          {fatigue > 60
            ? 'Consider a decision-free morning routine to preserve energy.'
            : 'Your decision load looks manageable today.'}
        </p>
      </div>
    </div>
  )
}

function FocusTimer() {
  const [seconds, setSeconds] = useState(25 * 60)
  const [running, setRunning] = useState(false)
  const total = 25 * 60
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => (s > 0 ? s - 1 : 0))
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running])

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')
  const progress = 1 - seconds / total

  return (
    <div className="flex flex-col items-center">
      <svg width="160" height="160" viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r="44" strokeWidth="6" className="fill-none stroke-mv-ink/8 dark:stroke-white/10" />
        <circle
          cx="50"
          cy="50"
          r="44"
          strokeWidth="6"
          strokeLinecap="round"
          className="fill-none stroke-mv-sage-dark dark:stroke-mv-sage"
          strokeDasharray={2 * Math.PI * 44}
          strokeDashoffset={2 * Math.PI * 44 * (1 - progress)}
        />
      </svg>
      <p className="-mt-24 font-display text-3xl text-mv-ink dark:text-white">
        {mins}:{secs}
      </p>
      <div className="mt-20 flex gap-3">
        <button
          onClick={() => setRunning((r) => !r)}
          className="rounded-full bg-mv-plum px-5 py-2 text-sm text-white dark:bg-white dark:text-mv-plum-deep"
        >
          {running ? 'Pause' : 'Start focus'}
        </button>
        <button
          onClick={() => {
            setRunning(false)
            setSeconds(total)
          }}
          className="rounded-full border border-mv-ink/15 px-5 py-2 text-sm text-mv-ink/70 dark:border-white/15 dark:text-white/60"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

const resetItems = [
  'Drink a glass of water',
  'No phone for the first 10 minutes',
  '5 deep breaths',
  'Write today’s one priority',
  'Stretch for 2 minutes',
]

function MorningReset() {
  const [done, setDone] = useState<Set<string>>(new Set())
  return (
    <div>
      {resetItems.map((item) => (
        <label
          key={item}
          className="mb-2 flex cursor-pointer items-center gap-3 rounded-xl border border-mv-ink/8 px-4 py-3 text-sm text-mv-ink/75 dark:border-white/10 dark:text-white/65"
        >
          <input
            type="checkbox"
            checked={done.has(item)}
            onChange={() =>
              setDone((prev) => {
                const next = new Set(prev)
                next.has(item) ? next.delete(item) : next.add(item)
                return next
              })
            }
            className="accent-mv-plum"
          />
          <span className={done.has(item) ? 'line-through opacity-50' : ''}>{item}</span>
        </label>
      ))}
      <p className="mt-3 text-sm text-mv-ink/60 dark:text-white/45">
        {done.size} / {resetItems.length} complete
      </p>
    </div>
  )
}

function BrainDump() {
  const [thoughts, setThoughts] = useState<string[]>([])
  const [input, setInput] = useState('')

  function addThought() {
    if (input.trim()) {
      setThoughts((t) => [...t, input.trim()])
      setInput('')
    }
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addThought()
          }}
          placeholder="Type a thought and hit enter..."
          className="flex-1 rounded-full border border-mv-ink/10 bg-transparent px-4 py-2 text-sm outline-none dark:border-white/15"
        />
        <button
          onClick={addThought}
          className="rounded-full bg-mv-plum px-4 py-2 text-sm text-white dark:bg-white dark:text-mv-plum-deep"
        >
          Add
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {thoughts.map((t, i) => (
          <span
            key={i}
            className="rounded-full bg-mv-ink/5 px-3 py-1.5 text-xs text-mv-ink/70 dark:bg-white/10 dark:text-white/60"
          >
            {t}
          </span>
        ))}
      </div>
      {thoughts.length > 0 && (
        <button onClick={() => setThoughts([])} className="mt-4 text-xs text-mv-ink/40 underline dark:text-white/35">
          Clear all
        </button>
      )}
    </div>
  )
}

const reflectionPrompts = [
  'What gave you energy this week?',
  'What drained you this week?',
  'What is one thing you’ll do differently next week?',
]

function WeeklyReflection() {
  const [answers, setAnswers] = useState(['', '', ''])
  return (
    <div className="space-y-4">
      {reflectionPrompts.map((prompt, i) => (
        <div key={prompt}>
          <p className="mb-1.5 text-sm text-mv-ink/70 dark:text-white/55">{prompt}</p>
          <textarea
            value={answers[i]}
            onChange={(e) => setAnswers((a) => a.map((v, idx) => (idx === i ? e.target.value : v)))}
            rows={2}
            className="w-full rounded-xl border border-mv-ink/10 bg-transparent p-3 text-sm outline-none dark:border-white/15"
          />
        </div>
      ))}
    </div>
  )
}

const panels: Record<ToolKey, () => ReactElement> = {
  load: MentalLoadCalculator,
  fatigue: DecisionFatigueCalculator,
  timer: FocusTimer,
  reset: MorningReset,
  dump: BrainDump,
  reflection: WeeklyReflection,
}

export function ToolsGrid() {
  const [active, setActive] = useState<ToolKey>('load')
  const Panel = panels[active]

  return (
    <section id="tools" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-14 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mv-sage-dark dark:text-mv-sage">Tools</p>
        <h2 className="mt-3 font-display text-4xl text-mv-ink sm:text-5xl dark:text-white">
          Practical relief, on demand
        </h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {tools.map((tool) => (
            <button
              key={tool.key}
              onClick={() => setActive(tool.key)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                active === tool.key
                  ? 'bg-mv-plum text-white dark:bg-white dark:text-mv-plum-deep'
                  : 'text-mv-ink/65 hover:bg-mv-ink/5 dark:text-white/55 dark:hover:bg-white/5'
              }`}
            >
              <tool.icon size={16} />
              {tool.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass min-h-[420px] rounded-3xl p-8"
        >
          <Panel />
        </motion.div>
      </div>
    </section>
  )
}
