import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    name: "Pin 4,4cm",
    price: "Rp 8.000",
    description: "Pin custom dengan desain karakter favoritmu.",
    badge: "Best Seller",
    badgeColor: "yellow" as const,
    featured: true,
    image: "/pin1.jpeg",
    bgColor: "bg-tertiary",
  },
  {
    name: "Pin 5,8cm",
    price: "Rp 10.000",
    description: "Pin logo bisnis atau komunitas lo, tajam dan tahan lama.",
    badge: "New",
    badgeColor: "violet" as const,
    featured: false,
    image: "/pin2.jpeg",
    bgColor: "bg-accent",
  },
  {
    name: "Pin Custom 4,4cm",
    price: "Rp 8.000",
    description: "Paket isi 5 stiker random, lebih hemat dan seru.",
    badge: "Hemat",
    badgeColor: "mint" as const,
    featured: false,
    image: "/pin-custom4.4.jpeg",
    bgColor: "bg-quaternary",
  },
  {
    name: "Pin Custom 5,8cm",
    price: "Rp 10.000",
    description: "Paket isi 5 stiker random, lebih hemat dan seru.",
    badge: "Hemat",
    badgeColor: "mint" as const,
    featured: false,
    image: "/pin-custom.jpeg",
    bgColor: "bg-quaternary",
  },
  {
    name: "Stiker Bontak",
    price: "Rp 2.000/pcs",
    description: "Stiker anti air, cocok buat laptop, botol, atau motor.",
    badge: "Populer",
    badgeColor: "pink" as const,
    featured: false,
    image: "/sticker-bontak.jpeg",
    bgColor: "bg-secondary",
  },
  {
    name: "Stiker Spiderman",
    price: "Rp 5.000",
    description: "Paket isi 5 stiker random, lebih hemat dan seru.",
    badge: "Hemat",
    badgeColor: "mint" as const,
    featured: false,
    image: "/sticker-spiderman.jpeg",
    bgColor: "bg-quaternary",
  },
  {
    name: "Custom Stiker Like Spiderman",
    price: "Rp 5.000",
    description: "Paket isi 5 stiker random, lebih hemat dan seru.",
    badge: "Hemat",
    badgeColor: "mint" as const,
    featured: false,
    image: "/sticker-spiderman.jpeg",
    bgColor: "bg-quaternary",
  },
  {
    name: "Stiker Custom Like Bontak",
    price: "Rp 2.000/pcs",
    description: "Stiker anti air, cocok buat laptop, botol, atau motor.",
    badge: "Populer",
    badgeColor: "pink" as const,
    featured: false,
    image: "/sticker-bontak.jpeg",
    bgColor: "bg-secondary",
  },
]


function ProductCard({ product, i }: { product: typeof products[0]; i: number }) {
  return (
    <Card
      key={i}
      shadowColor={product.featured ? "yellow" : "default"}
      className={`relative flex flex-col ${
        product.featured ? "border-accent lg:-translate-y-2" : ""
      }`}
    >
      {/* Badge di pojok */}
      <div className="absolute -top-3 -right-3 rotate-[15deg] z-10">
        <Badge variant={product.badgeColor} className="shadow-pop">
          {product.badge}
        </Badge>
      </div>

      {/* Gambar produk */}
      <div
        className={`relative w-full aspect-square rounded-md ${product.bgColor} border-2 border-foreground overflow-hidden mb-4`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <CardHeader className="space-y-1">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <div className="font-heading text-2xl font-extrabold text-accent">
          {product.price}
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        <p className="font-body text-sm text-muted-foreground mb-4">
          {product.description}
        </p>

        <a
          href={`https://wa.me/6285943551536?text=Halo, saya mau pesan ${product.name} (${product.price})`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            variant={product.featured ? "primary" : "secondary"}
            className="w-full"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4" />
            Pesan via WA
          </Button>
        </a>
      </CardContent>
    </Card>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">

      {/* Dekorasi: Blob di kiri bawah */}
      <div className="absolute bottom-20 left-0 w-48 h-48 rounded-blob bg-quaternary border-2 border-foreground opacity-30 pointer-events-none" />

      {/* ===== SECTION 1: KATALOG UTAMA (8 PRODUK = 2 BARIS) ===== */}
      <div className="container relative max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="violet" className="shadow-pop">
            Katalog Produk
          </Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold">
            Pin & Stiker Keren
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Bikin koleksimu makin kece dengan pin dan stiker custom dari kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}