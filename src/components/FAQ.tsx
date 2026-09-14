import { useState } from 'react'
import { faqs } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="faq section" aria-labelledby="faq-heading">
      <div className="container">
        <p className="section-label">FAQ</p>
        <h2 id="faq-heading" className="section-title">
          Questions we did not prepare for
        </h2>

        <dl className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <dt>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {item.question}
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                <dd className="faq-answer" hidden={!isOpen}>
                  {item.answer}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
