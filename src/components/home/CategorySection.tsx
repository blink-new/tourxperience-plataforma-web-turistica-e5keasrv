import { 
  Camera, 
  Utensils, 
  Mountain, 
  Building, 
  Waves, 
  TreePine, 
  Palette, 
  Music,
  Car,
  Plane,
  Heart,
  Users
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'
import { useTranslations } from '../../i18n'

export function CategorySection() {
  const t = useTranslations()
  const navigate = useNavigate()

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/search?category=${categoryId}`)
  }
  
  const categories = [
    {
      id: 'sightseeing',
      name: t.categories.sightseeing,
      icon: Camera,
      count: 1247,
      color: 'bg-blue-100 text-blue-600',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300&h=200&fit=crop'
    },
    {
      id: 'food-drink',
      name: t.categories.foodDrink,
      icon: Utensils,
      count: 892,
      color: 'bg-orange-100 text-orange-600',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop'
    },
    {
      id: 'outdoor',
      name: 'Outdoor Activities',
      icon: Mountain,
      count: 654,
      color: 'bg-green-100 text-green-600',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop'
    },
    {
      id: 'cultural',
      name: 'Cultural Experiences',
      icon: Building,
      count: 743,
      color: 'bg-purple-100 text-purple-600',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop'
    },
    {
      id: 'water-sports',
      name: 'Water Sports',
      icon: Waves,
      count: 456,
      color: 'bg-cyan-100 text-cyan-600',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop'
    },
    {
      id: 'nature',
      name: 'Nature & Wildlife',
      icon: TreePine,
      count: 589,
      color: 'bg-emerald-100 text-emerald-600',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop'
    },
    {
      id: 'art-culture',
      name: 'Art & Culture',
      icon: Palette,
      count: 367,
      color: 'bg-pink-100 text-pink-600',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop'
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      icon: Music,
      count: 298,
      color: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop'
    },
    {
      id: 'transportation',
      name: 'Transportation',
      icon: Car,
      count: 234,
      color: 'bg-gray-100 text-gray-600',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop'
    },
    {
      id: 'day-trips',
      name: 'Day Trips',
      icon: Plane,
      count: 445,
      color: 'bg-red-100 text-red-600',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop'
    },
    {
      id: 'romantic',
      name: 'Romantic',
      icon: Heart,
      count: 189,
      color: 'bg-rose-100 text-rose-600',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop'
    },
    {
      id: 'family',
      name: 'Family Friendly',
      icon: Users,
      count: 567,
      color: 'bg-yellow-100 text-yellow-600',
      image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&h=200&fit=crop'
    }
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.home.categories}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect experience for your interests and travel style
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className={`absolute top-2 left-2 p-2 rounded-lg ${category.color} bg-opacity-90`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                </div>
                
                <CardContent className="p-3 text-center">
                  <h3 className="font-semibold text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count.toLocaleString()} activities
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}