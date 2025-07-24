import { useState } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTranslations } from '../../i18n'
import { useNavigate } from 'react-router-dom'
import { popularDestinations, getActivitiesByDestination } from '@/data/mockInventory'

export function HeroSection() {
  const t = useTranslations()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('')

  const handleDestinationClick = (destinationName: string) => {
    // Get activities for this destination
    const activities = getActivitiesByDestination(destinationName)
    
    if (activities.length > 0) {
      // Navigate directly to the first activity of this destination
      navigate(`/activity/${activities[0].id}`)
    } else {
      // Fallback to search results if no activities found
      navigate(`/search?destination=${encodeURIComponent(destinationName)}`)
    }
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (date) params.set('date', date)
    if (guests) params.set('guests', guests)
    navigate(`/search?${params.toString()}`)
  }

  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop)'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t.home.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              {t.home.heroSubtitle}
            </p>
          </div>

          {/* Search Card */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Where to?
                </label>
                <Input
                  placeholder={t.home.searchPlaceholder}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  When?
                </label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Guests
                </label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-transparent">Search</label>
                <Button onClick={handleSearch} className="w-full h-12 text-lg font-semibold">
                  <Search className="h-5 w-5 mr-2" />
                  {t.home.searchButton}
                </Button>
              </div>
            </div>
          </Card>

          {/* Popular Destinations */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">{t.home.popularDestinations}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {popularDestinations && popularDestinations.length > 0 ? popularDestinations.map((dest, index) => (
                <Card 
                  key={dest?.id || index}
                  onClick={() => dest?.name && handleDestinationClick(dest.name)}
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-40">
                    <img
                      src={dest?.image || 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800'}
                      alt={dest?.name || 'Destination'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="font-semibold text-lg">{dest?.name || 'Loading...'}</h3>
                      <p className="text-sm opacity-90">{dest?.activitiesCount || 0} actividades</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm">{dest?.rating || '0.0'}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              )) : (
                // Loading state
                <div className="col-span-full text-center text-white">
                  <p>Loading destinations...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}