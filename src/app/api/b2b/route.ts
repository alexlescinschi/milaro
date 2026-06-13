import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message } = await req.json()

    if (!name || !company || !email) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    }

    const html = `
      <h2>Neue B2B-Anfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Unternehmen:</strong> ${company}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
      <p><strong>Nachricht:</strong><br>${message || 'Keine Nachricht'}</p>
    `

    console.log('B2B email would be sent:', { name, company, email, phone, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}
