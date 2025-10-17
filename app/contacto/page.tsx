"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, User, Building2, Store } from "lucide-react"
import { useState } from "react"

type ClientType = "particular" | "empresa" | "dealer"

export default function ContactoPage() {
  const [clientType, setClientType] = useState<ClientType>("particular")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    cif: "",
    vehicleModel: "",
    vehicleBudget: "",
    vehicleType: "",
    message: "",
    gdprConsent: false,
    marketingConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("[v0] Form submitted:", { clientType, ...formData })
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="font-serif text-4xl font-bold mb-4">¡Solicitud Recibida!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Gracias por tu interés. Nuestro equipo revisará tu solicitud y te contactará en menos de 24 horas con tu
              auditoría personalizada.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Próximos Pasos:</h3>
              <ol className="text-left space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <span>Recibirás un email de confirmación en los próximos minutos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <span>Nuestro equipo analizará tu solicitud y buscará opciones en el mercado alemán</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <span>Te contactaremos en menos de 24h con tu auditoría personalizada y estimación de ahorro</span>
                </li>
              </ol>
            </div>
            <Button asChild size="lg">
              <a href="/">Volver al Inicio</a>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground" variant="secondary">
            Respuesta en 24h
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Solicita Tu Auditoría Gratuita
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cuéntanos qué vehículo buscas y te enviaremos un análisis detallado con estimación de ahorro real en menos
            de 24 horas
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                  <CardDescription>Estamos aquí para ayudarte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm mb-1">Email</div>
                      <a href="mailto:info@tt-core.es" className="text-sm text-muted-foreground hover:text-secondary">
                        info@tt-core.es
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm mb-1">Teléfono</div>
                      <a href="tel:+34XXXXXXXXX" className="text-sm text-muted-foreground hover:text-secondary">
                        +34 XXX XXX XXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm mb-1">Horario</div>
                      <div className="text-sm text-muted-foreground">
                        Lunes - Viernes
                        <br />
                        9:00 - 18:00 CET
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm mb-1">Ubicación</div>
                      <div className="text-sm text-muted-foreground">
                        España
                        <br />
                        Servicio en toda la península
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                        <span className="font-semibold text-sm">Garantía de Respuesta</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Te contactaremos en menos de 24 horas laborables con tu auditoría personalizada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Formulario de Contacto</CardTitle>
                  <CardDescription>Completa el formulario y te enviaremos tu auditoría gratuita</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Client Type Selector */}
                    <div>
                      <Label className="mb-3 block">Tipo de Cliente</Label>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => setClientType("particular")}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                            clientType === "particular"
                              ? "border-secondary bg-secondary/5"
                              : "border-border hover:border-secondary/50"
                          }`}
                        >
                          <User className="h-6 w-6" />
                          <span className="text-sm font-medium">Particular</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setClientType("empresa")}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                            clientType === "empresa"
                              ? "border-secondary bg-secondary/5"
                              : "border-border hover:border-secondary/50"
                          }`}
                        >
                          <Building2 className="h-6 w-6" />
                          <span className="text-sm font-medium">Empresa</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setClientType("dealer")}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                            clientType === "dealer"
                              ? "border-secondary bg-secondary/5"
                              : "border-border hover:border-secondary/50"
                          }`}
                        >
                          <Store className="h-6 w-6" />
                          <span className="text-sm font-medium">Dealer</span>
                        </button>
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">
                          Nombre Completo <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-2"
                          placeholder="Juan Pérez"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-2"
                          placeholder="juan@ejemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">
                          Teléfono <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-2"
                          placeholder="+34 600 000 000"
                        />
                      </div>

                      {(clientType === "empresa" || clientType === "dealer") && (
                        <div>
                          <Label htmlFor="company">
                            {clientType === "dealer" ? "Nombre del Concesionario" : "Nombre de la Empresa"}{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="company"
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="mt-2"
                            placeholder={clientType === "dealer" ? "Auto Premium SL" : "Mi Empresa SL"}
                          />
                        </div>
                      )}
                    </div>

                    {(clientType === "empresa" || clientType === "dealer") && (
                      <div>
                        <Label htmlFor="cif">
                          CIF/NIF <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="cif"
                          type="text"
                          required
                          value={formData.cif}
                          onChange={(e) => handleInputChange("cif", e.target.value)}
                          className="mt-2"
                          placeholder="B12345678"
                        />
                      </div>
                    )}

                    {/* Vehicle Info */}
                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-4">Información del Vehículo</h3>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="vehicleModel">
                            Modelo Deseado <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="vehicleModel"
                            type="text"
                            required
                            value={formData.vehicleModel}
                            onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                            className="mt-2"
                            placeholder="Ej: BMW iX xDrive50, Mercedes EQE 350+"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Indica marca, modelo y versión si la conoces
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="vehicleType">Tipo de Vehículo</Label>
                            <Select
                              value={formData.vehicleType}
                              onValueChange={(val) => handleInputChange("vehicleType", val)}
                            >
                              <SelectTrigger id="vehicleType" className="mt-2">
                                <SelectValue placeholder="Selecciona tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ev">Eléctrico (EV)</SelectItem>
                                <SelectItem value="hybrid">Híbrido</SelectItem>
                                <SelectItem value="combustion">Combustión</SelectItem>
                                <SelectItem value="any">Cualquiera</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="vehicleBudget">Presupuesto Aproximado (€)</Label>
                            <Input
                              id="vehicleBudget"
                              type="text"
                              value={formData.vehicleBudget}
                              onChange={(e) => handleInputChange("vehicleBudget", e.target.value)}
                              className="mt-2"
                              placeholder="Ej: 50000"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message">Información Adicional</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            className="mt-2"
                            rows={4}
                            placeholder="Cuéntanos más sobre tus preferencias: año, kilometraje máximo, color, equipamiento específico, etc."
                          />
                        </div>
                      </div>
                    </div>

                    {/* GDPR Consent */}
                    <div className="pt-4 border-t space-y-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="gdpr"
                          checked={formData.gdprConsent}
                          onCheckedChange={(checked) => handleInputChange("gdprConsent", checked as boolean)}
                          required
                        />
                        <Label htmlFor="gdpr" className="text-sm leading-relaxed cursor-pointer">
                          He leído y acepto la{" "}
                          <a href="/privacidad" className="text-secondary hover:underline">
                            Política de Privacidad
                          </a>{" "}
                          y el tratamiento de mis datos personales para gestionar mi solicitud.{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="marketing"
                          checked={formData.marketingConsent}
                          onCheckedChange={(checked) => handleInputChange("marketingConsent", checked as boolean)}
                        />
                        <Label htmlFor="marketing" className="text-sm leading-relaxed cursor-pointer">
                          Acepto recibir comunicaciones comerciales sobre ofertas y novedades de TT-Core (opcional)
                        </Label>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        Los campos marcados con <span className="text-destructive">*</span> son obligatorios. Tus datos
                        están protegidos según el RGPD.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      disabled={isSubmitting || !formData.gdprConsent}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Solicitar Auditoría Gratuita
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Preguntas Frecuentes sobre la Auditoría</h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Qué incluye la auditoría gratuita?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Análisis de mercado DE vs ES, estimación de ahorro real, viabilidad de importación, presupuesto
                  detallado con todos los costes (transporte, inspección, matriculación, seguros) y recomendaciones
                  personalizadas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Tiene algún coste o compromiso?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No. La auditoría es completamente gratuita y sin compromiso. Solo pagas si decides proceder con la
                  importación y firmamos el contrato de intermediación.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto tiempo tarda la respuesta?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nuestro equipo te contactará en menos de 24 horas laborables con tu auditoría personalizada. En casos
                  urgentes, podemos responder el mismo día.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Qué pasa con mis datos personales?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tus datos están protegidos según el RGPD. Solo los usamos para gestionar tu solicitud y enviarte la
                  auditoría. No los compartimos con terceros sin tu consentimiento explícito.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
