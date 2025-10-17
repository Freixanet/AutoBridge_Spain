import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Target, Users, Award, ArrowRight, CheckCircle2 } from "lucide-react"

export default function EmpresaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground" variant="secondary">
            Sobre TT-Core
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Broker Especializado en Importación Premium
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Conectamos compradores españoles con el mercado premium alemán, eliminando riesgos mediante protección legal
            integrada en cada paso.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-3">Nuestra Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar el acceso a vehículos premium alemanes para el mercado español, garantizando
                  transparencia total, protección legal completa y ahorros reales verificables en cada operación.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-3">Nuestro Compromiso</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Legal-as-a-Feature no es un eslogan, es nuestra ventaja competitiva. Cada importación incluye
                  inspección independiente, pago en garantía, seguro CMR completo y cumplimiento VERI*FACTU.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">¿Por Qué Elegirnos?</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">No Somos un Marketplace</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Actuamos como tu broker personal, no como intermediario entre desconocidos. Asumimos la
                      responsabilidad legal de cada operación y protegemos tu inversión con garantías reales.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Especialización en Premium y EVs</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Conocemos el mercado alemán de vehículos premium y eléctricos. Verificamos el estado real de
                      baterías, negociamos con dealers oficiales y garantizamos historiales limpios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparencia en Costes</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fee fijo del 3% en TT-Core y markup transparente del 12-18% en TT-Log. Sin sorpresas, sin costes
                      ocultos. Sabes exactamente qué pagas y por qué.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cumplimiento Legal Total</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      VERI*FACTU compliant, gestión DUA aduanero, liquidación correcta de IVA, matriculación DGT y toda
                      la documentación fiscal en regla. Sin riesgos de sanciones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-muted-foreground">
              Profesionales especializados en importación, logística internacional y cumplimiento legal
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  TT-Core está formado por un equipo multidisciplinar con experiencia en el sector automovilístico,
                  logística internacional y asesoría legal. Nuestros especialistas conocen en profundidad tanto el
                  mercado alemán como la normativa española de importación.
                </p>
                <p className="leading-relaxed mb-4">
                  Trabajamos con una red de inspectores certificados (DEKRA, TÜV, GTÜ), transportistas especializados en
                  vehículos premium, gestores aduaneros y asesores fiscales para garantizar un proceso sin incidencias.
                </p>
                <p className="leading-relaxed">
                  Nuestro objetivo es simple: que ahorres dinero importando tu vehículo premium desde Alemania sin
                  asumir ningún riesgo legal, técnico o financiero.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">Certificaciones y Cumplimiento</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">VERI*FACTU</h3>
                <p className="text-sm text-muted-foreground">Cumplimiento normativa fiscal española</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">RGPD</h3>
                <p className="text-sm text-muted-foreground">Protección de datos personales</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">CMR</h3>
                <p className="text-sm text-muted-foreground">Convenio transporte internacional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">¿Listo para Trabajar con Nosotros?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicita tu auditoría gratuita y descubre cómo podemos ayudarte a importar tu próximo vehículo premium
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
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
