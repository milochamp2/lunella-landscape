interface LogoProps {
  size?: number
  className?: string
  dark?: boolean
  ring?: boolean
}

export function Logo({ size = 48, className = '', dark = false, ring = false }: LogoProps) {
  const color = dark ? '#ffffff' : '#0a0a0a'

  if (ring) {
    // Circular badge variant — for header use
    const diameter = size
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={diameter}
        height={diameter}
        viewBox="0 0 200 200"
        role="img"
        aria-label="Lunella Landscapes"
        className={className}
      >
        {/* Circle ring */}
        <circle
          cx="100"
          cy="100"
          r="94"
          fill={dark ? 'transparent' : color}
          stroke={dark ? color : '#ffffff'}
          strokeWidth="2.5"
        />

        {/* Lunella */}
        <text
          x="100"
          y="108"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-montserrat), system-ui, sans-serif"
          fontSize="56"
          fontWeight="700"
          fill={dark ? color : '#ffffff'}
        >
          Lunella
        </text>

        {/* Rule */}
        <line x1="38" y1="130" x2="162" y2="130" stroke={dark ? color : '#ffffff'} strokeWidth="0.75" opacity="0.5" />

        {/* LANDSCAPES */}
        <text
          x="100"
          y="147"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-poppins), system-ui, sans-serif"
          fontSize="10"
          fontWeight="500"
          fill={dark ? color : '#ffffff'}
          letterSpacing="5"
        >
          LANDSCAPES
        </text>
      </svg>
    )
  }

  // Wordmark variant (no ring)
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
