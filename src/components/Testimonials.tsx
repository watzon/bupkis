import { useCallback, useEffect, useState } from 'react'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const count = testimonials.length

  const next = useCallback(() => {
    setActive((i) => (i + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + count) % count)
  }, [count])

  useEffect(() => {
    const timer = window.setInterval(next, 6000)
    return () => window.clearInterval(timer)
  }, [next])

  const current = testimonials[active]

  return (
    <section className="testimonials section" aria-labelledby="testimonials-heading">
      <div className="container">
        <p className="section-label">Testimonials</p>
        <h2 id="testimonials-heading" className="section-title">
          Loved by people who love nothing
        </h2>

        <div className="testimonial-carousel" aria-live="polite">
          <blockquote className="testimonial-quote">
            <p>&ldquo;{current.quote}&rdquo;</p>
            <footer>
              <cite className="testimonial-author">{current.author}</cite>
              <span className="testimonial-role">{current.role}</span>
            </footer>
          </blockquote>

          <div className="testimonial-controls">
            <button
              type="button"
              className="testimonial-nav"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  className={`testimonial-dot ${i === active ? 'active' : ''}`}
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1} of ${count}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="testimonial-nav"
              onClick={next}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
