# Aya Fouad's portfolio

Built with Astro and Tailwind. Case studies are MDX files, so adding work means writing, not rebuilding layouts.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Go live on Vercel (one-time, about 5 minutes)

1. Create an empty GitHub repo called `portfolio`.
2. In this folder:
   ```bash
   git init && git add . && git commit -m "First version"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. Go to vercel.com, choose **Add New → Project**, import the repo and click **Deploy**. Vercel detects Astro on its own, so there's nothing to configure.
4. Optional: in the project's **Settings → Domains**, add your domain, then update `site` in `astro.config.mjs`.
5. Optional: turn on **Analytics** in the Vercel project to see which case studies people open.

From then on, every `git push` updates the live site. Every branch or pull request also gets its own preview link, which is handy for showing a draft to a friend before it goes live.

## Cover images

Each case study takes one cover. Until you add it, the frame says "Add a cover in public/covers".

- **Size:** 2000 × 1600 px (5:4), PNG or JPG, under about 500 KB. On phones the sides get trimmed, so keep the key UI in the middle.
- **Frame style (default):** a clean screen or composition on a plain or transparent background. It sits in a rounded frame on the project's colour.
- **Bleed style:** a photo or mockup scene that fills the whole screen. Add `coverStyle: bleed` and check the title stays readable over it.
- Save the file as `public/covers/<project>.png` and add `cover: /covers/<project>.png` and `coverAlt: <what the image shows>` to the case study.

## Everyday shortcuts

| You want to | Do this |
| --- | --- |
| Change your email, links or résumé | Edit `src/site.ts` |
| Add a case study | `npm run new -- "Project name"`, then fill in the file and set `draft: false` |
| Add a cover image | Put it in `public/covers/` and add `cover: /covers/file.png` to the case study. Use `coverStyle: bleed` for a photo that should fill the screen |
| Change a project's colour | Set `tint:` to mist, sage, dusk, clay or slate |
| Reorder projects | Change `order:` (lower comes first) |
| Change the clock cities | Edit the list in `src/components/Clocks.astro` |
| Add your résumé | Drop `resume.pdf` into `public/` |
| Change colours or fonts | Edit the `@theme` block in `src/styles/global.css` |
| Find what's left to write | Search the project for `TODO` (highlighted yellow on the site) |

## Working with Claude Code

`CLAUDE.md` tells Claude Code how this project is organised and the design rules, so you can ask things like:

- "Turn my ThndrX notes in this file into the case study, keeping the section structure."
- "Build this Figma frame as a section on the ThndrX page." (with the Figma connector or Dev Mode link)
- "Add a dark mode using the same tokens."

## Starter copy to check

The hero line, the "Right now" note, the quote card and the three principles on the About page are starter copy written in your voice. Rewrite anything that doesn't sound like you.
