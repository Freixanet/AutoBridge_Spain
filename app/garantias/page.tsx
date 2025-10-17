import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Lock, FileCheck, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"
import { getAssetPath } from "@/lib/asset-path"

export const metadata = {
  title: "Garantías y Seguridad | AutoBridge - Protección Legal Completa",
  description:
    "Descubre todas las garantías y protecciones legales que incluye AutoBridge: inspecciones DEKRA, pagos en garantía, seguro CMR, VERI*FACTU compliance y más.",
  keywords: [
    "garantías importación coches",
    "seguro CMR",
    "inspección DEKRA",
    "pago en garantía escrow",
    "protección legal importación",
    "VERI*FACTU",
  ],
}

export default function GuarantiasPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath("/premium-german-luxury-car-on-autobahn-dramatic-lig.jpg")}
            alt="Security and protection"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 text-balance leading-tight">
              Tu Dinero y tu Coche Están Protegidos en Cada Paso
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Garantías legales, inspecciones independientes, pagos seguros y seguros completos. AutoBridge es tu
              protección contra riesgos.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Protection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">4 Pilares de Protección Legal</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada aspecto de tu compra está protegido por garantías legales y seguros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pillar 1: Inspections */}
            <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">1. Inspección Independiente</h3>
                <p className="text-muted-foreground mb-6">
                  Antes de cualquier compra, un inspector certificado DEKRA, TÜV o GTÜ verifica el estado real del
                  vehículo.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qué se inspecciona:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Estado mecánico completo</li>
                      <li>✓ Historial de accidentes (Carfax/Autocheck)</li>
                      <li>✓ Kilometraje verificado</li>
                      <li>✓ Documentación legal</li>
                      <li>✓ Emisiones y seguridad</li>
                      <li>✓ Batería (si es eléctrico)</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Garantía:</p>
                    <p className="text-sm text-muted-foreground">
                      Si el vehículo no cumple con la inspección, no procedes con la compra. Tu dinero está protegido.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 2: Escrow */}
            <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">2. Pago en Garantía (Escrow)</h3>
                <p className="text-muted-foreground mb-6">
                  Tu dinero se deposita en una cuenta escrow independiente. Solo se libera cuando recibas el vehículo
                  conforme.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cómo funciona:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>1. Tú depositas el dinero en escrow</li>
                      <li>2. AutoBridge compra el vehículo</li>
                      <li>3. Inspección y documentación</li>
                      <li>4. Vehículo llega a España</li>
                      <li>5. Verificas el estado</li>
                      <li>6. Dinero se libera al vendedor</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Garantía:</p>
                    <p className="text-sm text-muted-foreground">
                      Si hay problemas, tu dinero se devuelve. El vendedor no recibe nada hasta que estés satisfecho.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 3: CMR Insurance */}
            <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <FileCheck className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">3. Seguro CMR Completo</h3>
                <p className="text-muted-foreground mb-6">
                  Cobertura internacional completa durante el transporte desde Alemania hasta tu domicilio en España.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cobertura incluida:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ ICC(A) - Daños accidentales</li>
                      <li>✓ SRCC - Robo y saqueo</li>
                      <li>✓ Responsabilidad civil</li>
                      <li>✓ Gastos de salvamento</li>
                      <li>✓ Cobertura 24/7</li>
                      <li>✓ Válido en toda Europa</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Garantía:</p>
                    <p className="text-sm text-muted-foreground">
                      Cualquier daño durante el transporte está cubierto. Reclamación rápida y sin complicaciones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pillar 4: Legal Compliance */}
            <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">4. Cumplimiento Legal Total</h3>
                <p className="text-muted-foreground mb-6">
                  Documentación completa, VERI*FACTU compliance y asesoramiento legal en cada paso.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Documentación incluida:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Documentos de importación</li>
                      <li>✓ Certificado de origen</li>
                      <li>✓ Factura VERI*FACTU</li>
                      <li>✓ Póliza de seguros</li>
                      <li>✓ Documentación aduanal</li>
                      <li>✓ Asesoramiento fiscal</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Garantía:</p>
                    <p className="text-sm text-muted-foreground">
                      Cumplimiento total con normativa española. Sin problemas legales ni sorpresas fiscales.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Guarantees */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Garantías Específicas de AutoBridge</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compromisos que hacemos contigo en cada transacción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Garantía de Precio",
                description:
                  "€2.200 honorarios fijos. Sin comisiones ocultas, sin sorpresas. Si encuentras un coche más barato en el mercado, te ayudamos a negociar.",
              },
              {
                title: "Garantía de Plazo",
                description:
                  "Entrega en 12-18 días. Si hay retrasos por nuestra parte, recibas un descuento en los honorarios.",
              },
              {
                title: "Garantía de Satisfacción",
                description:
                  "Si el vehículo no cumple con tus expectativas, tienes 7 días para solicitar una revisión o cambio.",
              },
              {
                title: "Garantía de Documentación",
                description:
                  "Toda la documentación legal completa y verificada. Si hay problemas, AutoBridge se responsabiliza.",
              },
              {
                title: "Garantía de Inspección",
                description:
                  "Inspección DEKRA independiente. Si el vehículo tiene defectos ocultos, no procedes con la compra.",
              },
              {
                title: "Garantía de Seguro",
                description: "Cobertura CMR completa. Cualquier daño durante el transporte está cubierto al 100%.",
              },
            ].map((guarantee, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{guarantee.title}</h3>
                      <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Riesgos Comunes y Cómo los Evitamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce los riesgos de importar solo y cómo AutoBridge te protege
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                risk: "Fraude y Estafas",
                problem: "Vendedores deshonestos que venden coches con problemas ocultos o documentación falsa.",
                solution: "Inspección DEKRA independiente verifica el estado real. Documentación verificada y legal.",
              },
              {
                risk: "Pérdida de Dinero",
                problem: "Transferencias directas sin protección. Si hay problemas, pierdes todo.",
                solution: "Pago en garantía (escrow). Tu dinero protegido hasta que recibas el vehículo conforme.",
              },
              {
                risk: "Daños en Transporte",
                problem: "Vehículo llega dañado sin cobertura de seguros.",
                solution: "Seguro CMR completo (ICC(A) + SRCC). Cobertura 100% de daños.",
              },
              {
                risk: "Problemas Legales",
                problem: "Documentación incompleta, problemas fiscales, multas sorpresa.",
                solution: "Documentación completa, VERI*FACTU compliance, asesoramiento legal incluido.",
              },
              {
                risk: "Falta de Transparencia",
                problem: "Costes ocultos que aparecen al final. Sorpresas desagradables.",
                solution: "€2.200 honorarios fijos. Desglose completo de costes desde el inicio.",
              },
              {
                risk: "Proceso Complicado",
                problem: "No sabes qué hacer, dónde ir, a quién llamar. Proceso confuso.",
                solution: "Proceso sistematizado de 8 pasos. Seguimiento completo y soporte 24/7.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-secondary transition-colors">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex gap-3">
                      <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-red-600 mb-1">{item.risk}</h4>
                        <p className="text-sm text-muted-foreground">{item.problem}</p>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">Nuestra Solución</h4>
                        <p className="text-sm text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Preguntas Frecuentes sobre Garantías</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "¿Qué pasa si el vehículo llega dañado?",
                a: "El seguro CMR cubre todos los daños. Presentamos la reclamación y el seguro paga la reparación o el valor del vehículo.",
              },
              {
                q: "¿Puedo devolver el vehículo si no me gusta?",
                a: "Tienes 7 días para solicitar una revisión o cambio. Si hay defectos ocultos, no procedes con la compra.",
              },
              {
                q: "¿Qué pasa si hay problemas legales después?",
                a: "Toda la documentación está verificada y completa. Si hay problemas, AutoBridge se responsabiliza.",
              },
              {
                q: "¿Está protegido mi dinero en escrow?",
                a: "Sí, 100%. Tu dinero está en una cuenta escrow independiente. Solo se libera cuando estés satisfecho.",
              },
              {
                q: "¿Qué incluye la inspección DEKRA?",
                a: "Estado mecánico, historial de accidentes, kilometraje, documentación, emisiones, seguridad y batería (si es eléctrico).",
              },
              {
                q: "¿Hay costes ocultos después de los €2.200?",
                a: "No. €2.200 son los únicos honorarios. Todos los demás costes (transporte, inspección, seguros) están incluidos.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Importa con Confianza. Tu Protección es Nuestra Prioridad.
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Todas las garantías y protecciones legales incluidas. Consulta gratuita en 24 horas.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
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
