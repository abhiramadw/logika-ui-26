const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src/components/competitions');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const fp = path.join(dir, file);
  let c = fs.readFileSync(fp, 'utf8');
  c = c.replace(/date:\s*"([^"]+)"/g, (m, d) => {
    return `date: "${d.replace(/\s*[-–]\s*/g, ' -- ')}"`;
  });
  fs.writeFileSync(fp, c);
  console.log('Fixed dates in ' + file);
}
