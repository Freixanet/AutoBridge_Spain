"use client"

import { CheckCircle2, Clock } from "lucide-react"

export function TimelineSection() {
  const steps = [
    {
      number: "1",
      title: "Consulta Gratuita",
      description: "Analizamos tus necesidades y presupuesto. Te mostramos opciones reales del mercado alemán.",
      duration: "30 min",
      deliverable: "Propuesta personalizada",
    },
    {
      number: "2",
      title: "Búsqueda & Selección",
      description: "Localizamos el vehículo perfecto en plataformas alemanas verificadas (Mobile.de, Autoscout24).",
      duration: "3-5 días",
      deliverable: "Ficha técnica + historial",
    },
    {
      number: "3",
      title: "Inspección DEKRA/TÜV",
      description: "Inspección técnica independiente de 150+ puntos. Fotos HD, informe detallado, valoración.",
      duration: "2-3 días",
      deliverable: "Certificado DEKRA oficial",
    },
    {
      number: "4",
      title: "Negociación & Compra",
      description: "Negociamos el mejor precio. Pago seguro vía escrow. Documentación legal completa.",
      duration: "1-2 días",
      deliverable: "Contrato de compraventa",
    },
    {
      number: "5",
      title: "Transporte Asegurado",
      description: "Transporte en camión cerrado con seguro CMR. Tracking en tiempo real.",
      duration: "7-10 días",
      deliverable: "Seguro CMR + tracking",
    },
    {
      number: "6",
      title: "Gestión Aduanera",
      description: "Tramitamos DUA, IVA, impuesto matriculación. Homologación si es necesario.",
      duration: "5-7 días",
      deliverable: "DUA + justificantes fiscales",
    },
    {
      number: "7",
      title: "ITV & Matriculación",
      description: "Pasamos ITV, tramitamos matriculación española. Placas y documentación final.",
      duration: "3-5 días",
      deliverable: "Permiso de circulación",
    },
    {
      number: "8",
      title: "Entrega a Domicilio",
      description: "Entregamos tu vehículo donde quieras en España. Revisión final y firma de conformidad.",
      duration: "1 día",
      deliverable: "Tu coche listo para conducir",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-h1 text-[#0a2463] mb-4">Cómo Funciona: 8 Pasos Simples</h2>
          <p className="text-body-lg text-gray-600">
            Proceso transparente de principio a fin. <strong>40 días promedio</strong> desde la consulta hasta la
            entrega.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0a2463] via-[#10b981] to-[#0a2463] hidden md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0a2463] to-[#1a3a8a] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 mb-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                      <h3 className="text-h3 text-[#0a2463]">{step.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-[#ff6b35] font-semibold">
                          <Clock className="h-4 w-4" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 text-[#10b981] font-medium text-sm">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Entregable: {step.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Tiempo total promedio: 35-45 días</strong>
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Calcular Mi Ahorro Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
