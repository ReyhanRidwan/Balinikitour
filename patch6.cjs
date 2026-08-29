const fs = require('fs');
let content = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

const newPackage = `,
    {
      id: 'discover-waterfall-rice-terrace-monkey-forest',
      title: 'Discover Waterfall Rice Terrace and Monkey Forest',
      categoryTag: 'Animal Encounter',
      originalPrice: 84,
      discountedPrice: 25,
      savings: 59,
      discountPercentage: 70,
      duration: '8 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'Discover Waterfall Rice Terrace and Monkey Forest starting by visiting Culture Performance of Barong and Keris Dance which is a traditional Balinese dance that represents eternal good versus evil, followed by Art Craft Village, Tegenungan Waterfall, Tegalalang rice terrace, and Ubud Sacred Monkey Forest.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324453/fdf23903-3780-458b-a52f-e8402aafd246.png',
      highlights: [
        'Menyaksikan Pertunjukan Tari Barong & Keris (Simbol pertempuran antara kebaikan dan kejahatan)',
        'Mengunjungi Desa Kerajinan Seni (Kerajinan perak, emas, ukiran kayu, dan tenun batik)',
        'Mengunjungi dan menikmati pemandangan Air Terjun Tegenungan (Tinggi ~25m, bisa berenang)',
        'Mengunjungi Sawah Terasering Tegalalang & Cagar Alam Ubud Monkey Forest habitat kera ekor panjang'
      ]
    }
  ];`;

content = content.replace(/'Transportasi pribadi ber-AC \+ Bahan bakar & Biaya parkir'\n      \]\n    \}\n  \];/g, 
  "'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir'\n      ]\n    }" + newPackage);

fs.writeFileSync('src/components/TourActivitiesPage.tsx', content);
