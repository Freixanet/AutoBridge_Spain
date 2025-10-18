import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"
import { HomePageSchema, ServiceSchema, FAQSchema } from "@/components/schema-markup"

export const metadata = {
  title: "Importación Premium de Coches Alemanes | AutoBridge - €2.200 Honorarios Fijos (V1)",
  description:
    "Versión anterior del website de AutoBridge - Broker especializado en importación de vehículos premium y eléctricos desde Alemania a España.",
}

export default function V1HomePage() {
  return (
    <div className="min-h-screen">
      <HomePageSchema />
      <ServiceSchema />
      <FAQSchema />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              €2.200 Honorarios Fijos • Sin Sorpresas • Transparencia Total
            </Badge>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Ahorra importando tu coche desde Alemania
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Inspecciones DEKRA independientes, pagos en garantía, seguro CMR completo y asesoramiento legal incluido.
              Desde €5.000 a €8.000 de ahorro real en vehículos premium y eléctricos.
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
                  Consulta Gratuita 24h
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

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
                <div className="text-3xl font-bold text-secondary">€2.2K</div>
                <div className="text-sm text-muted-foreground">Honorarios Fijos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
