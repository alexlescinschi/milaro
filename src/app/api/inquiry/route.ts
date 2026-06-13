import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, phone, city } = await req.json()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name und Telefon sind erforderlich' }, { status: 400 })
    }

    const html = `
      <h2>Neue Beratungsanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Stadt:</strong> ${city || 'Nicht angegeben'}</p>
    `

    if (process.env.SMTP_HOST) {
      const { sendEmail } = await import('@/lib/email')
      await sendEmail({ to: 'info@milaro.ch', subject: 'Neue Beratungsanfrage', html })
    } else {
      console.log('Inquiry email would be sent:', { name, phone, city })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}
