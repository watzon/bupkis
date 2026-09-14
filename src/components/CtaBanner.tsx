import GetBupkisLink from './GetBupkisLink'

export default function CtaBanner() {
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
            <GetBupkisLink className="btn-primary">Get Bupkis — $4</GetBupkisLink>
            <p className="cta-banner-note">Pay via Ko-fi. Instant nothing.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
