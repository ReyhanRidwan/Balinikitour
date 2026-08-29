const fs = require('fs');
let lines = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8').split('\n');

// Find the index of "Santap malam romantis seafood"
let startIndex = -1;
let endIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Santap malam romantis seafood di pinggir Pantai Jimbaran')) {
    startIndex = i;
  }
  if (startIndex !== -1 && i > startIndex && lines[i].includes('Mengunjungi Sawah Terasering Tegalalang & Cagar Alam Ubud Monkey Forest habitat kera ekor panjang')) {
    endIndex = i;
    break;
  }
}

console.log('startIndex:', startIndex);
console.log('endIndex:', endIndex);

if (startIndex !== -1 && endIndex !== -1) {
  // We need to delete lines from startIndex to endIndex + 2
  // and insert the proper closing.
  lines.splice(startIndex, endIndex - startIndex + 3,
    "        'Santap malam romantis seafood di pinggir Pantai Jimbaran'",
    "      ]",
    "    }",
    "  ];"
  );
  
  fs.writeFileSync('src/components/TourActivitiesPage.tsx', lines.join('\n'));
} else {
  console.log('Could not find the range');
}
