const fs = require('fs');

// 1. Read existing kokan-railway.svg if exists
let existingKokan = '';
try {
    existingKokan = fs.readFileSync('assets/images/partners/kokan-railway.svg', 'utf8');
} catch (e) {}

let gContent = '';
const bodyMatch = existingKokan.match(/<g[\s\S]*<\/g>/);
if (bodyMatch) {
    gContent = bodyMatch[0];
}

// Build standard Kokan Railway SVG (220x80)
const kokanSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80" width="220" height="80">
  <rect width="220" height="80" fill="white"/>
  <!-- Konkan Railway Official Emblem -->
  <svg x="12" y="10" width="54" height="60" viewBox="0 0 13.991426 17.999388">
    ${gContent}
  </svg>
  <!-- Text -->
  <text x="76" y="30" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#2E3092">KOKAN</text>
  <text x="76" y="46" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#2E3092">RAILWAY</text>
  <text x="76" y="60" font-family="Arial, sans-serif" font-size="8" fill="#555">Corporation Limited (KRCL)</text>
</svg>
`;

fs.writeFileSync('assets/images/partners/kokan-railway.svg', kokanSvg, 'utf8');
console.log('Saved assets/images/partners/kokan-railway.svg');

// 2. Build Indian Railways (Railway) SVG (220x80)
const indianRailwaysSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80" width="220" height="80">
  <rect width="220" height="80" fill="white"/>
  <!-- Indian Railways circular seal -->
  <circle cx="38" cy="40" r="28" fill="#7B1C2B"/>
  <circle cx="38" cy="40" r="26.5" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <circle cx="38" cy="40" r="21" fill="none" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
  
  <!-- Steam engine / Track silhouette inside emblem -->
  <!-- Outer ring stars -->
  <circle cx="38" cy="17" r="1.5" fill="#D4AF37"/>
  <circle cx="38" cy="63" r="1.5" fill="#D4AF37"/>
  <circle cx="15" cy="40" r="1.5" fill="#D4AF37"/>
  <circle cx="61" cy="40" r="1.5" fill="#D4AF37"/>
  
  <!-- Locomotive Train Front -->
  <circle cx="38" cy="40" r="14" fill="#0B2545"/>
  <rect x="31" y="32" width="14" height="13" rx="3" fill="#D4AF37"/>
  <rect x="33" y="34" width="10" height="5" rx="1" fill="#0B2545"/>
  <circle cx="38" cy="42" r="2" fill="#D4AF37"/>
  <!-- Cowcatcher / Track lines -->
  <path d="M 29 48 L 47 48 L 44 51 L 32 51 Z" fill="#D4AF37"/>
  <!-- Track rails -->
  <line x1="33" y1="51" x2="28" y2="55" stroke="white" stroke-width="1.5"/>
  <line x1="43" y1="51" x2="48" y2="55" stroke="white" stroke-width="1.5"/>
  
  <!-- Text -->
  <text x="76" y="30" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#7B1C2B">INDIAN</text>
  <text x="76" y="46" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#7B1C2B">RAILWAYS</text>
  <text x="76" y="60" font-family="Arial, sans-serif" font-size="8" fill="#555">Ministry of Railways, India</text>
</svg>
`;

fs.writeFileSync('assets/images/partners/indian-railways.svg', indianRailwaysSvg, 'utf8');
console.log('Saved assets/images/partners/indian-railways.svg');
