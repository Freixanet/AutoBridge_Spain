import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { TrendingDown, Zap, Shield, Globe, DollarSign, Gauge, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Por qué Importar Coches desde Alemania | AutoBridge",
  description:
    "Descubre por qué importar vehículos desde Alemania es la mejor opción. Precios 20-30% más bajos, mejor selección, vehículos certificados y proceso seguro con AutoBridge.",
  keywords: [
    "por qué importar coches alemania",
    "ventajas importación alemania",
    "precios coches alemania",
    "mercado automovilístico alemania",
    "coches certificados alemania",
  ],
}

export default function WhyImportPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/premium-german-luxury-car-on-autobahn-dramatic-lig.jpg"
            alt="German automotive market"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 text-balance leading-tight">
              Por qué Alemania es el Mejor Mercado para Importar Coches
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Descubre las razones por las que miles de españoles eligen importar desde Alemania y cómo AutoBridge hace
              que el proceso sea seguro, transparente y rentable.
            </p>
          </div>
        </div>
      </section>

      {/* Key Reasons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">5 Razones Clave para Importar desde Alemania</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              El mercado alemán ofrece ventajas únicas que no encontrarás en España
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Reason 1 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Precios 20-30% Más Bajos</h3>
                <p className="text-muted-foreground mb-4">
                  El mercado alemán es más competitivo. Un BMW X5 que cuesta €75.000 en España se encuentra por €55.000
                  en Alemania. Después de costes de importación, ahorras €15.000-€20.000.
                </p>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium">Ejemplo real:</p>
                  <p className="text-sm text-muted-foreground">
                    Mercedes C-Class 2022: €42.000 DE vs €52.000 ES = €10.000 ahorro
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reason 2 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Mayor Selección de Vehículos</h3>
                <p className="text-muted-foreground mb-4">
                  Alemania tiene el mercado de coches usados más grande de Europa. Acceso a millones de vehículos
                  certificados, incluyendo modelos raros y ediciones limitadas.
                </p>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium">Disponibilidad:</p>
                  <p className="text-sm text-muted-foreground">
                    Más de 2 millones de coches usados en venta en Alemania
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reason 3 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Vehículos Certificados y Verificados</h3>
                <p className="text-muted-foreground mb-4">
                  Los coches alemanes están sujetos a inspecciones TÜV/DEKRA obligatorias cada 2 años. Garantiza que el
                  vehículo está en buen estado mecánico y cumple normativas de seguridad.
                </p>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium">Certificación:</p>
                  <p className="text-sm text-muted-foreground">Todos los coches tienen historial TÜV verificable</p>
                </div>
              </CardContent>
            </Card>

            {/* Reason 4 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Gauge className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Mejor Mantenimiento y Historial</h3>
                <p className="text-muted-foreground mb-4">
                  Los propietarios alemanes mantienen sus vehículos meticulosamente. Acceso a registros de servicio
                  completos (Werkstatthistorie) que demuestran cada reparación y mantenimiento.
                </p>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium">Transparencia:</p>
                  <p className="text-sm text-muted-foreground">Historial de servicio verificable en cada vehículo</p>
                </div>
              </CardContent>
            </Card>

            {/* Reason 5 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Liderazgo en Vehículos Eléctricos</h3>
                <p className="text-muted-foreground mb-4">
                  Alemania es líder en tecnología EV. Acceso a los últimos modelos eléctricos (Tesla, BMW i, Mercedes
                  EQ) con mejor precio que en España.
                </p>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium">Ejemplo EV:</p>
                  <p className="text-sm text-muted-foreground">
                    Tesla Model 3: €35.000 DE vs €42.000 ES = €7.000 ahorro
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reason 6 */}
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingDown className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Depreciación Más Lenta</h3>
                <p className="text-muted-foreground mb-4">
                  Los coches alemanes mantienen mejor valor de reventa. Comprar a precio bajo en Alemania significa
                  mejor rentabilidad si decides vender después.
                </p>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-sm font-medium">Valor:</p>
                  <p className="text-sm text-muted-foreground">Mejor retención de valor en el mercado español</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Comparativa Real: Alemania vs España</h2>
            <p className="text-lg text-muted-foreground">Precios reales de mercado (2024)</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary">
                  <th className="text-left py-4 px-4 font-semibold">Modelo</th>
                  <th className="text-right py-4 px-4 font-semibold">Precio Alemania</th>
                  <th className="text-right py-4 px-4 font-semibold">Precio España</th>
                  <th className="text-right py-4 px-4 font-semibold text-secondary">Ahorro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "BMW 320i 2022", de: "€28.500", es: "€35.200", savings: "€6.700" },
                  { model: "Mercedes C-Class 2022", de: "€42.000", es: "€52.000", savings: "€10.000" },
                  { model: "Audi A4 2023", de: "€38.000", es: "€47.500", savings: "€9.500" },
                  { model: "Tesla Model 3 2023", de: "€35.000", es: "€42.000", savings: "€7.000" },
                  { model: "BMW iX xDrive50 2023", de: "€68.500", es: "€85.000", savings: "€16.500" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-secondary/5 transition-colors">
                    <td className="py-4 px-4 font-medium">{row.model}</td>
                    <td className="text-right py-4 px-4">{row.de}</td>
                    <td className="text-right py-4 px-4">{row.es}</td>
                    <td className="text-right py-4 px-4 font-bold text-secondary">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-secondary/10 rounded-lg max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground">
              <strong>Nota:</strong> Los precios incluyen costes de importación (transporte, inspección, documentación).
              Ahorro neto después de €2.200 honorarios de AutoBridge.
            </p>
          </div>
        </div>
      </section>

      {/* Why AutoBridge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">¿Por qué Importar con AutoBridge?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aunque importar desde Alemania es ventajoso, hacerlo solo conlleva riesgos. AutoBridge elimina esos
              riesgos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Riesgo: Fraude y Estafas",
                solution: "Inspecciones DEKRA independientes verifican el estado real del vehículo antes de tu compra.",
              },
              {
                title: "Riesgo: Pérdida de Dinero",
                solution: "Pagos en garantía (escrow) protegen tu dinero hasta que recibas el vehículo conforme.",
              },
              {
                title: "Riesgo: Problemas Legales",
                solution: "Documentación completa, VERI*FACTU compliance y asesoramiento legal incluido.",
              },
              {
                title: "Riesgo: Daños en Transporte",
                solution: "Seguro CMR completo (ICC(A) + SRCC) cubre cualquier daño durante el transporte.",
              },
              {
                title: "Riesgo: Falta de Transparencia",
                solution: "Desglose completo de costes. €2.200 honorarios fijos, sin sorpresas ocultas.",
              },
              {
                title: "Riesgo: Proceso Complicado",
                solution: "Proceso sistematizado de 8 pasos. Entrega en 12-18 días con seguimiento completo.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ahora que Sabes por qué Importar, ¿Cuánto Puedes Ahorrar?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Usa nuestra calculadora para descubrir tu ahorro potencial. Consulta gratuita en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/calculadoras">
                Calcular Mi Ahorro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contacto">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
