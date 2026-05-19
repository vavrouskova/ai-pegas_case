# usecase-pegas

studAIant case study — PEGAS. Jak antstudio postavilo brand a web PEGAS s pomocí AI.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Bun

## Dev

```bash
bun install
bun run dev      # http://localhost:3000
bun run build
bun run lint
```

## Struktura

```
app/             # Next.js App Router (layout + page)
components/      # React komponenty (hero, sekce, ui)
content/         # caseStudy.ts — všechen copy na jednom místě
lib/             # cn() utilita
public/          # assety (ilustrace, foto, screenshoty)
```

## Iterace obsahu

Texty se ladí v `content/caseStudy.ts`. Sekční komponenty čtou odtud — žádné texty v JSX.

## Deploy

Statický deploy na Vercel. Doména: `usecasepegas.vercel.app` (předběžně).

## Reference

- Vizuální + strukturní reference: [usecasevazby.vercel.app](https://usecasevazby.vercel.app)
- Design spec: `../pegas-frontend/docs/superpowers/specs/2026-05-15-studaiant-pegas-case-study-design.md`
