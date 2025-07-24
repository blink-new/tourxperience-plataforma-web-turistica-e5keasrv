import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Política de Privacidad</CardTitle>
            <p className="text-center text-gray-600">Última actualización: 23 de enero de 2025</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
                <p className="text-gray-700 leading-relaxed">
                  TourXperience, S.A. de C.V. (en adelante "TourXperience", "nosotros", "nuestro" o "la Empresa"), 
                  con domicilio en Ciudad de México, México, es responsable del tratamiento de sus datos personales 
                  conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) 
                  y su Reglamento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Datos Personales que Recabamos</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Para brindarle nuestros servicios de reserva de experiencias turísticas, recabamos los siguientes datos personales:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Datos de Identificación:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nombre completo</li>
                      <li>Fecha de nacimiento</li>
                      <li>Nacionalidad</li>
                      <li>Número de identificación oficial</li>
                      <li>Fotografía (cuando sea requerida)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Datos de Contacto:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Correo electrónico</li>
                      <li>Número telefónico</li>
                      <li>Dirección postal</li>
                      <li>País de residencia</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Datos Financieros y Patrimoniales:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Información de tarjetas de crédito/débito (encriptada)</li>
                    <li>Historial de transacciones</li>
                    <li>Preferencias de pago</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Finalidades del Tratamiento</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Sus datos personales serán utilizados para las siguientes finalidades:
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">Finalidades Primarias (necesarias para el servicio):</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Procesar y confirmar reservas de actividades turísticas</li>
                      <li>Generar tickets y códigos QR de confirmación</li>
                      <li>Procesar pagos y facturación</li>
                      <li>Brindar atención al cliente y soporte técnico</li>
                      <li>Cumplir con obligaciones legales y fiscales</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Finalidades Secundarias (requieren consentimiento):</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Envío de promociones y ofertas especiales</li>
                      <li>Análisis de preferencias para mejorar nuestros servicios</li>
                      <li>Invitaciones a encuestas de satisfacción</li>
                      <li>Comunicaciones de marketing directo</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Transferencias de Datos</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Sus datos personales pueden ser transferidos a:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Proveedores de servicios turísticos (tours, actividades, transportación)</li>
                  <li>Procesadores de pagos (Stripe, PayPal, bancos)</li>
                  <li>Servicios de envío de correos electrónicos</li>
                  <li>Autoridades competentes cuando sea requerido por ley</li>
                  <li>Empresas de análisis de datos (Google Analytics, con datos anonimizados)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Todas las transferencias se realizan bajo estrictas medidas de seguridad y confidencialidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Derechos ARCO</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Acceder</strong> a sus datos personales en nuestro poder</li>
                  <li><strong>Rectificar</strong> datos inexactos o incompletos</li>
                  <li><strong>Cancelar</strong> el tratamiento de sus datos</li>
                  <li><strong>Oponerse</strong> al tratamiento para finalidades específicas</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Para ejercer estos derechos, envíe un correo a: <strong>privacidad@tourxperience.com</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Medidas de Seguridad</h2>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas de seguridad físicas, técnicas y administrativas para proteger sus datos personales, 
                  incluyendo encriptación SSL, firewalls, acceso restringido y monitoreo continuo de nuestros sistemas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies y Tecnologías Similares</h2>
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos cookies para mejorar su experiencia de navegación, recordar sus preferencias y analizar 
                  el tráfico de nuestro sitio web. Puede configurar su navegador para rechazar cookies, aunque esto 
                  puede afectar la funcionalidad del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Cambios a esta Política</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nos reservamos el derecho de modificar esta Política de Privacidad. Los cambios serán notificados 
                  a través de nuestro sitio web y por correo electrónico cuando sea aplicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Contacto</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>TourXperience, S.A. de C.V.</strong><br />
                    Responsable de Protección de Datos<br />
                    Correo: privacidad@tourxperience.com<br />
                    Teléfono: +52 (55) 1234-5678<br />
                    Dirección: Av. Reforma 123, Col. Centro, Ciudad de México, C.P. 06000, México
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