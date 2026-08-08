import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

const suggestions = [
  'I feel scattered and can’t focus today',
  'My mind won’t stop racing at night',
  'I feel overloaded by everything on my plate',
]

const INTRO: ChatMessage = {
  role: 'assistant',
  content:
    'Hi, I’m MINDVANCCI AI. Tell me how you’re feeling right now, and I’ll suggest an exercise from the Method to help.',
}

export function AICoach() {
  const [messages, setMessages] = useState<ChatMessage[]>([INTRO])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function send(content: string) {
    if (!content.trim() || loading) return
    const next: ChatMessage[] = [...messages, { role: 'user', content }]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ai-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages((cur) => [
        ...cur,
        { role: 'assistant', content: data.reply || data.error || 'Something went quiet — try again shortly.' },
      ])
    } catch {
      setMessages((cur) => [
        ...cur,
        { role: 'assistant', content: 'I’m having trouble connecting right now. Please try again shortly.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="ai-coach" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal className="mb-12 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mv-sage-dark dark:text-mv-sage">
          Always with you
        </p>
        <h2 className="mt-3 font-display text-4xl text-mv-ink sm:text-5xl dark:text-white">MINDVANCCI AI</h2>
        <p className="mx-auto mt-4 max-w-xl text-mv-ink/60 dark:text-white/50">
          A gentle AI coach that helps you choose the right exercise for how you feel, right now.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="glass flex h-[560px] flex-col rounded-3xl p-4 sm:p-6">
        <div className="flex items-center gap-2 border-b border-mv-ink/8 pb-4 dark:border-white/10">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mv-sage/20 text-mv-sage-dark dark:text-mv-sage">
            <Sparkles size={15} />
          </div>
          <p className="text-sm font-medium text-mv-ink dark:text-white">MINDVANCCI AI Coach</p>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto py-5">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-mv-plum text-white dark:bg-white dark:text-mv-plum-deep'
                    : 'bg-mv-ink/5 text-mv-ink/85 dark:bg-white/10 dark:text-white/80'
                }`}
              >
                {m.content}
              </div>
            </motion.div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl bg-mv-ink/5 px-4 py-3 dark:bg-white/10">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-mv-ink/40 dark:bg-white/40"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {messages.length <= 1 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-mv-ink/10 px-3 py-1.5 text-xs text-mv-ink/60 hover:bg-mv-ink/5 dark:border-white/15 dark:text-white/50"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault()
            send(input)
          }}
          className="flex items-center gap-2 rounded-full border border-mv-ink/10 bg-white/70 px-2 py-2 dark:border-white/10 dark:bg-white/5"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell me how you're feeling..."
            className="flex-1 bg-transparent px-3 py-1.5 text-sm text-mv-ink outline-none placeholder:text-mv-ink/35 dark:text-white dark:placeholder:text-white/30"
          />
          <button
            type="submit"
            disabled={loading}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-mv-plum text-white transition-transform hover:scale-105 disabled:opacity-40 dark:bg-white dark:text-mv-plum-deep"
            aria-label="Send message"
          >
            <Send size={15} />
          </button>
        </form>
      </Reveal>
    </section>
  )
}
