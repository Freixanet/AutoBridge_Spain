import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  MessageSquare,
  Search,
  FileCheck,
  Euro,
  Truck,
  ClipboardCheck,
  Key,
  ThumbsUp,
  ArrowRight,
  Clock,
  Shield,
  CheckCircle2,
} from "lucide-react"

export default function ComoFuncionaPage() {
  const steps = [
    {
      number: 1,
      title: "Consulta Inicial",
      icon: MessageSquare,
      duration: "24h",
      description: "Nos cuentas qué vehículo buscas y recibimos tu auditoría gratuita en menos de 24 horas.",
      details: [
        "Análisis de mercado DE vs ES",
        "Estimación de ahorro real",
        "Viabilidad de importación",
        "Presupuesto detallado sin compromiso",
      ],
    },
    {
      number: 2,
      title: "Búsqueda Activa",
      icon: Search,
      duration: "3-7 días",
      description: "Localizamos el vehículo perfecto en el mercado alemán según tus criterios.",
      details: [
        "Acceso a Mobile.de, AutoScout24 y dealers premium",
        "Verificación de historial (Carfax, DAT)",
        "Negociación directa con vendedor",
        "Pre-selección de 2-3 opciones para tu aprobación",
      ],
    },
    {
      number: 3,
      title: "Inspección Independiente",
      icon: FileCheck,
      duration: "2-3 días",
      description: "DEKRA, TÜV o GTÜ inspeccionan el vehículo antes de cualquier compromiso.",
      details: [
        "Inspección técnica completa (150+ puntos)",
        "Verificación de kilometraje real",
        "Estado de batería (vehículos eléctricos)",
        "Informe fotográfico detallado",
      ],
    },
    {
      number: 4,
      title: "Pago Seguro",
      icon: Euro,
      duration: "1 día",
      description: "Tu dinero protegido en cuenta escrow hasta la entrega conforme.",
      details: [
        "Depósito en cuenta de garantía",
        "Pago al vendedor solo tras inspección OK",
        "Protección total de tu inversión",
        "Factura VERI*FACTU compliant",
      ],
    },
    {
      number: 5,
      title: "Logística Internacional",
      icon: Truck,
      duration: "7-12 días",
      description: "Transporte asegurado desde Alemania hasta tu ubicación en España.",
      details: [
        "Seguro CMR con cobertura ICC(A) + SRCC",
        "Transportista certificado",
        "Tracking en tiempo real",
        "Protección contra daños en tránsito",
      ],
    },
    {
      number: 6,
      title: "Gestión Aduanera",
      icon: ClipboardCheck,
      duration: "2-3 días",
      description: "Nos encargamos de toda la documentación y trámites fiscales.",
      details: [
        "DUA (Documento Único Administrativo)",
        "Certificado de conformidad europeo",
        "Liquidación de IVA e impuestos",
        "Gestión con Hacienda y Tráfico",
      ],
    },
    {
      number: 7,
      title: "Matriculación",
      icon: Key,
      duration: "3-5 días",
      description: "Matriculamos el vehículo a tu nombre en la DGT.",
      details: [
        "Solicitud de matrícula española",
        "ITV de importación",
        "Emisión de permiso de circulación",
        "Placas y documentación definitiva",
      ],
    },
    {
      number: 8,
      title: "Entrega Final",
      icon: ThumbsUp,
      duration: "1 día",
      description: "Recibe tu vehículo en perfecto estado con toda la documentación.",
      details: [
        "Entrega a domicilio o en nuestras instalaciones",
        "Verificación final conjunta",
        "Entrega de llaves y documentación",
        "Soporte post-venta incluido",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Cómo Funciona el Proceso de Importación
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            8 pasos transparentes desde tu consulta hasta la entrega. Tiempo total estimado: 12-18 días laborables.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">12-18 días totales</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">100% protegido</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">Sin sorpresas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 hover:border-secondary/50 transition-colors">
                <CardContent className="pt-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-secondary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="font-serif text-2xl font-bold">{step.title}</h3>
                        <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                          {step.duration}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>

                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Línea de Tiempo Típica</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

              {/* Timeline Items */}
              <div className="space-y-8">
                <div className="relative flex items-center">
                  <div className="flex-1 md:text-right md:pr-12">
                    <div className="font-semibold">Día 1</div>
                    <div className="text-sm text-muted-foreground">Consulta + Auditoría</div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 border-4 border-background" />
                  <div className="flex-1 md:pl-12" />
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 md:text-right md:pr-12" />
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 border-4 border-background" />
                  <div className="flex-1 md:pl-12">
                    <div className="font-semibold">Días 2-7</div>
                    <div className="text-sm text-muted-foreground">Búsqueda + Inspección</div>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 md:text-right md:pr-12">
                    <div className="font-semibold">Día 8</div>
                    <div className="text-sm text-muted-foreground">Pago Seguro</div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 border-4 border-background" />
                  <div className="flex-1 md:pl-12" />
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 md:text-right md:pr-12" />
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 border-4 border-background" />
                  <div className="flex-1 md:pl-12">
                    <div className="font-semibold">Días 9-18</div>
                    <div className="text-sm text-muted-foreground">Transporte + Matriculación</div>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 md:text-right md:pr-12">
                    <div className="font-semibold">Día 18</div>
                    <div className="text-sm text-muted-foreground">Entrega Final</div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />
                  <div className="flex-1 md:pl-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">¿Listo para Empezar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicita tu auditoría gratuita y descubre cuánto puedes ahorrar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/calculadoras">
                Calcular Mi Ahorro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacto">Solicitar Auditoría Gratuita</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
