import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every case study is one .mdx file in src/content/work.
// The frontmatter fields below feed the home board and the case-study header.
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    // One sentence: the problem and what changed. Shown on the home board.
    summary: z.string(),
    // Short labels shown on the home showcase, e.g. 'Fintech' and '2025–26'
    category: z.string(),
    year: z.coerce.string(),
    role: z.string(),
    timeline: z.coerce.string(),
    team: z.string().optional(),
    scope: z.string().optional(),
    // External links shown with the case-study facts, e.g. the live product or Figma file
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    // The headline result. Keep it to a number and a short phrase.
    outcome: z.string().optional(),
    // Card tint on the home board: mist, sage, dusk, clay, slate or noir
    tint: z.enum(['mist', 'sage', 'dusk', 'clay', 'slate', 'noir']).default('mist'),
    // Optional cover image, e.g. /covers/thndrx.png (put the file in public/covers)
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // frame: screenshot sits in a frame on the colour field (best for UI)
    // bleed: image fills the whole screen (best for photos or mockup scenes)
    coverStyle: z.enum(['frame', 'bleed']).default('frame'),
    // Which side stays visible when the cover is trimmed on narrow screens
    coverFocus: z.enum(['center', 'left', 'right']).default('center'),
    // Slowly turn the cover like a turntable (very slow, off for reduced motion)
    coverSpin: z.boolean().default(false),
    // Optional animated cover. 'market-breadth' draws ThndrX's live advancers/decliners chip
    coverLive: z.enum(['market-breadth']).optional(),
    // Lower numbers appear first on the board
    order: z.number().default(10),
    // Optional: your own case-study page, e.g. /case-studies/traders/. Replaces the site template.
    caseStudy: z.string().optional(),
    // Optional: mark a project that isn't launched yet. Shown as "Coming soon" on the home page.
    status: z.enum(['coming-soon']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
