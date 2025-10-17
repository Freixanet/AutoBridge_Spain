"use client"

import { MessageCircle } from "lucide-react"
import { trackCTAClick } from "@/lib/analytics"

export function WhatsAppButton() {
  const phoneNumber = "+34XXXXXXXXX" // Replace with actual phone number
  const message = "Hola! Me interesa importar un vehículo desde Alemania. ¿Podemos hablar?"

  const handleClick = () => {
    trackCTAClick("whatsapp_floating", "WhatsApp Contact")
  }

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¿Hablamos por WhatsApp?
      </span>
    </a>
  )
}
