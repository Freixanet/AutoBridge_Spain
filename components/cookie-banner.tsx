"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    // Initialize analytics here if needed
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      })
    }
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
    // Disable analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      })
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground mb-2">
              <strong>Utilizamos cookies</strong> para mejorar tu experiencia, analizar el tráfico y personalizar el
              contenido.
            </p>
            <p className="text-xs text-muted-foreground">
              Al hacer clic en "Aceptar", aceptas el uso de cookies según nuestra{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Política de Cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={rejectCookies} className="whitespace-nowrap bg-transparent">
              Rechazar
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
            >
              Aceptar Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
