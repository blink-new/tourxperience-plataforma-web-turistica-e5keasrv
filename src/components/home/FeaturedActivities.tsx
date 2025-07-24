import { Star, Clock, Users, MapPin, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTranslations } from '../../i18n'

export function FeaturedActivities() {
  const t = useTranslations()
  
  const featuredActivities = [
    {
      id: '1',
      title: 'Eiffel Tower Skip-the-Line Tour with Summit Access',
      location: 'Paris, France',
      price: 89,
      originalPrice: 120,
      currency: 'USD',
      rating: 4.8,
      reviewCount: 2847,
      duration: '3 hours',
      maxGroupSize: 15,
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop',
      category: 'Landmarks & Monuments',
      highlights: ['Skip-the-line access', 'Professional guide', 'Summit access'],
      badge: 'Bestseller'
    },
    {
      id: '2',
      title: 'Tokyo Food Walking Tour in Shibuya & Harajuku',
      location: 'Tokyo, Japan',
      price: 75,
      currency: 'USD',
      rating: 4.9,
      reviewCount: 1523,
      duration: '4 hours',
      maxGroupSize: 12,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
      category: 'Food & Drink',
      highlights: ['Local street food', 'Cultural insights', 'Small group'],
      badge: 'New'
    },
    {
      id: '3',
      title: 'Central Park Horse Carriage Ride',
      location: 'New York, USA',
      price: 65,
      currency: 'USD',
      rating: 4.6,
      reviewCount: 892,
      duration: '1 hour',
      maxGroupSize: 4,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
      category: 'Outdoor Activities',
      highlights: ['Romantic experience', 'Photo opportunities', 'Historic route'],
    },
    {
      id: '4',
      title: 'Sagrada Familia Fast-Track Guided Tour',
      location: 'Barcelona, Spain',
      price: 45,
      currency: 'USD',
      rating: 4.7,
      reviewCount: 3241,
      duration: '2 hours',
      maxGroupSize: 20,
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop',
      category: 'Architecture',
      highlights: ['Fast-track entry', 'Expert guide', 'Audio headsets'],
      badge: 'Popular'
    },
    {
      id: '5',
      title: 'Sunset Catamaran Cruise with Dinner',
      location: 'Santorini, Greece',
      price: 120,
      currency: 'USD',
      rating: 4.9,
      reviewCount: 756,
      duration: '5 hours',
      maxGroupSize: 30,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      category: 'Cruises & Water Tours',
      highlights: ['Sunset views', 'Dinner included', 'Swimming stops'],
      badge: 'Luxury'
    },
    {
      id: '6',
      title: 'Colosseum Underground & Arena Floor Tour',
      location: 'Rome, Italy',
      price: 95,
      currency: 'USD',
      rating: 4.8,
      reviewCount: 1876,
      duration: '3.5 hours',
      maxGroupSize: 18,
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop',
      category: 'Historical Sites',
      highlights: ['Underground access', 'Arena floor', 'Skip-the-line'],
      badge: 'Exclusive'
    }
  ]

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'default'
      case 'New': return 'secondary'
      case 'Popular': return 'outline'
      case 'Luxury': return 'destructive'
      case 'Exclusive': return 'secondary'
      default: return 'outline'
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.home.featuredActivities}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular tours and activities, handpicked by travelers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredActivities.map((activity) => (
            <Card key={activity.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 rounded-full p-2"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Badge */}
                {activity.badge && (
                  <Badge 
                    variant={getBadgeVariant(activity.badge)}
                    className="absolute top-2 left-2"
                  >
                    {activity.badge}
                  </Badge>
                )}

                {/* Discount Badge */}
                {activity.originalPrice && (
                  <Badge variant="destructive" className="absolute bottom-2 left-2">
                    Save ${activity.originalPrice - activity.price}
                  </Badge>
                )}
              </div>

              <CardContent className="p-4 space-y-3">
                {/* Category */}
                <Badge variant="outline" className="text-xs">
                  {activity.category}
                </Badge>

                {/* Title */}
                <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {activity.location}
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{activity.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({activity.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Details */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Up to {activity.maxGroupSize}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1">
                  {activity.highlights.slice(0, 2).map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Price & Book Button */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      {activity.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${activity.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary">
                        ${activity.price}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                  <Button className="font-semibold">
                    {t.home.bookNow}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            {t.home.viewAll}
          </Button>
        </div>
      </div>
    </section>
  )
}