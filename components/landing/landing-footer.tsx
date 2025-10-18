import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function LandingFooter() {
  return (
    <footer className="bg-[#0a2463] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AutoBridge</h3>
            <p className="text-white/70 text-sm">
              Importación profesional de vehículos desde Alemania a España. Transparencia total, protección legal
              completa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <Link href="/casos-de-exito" className="hover:text-white transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/garantias" className="hover:text-white transition-colors">
                  Garantías
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@autobridge.es</li>
              <li>+34 XXX XXX XXX</li>
              <li>L-V: 9:00-18:00</li>
              <li>S: 10:00-14:00</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>© 2025 AutoBridge. Todos los derechos reservados. | VERI*FACTU Compliant</p>
        </div>
      </div>
    </footer>
  )
}
