import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { blink } from '@/blink/client'
import { 
  Handshake, 
  TrendingUp, 
  Users, 
  Globe, 
  DollarSign, 
  Star, 
  Shield, 
  Zap,
  MapPin,
  Phone,
  Mail,
  Building,
  Camera,
  Calendar,
  Award,
  Car
} from 'lucide-react'

export default function PartnerWithUsPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    businessType: '',
    description: '',
    experience: '',
    capacity: '',
    languages: '',
    certifications: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumenta tus Ventas',
      description: 'Accede a miles de viajeros buscando experiencias únicas en tu destino',
      stats: '+300% promedio de incremento en reservas'
    },
    {
      icon: Globe,
      title: 'Alcance Global',
      description: 'Conecta con viajeros de todo el mundo a través de nuestra plataforma',
      stats: '150+ países de origen de nuestros usuarios'
    },
    {
      icon: Users,
      title: 'Soporte Dedicado',
      description: 'Equipo especializado para ayudarte a optimizar tus listados y ventas',
      stats: 'Soporte 24/7 en español e inglés'
    },
    {
      icon: DollarSign,
      title: 'Comisiones Competitivas',
      description: 'Estructura de comisiones transparente y competitiva en el mercado',
      stats: 'Desde 12% de comisión por reserva'
    }
  ]

  const partnerTypes = [
    {
      type: 'Tour Operators',
      icon: Users,
      description: 'Operadores turísticos con experiencias grupales e individuales',
      examples: ['City Tours', 'Adventure Tours', 'Cultural Experiences'],
      commission: '12-15%'
    },
    {
      type: 'Restaurantes',
      icon: Building,
      description: 'Restaurantes ofreciendo experiencias gastronómicas únicas',
      examples: ['Cooking Classes', 'Wine Tastings', 'Food Tours'],
      commission: '15-18%'
    },
    {
      type: 'Guías Locales',
      icon: MapPin,
      description: 'Guías certificados con conocimiento local especializado',
      examples: ['Walking Tours', 'Historical Tours', 'Nature Guides'],
      commission: '10-12%'
    },
    {
      type: 'Actividades Extremas',
      icon: Zap,
      description: 'Proveedores de deportes extremos y aventura',
      examples: ['Zip Lines', 'Bungee Jumping', 'Rock Climbing'],
      commission: '15-20%'
    },
    {
      type: 'Transporte',
      icon: Car,
      description: 'Servicios de transporte turístico especializado',
      examples: ['Private Transfers', 'Boat Tours', 'Helicopter Tours'],
      commission: '8-12%'
    },
    {
      type: 'Alojamiento',
      icon: Building,
      description: 'Hoteles, hostales y alojamientos únicos',
      examples: ['Boutique Hotels', 'Eco Lodges', 'Glamping'],
      commission: '12-15%'
    }
  ]

  const requirements = [
    {
      icon: Shield,
      title: 'Licencias y Seguros',
      description: 'Documentación legal vigente y seguros de responsabilidad civil'
    },
    {
      icon: Star,
      title: 'Calidad Comprobada',
      description: 'Experiencias de alta calidad con excelentes reseñas de clientes'
    },
    {
      icon: Camera,
      title: 'Material Visual',
      description: 'Fotos profesionales y descripciones detalladas de tus servicios'
    },
    {
      icon: Calendar,
      title: 'Disponibilidad',
      description: 'Calendario actualizado y capacidad de confirmar reservas en tiempo real'
    }
  ]

  const successStories = [
    {
      name: 'Maya Adventures',
      location: 'Playa del Carmen',
      type: 'Tour Operator',
      growth: '+450%',
      story: 'Desde que nos unimos a TourXperience, nuestras reservas se han multiplicado por 5. La plataforma nos ha conectado con viajeros de todo el mundo.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Cocina Oaxaqueña',
      location: 'Oaxaca',
      type: 'Restaurante',
      growth: '+280%',
      story: 'Nuestras clases de cocina tradicional ahora son conocidas internacionalmente. TourXperience nos ayudó a profesionalizar nuestro negocio.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Aventuras Extremas Los Cabos',
      location: 'Los Cabos',
      type: 'Deportes Extremos',
      growth: '+320%',
      story: 'La plataforma nos permitió llegar a un público más amplio. Ahora operamos tours diarios cuando antes solo teníamos reservas esporádicas.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone || !formData.location || !formData.businessType || !formData.description) {
      toast({
        title: "Campos Requeridos",
        description: "Por favor completa todos los campos obligatorios marcados con *.",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    try {
      // Send notification email to admin
      await blink.notifications.email({
        to: 'gaaderman@gmail.com',
        subject: `New Partner Application - ${formData.companyName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563EB;">New Partner Application</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Company Information</h3>
              <p><strong>Company Name:</strong> ${formData.companyName}</p>
              <p><strong>Contact Name:</strong> ${formData.contactName}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
              <p><strong>Location:</strong> ${formData.location}</p>
              <p><strong>Business Type:</strong> ${formData.businessType}</p>
            </div>
            <div style="margin: 20px 0;">
              <h3>Business Details</h3>
              <p><strong>Description:</strong></p>
              <p style="background: #fff; padding: 15px; border-left: 4px solid #2563EB; margin: 10px 0;">${formData.description}</p>
              <p><strong>Experience:</strong> ${formData.experience || 'Not provided'}</p>
              <p><strong>Daily Capacity:</strong> ${formData.capacity || 'Not provided'}</p>
              <p><strong>Languages:</strong> ${formData.languages || 'Not provided'}</p>
              <p><strong>Certifications:</strong> ${formData.certifications || 'Not provided'}</p>
            </div>
            <hr style="margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              This email was sent from TourXperience partner application form on ${new Date().toLocaleString()}
            </p>
          </div>
        `,
        text: `New Partner Application\n\nCompany: ${formData.companyName}\nContact: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWebsite: ${formData.website || 'Not provided'}\nLocation: ${formData.location}\nBusiness Type: ${formData.businessType}\n\nDescription:\n${formData.description}\n\nExperience: ${formData.experience || 'Not provided'}\nCapacity: ${formData.capacity || 'Not provided'}\nLanguages: ${formData.languages || 'Not provided'}\nCertifications: ${formData.certifications || 'Not provided'}\n\nDate: ${new Date().toLocaleString()}`
      })

      toast({
        title: "Solicitud Enviada",
        description: "Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 48 horas."
      })
      
      // Reset form
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        location: '',
        businessType: '',
        description: '',
        experience: '',
        capacity: '',
        languages: '',
        certifications: ''
      })
    } catch (error) {
      toast({
        title: "Error al Enviar",
        description: "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Handshake className="w-4 h-4 mr-2" />
              Únete a Nuestro Ecosistema
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Conviértete en Nuestro Partner
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Únete a la red de proveedores de experiencias turísticas más grande de México. 
              Conecta con miles de viajeros y haz crecer tu negocio con TourXperience.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por Qué Ser Partner de TourXperience?
          </h2>
          <p className="text-lg text-gray-600">
            Descubre los beneficios de formar parte de nuestra comunidad
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {benefit.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {benefit.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partner Types Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tipos de Partners que Buscamos
            </h2>
            <p className="text-lg text-gray-600">
              Trabajamos con diversos tipos de proveedores de experiencias turísticas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <partner.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {partner.type}
                      </h3>
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {partner.commission} comisión
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {partner.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Ejemplos:</p>
                    <div className="flex flex-wrap gap-1">
                      {partner.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Requisitos para Ser Partner
            </h2>
            <p className="text-lg text-gray-600">
              Aseguramos la calidad manteniendo estándares altos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((requirement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <requirement.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {requirement.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {requirement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Historias de Éxito
            </h2>
            <p className="text-lg text-gray-600">
              Conoce cómo nuestros partners han transformado sus negocios
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.location}</p>
                    </div>
                    <Badge className="ml-auto bg-green-100 text-green-800">
                      {story.growth}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {story.type}
                  </Badge>
                  <p className="text-gray-600 text-sm italic">
                    "{story.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solicita Ser Partner
            </h2>
            <p className="text-lg text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de la Empresa *
                    </label>
                    <Input
                      required
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Ej: Maya Adventures"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de Contacto *
                    </label>
                    <Input
                      required
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="Ej: Carlos Mendoza"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="contacto@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sitio Web
                    </label>
                    <Input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://www.empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ubicación *
                    </label>
                    <Input
                      required
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Ej: Playa del Carmen, Quintana Roo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Negocio *
                  </label>
                  <select 
                    required
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="tour-operator">Tour Operator</option>
                    <option value="restaurant">Restaurante</option>
                    <option value="guide">Guía Local</option>
                    <option value="extreme-sports">Actividades Extremas</option>
                    <option value="transport">Transporte</option>
                    <option value="accommodation">Alojamiento</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción de tu Negocio *
                  </label>
                  <Textarea
                    required
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe tu negocio, servicios que ofreces, y qué te hace único..."
                    rows={4}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Años de Experiencia
                    </label>
                    <Input
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Ej: 5 años"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Capacidad Diaria
                    </label>
                    <Input
                      value={formData.capacity}
                      onChange={(e) => handleInputChange('capacity', e.target.value)}
                      placeholder="Ej: 50 personas"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Idiomas que Manejas
                    </label>
                    <Input
                      value={formData.languages}
                      onChange={(e) => handleInputChange('languages', e.target.value)}
                      placeholder="Ej: Español, Inglés, Francés"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Certificaciones
                    </label>
                    <Input
                      value={formData.certifications}
                      onChange={(e) => handleInputChange('certifications', e.target.value)}
                      placeholder="Ej: SECTUR, PADI, etc."
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold" disabled={isLoading}>
                  <Handshake className="w-5 h-5 mr-2" />
                  {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo de partnerships está aquí para ayudarte
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Email</p>
                <p className="opacity-90">partners@tourxperience.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Teléfono</p>
                <p className="opacity-90">+52 55 1234 5678</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Oficina</p>
                <p className="opacity-90">Ciudad de México</p>
              </div>
            </div>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
            Contactar Equipo de Partnerships
          </Button>
        </div>
      </div>
    </div>
  )
}