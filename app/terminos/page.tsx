import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Términos y Condiciones | TT-Core",
  description: "Términos y condiciones de uso de los servicios de TT-Core",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl font-bold mb-6">Términos y Condiciones</h1>
          <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Aceptación de los Términos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Al acceder y utilizar los servicios de TT-Core, aceptas estar sujeto a estos términos y condiciones.
                  Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Descripción del Servicio</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  TT-Core ofrece servicios de intermediación (brokerage) para la importación de vehículos desde Alemania
                  a España, incluyendo:
                </p>
                <ul>
                  <li>Búsqueda y localización de vehículos en el mercado alemán</li>
                  <li>Coordinación de inspecciones técnicas independientes</li>
                  <li>Gestión de pagos en garantía (escrow)</li>
                  <li>Organización de transporte internacional con seguro CMR</li>
                  <li>Gestión de trámites aduaneros y fiscales</li>
                  <li>Matriculación del vehículo en España</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Obligaciones del Cliente</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>El cliente se compromete a:</p>
                <ul>
                  <li>Proporcionar información veraz y completa sobre sus necesidades y preferencias</li>
                  <li>Revisar y aprobar el informe de inspección antes de proceder con la compra</li>
                  <li>Realizar los pagos acordados en los plazos establecidos</li>
                  <li>Proporcionar la documentación necesaria para trámites fiscales y de matriculación</li>
                  <li>Inspeccionar el vehículo a su recepción y comunicar cualquier incidencia en 48 horas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Obligaciones de TT-Core</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>TT-Core se compromete a:</p>
                <ul>
                  <li>Actuar con diligencia profesional en la búsqueda y selección de vehículos</li>
                  <li>Coordinar inspecciones técnicas independientes por entidades certificadas</li>
                  <li>Gestionar pagos en garantía hasta la entrega conforme del vehículo</li>
                  <li>Contratar seguro CMR con cobertura ICC(A) + SRCC para el transporte</li>
                  <li>Gestionar correctamente todos los trámites aduaneros y fiscales</li>
                  <li>Entregar el vehículo matriculado y con toda la documentación en regla</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Estructura de Precios</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h3 className="font-semibold mt-4 mb-2">TT-Core (Servicio de Intermediación)</h3>
                <ul>
                  <li>Fee fijo del 3% sobre el precio de compra del vehículo</li>
                  <li>Incluye: búsqueda, inspección, gestión de escrow, trámites fiscales y matriculación</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-2">TT-Log (Servicio Logístico)</h3>
                <ul>
                  <li>Coste base de transporte + markup del 12-18%</li>
                  <li>Incluye: transporte, seguro CMR, gestión aduanera</li>
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  Todos los precios se detallan en el presupuesto personalizado antes de cualquier compromiso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Política de Cancelación</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <ul>
                  <li>
                    <strong>Antes de la inspección:</strong> Cancelación gratuita sin penalización
                  </li>
                  <li>
                    <strong>Después de inspección negativa:</strong> Cancelación gratuita, coste de inspección a cargo
                    de TT-Core
                  </li>
                  <li>
                    <strong>Después de inspección positiva:</strong> Cancelación posible con retención del 50% del fee
                    de intermediación
                  </li>
                  <li>
                    <strong>Después de compra confirmada:</strong> No reembolsable, salvo incumplimiento por parte de
                    TT-Core
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Garantías y Limitaciones</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  <strong>Garantías:</strong>
                </p>
                <ul>
                  <li>Inspección técnica independiente certificada</li>
                  <li>Verificación de historial del vehículo (Carfax/DAT)</li>
                  <li>Seguro CMR durante el transporte</li>
                  <li>Cumplimiento de normativa fiscal española</li>
                </ul>

                <p className="mt-4">
                  <strong>Limitaciones:</strong>
                </p>
                <ul>
                  <li>
                    TT-Core actúa como intermediario y no es responsable de defectos ocultos no detectados en la
                    inspección
                  </li>
                  <li>Las garantías del fabricante o vendedor son independientes de nuestro servicio</li>
                  <li>No garantizamos plazos exactos de entrega, solo estimaciones basadas en experiencia previa</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Responsabilidad</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  La responsabilidad de TT-Core está limitada al importe total pagado por el cliente por nuestros
                  servicios, excepto en casos de negligencia grave o dolo.
                </p>
                <p>
                  TT-Core no será responsable de daños indirectos, lucro cesante o pérdidas consecuenciales derivadas
                  del uso de nuestros servicios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Protección de Datos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  El tratamiento de datos personales se rige por nuestra{" "}
                  <a href="/privacidad" className="text-secondary hover:underline">
                    Política de Privacidad
                  </a>
                  , en cumplimiento del RGPD y la LOPDGDD.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Resolución de Conflictos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  En caso de controversia, las partes se comprometen a intentar resolver el conflicto de forma amistosa
                  mediante negociación directa.
                </p>
                <p>
                  Si no se alcanza un acuerdo, las partes se someten a la jurisdicción de los tribunales españoles
                  competentes según la legislación vigente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Modificaciones</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  TT-Core se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los
                  cambios entrarán en vigor tras su publicación en el sitio web.
                </p>
                <p>
                  Los contratos ya firmados se regirán por los términos vigentes en el momento de la firma, salvo
                  acuerdo expreso de las partes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Contacto</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Para cualquier consulta sobre estos términos y condiciones:</p>
                <p>
                  <strong>Email:</strong> info@tt-core.es
                  <br />
                  <strong>Teléfono:</strong> +34 XXX XXX XXX
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
