import { NextResponse } from 'next/server'
import { notify } from '@/lib/notify'

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

    const heading = body.type ? `${body.type}` : 'Neue Beratungsanfrage'
    const rows = Object.entries(body)
      .filter(([k]) => k !== 'type' && typeof body[k] === 'string' && body[k].trim())
      .map(([k, v]) => `<b>${LABELS[k] || k}:</b> ${escapeHtml(String(v))}`)
      .join('\n')

    const text = `<b>${heading}</b>\n\n${rows}`

    await notify(text)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Inquiry notify failed:', err)
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
