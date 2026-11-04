// Usage: npm run build:portable
// Copies the built site (dist/) to portable/ with every link made relative,
// so it opens by double-clicking portable/index.html, or from any folder or link.
// Your Vercel deploy keeps using the normal build; this is only for previews.
import { cpSync, rmSync, readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname, extname, posix } from 'node:path';

const SRC = 'dist';
const OUT = 'portable';
const SKIP = [/\.gitkeep$/, /sitemap.*\.xml$/];

rmSync(OUT, { recursive: true, force: true });
cpSync(SRC, OUT, { recursive: true });

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

for (const f of walk(OUT)) if (SKIP.some((r) => r.test(f))) rmSync(f);

// "/about" -> "about/index.html", "/#work" -> "index.html#work", "/x.css" stays a file
function target(url) {
  const [path, hash = ''] = url.split('#');
  let p = path.replace(/^\//, '');
  if (!extname(p)) p = posix.join(p, 'index.html');
  return p + (hash ? `#${hash}` : '');
}

for (const file of walk(OUT)) {
  const ext = extname(file);
  if (ext !== '.html' && ext !== '.css') continue;
  const fromDir = dirname(relative(OUT, file)).split('\\').join('/');
  const rel = (url) => {
    const t = target(url);
    const r = posix.relative(fromDir === '.' ? '' : fromDir, t.split('#')[0]) || 'index.html';
    return r + (t.includes('#') ? `#${t.split('#')[1]}` : '');
  };
  let s = readFileSync(file, 'utf8');
  if (ext === '.html') {
    s = s.replace(/\b(href|src|poster)="(\/(?!\/)[^"]*)"/g, (_, a, u) => `${a}="${rel(u)}"`);
  } else {
    s = s.replace(/url\((['"]?)(\/(?!\/)[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${rel(u)}${q})`);
  }
  writeFileSync(file, s);
}

console.log(`Portable copy ready in ${OUT}/. Open ${OUT}/index.html in your browser.`);
