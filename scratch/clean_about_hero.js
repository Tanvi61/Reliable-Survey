const fs = require('fs');

let html = fs.readFileSync('about.html', 'utf8');

// Remove <div class="hero-readability-scrim"...>
html = html.replace(/<div class="hero-readability-scrim"[^>]*><\/div>\s*/g, '');

// Also ensure overlay text z-index is 2 (matching contact.html and gallery.html)
html = html.replace('z-index: 3;', 'z-index: 2;');

fs.writeFileSync('about.html', html, 'utf8');
console.log('Removed hero-readability-scrim from about.html');
