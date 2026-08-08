import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { Reveal } from './Reveal'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'newsletter', email }),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <Reveal className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-mv-sage/25 blur-3xl"
        />
        <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mv-gold/15 text-mv-gold">
          <Mail size={20} />
        </div>
        <h2 className="relative mt-5 font-display text-3xl text-mv-ink sm:text-4xl dark:text-white">
          Weekly calm, delivered
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-mv-ink/60 dark:text-white/50">
          One short email a week with a Method insight, a tool, and a reminder that you&rsquo;re not broken — just
          overloaded.
        </p>

        {status === 'done' ? (
          <p className="relative mt-8 text-sm font-medium text-mv-sage-dark dark:text-mv-sage">
            You&rsquo;re on the list. Welcome to a calmer inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-mv-ink/10 bg-white/70 px-5 py-3 text-sm outline-none placeholder:text-mv-ink/35 dark:border-white/15 dark:bg-white/5 dark:placeholder:text-white/30"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-full bg-mv-plum px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-50 dark:bg-white dark:text-mv-plum-deep"
            >
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="relative mt-3 text-xs text-rose-500">Something went wrong. Please try again.</p>
        )}
      </Reveal>
    </section>
  )
}
