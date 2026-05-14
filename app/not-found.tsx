import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center bg-bone">
      <div className="site-container py-32 text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-display text-5xl md:text-6xl text-ink mb-6">Page not found</h1>
        <p className="text-stone text-sm mb-10 max-w-xs mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
