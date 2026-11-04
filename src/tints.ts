// Full class names so Tailwind can find them (it can't see classes built from variables).
export const tintBg = {
  mist: 'bg-tint-mist',
  sage: 'bg-tint-sage',
  dusk: 'bg-tint-dusk',
  clay: 'bg-tint-clay',
  slate: 'bg-tint-slate',
} as const;

// Text colour used on top of each tint in full-screen areas
export const tintFg = {
  mist: '#1d2622',
  sage: '#1d2622',
  dusk: '#1d2622',
  clay: '#2f2620',
  slate: '#e9ddd3',
} as const;
