import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const blogPosts: Record<string, any> = {
  "guia-completa-importar-coche-alemania-espana": {
    title: "Guía Completa: Cómo Importar un Coche desde Alemania a España en 2025",
    excerpt:
      "Todo lo que necesitas saber sobre el proceso de importación, costes, documentación y plazos para traer tu vehículo premium desde Alemania.",
    category: "Guías",
    date: "2025-01-15",
    readTime: "12 min",
    author: "Equipo TT-Core",
    content: `
      <h2>Introducción</h2>
      <p>Importar un vehículo desde Alemania puede suponer un ahorro significativo, especialmente en vehículos premium y eléctricos. En esta guía completa, te explicamos paso a paso todo el proceso.</p>

      <h2>¿Por Qué Importar desde Alemania?</h2>
      <p>El mercado alemán ofrece vehículos premium a precios más competitivos que España por varias razones:</p>
      <ul>
        <li><strong>Mayor oferta:</strong> Alemania es el mayor mercado de coches de Europa</li>
        <li><strong>Depreciación más rápida:</strong> Los vehículos pierden valor más rápido en Alemania</li>
        <li><strong>Mejor mantenimiento:</strong> Cultura de mantenimiento preventivo muy arraigada</li>
        <li><strong>Historial verificable:</strong> Sistemas como CARFAX y DAT garantizan transparencia</li>
      </ul>

      <h2>El Proceso de Importación en 8 Pasos</h2>
      
      <h3>1. Consulta Inicial (1-2 días)</h3>
      <p>Nos cuentas qué vehículo buscas, tu presupuesto y preferencias. Realizamos una auditoría gratuita en 24h con:</p>
      <ul>
        <li>Análisis de mercado DE vs ES</li>
        <li>Estimación de ahorro real</li>
        <li>Desglose completo de costes</li>
        <li>Plazos estimados</li>
      </ul>

      <h3>2. Búsqueda Activa (2-5 días)</h3>
      <p>Localizamos el vehículo perfecto en plataformas alemanas (Mobile.de, AutoScout24) y verificamos:</p>
      <ul>
        <li>Historial completo del vehículo</li>
        <li>Número de propietarios</li>
        <li>Libro de mantenimiento</li>
        <li>Ausencia de daños graves</li>
      </ul>

      <h3>3. Inspección Independiente (2-3 días)</h3>
      <p>DEKRA, TÜV o GTÜ realizan una inspección de más de 150 puntos:</p>
      <ul>
        <li>Estado mecánico completo</li>
        <li>Carrocería y pintura</li>
        <li>Electrónica y sistemas</li>
        <li>Para EVs: Estado de batería (SoH)</li>
      </ul>

      <h3>4. Negociación y Pago Seguro (1-2 días)</h3>
      <p>Negociamos el mejor precio y gestionamos el pago en garantía (escrow) para proteger tu inversión.</p>

      <h3>5. Transporte Internacional (3-5 días)</h3>
      <p>Transporte asegurado con CMR desde Alemania hasta España con cobertura ICC(A) + SRCC.</p>

      <h3>6. Gestión Aduanera (1-2 días)</h3>
      <p>Nos encargamos de toda la documentación DUA y liquidación de impuestos (IVA, Impuesto de Matriculación).</p>

      <h3>7. Matriculación (2-3 días)</h3>
      <p>Matriculamos el vehículo a tu nombre en la DGT con ITV de importación incluida.</p>

      <h3>8. Entrega Final (1 día)</h3>
      <p>Recibes tu vehículo matriculado con toda la documentación en perfecto estado.</p>

      <h2>Costes Totales de Importación</h2>
      <p>Ejemplo para un vehículo de €40,000 en Alemania:</p>
      <ul>
        <li><strong>Precio vehículo:</strong> €40,000</li>
        <li><strong>Fee TT-Core (3%):</strong> €1,200</li>
        <li><strong>Transporte:</strong> €1,000</li>
        <li><strong>Inspección DEKRA:</strong> €250</li>
        <li><strong>Matriculación + ITV:</strong> €450</li>
        <li><strong>Seguro CMR:</strong> €150</li>
        <li><strong>Total:</strong> €43,050</li>
      </ul>
      <p>Si el mismo vehículo cuesta €50,000 en España, tu ahorro real es de <strong>€6,950</strong>.</p>

      <h2>Documentación Necesaria</h2>
      <ul>
        <li>DNI/NIE del comprador</li>
        <li>Certificado de empadronamiento</li>
        <li>Justificante de pago</li>
        <li>Factura de compra alemana</li>
        <li>COC (Certificado de Conformidad Europeo)</li>
        <li>Informe de inspección</li>
      </ul>

      <h2>Preguntas Frecuentes</h2>
      
      <h3>¿Cuánto tiempo tarda todo el proceso?</h3>
      <p>Entre 12-18 días laborables desde la consulta inicial hasta la entrega del vehículo matriculado.</p>

      <h3>¿Qué pasa si el vehículo tiene daños no declarados?</h3>
      <p>La inspección independiente detecta cualquier problema antes de la compra. Si aparecen daños ocultos, tu dinero está protegido en escrow.</p>

      <h3>¿Puedo importar cualquier vehículo?</h3>
      <p>Sí, siempre que tenga certificado COC europeo y cumpla con la normativa española (emisiones, homologación).</p>

      <h2>Conclusión</h2>
      <p>Importar un vehículo desde Alemania es un proceso seguro y rentable cuando trabajas con un broker profesional. El ahorro medio de €5,000-€8,000 compensa ampliamente los costes de importación.</p>

      <p><strong>¿Listo para empezar?</strong> Solicita tu auditoría gratuita en 24h y descubre cuánto puedes ahorrar.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post no encontrado",
    }
  }

  return {
    title: `${post.title} | Blog TT-Core`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          {/* Post Meta */}
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance">{post.title}</h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">{post.excerpt}</p>

          {/* Author */}
          <div className="flex items-center gap-3 pb-8 border-b border-border mb-12">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="font-semibold text-primary">TT</span>
            </div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-muted-foreground">Expertos en importación</div>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-foreground prose-p:leading-relaxed prose-ul:text-foreground prose-li:text-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <Card className="mt-16 bg-secondary/10 border-secondary/20">
            <CardContent className="pt-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">¿Listo para Importar tu Vehículo?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Solicita tu auditoría gratuita en 24h y descubre cuánto puedes ahorrar importando desde Alemania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/calculadoras">Calcular Mi Ahorro</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contacto">
                    Solicitar Auditoría
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  )
}
