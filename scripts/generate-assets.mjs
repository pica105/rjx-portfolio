import fs from 'fs';
import path from 'path';

const root = process.cwd();

const projects = [
  { slug: 'amber-terminal', initials: 'AT', label: 'Amber Terminal', from: '#ffb45c', to: '#3a1c0a' },
  { slug: 'aurum-noir', initials: 'AN', label: 'Aurum Noir', from: '#d4af37', to: '#0a0a0a' },
  { slug: 'meridian', initials: 'MD', label: 'Meridian', from: '#00e5c7', to: '#0a3a3a' },
  { slug: 'uimailbot', initials: 'UB', label: 'UIMailBot', from: '#2ea6ff', to: '#0a1a3a' },
];

const imagesDir = path.join(root, 'public', 'images');
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

for (const p of projects) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${p.from}"/>
      <stop offset="1" stop-color="${p.to}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="#131316"/>
  <rect width="800" height="600" fill="url(#g)" opacity="0.55"/>
  <rect x="1" y="1" width="798" height="598" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
  <text x="400" y="285" font-family="monospace" font-size="120" font-weight="bold" fill="#0a0a0b" text-anchor="middle" opacity="0.85">${p.initials}</text>
  <text x="400" y="365" font-family="monospace" font-size="28" fill="rgba(255,255,255,0.85)" text-anchor="middle">${p.label}</text>
  <text x="400" y="420" font-family="monospace" font-size="16" fill="rgba(255,255,255,0.45)" text-anchor="middle">rjx portfolio — ${p.slug}</text>
</svg>`;
  fs.writeFileSync(path.join(imagesDir, `project-${p.slug}.svg`), svg);
  console.log(`Wrote project-${p.slug}.svg`);
}
