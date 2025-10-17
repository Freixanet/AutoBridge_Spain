import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | Guía de Importación de Coches Alemanes | TT-Core",
  description:
    "Consejos, guías y noticias sobre importación de vehículos premium desde Alemania. Aprende todo sobre el proceso, costes, y mejores prácticas.",
}

const blogPosts = [
  {
    slug: "guia-completa-importar-coche-alemania-espana",
    title: "Guía Completa: Cómo Importar un Coche desde Alemania a España en 2025",
    excerpt:
      "Todo lo que necesitas saber sobre el proceso de importación, costes, documentación y plazos para traer tu vehículo premium desde Alemania.",
    category: "Guías",
    date: "2025-01-15",
    readTime: "12 min",
    image: "/blog/guia-importacion.jpg",
  },
  {
    slug: "ahorro-real-importar-vehiculos-electricos",
    title: "¿Cuánto Puedes Ahorrar Importando un Vehículo Eléctrico desde Alemania?",
    excerpt:
      "Análisis detallado de casos reales: BMW iX, Mercedes EQE, Audi e-tron GT. Descubre el ahorro real después de todos los costes.",
    category: "Análisis",
    date: "2025-01-10",
    readTime: "8 min",
    image: "/blog/ahorro-evs.jpg",
  },
  {
    slug: "inspeccion-independiente-dekra-tuv-diferencias",
    title: "DEKRA vs TÜV vs GTÜ: ¿Qué Inspección Independiente Elegir?",
    excerpt:
      "Comparativa completa de las tres principales empresas de inspección en Alemania. Costes, cobertura y qué esperar de cada una.",
    category: "Legal",
    date: "2025-01-05",
    readTime: "10 min",
    image: "/blog/inspecciones.jpg",
  },
  {
    slug: "mejores-marcas-modelos-importar-alemania",
    title: "Top 10 Marcas y Modelos para Importar desde Alemania en 2025",
    excerpt:
      "Las marcas y modelos con mejor relación calidad-precio en el mercado alemán. Desde BMW y Mercedes hasta Porsche y Tesla.",
    category: "Recomendaciones",
    date: "2024-12-28",
    readTime: "15 min",
    image: "/blog/top-marcas.jpg",
  },
  {
    slug: "seguro-cmr-transporte-internacional-coches",
    title: "Seguro CMR: Protección Total Durante el Transporte Internacional",
    excerpt:
      "Qué cubre el seguro CMR, diferencias entre ICC(A) y SRCC, y por qué es fundamental para proteger tu inversión durante el transporte.",
    category: "Legal",
    date: "2024-12-20",
    readTime: "7 min",
    image: "/blog/seguro-cmr.jpg",
  },
  {
    slug: "matriculacion-itv-importacion-espana-guia",
    title: "Matriculación e ITV de Importación: Guía Paso a Paso",
    excerpt:
      "Todo sobre el proceso de matriculación en la DGT, ITV de importación, documentación necesaria y plazos. Sin complicaciones.",
    category: "Guías",
    date: "2024-12-15",
    readTime: "11 min",
    image: "/blog/matriculacion.jpg",
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
              Guías, consejos y análisis sobre importación de vehículos premium desde Alemania
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
