import type { CollectionEntry } from 'astro:content';

// Where a project's "Open case study" goes. A project with `caseStudy` set uses that page
// (e.g. a hand-built page in public/case-studies); everything else uses the site template.
export const caseStudyHref = (entry: CollectionEntry<'work'>) =>
  entry.data.caseStudy ?? `/work/${entry.id}`;
