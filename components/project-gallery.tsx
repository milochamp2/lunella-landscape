'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lightbox } from './lightbox'

interface ProjectGalleryProps {
  images: { src: string; alt: string }[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length))

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => open(i)}
            className="group relative w-full break-inside-avoid overflow-hidden block cursor-zoom-in"
            aria-label={`View full size: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-300 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
