import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, FileCheck, Lock, TrendingDown, Clock, CheckCircle2, ArrowRight, Calculator } from "lucide-react"
import { HomePageSchema, ServiceSchema, FAQSchema } from "@/components/schema-markup"

export const metadata = {
  title: "Importación Premium de Coches Alemanes | TT-Core & TT-Log",
  description:
    "Broker especializado en importación de vehículos premium y eléctricos desde Alemania a España. Inspecciones independientes, pagos en garantía y transparencia total. Ahorra hasta €8,000.",
  keywords: [
    "importación coches alemania",
    "coches premium",
    "vehículos eléctricos",
    "broker automóvil",
    "inspección independiente",
    "BMW importación",
    "Mercedes importación",
    "Audi importación",
    "Tesla importación",
  ],
  openGraph: {
    title: "Importación Premium de Coches Alemanes | TT-Core",
    description: "Ahorra hasta €8,000 importando vehículos premium desde Alemania con protección legal completa",
    type: "website",
    locale: "es_ES",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HomePageSchema />
      <ServiceSchema />
      <FAQSchema />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/premium-german-luxury-car-on-autobahn-dramatic-lig.jpg"
            alt="Premium German vehicle"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary text-secondary-foreground" variant="secondary">
              Legal-as-a-Feature: Inspecciones Independientes + Pagos en Garantía
            </Badge>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Importa tu coche premium desde Alemania con <span className="text-secondary">transparencia total</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Ahorra hasta 8.000€ en vehículos premium y eléctricos. Inspecciones independientes, pagos en garantía y
              seguro CMR incluido. Sin sorpresas, sin riesgos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
              >
                <Link href="/calculadoras">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Mi Ahorro
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Link href="/contacto">
                  Auditoría Gratuita 24h
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">€5-8K</div>
                <div className="text-sm text-muted-foreground">Ahorro Medio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">12-18d</div>
                <div className="text-sm text-muted-foreground">Entrega Media</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Transparencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Legal-as-a-Feature: Tu Protección es Nuestra Prioridad
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No somos un marketplace. Somos tu broker de confianza con protección legal en cada paso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trust Card 1 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Inspección Independiente</h3>
                <p className="text-sm text-muted-foreground">
                  DEKRA, TÜV o GTÜ verifican el estado real del vehículo antes de tu compra.
                </p>
              </CardContent>
            </Card>

            {/* Trust Card 2 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Pago en Garantía</h3>
                <p className="text-sm text-muted-foreground">
                  Tu dinero protegido en cuenta escrow hasta que recibas el vehículo conforme.
                </p>
              </CardContent>
            </Card>

            {/* Trust Card 3 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Seguro CMR Completo</h3>
                <p className="text-sm text-muted-foreground">
                  Cobertura ICC(A) + SRCC durante todo el transporte internacional.
                </p>
              </CardContent>
            </Card>

            {/* Trust Card 4 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">VERI*FACTU Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  Cumplimiento total con normativa fiscal española y trazabilidad completa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Proceso Simple, Resultados Garantizados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8 pasos claros desde tu consulta hasta la entrega en España
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Consulta", icon: Clock },
              { step: "2", title: "Búsqueda", icon: TrendingDown },
              { step: "3", title: "Inspección", icon: Shield },
              { step: "4", title: "Entrega", icon: CheckCircle2 },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <item.icon className="h-8 w-8 text-muted-foreground mx-auto" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/como-funciona">
                Ver Proceso Completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Calculator Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-secondary/20">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <Calculator className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h2 className="font-serif text-3xl font-bold mb-2">Calcula Tu Ahorro Real</h2>
                  <p className="text-muted-foreground">
                    Descubre cuánto puedes ahorrar importando desde Alemania vs. comprar en España
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Precio en Alemania (€)</label>
                      <input
                        type="number"
                        placeholder="35000"
                        className="w-full px-4 py-2 border border-input rounded-md"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Precio en España (€)</label>
                      <input
                        type="number"
                        placeholder="42000"
                        className="w-full px-4 py-2 border border-input rounded-md"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground mb-1">Ahorro Estimado</div>
                    <div className="text-3xl font-bold text-secondary">€5,200</div>
                    <div className="text-xs text-muted-foreground mt-1">Incluye todos los costes de importación</div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Link href="/calculadoras">
                    Usar Calculadora Completa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof / Case Studies Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Casos Reales, Ahorros Reales</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vehículos premium importados con éxito para nuestros clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                model: "BMW iX xDrive50",
                year: "2023",
                savings: "€7,200",
                de: "€68,500",
                es: "€75,700",
              },
              {
                model: "Mercedes EQE 350+",
                year: "2023",
                savings: "€6,800",
                de: "€62,000",
                es: "€68,800",
              },
              {
                model: "Audi e-tron GT",
                year: "2022",
                savings: "€8,500",
                de: "€89,000",
                es: "€97,500",
              },
            ].map((car, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={`/.jpg?height=200&width=350&query=${car.model} luxury electric vehicle`}
                      alt={car.model}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{car.model}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{car.year}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Precio DE:</span>
                      <span className="font-medium">{car.de}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Precio ES:</span>
                      <span className="font-medium">{car.es}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="font-semibold">Ahorro:</span>
                      <span className="font-bold text-secondary text-lg">{car.savings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/casos-de-exito">
                Ver Más Casos de Éxito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">¿Listo para Importar tu Próximo Vehículo?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Recibe una auditoría gratuita en 24 horas. Sin compromiso, sin costes ocultos.
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
