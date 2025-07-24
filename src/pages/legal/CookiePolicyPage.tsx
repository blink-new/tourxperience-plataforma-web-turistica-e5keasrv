import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cookie, Settings, BarChart3, Target, Shield } from 'lucide-react'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Política de Cookies</CardTitle>
            <p className="text-center text-gray-600">Información sobre el uso de cookies en TourXperience</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <div className="flex items-center mb-4">
                  <Cookie className="w-8 h-8 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-semibold">¿Qué son las Cookies?</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                  nuestro sitio web. Nos ayudan a recordar sus preferencias, mejorar su experiencia de navegación 
                  y proporcionar funcionalidades personalizadas. TourXperience utiliza cookies de manera responsable 
                  y transparente, siempre respetando su privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Tipos de Cookies que Utilizamos</h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="font-semibold text-lg">Cookies Esenciales</h3>
                      <Badge className="ml-2 bg-green-500">Siempre Activas</Badge>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">
                      Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li><strong>Autenticación:</strong> Mantienen su sesión iniciada</li>
                      <li><strong>Carrito de compras:</strong> Recuerdan los productos seleccionados</li>
                      <li><strong>Seguridad:</strong> Protegen contra ataques maliciosos</li>
                      <li><strong>Preferencias básicas:</strong> Idioma y moneda seleccionados</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                    <div className="flex items-center mb-2">
                      <Settings className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-lg">Cookies de Funcionalidad</h3>
                      <Badge className="ml-2 bg-blue-500">Opcionales</Badge>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">
                      Mejoran la funcionalidad del sitio web y su experiencia de usuario.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li><strong>Personalización:</strong> Recuerdan sus preferencias de navegación</li>
                      <li><strong>Formularios:</strong> Guardan información ingresada previamente</li>
                      <li><strong>Chat en vivo:</strong> Mantienen el historial de conversaciones</li>
                      <li><strong>Favoritos:</strong> Almacenan sus actividades preferidas</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 p-4 rounded-r-lg">
                    <div className="flex items-center mb-2">
                      <BarChart3 className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-lg">Cookies Analíticas</h3>
                      <Badge className="ml-2 bg-purple-500">Opcionales</Badge>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li><strong>Google Analytics:</strong> Estadísticas de uso del sitio web</li>
                      <li><strong>Hotjar:</strong> Mapas de calor y grabaciones de sesiones</li>
                      <li><strong>Métricas de rendimiento:</strong> Tiempos de carga y errores</li>
                      <li><strong>Análisis de conversión:</strong> Efectividad de nuestras páginas</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 p-4 rounded-r-lg">
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-orange-600 mr-2" />
                      <h3 className="font-semibold text-lg">Cookies de Marketing</h3>
                      <Badge className="ml-2 bg-orange-500">Opcionales</Badge>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">
                      Se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li><strong>Facebook Pixel:</strong> Anuncios personalizados en redes sociales</li>
                      <li><strong>Google Ads:</strong> Remarketing y seguimiento de conversiones</li>
                      <li><strong>Afiliados:</strong> Seguimiento de referencias y comisiones</li>
                      <li><strong>Email marketing:</strong> Personalización de comunicaciones</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookies de Terceros</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">🔍 Servicios de Análisis</h3>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">Google Analytics</h4>
                        <p className="text-sm text-gray-600">Análisis de tráfico web y comportamiento de usuarios</p>
                        <p className="text-xs text-gray-500">Duración: 2 años</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">Hotjar</h4>
                        <p className="text-sm text-gray-600">Mapas de calor y análisis de experiencia de usuario</p>
                        <p className="text-xs text-gray-500">Duración: 1 año</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">💳 Servicios de Pago</h3>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">Stripe</h4>
                        <p className="text-sm text-gray-600">Procesamiento seguro de pagos</p>
                        <p className="text-xs text-gray-500">Duración: Sesión</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">PayPal</h4>
                        <p className="text-sm text-gray-600">Pagos alternativos y billeteras digitales</p>
                        <p className="text-xs text-gray-500">Duración: Sesión</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">📱 Redes Sociales</h3>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">Facebook Pixel</h4>
                        <p className="text-sm text-gray-600">Remarketing y anuncios personalizados</p>
                        <p className="text-xs text-gray-500">Duración: 90 días</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">Google Ads</h4>
                        <p className="text-sm text-gray-600">Seguimiento de conversiones publicitarias</p>
                        <p className="text-xs text-gray-500">Duración: 90 días</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">💬 Comunicación</h3>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">Intercom</h4>
                        <p className="text-sm text-gray-600">Chat en vivo y soporte al cliente</p>
                        <p className="text-xs text-gray-500">Duración: 1 año</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-medium">Mailchimp</h4>
                        <p className="text-sm text-gray-600">Gestión de newsletters y email marketing</p>
                        <p className="text-xs text-gray-500">Duración: 2 años</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Gestión de Cookies</h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">🎛️ Centro de Preferencias de Cookies</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Puede gestionar sus preferencias de cookies en cualquier momento a través de nuestro 
                      centro de preferencias, accesible desde el pie de página de nuestro sitio web.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Opciones Disponibles:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Aceptar todas las cookies</li>
                          <li>Rechazar cookies opcionales</li>
                          <li>Personalizar por categoría</li>
                          <li>Ver detalles de cada cookie</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Configuración del Navegador:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Bloquear todas las cookies</li>
                          <li>Eliminar cookies existentes</li>
                          <li>Configurar excepciones por sitio</li>
                          <li>Modo de navegación privada</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Configuración por Navegador</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🌐 Google Chrome</h3>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                        <li>Haga clic en el menú (⋮) &gt; Configuración</li>
                        <li>Vaya a "Privacidad y seguridad"</li>
                        <li>Seleccione "Cookies y otros datos de sitios"</li>
                        <li>Configure sus preferencias</li>
                      </ol>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🦊 Mozilla Firefox</h3>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                        <li>Haga clic en el menú (☰) &gt; Preferencias</li>
                        <li>Seleccione "Privacidad y seguridad"</li>
                        <li>En "Cookies y datos del sitio"</li>
                        <li>Configure las opciones deseadas</li>
                      </ol>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🧭 Safari</h3>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                        <li>Vaya a Safari &gt; Preferencias</li>
                        <li>Haga clic en la pestaña "Privacidad"</li>
                        <li>Configure "Cookies y datos de sitios web"</li>
                        <li>Seleccione sus preferencias</li>
                      </ol>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🔷 Microsoft Edge</h3>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                        <li>Haga clic en el menú (⋯) &gt; Configuración</li>
                        <li>Seleccione "Cookies y permisos de sitio"</li>
                        <li>Haga clic en "Cookies y datos de sitios"</li>
                        <li>Ajuste la configuración</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Impacto de Deshabilitar Cookies</h2>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold mb-3">⚠️ Importante: Funcionalidad Limitada</h3>
                  <p className="text-gray-700 mb-3">
                    Si decide deshabilitar las cookies, algunas funciones de nuestro sitio web pueden no funcionar correctamente:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Sin Cookies Esenciales:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>No podrá mantener su sesión iniciada</li>
                        <li>El carrito de compras no funcionará</li>
                        <li>Las preferencias no se guardarán</li>
                        <li>Problemas de seguridad potenciales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Sin Cookies Opcionales:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Experiencia menos personalizada</li>
                        <li>Anuncios menos relevantes</li>
                        <li>Funciones de chat limitadas</li>
                        <li>Análisis de mejoras reducido</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Duración de las Cookies</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-green-800 mb-2">Cookies de Sesión</h3>
                    <p className="text-sm text-green-700">
                      Se eliminan automáticamente cuando cierra su navegador
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-800 mb-2">Cookies Temporales</h3>
                    <p className="text-sm text-blue-700">
                      Duran desde unos días hasta algunos meses
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold text-purple-800 mb-2">Cookies Persistentes</h3>
                    <p className="text-sm text-purple-700">
                      Pueden durar hasta 2 años, según su propósito
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Actualizaciones de esta Política</h2>
                <p className="text-gray-700 leading-relaxed">
                  Esta Política de Cookies puede actualizarse periódicamente para reflejar cambios en nuestras 
                  prácticas o por razones operativas, legales o regulatorias. Le notificaremos sobre cambios 
                  significativos a través de nuestro sitio web o por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Si tiene preguntas sobre nuestra Política de Cookies o desea ejercer sus derechos 
                    relacionados con las cookies, puede contactarnos:
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-gray-700">
                      <strong>📧 Correo:</strong> cookies@tourxperience.com
                    </p>
                    <p className="text-gray-700">
                      <strong>📞 Teléfono:</strong> +52 (55) 1234-5678
                    </p>
                    <p className="text-gray-700">
                      <strong>📍 Dirección:</strong> Av. Reforma 123, Col. Centro, Ciudad de México, C.P. 06000, México
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-semibold mb-2">🍪 Nuestro Compromiso</h3>
                  <p className="text-gray-700 text-sm">
                    En TourXperience, nos comprometemos a utilizar las cookies de manera transparente y responsable. 
                    Siempre le daremos control sobre sus datos y respetaremos sus decisiones de privacidad. 
                    Las cookies nos ayudan a brindarle una mejor experiencia, pero su privacidad siempre será nuestra prioridad.
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