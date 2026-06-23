// Generates the PWA / device icons from a maskable-safe source.
// Run with: node scripts/gen-icons.mjs
import sharp from 'sharp';

// Full-bleed magenta with the "a" inside the maskable safe zone (centre 80%).
const svg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#f00069"/>
  <text x="256" y="368" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="300" text-anchor="middle" fill="#ffffff">a</text>
</svg>`;
const buf = Buffer.from(svg);

await sharp(buf).resize(192, 192).png().toFile('public/icon-192.png');
await sharp(buf).resize(512, 512).png().toFile('public/icon-512.png');
await sharp(buf).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Generated icon-192.png, icon-512.png, apple-touch-icon.png');
