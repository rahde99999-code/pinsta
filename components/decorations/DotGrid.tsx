import { cn } from "@/lib/utils"

interface DotGridProps {
  className?: string
}

export function DotGrid({ className }: DotGridProps) {
  return (
    <div
      className={cn(
        "absolute bg-dot-grid pointer-events-none opacity-60",
        className
      )}
    />
  )
}