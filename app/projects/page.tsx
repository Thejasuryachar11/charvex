import { Navigation } from "@/components/navigation"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { CTASection } from "@/components/cta-section"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProjectsHero />
      <ProjectsCarousel />
      <CTASection />
    </main>
  )
}
