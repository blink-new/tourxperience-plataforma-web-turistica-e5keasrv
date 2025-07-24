import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Calendar, CreditCard, MapPin, Star, Shield, Smartphone, Users } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Busca y Descubre',
      description: 'Explora miles de experiencias únicas en destinos increíbles. Usa nuestros filtros para encontrar exactamente lo que buscas.',
      details: [
        'Búsqueda por destino, fecha o categoría',
        'Filtros avanzados por precio, duración y tipo',
        'Recomendaciones personalizadas',
        'Reseñas y calificaciones reales'
      ]
    },
    {
      step: '02',
      icon: Calendar,
      title: 'Selecciona y Reserva',
      description: 'Elige tu fecha preferida y reserva al instante. Disponibilidad en tiempo real y confirmación inmediata.',
      details: [
        'Calendario con disponibilidad en tiempo real',
        'Selección de horarios y opciones',
        'Información detallada de cada experiencia',
        'Política de cancelación clara'
      ]
    },
    {
      step: '03',
      icon: CreditCard,
      title: 'Paga de Forma Segura',
      description: 'Realiza tu pago con total seguridad. Aceptamos múltiples métodos de pago y monedas.',
      details: [
        'Pagos seguros con encriptación SSL',
        'Múltiples métodos: tarjetas, PayPal, OXXO',
        'Soporte para MXN, USD, EUR',
        'Códigos promocionales disponibles'
      ]
    },
    {
      step: '04',
      icon: MapPin,
      title: 'Disfruta tu Experiencia',
      description: 'Recibe tu confirmación con código QR y toda la información necesaria. ¡Solo queda disfrutar!',
      details: [
        'Confirmación por email con código QR',
        'Información de contacto del proveedor',
        'Instrucciones detalladas de llegada',
        'Soporte 24/7 durante tu experiencia'
      ]
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Garantía de Satisfacción',
      description: 'Si no estás 100% satisfecho, te devolvemos tu dinero. Sin preguntas.'
    },
    {
      icon: Star,
      title: 'Calidad Verificada',
      description: 'Todas nuestras experiencias son verificadas y evaluadas por nuestro equipo.'
    },
    {
      icon: Smartphone,
      title: 'Acceso Móvil',
      description: 'Lleva tus reservas contigo. Accede a todo desde tu smartphone.'
    },
    {
      icon: Users,
      title: 'Soporte Local',
      description: 'Equipo de soporte en español disponible 24/7 para ayudarte.'
    }
  ]

  const faqs = [
    {
      question: '¿Puedo cancelar mi reserva?',
      answer: 'Sí, puedes cancelar según la política de cancelación de cada experiencia. La mayoría permite cancelación gratuita hasta 24 horas antes.'
    },
    {
      question: '¿Qué pasa si llueve?',
      answer: 'Dependiendo de la actividad, se puede reprogramar o cancelar con reembolso completo. Cada experiencia tiene su política climática específica.'
    },
    {
      question: '¿Necesito imprimir mi boleto?',
      answer: 'No es necesario. Puedes mostrar tu código QR directamente desde tu smartphone. También enviamos una copia por email.'
    },
    {
      question: '¿Hay descuentos para grupos?',
      answer: 'Muchas experiencias ofrecen descuentos para grupos. Contacta a nuestro equipo para obtener precios especiales para 10+ personas.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Proceso Simple y Seguro
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              ¿Cómo Funciona TourXperience?
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Reservar experiencias increíbles nunca fue tan fácil. 
              Sigue estos 4 simples pasos y prepárate para vivir aventuras inolvidables.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1551632811-561c2b340d50' : 
                      index === 1 ? '1506905925-f32dc266e8bd' :
                      index === 2 ? '1556742049-0a6024de9dba' :
                      '1469474968-23e4ad7b4e9b'
                    }?w=600&h=400&fit=crop`}
                    alt={step.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-blue-600">{step.step}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir TourXperience?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más que una plataforma de reservas, somos tu compañero de viaje confiable
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Resolvemos las dudas más comunes de nuestros viajeros
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
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
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Miles de experiencias te esperan. Comienza a explorar ahora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Explorar Experiencias
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Destinos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}