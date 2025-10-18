"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Calculator, TrendingDown, Euro, ArrowRight } from "lucide-react"

export function CalculatorSection() {
  const [priceES, setPriceES] = useState<string>("")
  const [priceDE, setPriceDE] = useState<string>("")
  const [showResults, setShowResults] = useState(false)

  const calculateSavings = () => {
    if (!priceES || !priceDE) return null

    const esPrice = Number.parseFloat(priceES)
    const dePrice = Number.parseFloat(priceDE)

    // Costes de importación
    const autobridge = 2200
    const transport = 800
    const iva = dePrice * 0.21
    const matriculacion = dePrice * 0.045 // Estimado 4.5%
    const gestorias = 300
    const itv = 50

    const totalCosts = autobridge + transport + iva + matriculacion + gestorias + itv
    const totalDE = dePrice + totalCosts
    const savings = esPrice - totalDE
    const savingsPercent = ((savings / esPrice) * 100).toFixed(1)

    return {
      esPrice,
      dePrice,
      autobridge,
      transport,
      iva,
      matriculacion,
      gestorias,
      itv,
      totalCosts,
      totalDE,
      savings,
      savingsPercent,
    }
  }

  const results = showResults ? calculateSavings() : null

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#10b981]/10 text-[#10b981] px-4 py-2 rounded-full font-semibold mb-4">
            <Calculator className="h-5 w-5" />
            Calculadora de Ahorro
          </div>
          <h2 className="text-h1 text-[#0a2463] mb-4">¿Cuánto Puedes Ahorrar?</h2>
          <p className="text-body-lg text-gray-600">
            Compara el precio en España vs. importar desde Alemania. <strong>Incluye todos los costes</strong>.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Precio España */}
              <div>
                <Label htmlFor="price-es" className="text-lg font-semibold text-[#0a2463] mb-2 block">
                  Precio en España
                </Label>
                <div className="relative">
                  <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="price-es"
                    type="number"
                    placeholder="35000"
                    value={priceES}
                    onChange={(e) => setPriceES(e.target.value)}
                    className="pl-10 h-14 text-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Precio del mismo modelo en España</p>
              </div>

              {/* Precio Alemania */}
              <div>
                <Label htmlFor="price-de" className="text-lg font-semibold text-[#0a2463] mb-2 block">
                  Precio en Alemania
                </Label>
                <div className="relative">
                  <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="price-de"
                    type="number"
                    placeholder="28000"
                    value={priceDE}
                    onChange={(e) => setPriceDE(e.target.value)}
                    className="pl-10 h-14 text-lg"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Precio en Mobile.de o Autoscout24</p>
              </div>
            </div>

            <Button
              onClick={() => setShowResults(true)}
              disabled={!priceES || !priceDE}
              className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white h-14 text-lg font-semibold"
            >
              Calcular Mi Ahorro
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>

          {/* Results */}
          {results && (
            <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Savings Highlight */}
              <Card className="p-8 bg-gradient-to-br from-[#10b981] to-[#059669] text-white shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/90 text-lg mb-2">Tu Ahorro Total</p>
                    <p className="text-5xl font-bold">€{results.savings.toLocaleString("es-ES")}</p>
                    <p className="text-white/90 text-lg mt-2">
                      Ahorras un <strong>{results.savingsPercent}%</strong>
                    </p>
                  </div>
                  <TrendingDown className="h-20 w-20 text-white/30" />
                </div>
              </Card>

              {/* Cost Breakdown */}
              <Card className="p-8">
                <h3 className="text-h3 text-[#0a2463] mb-6">Desglose Completo de Costes</h3>

                <div className="space-y-4">
                  {/* Precio base */}
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold text-gray-700">Precio del vehículo (Alemania)</span>
                    <span className="text-lg font-bold text-[#0a2463]">€{results.dePrice.toLocaleString("es-ES")}</span>
                  </div>

                  {/* Costes */}
                  <div className="space-y-3 py-4">
                    <div className="flex justify-between text-gray-600">
                      <span>AutoBridge (honorarios fijos)</span>
                      <span className="font-semibold">€{results.autobridge.toLocaleString("es-ES")}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Transporte + Seguro CMR</span>
                      <span className="font-semibold">€{results.transport.toLocaleString("es-ES")}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>IVA (21%)</span>
                      <span className="font-semibold">€{results.iva.toLocaleString("es-ES")}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Impuesto de Matriculación (~4.5%)</span>
                      <span className="font-semibold">€{results.matriculacion.toLocaleString("es-ES")}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Gestorías + ITV</span>
                      <span className="font-semibold">
                        €{(results.gestorias + results.itv).toLocaleString("es-ES")}
                      </span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center pt-4 border-t-2 border-[#0a2463]">
                    <span className="text-lg font-bold text-[#0a2463]">Coste Total (Importación)</span>
                    <span className="text-2xl font-bold text-[#0a2463]">
                      €{results.totalDE.toLocaleString("es-ES")}
                    </span>
                  </div>

                  {/* Comparison */}
                  <div className="flex justify-between items-center pt-2 text-gray-500">
                    <span>Precio en España</span>
                    <span className="font-semibold line-through">€{results.esPrice.toLocaleString("es-ES")}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-[#f8fafc] rounded-lg">
                  <p className="text-center text-gray-700 mb-4">
                    <strong>¿Listo para ahorrar €{results.savings.toLocaleString("es-ES")}?</strong>
                  </p>
                  <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white h-12" asChild>
                    <a href="#contacto">Solicitar Auditoría Gratuita</a>
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
          * Los cálculos son estimaciones basadas en casos reales. El coste final puede variar según el vehículo
          específico, origen, y requisitos de homologación. Te proporcionamos un presupuesto exacto tras la consulta
          gratuita.
        </p>
      </div>
    </section>
  )
}
