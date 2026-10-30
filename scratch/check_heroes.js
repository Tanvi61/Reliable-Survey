const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    const html = fs.readFileSync(f, 'utf8');
    const heroMatch = html.match(/<div class="[^"]*hero[^"]*"[\s\S]*?<img [^>]*src="([^"]+)"/);
    if (heroMatch) {
        console.log(f.padEnd(32) + ' => ' + heroMatch[1]);
    }
});
