const fs = require('fs');
let code = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

const mapping = {
  'water-sport': 'waterSportMainPackages.length + snorkelingPackages.length + bananaBoatPackages.length',
  'rafting-kayaking': 'raftingPackages.length',
  'nature-trail': 'natureTrailPackages.length',
  'full-day-tour': 'fullDayTourPackages.length',
  'animal-encounter': 'animalEncounterPackages.length',
  'beach': 'beachPackages.length'
};

for (const [id, countStr] of Object.entries(mapping)) {
  const regex = new RegExp(`id:\\s*'${id}'[\\s\\S]*?tripCount:\\s*[^,]+,`);
  code = code.replace(regex, match => {
    return match.replace(/tripCount:\s*[^,]+,/, `tripCount: ${countStr},`);
  });
}

fs.writeFileSync('src/components/TourActivitiesPage.tsx', code);
