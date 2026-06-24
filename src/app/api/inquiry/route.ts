import { NextResponse } from 'next/server'

const LABELS: Record<string, string> = {
  name: 'Name',
  phone: 'Telefon',
  email: 'E-Mail',
  city: 'Stadt',
  product: 'Produkt',
  type: 'Formular',
  kitchenStyle: 'Küchenstil',
  kitchenSize: 'Küchengrösse',
  budget: 'Budget',
  shape: 'Form',
  side1: 'Seite 1 (mm)',
  side2: 'Seite 2 (mm)',
  side3: 'Seite 3 (mm)',
  material: 'Material',
  comment: 'Kommentar',
  portfolioUrl: 'Portfolio URL',
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email } = body

    if (!name || (!phone && !email)) {
      return NextResponse.json({ error: 'Name und Telefon/E-Mail sind erforderlich' }, { status: 400 })
    }

    const subject = body.type ? `Neue Anfrage – ${body.type}` : 'Neue Beratungsanfrage'

    const rows = Object.entries(body)
      .filter(([k]) => k !== 'type' && typeof body[k] === 'string' && body[k].trim())
      .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#666;white-space:nowrap;vertical-align:top;font-size:14px"><strong>${LABELS[k] || k}:</strong></td><td style="padding:6px 0;font-size:14px">${escapeHtml(String(v))}</td></tr>`)
      .join('')

    const html = `<h2 style="margin:0 0 16px">${subject}</h2><table style="border-collapse:collapse;width:100%">${rows}</table>`

    if (process.env.SMTP_HOST) {
      const { sendEmail } = await import('@/lib/email')
      await sendEmail({ to: 'kunde@milaro.ch', subject, html })
    } else {
      console.log('Inquiry email would be sent:', body)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Inquiry email failed:', err)
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
