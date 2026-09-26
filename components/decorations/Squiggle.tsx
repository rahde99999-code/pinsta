interface SquiggleProps {
  className?: string
  color?: string
}

export function Squiggle({ className = "", color = "#8B5CF6" }: SquiggleProps) {
  return (
    <svg
      className={className}
      width="120"
      height="12"
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6C2 6 8 1 14 6C20 11 26 1 32 6C38 11 44 1 50 6C56 11 62 1 68 6C74 11 80 1 86 6C92 11 98 1 104 6C110 11 116 1 118 6"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}