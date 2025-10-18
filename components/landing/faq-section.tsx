"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda todo el proceso?",
      answer:
        "El proceso completo tarda entre 35-45 días desde la consulta inicial hasta la entrega. Desglose: Búsqueda (3-5 días), Inspección (2-3 días), Compra (1-2 días), Transporte (7-10 días), Aduanas (5-7 días), ITV y Matriculación (3-5 días), Entrega (1 día). Te mantenemos informado en cada paso.",
    },
    {
      question: "¿Qué pasa si el coche llega con daños?",
      answer:
        "El vehículo viaja con seguro CMR que cubre cualquier daño durante el transporte. Si hay daños, el seguro cubre la reparación completa. Además, hacemos inspección pre-transporte con fotos HD para documentar el estado exacto. Si los daños son graves, puedes rechazar la entrega y te devolvemos el dinero.",
    },
    {
      question: "¿Es legal importar un coche de Alemania?",
      answer:
        "Sí, es 100% legal. La UE permite la libre circulación de vehículos entre países miembros. Nosotros nos encargamos de toda la documentación: DUA (Documento Único Administrativo), pago de IVA e impuesto de matriculación, homologación si es necesaria, ITV, y matriculación española. Todo en regla desde el día uno.",
    },
    {
      question: "¿Qué garantía tiene el vehículo?",
      answer:
        "Los vehículos de menos de 2 años mantienen la garantía del fabricante válida en toda Europa. Para vehículos más antiguos, puedes contratar una garantía mecánica adicional (opcional, ~€500-800/año). Además, la inspección DEKRA/TÜV te da tranquilidad sobre el estado real del coche antes de comprarlo.",
    },
    {
      question: "¿Cuándo tengo que pagar?",
      answer:
        "Calendario de pagos: 1) Consulta gratuita: €0. 2) Tras encontrar el coche y aprobar inspección DEKRA: 50% de honorarios AutoBridge (€1.100). 3) Antes de la compra: Precio del vehículo + impuestos + 50% restante de honorarios (€1.100). Todo vía escrow para tu protección. No pagas nada hasta que apruebes la inspección.",
    },
    {
      question: "¿Qué pasa si no encuentro el coche que quiero?",
      answer:
        "Si tras 2 semanas de búsqueda no encontramos un vehículo que cumpla tus requisitos y presupuesto, cancelamos el servicio sin coste. Solo pagas si encontramos el coche perfecto y apruebas la inspección DEKRA. Cero riesgo para ti.",
    },
    {
      question: "¿Puedo ver el coche antes de comprarlo?",
      answer:
        "Sí. Opciones: 1) Viajar a Alemania a verlo (recomendado para compras >€50K). 2) Videollamada en directo desde el concesionario. 3) Inspección DEKRA con 50+ fotos HD y vídeo completo. La mayoría de clientes confían en la inspección DEKRA + fotos/vídeo y no viajan. Tú decides.",
    },
    {
      question: "¿Todos los coches son rentables de importar?",
      answer:
        "No. La rentabilidad depende de la diferencia de precio entre España y Alemania. Si el precio alemán + costes de importación (€9K-12K) supera el precio español, no es rentable. En la consulta gratuita te diremos honestamente si tu caso específico es rentable. Si no lo es, te lo decimos sin compromiso.",
    },
    {
      question: "¿Qué pasa si hay un problema con la documentación?",
      answer:
        "Nos encargamos de todo. Si hay algún problema con DUA, IVA, matriculación, o ITV, lo resolvemos sin coste adicional. Tenemos gestorías especializadas en cada provincia. Si el problema es grave y no se puede resolver, te devolvemos el dinero. Garantía de documentación 100% correcta.",
    },
    {
      question: "¿Puedo financiar la compra?",
      answer:
        "Sí. Opciones: 1) Financiación bancaria tradicional (tu banco). 2) Leasing/renting (empresas). 3) Financiación especializada en importación (te conectamos con partners). La mayoría de bancos financian sin problema una vez tienes el presupuesto detallado y la inspección DEKRA. Te ayudamos con la documentación necesaria.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-h1 text-[#0a2463] mb-4">Preguntas Frecuentes</h2>
          <p className="text-body-lg text-gray-600">
            Resolvemos todas tus dudas. <strong>Respuesta garantizada en menos de 24h</strong>.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#0a2463] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0a2463] pr-8">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[#0a2463] flex-shrink-0 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 animate-in slide-in-from-top-2 duration-200">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿No encuentras tu respuesta?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#ff6b35] hover:text-[#e55a2b] font-semibold transition-colors"
          >
            Contáctanos directamente →
          </a>
        </div>
      </div>
    </section>
  )
}
