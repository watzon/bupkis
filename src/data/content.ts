export const KOFI_URL = 'https://ko-fi.com/watzon'

export const features = [
  {
    title: 'Absolute Void mode',
    description:
      'Fullscreen blank. No chrome, no icons, no regrets. Just you and the infinite beige of your own mind.',
  },
  {
    title: 'Dual-polarity nothing',
    description:
      'Light void for optimists. Dark void for people who take emptiness seriously. Toggle between both forms of absence.',
  },
  {
    title: 'Multi-monitor nothing sync',
    description:
      'Spread your lack of productivity across every display. Synchronized silence, pixel-perfect pointlessness.',
  },
  {
    title: 'Zero telemetry, zero updates, zero features',
    description:
      'We collect nothing, ship nothing, and improve nothing. Your privacy is safe because we literally forgot to build analytics.',
  },
  {
    title: '"2× Bupkis" bundle',
    description:
      'Two licenses of nothing. Give one to a friend who also needs to accomplish less. Double the void, same price.',
  },
  {
    title: 'Web void included',
    description:
      'Try the void in your browser before you download the desktop app that does the same thing but heavier.',
  },
] as const

export const comparisonRows = [
  { label: 'Amount of nothing', bupkis: 'Maximum', nothing: 'A lot' },
  { label: 'Web void included', bupkis: 'Yes', nothing: 'Unclear' },
  { label: 'Dual-polarity void', bupkis: 'Light + dark', nothing: 'One flavor' },
  { label: 'Multi-monitor sync', bupkis: 'Yes', nothing: 'Maybe?' },
  { label: '2× bundle option', bupkis: 'Included', nothing: 'No' },
  { label: 'Price of emptiness', bupkis: '$4', nothing: '$5' },
  { label: 'Telemetry collected', bupkis: '0 bytes', nothing: '0 bytes (allegedly)' },
] as const

export const testimonials = [
  {
    quote:
      'I paid $4 for Bupkis and got exactly what I expected: nothing. Best ROI of my career.',
    author: 'Jordan K.',
    role: 'VP of Doing Less, Acme Corp',
  },
  {
    quote:
      'Nothing was good. Bupkis is nothing, but worse. Which is better. I think.',
    author: 'Sam R.',
    role: 'Chief Void Officer',
  },
  {
    quote:
      'My therapist asked what I accomplished this week. I opened Bupkis and showed her. Session ended early.',
    author: 'Alex M.',
    role: 'Professional Procrastinator',
  },
  {
    quote:
      'We replaced Slack with Bupkis. Productivity unchanged. Morale improved.',
    author: 'Taylor W.',
    role: 'Head of Engineering, Stealth Startup',
  },
  {
    quote:
      'The dual-polarity void changed my life. I now experience emptiness in both light and dark modes.',
    author: 'Casey L.',
    role: 'Design Lead, Nowhere Inc.',
  },
] as const

export const faqs = [
  {
    question: 'What does Bupkis actually do?',
    answer:
      'Nothing. That is the entire product. We engineered a cross-platform application that performs zero functions, collects zero data, and delivers maximum digital detox. Bonus: it also does nothing on the web.',
  },
  {
    question: 'How is this different from Nothing (justnothing.lol)?',
    answer:
      'Same joke, sharper execution. We include a web void, dual-polarity modes, multi-monitor sync, and a 2× bundle. Also we charge $4 instead of $5. More nothing for less money.',
  },
  {
    question: 'Is there a real native app?',
    answer:
      'Download buttons are placeholders for v1. The web void works today. Native binaries for macOS, Windows, and Linux are coming soon (they will also do nothing).',
  },
  {
    question: 'Why "Bupkis"?',
    answer:
      'Yiddish slang for "nothing." It felt on-brand. We almost called it "Jack Squat" but the domain was taken by a fitness app.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'We cannot refund nothing because we never delivered anything in the first place. That said, email us and we will send a very sincere apology.',
  },
  {
    question: 'Is my payment secure?',
    answer:
      'Payments go through Ko-fi, a trusted platform for creators. You pay $4, we deliver nothing. Instant gratification, zero fulfillment.',
  },
] as const

export const platforms = [
  { id: 'macos', label: 'macOS', icon: 'apple', filled: true },
  { id: 'windows', label: 'Windows', icon: 'windows', filled: false },
  { id: 'linux', label: 'Linux', icon: 'terminal', filled: false },
  { id: 'web', label: 'Web', icon: 'globe', filled: false, highlight: true },
] as const
