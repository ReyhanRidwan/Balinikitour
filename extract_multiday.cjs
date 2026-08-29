const fs = require('fs');

const catalogCode = fs.readFileSync('src/components/TourCatalog.tsx', 'utf-8');

const match = catalogCode.match(/const multiDayPackages = (\[[\s\S]*?\]);\n\nexport default function/);
if (match) {
    const dataCode = `export const multiDayPackages = ${match[1]};`;
    fs.writeFileSync('src/data/multiDayPackages.ts', dataCode);
    console.log("Data extracted");
}

