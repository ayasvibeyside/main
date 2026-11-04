// Full class names so Tailwind can find them (it can't see classes built from variables).
export const tintBg = {
  mist: 'bg-tint-mist',
  sage: 'bg-tint-sage',
  dusk: 'bg-tint-dusk',
  clay: 'bg-tint-clay',
  slate: 'bg-tint-slate',
  noir: 'bg-tint-noir',
} as const;

// Text colour used on top of each tint in full-screen areas
export const tintFg = {
  mist: '#4c0410',
  sage: '#4c0410',
  dusk: '#4c0410',
  clay: '#4c0410',
  slate: '#ffda8f',
  noir: '#f4f0ee',
} as const;
