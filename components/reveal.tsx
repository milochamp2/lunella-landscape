'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.65,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  const d = 26
  const hidden = reduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === 'up' ? d : direction === 'down' ? -d : 0,
        x: direction === 'left' ? d : direction === 'right' ? -d : 0,
      }
  const visible = { opacity: 1, y: 0, x: 0 }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
