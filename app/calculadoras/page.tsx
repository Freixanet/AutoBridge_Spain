"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Calculator, TrendingDown, Truck, Battery, ArrowRight, Info, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function CalculadorasPage() {
  // Savings Calculator State
  const [priceDE, setPriceDE] = useState<number>(35000)
  const [priceES, setPriceES] = useState<number>(42000)

  // Logistics Calculator State
  const [distance, setDistance] = useState<number>(1500)
  const [vehicleType, setVehicleType] = useState<string>("sedan")

  // EV Battery State
  const [batteryCapacity, setBatteryCapacity] = useState<number>(75)
  const [currentRange, setCurrentRange] = useState<number>(380)
  const [originalRange, setOriginalRange] = useState<number>(450)

  // Savings Calculator Logic
  const calculateSavings = () => {
    const transportCost = 800
    const inspectionCost = 250
    const registrationCost = 450
    const insuranceCost = 150
    const brokerFee = priceDE * 0.03 // 3% fee
    const totalCosts = transportCost + inspectionCost + registrationCost + insuranceCost + brokerFee

    const totalDE = priceDE + totalCosts
    const savings = priceES - totalDE
    const savingsPercent = ((savings / priceES) * 100).toFixed(1)

    return {
      totalDE: totalDE.toFixed(0),
      savings: savings.toFixed(0),
      savingsPercent,
      breakdown: {
        transport: transportCost,
        inspection: inspectionCost,
        registration: registrationCost,
        insurance: insuranceCost,
        broker: brokerFee.toFixed(0),
        total: totalCosts.toFixed(0),
      },
    }
  }

  // Logistics Calculator Logic
  const calculateLogistics = () => {
    const baseRates: Record<string, number> = {
      sedan: 0.45,
      suv: 0.55,
      luxury: 0.65,
      ev: 0.5,
    }

    const baseRate = baseRates[vehicleType] || 0.45
    const baseCost = distance * baseRate
    const markup = baseCost * 0.15 // 12-18% markup (using 15% average)
    const insurance = 150
    const handling = 100

    const total = baseCost + markup + insurance + handling

    return {
      baseCost: baseCost.toFixed(0),
      markup: markup.toFixed(0),
      insurance,
      handling,
      total: total.toFixed(0),
      perKm: (total / distance).toFixed(2),
    }
  }

  // EV Battery Health Logic
  const calculateBatteryHealth = () => {
    const soh = ((currentRange / originalRange) * 100).toFixed(1)
    const degradation = (100 - Number.parseFloat(soh)).toFixed(1)
    const estimatedCapacity = ((Number.parseFloat(soh) / 100) * batteryCapacity).toFixed(1)

    let status = "Excelente"
    let statusColor = "text-secondary"
    if (Number.parseFloat(soh) < 90) {
      status = "Bueno"
      statusColor = "text-blue-600"
    }
    if (Number.parseFloat(soh) < 80) {
      status = "Aceptable"
      statusColor = "text-yellow-600"
    }
    if (Number.parseFloat(soh) < 70) {
      status = "Precaución"
      statusColor = "text-destructive"
    }

    return {
      soh,
      degradation,
      estimatedCapacity,
      status,
      statusColor,
    }
  }

  const savingsResult = calculateSavings()
  const logisticsResult = calculateLogistics()
  const batteryResult = calculateBatteryHealth()

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <Calculator className="h-16 w-16 text-secondary mx-auto mb-6" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Calculadoras de Importación
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Herramientas transparentes para calcular ahorros, costes logísticos y salud de baterías EV
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <Tabs defaultValue="savings" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2">
              <TabsTrigger value="savings" className="flex items-center gap-2 py-3">
                <TrendingDown className="h-4 w-4" />
                Calculadora de Ahorro
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex items-center gap-2 py-3">
                <Truck className="h-4 w-4" />
                Calculadora Logística
              </TabsTrigger>
              <TabsTrigger value="battery" className="flex items-center gap-2 py-3">
                <Battery className="h-4 w-4" />
                Salud Batería EV
              </TabsTrigger>
            </TabsList>

            {/* Savings Calculator */}
            <TabsContent value="savings" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-6 w-6 text-secondary" />
                    Calculadora de Ahorro DE vs ES
                  </CardTitle>
                  <CardDescription>
                    Compara el precio en Alemania más todos los costes de importación vs. el precio en España
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <Label htmlFor="price-de">Precio en Alemania (€)</Label>
                      <Input
                        id="price-de"
                        type="number"
                        value={priceDE}
                        onChange={(e) => setPriceDE(Number(e.target.value))}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Precio del vehículo en el mercado alemán</p>
                    </div>

                    <div>
                      <Label htmlFor="price-es">Precio en España (€)</Label>
                      <Input
                        id="price-es"
                        type="number"
                        value={priceES}
                        onChange={(e) => setPriceES(Number(e.target.value))}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Precio del mismo vehículo en España</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-4">Desglose de Costes</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Precio base (DE)</span>
                        <span className="font-medium">€{priceDE.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Transporte</span>
                        <span className="font-medium">€{savingsResult.breakdown.transport}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Inspección DEKRA/TÜV</span>
                        <span className="font-medium">€{savingsResult.breakdown.inspection}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Matriculación + ITV</span>
                        <span className="font-medium">€{savingsResult.breakdown.registration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Seguro CMR</span>
                        <span className="font-medium">€{savingsResult.breakdown.insurance}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Fee TT-Core (3%)</span>
                        <span className="font-medium">€{savingsResult.breakdown.broker}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-semibold">
                        <span>Coste Total (DE + Importación)</span>
                        <span>€{Number(savingsResult.totalDE).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Precio en España</span>
                        <span className="font-medium">€{priceES.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Savings Result */}
                  <div className="bg-secondary/10 rounded-lg p-6 text-center">
                    <div className="text-sm text-muted-foreground mb-2">Tu Ahorro Total</div>
                    <div className="text-4xl font-bold text-secondary mb-2">
                      €{Number(savingsResult.savings).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Ahorras un {savingsResult.savingsPercent}% vs. comprar en España
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <p>
                      Estimación basada en costes reales. El ahorro final puede variar según el vehículo específico y
                      ubicación de entrega.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Logistics Calculator */}
            <TabsContent value="logistics" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-6 w-6 text-secondary" />
                    Calculadora de Costes Logísticos
                  </CardTitle>
                  <CardDescription>
                    Estima el coste de transporte desde Alemania según distancia y tipo de vehículo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <Label htmlFor="distance">Distancia (km)</Label>
                      <Input
                        id="distance"
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(Number(e.target.value))}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Distancia aproximada desde origen en Alemania
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="vehicle-type">Tipo de Vehículo</Label>
                      <Select value={vehicleType} onValueChange={setVehicleType}>
                        <SelectTrigger id="vehicle-type" className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedan">Sedán / Compacto</SelectItem>
                          <SelectItem value="suv">SUV / Familiar</SelectItem>
                          <SelectItem value="luxury">Premium / Deportivo</SelectItem>
                          <SelectItem value="ev">Vehículo Eléctrico</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground mt-1">Afecta la tarifa por km</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-4">Desglose Logístico</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Coste base transporte</span>
                        <span className="font-medium">€{logisticsResult.baseCost}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Markup TT-Log (15%)</span>
                        <span className="font-medium">€{logisticsResult.markup}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Seguro CMR</span>
                        <span className="font-medium">€{logisticsResult.insurance}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Gestión y handling</span>
                        <span className="font-medium">€{logisticsResult.handling}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-semibold">
                        <span>Coste Total Logística</span>
                        <span>€{logisticsResult.total}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Coste por kilómetro</span>
                        <span>€{logisticsResult.perKm}/km</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/10 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium mb-1">Incluye:</p>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Seguro CMR con cobertura ICC(A) + SRCC</li>
                          <li>• Tracking en tiempo real</li>
                          <li>• Transportista certificado</li>
                          <li>• Protección contra daños en tránsito</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* EV Battery Health */}
            <TabsContent value="battery" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Battery className="h-6 w-6 text-secondary" />
                    Calculadora de Salud de Batería EV
                  </CardTitle>
                  <CardDescription>
                    Estima el estado de salud (SoH) de la batería de un vehículo eléctrico usado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <Label htmlFor="battery-capacity">Capacidad Nominal (kWh)</Label>
                      <Input
                        id="battery-capacity"
                        type="number"
                        value={batteryCapacity}
                        onChange={(e) => setBatteryCapacity(Number(e.target.value))}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Capacidad original de fábrica</p>
                    </div>

                    <div>
                      <Label htmlFor="current-range">Autonomía Actual (km)</Label>
                      <Input
                        id="current-range"
                        type="number"
                        value={currentRange}
                        onChange={(e) => setCurrentRange(Number(e.target.value))}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Autonomía real medida</p>
                    </div>

                    <div>
                      <Label htmlFor="original-range">Autonomía Original (km)</Label>
                      <Input
                        id="original-range"
                        type="number"
                        value={originalRange}
                        onChange={(e) => setOriginalRange(Number(e.target.value))}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Autonomía WLTP de fábrica</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-muted/50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-4">Análisis de Batería</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Estado de Salud (SoH)</span>
                          <span className={`font-bold text-lg ${batteryResult.statusColor}`}>{batteryResult.soh}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div
                            className="bg-secondary h-3 rounded-full transition-all"
                            style={{ width: `${batteryResult.soh}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Degradación</div>
                          <div className="text-2xl font-bold">{batteryResult.degradation}%</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Capacidad Estimada</div>
                          <div className="text-2xl font-bold">{batteryResult.estimatedCapacity} kWh</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className={`rounded-lg p-6 text-center ${batteryResult.statusColor.replace("text-", "bg-")}/10`}>
                    <div className="text-sm text-muted-foreground mb-2">Estado de la Batería</div>
                    <div className={`text-3xl font-bold ${batteryResult.statusColor}`}>{batteryResult.status}</div>
                  </div>

                  <div className="mt-6 bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-sm">Guía de Interpretación:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-medium text-secondary">≥90%:</span>
                        <span className="text-muted-foreground">Excelente - Batería en óptimas condiciones</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-medium text-blue-600">80-89%:</span>
                        <span className="text-muted-foreground">Bueno - Degradación normal esperada</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-medium text-yellow-600">70-79%:</span>
                        <span className="text-muted-foreground">Aceptable - Considerar garantía de batería</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-medium text-destructive">&lt;70%:</span>
                        <span className="text-muted-foreground">Precaución - Inspección detallada recomendada</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <p>
                      Esta es una estimación basada en autonomía. Recomendamos inspección profesional con herramientas
                      de diagnóstico OBD-II para datos precisos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">¿Te Convencen los Números?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicita una auditoría personalizada con datos reales de tu vehículo objetivo
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/contacto">
              Solicitar Auditoría Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
