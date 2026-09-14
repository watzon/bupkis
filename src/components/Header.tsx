import { Link } from 'react-router-dom'

interface HeaderProps {
  onGetBupkis: () => void
}

export default function Header({ onGetBupkis }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label="bupkis home">
          <span className="wordmark-dot" aria-hidden="true" />
          bupkis<span className="wordmark-period">.</span>
        </Link>
        <button type="button" className="btn-secondary header-cta" onClick={onGetBupkis}>
          Get Bupkis — $4
        </button>
      </div>
    </header>
  )
}
