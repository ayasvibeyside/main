# Aya Fouad's portfolio

Astro + Tailwind v4 static site, deployed on Vercel from GitHub (every push to `main` goes live).

## Where things live
- `src/site.ts`: name, email, LinkedIn, résumé, Cal.com link. Edit here, not in pages.
- `src/styles/global.css`: design tokens in `@theme`. Use these, never raw hex in components.
- `src/content/work/*.mdx`: one file per case study. Schema in `src/content.config.ts`.
- `src/pages/index.astro`: home page. Full-screen showcase (`src/components/Showcase.astro`), then intro, case-study index and notes.
- `src/pages/work/[...slug].astro`: case-study template.
- `public/covers/`: cover images, referenced as `cover: /covers/name.png`.

## Design rules
- Calm and quiet: sage-grey paper, one deep ink, one accent (`dusk`). No new accent colours.
- Newsreader (serif, light weight) for headlines; Figtree for everything else.
- Sentence case everywhere. No all-caps labels, no eyebrow text above headings.
- Layout sits on a 4-column grid (`.frame` + `grid-cols-4`); header, stage meta and footer all align to it.
- Motion: the vertical-slice cut between projects on the home showcase, the `.settle` load animation, and a soft lift on cover art on hover (`.cover-art`). Don't add more. All respect reduced motion.
- Small meta text (counter, category, year, clocks) stays at text-sm; titles carry the scale.
- Case studies follow: Context, The problem, Decisions, The product angle, Outcome, What I'd do next. Constraints can be added when there are real ones.

## Commands
- `npm run dev`: local preview at localhost:4321
- `npm run new -- "Project name"`: scaffold a new case study (starts as a draft)
- `npm run build`: check everything builds before pushing
