const fs = require('fs');
let content = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

const replacements = {
  '\\[#1A202C\\]': 'neutral-950',
  '\\[#2D3748\\]': 'neutral-900',
  '\\[#283141\\]': 'neutral-900',
  '\\[#4A5568\\]': 'neutral-800',
  '\\[#DD6B20\\]': 'gold-500',
  '\\[#C05621\\]': 'gold-600',
  '\\[#9C4221\\]': 'gold-700',
  '\\[#FBD38D\\]': 'gold-300',
  '\\[#E2E8F0\\]': 'gold-100',
  '\\[#CBD5E0\\]': 'gold-200/60',
  '\\[#A0AEC0\\]': 'gold-200/40',
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  content = content.replace(regex, value);
}

fs.writeFileSync('src/components/TourActivitiesPage.tsx', content);
