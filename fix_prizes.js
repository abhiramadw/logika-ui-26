const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src/components/competitions');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Replace all instances of `ml-4 font-bold text-lg md:text-xl` 
  content = content.replace(/className="ml-4 font-bold text-lg md:text-xl"/g, 'className="flex-1 text-center font-bold text-base md:text-lg pr-8"');
  
  // Replace all instances of `ml-4 font-bold text-base md:text-lg`
  content = content.replace(/className="ml-4 font-bold text-base md:text-lg"/g, 'className="flex-1 text-center font-bold text-base md:text-lg pr-8"');

  fs.writeFileSync(fp, content);
  console.log('Fixed prizes in ' + file);
}
