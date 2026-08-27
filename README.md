# Virginia Tech Engineering Portfolio

Production-ready single-page portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize

1. Edit all portfolio content in `data/portfolio.ts`.
2. Replace `public/resume.pdf` with your actual PDF resume, keeping the filename.
3. Set your production URL in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Replace placeholder projects, experience, education, leadership, links, email, and graduation date.
5. Run verification before deploying:

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy

Push to GitHub, import the repository into Vercel, and configure `NEXT_PUBLIC_SITE_URL` in the Vercel project settings.

## Content guidance

- Project summaries should explain the finished system, not list technologies.
- Use defensible measurements for latency, throughput, accuracy, power, resource utilization, users, or time saved.
- Keep the strongest three projects featured.
- Never publish placeholder claims as real accomplishments.
