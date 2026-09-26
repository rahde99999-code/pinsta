import { Hero } from "@/components/sections/Hero"
import { RandomPhoto } from "@/components/decorations/RandomPhoto"
import { Features } from "@/components/sections/Features"
import { Pricing } from "@/components/sections/Pricing"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <RandomPhoto />
      <Pricing />
      <Footer />
    </main>
  )
}