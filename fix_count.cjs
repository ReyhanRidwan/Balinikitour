const fs = require('fs');
let code = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

// The objects for categories are defined like this:
// { id: 'water-sport', name: 'Water Sport', tripCount: animalEncounterPackages.length, ... }
// { id: 'beach', name: 'Beach', tripCount: animalEncounterPackages.length, ... }

code = code.replace(
  /id:\s*'water-sport'[\s\S]*?tripCount:\s*animalEncounterPackages\.length,/,
  match => match.replace('animalEncounterPackages.length', 'waterSportMainPackages.length')
);

code = code.replace(
  /id:\s*'beach'[\s\S]*?tripCount:\s*animalEncounterPackages\.length,/,
  match => match.replace('animalEncounterPackages.length', 'beachPackages.length')
);

fs.writeFileSync('src/components/TourActivitiesPage.tsx', code);
