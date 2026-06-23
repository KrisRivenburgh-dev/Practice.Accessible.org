// Generates public/og-image.png (1200x630) for social sharing.
// Run with: node scripts/gen-og.mjs
import sharp from 'sharp';

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="12" fill="#f00069"/>
  <circle cx="1060" cy="120" r="230" fill="#f00069" opacity="0.08"/>
  <circle cx="1090" cy="540" r="150" fill="#0a0e27" opacity="0.04"/>

  <text x="80" y="150" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="42" fill="#0a0e27">Accessible<tspan fill="#f00069">.org</tspan><tspan fill="#9aa1b1" font-weight="700"> &#8201;|&#8201; </tspan><tspan fill="#4a4f63" font-weight="700">Practice</tspan></text>

  <text x="78" y="330" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="104" letter-spacing="-3" fill="#0a0e27">Find what's</text>
  <text x="78" y="440" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="104" letter-spacing="-3" fill="#f00069">broken.</text>

  <text x="80" y="540" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="34" fill="#4a4f63">A hands-on accessibility practice ground. Find the barriers, then fix them.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
console.log('Generated public/og-image.png');
