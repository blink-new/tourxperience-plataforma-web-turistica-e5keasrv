import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, AlertTriangle, Heart, Users, MapPin, Phone } from 'lucide-react'

export default function SafetyGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Guías de Seguridad</CardTitle>
            <p className="text-center text-gray-600">Tu seguridad es nuestra prioridad principal</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold">Compromiso con la Seguridad</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  En TourXperience, la seguridad de nuestros clientes es nuestra máxima prioridad. 
                  Trabajamos únicamente con proveedores certificados y seguimos los más altos estándares 
                  de seguridad internacionales para garantizar experiencias memorables y seguras.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Estándares de Seguridad para Proveedores</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Shield className="w-5 h-5 text-green-600 mr-2" />
                      Certificaciones Requeridas
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Licencias turísticas vigentes</li>
                      <li>• Seguros de responsabilidad civil</li>
                      <li>• Certificaciones de seguridad específicas</li>
                      <li>• Permisos gubernamentales actualizados</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Users className="w-5 h-5 text-blue-600 mr-2" />
                      Personal Calificado
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Guías certificados y capacitados</li>
                      <li>• Entrenamiento en primeros auxilios</li>
                      <li>• Conocimiento de protocolos de emergencia</li>
                      <li>• Evaluaciones periódicas de desempeño</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Guías de Seguridad por Tipo de Actividad</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">🏔️ Actividades de Aventura y Deportes Extremos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Antes de la Actividad:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Evaluación médica recomendada</li>
                          <li>Declaración de salud obligatoria</li>
                          <li>Briefing de seguridad completo</li>
                          <li>Verificación de equipo de protección</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Durante la Actividad:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Supervisión constante de instructores</li>
                          <li>Uso obligatorio de equipo de seguridad</li>
                          <li>Comunicación por radio disponible</li>
                          <li>Protocolos de emergencia activados</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">🌊 Actividades Acuáticas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Requisitos de Seguridad:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Chalecos salvavidas certificados</li>
                          <li>Evaluación de habilidades de natación</li>
                          <li>Condiciones climáticas monitoreadas</li>
                          <li>Embarcaciones con equipos de emergencia</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Personal Especializado:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Instructores certificados en rescate acuático</li>
                          <li>Capitanes con licencia náutica</li>
                          <li>Equipo médico de emergencia a bordo</li>
                          <li>Comunicación constante con guardacostas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">🚌 Tours y Transportación</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Vehículos Seguros:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Mantenimiento preventivo regular</li>
                          <li>Seguros de viajero vigentes</li>
                          <li>Cinturones de seguridad funcionales</li>
                          <li>Sistemas de comunicación GPS</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Conductores Calificados:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Licencias profesionales vigentes</li>
                          <li>Exámenes médicos periódicos</li>
                          <li>Capacitación en manejo defensivo</li>
                          <li>Conocimiento de rutas de emergencia</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">🏛️ Tours Culturales y Gastronómicos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Seguridad Alimentaria:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Restaurantes con certificaciones sanitarias</li>
                          <li>Manejo higiénico de alimentos</li>
                          <li>Información sobre alérgenos disponible</li>
                          <li>Agua potable garantizada</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Sitios Seguros:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                          <li>Rutas seguras y bien iluminadas</li>
                          <li>Grupos de tamaño controlado</li>
                          <li>Guías con conocimiento local</li>
                          <li>Contacto con autoridades locales</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Recomendaciones para Viajeros</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Heart className="w-5 h-5 text-red-600 mr-2" />
                      Salud y Bienestar
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Consulte a su médico antes de actividades físicas intensas</li>
                      <li>• Informe sobre condiciones médicas preexistentes</li>
                      <li>• Lleve medicamentos personales necesarios</li>
                      <li>• Manténgase hidratado durante las actividades</li>
                      <li>• Use protector solar y ropa adecuada</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      Preparación del Viaje
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Verifique documentos de identidad vigentes</li>
                      <li>• Investigue las condiciones climáticas</li>
                      <li>• Empaque ropa y calzado apropiados</li>
                      <li>• Comparta su itinerario con familiares</li>
                      <li>• Contrate seguro de viaje recomendado</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Protocolos de Emergencia</h2>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                      En Caso de Emergencia
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Pasos Inmediatos:</h4>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                          <li>Mantenga la calma y evalúe la situación</li>
                          <li>Notifique inmediatamente al guía o instructor</li>
                          <li>Siga las instrucciones del personal capacitado</li>
                          <li>Coopere con los servicios de emergencia</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Números de Emergencia:</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li><strong>911</strong> - Emergencias generales (México)</li>
                          <li><strong>065</strong> - Cruz Roja Mexicana</li>
                          <li><strong>+52 55 1234-5678</strong> - TourXperience 24/7</li>
                          <li><strong>078</strong> - Protección Civil</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Seguros y Cobertura</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800">Seguro Básico</h3>
                    <p className="text-sm text-green-700 mt-2">
                      Incluido en todas las actividades. Cubre accidentes durante la experiencia.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-800">Seguro Médico</h3>
                    <p className="text-sm text-blue-700 mt-2">
                      Recomendado para actividades de aventura. Cobertura médica extendida.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-800">Seguro de Viaje</h3>
                    <p className="text-sm text-purple-700 mt-2">
                      Opcional. Cubre cancelaciones, equipaje y emergencias médicas.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Condiciones Médicas y Restricciones</h2>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold mb-3">⚠️ Importante: Declaración de Salud</h3>
                  <p className="text-gray-700 mb-3">
                    Para su seguridad, debe informar sobre cualquier condición médica que pueda afectar 
                    su participación en las actividades:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Condiciones que Requieren Atención Especial:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Problemas cardíacos o respiratorios</li>
                        <li>Diabetes o condiciones metabólicas</li>
                        <li>Lesiones recientes o cirugías</li>
                        <li>Embarazo</li>
                        <li>Fobias o limitaciones físicas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Restricciones de Edad:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Menores de 18 años requieren autorización parental</li>
                        <li>Algunas actividades tienen límites de edad mínima</li>
                        <li>Actividades extremas: evaluación caso por caso</li>
                        <li>Adultos mayores: consulta médica recomendada</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contacto de Seguridad</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Centro de Seguridad TourXperience</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 text-sm">
                        <strong>Línea de Emergencia 24/7:</strong><br />
                        📞 +52 (55) 1234-5678<br />
                        📧 emergencias@tourxperience.com<br />
                        💬 WhatsApp: +52 55 9876-5432
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">
                        <strong>Oficina Central:</strong><br />
                        Av. Reforma 123, Col. Centro<br />
                        Ciudad de México, C.P. 06000<br />
                        Horario: 24 horas, 365 días
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-semibold mb-2">🛡️ Nuestro Compromiso</h3>
                  <p className="text-gray-700 text-sm">
                    En TourXperience, trabajamos continuamente para mejorar nuestros estándares de seguridad. 
                    Realizamos auditorías regulares, capacitamos constantemente a nuestros proveedores y 
                    actualizamos nuestros protocolos basados en las mejores prácticas internacionales. 
                    Su seguridad y tranquilidad son nuestra responsabilidad más importante.
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