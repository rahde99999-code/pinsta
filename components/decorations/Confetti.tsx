import { cn } from "@/lib/utils"

interface ConfettiProps {
  className?: string
}

export function Confetti({ className }: ConfettiProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Triangle */}
      <div className="absolute top-[15%] left-[8%] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-tertiary rotate-12" />
      {/* Circle */}
      <div className="absolute top-[70%] right-[10%] w-4 h-4 rounded-full bg-secondary" />
      {/* Square */}
      <div className="absolute top-[30%] right-[20%] w-3 h-3 bg-quaternary rotate-45" />
      {/* Small circle */}
      <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full bg-accent" />
      {/* Triangle 2 */}
      <div className="absolute top-[60%] left-[3%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-secondary -rotate-12" />
    </div>
  )
}