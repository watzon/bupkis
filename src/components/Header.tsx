import { Link } from 'react-router-dom'
import GetBupkisLink from './GetBupkisLink'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label="bupkis home">
          <span className="wordmark-dot" aria-hidden="true" />
          bupkis<span className="wordmark-period">.</span>
        </Link>
        <GetBupkisLink className="btn-secondary header-cta">Get Bupkis — $4</GetBupkisLink>
      </div>
    </header>
  )
}
