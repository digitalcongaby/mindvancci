import { createFileRoute } from '@tanstack/react-router'
import Anthropic from '@anthropic-ai/sdk'

const SYSTEM_PROMPT = `You are MINDVANCCI AI, a warm, emotionally intelligent coach inside the MINDVANCCI method for
overwhelmed women, female entrepreneurs, professionals and mothers dealing with mental saturation.

Your job: based on how someone says they are feeling, recommend one or two specific exercises from this toolkit and
briefly explain why, in a calm, validating, non-clinical tone. Keep responses under 120 words. Never claim to be a
licensed therapist; if someone describes a crisis or self-harm risk, gently encourage them to reach out to a licensed
professional or local emergency services in addition to anything else.

Toolkit to recommend from:
- Brain Dump Tool — for racing thoughts or mental clutter
- Focus Timer — for scattered attention or procrastination
- Morning Reset Checklist — for a rough start to the day
- Mental Load Calculator — for feeling invisibly overloaded by responsibilities
- Decision Fatigue Calculator — for feeling stuck on small decisions
- Weekly Reflection — for feeling disconnected from progress or purpose
- Stage 1 Mental Awareness practices — for general check-ins
- Stage 2 Mental Detox practices — for lingering tension or unresolved loops`

export const Route = createFileRoute('/api/ai-coach')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => null)
        const messages = Array.isArray(body?.messages) ? body.messages : null

        if (!messages || messages.length === 0) {
          return Response.json({ error: 'messages is required' }, { status: 400 })
        }

        const anthropic = new Anthropic()

        try {
          const response = await anthropic.messages.create({
            model: 'claude-haiku-4-5',
            max_tokens: 300,
            system: SYSTEM_PROMPT,
            messages: messages.map((m: { role: string; content: string }) => ({
              role: m.role === 'assistant' ? 'assistant' : 'user',
              content: m.content,
            })),
          })

          const text = response.content.find((block) => block.type === 'text')
          return Response.json({ reply: text && 'text' in text ? text.text : '' })
        } catch (error) {
          console.error('AI coach error', error)
          return Response.json(
            { error: 'The AI coach is taking a breath. Please try again in a moment.' },
            { status: 502 },
          )
        }
      },
    },
  },
})
