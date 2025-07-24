import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { MapPin, Search, Star, Users, Clock, Navigation } from 'lucide-react'

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null)

  // Geolocation effect
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        (error) => {
          console.log('Geolocation error:', error)
        }
      )
    }
  }, [])

  const regions = [
    { id: 'all', name: 'Todos los Destinos', count: 150 },
    { id: 'norte', name: 'Norte de México', count: 25 },
    { id: 'centro', name: 'Centro de México', count: 45 },
    { id: 'sur', name: 'Sur de México', count: 35 },
    { id: 'caribe', name: 'Caribe Mexicano', count: 30 },
    { id: 'pacifico', name: 'Costa del Pacífico', count: 15 }
  ]

  const destinations = [
    // Norte de México
    {
      id: 1,
      name: 'Ciudad de México',
      region: 'centro',
      country: 'México',
      activities: 245,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop',
      description: 'Capital vibrante con historia, cultura y gastronomía excepcional',
      highlights: ['Zócalo', 'Teotihuacán', 'Xochimilco', 'Museos'],
      coordinates: { lat: 19.4326, lng: -99.1332 },
      popular: true
    },
    {
      id: 2,
      name: 'Cancún',
      region: 'caribe',
      country: 'México',
      activities: 189,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Paraíso tropical con playas de arena blanca y aguas turquesas',
      highlights: ['Playa Delfines', 'Chichen Itzá', 'Cenotes', 'Vida Nocturna'],
      coordinates: { lat: 21.1619, lng: -86.8515 },
      popular: true
    },
    {
      id: 3,
      name: 'Playa del Carmen',
      region: 'caribe',
      country: 'México',
      activities: 156,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      description: 'Destino bohemio con cenotes, ruinas mayas y ambiente relajado',
      highlights: ['5ta Avenida', 'Cenote Dos Ojos', 'Tulum', 'Cozumel'],
      coordinates: { lat: 20.6296, lng: -87.0739 },
      popular: true
    },
    {
      id: 4,
      name: 'Puerto Vallarta',
      region: 'pacifico',
      country: 'México',
      activities: 134,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=400&h=300&fit=crop',
      description: 'Encantador puerto con arquitectura colonial y hermosas bahías',
      highlights: ['Malecón', 'Zona Romántica', 'Islas Marietas', 'Tequila Tours'],
      coordinates: { lat: 20.6534, lng: -105.2253 },
      popular: false
    },
    {
      id: 5,
      name: 'Guadalajara',
      region: 'centro',
      country: 'México',
      activities: 98,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop',
      description: 'Cuna del mariachi y el tequila, rica en tradiciones mexicanas',
      highlights: ['Centro Histórico', 'Tlaquepaque', 'Tequila', 'Mariachi'],
      coordinates: { lat: 20.6597, lng: -103.3496 },
      popular: false
    },
    {
      id: 6,
      name: 'Oaxaca',
      region: 'sur',
      country: 'México',
      activities: 87,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop',
      description: 'Patrimonio cultural con arte, gastronomía y tradiciones ancestrales',
      highlights: ['Monte Albán', 'Mercados', 'Mezcal', 'Artesanías'],
      coordinates: { lat: 17.0732, lng: -96.7266 },
      popular: true
    },
    {
      id: 7,
      name: 'Mérida',
      region: 'sur',
      country: 'México',
      activities: 76,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop',
      description: 'Ciudad blanca con arquitectura colonial y cultura maya viva',
      highlights: ['Centro Histórico', 'Uxmal', 'Cenotes', 'Haciendas'],
      coordinates: { lat: 20.9674, lng: -89.5926 },
      popular: false
    },
    {
      id: 8,
      name: 'Los Cabos',
      region: 'pacifico',
      country: 'México',
      activities: 112,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      description: 'Destino de lujo donde el desierto se encuentra con el mar',
      highlights: ['El Arco', 'Playa del Amor', 'Golf', 'Pesca Deportiva'],
      coordinates: { lat: 22.8905, lng: -109.9167 },
      popular: true
    },
    {
      id: 9,
      name: 'San Miguel de Allende',
      region: 'centro',
      country: 'México',
      activities: 65,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop',
      description: 'Pueblo mágico con arquitectura colonial y ambiente artístico',
      highlights: ['Parroquia', 'Mercado de Artesanías', 'Jardín Principal', 'Arte'],
      coordinates: { lat: 20.9153, lng: -100.7436 },
      popular: false
    },
    {
      id: 10,
      name: 'Monterrey',
      region: 'norte',
      country: 'México',
      activities: 89,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop',
      description: 'Metrópoli moderna rodeada de montañas espectaculares',
      highlights: ['Cerro de la Silla', 'Macroplaza', 'Santa Lucía', 'Barrio Antiguo'],
      coordinates: { lat: 25.6866, lng: -100.3161 },
      popular: false
    }
  ]

  // Calculate distance between two coordinates
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371 // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLng = (lng2 - lng1) * Math.PI / 180
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c
  }

  // Filter and sort destinations
  const filteredDestinations = destinations
    .filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion
      return matchesSearch && matchesRegion
    })
    .sort((a, b) => {
      // If user location is available, sort by distance
      if (userLocation) {
        const distanceA = calculateDistance(userLocation.lat, userLocation.lng, a.coordinates.lat, a.coordinates.lng)
        const distanceB = calculateDistance(userLocation.lat, userLocation.lng, b.coordinates.lat, b.coordinates.lng)
        return distanceA - distanceB
      }
      // Otherwise, sort by popularity and rating
      if (a.popular && !b.popular) return -1
      if (!a.popular && b.popular) return 1
      return b.rating - a.rating
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              150+ Destinos Increíbles
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Descubre México y el Mundo
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Desde las playas paradisíacas del Caribe hasta las montañas majestuosas del norte, 
              explora los destinos más increíbles con experiencias auténticas y memorables.
            </p>
            {userLocation && (
              <div className="flex items-center justify-center text-white/90">
                <Navigation className="w-5 h-5 mr-2" />
                <span>Mostrando destinos ordenados por cercanía a tu ubicación</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar destinos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedRegion === region.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {region.name} ({region.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {destination.popular && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                    Popular
                  </Badge>
                )}
                {userLocation && (
                  <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                    {Math.round(calculateDistance(
                      userLocation.lat, 
                      userLocation.lng, 
                      destination.coordinates.lat, 
                      destination.coordinates.lng
                    ))} km
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {destination.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{destination.activities} actividades</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">Todo el año</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.slice(0, 3).map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Ver Experiencias
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron destinos
            </h3>
            <p className="text-gray-600">
              Intenta con otros términos de búsqueda o selecciona una región diferente.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿No Encuentras tu Destino Ideal?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos y te ayudaremos a planificar la experiencia perfecta para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contactar Experto
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Todas las Categorías
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}