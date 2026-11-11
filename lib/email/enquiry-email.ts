/**
 * Branded "new enquiry" email sent to the Lunella inbox when the contact form is submitted.
 *
 * Email clients ignore most modern CSS, so this uses table layout + inline styles.
 * Colours mirror tailwind.config.ts (ink / bone / stone / slate / sand).
 */

const SITE_URL = 'https://www.lunellalandscapes.com.au'
const LOGO_URL = `${SITE_URL}/lunella2ndlogo.png`

const c = {
  ink: '#0a0a0a',
  paper: '#ffffff',
  bone: '#f6f4f1',
  stone: '#9e9992',
  slate: '#4a4845',
  sand: '#c8c4bc',
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

function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Melbourne',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(d)
}

function detailRow(label: string, valueHtml: string, last = false): string {
  return `
    <tr>
      <td style="padding:16px 0;${last ? '' : `border-bottom:1px solid ${c.sand};`}width:130px;vertical-align:top;font-family:${display};font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${c.stone};">
        ${label}
      </td>
      <td style="padding:16px 0;${last ? '' : `border-bottom:1px solid ${c.sand};`}vertical-align:top;font-family:${body};font-size:15px;line-height:22px;color:${c.ink};">
        ${valueHtml}
      </td>
    </tr>`
}

export function enquiryEmailSubject({ name, service }: EnquiryEmailData): string {
  return service ? `New enquiry — ${name} · ${service}` : `New enquiry — ${name}`
}

export function enquiryEmailText(data: EnquiryEmailData): string {
  const { name, email, phone, service, message } = data
  return [
    'LUNELLA LANDSCAPES — NEW ENQUIRY',
    formatDate(data.receivedAt ?? new Date()),
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
  const firstName = name.trim().split(/\s+/)[0] ?? name
  const received = formatDate(data.receivedAt ?? new Date())

  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    `Re: Your enquiry with Lunella Landscapes`,
  )}`
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : ''

  const linkStyle = `color:${c.ink};text-decoration:underline;text-underline-offset:3px;`

  const rows = [
    detailRow('Name', esc(name)),
    detailRow('Email', `<a href="mailto:${esc(email)}" style="${linkStyle}">${esc(email)}</a>`),
    phone ? detailRow('Phone', `<a href="${esc(telHref)}" style="${linkStyle}">${esc(phone)}</a>`) : '',
    detailRow('Service', service ? esc(service) : `<span style="color:${c.stone};">Not specified</span>`, true),
  ].join('')

  const messageHtml = esc(message).replace(/\r?\n/g, '<br>')
  const preheader = `${name}${service ? ` · ${service}` : ''} — ${message.slice(0, 90)}`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>New enquiry — Lunella Landscapes</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Poppins:wght@400;500&display=swap" rel="stylesheet">
  <style>
    @media (max-width: 620px) {
      .container { width: 100% !important; }
      .px { padding-left: 24px !important; padding-right: 24px !important; }
      .h1 { font-size: 26px !important; line-height: 32px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${c.bone};-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${c.bone};">${esc(preheader)}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${c.bone};">
    <tr>
      <td align="center" style="padding:40px 12px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:${c.paper};">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#000000;padding:36px 24px 32px;"><!-- pure black to match the logo PNG's background -->
              <a href="${SITE_URL}" style="text-decoration:none;">
                <img src="${LOGO_URL}" width="96" height="96" alt="Lunella Landscapes" style="display:block;width:96px;height:96px;border:0;">
              </a>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td class="px" style="padding:48px 48px 8px;">
              <p style="margin:0 0 16px;font-family:${display};font-size:10px;letter-spacing:3px;text-transform:uppercase;color:${c.stone};">
                New Enquiry
              </p>
              <h1 class="h1" style="margin:0 0 12px;font-family:${display};font-weight:600;font-size:30px;line-height:36px;color:${c.ink};">
                ${esc(name)}
              </h1>
              <p style="margin:0;font-family:${body};font-size:13px;line-height:20px;color:${c.slate};">
                Received ${esc(received)}
              </p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td class="px" style="padding:32px 48px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${c.ink};">
                ${rows}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td class="px" style="padding:32px 48px 8px;">
              <p style="margin:0 0 14px;font-family:${display};font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${c.stone};">
                Project Details
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:${c.bone};border-left:2px solid ${c.ink};padding:22px 24px;font-family:${body};font-size:15px;line-height:25px;color:${c.ink};">
                    ${messageHtml}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="px" style="padding:36px 48px 48px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:${c.ink};">
                    <a href="${replyHref}" style="display:inline-block;padding:16px 32px;font-family:${display};font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:${c.paper};text-decoration:none;">
                      Reply to ${esc(firstName)}
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 0;font-family:${body};font-size:12px;line-height:18px;color:${c.stone};">
                Or simply hit reply — it goes straight to ${esc(email)}.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="px" style="background-color:${c.ink};padding:28px 48px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-family:${display};font-size:10px;letter-spacing:3px;text-transform:uppercase;color:${c.paper};">
                    Lunella Landscapes
                  </td>
                  <td align="right" style="font-family:${body};font-size:11px;">
                    <a href="${SITE_URL}" style="color:${c.sand};text-decoration:none;">lunellalandscapes.com.au</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <p style="margin:20px 0 0;font-family:${body};font-size:11px;line-height:16px;color:${c.stone};text-align:center;">
          Sent from the enquiry form on lunellalandscapes.com.au
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`
}
