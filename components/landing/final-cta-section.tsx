"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-[#0a2463] via-[#1a3a8a] to-[#0a2463] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-h1 mb-4">¿Listo para Ahorrar Miles de Euros?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Recibe una <strong>auditoría gratuita en 24 horas</strong>. Te diremos si importar es rentable para tu
              caso específico.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8 bg-white text-gray-900">
              <h3 className="text-h3 text-[#0a2463] mb-6">Solicita tu Auditoría Gratuita</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan García"
                    className="mt-1"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="juan@email.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="model">Modelo que te interesa *</Label>
                  <Input
                    id="model"
                    required
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    placeholder="Ej: BMW 330e, Audi Q5, Mercedes C220d"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Presupuesto aproximado *</Label>
                  <Input
                    id="budget"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="Ej: €30.000 - €40.000"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje (opcional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos más sobre lo que buscas..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white h-12 text-lg">
                  Solicitar Auditoría Gratuita
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad. Respuesta garantizada en menos de
                  24 horas.
                </p>
              </form>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-h3 mb-6">Qué Incluye tu Auditoría Gratuita:</h3>
                <div className="space-y-4">
                  {[
                    "Análisis de rentabilidad para tu modelo específico",
                    "Búsqueda de 3-5 opciones reales en Alemania",
                    "Estimación exacta de todos los costes",
                    "Comparativa con precios en España",
                    "Recomendación honesta (incluso si no es rentable)",
                    "Sin compromiso, sin costes ocultos",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/20">
                <h4 className="font-bold text-lg">Otras Formas de Contacto:</h4>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#10b981]" />
                  <div>
                    <p className="font-semibold">Teléfono / WhatsApp</p>
                    <a href="tel:+34XXXXXXXXX" className="text-white/90 hover:text-white">
                      +34 XXX XXX XXX
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#10b981]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@autobridge.es" className="text-white/90 hover:text-white">
                      info@autobridge.es
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#10b981]" />
                  <div>
                    <p className="font-semibold">Horario</p>
                    <p className="text-white/90">L-V: 9:00-18:00 | S: 10:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
