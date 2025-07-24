import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { 
  Gift, 
  Heart, 
  Calendar, 
  Mail, 
  CreditCard, 
  Download, 
  Share2, 
  Star,
  Check,
  Users,
  MapPin
} from 'lucide-react'

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [recipientName, setRecipientName] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [senderName, setSenderName] = useState('')
  const [message, setMessage] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [selectedDesign, setSelectedDesign] = useState('adventure')

  const predefinedAmounts = [50, 100, 200, 500, 1000]

  const giftCardDesigns = [
    {
      id: 'adventure',
      name: 'Aventura',
      image: 'https://images.unsplash.com/photo-1551632811-561c2b340d50?w=400&h=250&fit=crop',
      description: 'Perfecto para los amantes de la aventura'
    },
    {
      id: 'beach',
      name: 'Playa',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop',
      description: 'Ideal para experiencias costeras'
    },
    {
      id: 'culture',
      name: 'Cultura',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      description: 'Para los apasionados de la cultura'
    },
    {
      id: 'food',
      name: 'Gastronomía',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop',
      description: 'Para los amantes de la buena comida'
    },
    {
      id: 'romance',
      name: 'Romance',
      image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=250&fit=crop',
      description: 'Perfecto para parejas'
    },
    {
      id: 'family',
      name: 'Familia',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=250&fit=crop',
      description: 'Diversión para toda la familia'
    }
  ]

  const benefits = [
    {
      icon: Calendar,
      title: 'Sin Fecha de Vencimiento',
      description: 'Las gift cards nunca expiran, úsalas cuando quieras'
    },
    {
      icon: MapPin,
      title: 'Válida en Todos los Destinos',
      description: 'Úsala en cualquiera de nuestros 150+ destinos'
    },
    {
      icon: Users,
      title: 'Transferible',
      description: 'Puede ser regalada o transferida a otra persona'
    },
    {
      icon: CreditCard,
      title: 'Fácil de Usar',
      description: 'Aplica automáticamente en el checkout'
    }
  ]

  const popularExperiences = [
    {
      name: 'Tour Gastronómico CDMX',
      price: '$89',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=150&fit=crop'
    },
    {
      name: 'Snorkel en Cenotes',
      price: '$65',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=150&fit=crop'
    },
    {
      name: 'Tour Chichen Itzá',
      price: '$120',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=200&h=150&fit=crop'
    }
  ]

  const handleAmountChange = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(0)
  }

  const getFinalAmount = () => {
    return customAmount ? parseInt(customAmount) : selectedAmount
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Gift className="w-4 h-4 mr-2" />
              El Regalo Perfecto
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Gift Cards TourXperience
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Regala experiencias inolvidables. Nuestras gift cards son el regalo perfecto 
              para cualquier ocasión, permitiendo a tus seres queridos elegir su aventura ideal.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gift Card Form */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Personaliza tu Gift Card
                </h2>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Selecciona el Monto
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountChange(amount)}
                        className={`p-3 rounded-lg border-2 font-semibold transition-colors ${
                          selectedAmount === amount
                            ? 'border-blue-600 bg-blue-50 text-blue-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        ${amount} USD
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="Monto personalizado"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-8"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  </div>
                </div>

                {/* Design Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Elige el Diseño
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {giftCardDesigns.map((design) => (
                      <div
                        key={design.id}
                        onClick={() => setSelectedDesign(design.id)}
                        className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedDesign === design.id
                            ? 'border-blue-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img 
                          src={design.image} 
                          alt={design.name}
                          className="w-full h-24 object-cover"
                        />
                        <div className="p-2">
                          <p className="text-sm font-medium text-gray-900">{design.name}</p>
                          <p className="text-xs text-gray-500">{design.description}</p>
                        </div>
                        {selectedDesign === design.id && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recipient Information */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre del Destinatario
                    </label>
                    <Input
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Ej: María González"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email del Destinatario
                    </label>
                    <Input
                      type="email"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="maria@ejemplo.com"
                    />
                  </div>
                </div>

                {/* Sender Information */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tu Nombre
                  </label>
                  <Input
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Ej: Carlos Mendoza"
                  />
                </div>

                {/* Personal Message */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje Personal (Opcional)
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe un mensaje especial para el destinatario..."
                    rows={3}
                  />
                </div>

                {/* Delivery Date */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de Entrega (Opcional)
                  </label>
                  <Input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Si no seleccionas fecha, se enviará inmediatamente
                  </p>
                </div>

                {/* Purchase Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                  <Gift className="w-5 h-5 mr-2" />
                  Comprar Gift Card - ${getFinalAmount()} USD
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Preview and Information */}
          <div className="space-y-8">
            {/* Gift Card Preview */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Vista Previa
                </h3>
                <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
                  <div className="absolute top-4 right-4">
                    <Gift className="w-8 h-8 text-white/80" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold">TourXperience</h4>
                    <p className="text-white/90">Gift Card</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-3xl font-bold">${getFinalAmount()} USD</p>
                  </div>
                  <div className="text-sm text-white/90">
                    <p>Para: {recipientName || 'Destinatario'}</p>
                    <p>De: {senderName || 'Remitente'}</p>
                  </div>
                  {message && (
                    <div className="mt-4 p-3 bg-white/10 rounded text-sm">
                      "{message}"
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Beneficios de Nuestras Gift Cards
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Experiences */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Experiencias Populares
                </h3>
                <div className="space-y-4">
                  {popularExperiences.map((experience, index) => (
                    <div key={index} className="flex items-center">
                      <img 
                        src={experience.image} 
                        alt={experience.name}
                        className="w-16 h-12 object-cover rounded mr-4"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{experience.name}</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm text-gray-600">{experience.rating}</span>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        {experience.price}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Cómo Funciona?
            </h2>
            <p className="text-lg text-gray-600">
              Regalar experiencias nunca fue tan fácil
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                1. Personaliza
              </h3>
              <p className="text-gray-600">
                Elige el monto, diseño y mensaje personal
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                2. Compra
              </h3>
              <p className="text-gray-600">
                Realiza el pago de forma segura
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                3. Entrega
              </h3>
              <p className="text-gray-600">
                Se envía por email al destinatario
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                4. Disfruta
              </h3>
              <p className="text-gray-600">
                El destinatario elige su experiencia favorita
              </p>
            </div>
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
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Las gift cards tienen fecha de vencimiento?
                </h3>
                <p className="text-gray-600">
                  No, nuestras gift cards nunca expiran. Pueden ser utilizadas en cualquier momento.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo usar múltiples gift cards en una compra?
                </h3>
                <p className="text-gray-600">
                  Sí, puedes combinar múltiples gift cards y también complementar con otros métodos de pago.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Qué pasa si la experiencia cuesta menos que el valor de la gift card?
                </h3>
                <p className="text-gray-600">
                  El saldo restante queda disponible para futuras compras. No se pierde el dinero.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas Ayuda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo está aquí para ayudarte a crear el regalo perfecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contactar Soporte
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Experiencias
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}