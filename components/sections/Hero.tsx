import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DotGrid } from "@/components/decorations/DotGrid"
import { Confetti } from "@/components/decorations/Confetti"
import { Squiggle } from "@/components/decorations/Squiggle"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 pt-32">
      {/* Massive yellow circle behind text */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-tertiary border-2 border-foreground opacity-80 pointer-events-none" />

      {/* Dot grid behind image area */}
      <DotGrid className="top-32 right-0 w-[500px] h-[500px]" />

      <Confetti />

      <div className="container relative max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="space-y-6">
            <div className="w-24 h-24 rounded-full bg-accent border-[3px] border-foreground shadow-pop flex items-center justify-center rotate-[-8deg] hover:rotate-0 transition-transform duration-300 ease-bounce-out">
              <span className="font-heading text-[10px] font-extrabold text-white uppercase text-center leading-tight">
                NEW<br />DESIGN<br />SYSTEM
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
              Design yang{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Bikin Senyum</span>
                <Squiggle className="absolute -bottom-2 left-0 w-full" color="#F472B6" />
              </span>
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-md">
                Pin & stiker unik untuk bikin laptop, tas, botol, dan barang favoritmu jadi lebih personal.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#pricing">
                <Button variant="primary" size="lg">
                  Ayo Beli Sekarang
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Image side with blob mask */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-blob bg-accent border-2 border-foreground shadow-pop" />
              <div className="absolute inset-4 rounded-blob bg-white border-2 border-foreground overflow-hidden">
                <img
                  src="/pinsta.jpeg"
                  alt="Hero illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}