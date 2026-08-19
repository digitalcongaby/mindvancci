
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
  group: 'planner' | 'starter' | 'deep'
}
 
export const pricingTiers: PricingTier[] = [
  {
    name: 'Planner Empresarias Saturadas',
    price: '$8',
    period: 'PDF descargable',
    description: 'El planner que no te pide que hagas más. Te ayuda a ver qué sistema estás sosteniendo esta semana.',
    features: [
      'Plantilla semanal de energía (Energy Budget™)',
      'Tracker de hábitos ancla (Anchor Habits™)',
      'Checklist de los 10 Bloqueos Invisibles, para revisar cada semana',
      'Prompts breves de reflexión (2-3 preguntas, no un diario largo)',
      'PDF descargable e imprimible',
    ],
    cta: 'Comprar el Planner',
    group: 'planner',
  },
  {
    name: 'Masterclass Mindvancci Reset™',
    price: '$20',
    period: '1 día · 4 horas con breaks',
    description: 'Vas a salir de esta masterclass sabiendo exactamente cuáles de tus 10 Bloqueos Invisibles están activos ahora mismo, y por qué "hacer más" nunca los va a resolver.',
    features: [
      'Masterclass en vivo de 4 horas (con breaks)',
      'Recorrido completo de los 10 Bloqueos Invisibles',
      'Overview del método en 5 fases (OBSERVE → EXPAND)',
      'Q&A en vivo',
      'Replay disponible 48-72h',
    ],
    cta: 'Reserva tu cupo',
    group: 'starter',
  },
  {
    name: 'Taller Intensivo de Rediseño',
    price: '$47',
    period: '2 días de Zoom',
    description: 'En 2 sesiones no solo entiendes tu sistema — empiezas a reconstruirlo con las piezas que más rápido cambian cómo sostienes tu día: tus ciclos abiertos y tus decisiones.',
    features: [
      '2 sesiones en vivo por Zoom (90-120 min c/u)',
      'Ejercicios en vivo, no solo teoría',
      'Replay disponible 48-72h por sesión',
    ],
    cta: 'Únete al Taller',
    group: 'starter',
  },
  {
    name: 'Taller Intensivo de Rediseño — Semana Completa',
    price: '$147',
    period: '3 días de Zoom en 1 semana + kit de herramientas',
    description: 'No solo rediseñas tu sistema en vivo — te vas con las herramientas para sostenerlo la semana siguiente, sin depender de motivación.',
    features: [
      '3 sesiones en vivo por Zoom, repartidas en 1 semana',
      'Workbook descargable de los 10 Bloqueos Invisibles',
      'Plantilla Energy Budget™ y tracker Anchor Habits™',
      'Hoja de trabajo del Sistema de Decisiones Mindvancci™',
      'Replay extendido: 7 días por sesión',
      'Canal temporal de la cohorte para dudas entre sesiones',
      'Sesión bonus de Q&A asincrónica al cierre de la semana',
    ],
    highlighted: true,
    cta: 'Reserva la Semana Completa',
    group: 'deep',
  },
  {
    name: 'Mindvancci 1:1',
    price: '$499',
    period: 'Todo el nivel de $147 + consulta privada',
    description: 'Lo mismo que en el taller grupal, pero aplicado a tu caso específico, con alguien mirando tu sistema en particular — no un sistema promedio.',
    features: [
      'Todo lo del Taller Semana Completa (3 sesiones + kit de herramientas)',
      'Sesión 1:1 de 60-90 min por Zoom, con el diagnóstico aplicado a tu negocio real',
      'Energy Budget™ y Anchor Habits™ diseñados en vivo para tu semana, no en genérico',
      'Plan de intervención priorizado a 30 días: qué bloqueo atacar primero',
      'Documento-resumen en PDF con el plan acordado',
      'Acceso prioritario por email/WhatsApp durante 2 semanas post-sesión',
    ],
    cta: 'Aplica para el 1:1',
    group: 'deep',
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
