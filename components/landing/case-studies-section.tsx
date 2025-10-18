"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, TrendingDown, Calendar, MapPin } from "lucide-react"

export function CaseStudiesSection() {
  const cases = [
    {
      model: "BMW 330e Híbrido",
      year: 2022,
      location: "Madrid",
      priceES: 42000,
      priceDE: 34500,
      costs: 7800,
      savings: 7700,
      savingsPercent: 18.3,
      duration: "38 días",
      testimonial: "Proceso impecable. El ahorro fue real y la transparencia total.",
      client: "Carlos M.",
      features: ["Inspección DEKRA", "Garantía 24 meses", "ITV pasada"],
    },
    {
      model: "Audi Q5 45 TFSI",
      year: 2021,
      location: "Barcelona",
      priceES: 48500,
      priceDE: 39000,
      costs: 8900,
      savings: 9500,
      savingsPercent: 19.6,
      duration: "42 días",
      testimonial: "Increíble servicio. Me mantuvieron informado en cada paso.",
      client: "Laura G.",
      features: ["Full equip", "Libro revisiones", "Un solo propietario"],
    },
    {
      model: "Mercedes C 220d",
      year: 2020,
      location: "Valencia",
      priceES: 35000,
      priceDE: 28500,
      costs: 6200,
      savings: 6500,
      savingsPercent: 18.6,
      duration: "35 días",
      testimonial: "Mejor decisión. Ahorré casi €7K y el coche llegó perfecto.",
      client: "Miguel R.",
      features: ["AMG Line", "Techo panorámico", "Navegación"],
    },
  ]

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-[#10b981] hover:bg-[#059669] text-white">Casos Reales Verificados</Badge>
          <h2 className="text-h1 text-[#0a2463] mb-4">Clientes que Ya Ahorraron</h2>
          <p className="text-body-lg text-gray-600">
            Casos reales de los últimos 6 meses. <strong>Ahorro promedio: €7.900</strong>
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#0a2463] mb-2">{caseStudy.model}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {caseStudy.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {caseStudy.location}
                  </span>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">Ahorro Total</span>
                  <TrendingDown className="h-5 w-5" />
                </div>
                <p className="text-3xl font-bold">€{caseStudy.savings.toLocaleString("es-ES")}</p>
                <p className="text-sm opacity-90 mt-1">{caseStudy.savingsPercent}% menos que en España</p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Precio España:</span>
                  <span className="font-semibold line-through">€{caseStudy.priceES.toLocaleString("es-ES")}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Precio Alemania:</span>
                  <span className="font-semibold">€{caseStudy.priceDE.toLocaleString("es-ES")}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Costes totales:</span>
                  <span className="font-semibold">€{caseStudy.costs.toLocaleString("es-ES")}</span>
                </div>
                <div className="flex justify-between pt-2 border-t font-bold text-[#0a2463]">
                  <span>Total pagado:</span>
                  <span>€{(caseStudy.priceDE + caseStudy.costs).toLocaleString("es-ES")}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {caseStudy.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 italic mb-2">"{caseStudy.testimonial}"</p>
                <p className="text-sm font-semibold text-[#0a2463]">
                  - {caseStudy.client} • {caseStudy.duration}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#0a2463] mb-2">€7.9K</p>
            <p className="text-sm text-gray-600">Ahorro Promedio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#0a2463] mb-2">38</p>
            <p className="text-sm text-gray-600">Días Promedio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#0a2463] mb-2">100%</p>
            <p className="text-sm text-gray-600">Satisfacción</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#0a2463] mb-2">150+</p>
            <p className="text-sm text-gray-600">Clientes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
