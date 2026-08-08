import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { MethodTimeline } from '@/components/MethodTimeline'
import { DashboardDemo } from '@/components/DashboardDemo'
import { AICoach } from '@/components/AICoach'
import { ToolsGrid } from '@/components/ToolsGrid'
import { SuccessStories } from '@/components/SuccessStories'
import { CoursesPricing } from '@/components/CoursesPricing'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-mv-cream dark:bg-[#16131a]">
      <Nav />
      <main>
        <Hero />
        <MethodTimeline />
        <DashboardDemo />
        <AICoach />
        <ToolsGrid />
        <SuccessStories />
        <CoursesPricing />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
