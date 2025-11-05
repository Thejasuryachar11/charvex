import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { DetailedServices } from "@/components/detailed-services"
import { CTASection } from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <DetailedServices />
      <CTASection />
    </main>
  )
}
