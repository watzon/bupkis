interface CtaBannerProps {
  onGetBupkis: () => void
}

export default function CtaBanner({ onGetBupkis }: CtaBannerProps) {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-banner-inner">
          <h2 id="cta-heading" className="section-title">
            Ready for more nothing?
          </h2>
          <p className="section-subtitle">
            Join thousands of people who paid real money for imaginary software. Undercut
            the competition by a full dollar.
          </p>
          <div className="cta-banner-actions">
            <button type="button" className="btn-primary" onClick={onGetBupkis}>
              Get Extra Nothing — $4
            </button>
            <p className="cta-banner-note">One-time payment. Lifetime access to void.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
