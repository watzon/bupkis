import { Link } from 'react-router-dom'

export default function Downloads() {
  return (
    <section className="downloads section" aria-labelledby="downloads-heading">
      <div className="container">
        <p className="section-label">Download</p>
        <h2 id="downloads-heading" className="section-title">
          Get the desktop void
        </h2>
        <p className="section-subtitle">
          Native binaries coming soon. For now, the web void is fully operational and
          equally pointless.
        </p>

        <div className="download-grid">
          <button type="button" className="btn-secondary download-btn" disabled title="Coming soon">
            ↓ macOS
          </button>
          <button type="button" className="btn-secondary download-btn" disabled title="Coming soon">
            ↓ Windows
          </button>
          <button type="button" className="btn-secondary download-btn" disabled title="Coming soon">
            ↓ Linux
          </button>
          <Link to="/void" className="btn-primary download-btn">
            Open web void
          </Link>
        </div>

        <p className="download-note">
          Desktop downloads are placeholders. The web void at /void works today.
        </p>
      </div>
    </section>
  )
}
