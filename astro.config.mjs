// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The site's public address, used for link previews and the sitemap.
// On Vercel this fills itself in from your project's domain. To pin a custom domain,
// add SITE_URL (e.g. https://ayafouad.com) in Vercel → Settings → Environment Variables.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://ayafouad.com');

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
  // 'assets' instead of Astro's default '_astro' so previews can be published anywhere
  build: { assets: 'assets' },
  vite: {
    plugins: [tailwindcss()],
  },
});
