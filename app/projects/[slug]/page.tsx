import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { ProjectGallery } from '@/components/project-gallery'
import { projects, getProject } from '@/lib/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} Project`,
    description: `Landscape project by Lunella Landscapes in ${project.location}.`,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const galleryImages = project.images.map((src) => ({
    src,
    alt: `${project.title} — Lunella Landscapes`,
  }))

  return (
    <>
      {/* ── Header ── */}
      <section className="section-pad bg-bone border-b border-sand">
        <div className="site-container">
          <Reveal>
            <Link
              href="/projects"
              className="eyebrow text-stone hover:text-ink transition-colors duration-200 inline-flex items-center gap-2 mb-8"
            >
              <span aria-hidden>←</span> All Projects
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-ink leading-tight mb-2">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-stone text-sm">{project.location}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone text-sm mt-1">{project.images.length} photos</p>
          </Reveal>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section-pad bg-paper">
        <div className="site-container">
          <ProjectGallery images={galleryImages} />
        </div>
      </section>

      {/* ── Nav ── */}
      <section className="py-12 bg-bone border-t border-sand">
        <div className="site-container flex items-center justify-between">
          <Link
            href="/projects"
            className="eyebrow text-stone hover:text-ink transition-colors duration-200 inline-flex items-center gap-2"
          >
            <span aria-hidden>←</span> All Projects
          </Link>
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
