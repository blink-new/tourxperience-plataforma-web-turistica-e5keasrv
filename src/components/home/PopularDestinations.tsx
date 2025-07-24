import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslations } from '../../i18n'

export function PopularDestinations() {
  const t = useTranslations()
  const navigate = useNavigate()

  const handleDestinationClick = (destinationId: string) => {
    navigate(`/search?destination=${destinationId}`)
  }

  const destinations = [
    {
      id: 'mexico-city',
      name: 'Mexico City',
      country: 'Mexico',
      description: 'Historic capital with ancient pyramids and vibrant culture',
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop',
      activityCount: 247,
      rating: 4.8,
      popular: true,
      badge: 'Most Popular'
    },
    {
      id: 'cancun',
      name: 'Cancún',
      country: 'Mexico',
      description: 'Caribbean paradise with pristine beaches and Mayan ruins',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      activityCount: 189,
      rating: 4.7,
      popular: true,
      badge: 'Beach Paradise'
    },
    {
      id: 'playa-del-carmen',
      name: 'Playa del Carmen',
      country: 'Mexico',
      description: 'Bohemian beach town with cenotes and nightlife',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      activityCount: 156,
      rating: 4.6,
      popular: true,
      badge: 'Trendy'
    },
    {
      id: 'guadalajara',
      name: 'Guadalajara',
      country: 'Mexico',
      description: 'Birthplace of tequila and mariachi music',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      activityCount: 98,
      rating: 4.5,
      popular: false,
      badge: 'Cultural Hub'
    },
    {
      id: 'oaxaca',
      name: 'Oaxaca',
      country: 'Mexico',
      description: 'UNESCO World Heritage site with incredible cuisine',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
      activityCount: 87,
      rating: 4.9,
      popular: false,
      badge: 'Foodie Paradise'
    },
    {
      id: 'puerto-vallarta',
      name: 'Puerto Vallarta',
      country: 'Mexico',
      description: 'Pacific coast gem with whale watching and beaches',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      activityCount: 134,
      rating: 4.4,
      popular: false,
      badge: 'Pacific Coast'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing experiences in Mexico's most beloved destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card 
              key={destination.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              onClick={() => handleDestinationClick(destination.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-white/90 text-gray-800 font-medium"
                  >
                    {destination.badge}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{destination.rating}</span>
                </div>

                {/* Location */}
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm opacity-90">{destination.country}</span>
                  </div>
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                </div>
              </div>
              
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">
                      {destination.activityCount}
                    </span> activities
                  </div>
                  
                  <div className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                    Explore →
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/destinations')}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Destinations
            <MapPin className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}