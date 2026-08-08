export interface MethodStage {
  stage: number
  title: string
  subtitle: string
  description: string
  practices: string[]
}

export const methodStages: MethodStage[] = [
  {
    stage: 1,
    title: 'Mental Awareness',
    subtitle: 'See the load before you can lighten it',
    description:
      'You learn to notice mental saturation as it happens — the racing thoughts, the fog, the subtle tension — instead of pushing through it. Awareness is the foundation every other stage builds on.',
    practices: ['Daily saturation check-ins', 'Body-mind signal mapping', 'Thought pattern journaling'],
  },
  {
    stage: 2,
    title: 'Mental Detox',
    subtitle: 'Clear what no longer serves you',
    description:
      'A structured process to release mental clutter: unfinished loops, unspoken decisions, and accumulated tension. This stage creates real space in your mind for the first time in a long time.',
    practices: ['Guided brain dump protocol', 'Decision backlog clearing', 'Digital and sensory decluttering'],
  },
  {
    stage: 3,
    title: 'Focus Recovery',
    subtitle: 'Rebuild your capacity to concentrate',
    description:
      'With space created, you retrain your attention span using science-backed focus intervals, single-tasking rituals, and environment design that protects deep work.',
    practices: ['Deep work interval training', 'Attention reset rituals', 'Distraction-proof environments'],
  },
  {
    stage: 4,
    title: 'Productive Balance',
    subtitle: 'Sustainable output, not burnout output',
    description:
      'You design a rhythm of effort and recovery that matches your real energy — not an idealized schedule. Productivity becomes a byproduct of wellbeing, not a trade against it.',
    practices: ['Energy-based scheduling', 'Boundary and capacity design', 'Recovery-by-design routines'],
  },
  {
    stage: 5,
    title: 'Expansion',
    subtitle: 'Grow without losing your center',
    description:
      'With a calmer, clearer mind as your baseline, you expand your goals, relationships, and ambitions from a place of stability rather than survival mode.',
    practices: ['Values-aligned goal setting', 'Sustainable growth planning', 'Ongoing mental fitness practice'],
  },
]

export interface Testimonial {
  name: string
  role: string
  quote: string
  result: string
  avatarSeed: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Camila R.',
    role: 'Founder, design studio',
    quote:
      'MINDVANCCI gave me language for what I was feeling and a real path out of it. Six weeks in, I finally feel like myself again.',
    result: 'Mental saturation −62%',
    avatarSeed: 'camila',
  },
  {
    name: 'Priya N.',
    role: 'VP of Operations',
    quote:
      'The Focus Recovery stage alone changed how I work. I get more done in four focused hours than I used to in ten scattered ones.',
    result: 'Focus score +48%',
    avatarSeed: 'priya',
  },
  {
    name: 'Sofia M.',
    role: 'Mother of three, physician',
    quote:
      'I didn’t think I had room in my life for a method. Turns out I didn’t have room *not* to. This is the calmest I’ve felt in years.',
    result: 'Sleep quality +55%',
    avatarSeed: 'sofia',
  },
  {
    name: 'Alina T.',
    role: 'Product lead',
    quote:
      'It’s the first program that treated my overwhelm as a systems problem, not a discipline problem. That reframe changed everything.',
    result: 'Burnout risk −70%',
    avatarSeed: 'alina',
  },
]

export const stats = [
  { label: 'Women guided through the Method', value: 12400, suffix: '+' },
  { label: 'Average saturation reduction', value: 58, suffix: '%' },
  { label: 'Report improved focus in week one', value: 91, suffix: '%' },
  { label: 'Would recommend to a friend', value: 97, suffix: '%' },
]

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Foundations',
    price: '$47',
    period: 'one-time',
    description: 'Start your journey with the core awareness and detox practices.',
    features: [
      'Stage 1 & 2: Awareness + Detox',
      'Mental Saturation Assessment report',
      'Core toolkit (Brain Dump, Morning Reset)',
      'Private community access',
    ],
    cta: 'Buy Now',
  },
  {
    name: 'The Full Method',
    price: '$197',
    period: 'one-time',
    description: 'The complete five-stage MINDVANCCI transformation experience.',
    features: [
      'All 5 stages, fully guided',
      'MINDVANCCI AI Coach access',
      'Full tools suite unlocked',
      'Weekly live group sessions',
      'Lifetime updates',
    ],
    highlighted: true,
    cta: 'Buy Now',
  },
  {
    name: 'Executive 1:1',
    price: '$890',
    period: 'per month',
    description: 'The Full Method plus private coaching for high-capacity leaders.',
    features: [
      'Everything in The Full Method',
      'Monthly 1:1 coaching sessions',
      'Custom mental load audit',
      'Direct message support',
    ],
    cta: 'Buy Now',
  },
]

export interface DashboardDay {
  day: string
  saturation: number
  focus: number
  energy: number
}

export const weekData: DashboardDay[] = [
  { day: 'Mon', saturation: 68, focus: 42, energy: 40 },
  { day: 'Tue', saturation: 61, focus: 48, energy: 45 },
  { day: 'Wed', saturation: 57, focus: 52, energy: 50 },
  { day: 'Thu', saturation: 50, focus: 58, energy: 55 },
  { day: 'Fri', saturation: 44, focus: 63, energy: 60 },
  { day: 'Sat', saturation: 38, focus: 66, energy: 68 },
  { day: 'Sun', saturation: 33, focus: 71, energy: 74 },
]

export const achievements = [
  { title: '7-Day Streak', description: 'Completed daily check-ins for a full week', icon: 'flame' },
  { title: 'Deep Breather', description: 'Finished 10 breathing exercises', icon: 'wind' },
  { title: 'Brain Dump Pro', description: 'Cleared 25 mental loops', icon: 'brain' },
  { title: 'Focus Finisher', description: 'Completed 5 deep focus sessions', icon: 'target' },
]
