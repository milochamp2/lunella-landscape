'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  life: number
  maxLife: number
  hue: number
}

export function MoonlightSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const raf = useRef<number>()

  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const sync = () => {
      canvas.width = section.offsetWidth
      canvas.height = section.offsetHeight
    }
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(section)

    const spawn = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      for (let i = 0; i < 6; i++) {
        const life = 50 + Math.random() * 40
        particles.current.push({
          x,
          y,
          radius: 1.5 + Math.random() * 3,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5 - 0.8,
          life,
          maxLife: life,
          hue: 40 + Math.random() * 50,
        })
      }
    }

    section.addEventListener('mousemove', spawn)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.current = particles.current.filter(p => p.life > 0)
      for (const p of particles.current) {
        p.life--
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.04
        const t = p.life / p.maxLife
        ctx.save()
        ctx.globalAlpha = t * 0.85
        ctx.shadowBlur = 14
        ctx.shadowColor = `hsl(${p.hue}, 100%, 80%)`
        ctx.fillStyle = `hsl(${p.hue}, 100%, 92%)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * t, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
      raf.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      section.removeEventListener('mousemove', spawn)
      ro.disconnect()
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className={`relative ${className ?? ''}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: 'screen' }}
      />
      {children}
    </section>
  )
}
