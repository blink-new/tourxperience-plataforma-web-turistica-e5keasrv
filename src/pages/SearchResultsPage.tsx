import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Activity } from '@/types'
import { Search, SlidersHorizontal, Grid, List, MapPin, Calendar, Users, Star, Clock, Heart } from 'lucide-react'
import { getActivitiesByDestination, getActivitiesByCategory, searchActivities, mockActivities } from '../data/mockInventory'
import { useNavigate } from 'react-router-dom'

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('recommended')
  const [showFilters, setShowFilters] = useState(true)
  const [favorites, setFavorites] = useState<string[]>([])
  
  const [filters, setFilters] = useState({
    priceRange: [0, 500] as [number, number],
    duration: [] as string[],
    rating: 0,
    categories: [] as string[],
    languages: [] as string[],
    groupSize: ''
  })

  // Get search parameters
  const destination = searchParams.get('destination') || ''
  const category = searchParams.get('category') || ''
  const query = searchParams.get('q') || ''
  const checkIn = searchParams.get('checkIn') || ''
  const guests = searchParams.get('guests') || '2'

  // Load activities based on search parameters
  useEffect(() => {
    setLoading(true)
    
    let filteredActivities: Activity[] = []
    
    if (destination) {
      // Handle destination filtering - match both exact and partial names
      filteredActivities = mockActivities.filter(activity => {
        const activityDestination = activity.destination.toLowerCase()
        const searchDestination = destination.toLowerCase()
        return activityDestination.includes(searchDestination) || 
               searchDestination.includes(activityDestination)
      })
    } else if (category) {
      filteredActivities = getActivitiesByCategory(category)
    } else if (query) {
      filteredActivities = searchActivities(query)
    } else {
      filteredActivities = mockActivities
    }

    // Simulate API loading
    setTimeout(() => {
      setActivities(filteredActivities)
      setLoading(false)
    }, 500)
  }, [destination, category, query])

  const handleBookNow = (activity: Activity) => {
    navigate(`/activity/${activity.id}`)
  }

  const handleToggleFavorite = (activityId: string) => {
    setFavorites(prev => 
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    )
  }

  const getSearchTitle = () => {
    if (destination) {
      // Handle destination names - both Spanish and English versions
      const destinationNames: { [key: string]: string } = {
        'ciudad de méxico': 'Ciudad de México',
        'mexico city': 'Ciudad de México',
        'cdmx': 'Ciudad de México',
        'cancún': 'Cancún',
        'cancun': 'Cancún',
        'playa del carmen': 'Playa del Carmen',
        'guadalajara': 'Guadalajara',
        'oaxaca': 'Oaxaca',
        'puerto vallarta': 'Puerto Vallarta'
      }
      const displayName = destinationNames[destination.toLowerCase()] || destination
      return `Actividades en ${displayName}`
    }
    
    if (category) {
      const categoryNames: { [key: string]: string } = {
        'sightseeing': 'Tours y Visitas Guiadas',
        'food-drink': 'Experiencias Gastronómicas',
        'outdoor': 'Aventuras al Aire Libre',
        'cultural': 'Experiencias Culturales',
        'water-sports': 'Deportes Acuáticos',
        'nature': 'Naturaleza y Vida Silvestre',
        'art-culture': 'Arte y Cultura',
        'entertainment': 'Entretenimiento',
        'transportation': 'Transporte',
        'day-trips': 'Excursiones de un Día',
        'romantic': 'Experiencias Románticas',
        'family': 'Actividades Familiares'
      }
      return categoryNames[category] || `Actividades de ${category}`
    }
    
    if (query) {
      return `Search results for "${query}"`
    }
    
    return 'All Activities'
  }

  const sortActivities = (activities: Activity[]) => {
    switch (sortBy) {
      case 'price-low':
        return [...activities].sort((a, b) => a.price - b.price)
      case 'price-high':
        return [...activities].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...activities].sort((a, b) => b.rating - a.rating)
      case 'duration':
        return [...activities].sort((a, b) => {
          const aDuration = parseInt(a.duration.split(' ')[0])
          const bDuration = parseInt(b.duration.split(' ')[0])
          return aDuration - bDuration
        })
      default:
        return activities
    }
  }

  const filteredActivities = sortActivities(activities.filter(activity => {
    // Price filter
    if (activity.price < filters.priceRange[0] || activity.price > filters.priceRange[1]) {
      return false
    }
    
    // Rating filter
    if (filters.rating > 0 && activity.rating < filters.rating) {
      return false
    }
    
    return true
  }))

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-96 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>{destination || category || 'All destinations'}</span>
            {checkIn && (
              <>
                <span>•</span>
                <Calendar className="h-4 w-4" />
                <span>{checkIn}</span>
              </>
            )}
            <span>•</span>
            <Users className="h-4 w-4" />
            <span>{guests} guests</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">
            {getSearchTitle()}
          </h1>
          
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredActivities.length} activities found
            </p>
            
            <div className="flex items-center gap-4">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
              
              {/* View Mode */}
              <div className="flex items-center border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="w-full">
          {filteredActivities.length === 0 ? (
            <Card className="p-8 text-center">
              <CardContent>
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No activities found</h3>
                <p className="text-muted-foreground mb-4">
                  Try searching for a different destination or category
                </p>
                <Button onClick={() => navigate('/')}>Back to Home</Button>
              </CardContent>
            </Card>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredActivities.map((activity) => (
                <Card key={activity.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.images[0]}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggleFavorite(activity.id)
                      }}
                      className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          favorites.includes(activity.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-600'
                        }`} 
                      />
                    </button>

                    {/* Rating */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{activity.rating}</span>
                      <span className="text-xs opacity-75">({activity.reviewCount})</span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-3 right-3 text-white">
                      <div className="text-right">
                        {activity.originalPrice && (
                          <div className="text-sm line-through opacity-75">
                            ${activity.originalPrice}
                          </div>
                        )}
                        <div className="text-xl font-bold">
                          ${activity.price}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {activity.shortDescription}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{activity.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>Max {activity.maxGroupSize}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {activity.providerName}
                        </Badge>
                        {activity.providerRating >= 4.5 && (
                          <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                            Verified
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="text-sm text-muted-foreground">
                          <span className="text-green-600 font-medium">
                            {activity.cancellationPolicy}
                          </span>
                        </div>
                        
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation()
                            handleBookNow(activity)
                          }}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}