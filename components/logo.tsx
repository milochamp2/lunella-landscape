interface LogoProps {
  size?: number
  className?: string
  dark?: boolean
  ring?: boolean
}

export function Logo({ size = 48, className = '', dark = false, ring = false }: LogoProps) {
  const color = dark ? '#ffffff' : '#0a0a0a'
  const bg = dark ? 'transparent' : '#0a0a0a'
  const textColor = dark ? '#0a0a0a' : '#ffffff'

  if (ring) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 200 200"
        role="img"
        aria-label="Lunella Landscapes"
        className={className}
      >
        {/* Filled circle */}
        <circle cx="100" cy="100" r="96" fill={bg} />

        {/* "Lunella" — large, bold, centred */}
        <text
          x="100"
          y="96"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Montserrat, Poppins, system-ui, sans-serif"
          fontSize="52"
          fontWeight="800"
          fill={textColor}
          letterSpacing="1"
        >
          Lunella
        </text>

        {/* Hairline rule */}
        <line x1="32" y1="118" x2="168" y2="118" stroke={textColor} strokeWidth="1" opacity="0.5" />

        {/* "LANDSCAPES" — spaced caps */}
        <text
          x="100"
          y="138"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Montserrat, Poppins, system-ui, sans-serif"
          fontSize="12"
          fontWeight="500"
          fill={textColor}
          letterSpacing="4"
          opacity="0.85"
        >
          LANDSCAPES
        </text>
      </svg>
    )
  }

  // Wordmark (no ring)
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
        y="38"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Montserrat, Poppins, system-ui, sans-serif"
        fontSize="46"
        fontWeight="800"
        letterSpacing="1"
        fill={color}
      >
        Lunella
      </text>

      <line x1="18" y1="58" x2="202" y2="58" stroke={color} strokeWidth="0.75" opacity="0.35" />

      <text
        x="110"
        y="70"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Montserrat, Poppins, system-ui, sans-serif"
        fontSize="10"
        fontWeight="500"
        fill={color}
        letterSpacing="5"
        opacity="0.7"
      >
        LANDSCAPES
      </text>
    </svg>
  )
}
