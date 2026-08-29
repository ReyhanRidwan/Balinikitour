const fs = require('fs');
let content = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

const newPackagesStr = `

  // Beach Packages
  const beachPackages: ActivityPackage[] = [
    {
      id: 'water-sport-beaches-uluwatu-dinner',
      title: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner',
      categoryTag: 'Beach',
      originalPrice: 95,
      discountedPrice: 32,
      savings: 63,
      discountPercentage: 66,
      duration: '8 Hours',
      location: 'Jimbaran and Nusa Dua',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'playing some water activities at Tanjung Benoa beach as like Banana Boat ( complimentary ), Jet Ski, Parasailing, visiting stunning southern beaches, magnificent Uluwatu cliff temple sunset, and romantic Jimbaran seafood beach dinner.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787315862/3f1a2906-9dcd-4496-b6a1-2b19ae0231b1.png',
      highlights: [
        'Aktivitas Banana Boat gratis di Pantai Tanjung Benoa',
        'Jelajah pantai pasir putih eksotis Nusa Dua & Padang Padang',
        'Sunset spektakuler di atas tebing Pura Luhur Uluwatu',
        'Santap malam romantis seafood di pinggir Pantai Jimbaran'
      ]
    },
    {
      id: 'nusa-penida-east-trip',
      title: 'NUSA PENIDA ISLAND – EAST TRIP',
      categoryTag: 'Beach',
      originalPrice: 75,
      discountedPrice: 45,
      savings: 30,
      discountPercentage: 40,
      duration: '10 Hours',
      location: 'Sanur to Nusa Penida East',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'NUSA PENIDA ISLAND – EAST TRIP perjalanan laut 45 menit dengan Speed Boat dari Sanur menuju pesona Nusa Penida Timur: Diamond Beach dengan tebing terjal & air pirus, pantai tenang Atuh Beach, Tree House & Thousand Island View, dan perbukitan hijau Teletubbies Hill.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
      highlights: [
        'Menikmati keindahan tebing karts eksotis & air laut pirus di Diamond Beach',
        'Bersantai di teluk tenang Atuh Beach yang tersembunyi',
        'Berburu foto estetik di Molenteng Tree House (Rumah Pohon) & Thousand Island View',
        'Menikmati lanskap hijau unik perbukitan Teletubbies Hill',
        'Sudah termasuk tiket Fast Boat PP Sanur - Nusa Penida'
      ]
    },
    {
      id: 'nusa-penida-west-trip',
      title: 'NUSA PENIDA ISLAND – WEST TRIP',
      categoryTag: 'Beach',
      originalPrice: 75,
      discountedPrice: 45,
      savings: 30,
      discountPercentage: 40,
      duration: '10 Hours',
      location: 'Sanur to Nusa Penida West',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'NUSA PENIDA ISLAND – WEST TRIP tur eksklusif menjelajahi keajaiban alam Nusa Penida Barat: kolam renang alami Angel’s Billabong, tebing melengkung Broken Beach, pemandangan ikonik tebing T-Rex Kelingking Beach, dan pantai berpasir putih Crystal Bay.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
      highlights: [
        'Berfoto di tebing ikonik berbentuk T-Rex di Kelingking Beach',
        'Menjelajahi keunikan tebing karang berlubang di Broken Beach',
        'Melihat keindahan kolam renang alami berbingkai karang di Angel\\'s Billabong',
        'Bersantai & berenang di perairan tenang Crystal Bay (Cocok untuk Snorkeling/Sunset)',
        'Sudah termasuk tiket Fast Boat PP Sanur - Nusa Penida'
      ]
    }
  ];

  // The main activity categories
`;

content = content.replace(/\s*\/\/\s*The main activity categories\n/, newPackagesStr);

const newCatStr = `,
    {
      id: 'beach',
      name: 'Beach',
      tripCount: 3,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787386817/81ce1801-2f2e-4e73-b47c-9de76a04f02d.png',
      desc: 'Pantai memukau Nusa Penida, aktivitas Water Sport, hingga makan malam romantis pinggir pantai di Bali'
    }
  ];`;

content = content.replace(/\n    \}\n  \];/, newCatStr);

fs.writeFileSync('src/components/TourActivitiesPage.tsx', content);
