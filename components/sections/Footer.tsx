import { Marquee } from "@/components/decorations/Marquee"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Instagram, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = [
  {
    title: "Belanja",
    links: [
      { label: "Semua Produk", href: "#pricing" },
      { label: "Pin", href: "#pricing" },
      { label: "Stiker", href: "#pricing" },
      { label: "Custom", href: "#pricing" },
      { label: "Best Seller", href: "#pricing" },
    ],
  },
  {
    title: "Toko",
    links: [
      { label: "Bali, Indonesia", href: "#" },
      { label: "Senin–Sabtu, 09.00–21.00", href: "#" },
      { label: "0859-4355-1536", href: "https://wa.me/6285943551536" },
      { label: "halo@pinsta.id", href: "mailto:halo@pinsta.id" },
    ],
  },
  {
    title: "Kebijakan",
    links: [
      { label: "Pengiriman", href: "#" },
      { label: "Pembayaran", href: "#" },
      { label: "Garansi", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "WhatsApp", href: "https://wa.me/6281234567890" },
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "Shopee", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground">
      <Marquee
        items={["CEKIKIAN", "AIR MENGUAP", "Ikan THREE", "ARUH", "2026"]}
      />

      {/* ===== Newsletter / CTA ===== */}
      <div className="relative bg-tertiary border-b-2 border-foreground overflow-hidden">
        {/* Dekorasi dot grid */}
        <div className="absolute top-6 left-8 w-24 h-24 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute bottom-6 right-8 w-32 h-32 bg-dot-grid opacity-40 pointer-events-none" />

        <div className="container relative max-w-3xl py-16 text-center space-y-6">
          <Badge variant="violet" className="shadow-pop">
            ✨ Join the Club
          </Badge>

          <h3 className="font-heading text-3xl md:text-4xl font-extrabold">
            Dapatkan promo & produk baru
          </h3>

          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Chat langsung via WhatsApp buat konsultasi custom atau tanya stok terbaru.
          </p>

          <a
            href="https://wa.me/6285943551536?text=Halo, saya mau tanya soal produk PINSTA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="primary" size="lg" className="shadow-pop">
              <ShoppingCart className="h-5 w-5" />
              Chat via WhatsApp
            </Button>
          </a>
        </div>
      </div>

      {/* ===== 4 Kolom Link ===== */}
      <div className="container max-w-6xl py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="font-heading text-lg font-extrabold uppercase tracking-wide">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-body text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Kontak cepat + sosial */}
        <div className="mt-12 pt-8 border-t-2 border-dashed border-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 0812-3456-7890
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> halo@pinsta.id
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Bali, Indonesia  
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center shadow-pop hover:bg-accent hover:text-white transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/6285943551536"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center shadow-pop hover:bg-accent hover:text-white transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}