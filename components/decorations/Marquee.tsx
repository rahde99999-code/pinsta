import { cn } from "@/lib/utils"

interface MarqueeProps {
  items: string[]
  className?: string
}

export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden border-y-2 border-foreground bg-tertiary py-4", className)}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 font-heading text-xl font-bold text-foreground"
          >
            {item} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}