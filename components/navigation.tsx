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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="font-serif text-2xl font-bold text-primary">TT-Core</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
              href="/casos-de-exito"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Casos de Éxito
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link
              href="/legal-feature"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Legal
            </Link>
            <Link href="/empresa" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Empresa
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contacto">Auditoría 24h</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
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
                href="/casos-de-exito"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Casos de Éxito
              </Link>
              <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link
                href="/legal-feature"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Legal
              </Link>
              <Link
                href="/empresa"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Empresa
              </Link>
              <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contacto">Auditoría 24h</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
