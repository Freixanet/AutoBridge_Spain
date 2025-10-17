"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <svg viewBox="0 0 300 100" className="h-12 w-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>{`
                  .logo-text {
                    font-family: 'Playfair Display', serif;
                    font-size: 52px;
                    font-weight: 700;
                    fill: currentColor;
                    letter-spacing: 0.5px;
                  }
                `}</style>
              </defs>
              <text x="20" y="65" className="logo-text">
                AutoBridge
              </text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/por-que-importar"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Por qué Importar
            </Link>
            <Link
              href="/como-funciona"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Cómo Funciona
            </Link>
            <Link
              href="/calculadoras"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Calculadoras
            </Link>
            <Link
              href="/garantias"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Garantías
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
            >
              <Link href="/contacto">Consulta Gratuita</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/por-que-importar"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Por qué Importar
              </Link>
              <Link
                href="/como-funciona"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Cómo Funciona
              </Link>
              <Link
                href="/calculadoras"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Calculadoras
              </Link>
              <Link
                href="/garantias"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Garantías
              </Link>
              <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contacto">Consulta Gratuita</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
