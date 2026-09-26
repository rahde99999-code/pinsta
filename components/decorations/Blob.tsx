import { cn } from "@/lib/utils"

interface BlobProps {
  className?: string
  color?: string
}

export function Blob({ className, color = "bg-tertiary" }: BlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-blob border-2 border-foreground pointer-events-none",
        color,
        className
      )}
    />
  )
}