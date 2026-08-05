# RJX Portfolio

A premium single-page portfolio for **RJX** — a solo developer studio. The page boots like a terminal, then "grows" into a refined SaaS-style site: terminal intro → hero → capabilities → featured work → closing CTA.

Each featured project opens its **live site** in a new tab — three of them are the sibling Vite projects in this repository (`amber-terminal`, `aurum-noir`, `meridian-kimi`), and the fourth is a hosted Telegram bot ([@uimailbot](https://t.me/uimailbot)).

## The 4 Sites

| Site | Folder | URL |
|---|---|---|
| Portfolio (main) | `rjx-portfolio/` | http://localhost:5173 |
| Amber Terminal | `amber-terminal/` | http://localhost:5174 |
| Aurum Noir | `aurum-noir/` | http://localhost:5175 |
| Meridian | `meridian-kimi/` | http://localhost:5176 |

### Run everything in parallel

From the repository root:

```bash
./dev-all.sh
```

Starts all 4 Vite dev servers on their fixed ports (Ctrl+C stops all). Or start them individually with `npm run dev` in each folder — every config pins its port with `strictPort`, so they never collide.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript (strict) |
| Build | Vite 5 |
| Styling | Tailwind CSS + shadcn/ui-style components |
| Routing | React Router 6 (anchor links) |
| State | Zustand (theme, language, boot flag) |
| Animation | Framer Motion (scroll reveals, terminal intro) |

## Project Structure

```
rjx-portfolio/
├── public/
│   └── images/         # project artwork (SVG placeholders included)
├── scripts/
│   └── generate-assets.mjs    # generates placeholder project artwork
├── src/
│   ├── components/
│   │   ├── ui/         # button, card, badge, skeleton (shadcn-style)
│   │   ├── layout/     # Header, Footer, SkipLink, GridBackground
│   │   └── shared/     # PillButton, Eyebrow, AnimatedLink, SectionReveal, LanguageToggle
│   ├── features/       # terminal, hero, capabilities, works, cta
│   ├── hooks/          # useScrollSpy, useMediaQuery, useReducedMotion, useDictionary
│   ├── store/          # useAppStore (Zustand)
│   ├── lib/            # utils, constants
│   ├── content/        # en.ts, ru.ts dictionaries (no i18n lib)
│   ├── types/          # shared types
│   ├── App.tsx
│   └── main.tsx
├── Dockerfile / nginx.conf / docker-compose.yml
└── index.html
```

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production Build

```bash
npm run build      # tsc -b && vite build
npm run preview    # serve the production bundle
```

## Docker Deploy

```bash
docker compose up --build
# → http://localhost:8080
```

## Configuration

- **Telegram links** — edit `src/lib/constants.ts` (`TELEGRAM_URL`).
- **Content** — all copy lives in `src/content/en.ts` and `src/content/ru.ts` (English default, Russian mirror). Add keys to both dictionaries.
- **Featured projects** — edit the `works.projects` arrays in both dictionaries (Amber Terminal, Aurum Noir, Meridian, UIMailBot). Each project has a `url` field — point it at the deployed site URL when the projects go live (ports are used locally).
- **Project images** — replace `public/images/project-*.svg` placeholders with real screenshots. Update the `image` path in both dictionaries if you change filenames.

## Key Features

- **Terminal boot** — types lines char-by-char with jitter, plays once per session (`sessionStorage`), skippable via click/tap/any key, fully disabled under `prefers-reduced-motion`, then a CRT "shutdown" sequence (vertical compress → gradient scanline → reveal).
- **Theme + language** — dark/light via CSS tokens; EN/RU dictionary toggle. Persisted in localStorage.
- **Works → live sites** — clicking a project card opens the real project site in a new tab (`target="_blank"`): the local dev servers (5174–5176) for the three sibling projects and [@uimailbot](https://t.me/uimailbot) for the bot.

## Accessibility

- Skip link, semantic landmarks (`header/main/section/footer/nav`), `aria-label` on all icon controls.
- `prefers-reduced-motion` respected globally (`MotionConfig reducedMotion="user"` + CSS).
- External links use `rel="noreferrer"` and are announced with `aria-label`.

## Tests (Playwright user simulation)

Real-user simulation suite in `e2e/user-simulation.spec.ts` (boot skip, scroll, work-card links, theme/language toggles, mobile menu, keyboard nav).

```bash
npx playwright install chromium   # once — or set PW_CHROMIUM to a system Chrome/Chromium
npm run dev -- --port 5199        # terminal 2
npx playwright test --config=playwright.config.ts
```

The config points at `/usr/bin/chromium` by default; override with `PW_CHROMIUM=/path/to/chrome` or run `npx playwright install chromium` and clear the `launchOptions` override.

## Performance

- Vendor chunk splitting (`react`, `motion`, `state`).
- Lazy-loaded project images with `width`/`height` (no CLS), `loading="lazy"`.

## Troubleshooting

| Problem | Fix |
|---|---|
| Work card opens a dead link | The target dev server isn't running — use `./dev-all.sh` from the repo root, or start the matching project manually |
| Port already in use | All four projects pin their ports (`strictPort`); free 5173–5176 or change the port + matching `url` in the dictionaries |
| Playwright says executable missing | `npx playwright install chromium`, or set `PW_CHROMIUM` to a system Chrome binary |
| Fonts look wrong offline | Geist loads from Google Fonts; for offline builds install `@fontsource/geist-sans` / `@fontsource/geist-mono` |
