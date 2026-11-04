// Usage: npm run new -- "Project name"
// Creates src/content/work/project-name.mdx with the case-study outline ready to fill in.
import { existsSync, writeFileSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Add a project name: npm run new -- "Project name"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^\w\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');
const file = `src/content/work/${slug}.mdx`;

if (existsSync(file)) {
  console.error(`${file} already exists. Pick another name or edit that file.`);
  process.exit(1);
}

const todo = (text) => `<span class="todo">TODO: ${text}</span>`;

writeFileSync(
  file,
  `---
title: ${title}
summary: TODO, one sentence on the problem and what changed
category: TODO, e.g. Fintech
year: TODO
role: Product designer
timeline: TODO
team: TODO
outcome: TODO, your headline number
tint: mist
order: 10
draft: true
---

## Context

${todo('who uses it and where things stood when you started.')}

## The problem

${todo('what was going wrong, and what it cost.')}

## Constraints

- ${todo('time, tech, regulation or team limits')}

## Decisions

### ${todo('decision one')}

${todo('what you chose, what you rejected, and why.')}

## Outcome

${todo('what shipped and what changed.')}

## What I’d do next

${todo('what you would measure, cut or build next.')}
`,
);

console.log(`Created ${file}. It stays hidden until you set draft: false.`);
