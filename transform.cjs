const fs = require('fs');

// 1. Extract from TourCatalog.tsx
const catalogCode = fs.readFileSync('src/components/TourCatalog.tsx', 'utf-8');
const multiDayMatch = catalogCode.match(/const multiDayPackages = (\[[\s\S]*?\]);\n\nexport default function/);
if (!multiDayMatch) {
  console.log("Could not find multiDayPackages");
  process.exit(1);
}

const multiDayCode = multiDayMatch[1];
let multiDayPackages = [];
// Evaluate the code safely to get the array
eval(`multiDayPackages = ${multiDayCode}`);

// 2. Inject into RaftingDetailPage.tsx
const detailFile = 'src/components/RaftingDetailPage.tsx';
let detailCode = fs.readFileSync(detailFile, 'utf-8');

let newEntries = "";
for (const pkg of multiDayPackages) {
  const transformed = {
    id: pkg.id,
    title: pkg.title,
    badge: pkg.badge,
    tagline: pkg.tagline,
    rating: pkg.rating,
    reviewCount: pkg.reviewCount,
    originalPrice: pkg.originalPrice,
    adultPrice: pkg.adultPrice,
    childPrice: pkg.childPrice,
    duration: pkg.duration,
    difficulty: pkg.difficulty,
    image: pkg.image,
    highlights: pkg.highlights,
    itinerary: pkg.itinerary,
    inclusions: pkg.inclusions,
    exclusions: pkg.exclusions,
    // Add optional empty equipments so it renders cleanly
    equipment: []
  };
  
  newEntries += `  '${pkg.id}': ${JSON.stringify(transformed, null, 4)},\n`;
}

// Find where PACKAGE_DETAILS_DATA ends
const endIdx = detailCode.indexOf('\n};\n\nexport default function RaftingDetailPage');
if (endIdx === -1) {
    console.log("Could not find end of PACKAGE_DETAILS_DATA");
    process.exit(1);
}

detailCode = detailCode.slice(0, endIdx) + ',\n' + newEntries + detailCode.slice(endIdx);
fs.writeFileSync(detailFile, detailCode);

// 3. Inject into TourActivitiesPage.tsx
const activitiesFile = 'src/components/TourActivitiesPage.tsx';
let activitiesCode = fs.readFileSync(activitiesFile, 'utf-8');

// The objects for ActivityPackage are simpler
const activityEntries = multiDayPackages.map(pkg => ({
    id: pkg.id,
    title: pkg.title,
    categoryTag: pkg.categoryTag,
    originalPrice: pkg.originalPrice,
    discountedPrice: pkg.discountedPrice,
    savings: pkg.savings,
    discountPercentage: pkg.discountPercentage,
    duration: pkg.duration,
    location: pkg.location,
    difficulty: pkg.difficulty,
    capacity: pkg.capacity,
    description: pkg.description,
    image: pkg.image,
    highlights: pkg.highlights
}));

const activityEntriesStr = activityEntries.map(e => JSON.stringify(e, null, 4)).join(',\n') + ',\n';

// We want to add them to:
// - natureTrailPackages
// - fullDayTourPackages
// - animalEncounterPackages
// - beachPackages

const arraysToUpdate = ['natureTrailPackages', 'fullDayTourPackages', 'animalEncounterPackages', 'beachPackages'];

for (const arrName of arraysToUpdate) {
    const matchStr = `const ${arrName}: ActivityPackage[] = [`;
    const arrIdx = activitiesCode.indexOf(matchStr);
    if (arrIdx !== -1) {
        const insertIdx = arrIdx + matchStr.length;
        activitiesCode = activitiesCode.slice(0, insertIdx) + '\n' + activityEntriesStr + activitiesCode.slice(insertIdx);
    } else {
        console.log(`Could not find ${arrName}`);
    }
}

fs.writeFileSync(activitiesFile, activitiesCode);
console.log("Done!");
