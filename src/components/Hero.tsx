import { Link } from 'react-router-dom'
import PlatformPills from './PlatformPills'

interface HeroProps {
  onGetBupkis: () => void
}

export default function Hero({ onGetBupkis }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <h1 id="hero-heading" className="hero-title">
          Bupkis<span className="accent-dot">.</span>
        </h1>
        <p className="hero-tagline">Nothing, but worse (better).</p>
        <p className="hero-copy">
          The cross-platform desktop application engineered to do{' '}
          <strong>absolutely nothing</strong>, plus bonus nothing. Think of it as{' '}
          <strong>noise-canceling headphones</strong> for your{' '}
          <strong>eyes</strong>, meticulously crafted pixel by pixel by world-class{' '}
          <strong>designers</strong> and <strong>engineers</strong> to deliver instant
          digital detox with extra void on top.
        </p>

        <PlatformPills />

        <div className="hero-actions">
          <button type="button" className="btn-primary hero-cta" onClick={onGetBupkis}>
            Get Extra Nothing — $4
          </button>
          <p className="hero-note">One-time payment / instant download access.</p>
        </div>

        <div className="hero-web-link">
          <Link to="/void" className="web-void-link">
            Or try the web void free →
          </Link>
        </div>
      </div>
    </section>
  )
}
