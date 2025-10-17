import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { AnalyticsWrapper } from "@/components/analytics-wrapper"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Importación Premium de Coches Alemanes | AutoBridge",
  description:
    "Broker especializado en importación de vehículos premium y eléctricos desde Alemania a España. Inspecciones independientes, pagos en garantía y transparencia total.",
  generator: "v0.app",
  keywords: [
    "importación coches alemania",
    "coches premium",
    "vehículos eléctricos",
    "broker automóvil",
    "inspección independiente",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <AnalyticsWrapper />
      </head>
      <body className={`font-sans antialiased`}>
        <Navigation />
        <main className="pt-16">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
