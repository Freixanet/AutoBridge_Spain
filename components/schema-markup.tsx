export function HomePageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "AutoBridge",
    description:
      "Broker especializado en importación de vehículos premium y eléctricos desde Alemania a España con protección legal completa",
    url: "https://autobridge.es",
    telephone: "+34XXXXXXXXX",
    email: "info@autobridge.es",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    priceRange: "€€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Importación de Vehículos",
    provider: {
      "@type": "Organization",
      name: "AutoBridge",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Importación",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AutoBridge - Servicio de Intermediación",
            description: "Búsqueda, inspección, gestión de escrow y matriculación",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AutoBridge Logistics - Servicio Logístico",
            description: "Transporte internacional con seguro CMR completo",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto puedo ahorrar importando desde Alemania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El ahorro medio es de €5,000-€8,000 en vehículos premium y eléctricos, representando un 7-10% de ahorro vs. comprar en España. El ahorro exacto depende del modelo específico y las condiciones del mercado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda el proceso completo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El proceso completo desde la consulta inicial hasta la entrega del vehículo matriculado tarda entre 12-18 días laborables. Esto incluye búsqueda, inspección, transporte y matriculación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué protección legal tengo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ofrecemos protección legal completa: inspección independiente certificada (DEKRA/TÜV/GTÜ), pago en garantía (escrow), seguro CMR con cobertura ICC(A) + SRCC, y cumplimiento VERI*FACTU. Tu dinero está protegido hasta la entrega conforme.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los costes totales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los costes incluyen: precio del vehículo en Alemania, fee AutoBridge (3%), transporte (€800-1200), inspección (€250), matriculación (€450), seguro CMR (€150). Todo se detalla en tu auditoría personalizada gratuita.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo Importar un Vehículo desde Alemania a España",
    description: "Guía paso a paso del proceso de importación de vehículos premium desde Alemania",
    totalTime: "P18D",
    step: [
      {
        "@type": "HowToStep",
        name: "Consulta Inicial",
        text: "Solicita tu auditoría gratuita indicando el vehículo que buscas. Recibirás un análisis detallado en 24h.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Búsqueda Activa",
        text: "Localizamos el vehículo perfecto en el mercado alemán y verificamos su historial.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Inspección Independiente",
        text: "DEKRA, TÜV o GTÜ inspeccionan el vehículo con más de 150 puntos de control.",
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: "Pago Seguro",
        text: "Tu dinero se deposita en cuenta escrow hasta la entrega conforme del vehículo.",
        position: 4,
      },
      {
        "@type": "HowToStep",
        name: "Transporte Internacional",
        text: "Transporte asegurado con CMR desde Alemania hasta tu ubicación en España.",
        position: 5,
      },
      {
        "@type": "HowToStep",
        name: "Gestión Aduanera",
        text: "Nos encargamos de toda la documentación DUA y liquidación de impuestos.",
        position: 6,
      },
      {
        "@type": "HowToStep",
        name: "Matriculación",
        text: "Matriculamos el vehículo a tu nombre en la DGT con ITV de importación.",
        position: 7,
      },
      {
        "@type": "HowToStep",
        name: "Entrega Final",
        text: "Recibe tu vehículo matriculado con toda la documentación en perfecto estado.",
        position: 8,
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
