import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "pink" | "yellow" | "mint" | "violet" | "pin"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-foreground text-white rounded-full px-3 py-1",
    pink: "bg-secondary text-foreground rounded-full px-3 py-1",
    yellow: "bg-tertiary text-foreground rounded-full px-3 py-1",
    mint: "bg-quaternary text-foreground rounded-full px-3 py-1",
    violet: "bg-accent text-white rounded-full px-3 py-1",
    // Pin badge — lingkaran dengan shadow tebal
    pin: "bg-accent text-white rounded-full w-24 h-24 flex items-center justify-center text-center leading-tight border-[3px] border-foreground shadow-[4px_4px_0px_0px_#1E293B] rotate-[-8deg] hover:rotate-0 transition-transform duration-300 ease-bounce-out",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center font-heading text-xs font-bold uppercase tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }