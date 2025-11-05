import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { VisionMission } from "@/components/vision-mission"
import { TeamSection } from "@/components/team-section"
import { GlobeSection } from "@/components/globe-section"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <VisionMission />
      <TeamSection />
      <GlobeSection />
      <CTASection />
    </main>
  )
}
