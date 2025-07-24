import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, Building } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { blink } from '@/blink/client'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    priority: 'normal'
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.category || !formData.message) {
      toast({
        title: "Campos Requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    try {
      // Send notification email to admin
      await blink.notifications.email({
        to: 'gaaderman@gmail.com',
        subject: `New Contact Form Submission - ${formData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563EB;">New Contact Form Submission</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p><strong>Category:</strong> ${formData.category}</p>
              <p><strong>Priority:</strong> ${formData.priority}</p>
              <p><strong>Subject:</strong> ${formData.subject}</p>
            </div>
            <div style="margin: 20px 0;">
              <h3>Message:</h3>
              <p style="background: #fff; padding: 15px; border-left: 4px solid #2563EB; margin: 10px 0;">${formData.message}</p>
            </div>
            <hr style="margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              This email was sent from TourXperience contact form on ${new Date().toLocaleString()}
            </p>
          </div>
        `,
        text: `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nCategory: ${formData.category}\nPriority: ${formData.priority}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\nDate: ${new Date().toLocaleString()}`
      })

      toast({
        title: "Mensaje Enviado",
        description: "Gracias por contactarnos. Te responderemos en menos de 24 horas."
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        priority: 'normal'
      })
    } catch (error) {
      toast({
        title: "Error al Enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: [
        { label: 'México', value: '+52 (55) 1234-5678' },
        { label: 'WhatsApp', value: '+52 55 9876-5432' },
        { label: 'Emergencias 24/7', value: '+52 (55) 1111-2222' }
      ],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      details: [
        { label: 'Soporte General', value: 'soporte@tourxperience.com' },
        { label: 'Reservas', value: 'reservas@tourxperience.com' },
        { label: 'Proveedores', value: 'proveedores@tourxperience.com' }
      ],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      details: [
        { label: 'Dirección', value: 'Av. Reforma 123, Col. Centro' },
        { label: 'Ciudad', value: 'Ciudad de México, C.P. 06000' },
        { label: 'País', value: 'México' }
      ],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Horarios de Atención',
      details: [
        { label: 'Lunes - Viernes', value: '8:00 AM - 8:00 PM' },
        { label: 'Sábados', value: '9:00 AM - 6:00 PM' },
        { label: 'Domingos', value: '10:00 AM - 4:00 PM' }
      ],
      color: 'bg-orange-50 text-orange-600'
    }
  ]

  const departments = [
    {
      name: 'Soporte al Cliente',
      description: 'Ayuda con reservas, cancelaciones y consultas generales',
      email: 'soporte@tourxperience.com',
      phone: '+52 (55) 1234-5678',
      hours: 'Lun-Dom 8AM-10PM'
    },
    {
      name: 'Ventas Corporativas',
      description: 'Grupos grandes, eventos corporativos y paquetes especiales',
      email: 'corporativo@tourxperience.com',
      phone: '+52 (55) 1234-5679',
      hours: 'Lun-Vie 9AM-6PM'
    },
    {
      name: 'Proveedores',
      description: 'Información para empresas que desean ofrecer experiencias',
      email: 'proveedores@tourxperience.com',
      phone: '+52 (55) 1234-5680',
      hours: 'Lun-Vie 9AM-5PM'
    },
    {
      name: 'Prensa y Medios',
      description: 'Consultas de medios, comunicados de prensa y colaboraciones',
      email: 'prensa@tourxperience.com',
      phone: '+52 (55) 1234-5681',
      hours: 'Lun-Vie 10AM-4PM'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Contact Options */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{detail.label}</p>
                        <p className="text-sm font-medium text-gray-900">{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre Completo *</label>
                      <Input
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Correo Electrónico *</label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <Input
                        placeholder="+52 55 1234-5678"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Categoría *</label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Soporte al Cliente</SelectItem>
                          <SelectItem value="booking">Reservas y Cancelaciones</SelectItem>
                          <SelectItem value="payment">Pagos y Facturación</SelectItem>
                          <SelectItem value="technical">Problemas Técnicos</SelectItem>
                          <SelectItem value="partnership">Alianzas y Proveedores</SelectItem>
                          <SelectItem value="corporate">Ventas Corporativas</SelectItem>
                          <SelectItem value="press">Prensa y Medios</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Asunto *</label>
                    <Input
                      placeholder="Breve descripción del tema"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Prioridad</label>
                    <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Baja - Consulta general</SelectItem>
                        <SelectItem value="normal">Normal - Necesito ayuda</SelectItem>
                        <SelectItem value="high">Alta - Problema urgente</SelectItem>
                        <SelectItem value="urgent">Urgente - Emergencia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje *</label>
                    <Textarea
                      placeholder="Describe tu consulta o problema con el mayor detalle posible..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    <Send className="w-4 h-4 mr-2" />
                    {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario, aceptas nuestros términos y condiciones y política de privacidad.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Chat */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Chat en Vivo</h3>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">En línea ahora</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  ¿Necesitas ayuda inmediata? Chatea con uno de nuestros agentes.
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Iniciar Chat
                </Button>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card>
              <CardHeader>
                <CardTitle>Tiempos de Respuesta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Chat en Vivo</span>
                  <Badge className="bg-green-500">Inmediato</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Correo Electrónico</span>
                  <Badge variant="secondary">2-4 horas</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Teléfono</span>
                  <Badge className="bg-blue-500">Inmediato</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Formulario Web</span>
                  <Badge variant="secondary">24 horas</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">Contacto de Emergencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-3">
                  Si tienes una emergencia durante tu experiencia, contacta inmediatamente:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-red-600 mr-2" />
                    <span className="font-semibold text-red-800">+52 (55) 1111-2222</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="font-semibold text-red-800">WhatsApp 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Departments */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Departamentos Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      {index < 2 ? <User className="w-6 h-6 text-blue-600" /> : <Building className="w-6 h-6 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{dept.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Mail className="w-4 h-4 text-gray-400 mr-2" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="w-4 h-4 text-gray-400 mr-2" />
                          <span>{dept.phone}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <span>{dept.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Office Location */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Nuestra Oficina</h2>
          <Card>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Map Placeholder */}
                <div className="bg-gray-200 h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Mapa Interactivo</p>
                    <p className="text-sm">Av. Reforma 123, Col. Centro</p>
                    <p className="text-sm">Ciudad de México, México</p>
                  </div>
                </div>
                
                {/* Office Info */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">TourXperience México</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-gray-600">Av. Reforma 123, Col. Centro</p>
                        <p className="text-gray-600">Ciudad de México, C.P. 06000, México</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Horarios de Oficina</p>
                        <p className="text-gray-600">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sábados: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Domingos: Cerrado</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">Teléfono Principal</p>
                        <p className="text-gray-600">+52 (55) 1234-5678</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Ver en Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}