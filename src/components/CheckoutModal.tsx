import { useEffect, useRef, useState, type FormEvent } from 'react'
import { addToWaitlist, isValidEmail } from '../utils/waitlist'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setSuccess(false)
      setError('')
      setEmail('')
      window.setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Enter a valid email so we can notify you when payments go live.')
      return
    }

    addToWaitlist(email)
    setError('')
    setSuccess(true)
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {!success ? (
          <>
            <h2 id="checkout-title" className="modal-title">
              Get Extra Nothing — $4
            </h2>
            <p className="modal-desc">
              One-time payment for lifetime access to absolutely nothing. Payments
              wiring is next; join the waitlist and we will email you when checkout
              goes live.
            </p>

            <form className="checkout-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="checkout-email" className="checkout-label">
                Email
              </label>
              <input
                ref={inputRef}
                id="checkout-email"
                type="email"
                className="checkout-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                autoComplete="email"
                required
              />
              {error && (
                <p className="checkout-error" role="alert">
                  {error}
                </p>
              )}
              <button type="submit" className="btn-primary checkout-submit">
                Pay $4
              </button>
            </form>

            <p className="modal-fine-print">
              TODO: Wire Lemon Squeezy or Stripe Checkout here. No payment keys yet.
            </p>
          </>
        ) : (
          <div className="checkout-success">
            <div className="success-icon" aria-hidden="true">∅</div>
            <h2 id="checkout-title" className="modal-title">
              You are on the waitlist
            </h2>
            <p className="modal-desc">
              Payments wiring next. We saved your email locally and you will hear from
              us when you can actually pay $4 for nothing.
            </p>
            <button type="button" className="btn-primary" onClick={onClose}>
              Back to nothing
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
