# bupkis

The cross-platform desktop application engineered to do absolutely nothing, plus bonus nothing. A parody competitor to [Nothing](https://justnothing.lol) for [bupkis.me](https://bupkis.me).

## What is this?

**Bupkis** is a satirical marketing site for a fake product that one-ups Nothing: more void, sharper design, a web void you can try today, and a $4 price tag (undercutting their $5). No real native app binary in v1. Just a polished landing page, a fullscreen web "void" experience, and stubbed checkout.

## Stack

- Vite + React + TypeScript
- React Router
- Static deploy (Cloudflare Pages, Vercel, Netlify, etc.)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Script    | Description              |
| --------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Preview production build |

## Routes

| Path   | Description                                      |
| ------ | ------------------------------------------------ |
| `/`    | Landing page (hero, features, comparison, FAQ)   |
| `/void`| Full-viewport web void (light/dark toggle)       |

## Payments (stub)

Checkout is **not live**. Clicking "Get Bupkis — $4" opens a modal with an email field. Submitting stores the email in `localStorage` under the key `bupkis_waitlist` and shows a waitlist success message.

### TODO: Payment integration

- [ ] Wire [Lemon Squeezy](https://www.lemonsqueezy.com/) or [Stripe Checkout](https://stripe.com/docs/payments/checkout) for one-time $4 purchase
- [ ] Replace stub modal submit handler with real checkout session
- [ ] Add webhook handler for license delivery (email with download link)
- [ ] Move waitlist emails from localStorage to a backend or email provider
- [ ] Add `.env.example` with `STRIPE_SECRET_KEY` / `LEMONSQUEEZY_API_KEY` placeholders (never commit real keys)

## Deploy

Build output goes to `dist/`. Deploy to any static host.

**Cloudflare Pages:** connect the repo, set build command to `npm run build` and output directory to `dist`. The included `public/_redirects` handles SPA routing.

**Vercel:** same build settings; add a `vercel.json` rewrite if needed:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Point DNS for **bupkis.me** at your host when ready.

## License

Parody project. Not affiliated with Nothing (justnothing.lol).
