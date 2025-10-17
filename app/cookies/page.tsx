import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Política de Cookies | AutoBridge",
  description: "Información sobre el uso de cookies en AutoBridge",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl font-bold mb-6">Política de Cookies</h1>
          <p className="text-muted-foreground mb-8">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>¿Qué son las cookies?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
                  web. Se utilizan para mejorar tu experiencia de navegación, recordar tus preferencias y analizar el
                  uso del sitio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tipos de Cookies que Utilizamos</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h3 className="font-semibold mt-4 mb-2">1. Cookies Técnicas (Necesarias)</h3>
                <p>
                  Estas cookies son esenciales para el funcionamiento del sitio web. No pueden ser desactivadas en
                  nuestros sistemas.
                </p>
                <ul>
                  <li>Cookies de sesión para mantener tu navegación</li>
                  <li>Cookies de seguridad para proteger contra ataques</li>
                  <li>Cookies de preferencias de idioma</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-2">2. Cookies Analíticas</h3>
                <p>
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, recopilando información
                  de forma anónima.
                </p>
                <ul>
                  <li>
                    <strong>Google Analytics:</strong> Para análisis de tráfico y comportamiento
                  </li>
                  <li>
                    <strong>Vercel Analytics:</strong> Para métricas de rendimiento
                  </li>
                </ul>

                <h3 className="font-semibold mt-4 mb-2">3. Cookies de Marketing (Opcional)</h3>
                <p>
                  Se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas. Solo se
                  activan con tu consentimiento explícito.
                </p>
                <ul>
                  <li>Cookies de remarketing</li>
                  <li>Cookies de seguimiento de conversiones</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies de Terceros</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Utilizamos servicios de terceros que pueden establecer sus propias cookies:</p>
                <ul>
                  <li>
                    <strong>Google Analytics:</strong> Para análisis de tráfico web
                  </li>
                  <li>
                    <strong>Google Tag Manager:</strong> Para gestión de etiquetas de marketing
                  </li>
                  <li>
                    <strong>Vercel:</strong> Para hosting y análisis de rendimiento
                  </li>
                </ul>
                <p>
                  Estos terceros tienen sus propias políticas de privacidad y cookies que puedes consultar en sus
                  respectivos sitios web.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gestión de Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Puedes controlar y gestionar las cookies de varias formas:</p>

                <h3 className="font-semibold mt-4 mb-2">Panel de Consentimiento</h3>
                <p>
                  Al visitar nuestro sitio por primera vez, verás un banner de cookies donde puedes aceptar o rechazar
                  cookies no esenciales.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Configuración del Navegador</h3>
                <p>Puedes configurar tu navegador para bloquear o eliminar cookies:</p>
                <ul>
                  <li>
                    <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                  </li>
                  <li>
                    <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferencias → Privacidad → Cookies
                  </li>
                  <li>
                    <strong>Edge:</strong> Configuración → Privacidad → Cookies
                  </li>
                </ul>

                <p className="text-sm text-muted-foreground mt-4">
                  Nota: Bloquear todas las cookies puede afectar la funcionalidad del sitio web.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Duración de las Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <ul>
                  <li>
                    <strong>Cookies de sesión:</strong> Se eliminan cuando cierras el navegador
                  </li>
                  <li>
                    <strong>Cookies persistentes:</strong> Permanecen hasta 24 meses o hasta que las elimines
                    manualmente
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actualizaciones de esta Política</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Podemos actualizar esta política de cookies periódicamente. Te notificaremos de cambios significativos
                  mediante un aviso en nuestro sitio web.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contacto</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Si tienes preguntas sobre nuestra política de cookies, contacta con nosotros:</p>
                <p>
                  <strong>Email:</strong> info@autobridge.es
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
