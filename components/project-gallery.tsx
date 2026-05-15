'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lightbox } from './lightbox'

interface ProjectGalleryProps {
  images: { src: string; alt: string }[]
}

function GalleryThumb({
  img,
  index,
  aspect,
  onOpen,
  sizes,
}: {
  img: { src: string; alt: string }
  index: number
  aspect: string
  onOpen: (i: number) => void
  sizes: string
}) {
  return (
    <button
      onClick={() => onOpen(index)}
      className={`group relative w-full overflow-hidden cursor-zoom-in block ${aspect}`}
      aria-label={`View photo ${index + 1}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
          aria-hidden
        >
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </div>
    </button>
  )
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length))

  const [hero, ...rest] = images

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Hero — full width */}
        {hero && (
          <GalleryThumb
            img={hero}
            index={0}
            aspect="aspect-[16/9] md:aspect-[21/9]"
            onOpen={open}
            sizes="100vw"
          />
        )}

        {/* Remaining — uniform 3-col grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {rest.map((img, i) => (
              <GalleryThumb
                key={img.src}
                img={img}
                index={i + 1}
                aspect="aspect-[4/3]"
                onOpen={open}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            ))}
          </div>
        )}
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
