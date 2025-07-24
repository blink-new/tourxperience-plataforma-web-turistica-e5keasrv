import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Términos y Condiciones de Servicio</CardTitle>
            <p className="text-center text-gray-600">Última actualización: 23 de enero de 2025</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Información de la Empresa</h2>
                <p className="text-gray-700 leading-relaxed">
                  Estos términos y condiciones regulan el uso de la plataforma TourXperience operada por 
                  <strong> TourXperience, S.A. de C.V.</strong>, sociedad mexicana constituida conforme a las leyes de México, 
                  con domicilio en Av. Reforma 123, Col. Centro, Ciudad de México, C.P. 06000, México.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Aceptación de los Términos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a estos términos y condiciones. 
                  Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Descripción del Servicio</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  TourXperience es una plataforma digital que facilita la reserva de experiencias turísticas, incluyendo:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Tours culturales y gastronómicos</li>
                  <li>Actividades de aventura y deportes</li>
                  <li>Experiencias de naturaleza y vida silvestre</li>
                  <li>Boletos para atracciones y eventos</li>
                  <li>Servicios de transportación turística</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Registro de Usuario</h2>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    Para utilizar nuestros servicios, debe crear una cuenta proporcionando información veraz y actualizada.
                  </p>
                  <h3 className="font-semibold">Responsabilidades del Usuario:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Mantener la confidencialidad de su cuenta y contraseña</li>
                    <li>Proporcionar información precisa y actualizada</li>
                    <li>Notificar inmediatamente cualquier uso no autorizado</li>
                    <li>Ser mayor de 18 años o contar con autorización parental</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Reservas y Pagos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">5.1 Proceso de Reserva</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Las reservas están sujetas a disponibilidad</li>
                      <li>Los precios pueden cambiar sin previo aviso</li>
                      <li>La confirmación se envía por correo electrónico</li>
                      <li>Se requiere pago completo al momento de la reserva</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">5.2 Métodos de Pago</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Aceptamos tarjetas de crédito y débito principales (Visa, MasterCard, American Express), 
                      PayPal y otros métodos de pago disponibles en México. Todos los pagos se procesan de forma segura.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">5.3 Moneda y Precios</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Los precios se muestran en pesos mexicanos (MXN), dólares estadounidenses (USD) o euros (EUR). 
                      Los precios incluyen IVA cuando sea aplicable conforme a la legislación mexicana.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Política de Cancelación y Reembolsos</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold mb-2">6.1 Cancelaciones por el Cliente</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Más de 24 horas antes:</strong> Reembolso completo</li>
                      <li><strong>Entre 24-12 horas antes:</strong> 50% de reembolso</li>
                      <li><strong>Menos de 12 horas antes:</strong> Sin reembolso</li>
                      <li><strong>No show:</strong> Sin reembolso</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">6.2 Cancelaciones por Fuerza Mayor</h3>
                    <p className="text-gray-700 leading-relaxed">
                      En caso de cancelación por condiciones climáticas adversas, emergencias sanitarias, 
                      o eventos fuera de nuestro control, ofrecemos reembolso completo o reprogramación sin costo.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Responsabilidades y Limitaciones</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold mb-2">7.1 Responsabilidad de TourXperience</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Actuamos como intermediarios entre clientes y proveedores de servicios turísticos. 
                      Nuestra responsabilidad se limita al valor de la reserva realizada.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">7.2 Responsabilidad del Cliente</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Llegar puntualmente al punto de encuentro</li>
                      <li>Portar documentación requerida (ID, pasaporte)</li>
                      <li>Seguir las instrucciones de seguridad</li>
                      <li>Comportarse de manera respetuosa</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Propiedad Intelectual</h2>
                <p className="text-gray-700 leading-relaxed">
                  Todo el contenido de la plataforma, incluyendo textos, imágenes, logos, y software, 
                  está protegido por derechos de autor y marcas registradas. Queda prohibida su reproducción 
                  sin autorización expresa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Uso Prohibido</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Está prohibido utilizar nuestros servicios para:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Actividades ilegales o fraudulentas</li>
                  <li>Envío de spam o contenido malicioso</li>
                  <li>Violación de derechos de terceros</li>
                  <li>Interferir con el funcionamiento de la plataforma</li>
                  <li>Crear cuentas falsas o múltiples</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Jurisdicción y Ley Aplicable</h2>
                <p className="text-gray-700 leading-relaxed">
                  Estos términos se rigen por las leyes de México. Cualquier controversia será resuelta 
                  por los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Modificaciones</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Los cambios serán notificados a través de nuestro sitio web y entrarán en vigor inmediatamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Contacto</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>TourXperience, S.A. de C.V.</strong><br />
                    Correo: legal@tourxperience.com<br />
                    Teléfono: +52 (55) 1234-5678<br />
                    Dirección: Av. Reforma 123, Col. Centro, Ciudad de México, C.P. 06000, México<br />
                    RFC: TXP123456789
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