"use client"

import { Card } from "@/components/ui/card"
import { Shield, FileText, Lock, Eye, CheckCircle2 } from "lucide-react"

export function TransparencySection() {
  const guarantees = [
    {
      icon: Shield,
      title: "Inspección Independiente",
      description: "DEKRA o TÜV realizan inspección de 150+ puntos antes de la compra.",
      details: [
        "Informe técnico completo con fotos HD",
        "Valoración objetiva del estado",
        "Historial de mantenimiento verificado",
        "Detección de daños ocultos",
      ],
    },
    {
      icon: Lock,
      title: "Pago Escrow Seguro",
      description: "Tu dinero protegido hasta que el vehículo llegue en perfectas condiciones.",
      details: [
        "Fondos bloqueados en cuenta escrow",
        "Liberación solo tras tu conformidad",
        "Protección contra fraude",
        "Reembolso garantizado si hay problemas",
      ],
    },
    {
      icon: FileText,
      title: "Documentación Completa",
      description: "Todos los papeles en regla desde el primer día.",
      details: [
        "Contrato de compraventa alemán",
        "DUA y justificantes fiscales",
        "Certificado de conformidad europeo",
        "Permiso de circulación español",
      ],
    },
    {
      icon: Eye,
      title: "Transparencia Total",
      description: "Acceso completo a toda la información del vehículo y proceso.",
      details: [
        "Historial completo del vehículo",
        "Fotos y vídeos antes de comprar",
        "Tracking en tiempo real del transporte",
        "Actualizaciones constantes por WhatsApp",
      ],
    },
  ]

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-h1 text-[#0a2463] mb-4">Nuestra Garantía de Transparencia</h2>
          <p className="text-body-lg text-gray-600">
            Cero sorpresas. Cero letra pequeña. <strong>Todo documentado y verificable</strong>.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-14 w-14 rounded-full bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="text-h3 text-[#0a2463] mb-2">{guarantee.title}</h3>
                    <p className="text-gray-600">{guarantee.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-[72px]">
                  {guarantee.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        {/* What's Included */}
        <Card className="p-8 bg-white max-w-4xl mx-auto">
          <h3 className="text-h2 text-[#0a2463] mb-6 text-center">Qué Incluyen los €2.200</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-[#0a2463] mb-3">Servicios Incluidos:</h4>
              <ul className="space-y-2">
                {[
                  "Búsqueda y selección del vehículo",
                  "Inspección DEKRA/TÜV completa",
                  "Negociación del precio",
                  "Gestión de pago escrow",
                  "Transporte puerta a puerta",
                  "Seguro CMR durante transporte",
                  "Tramitación DUA e IVA",
                  "Gestión impuesto matriculación",
                  "ITV y matriculación española",
                  "Entrega a domicilio en España",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0a2463] mb-3">NO Incluido (Pagas Aparte):</h4>
              <ul className="space-y-2">
                {[
                  "Precio del vehículo",
                  "IVA (21% sobre precio vehículo)",
                  "Impuesto matriculación (~4.5%)",
                  "Homologación (si necesaria, ~€500)",
                  "Gestoría local (€200-300)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="h-4 w-4 flex items-center justify-center flex-shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-[#10b981]/10 rounded-lg">
                <p className="text-sm font-semibold text-[#0a2463]">
                  Te damos un presupuesto exacto tras la consulta gratuita. Sin sorpresas.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
