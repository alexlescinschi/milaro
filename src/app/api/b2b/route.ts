import { NextResponse } from 'next/server'
import { notify } from '@/lib/notify'

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message } = await req.json()

    if (!name || !company || !email) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    }

    const text = `<b>Neue B2B-Anfrage</b>\n\n<b>Name:</b> ${escapeHtml(name)}\n<b>Unternehmen:</b> ${escapeHtml(company)}\n<b>E-Mail:</b> ${escapeHtml(email)}\n<b>Telefon:</b> ${escapeHtml(phone || 'Nicht angegeben')}\n<b>Nachricht:</b>\n${escapeHtml(message || 'Keine Nachricht')}`

    await notify(text)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
