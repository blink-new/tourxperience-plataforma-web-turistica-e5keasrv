import { HeroSection } from '@/components/home/HeroSection'
import { CategorySection } from '@/components/home/CategorySection'
import { PopularDestinations } from '@/components/home/PopularDestinations'
import { FeaturedActivities } from '@/components/home/FeaturedActivities'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <PopularDestinations />
      <FeaturedActivities />
    </div>
  )
}