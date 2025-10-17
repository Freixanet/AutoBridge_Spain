import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Política de Privacidad | TT-Core",
  description: "Política de privacidad y protección de datos personales de TT-Core",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl font-bold mb-6">Política de Privacidad</h1>
          <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Responsable del Tratamiento</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  <strong>Identidad:</strong> TT-Core
                  <br />
                  <strong>Email:</strong> info@tt-core.es
                  <br />
                  <strong>Actividad:</strong> Broker de importación de vehículos desde Alemania a España
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Datos Personales que Recopilamos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Recopilamos los siguientes datos personales cuando utilizas nuestros servicios:</p>
                <ul>
                  <li>
                    <strong>Datos de identificación:</strong> Nombre completo, DNI/NIE, CIF (empresas)
                  </li>
                  <li>
                    <strong>Datos de contacto:</strong> Email, teléfono, dirección postal
                  </li>
                  <li>
                    <strong>Datos comerciales:</strong> Preferencias de vehículos, presupuesto, historial de consultas
                  </li>
                  <li>
                    <strong>Datos de navegación:</strong> Cookies, dirección IP, comportamiento en el sitio web
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Finalidad del Tratamiento</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Utilizamos tus datos personales para:</p>
                <ul>
                  <li>Gestionar tu solicitud de auditoría y proceso de importación</li>
                  <li>Comunicarnos contigo sobre el estado de tu operación</li>
                  <li>Cumplir con obligaciones legales y fiscales (VERI*FACTU, DUA, etc.)</li>
                  <li>Mejorar nuestros servicios y experiencia de usuario</li>
                  <li>Enviarte comunicaciones comerciales (solo con tu consentimiento explícito)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Base Legal del Tratamiento</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <ul>
                  <li>
                    <strong>Ejecución de contrato:</strong> Para gestionar tu solicitud de importación
                  </li>
                  <li>
                    <strong>Obligación legal:</strong> Para cumplir con normativa fiscal y aduanera
                  </li>
                  <li>
                    <strong>Consentimiento:</strong> Para comunicaciones comerciales (opcional)
                  </li>
                  <li>
                    <strong>Interés legítimo:</strong> Para mejorar nuestros servicios
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Conservación de Datos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Conservamos tus datos personales durante el tiempo necesario para cumplir con las finalidades
                  descritas y las obligaciones legales aplicables:
                </p>
                <ul>
                  <li>
                    <strong>Datos comerciales:</strong> Hasta que solicites su supresión o retires tu consentimiento
                  </li>
                  <li>
                    <strong>Datos fiscales:</strong> 4 años desde la última operación (obligación legal)
                  </li>
                  <li>
                    <strong>Datos contractuales:</strong> 5 años desde la finalización del contrato
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Destinatarios de los Datos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Tus datos pueden ser comunicados a:</p>
                <ul>
                  <li>Inspectores certificados (DEKRA, TÜV, GTÜ) para verificación de vehículos</li>
                  <li>Transportistas especializados para logística internacional</li>
                  <li>Gestores aduaneros para trámites DUA</li>
                  <li>Entidades financieras para pagos en garantía (escrow)</li>
                  <li>Administraciones públicas (Hacienda, DGT) cuando sea legalmente obligatorio</li>
                </ul>
                <p>
                  No vendemos ni cedemos tus datos a terceros con fines comerciales sin tu consentimiento explícito.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Tus Derechos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Según el RGPD, tienes derecho a:</p>
                <ul>
                  <li>
                    <strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti
                  </li>
                  <li>
                    <strong>Rectificación:</strong> Corregir datos inexactos o incompletos
                  </li>
                  <li>
                    <strong>Supresión:</strong> Solicitar la eliminación de tus datos
                  </li>
                  <li>
                    <strong>Oposición:</strong> Oponerte al tratamiento de tus datos
                  </li>
                  <li>
                    <strong>Limitación:</strong> Solicitar la limitación del tratamiento
                  </li>
                  <li>
                    <strong>Portabilidad:</strong> Recibir tus datos en formato estructurado
                  </li>
                  <li>
                    <strong>Retirar consentimiento:</strong> En cualquier momento para comunicaciones comerciales
                  </li>
                </ul>
                <p>
                  Para ejercer tus derechos, contacta con nosotros en <strong>info@tt-core.es</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Seguridad de los Datos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales contra
                  acceso no autorizado, pérdida, destrucción o alteración, incluyendo:
                </p>
                <ul>
                  <li>Cifrado SSL/TLS en todas las comunicaciones</li>
                  <li>Acceso restringido a datos personales solo a personal autorizado</li>
                  <li>Copias de seguridad regulares</li>
                  <li>Auditorías de seguridad periódicas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Transferencias Internacionales</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico
                  Europeo. En estos casos, garantizamos que se aplican las salvaguardas adecuadas según el RGPD.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contacto y Reclamaciones</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Para cualquier consulta sobre esta política de privacidad o el tratamiento de tus datos personales:
                </p>
                <p>
                  <strong>Email:</strong> info@tt-core.es
                </p>
                <p>
                  Si consideras que tus derechos no han sido atendidos adecuadamente, puedes presentar una reclamación
                  ante la Agencia Española de Protección de Datos (AEPD): <strong>www.aepd.es</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
