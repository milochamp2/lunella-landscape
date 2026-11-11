/**
 * Branded "new enquiry" email sent to the Lunella inbox when the contact form is submitted.
 *
 * Email clients ignore most modern CSS, so this uses table layout + inline styles.
 * Colours mirror tailwind.config.ts (ink / bone / stone / slate / sand).
 */

const SITE_URL = 'https://www.lunellalandscapes.com.au'
const LOGO_URL = `${SITE_URL}/lunella2ndlogo.png`

const c = {
  black: '#000000', // matches the logo PNG's background exactly
  ink: '#0a0a0a',
  paper: '#ffffff',
  bone: '#f6f4f1',
  stone: '#9e9992',
  slate: '#4a4845',
  sand: '#c8c4bc',
  hairline: '#e6e2dc',
  graphite: '#2a2a2a',
}

const display = "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif"
const body = "'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif"

export interface EnquiryEmailData {
  name: string
  email: string
  phone?: string
  service?: string // human-readable label
  message: string
  receivedAt?: Date
}

/** Escape user-supplied text so it can't inject markup into the email. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const MELB = 'Australia/Melbourne'

function formatLongDate(d: Date): string {
  return new Intl.DateTimeFormat('en-AU', {
    timeZone: MELB,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(d)
}

function formatShortDate(d: Date): string {
  const date = new Intl.DateTimeFormat('en-AU', {
    timeZone: MELB,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(d)
  const time = new Intl.DateTimeFormat('en-AU', {
    timeZone: MELB,
    hour: 'numeric',
    minute: '2-digit',
  }).format(d)
  return `${date} · ${time}`
}

/** Short reference like LL-261111-1423 (Melbourne date + time) for tracking in the inbox. */
function reference(d: Date): string {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-AU', {
      timeZone: MELB,
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(d)
      .map((p) => [p.type, p.value]),
  )
  return `LL-${parts.year}${parts.month}${parts.day}-${parts.hour}${parts.minute}`
}

function detailRow(label: string, valueHtml: string, last = false): string {
  const border = last ? '' : `border-bottom:1px solid ${c.hairline};`
  return `
    <tr>
      <td class="label-cell" style="padding:18px 0;${border}width:120px;vertical-align:top;font-family:${display};font-size:9px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:${c.stone};line-height:22px;">
        ${label}
      </td>
      <td style="padding:18px 0;${border}vertical-align:top;font-family:${body};font-size:15px;line-height:22px;color:${c.ink};">
        ${valueHtml}
      </td>
    </tr>`
}

function button(href: string, label: string, variant: 'solid' | 'outline'): string {
  const solid = variant === 'solid'
  return `
    <td style="padding:0 12px 12px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="background-color:${solid ? c.ink : c.paper};border:1px solid ${c.ink};">
            <a href="${href}" style="display:inline-block;padding:17px 34px;font-family:${display};font-size:10px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${solid ? c.paper : c.ink};text-decoration:none;">
              ${label}
            </a>
          </td>
        </tr>
      </table>
    </td>`
}

export function enquiryEmailSubject({ name, service }: EnquiryEmailData): string {
  return service ? `New enquiry — ${name} · ${service}` : `New enquiry — ${name}`
}

export function enquiryEmailText(data: EnquiryEmailData): string {
  const { name, email, phone, service, message } = data
  const at = data.receivedAt ?? new Date()
  return [
    'LUNELLA LANDSCAPES — NEW ENQUIRY',
    `Ref ${reference(at)} · ${formatLongDate(at)}`,
    '',
    `Name:    ${name}`,
    `Email:   ${email}`,
    phone ? `Phone:   ${phone}` : null,
    service ? `Service: ${service}` : null,
    '',
    'Message:',
    message,
    '',
    '—',
    'Reply to this email to respond directly to the client.',
  ]
    .filter((line) => line !== null)
    .join('\n')
}

export function enquiryEmailHtml(data: EnquiryEmailData): string {
  const { name, email, phone, service, message } = data
  const at = data.receivedAt ?? new Date()
  const firstName = name.trim().split(/\s+/)[0] ?? name

  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    'Re: Your enquiry with Lunella Landscapes',
  )}`
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : ''

  const linkStyle = `color:${c.ink};text-decoration:none;border-bottom:1px solid ${c.sand};`

  const rows = [
    detailRow('Email', `<a href="mailto:${esc(email)}" style="${linkStyle}">${esc(email)}</a>`),
    phone ? detailRow('Phone', `<a href="${esc(telHref)}" style="${linkStyle}">${esc(phone)}</a>`) : '',
    detailRow('Service', service ? esc(service) : `<span style="color:${c.stone};">Not specified</span>`),
    detailRow('Received', esc(formatLongDate(at)), true),
  ].join('')

  const messageHtml = esc(message).replace(/\r?\n/g, '<br>')
  const preheader = `${name}${service ? ` · ${service}` : ''} — ${message.slice(0, 90)}`

  const actions = [
    button(esc(replyHref), `Reply to ${esc(firstName)}`, 'solid'),
    phone ? button(esc(telHref), 'Call', 'outline') : '',
  ].join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>New enquiry — Lunella Landscapes</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Poppins:wght@300;400&display=swap" rel="stylesheet">
  <style>
    @media (max-width: 620px) {
      .container { width: 100% !important; }
      .px { padding-left: 28px !important; padding-right: 28px !important; }
      .hero { padding-top: 44px !important; }
      .h1 { font-size: 30px !important; line-height: 36px !important; }
      .label-cell { width: 92px !important; }
      .logo { width: 56px !important; height: 56px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${c.bone};-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${c.bone};">${esc(preheader)}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${c.bone};">
    <tr>
      <td align="center" style="padding:48px 12px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:${c.paper};">

          <!-- Header: logo left, enquiry meta right -->
          <tr>
            <td class="px" style="background-color:${c.black};padding:28px 48px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" style="width:72px;">
                    <a href="${SITE_URL}" style="text-decoration:none;">
                      <img class="logo" src="${LOGO_URL}" width="68" height="68" alt="Lunella Landscapes" style="display:block;width:68px;height:68px;border:0;">
                    </a>
                  </td>
                  <td valign="middle" align="right" style="font-family:${display};">
                    <p style="margin:0 0 6px;font-size:9px;font-weight:600;letter-spacing:3.5px;text-transform:uppercase;color:${c.paper};">
                      New Enquiry
                    </p>
                    <p style="margin:0;font-family:${body};font-size:11px;letter-spacing:0.5px;color:${c.stone};">
                      ${esc(formatShortDate(at))}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="px hero" style="padding:60px 48px 0;">
              <p style="margin:0 0 18px;font-family:${display};font-size:9px;font-weight:600;letter-spacing:3.5px;text-transform:uppercase;color:${c.stone};">
                ${service ? `${esc(service)}` : 'General Enquiry'}
              </p>
              <h1 class="h1" style="margin:0;font-family:${display};font-weight:500;font-size:38px;line-height:44px;letter-spacing:-0.5px;color:${c.ink};">
                ${esc(name)}
              </h1>
              <p style="margin:14px 0 0;font-family:${body};font-weight:300;font-size:15px;line-height:24px;color:${c.slate};">
                would like to talk about a project with Lunella.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;">
                <tr><td style="width:40px;height:2px;background-color:${c.ink};font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>

          <!-- Message (pull-quote) -->
          <tr>
            <td class="px" style="padding:44px 48px 0;">
              <p style="margin:0 0 20px;font-family:${display};font-size:9px;font-weight:600;letter-spacing:3.5px;text-transform:uppercase;color:${c.stone};">
                The Project
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:${c.bone};padding:30px 32px 32px;">
                    <p style="margin:0 0 4px;font-family:Georgia, 'Times New Roman', serif;font-size:48px;line-height:32px;color:${c.sand};">&ldquo;</p>
                    <p style="margin:0;font-family:${body};font-weight:300;font-size:16px;line-height:27px;color:${c.ink};">
                      ${messageHtml}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td class="px" style="padding:44px 48px 0;">
              <p style="margin:0 0 6px;font-family:${display};font-size:9px;font-weight:600;letter-spacing:3.5px;text-transform:uppercase;color:${c.stone};">
                Contact
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${rows}
              </table>
            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td class="px" style="padding:40px 48px 52px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>${actions}</tr>
              </table>
              <p style="margin:8px 0 0;font-family:${body};font-size:12px;line-height:18px;color:${c.stone};">
                Hitting reply on this email goes straight to ${esc(firstName)}.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="px" style="background-color:${c.black};padding:30px 48px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" style="font-family:${display};font-size:9px;font-weight:600;letter-spacing:3.5px;text-transform:uppercase;color:${c.paper};">
                    Lunella Landscapes
                    <span style="display:block;margin-top:6px;font-family:${body};font-weight:400;font-size:11px;letter-spacing:0.5px;text-transform:none;color:${c.stone};">Melbourne, Victoria</span>
                  </td>
                  <td valign="middle" align="right" style="font-family:${body};font-size:11px;letter-spacing:0.5px;">
                    <a href="${SITE_URL}" style="color:${c.sand};text-decoration:none;">lunellalandscapes.com.au</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <p style="margin:24px 0 0;font-family:${body};font-size:10px;letter-spacing:1px;line-height:16px;color:${c.stone};text-align:center;">
          REF ${reference(at)} &nbsp;·&nbsp; Sent from the enquiry form on lunellalandscapes.com.au
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`
}
