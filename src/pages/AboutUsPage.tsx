import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Users, Heart, Award, Globe, Shield } from 'lucide-react'

export default function AboutUsPage() {
  const values = [
    {
      icon: Heart,
      title: 'Pasión por Viajar',
      description: 'Somos viajeros apasionados que entienden la emoción de descubrir nuevos lugares y culturas.'
    },
    {
      icon: Users,
      title: 'Comunidad Local',
      description: 'Trabajamos con guías y proveedores locales para ofrecer experiencias auténticas y apoyar las comunidades.'
    },
    {
      icon: Shield,
      title: 'Confianza y Seguridad',
      description: 'Tu seguridad es nuestra prioridad. Todas nuestras actividades están verificadas y aseguradas.'
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Seleccionamos cuidadosamente cada experiencia para garantizar la más alta calidad y satisfacción.'
    }
  ]

  const team = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO & Fundador',
      location: 'Ciudad de México',
      description: 'Viajero empedernido con más de 15 años explorando México y el mundo.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Directora de Experiencias',
      location: 'Playa del Carmen',
      description: 'Experta en turismo sustentable y experiencias culturales auténticas.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Miguel Torres',
      role: 'Director de Tecnología',
      location: 'Guadalajara',
      description: 'Ingeniero apasionado por crear tecnología que conecte viajeros con experiencias únicas.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Viajeros Felices' },
    { number: '2,500+', label: 'Experiencias Únicas' },
    { number: '150+', label: 'Destinos en México' },
    { number: '1,200+', label: 'Guías Locales' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              Hecho en México
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Somos TourXperience
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Una empresa mexicana creada por viajeros, para viajeros. Conectamos a exploradores 
              con experiencias auténticas y memorables en los destinos más increíbles de México y el mundo.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Creemos que viajar es más que visitar lugares; es conectar con culturas, 
              crear recuerdos inolvidables y transformar perspectivas. Como empresa mexicana, 
              entendemos la riqueza cultural y natural de nuestro país, y queremos compartirla 
              con el mundo.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Fundada en 2020 en la Ciudad de México, TourXperience nació de la pasión de 
              tres amigos viajeros que querían democratizar el acceso a experiencias turísticas 
              auténticas y de calidad.
            </p>
            <div className="flex items-center space-x-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Alcance Global</h3>
                <p className="text-gray-600">Desde México para el mundo</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=400&fit=crop" 
              alt="Equipo TourXperience"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hecho con ❤️</p>
                  <p className="text-sm text-gray-600">En México</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y experiencia que creamos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-xl opacity-90">
              Números que reflejan nuestra pasión por crear experiencias excepcionales
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Viajeros apasionados trabajando para crear las mejores experiencias turísticas
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <div className="flex items-center justify-center text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{member.location}</span>
                </div>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de viajeros que han descubierto experiencias increíbles con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explorar Experiencias
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}