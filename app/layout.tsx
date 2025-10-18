import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { AnalyticsWrapper } from "@/components/analytics-wrapper"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AutoBridge | Importa tu Coche desde Alemania - Ahorra hasta €8.000",
  description:
    "Importación profesional de vehículos desde Alemania a España. €2.200 honorarios fijos. Inspección DEKRA, pago escrow, seguro CMR incluido.",
  generator: "v0.app",
  keywords: [
    "importar coche alemania",
    "importación vehículos alemania españa",
    "broker coches alemania",
    "comprar coche alemania",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <AnalyticsWrapper />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
        <CookieBanner />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
