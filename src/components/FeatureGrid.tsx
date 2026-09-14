import { features } from '../data/content'

export default function FeatureGrid() {
  return (
    <section className="features section" aria-labelledby="features-heading">
      <div className="container">
        <p className="section-label">Features</p>
        <h2 id="features-heading" className="section-title">
          More nothing. Fewer features.
        </h2>
        <p className="section-subtitle">
          Everything you need to accomplish absolutely nothing, and a few things you
          did not know you did not need.
        </p>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
