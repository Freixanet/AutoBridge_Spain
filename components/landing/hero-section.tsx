"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Clock, Euro } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a2463] via-[#1a3a8a] to-[#0a2463]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-[#ff6b35] hover:bg-[#e55a2b] text-white border-none px-6 py-2 text-sm font-medium">
            <Shield className="h-4 w-4 mr-2" />
            Protección Legal Completa Incluida
          </Badge>

          {/* Main Headline */}
          <h1 className="text-display text-white mb-6">
            Ahorra <span className="text-[#10b981]">€5.000-€8.000</span> en tu Próximo Coche
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Importamos tu vehículo desde Alemania con <strong>inspección DEKRA</strong>, <strong>pago escrow</strong> y{" "}
            <strong>seguro CMR</strong>. Todo por{" "}
            <span className="text-[#10b981] font-bold">€2.200 honorarios fijos</span>.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <Euro className="h-5 w-5 text-[#10b981]" />
              <span className="font-medium">Precio Fijo €2.200</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-5 w-5 text-[#10b981]" />
              <span className="font-medium">40 Días Promedio</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="h-5 w-5 text-[#10b981]" />
              <span className="font-medium">100% Protegido</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              asChild
            >
              <Link href="#calculator">
                Calcular Mi Ahorro Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0a2463] px-8 py-6 text-lg font-semibold transition-all bg-transparent"
              asChild
            >
              <Link href="#como-funciona">Ver Cómo Funciona</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Confiado por más de 150 clientes</p>
            <div className="flex justify-center items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-4 text-left">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-[#10b981] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-sm font-medium">4.9/5 de 150+ clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="h-2 w-2 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}
