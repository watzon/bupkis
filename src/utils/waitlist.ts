const WAITLIST_KEY = 'bupkis_waitlist'

export interface WaitlistEntry {
  email: string
  timestamp: string
}

export function getWaitlist(): WaitlistEntry[] {
  try {
    const raw = localStorage.getItem(WAITLIST_KEY)
    if (!raw) return []
    return JSON.parse(raw) as WaitlistEntry[]
  } catch {
    return []
  }
}

export function addToWaitlist(email: string): WaitlistEntry[] {
  const entry: WaitlistEntry = {
    email: email.trim().toLowerCase(),
    timestamp: new Date().toISOString(),
  }

  const existing = getWaitlist()
  const filtered = existing.filter((e) => e.email !== entry.email)
  const updated = [...filtered, entry]

  localStorage.setItem(WAITLIST_KEY, JSON.stringify(updated))
  return updated
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}
