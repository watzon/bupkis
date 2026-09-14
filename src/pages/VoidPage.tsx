import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './VoidPage.css'

type VoidMode = 'light' | 'dark'

export default function VoidPage() {
  const [mode, setMode] = useState<VoidMode>('light')
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHint(false), 5000)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return
      if (e.key === 'd' || e.key === 'D') {
        setMode((m) => (m === 'light' ? 'dark' : 'light'))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className={`void-page void-${mode}`} role="main" aria-label="Absolute Void mode">
      {showHint && (
        <p className="void-hint" role="status">
          Press <kbd>Esc</kbd> or click below to escape · Press <kbd>D</kbd> for dual-polarity
          nothing
        </p>
      )}

      <nav className="void-escape" aria-label="Exit void">
        <Link to="/" className="void-escape-link">
          ← Exit void
        </Link>
        <button
          type="button"
          className="void-mode-toggle"
          onClick={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
          aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} void`}
        >
          {mode === 'light' ? 'Dark void' : 'Light void'}
        </button>
      </nav>
    </div>
  )
}
