import type { Metadata } from "next"
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"
import { Navbar } from "@/components/sections/Navbar"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Playful Geometric Design System",
  description: "Design system yang playful, tactile, dan penuh energi.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}