const fs = require('fs');
let content = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

// The incorrect insertion starts around line 84:
//         'Santap malam romantis seafood di pinggir Pantai Jimbaran',    {      id: 'discover-waterfall-rice-terrace-monkey-forest',

// We'll just replace the whole messed up section.
content = content.replace(
  /'Santap malam romantis seafood di pinggir Pantai Jimbaran',\s*\{\s*id: 'discover-waterfall-rice-terrace-monkey-forest'[\s\S]*?'Mengunjungi Sawah Terasering Tegalalang & Cagar Alam Ubud Monkey Forest habitat kera ekor panjang'\s*\]\s*\}\s*\]/m,
  "'Santap malam romantis seafood di pinggir Pantai Jimbaran'\n      ]\n    }\n  ];"
);

fs.writeFileSync('src/components/TourActivitiesPage.tsx', content);
