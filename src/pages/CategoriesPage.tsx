import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Camera, 
  Utensils, 
  Mountain, 
  Waves, 
  Palette, 
  Music, 
  Heart, 
  Users, 
  Zap, 
  TreePine, 
  Building,
  Star,
  Clock,
  MapPin
} from 'lucide-react'

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    {
      id: 'sightseeing',
      name: 'Sightseeing',
      icon: Camera,
      color: 'bg-blue-500',
      activities: 1250,
      description: 'Descubre los lugares más emblemáticos y vistas espectaculares',
      subcategories: ['City Tours', 'Monumentos', 'Miradores', 'Walking Tours'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=400&h=300&fit=crop'
    },
    {
      id: 'food-drink',
      name: 'Food & Drink',
      icon: Utensils,
      color: 'bg-orange-500',
      activities: 890,
      description: 'Experiencias gastronómicas auténticas y sabores locales',
      subcategories: ['Food Tours', 'Cooking Classes', 'Wine Tasting', 'Street Food'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
    },
    {
      id: 'outdoor',
      name: 'Outdoor Adventures',
      icon: Mountain,
      color: 'bg-green-500',
      activities: 756,
      description: 'Aventuras al aire libre para los amantes de la adrenalina',
      subcategories: ['Hiking', 'Climbing', 'Zip Lines', 'ATV Tours'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1551632811-561c2b340d50?w=400&h=300&fit=crop'
    },
    {
      id: 'water-sports',
      name: 'Water Sports',
      icon: Waves,
      color: 'bg-cyan-500',
      activities: 634,
      description: 'Deportes acuáticos y experiencias en el mar',
      subcategories: ['Snorkeling', 'Diving', 'Surfing', 'Boat Tours'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    },
    {
      id: 'culture-arts',
      name: 'Culture & Arts',
      icon: Palette,
      color: 'bg-purple-500',
      activities: 523,
      description: 'Sumérgete en la cultura local y expresiones artísticas',
      subcategories: ['Museums', 'Art Galleries', 'Workshops', 'Festivals'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      icon: Music,
      color: 'bg-pink-500',
      activities: 445,
      description: 'Espectáculos, música y entretenimiento nocturno',
      subcategories: ['Shows', 'Concerts', 'Nightlife', 'Theater'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
    },
    {
      id: 'romance',
      name: 'Romance',
      icon: Heart,
      color: 'bg-red-500',
      activities: 298,
      description: 'Experiencias románticas perfectas para parejas',
      subcategories: ['Sunset Tours', 'Couples Spa', 'Private Dinners', 'Beach Walks'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop'
    },
    {
      id: 'family',
      name: 'Family Fun',
      icon: Users,
      color: 'bg-yellow-500',
      activities: 567,
      description: 'Actividades divertidas para toda la familia',
      subcategories: ['Theme Parks', 'Zoos', 'Interactive Museums', 'Beach Activities'],
      popular: true,
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop'
    },
    {
      id: 'extreme',
      name: 'Extreme Sports',
      icon: Zap,
      color: 'bg-red-600',
      activities: 234,
      description: 'Deportes extremos para los más aventureros',
      subcategories: ['Bungee Jumping', 'Skydiving', 'Rock Climbing', 'Paragliding'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1551632811-561c2b340d50?w=400&h=300&fit=crop'
    },
    {
      id: 'nature',
      name: 'Nature & Wildlife',
      icon: TreePine,
      color: 'bg-emerald-500',
      activities: 412,
      description: 'Conecta con la naturaleza y observa vida silvestre',
      subcategories: ['Wildlife Tours', 'Bird Watching', 'National Parks', 'Eco Tours'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
    },
    {
      id: 'urban',
      name: 'Urban Experiences',
      icon: Building,
      color: 'bg-gray-500',
      activities: 678,
      description: 'Explora la vida urbana y arquitectura moderna',
      subcategories: ['Architecture Tours', 'Rooftop Bars', 'Shopping', 'Street Art'],
      popular: false,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
    }
  ]

  const popularActivities = [
    {
      name: 'Tour Gastronómico por Polanco',
      category: 'food-drink',
      rating: 4.9,
      duration: '3 horas',
      price: '$89',
      location: 'Ciudad de México'
    },
    {
      name: 'Snorkel en Cenotes Dos Ojos',
      category: 'water-sports',
      rating: 4.8,
      duration: '4 horas',
      price: '$65',
      location: 'Playa del Carmen'
    },
    {
      name: 'Tour Privado Chichen Itzá',
      category: 'sightseeing',
      rating: 4.7,
      duration: '8 horas',
      price: '$120',
      location: 'Cancún'
    },
    {
      name: 'Tirolesas en la Selva',
      category: 'outdoor',
      rating: 4.6,
      duration: '2.5 horas',
      price: '$45',
      location: 'Puerto Vallarta'
    }
  ]

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedCategory === 'all' || 
                         (selectedCategory === 'popular' && category.popular) ||
                         category.id === selectedCategory
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              11 Categorías Principales
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Explora por Categorías
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Encuentra exactamente lo que buscas. Desde aventuras extremas hasta experiencias 
              culturales, tenemos la actividad perfecta para cada tipo de viajero.
            </p>
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
                placeholder="Buscar categorías..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setSelectedCategory('popular')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'popular'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Populares
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {category.popular && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                    Popular
                  </Badge>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mb-3`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {category.activities} actividades
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {category.subcategories.slice(0, 3).map((sub, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {sub}
                    </Badge>
                  ))}
                  {category.subcategories.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{category.subcategories.length - 3}
                    </Badge>
                  )}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Explorar Categoría
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron categorías
            </h3>
            <p className="text-gray-600">
              Intenta con otros términos de búsqueda.
            </p>
          </div>
        )}
      </div>

      {/* Popular Activities Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Actividades Más Populares
            </h2>
            <p className="text-lg text-gray-600">
              Las experiencias favoritas de nuestros viajeros
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularActivities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {categories.find(c => c.id === activity.category)?.name}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{activity.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {activity.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {activity.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {activity.duration}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {activity.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes una Idea Específica?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestros expertos pueden ayudarte a crear una experiencia personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Crear Experiencia Personalizada
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Todos los Destinos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}