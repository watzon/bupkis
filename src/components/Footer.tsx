import GetBupkisLink from './GetBupkisLink'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="wordmark">
            <span className="wordmark-dot" aria-hidden="true" />
            bupkis<span className="wordmark-period">.</span>
          </span>
          <p className="footer-tagline">
            Engineered to do absolutely nothing since 2025.
          </p>
        </div>

        <div className="footer-cta">
          <GetBupkisLink className="btn-primary">Get Bupkis — $4</GetBupkisLink>
        </div>

        <div className="footer-legal">
          <p>
            © {new Date().getFullYear()} Bupkis Labs. All rights reserved, which is
            ironic because we reserve nothing.
          </p>
          <p>
            bupkis.me is a parody product. Not affiliated with Nothing
            (justnothing.lol). No actual software is sold. No warranties on void quality.
            Side effects may include increased productivity from doing nothing.
          </p>
          <nav className="footer-links" aria-label="Footer links">
            <a href="mailto:hello@bupkis.me">hello@bupkis.me</a>
            <span aria-hidden="true">·</span>
            <a href="/void">Web void</a>
            <span aria-hidden="true">·</span>
            <span>Terms of Emptiness</span>
            <span aria-hidden="true">·</span>
            <span>Privacy (we have none to share)</span>
          </nav>
        </div>
      </div>
    </footer>
  )
}
