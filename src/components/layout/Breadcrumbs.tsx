import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="uk-section uk-section-xsmall uk-section-default" style={{ background: 'white', borderBottom: '1px solid var(--border-color)' }}>
      <div className="uk-container">
        <ul className="uk-breadcrumb">
          <li>
            <Link href="/">Startseite</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className={i === items.length - 1 ? 'uk-active' : ''}>
              {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
