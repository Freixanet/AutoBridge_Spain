import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | Guía de Importación de Coches Alemanes | AutoBridge",
  description:
    "Guías completas, análisis de costes y consejos sobre importación de vehículos premium desde Alemania a España. Aprende sobre inspecciones, seguros, documentación y ahorros reales.",
  keywords: [
    "guía importación coches alemania",
    "blog importación vehículos",
    "costes importación",
    "inspección DEKRA",
    "seguro CMR",
  ],
}

const blogPosts = [
  {
    slug: "guia-completa-importar-coche-alemania-espana",
    title: "Guía Completa: Cómo Importar un Coche desde Alemania a España en 2025",
    excerpt:
      "Proceso paso a paso, costes reales, documentación necesaria, plazos y mejores prácticas. Todo lo que necesitas saber para importar tu vehículo premium con éxito.",
    category: "Guías",
    date: "2025-01-15",
    readTime: "12 min",
    image: "/blog/guia-importacion.jpg",
  },
  {
    slug: "ahorro-real-importar-vehiculos-electricos",
    title: "¿Cuánto Puedes Ahorrar Importando un Vehículo Eléctrico desde Alemania?",
    excerpt:
      "Análisis detallado con casos reales: BMW iX xDrive50 (€7.200 ahorro), Mercedes EQE 350+ (€6.800), Audi e-tron GT (€8.500). Descubre el ahorro real después de todos los costes.",
    category: "Análisis",
    date: "2025-01-10",
    readTime: "8 min",
    image: "/blog/ahorro-evs.jpg",
  },
  {
    slug: "inspeccion-independiente-dekra-tuv-diferencias",
    title: "DEKRA vs TÜV vs GTÜ: ¿Qué Inspección Independiente Elegir?",
    excerpt:
      "Comparativa completa de las tres principales empresas de inspección en Alemania. Costes, cobertura, qué se inspecciona y recomendaciones según tu tipo de vehículo.",
    category: "Legal",
    date: "2025-01-05",
    readTime: "10 min",
    image: "/blog/inspecciones.jpg",
  },
  {
    slug: "mejores-marcas-modelos-importar-alemania",
    title: "Top 10 Marcas y Modelos para Importar desde Alemania en 2025",
    excerpt:
      "Las marcas y modelos con mejor relación calidad-precio en el mercado alemán. BMW, Mercedes, Audi, Porsche, Tesla y más. Análisis de disponibilidad y precios.",
    category: "Recomendaciones",
    date: "2024-12-28",
    readTime: "15 min",
    image: "/blog/top-marcas.jpg",
  },
  {
    slug: "seguro-cmr-transporte-internacional-coches",
    title: "Seguro CMR: Protección Total Durante el Transporte Internacional",
    excerpt:
      "Qué cubre el seguro CMR, diferencias entre ICC(A) y SRCC, cómo funciona la cobertura y por qué es fundamental para proteger tu inversión durante el transporte.",
    category: "Legal",
    date: "2024-12-20",
    readTime: "7 min",
    image: "/blog/seguro-cmr.jpg",
  },
  {
    slug: "matriculacion-itv-importacion-espana-guia",
    title: "Matriculación e ITV de Importación: Guía Paso a Paso",
    excerpt:
      "Todo sobre el proceso de matriculación en la DGT, ITV de importación, documentación necesaria, plazos y costes. Proceso simplificado sin complicaciones.",
    category: "Guías",
    date: "2024-12-15",
    readTime: "11 min",
    image: "/blog/matriculacion.jpg",
  },
  {
    slug: "costes-reales-importacion-desglose-completo",
    title: "Costes Reales de Importación: Desglose Completo de Todos los Gastos",
    excerpt:
      "Transporte, inspección, seguros, documentación, impuestos. Desglose detallado de cada coste. Cómo AutoBridge mantiene los costes transparentes con €2.200 honorarios fijos.",
    category: "Análisis",
    date: "2024-12-10",
    readTime: "9 min",
    image: "/blog/costes-desglose.jpg",
  },
  {
    slug: "veri-factu-compliance-importacion-coches",
    title: "VERI*FACTU: Cumplimiento Fiscal en Importación de Coches",
    excerpt:
      "Qué es VERI*FACTU, por qué es importante, cómo afecta a tu importación y cómo AutoBridge garantiza el cumplimiento total con la normativa fiscal española.",
    category: "Legal",
    date: "2024-12-05",
    readTime: "8 min",
    image: "/blog/veri-factu.jpg",
  },
  {
    slug: "errores-comunes-importar-coche-alemania",
    title: "10 Errores Comunes al Importar un Coche desde Alemania (y Cómo Evitarlos)",
    excerpt:
      "Errores que cometen los importadores novatos: no inspeccionar, no asegurar, documentación incompleta, negociar mal. Cómo evitar cada uno.",
    category: "Consejos",
    date: "2024-11-30",
    readTime: "10 min",
    image: "/blog/errores-comunes.jpg",
  },
  {
    slug: "mercado-coches-alemania-tendencias-2025",
    title: "Mercado de Coches Alemanes en 2025: Tendencias y Oportunidades",
    excerpt:
      "Análisis del mercado actual: precios, disponibilidad, tendencias en vehículos eléctricos, demanda de marcas premium. Mejor momento para importar.",
    category: "Análisis",
    date: "2024-11-25",
    readTime: "12 min",
    image: "/blog/mercado-tendencias.jpg",
  },
  {
    slug: "pago-garantia-escrow-como-funciona",
    title: "Pago en Garantía (Escrow): Cómo Funciona y Por Qué es Importante",
    excerpt:
      "Explicación completa del sistema de escrow. Cómo protege tu dinero, cuándo se libera, qué pasa si hay problemas y por qué es fundamental en importaciones.",
    category: "Legal",
    date: "2024-11-20",
    readTime: "7 min",
    image: "/blog/escrow.jpg",
  },
  {
    slug: "financiacion-importacion-coches-opciones",
    title: "Opciones de Financiación para Importar tu Coche desde Alemania",
    excerpt:
      "Cómo financiar tu importación: créditos bancarios, leasing, financiación de concesionarios. Ventajas y desventajas de cada opción.",
    category: "Consejos",
    date: "2024-11-15",
    readTime: "9 min",
    image: "/blog/financiacion.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Blog de Importación</h1>
            <p className="text-lg text-muted-foreground">
              Guías completas, análisis de costes y consejos sobre importación de vehículos premium desde Alemania.
              Aprende todo sobre inspecciones, seguros, documentación y ahorros reales.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={`${post.image}?height=200&width=400&query=${post.title}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                      <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Leer más
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
