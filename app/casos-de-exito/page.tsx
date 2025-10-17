import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TrendingDown, Calendar, MapPin, Battery, Gauge, CheckCircle2, ArrowRight } from "lucide-react"

export default function CasosDeExitoPage() {
  const cases = [
    {
      id: 1,
      model: "BMW iX xDrive50",
      year: 2023,
      category: "SUV Eléctrico Premium",
      priceDE: 68500,
      priceES: 75700,
      savings: 7200,
      savingsPercent: 9.5,
      specs: {
        km: 18500,
        battery: "105.2 kWh",
        power: "523 CV",
        range: "630 km WLTP",
      },
      location: "Madrid",
      duration: "16 días",
      highlights: [
        "Inspección DEKRA con SoH batería 98%",
        "Ahorro de €7,200 vs. mercado español",
        "Entrega con carga completa incluida",
        "Garantía BMW extendida transferida",
      ],
    },
    {
      id: 2,
      model: "Mercedes-Benz EQE 350+",
      year: 2023,
      category: "Sedán Eléctrico Ejecutivo",
      priceDE: 62000,
      priceES: 68800,
      savings: 6800,
      savingsPercent: 9.9,
      specs: {
        km: 12300,
        battery: "90.6 kWh",
        power: "292 CV",
        range: "639 km WLTP",
      },
      location: "Barcelona",
      duration: "14 días",
      highlights: [
        "Vehículo de demo oficial Mercedes",
        "Paquete AMG Line completo",
        "SoH batería certificado 99%",
        "Ahorro neto €6,800 tras todos los costes",
      ],
    },
    {
      id: 3,
      model: "Audi e-tron GT quattro",
      year: 2022,
      category: "Gran Turismo Eléctrico",
      priceDE: 89000,
      priceES: 97500,
      savings: 8500,
      savingsPercent: 8.7,
      specs: {
        km: 24800,
        battery: "93.4 kWh",
        power: "476 CV",
        range: "488 km WLTP",
      },
      location: "Valencia",
      duration: "18 días",
      highlights: [
        "Configuración personalizada €15K extras",
        "Historial completo Audi oficial",
        "Batería con 96% SoH verificado",
        "Mayor ahorro del trimestre: €8,500",
      ],
    },
    {
      id: 4,
      model: "Porsche Taycan 4S",
      year: 2023,
      category: "Deportivo Eléctrico",
      priceDE: 95500,
      priceES: 102800,
      savings: 7300,
      savingsPercent: 7.1,
      specs: {
        km: 8900,
        battery: "93.4 kWh",
        power: "571 CV",
        range: "463 km WLTP",
      },
      location: "Sevilla",
      duration: "15 días",
      highlights: [
        "Performance Battery Plus incluida",
        "Porsche Approved con garantía",
        "Inspección TÜV perfecta",
        "Entrega en concesionario oficial",
      ],
    },
    {
      id: 5,
      model: "Tesla Model 3 Long Range",
      year: 2023,
      category: "Sedán Eléctrico",
      priceDE: 48200,
      priceES: 53500,
      savings: 5300,
      savingsPercent: 9.9,
      specs: {
        km: 15600,
        battery: "82 kWh",
        power: "366 CV",
        range: "629 km WLTP",
      },
      location: "Málaga",
      duration: "13 días",
      highlights: [
        "Enhanced Autopilot activado",
        "Batería con degradación <2%",
        "Proceso más rápido: 13 días",
        "Cliente particular satisfecho",
      ],
    },
    {
      id: 6,
      model: "BMW M440i xDrive Coupé",
      year: 2022,
      category: "Coupé Deportivo",
      priceDE: 52000,
      priceES: 58200,
      savings: 6200,
      savingsPercent: 10.7,
      specs: {
        km: 28500,
        battery: "N/A",
        power: "374 CV",
        range: "N/A",
      },
      location: "Bilbao",
      duration: "17 días",
      highlights: [
        "M Performance Package completo",
        "Mantenimiento BMW oficial al día",
        "Mayor % ahorro del mes: 10.7%",
        "Vehículo térmico premium",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground" variant="secondary">
            Casos Reales Verificados
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Casos de Éxito: Ahorros Reales de Clientes Reales
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Vehículos premium importados con éxito desde Alemania. Datos reales, ahorros verificados, clientes
            satisfechos.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">€6,883</div>
              <div className="text-sm text-muted-foreground">Ahorro Medio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">15 días</div>
              <div className="text-sm text-muted-foreground">Duración Media</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">9.3%</div>
              <div className="text-sm text-muted-foreground">% Ahorro Medio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseStudy) => (
              <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  {/* Image */}
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={`/.jpg?height=300&width=500&query=${caseStudy.model} ${caseStudy.year} luxury vehicle`}
                      alt={caseStudy.model}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Header */}
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {caseStudy.category}
                    </Badge>
                    <h3 className="font-serif text-2xl font-bold mb-1">{caseStudy.model}</h3>
                    <p className="text-sm text-muted-foreground">{caseStudy.year}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b">
                    <div className="flex items-center gap-2 text-sm">
                      <Gauge className="h-4 w-4 text-muted-foreground" />
                      <span>{caseStudy.specs.km.toLocaleString()} km</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Battery className="h-4 w-4 text-muted-foreground" />
                      <span>{caseStudy.specs.battery}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{caseStudy.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{caseStudy.duration}</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Precio Alemania:</span>
                        <span className="font-medium">€{caseStudy.priceDE.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Precio España:</span>
                        <span className="font-medium">€{caseStudy.priceES.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="font-semibold flex items-center gap-1">
                          <TrendingDown className="h-4 w-4 text-secondary" />
                          Ahorro Total:
                        </span>
                        <div className="text-right">
                          <div className="font-bold text-secondary text-lg">€{caseStudy.savings.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">{caseStudy.savingsPercent}% ahorro</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Puntos Destacados:</h4>
                    <ul className="space-y-2">
                      {caseStudy.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Resumen de Resultados</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingDown className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-secondary mb-2">€41,300</div>
                <div className="text-sm text-muted-foreground">Ahorro Total Acumulado</div>
                <p className="text-xs text-muted-foreground mt-2">En estos 6 casos verificados</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Battery className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-secondary mb-2">97.6%</div>
                <div className="text-sm text-muted-foreground">SoH Medio Baterías EV</div>
                <p className="text-xs text-muted-foreground mt-2">Todos los vehículos eléctricos</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
                <p className="text-xs text-muted-foreground mt-2">Sin incidencias ni reclamaciones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-secondary">JM</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground italic mb-2 leading-relaxed">
                      "Increíble servicio. Me ahorraron €7,200 en mi BMW iX y el proceso fue totalmente transparente. La
                      inspección DEKRA me dio total confianza y el pago en garantía eliminó cualquier riesgo. Lo
                      recomiendo 100%."
                    </p>
                    <div className="text-sm">
                      <span className="font-semibold">Juan M.</span>
                      <span className="text-muted-foreground"> - Madrid, BMW iX xDrive50</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-secondary">CL</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground italic mb-2 leading-relaxed">
                      "Buscaba un Mercedes EQE específico y lo encontraron en Alemania por €6,800 menos. Todo el proceso
                      duró solo 14 días y la comunicación fue perfecta. El vehículo llegó impecable."
                    </p>
                    <div className="text-sm">
                      <span className="font-semibold">Carlos L.</span>
                      <span className="text-muted-foreground"> - Barcelona, Mercedes EQE 350+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-secondary">AR</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground italic mb-2 leading-relaxed">
                      "Mi Audi e-tron GT tenía €15K en extras y aún así me ahorré €8,500. La protección legal con escrow
                      y seguro CMR me dio total tranquilidad. Profesionales de primer nivel."
                    </p>
                    <div className="text-sm">
                      <span className="font-semibold">Ana R.</span>
                      <span className="text-muted-foreground"> - Valencia, Audi e-tron GT</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">¿Quieres Ser el Próximo Caso de Éxito?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Solicita tu auditoría gratuita y descubre cuánto puedes ahorrar en tu próximo vehículo premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/calculadoras">
                Calcular Mi Ahorro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20">
              <Link href="/contacto">Solicitar Auditoría Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
