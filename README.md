# Eduardo Proença · Résumé

[![Live](https://img.shields.io/badge/site-live-0455A1?logo=vercel&logoColor=white)](https://curriculo-psi-drab.vercel.app)
![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

Bilingual résumé and portfolio site: <https://curriculo-psi-drab.vercel.app> (Portuguese) and
<https://curriculo-psi-drab.vercel.app/en> (English; `/?lang=en` redirects there).

The design is a **transit network**: each project is a metro line in its own colour, and the
interchanges on the map are the real integrations between them (SchedulingApi publishes events to
WebhookRelay, which delivers signed webhooks to SchedulingDashboard, which drives the API).
Hover or focus a line to isolate it; every station links to its project.

## Structure

| Path | What it is |
|---|---|
| `src/data/resume.ts` | All content, in Portuguese and English, with the same facts in both |
| `src/components/resume/resume-page.tsx` | The page (Server Component) |
| `src/components/resume/network-map.tsx` | The interactive SVG network map (Client Component) |
| `src/app/(pt)` and `src/app/(en)/en` | One root layout per language, so `<html lang>` is right on both |
| `src/app/globals.css` | Design tokens and styles |
| `DESIGN.md`, `PRODUCT.md` | Visual system and product context |

Static, no client data fetching, no tracking. Fonts: Archivo (variable width) through `next/font`.

## Running

```bash
npm install
npm run dev
```

`npm run lint` and `npm run build` must pass before pushing; Vercel deploys `main`.

---

<details>
<summary>🇧🇷 Em português</summary>

Site de currículo e portfólio bilíngue (PT e EN). O visual é um **mapa de metrô**: cada projeto é uma
linha com a sua cor, e as baldeações do mapa são as integrações reais entre eles. Todo o conteúdo fica em
`src/data/resume.ts`. Para rodar: `npm install` e `npm run dev`.

</details>
