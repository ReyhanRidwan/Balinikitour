const fs = require('fs');
let content = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

// Update renderPackageCard type
content = content.replace(
  /categoryType: 'rafting-kayaking' \| 'water-sport' \| 'nature-trail' \| 'full-day-tour' \| 'animal-encounter'/g,
  "categoryType: 'rafting-kayaking' | 'water-sport' | 'nature-trail' | 'full-day-tour' | 'animal-encounter' | 'beach'"
);

// Add to the type of view state
content = content.replace(
  /type ViewState = 'overview' \| 'rafting-kayaking' \| 'package-detail' \| 'water-sport' \| 'nature-trail' \| 'full-day-tour' \| 'animal-encounter';/g,
  "type ViewState = 'overview' | 'rafting-kayaking' | 'package-detail' | 'water-sport' | 'nature-trail' | 'full-day-tour' | 'animal-encounter' | 'beach';"
);

// We need to inject the "Beach (3)" button into the filter bars.
// There are multiple places where <button onClick={() => setCurrentView('animal-encounter')}... is defined.
// Let's replace the block containing the animal-encounter button with both animal-encounter and beach.

// Because the "active" styling (bg-gold-500 text-neutral-950 font-bold) differs from the "inactive" styling (bg-neutral-900 text-gold-100 hover:bg-neutral-800), we'll do this carefully.

const inactiveBeachBtn = `                <button
                  onClick={() => {
                    setCurrentView('beach');
                    setPreviousView('beach');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Beach (3)
                </button>`;

const activeBeachBtn = `                <button
                  onClick={() => setCurrentView('beach')}
                  className="text-xs px-3.5 py-1 rounded-full bg-gold-500 text-neutral-950 font-bold cursor-pointer shadow-sm"
                >
                  Beach (3)
                </button>`;

// 1. Where Animal Encounter is INACTIVE (which ends with </button>)
// Replace </button>\n              </div> with </button>\n${inactiveBeachBtn}\n              </div>
content = content.replace(
  /                <\/button>\n              <\/div>/g,
  `                </button>\n${inactiveBeachBtn}\n              </div>`
);

// Wait, the active state for Animal Encounter is handled by replacing one specific place.
// Let's fix the specific place where Animal Encounter is active.
content = content.replace(
  /                <button\n                  onClick=\{\(\) => setCurrentView\('animal-encounter'\)\}\n                  className="text-xs px-3\.5 py-1 rounded-full bg-gold-500 text-neutral-950 font-bold cursor-pointer shadow-sm"\n                >\n                  Animal Encounter \(3\)\n                <\/button>\n                <button\n                  onClick=\{\(\) => \{\n                    setCurrentView\('beach'\);\n                    setPreviousView\('beach'\);\n                    window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\n                  \}\}\n                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"\n                >\n                  Beach \(3\)\n                <\/button>\n              <\/div>/,
  `                <button
                  onClick={() => {
                    setCurrentView('animal-encounter');
                    setPreviousView('animal-encounter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Animal Encounter (3)
                </button>
${activeBeachBtn}
              </div>`
); // Note: that actually breaks it, I should just build the dedicated view for Beach!


fs.writeFileSync('patch_beach_2.cjs.tmp', content);
