import { Navigation } from "@/components/navigation"
import { CareersHero } from "@/components/careers-hero"
import { CultureSection } from "@/components/culture-section"
import { JobListings } from "@/components/job-listings"
import { CTASection } from "@/components/cta-section"

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CareersHero />
      <CultureSection />
      <JobListings />
      <CTASection />
    </main>
  )
}
