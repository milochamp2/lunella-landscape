import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/schema'
import { checkRateLimit } from '@/lib/rate-limit'

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
  const contactEmail = process.env.CONTACT_EMAIL ?? 'hello@lunellalandscape.com.au'

  const serviceLabels: Record<string, string> = {
    design: 'Landscape Design',
    installation: 'Garden Installation',
    stonework: 'Stonework & Paving',
    planting: 'Planting Schemes',
    maintenance: 'Maintenance Program',
    other: 'Other / Not Sure',
  }

  const body_text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    service ? `Service: ${serviceLabels[service] ?? service}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    await resend.emails.send({
      from: 'Lunella Landscape <noreply@lunellalandscape.com.au>',
      to: [contactEmail],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: body_text,
    })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again.' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
