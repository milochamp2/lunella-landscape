import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/schema'
import { checkRateLimit } from '@/lib/rate-limit'
import {
  enquiryEmailHtml,
  enquiryEmailSubject,
  enquiryEmailText,
  type EnquiryEmailData,
} from '@/lib/email/enquiry-email'

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'anonymous'

  const { allowed, retryAfter } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429, headers: retryAfter ? { 'Retry-After': String(retryAfter) } : {} },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed.', details: result.error.flatten() },
      { status: 422 },
    )
  }

  const { name, email, phone, service, message, website } = result.data

  // Honeypot — silently accept without sending
  if (website) return NextResponse.json({ ok: true })

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const contactEmail = process.env.CONTACT_EMAIL ?? 'hello@lunellalandscapes.com.au'

  const serviceLabels: Record<string, string> = {
    design: 'Landscape Design',
    installation: 'Garden Installation',
    stonework: 'Stonework & Paving',
    planting: 'Planting Schemes',
    irrigation: 'Irrigation & Lighting',
    decking: 'Decking & Pergolas',
    concrete: 'Concrete — Pathways & Driveways',
    maintenance: 'Maintenance Program',
    other: 'Other / Not Sure',
  }

  const emailData: EnquiryEmailData = {
    name,
    email,
    phone: phone || undefined,
    service: service ? (serviceLabels[service] ?? service) : undefined,
    message,
    receivedAt: new Date(),
  }

  try {
    // Resend returns { error } rather than throwing on API failures
    const { error } = await resend.emails.send({
      from: 'Lunella Landscapes <noreply@lunellalandscapes.com.au>',
      to: [contactEmail],
      replyTo: email,
      subject: enquiryEmailSubject(emailData),
      html: enquiryEmailHtml(emailData),
      text: enquiryEmailText(emailData),
    })
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send your message. Please try again.' },
        { status: 500 },
      )
    }
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again.' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
