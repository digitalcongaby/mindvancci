import { Check } from 'lucide-react'
import { pricingTiers, type PricingTier } from '@/data/content'
import { Reveal } from './Reveal'

// Replace with your real Systeme.io checkout/funnel URL(s) before launch.
const SYSTEME_IO_URL = 'https://systeme.io/'

function PricingCard({ tier, delay }: { tier: PricingTier; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className={`flex flex-col rounded-3xl p-8 ${
        tier.highlighted
          ? 'bg-mv-plum text-white shadow-[0_20px_50px_rgba(75,59,79,0.35)] dark:bg-white dark:text-mv-plum-deep'
          : 'glass'
      }`}
    >
      {tier.highlighted && (
        <span className="mb-4 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium dark:bg-mv-plum/10">
          Más elegido
        </span>
      )}
      <h3 className="font-display text-2xl">{tier.name}</h3>
      <p className={`mt-2 text-sm ${tier.highlighted ? 'opacity-80' : 'text-mv-ink/55 dark:text-white/50'}`}>
        {tier.description}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-4xl">{tier.price}</span>
        <span className={`text-sm ${tier.highlighted ? 'opacity-70' : 'text-mv-ink/45 dark:text-white/40'}`}>
          {tier.period}
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check size={15} className={`mt-0.5 shrink-0 ${tier.highlighted ? '' : 'text-mv-sage-dark dark:text-mv-sage'}`} />
            <span className={tier.highlighted ? 'opacity-90' : 'text-mv-ink/70 dark:text-white/60'}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={SYSTEME_IO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
          tier.highlighted
            ? 'bg-white text-mv-plum dark:bg-mv-plum-deep dark:text-white'
            : 'bg-mv-plum text-white dark:bg-white dark:text-mv-plum-deep'
        }`}
      >
        {tier.cta}
      </a>
    </Reveal>
  )
}

export function CoursesPricing() {
  const plannerTier = pricingTiers.find((t) => t.group === 'planner')
  const starterTiers = pricingTiers.filter((t) => t.group === 'starter')
  const deepTiers = pricingTiers.filter((t) => t.group === 'deep')

  return (
    <section id="courses" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mb-14 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mv-sage-dark dark:text-mv-sage">
          Tu punto de entrada
        </p>
        <h2 className="mt-3 font-display text-4xl text-mv-ink sm:text-5xl dark:text-white">
          Elige cómo quieres empezar
        </h2>
      </Reveal>

      {plannerTier && (
        <div className="mb-20">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.15em] text-mv-ink/45 dark:text-white/40">
            Para sostener tu semana por tu cuenta
          </p>
          <div className="mx-auto max-w-md">
            <PricingCard tier={plannerTier} delay={0} />
          </div>
        </div>
      )}

      {starterTiers.length > 0 && (
        <div className="mb-20">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.15em] text-mv-ink/45 dark:text-white/40">
            Primeros pasos en vivo
          </p>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {starterTiers.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} delay={i * 0.08} />
            ))}
          </div>
        </div>
      )}

      {deepTiers.length > 0 && (
        <div>
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.15em] text-mv-ink/45 dark:text-white/40">
            Acompañamiento más profundo
          </p>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {deepTiers.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} delay={i * 0.08} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
