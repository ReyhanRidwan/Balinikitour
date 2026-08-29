const fs = require('fs');
let content = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

// The incorrect insertion happened at line 83-84
const brokenCode = `      ],
    {
      id: 'beach',
      name: 'Beach',
      tripCount: 3,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787386817/81ce1801-2f2e-4e73-b47c-9de76a04f02d.png',
      desc: 'Pantai memukau Nusa Penida, aktivitas Water Sport, hingga makan malam romantis pinggir pantai di Bali'
    }
  ];`;

const fixedCode = `      ]
    }
  ];`;

content = content.replace(brokenCode, fixedCode);

// Now let's inject it into the categories array
const searchStr = `    {
      id: 'animal-encounter',
      name: 'Animal Encounter',
      tripCount: 3,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787379481/940c1085-0d65-4285-904c-c84a343cc4f2.png',
      desc: 'Pengalaman satwa tak terlupakan mengunjungi Ubud Monkey Forest dan petualangan di sekitar hutan'
    }`;

const insertStr = `    {
      id: 'animal-encounter',
      name: 'Animal Encounter',
      tripCount: 3,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787379481/940c1085-0d65-4285-904c-c84a343cc4f2.png',
      desc: 'Pengalaman satwa tak terlupakan mengunjungi Ubud Monkey Forest dan petualangan di sekitar hutan'
    },
    {
      id: 'beach',
      name: 'Beach',
      tripCount: 3,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787386817/81ce1801-2f2e-4e73-b47c-9de76a04f02d.png',
      desc: 'Pantai memukau Nusa Penida, aktivitas Water Sport, hingga makan malam romantis pinggir pantai di Bali'
    }`;

content = content.replace(searchStr, insertStr);
fs.writeFileSync('src/components/TourActivitiesPage.tsx', content);
