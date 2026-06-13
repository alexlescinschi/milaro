import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="uk-section uk-section-large" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1 style={{ fontFamily: 'var(--sb-reg)', fontSize: '6rem', color: 'var(--primary-color)' }}>404</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--muted-color)', marginBottom: '2rem' }}>
          Seite nicht gefunden
        </p>
        <Link href="/" className="uk-button uk-button-primary">
          Zur Startseite
        </Link>
      </div>
    </div>
  )
}
