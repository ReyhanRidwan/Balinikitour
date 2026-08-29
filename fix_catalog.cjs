const fs = require('fs');

let catalogCode = fs.readFileSync('src/components/TourCatalog.tsx', 'utf-8');

// Replace the array definition with an import
catalogCode = catalogCode.replace(/const multiDayPackages = \[[\s\S]*?\];\n\nexport default function/, 'import { multiDayPackages } from "../data/multiDayPackages";\n\nexport default function');

fs.writeFileSync('src/components/TourCatalog.tsx', catalogCode);
console.log("Updated TourCatalog.tsx");
