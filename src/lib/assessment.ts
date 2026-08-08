export interface AssessmentOption {
  label: string
  value: number
}

export interface AssessmentQuestion {
  id: number
  prompt: string
  options: AssessmentOption[]
}

const scale: AssessmentOption[] = [
  { label: 'Rarely', value: 0 },
  { label: 'Sometimes', value: 1 },
  { label: 'Often', value: 3 },
  { label: 'Almost always', value: 4 },
]

const prompts = [
  'I feel like my mind has too many tabs open at once.',
  'I struggle to focus on one task for more than a few minutes.',
  'I feel mentally exhausted even after a full night of sleep.',
  'I replay conversations or decisions over and over in my head.',
  'I have trouble saying no, even when I am already overwhelmed.',
  'Small decisions (what to eat, what to wear) feel unexpectedly draining.',
  'I feel guilty when I am resting or not being productive.',
  'My to-do list feels endless, no matter how much I finish.',
  'I feel disconnected from my body and physical needs.',
  'I get irritated more easily than I used to.',
  'I check my phone or email out of anxiety rather than need.',
  'I feel like I am always taking care of everyone except myself.',
  'I have difficulty falling asleep because my mind will not quiet down.',
  'I forget things I would normally remember easily.',
  'I feel like I am running on empty most days.',
  'I compare my pace and output to others and feel behind.',
  'I avoid stillness or silence because it feels uncomfortable.',
  'I feel like I cannot enjoy the present moment.',
  'My body shows signs of stress (tension, headaches, fatigue).',
  'I feel like I have lost touch with what actually matters to me.',
]

export const questions: AssessmentQuestion[] = prompts.map((prompt, i) => ({
  id: i + 1,
  prompt,
  options: scale,
}))

export type ProfileKey =
  | 'calm-mind'
  | 'busy-achiever'
  | 'overloaded-thinker'
  | 'burnout-risk'
  | 'mental-emergency'

export interface Profile {
  key: ProfileKey
  name: string
  range: [number, number]
  tagline: string
  description: string
  strengths: string[]
  weaknesses: string[]
  nextStep: string
  gradient: string
  accent: string
}

export const profiles: Profile[] = [
  {
    key: 'calm-mind',
    name: 'Calm Mind',
    range: [0, 20],
    tagline: 'Grounded and clear',
    description:
      'Your mind has healthy rhythms of effort and rest. You navigate demands without losing your center, and your baseline of calm is a genuine asset.',
    strengths: ['Strong emotional regulation', 'Clear boundaries', 'Restorative sleep and rest habits'],
    weaknesses: ['May under-notice early stress signals', 'Can absorb others’ overwhelm without realizing it'],
    nextStep: 'Deepen your practice with Mental Awareness tools to protect this calm as demands grow.',
    gradient: 'from-emerald-200/60 via-mv-sage/30 to-transparent',
    accent: 'text-mv-sage-dark',
  },
  {
    key: 'busy-achiever',
    name: 'Busy Achiever',
    range: [21, 40],
    tagline: 'High-functioning, quietly stretched',
    description:
      'You get things done, often impressively so. But the pace is starting to draw on reserves faster than you replenish them, hidden behind competence.',
    strengths: ['High drive and follow-through', 'Excellent under pressure', 'Strong sense of purpose'],
    weaknesses: ['Difficulty resting without guilt', 'Decision fatigue by afternoon', 'Running on willpower, not energy'],
    nextStep: 'Begin Mental Detox to release accumulated mental clutter before it compounds.',
    gradient: 'from-amber-200/50 via-mv-gold/25 to-transparent',
    accent: 'text-mv-gold',
  },
  {
    key: 'overloaded-thinker',
    name: 'Overloaded Thinker',
    range: [41, 60],
    tagline: 'Full mind, fragmented focus',
    description:
      'Your mental load has crossed into overload. Thoughts loop, focus fractures, and even simple tasks now require disproportionate effort.',
    strengths: ['Deep awareness that something needs to change', 'Strong capacity for insight once space is created'],
    weaknesses: ['Racing thoughts', 'Fragmented attention', 'Rising anxiety around unfinished tasks'],
    nextStep: 'Prioritize Focus Recovery to rebuild your attention span and quiet the mental noise.',
    gradient: 'from-orange-200/50 via-mv-rose/30 to-transparent',
    accent: 'text-mv-plum',
  },
  {
    key: 'burnout-risk',
    name: 'Burnout Risk',
    range: [61, 80],
    tagline: 'Reserves running low',
    description:
      'You are operating in a persistent stress state. Your body and mind are sending clear signals that the current pace is not sustainable.',
    strengths: ['Resilience built from experience', 'Willingness to seek support (you are here)'],
    weaknesses: ['Chronic fatigue', 'Emotional volatility', 'Physical stress symptoms', 'Loss of enjoyment'],
    nextStep: 'Start with Mental Detox and Productive Balance together, with real rest built in.',
    gradient: 'from-rose-300/50 via-mv-plum/25 to-transparent',
    accent: 'text-rose-500',
  },
  {
    key: 'mental-emergency',
    name: 'Mental Emergency',
    range: [81, 100],
    tagline: 'Immediate care needed',
    description:
      'Your mental saturation is at a critical level. This is a strong signal to slow down deliberately and prioritize stabilization before anything else.',
    strengths: ['Courage to take this assessment', 'Clarity that change cannot wait'],
    weaknesses: ['Overwhelm affecting daily functioning', 'High risk of burnout or health impact'],
    nextStep: 'Begin with guided Mental Awareness support and consider speaking with a licensed professional alongside the Method.',
    gradient: 'from-rose-400/60 via-mv-plum-deep/40 to-transparent',
    accent: 'text-rose-600',
  },
]

const MAX_SCORE = prompts.length * 4

export function computeScore(answers: number[]): number {
  const total = answers.reduce((sum, v) => sum + v, 0)
  return Math.round((total / MAX_SCORE) * 100)
}

export function profileForScore(score: number): Profile {
  return profiles.find((p) => score >= p.range[0] && score <= p.range[1]) ?? profiles[profiles.length - 1]
}
