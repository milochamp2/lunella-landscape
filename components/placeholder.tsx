const ratioMap: Record<string, string> = {
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
  '2/1': 'aspect-[2/1]',
}

interface PlaceholderProps {
  className?: string
  ratio?: keyof typeof ratioMap
  label?: string
}

export function Placeholder({ className = '', ratio = '4/3', label }: PlaceholderProps) {
  return (
    <div className={`image-frame ${ratioMap[ratio] ?? 'aspect-[4/3]'} ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sand">
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0.75}
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        {label && <span className="eyebrow text-sand">{label}</span>}
      </div>
    </div>
  )
}
