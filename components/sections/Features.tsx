import { Zap, Heart, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Squiggle } from "@/components/decorations/Squiggle"

const features = [
  {
    icon: Zap,
    title: "Cepat & Ringan",
    description: "Komponen dioptimalkan untuk performa tanpa mengorbankan estetika.",
    color: "bg-accent",
    shadow: "violet" as const,
    rotate: "-rotate-3",
  },
  {
    icon: Heart,
    title: "Aksesibel",
    description: "Kontras warna AAA, fokus state jelas, dan menghormati prefers-reduced-motion.",
    color: "bg-secondary",
    shadow: "pink" as const,
    rotate: "rotate-2",
  },
  {
    icon: Star,
    title: "Fleksibel",
    description: "Design token terpusat memudahkan kustomisasi dan rebranding.",
    color: "bg-tertiary",
    shadow: "yellow" as const,
    rotate: "-rotate-2",
  },
]

export function Features() {
  return (
    <section className="relative py-24 bg-muted overflow-hidden">
      {/* Dekorasi titik-titik */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-dot-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Blob warna di background */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-accent/10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-secondary/10 pointer-events-none" />

      {/* Dekorasi bentuk primitif */}
      <div className="absolute top-20 right-[15%] w-6 h-6 rounded-full bg-secondary border-2 border-foreground rotate-12 pointer-events-none" />
      <div className="absolute bottom-24 left-[10%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-quaternary pointer-events-none" />

      {/* Confetti kecil */}
      <div className="absolute top-32 left-[20%] w-2 h-2 rounded-full bg-accent pointer-events-none" />
      <div className="absolute top-48 right-[25%] w-2 h-2 rotate-45 bg-tertiary pointer-events-none" />
      <div className="absolute bottom-32 left-[30%] w-3 h-3 rounded-full bg-secondary border border-foreground pointer-events-none" />

      <div className="container relative max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <Badge
            variant="yellow"
            className="shadow-pop rotate-[-3deg] inline-block"
          >
            ✨ Kenapa Kami
          </Badge>
          <div className="relative inline-block">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold">
              Kenapa Playful Geometric?
            </h2>
            <Squiggle
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48"
              color="#F472B6"
            />
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto pt-2">
            Tiga alasan kenapa design system ini cocok buat produk digital lo.
          </p>
        </div>

        {/* Cards dengan dashed line connector */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Dashed line connector (desktop only) */}
          <div className="hidden md:flex absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 z-0 items-center justify-between pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-foreground/30" />
            <span className="flex-1 border-t-2 border-dashed border-foreground/30 mx-2" />
            <span className="w-2 h-2 rounded-full bg-foreground/30" />
          </div>

          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Card
                key={i}
                shadowColor={feature.shadow}
                className={`group relative pt-12 z-10 cursor-pointer
                  transition-all duration-300 ease-bounce-out
                  hover:rotate-0 hover:-translate-y-2 hover:scale-[1.02]
                  ${feature.rotate}
                `}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Floating icon circle */}
                <div
                  className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full ${feature.color} border-2 border-foreground flex items-center justify-center shadow-pop transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                </div>

                {/* Nomor urut besar sebagai watermark */}
                <span className="absolute top-2 right-4 font-heading text-6xl font-black text-foreground/[0.08] leading-none select-none pointer-events-none">
                  0{i + 1}
                </span>

                <CardHeader className="text-center pt-4 relative">
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Aksen garis bawah saat hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}