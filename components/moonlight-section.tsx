'use client'

import Image from 'next/image'
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
  const raf = useRef<number | undefined>(undefined)

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
      for (let i = 0; i < 8; i++) {
        const life = 140 + Math.random() * 80
        particles.current.push({
          x,
          y,
          radius: 2 + Math.random() * 3.5,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.4,
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
        p.vy += 0.015
        const t = p.life / p.maxLife
        const alpha = Math.pow(t, 0.4) * 0.9
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.shadowBlur = 16
        ctx.shadowColor = `hsl(${p.hue}, 100%, 80%)`
        ctx.fillStyle = `hsl(${p.hue}, 100%, 93%)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * Math.pow(t, 0.3), 0, Math.PI * 2)
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
      {/* Background image */}
      <Image
        src="/moongardenpng.png"
        alt=""
        fill
        className="object-cover object-center opacity-85"
        sizes="100vw"
        aria-hidden
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-ink/25" />
      {/* Shimmer canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: 'screen' }}
      />
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </section>
  )
}
