"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, AlertCircle } from "lucide-react"

export function PriceTableSection() {
  const comparisonData = [
    {
      model: "BMW 320d",
      year: 2021,
      km: "45.000 km",
      priceES: 32500,
      priceDE: 26800,
      autobridge: 2200,
      transport: 750,
      taxes: 6100,
      total: 35850,
      savings: -3350,
      savingsPercent: -10.3,
      verdict: "No rentable",
    },
    {
      model: "Audi A4 40 TDI",
      year: 2020,
      km: "65.000 km",
      priceES: 35000,
      priceDE: 27500,
      autobridge: 2200,
      transport: 800,
      taxes: 6400,
      total: 36900,
      savings: -1900,
      savingsPercent: -5.4,
      verdict: "No rentable",
    },
    {
      model: "Mercedes C 220d",
      year: 2020,
      km: "55.000 km",
      priceES: 35000,
      priceDE: 28500,
      autobridge: 2200,
      transport: 800,
      taxes: 6500,
      total: 38000,
      savings: -3000,
      savingsPercent: -8.6,
      verdict: "No rentable",
    },
    {
      model: "BMW 330e Híbrido",
      year: 2022,
      km: "25.000 km",
      priceES: 42000,
      priceDE: 34500,
      autobridge: 2200,
      transport: 850,
      taxes: 7800,
      total: 45350,
      savings: -3350,
      savingsPercent: -8.0,
      verdict: "No rentable",
    },
    {
      model: "Audi Q5 45 TFSI",
      year: 2021,
      km: "40.000 km",
      priceES: 48500,
      priceDE: 39000,
      autobridge: 2200,
      transport: 900,
      taxes: 8900,
      total: 51000,
      savings: -2500,
      savingsPercent: -5.2,
      verdict: "No rentable",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-[#ff6b35] hover:bg-[#e55a2b] text-white">Transparencia Total</Badge>
          <h2 className="text-h1 text-[#0a2463] mb-4">Tabla de Precios Reales</h2>
          <p className="text-body-lg text-gray-600">
            Comparativa actualizada de 5 modelos populares. <strong>Precios verificados esta semana</strong> en
            Mobile.de y Coches.net.
          </p>
        </div>

        {/* Table */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-12 gap-4 bg-[#0a2463] text-white p-4 rounded-t-lg font-semibold text-sm">
              <div className="col-span-3">Modelo</div>
              <div className="col-span-2 text-right">Precio ES</div>
              <div className="col-span-2 text-right">Precio DE</div>
              <div className="col-span-2 text-right">Costes</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-1 text-right">Ahorro</div>
            </div>

            {/* Data Rows */}
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-12 gap-4 p-4 border-b ${item.savings > 0 ? "bg-[#10b981]/5" : "bg-gray-50"}`}
              >
                <div className="col-span-3">
                  <p className="font-semibold text-[#0a2463]">{item.model}</p>
                  <p className="text-xs text-gray-600">
                    {item.year} • {item.km}
                  </p>
                </div>
                <div className="col-span-2 text-right">
                  <p className="font-semibold">€{item.priceES.toLocaleString("es-ES")}</p>
                </div>
                <div className="col-span-2 text-right">
                  <p className="font-semibold text-[#10b981]">€{item.priceDE.toLocaleString("es-ES")}</p>
                </div>
                <div className="col-span-2 text-right">
                  <p className="text-sm text-gray-600">
                    €{(item.autobridge + item.transport + item.taxes).toLocaleString("es-ES")}
                  </p>
                </div>
                <div className="col-span-2 text-right">
                  <p className="font-bold text-[#0a2463]">€{item.total.toLocaleString("es-ES")}</p>
                </div>
                <div className="col-span-1 text-right">
                  {item.savings > 0 ? (
                    <div className="flex items-center justify-end gap-1">
                      <Check className="h-4 w-4 text-[#10b981]" />
                      <span className="font-bold text-[#10b981]">€{item.savings.toLocaleString("es-ES")}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-end gap-1">
                      <X className="h-4 w-4 text-red-500" />
                      <span className="font-bold text-red-500">€{Math.abs(item.savings).toLocaleString("es-ES")}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Box */}
        <Card className="mt-8 p-6 bg-[#ff6b35]/10 border-[#ff6b35] max-w-4xl mx-auto">
          <div className="flex gap-4">
            <AlertCircle className="h-6 w-6 text-[#ff6b35] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#0a2463] mb-2">¿Por Qué No Todos los Coches Son Rentables?</h3>
              <p className="text-gray-700 mb-3">
                La rentabilidad depende de la <strong>diferencia de precio base</strong> entre España y Alemania. Si el
                precio alemán + costes de importación supera el precio español, no es rentable importar.
              </p>
              <p className="text-gray-700">
                <strong>Nuestra promesa:</strong> Te diremos honestamente si importar es rentable para tu caso
                específico. Si no lo es, te lo decimos en la consulta gratuita. Sin compromiso.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            <strong>¿Quieres saber si tu modelo es rentable?</strong>
          </p>
          <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-6 text-lg" asChild>
            <a href="#calculator">Calcular Mi Caso Específico</a>
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-500 mt-6 max-w-3xl mx-auto">
          * Precios verificados en Mobile.de y Coches.net la semana del 10-17 Oct 2025. Los precios pueden variar según
          disponibilidad y condiciones específicas del vehículo. Costes incluyen: AutoBridge (€2.200), transporte
          (€750-900), IVA (21%), impuesto matriculación (~4.5%), gestorías (€300), ITV (€50).
        </p>
      </div>
    </section>
  )
}
