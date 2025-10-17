import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="font-serif text-2xl font-bold mb-4">TT-Core</div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Importación premium de vehículos desde Alemania con transparencia total.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/como-funciona"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/calculadoras"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Calculadoras
                </Link>
              </li>
              <li>
                <Link
                  href="/casos-de-exito"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/legal-feature"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Legal-as-a-Feature
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Recibe guías, consejos y ofertas exclusivas sobre importación de vehículos.
            </p>
            <NewsletterForm />
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-2">Contacto</h4>
              <ul className="space-y-1 text-sm text-primary-foreground/80">
                <li>info@tt-core.es</li>
                <li>+34 XXX XXX XXX</li>
                <li>L-V 9:00-18:00</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} TT-Core. Todos los derechos reservados. | VERI*FACTU Compliant</p>
        </div>
      </div>
    </footer>
  )
}
