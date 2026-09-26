import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b-2 border-foreground">
      <div className="container max-w-6xl flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/pinsta.jpeg"
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-foreground shadow-pop"
          />
          <span className="font-heading font-extrabold text-lg hidden sm:block">
            PINSTA
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 font-body text-sm font-medium">
          <Link href="#features" className="hover:text-accent transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-accent transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}