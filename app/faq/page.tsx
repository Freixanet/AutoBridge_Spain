import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Importación de Coches de Alemania",
  description:
    "Respuestas a las preguntas más frecuentes sobre la importación de vehículos premium de Alemania a España. Proceso, costes, garantías y más.",
}

const faqCategories = [
  {
    category: "Proceso y Tiempos",
    questions: [
      {
        q: "¿Cuánto tiempo tarda todo el proceso de importación?",
        a: "El proceso completo tarda entre 21-35 días desde la búsqueda hasta la entrega. Esto incluye: búsqueda y auditoría (3-7 días), inspección independiente (2-3 días), transporte (7-10 días), y matriculación (7-12 días). Los plazos pueden variar según la disponibilidad del vehículo y la carga administrativa de Tráfico.",
      },
      {
        q: "¿Puedo acelerar el proceso si tengo prisa?",
        a: "Sí, ofrecemos servicio express que reduce el tiempo total a 14-21 días mediante inspecciones prioritarias, transporte urgente y gestoría acelerada. Este servicio tiene un coste adicional de €800-1.200 según el vehículo.",
      },
      {
        q: "¿Qué pasa si encuentro el coche perfecto pero está en venta privada?",
        a: "Gestionamos tanto compras a concesionarios como a particulares en Alemania. Para ventas privadas, realizamos verificaciones adicionales del vendedor, historial del vehículo y documentación legal para garantizar la seguridad de la operación.",
      },
    ],
  },
  {
    category: "Costes y Pagos",
    questions: [
      {
        q: "¿Cuáles son TODOS los costes reales de importar un coche?",
        a: "Costes totales incluyen: precio del vehículo en Alemania, nuestra comisión (3-5% del precio DE), transporte (€800-1.400), inspección independiente (€250-400), gestoría y matriculación (€350-500), IVA español (21% sobre precio DE + transporte), e impuesto de matriculación si aplica. Nuestras calculadoras muestran el desglose exacto.",
      },
      {
        q: "¿Cómo funciona el pago con escrow/depósito en garantía?",
        a: "Utilizamos cuentas de depósito en garantía (escrow) reguladas. Usted deposita el importe en una cuenta bloqueada, nosotros compramos el vehículo, y el dinero solo se libera al vendedor alemán tras la inspección independiente aprobada. Si la inspección revela problemas graves, recupera el 100% del depósito.",
      },
      {
        q: "¿Hay costes ocultos o sorpresas al final?",
        a: "No. Todos los costes se detallan por escrito antes de iniciar. El único coste variable es el impuesto de matriculación (solo para vehículos de combustión según emisiones CO₂), que calculamos con precisión en la fase de auditoría. Garantizamos que el coste final no superará el presupuesto acordado en más de un 2%.",
      },
    ],
  },
  {
    category: "Inspecciones y Garantías",
    questions: [
      {
        q: "¿Qué incluye exactamente la inspección independiente?",
        a: "Inspección técnica completa por DEKRA/TÜV/GTÜ: verificación de 150+ puntos, prueba de carretera, diagnóstico electrónico OBD, medición de pintura (detecta reparaciones), comprobación de bastidor y motor, test de batería (en EVs), y verificación de documentación. Recibes informe fotográfico completo en 24-48h.",
      },
      {
        q: "¿Qué pasa si la inspección encuentra problemas graves?",
        a: "Tienes tres opciones: 1) Cancelar sin coste y recuperar el 100% del depósito, 2) Negociar rebaja del precio con el vendedor según el coste de reparación, o 3) Aceptar el vehículo con descuento acordado. Nunca estás obligado a continuar si la inspección no es satisfactoria.",
      },
      {
        q: "¿Los coches importados tienen garantía en España?",
        a: "Sí. Los vehículos con garantía de fabricante vigente mantienen cobertura en España (red oficial de la marca). Para vehículos sin garantía, ofrecemos garantía mecánica opcional de 12-24 meses con cobertura en talleres autorizados en España (coste: €400-800 según vehículo).",
      },
    ],
  },
  {
    category: "Vehículos Eléctricos",
    questions: [
      {
        q: "¿Cómo verificáis el estado real de la batería en coches eléctricos?",
        a: "Realizamos test profesional de batería que mide: State of Health (SoH) real mediante diagnóstico OBD, capacidad útil vs. nominal, historial de ciclos de carga, y degradación por celda. Solo aceptamos vehículos con SoH ≥85% (o según tus requisitos). El informe incluye proyección de vida útil restante.",
      },
      {
        q: "¿Los EVs importados son compatibles con cargadores españoles?",
        a: "Sí, todos los EVs europeos usan estándares compatibles (Type 2 para AC, CCS Combo 2 para DC). Verificamos que el vehículo incluye cables de carga y que el sistema de navegación tiene mapas de España actualizados con puntos de recarga.",
      },
      {
        q: "¿Puedo acceder a ayudas del Plan MOVES III con un coche importado?",
        a: "Sí, los vehículos importados son elegibles para MOVES III si cumplen requisitos (primera matriculación en España, emisiones 0g CO₂, precio ≤45.000€). Te asesoramos en la solicitud y coordinamos con gestoría para maximizar la ayuda (hasta €7.000 con achatarramiento).",
      },
    ],
  },
  {
    category: "Legal y Documentación",
    questions: [
      {
        q: "¿Qué documentación necesito aportar para importar?",
        a: "Documentación mínima: DNI/NIE, certificado de empadronamiento, y justificante de pago del IVA. Para empresas: CIF, escrituras de constitución, y alta en el IAE. Nosotros gestionamos toda la documentación alemana (Fahrzeugbrief, COC, historial) y española (DGT, Hacienda).",
      },
      {
        q: "¿Cómo funciona el seguro durante el transporte?",
        a: "El vehículo viaja asegurado con póliza CMR (Convenio de Transporte Internacional) por el valor declarado. Cobertura todo riesgo incluyendo daños, robo, incendio y accidentes. En caso de siniestro, la aseguradora indemniza el valor de mercado del vehículo sin franquicia para ti.",
      },
      {
        q: "¿Qué pasa si Tráfico rechaza la matriculación?",
        a: "Extremadamente raro (0,3% de casos) si se siguen nuestros protocolos. Verificamos elegibilidad antes de comprar: homologación europea válida, emisiones conformes, y documentación completa. Si ocurre rechazo por error administrativo, gestionamos la subsanación sin coste adicional. Garantía de matriculación incluida.",
      },
    ],
  },
  {
    category: "Servicio y Soporte",
    questions: [
      {
        q: "¿Qué nivel de comunicación y seguimiento ofrecéis?",
        a: "Comunicación proactiva en cada fase: actualizaciones cada 48-72h vía email/WhatsApp, acceso a portal de cliente con tracking en tiempo real, fotos y vídeos del vehículo en cada milestone, y gestor dedicado disponible en horario laboral (respuesta <24h). Transparencia total del proceso.",
      },
      {
        q: "¿Ofrecéis servicio post-importación?",
        a: "Sí, incluye: asesoramiento en transferencia de seguro, recomendación de talleres oficiales en tu zona, soporte para reclamaciones de garantía, y servicio de ITV pre-inspección (opcional). Además, acceso a nuestra red de proveedores con descuentos en accesorios y mantenimiento.",
      },
      {
        q: "¿Trabajáis con empresas y concesionarios?",
        a: "Sí, ofrecemos servicio B2B para concesionarios multimarca, empresas de renting/leasing, y flotas corporativas. Condiciones especiales: comisiones reducidas por volumen, financiación de stock, y servicio de sourcing continuo. Consulta nuestro programa TT-Pro para profesionales.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty">
              Respuestas claras y detalladas sobre el proceso de importación de vehículos premium de Alemania a España.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quick Navigation */}
            <div className="bg-secondary/30 rounded-lg p-6 mb-12">
              <h2 className="font-semibold text-lg mb-4">Ir a sección:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {faqCategories.map((cat, idx) => (
                  <a key={idx} href={`#category-${idx}`} className="text-sm text-primary hover:underline">
                    {cat.category}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-12">
              {faqCategories.map((category, catIdx) => (
                <div key={catIdx} id={`category-${catIdx}`}>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, qIdx) => (
                      <AccordionItem
                        key={qIdx}
                        value={`${catIdx}-${qIdx}`}
                        className="border border-border rounded-lg px-6 bg-card"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6">
                          <span className="font-semibold text-base md:text-lg pr-4 text-pretty">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6 text-pretty leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-16 bg-secondary rounded-lg p-8 md:p-12 text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">¿No encuentras tu respuesta?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                Nuestro equipo está disponible para resolver cualquier duda específica sobre tu caso. Respuesta
                garantizada en menos de 24 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contactar con un Experto
                </Link>
                <Link
                  href="/calculadoras"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Calcular mi Ahorro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap((cat) =>
              cat.questions.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            ),
          }),
        }}
      />
    </div>
  )
}
