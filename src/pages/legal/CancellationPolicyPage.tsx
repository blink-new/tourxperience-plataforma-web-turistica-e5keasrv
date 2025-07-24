import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react'

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Política de Cancelación</CardTitle>
            <p className="text-center text-gray-600">Información detallada sobre cancelaciones y reembolsos</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Política General de Cancelación</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En TourXperience entendemos que los planes pueden cambiar. Por eso ofrecemos una política 
                  de cancelación flexible que protege tanto a nuestros clientes como a nuestros proveedores de servicios.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800">+24 horas</h3>
                    <p className="text-sm text-green-700">Reembolso completo</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-yellow-800">12-24 horas</h3>
                    <p className="text-sm text-yellow-700">50% reembolso</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-orange-800">0-12 horas</h3>
                    <p className="text-sm text-orange-700">Sin reembolso</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <RefreshCw className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-red-800">No Show</h3>
                    <p className="text-sm text-red-700">Sin reembolso</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Detalles por Tipo de Cancelación</h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Cancelación con más de 24 horas de anticipación
                      <Badge className="ml-2 bg-green-500">Reembolso 100%</Badge>
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Reembolso completo del monto pagado</li>
                      <li>Procesamiento en 3-5 días hábiles</li>
                      <li>Sin penalizaciones ni cargos adicionales</li>
                      <li>Confirmación por correo electrónico</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Cancelación entre 12-24 horas antes
                      <Badge className="ml-2 bg-yellow-500">Reembolso 50%</Badge>
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Reembolso del 50% del monto pagado</li>
                      <li>Se retiene 50% para cubrir costos operativos</li>
                      <li>Procesamiento en 5-7 días hábiles</li>
                      <li>Opción de reprogramar sin costo adicional (sujeto a disponibilidad)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Cancelación con menos de 12 horas o No Show
                      <Badge className="ml-2 bg-red-500">Sin reembolso</Badge>
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>No se otorga reembolso</li>
                      <li>Los proveedores ya han incurrido en costos operativos</li>
                      <li>Posible reprogramación con costo adicional del 25%</li>
                      <li>Excepciones solo por emergencias médicas documentadas</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Excepciones y Casos Especiales</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">🌦️ Condiciones Climáticas Adversas</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Si las condiciones climáticas hacen peligrosa o imposible la realización de la actividad, 
                      ofrecemos reembolso completo o reprogramación sin costo adicional.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">🏥 Emergencias Médicas</h3>
                    <p className="text-gray-700 leading-relaxed">
                      En caso de emergencia médica documentada (certificado médico requerido), 
                      se otorga reembolso completo independientemente del tiempo de cancelación.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">🦠 Situaciones Sanitarias</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Durante emergencias sanitarias oficiales o si el cliente presenta síntomas de enfermedad, 
                      se permite reprogramación sin costo o reembolso completo.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">✈️ Problemas de Transporte</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Cancelaciones o retrasos de vuelos documentados permiten reprogramación sin costo adicional. 
                      Se requiere comprobante de la aerolínea.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Políticas Especiales por Tipo de Actividad</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">🎭 Tours Culturales y Gastronómicos</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Política estándar de cancelación</li>
                      <li>• Grupos pequeños: mayor flexibilidad</li>
                      <li>• Tours privados: 48h de anticipación</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">🏔️ Actividades de Aventura</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Dependientes del clima</li>
                      <li>• Reembolso completo por mal tiempo</li>
                      <li>• Equipo especializado: 48h anticipación</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">🎫 Boletos y Entradas</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Política más estricta</li>
                      <li>• Mínimo 48h de anticipación</li>
                      <li>• Algunos eventos: no reembolsables</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">🚌 Transportación</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cancelación hasta 2h antes</li>
                      <li>• Traslados aeropuerto: 4h antes</li>
                      <li>• Tours de día completo: 24h antes</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Proceso de Cancelación</h2>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold">Inicie la Cancelación</h3>
                      <p className="text-gray-700 text-sm">
                        Acceda a su cuenta y seleccione "Cancelar reserva" o contacte nuestro servicio al cliente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold">Confirmación</h3>
                      <p className="text-gray-700 text-sm">
                        Recibirá un correo de confirmación con los detalles de la cancelación y el monto del reembolso.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold">Procesamiento</h3>
                      <p className="text-gray-700 text-sm">
                        El reembolso se procesa automáticamente al método de pago original en 3-7 días hábiles.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Información Importante</h2>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold mb-2">⚠️ Consideraciones Importantes</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Los reembolsos se procesan al método de pago original utilizado</li>
                    <li>Los tiempos de procesamiento pueden variar según el banco o institución financiera</li>
                    <li>Las cancelaciones deben realizarse en la zona horaria local del destino</li>
                    <li>Algunos proveedores externos pueden tener políticas más restrictivas</li>
                    <li>Los cargos por procesamiento de terceros no son reembolsables</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contacto para Cancelaciones</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Centro de Atención al Cliente</strong><br />
                    📧 Correo: cancelaciones@tourxperience.com<br />
                    📞 Teléfono: +52 (55) 1234-5678<br />
                    💬 Chat en vivo: Disponible 24/7 en nuestro sitio web<br />
                    🕒 Horario telefónico: Lunes a Domingo, 8:00 AM - 10:00 PM (Hora de México)
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}