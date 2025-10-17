"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackFormSubmission } from "@/lib/analytics"
import { Mail, CheckCircle2, AlertCircle } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // For static GitHub Pages deployment, use mailto as a fallback
      // In production with a backend, replace this with your email service integration
      if (process.env.NEXT_PUBLIC_USE_STATIC_NEWSLETTER === 'true') {
        window.location.href = `mailto:info@autobridge.es?subject=Newsletter Subscription&body=Email: ${encodeURIComponent(email)}`
        setStatus("success")
        trackFormSubmission("newsletter", "subscriber")
        setEmail("")
        setTimeout(() => setStatus("idle"), 5000)
        return
      }

      // Original API route (for non-static deployments)
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("success")
        trackFormSubmission("newsletter", "subscriber")
        setEmail("")
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading" || status === "success"}
            className="pl-10 bg-background"
          />
        </div>
        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 whitespace-nowrap"
        >
          {status === "loading" ? "Enviando..." : status === "success" ? "¡Suscrito!" : "Suscribirse"}
        </Button>
      </form>

      {status === "success" && (
        <div className="flex items-center gap-2 mt-3 text-sm text-green-600">
          <CheckCircle2 className="h-4 w-4" />
          <span>¡Gracias! Revisa tu email para confirmar la suscripción.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 mt-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span>Error al suscribirse. Por favor, inténtalo de nuevo.</span>
        </div>
      )}
    </div>
  )
}
