interface LogoProps {
  size?: number
  className?: string
  /** Swap fill/stroke for use on dark backgrounds where the circle disappears */
  variant?: 'dark-bg' | 'light-bg'
}

export function Logo({ size = 48, className = '', variant = 'light-bg' }: LogoProps) {
  // On dark bg (#0a0a0a) the fill blends away — the white ring + white text floats.
  // On light bg the black circle badge reads as a stamp/seal.
  const fill = variant === 'dark-bg' ? 'transparent' : '#0a0a0a'
  const stroke = '#ffffff'
  const textFill = '#ffffff'

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
      <circle cx="100" cy="100" r="95" fill={fill} stroke={stroke} strokeWidth="3" />

      {/* "Lunella" — large display serif */}
      <text
        x="100"
        y="108"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize="60"
        fontWeight="600"
        fill={textFill}
      >
        Lunella
      </text>

      {/* Decorative rule above LANDSCAPES */}
      <line x1="42" y1="128" x2="158" y2="128" stroke={textFill} strokeWidth="0.75" opacity="0.5" />

      {/* "LANDSCAPES" — spaced caps */}
      <text
        x="100"
        y="143"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-poppins), system-ui, sans-serif"
        fontSize="11"
        fontWeight="500"
        fill={textFill}
        letterSpacing="5"
      >
        LANDSCAPES
      </text>
    </svg>
  )
}
