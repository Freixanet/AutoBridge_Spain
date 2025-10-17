import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Lock, FileCheck, CheckCircle2, AlertTriangle, ArrowRight, Scale } from "lucide-react"

export default function LegalFeaturePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground" variant="secondary">
            Legal-as-a-Feature
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Tu Protección Legal es Nuestra Ventaja Competitiva
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            No somos un marketplace. Somos tu broker con protección legal completa en cada paso del proceso de
            importación.
          </p>
        </div>
      </section>

      {/* Why Legal Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">¿Por Qué Legal-as-a-Feature?</h2>
            <p className="text-lg text-muted-foreground">
              La importación de vehículos implica riesgos reales. Nosotros los eliminamos con protección legal
              integrada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Sin Protección Legal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Pago directo al vendedor sin garantías</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Sin inspección independiente verificada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Daños en transporte sin cobertura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Kilometraje manipulado sin recurso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Problemas fiscales por documentación incorrecta</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/50 bg-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <CheckCircle2 className="h-5 w-5" />
                  Con AutoBridge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Pago en garantía (escrow) hasta entrega conforme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Inspección DEKRA/TÜV/GTÜ certificada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Seguro CMR con cobertura ICC(A) + SRCC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Verificación de historial Carfax/DAT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Cumplimiento VERI*FACTU y normativa fiscal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Los 4 Pilares de Protección Legal</h2>

          <div className="space-y-8">
            {/* Pillar 1: Independent Inspection */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold mb-3">1. Inspección Independiente Certificada</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Antes de cualquier compromiso de compra, un inspector certificado (DEKRA, TÜV o GTÜ) verifica el
                      estado real del vehículo con más de 150 puntos de control.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-sm">Qué Verificamos</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Estado mecánico completo</li>
                          <li>• Kilometraje real vs. declarado</li>
                          <li>• Historial de accidentes</li>
                          <li>• Estado de batería (EVs)</li>
                          <li>• Documentación legal</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-sm">Tu Protección</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Informe certificado oficial</li>
                          <li>• Fotografías detalladas</li>
                          <li>• Derecho a rechazar compra</li>
                          <li>• Sin coste si no procede</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 2: Escrow Payment */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Lock className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold mb-3">2. Pago en Garantía (Escrow)</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Tu dinero permanece en una cuenta de garantía independiente hasta que recibas el vehículo en
                      perfecto estado y conforme a lo acordado.
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-3">Cómo Funciona el Escrow</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            1
                          </div>
                          <div className="text-sm">
                            <p className="font-medium">Depósito Seguro</p>
                            <p className="text-muted-foreground">
                              Transfieres el importe a cuenta escrow gestionada por entidad financiera regulada
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            2
                          </div>
                          <div className="text-sm">
                            <p className="font-medium">Compra Protegida</p>
                            <p className="text-muted-foreground">
                              Compramos el vehículo al vendedor solo tras inspección aprobada
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            3
                          </div>
                          <div className="text-sm">
                            <p className="font-medium">Liberación Condicional</p>
                            <p className="text-muted-foreground">
                              El pago se libera solo cuando confirmas recepción conforme del vehículo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 3: CMR Insurance */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <FileCheck className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold mb-3">3. Seguro CMR Completo</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Cobertura de transporte internacional según Convenio CMR con las máximas garantías: ICC(A) para
                      todo riesgo y SRCC para eventos extraordinarios.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary" />
                          Cobertura ICC(A)
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Daños por accidente</li>
                          <li>• Robo o hurto</li>
                          <li>• Incendio o explosión</li>
                          <li>• Daños por carga/descarga</li>
                          <li>• Fenómenos meteorológicos</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary" />
                          Cobertura SRCC
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Huelgas y disturbios</li>
                          <li>• Actos terroristas</li>
                          <li>• Guerra civil</li>
                          <li>• Confiscación</li>
                          <li>• Eventos políticos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 4: VERI*FACTU Compliance */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Scale className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold mb-3">4. Cumplimiento VERI*FACTU</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Cumplimiento total con la normativa fiscal española VERI*FACTU para trazabilidad de facturas y
                      prevención de fraude fiscal.
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-3">Garantías Fiscales</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Facturación electrónica certificada</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Trazabilidad completa de pagos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Declaración correcta de IVA</span>
                          </li>
                        </ul>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Gestión DUA aduanero</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Documentación DGT completa</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Sin riesgos de sanciones</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Documentación Legal Incluida</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contrato de Intermediación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Contrato legal que define nuestras obligaciones como broker y tus derechos como cliente.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Alcance de servicios</li>
                  <li>• Condiciones de pago</li>
                  <li>• Garantías y responsabilidades</li>
                  <li>• Política de cancelación</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informe de Inspección</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Documento oficial emitido por DEKRA/TÜV/GTÜ con validez legal en toda la UE.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Certificado de inspección</li>
                  <li>• Informe fotográfico</li>
                  <li>• Verificación de kilometraje</li>
                  <li>• Estado técnico detallado</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Póliza de Seguro CMR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Póliza de transporte internacional con cobertura completa durante todo el trayecto.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Certificado de seguro</li>
                  <li>• Condiciones de cobertura</li>
                  <li>• Procedimiento de reclamación</li>
                  <li>• Contacto aseguradora</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Documentación Fiscal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Toda la documentación necesaria para cumplimiento fiscal y matriculación en España.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Factura VERI*FACTU</li>
                  <li>• DUA (Documento Único Administrativo)</li>
                  <li>• Certificado de conformidad</li>
                  <li>• Liquidación de impuestos</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Importa con Protección Legal Total</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            No arriesgues tu inversión. Trabaja con un broker que pone tu protección legal primero.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">
              Solicitar Auditoría Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
