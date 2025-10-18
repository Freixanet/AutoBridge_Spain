import { Shield, FileCheck, Lock, Award, TrendingUp, Users } from "lucide-react"

export function TrustBar() {
  const trustItems = [
    {
      icon: Shield,
      text: "Inspección DEKRA/TÜV",
      subtext: "Certificada",
    },
    {
      icon: Lock,
      text: "Pago Escrow",
      subtext: "100% Seguro",
    },
    {
      icon: FileCheck,
      text: "Seguro CMR",
      subtext: "Transporte Cubierto",
    },
    {
      icon: Award,
      text: "VERI*FACTU",
      subtext: "Compliant",
    },
    {
      icon: TrendingUp,
      text: "€6.8K Ahorro",
      subtext: "Promedio",
    },
    {
      icon: Users,
      text: "150+ Clientes",
      subtext: "Satisfechos",
    },
  ]

  return (
    <section className="bg-white border-b border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-[#10b981]/10 flex items-center justify-center mb-2">
                  <Icon className="h-6 w-6 text-[#10b981]" />
                </div>
                <p className="font-semibold text-[#0a2463] text-sm">{item.text}</p>
                <p className="text-xs text-gray-600">{item.subtext}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
