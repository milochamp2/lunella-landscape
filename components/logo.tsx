interface LogoProps {
  size?: number
  className?: string
  dark?: boolean
}

export function Logo({ size = 48, className = '', dark = false }: LogoProps) {
  const color = dark ? '#ffffff' : '#0a0a0a'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * (220 / 75)}
      height={size}
      viewBox="0 0 220 75"
      role="img"
      aria-label="Lunella Landscapes"
      className={className}
    >
      <text
        x="110"
        y="42"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-montserrat), var(--font-poppins), system-ui, sans-serif"
        fontSize="42"
        fontWeight="700"
        letterSpacing="2"
        fill={color}
      >
        Lunella
      </text>

      <line x1="18" y1="58" x2="202" y2="58" stroke={color} strokeWidth="0.75" opacity="0.4" />

      <text
        x="110"
        y="68"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-poppins), system-ui, sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={color}
        letterSpacing="6"
      >
        LANDSCAPES
      </text>
    </svg>
  )
}
