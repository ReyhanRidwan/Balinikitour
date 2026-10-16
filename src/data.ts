import { Experience, BookingAddon, Review, Vehicle } from './types';

// Let's use the exact generated image paths
export const EXPERIENCES: Experience[] = [
  {
    id: 'nusa-penida',
    title: 'Nusa Penida Golden Beach',
    tagline: 'Premium Exploration',
    shortDesc: 'Embark on a private speed boat to Nusa Penida. Witness the dramatic Kelingking beach cliffs and swim with beautiful ocean life.',
    longDesc: 'Experience the rugged coastal majesty of Nusa Penida in style. Board a high-speed private tender to the island’s most iconic geological formations. Walk along the dramatic, dinosaur-shaped Kelingking Cliff, dip into the crystal waters of Angel’s Billabong, and walk on the soft white sands of Crystal Bay. A completely curated, luxury island escape.',
    bgImage: '/nusa_penida_golden_beach_1783579187768.jpg',
    cardImage: '/nusa_penida_golden_beach_1783579187768.jpg',
    pricePerPerson: 195,
    duration: 'Full-Day (10 Hours)',
    location: 'Nusa Penida Island',
    difficulty: 'Active Adventure',
    rating: 4.9,
    reviewCount: 340,
    highlights: [
      'Private speedboat transfer to the island with VIP seating',
      'Exclusive guided trek down to the famous Kelingking Beach viewpoint',
      'VIP access to high-end beach clubs on the island',
      'Snorkeling with marine life at the coral-rich Toyapakeh reef',
      'Scenic photography at Angel’s Billabong and Broken Beach'
    ],
    inclusions: [
      'Private resort round-trip pick up in premium luxury car',
      'Private round-trip VIP speed boat charter',
      'Professional local guide and driver on Nusa Penida island',
      'Gourmet lunch at an elite ocean-view organic restaurant',
      'All island entrance tickets, retribution fees, and taxes',
      'Premium snorkeling gear and safety equipment'
    ],
    exclusions: [
      'Personal beach club tab (cocktails/cabana rentals)',
      'Guide tips'
    ],
    itinerary: [
      { time: '06:30 AM', title: 'Hotel VIP Pickup', desc: 'Private transfer from your resort directly to Sanur Harbour.' },
      { time: '07:30 AM', title: 'Private Speedboat Cruise', desc: 'Set sail across the ocean in a premium speed boat to Nusa Penida.' },
      { time: '08:30 AM', title: 'Kelingking Cliff Viewpoint', desc: 'Arrive and gaze upon the majestic prehistoric dinosaur cliff. Enjoy optional trekking.' },
      { time: '11:00 AM', title: 'Angel’s Billabong & Broken Beach', desc: 'Marvel at the stunning emerald natural infinity pool and the dramatic rock archway.' },
      { time: '01:00 PM', title: 'Luxury Ocean-View Lunch', desc: 'Relish a delicious 3-course organic meal overlooking the azure Penida coastline.' },
      { time: '03:00 PM', title: 'Toyapakeh Reef Snorkeling', desc: 'Swim among colorful sea turtles and live coral gardens in crystal waters.' },
      { time: '05:30 PM', title: 'Return Sunset Sail', desc: 'Cruise back to Sanur while watching a glorious Bali ocean sunset.' }
    ]
  },
  {
    id: 'ocean-escape',
    title: 'Ocean Luxury Escape',
    tagline: 'Private Yacht Cruise',
    shortDesc: 'Sail the pristine blue waters of Bali in a premium yacht. Dive into coral reefs and dine under the sunset.',
    longDesc: 'Charter your private sanctuary on the sparkling Indian Ocean. Our customized 60-foot luxury yacht glides through Nusa Penida and Lembongan waters. Sunbathe on expansive teak decks, snorkel among vibrant coral gardens, and enjoy premium services provided by a dedicated captain and five-star onboard crew.',
    bgImage: '/bali_ocean_bg_1783528769356.jpg',
    cardImage: '/ocean_luxury_escape_1783528733687.jpg',
    pricePerPerson: 290,
    duration: 'Full-Day (10 Hours)',
    location: 'Nusa Penida & Lembongan',
    difficulty: 'Relaxed / Easy',
    rating: 5.0,
    reviewCount: 98,
    highlights: [
      'Exclusively chartered 60ft luxury yacht with private crew',
      'Snorkeling with majestic Manta Rays in crystal-clear bays',
      'Gourmet seafood lunch freshly grilled onboard by our chef',
      'Stand-up paddleboarding and sea-kayaking in secluded coves',
      'Breathtaking open-ocean sunset toast with premium champagne'
    ],
    inclusions: [
      'Private luxury harbor transfers',
      'Exclusive yacht charter with Captain and hospitality crew',
      'Full premium snorkeling and water sports equipment',
      'Fresh gourmet seafood BBQ lunch and tropical fruit platters',
      'Unlimited soft drinks, premium tea, coffee, and juices',
      'Complimentary bottle of premium French Champagne'
    ],
    exclusions: [
      'Scuba diving certification courses',
      'Nusa Penida land tours (available as premium add-on)',
      'Crew gratuities'
    ],
    itinerary: [
      {
        time: '08:00 AM',
        title: 'Harbor Welcome',
        desc: 'Arrive at Serangan Private Marina with VIP welcome drinks and immediate boarding.'
      },
      {
        time: '09:00 AM',
        title: 'Sailing to Nusa Penida',
        desc: 'Cruise across the Badung Strait. Spot flying fish and enjoy panoramic views of Bali’s southern cliffs.'
      },
      {
        time: '10:30 AM',
        title: 'Swim with Manta Rays',
        desc: 'Drop anchor at Manta Bay. Snorkel alongside the majestic manta rays under the supervision of our marine guides.'
      },
      {
        time: '12:30 PM',
        title: 'Onboard Gourmet Feast',
        desc: 'Relish a fresh, multi-course seafood barbecue prepared on deck, served with premium wines and local delicacies.'
      },
      {
        time: '02:30 PM',
        title: 'Lembongan Lagoon Cruise',
        desc: 'Explore the scenic mangrove forests and limestone caves of Nusa Lembongan via stand-up paddleboard or kayak.'
      },
      {
        time: '04:30 PM',
        title: 'Sunset Sailing & Toast',
        desc: 'Unwind on the front deck as the yacht cruises home. Raise a glass of chilled champagne as the sky burns in orange and pink.'
      },
      {
        time: '06:30 PM',
        title: 'Resort Return',
        desc: 'Disembark at the marina where your private driver is waiting to escort you back to your hotel.'
      }
    ]
  },
  {
    id: 'jungle-retreat',
    title: 'Serene Jungle Retreat',
    tagline: 'Ubud Wellness Sanctuary',
    shortDesc: 'Unwind in the heart of tropical rainforests. Luxuriate in cascading infinity pools and holistic wellness therapies.',
    longDesc: 'Disconnect from the mundane and submerge yourself in Ubud’s dense, emerald-green jungle canopy. This wellness sanctuary experience features private multi-tiered infinity pools, a bespoke volcanic-stone massage, personalized meditation sessions with a Balinese healer, and a customized fine-dining vegan or organic culinary menu.',
    bgImage: '/bali_jungle_bg_1783528784335.jpg',
    cardImage: '/serene_jungle_retreat_1783528749017.jpg',
    pricePerPerson: 185,
    duration: 'Full-Day (7 Hours)',
    location: 'Tegallalang, Ubud',
    difficulty: 'Centering / Peace',
    rating: 4.8,
    reviewCount: 142,
    highlights: [
      'Private wellness sanctuary cabana overlooking Ayung river',
      'Traditional Balinese cleansing ritual (Melukat) with a holy priest',
      '90-minute volcanic basalt hot stone massage session',
      'Private organic cooking masterclass with our executive chef',
      'Premium herbal tea pairing tasting session'
    ],
    inclusions: [
      'Bespoke resort-to-sanctuary round-trip private transport',
      'Private wellness host and certified yoga instructor',
      'Access to exclusive multi-tiered jungle infinity pool suite',
      '90-minute hot stone therapy or custom herbal massage',
      'Traditional Melukat ceremonial materials and sarongs',
      'Four-course organic vegan or wellness gourmet degustation lunch'
    ],
    exclusions: [
      'Additional retail purchases at the holistic spa boutique',
      'Acupuncture or specialized medical therapies',
      'Host tips'
    ],
    itinerary: [
      {
        time: '07:30 AM',
        title: 'Morning Forest Drive',
        desc: 'Enjoy a scenic, misty morning drive through the highland hills and traditional villages toward Ubud.'
      },
      {
        time: '08:30 AM',
        title: 'Yoga & River Sound Meditation',
        desc: 'Begin with a gentle Hatha yoga session on an open-air bamboo deck, sound-tracked by the roaring Ayung River.'
      },
      {
        time: '10:00 AM',
        title: 'Holy Water Purifying Ritual',
        desc: 'Settle in a private waterfall alcove. Partake in a traditional cleansing ceremony (Melukat) to refresh the spirit and mind.'
      },
      {
        time: '11:30 AM',
        title: 'The Spa Masterclass & Treatment',
        desc: 'Receive our signature 90-minute volcanic basalt hot stone massage, promoting deep cellular renewal.'
      },
      {
        time: '01:30 PM',
        title: 'Gourmet Wellness Degustation',
        desc: 'Savor a handcrafted 4-course organic lunch made entirely from local volcanic-soil crops and superfoods.'
      },
      {
        time: '03:00 PM',
        title: 'Rice Field Walk & Tea Pairing',
        desc: 'Take a meditative stroll through the emerald Tegallalang terraces, concluding with a tasting of rare organic Balinese herbal teas.'
      },
      {
        time: '04:30 PM',
        title: 'Sunset Departure',
        desc: 'Bid farewell to the sanctuary as you are driven back to your hotel, feeling profoundly renewed.'
      }
    ]
  },
  {
    id: 'jeep-adventure',
    title: 'Sewa Mobil Kijang Innova',
    tagline: 'Premium Rental',
    shortDesc: 'Nikmati perjalanan keliling Bali dengan kenyamanan ekstra bersama armada Toyota Kijang Innova premium kami.',
    longDesc: 'Sewa mobil Toyota Kijang Innova premium untuk kenyamanan maksimal Anda di Bali. Dilengkapi dengan kabin yang luas, pendingin udara ganda, sistem suara premium, serta kursi kapten yang mewah. Sangat cocok untuk perjalanan bisnis, liburan keluarga, maupun acara VIP di Pulau Dewata.',
    bgImage: '/car_innova_1783582975292.jpg',
    cardImage: '/car_innova_1783582975292.jpg',
    pricePerPerson: 50,
    duration: 'Harian (12 Jam)',
    location: 'Seluruh Bali',
    difficulty: 'Luxury Ride',
    rating: 4.9,
    reviewCount: 124,
    highlights: [
      'Armada Toyota Kijang Innova tipe terbaru berstandar VIP',
      'AC double blower super dingin untuk iklim tropis',
      'Kabin super luas dan senyap untuk kenyamanan maksimal',
      'Layanan penjemputan dan pengantaran bandara gratis',
      'Sopir profesional ramah dan berpengalaman'
    ],
    inclusions: [
      'Sewa mobil Kijang Innova ber-AC bersih & prima',
      'Bahan bakar minyak (BBM) penuh untuk hari pertama',
      'Sopir pribadi pariwisata berlisensi resmi',
      'Peralatan kenyamanan penumpang (tisu, air mineral dingin)'
    ],
    exclusions: [
      'Biaya parkir destinasi dan biaya tol',
      'Makan sopir harian',
      'Tip sukarela untuk sopir harian'
    ],
    itinerary: [
      {
        time: '08:00 AM',
        title: 'Penjemputan Hotel/Bandara',
        desc: 'Sopir VIP kami akan menjemput Anda di lobi hotel atau terminal kedatangan bandara tepat waktu.'
      },
      {
        time: '09:00 AM',
        title: 'Eksplorasi Rute Kustom Anda',
        desc: 'Mulai perjalanan wisata Anda. Sopir kami siap merekomendasikan destinasi terbaik sesuai minat Anda.'
      },
      {
        time: '12:00 PM',
        title: 'Saran Tempat Makan Siang Terbaik',
        desc: 'Nikmati kuliner Bali terpopuler sesuai rekomendasi sopir kami yang memahami selera kuliner khas.'
      },
      {
        time: '02:00 PM',
        title: 'Lanjutkan Perjalanan Wisata',
        desc: 'Kunjungi pantai tersembunyi, pusat seni Ubud, pura suci, atau pusat perbelanjaan oleh-oleh.'
      },
      {
        time: '06:00 PM',
        title: 'Sunset Gaze & Santai Sore',
        desc: 'Menuju lokasi sunset favorit seperti Uluwatu atau Canggu untuk menikmati senja Bali yang indah.'
      },
      {
        time: '08:00 PM',
        title: 'Kembali ke Hotel / Airport Drop',
        desc: 'Pengantaran kembali dengan selamat ke hotel atau bandara sesuai jadwal yang Anda tentukan.'
      }
    ]
  },
  {
    id: 'nusa-dua',
    title: 'Nusa Dua Exclusive Beach',
    tagline: 'Elite Beach Leisure',
    shortDesc: 'Rejuvenate on pristine white sands. Relax in premium private cabanas with five-star butler services.',
    longDesc: 'Treat yourself to the pinnacle of relaxation in Bali’s most exclusive gated resort enclave. Nusa Dua Exclusive Beach offers quiet, untouched white sands, private oceanfront cabanas, tailored beachside massages, and fine dining under swaying palms. Experience the serene security and luxury of world-class beach club leisure.',
    bgImage: '/nusa_dua_beach_1783579200979.jpg',
    cardImage: '/nusa_dua_beach_1783579200979.jpg',
    pricePerPerson: 210,
    duration: 'Full-Day (8 Hours)',
    location: 'Nusa Dua Gated Enclave',
    difficulty: 'Very Easy / Relaxed',
    rating: 4.8,
    reviewCount: 180,
    highlights: [
      'Private sea-view double sunbed cabana in an elite resort partner club',
      'Personal premium butler service throughout the entire day',
      'Exclusive 60-minute therapeutic beachfront massage',
      'Gourmet beachside BBQ lunch featuring fresh lobster and wagyu beef',
      'Complimentary access to watersports (Stand-up Paddleboard & Kayak)'
    ],
    inclusions: [
      'Private air-conditioned hotel transfers in luxury Alphard van',
      'Premium daybed reservation with high-end towels and amenities',
      'Butler services and dedicated hospitality host',
      '3-course gourmet beachside lunch and cold press juices',
      '60-minute relaxing body massage by certified spa therapist'
    ],
    exclusions: [
      'Alcoholic spirits (premium cocktails list available at bar)',
      'Jet ski or banana boat rentals'
    ],
    itinerary: [
      { time: '09:00 AM', title: 'Luxury Hotel Pickup', desc: 'Depart your villa in a premium multi-purpose vehicle.' },
      { time: '10:00 AM', title: 'Cabana Welcome & Sunrise Lounge', desc: 'VIP welcome with fresh coconut drinks and settling into your private sunbed.' },
      { time: '11:00 AM', title: 'Aqua Sports & Swim', desc: 'Gentle paddleboarding or swimming in the calm, coral-protected Nusa Dua lagoon.' },
      { time: '01:00 PM', title: 'Lobster & Wagyu Beachside Feast', desc: 'Savor a freshly grilled chef’s platter brought straight to your private cabana.' },
      { time: '03:00 PM', title: 'Beachfront Therapeutic Massage', desc: 'Unwind completely with the sound of waves during a luxurious 60-minute therapy.' },
      { time: '05:00 PM', title: 'High Tea Sunset Mocktails', desc: 'Gaze at the pristine horizon while enjoying premium afternoon tea and sweets.' },
      { time: '06:00 PM', title: 'Return Transfer', desc: 'Scenic drive back to your resort feeling fully pampered.' }
    ]
  },
  {
    id: 'bedugul-danau',
    title: 'Bedugul Danau Beratan',
    tagline: 'Sacred Temples & Highlands',
    shortDesc: 'A misty cultural escape to the floating temple on Lake Beratan, coupled with botanical gardens and scenic highlands.',
    longDesc: 'Escape the tropical heat and journey into Bali’s misty mountain highlands. Bedugul is home to the magical Ulun Danu Beratan Temple, which appears to float on the calm, reflective waters of a volcanic lake. Breathe the fresh pine-scented air, walk through towering bamboo forests, and explore local strawberry fields and standard Balinese shrines.',
    bgImage: '/bedugul_danau_beratan_1783579216449.jpg',
    cardImage: '/bedugul_danau_beratan_1783579216449.jpg',
    pricePerPerson: 125,
    duration: 'Full-Day (9 Hours)',
    location: 'Bedugul Highlands',
    difficulty: 'Easy Cultural',
    rating: 4.7,
    reviewCount: 220,
    highlights: [
      'Private traditional boat charter on Lake Beratan for close-up temple photos',
      'VIP guided tour of Ulun Danu temple complex with certified historian',
      'Scenic drive through the scenic botanical garden in a golf cart',
      'Gourmet highland cuisine lunch inside an exclusive lakefront gazebo',
      'Exotic organic strawberry picking and tasting session'
    ],
    inclusions: [
      'Full private transport in luxury SUV with experienced driver-guide',
      'All temple entry passes and historical guide fees',
      'Private boat charter on Lake Beratan',
      'Golf cart rental inside Bali Botanical Gardens',
      'Premium highland buffet or ala carte lunch with organic ingredients'
    ],
    exclusions: [
      'Personal shopping at traditional Candi Kuning market',
      'Tips'
    ],
    itinerary: [
      { time: '08:00 AM', title: 'Misty Highlands Drive', desc: 'Drive through beautiful winding roads into the cool northern mountains.' },
      { time: '09:45 AM', title: 'Ulun Danu Beratan Exploration', desc: 'Walk around the iconic sacred temple and discover its rich spiritual heritage.' },
      { time: '11:00 AM', title: 'Reflective Lake Boat Charter', desc: 'Board a traditional wooden boat to cruise the volcanic lake for panoramic views.' },
      { time: '12:30 PM', title: 'Highland Garden Gazebo Lunch', desc: 'Feast on organic farm-fresh food surrounded by quiet lakes and pine forests.' },
      { time: '02:00 PM', title: 'Botanical Gardens Golf Tour', desc: 'Ride a private golf cart through towering giant trees, orchids, and fern collections.' },
      { time: '03:30 PM', title: 'Strawberry Farm & Local Market', desc: 'Pick sweet highland strawberries and explore local spice markets.' },
      { time: '05:00 PM', title: 'Return Road Journey', desc: 'Descend back down to the southern coast as twilight settles.' }
    ]
  },
  {
    id: 'lempuyang',
    title: 'Lempuyang Luhur Temple',
    tagline: 'Heaven Gates Photography',
    shortDesc: 'Witness the iconic Gates of Heaven with Mt. Agung in the background, with a private photographer and VIP queue pass.',
    longDesc: 'Stand between the sacred stone gates of Pura Lempuyang, framing the towering volcanic cone of Mount Agung in the clouds. With a dedicated private photographer on hand and our exclusive VIP booking system that minimizes wait times, this journey delivers stunning visual memories and a deep connection to East Bali’s ancient Hindu spirituality.',
    bgImage: '/lempuyang_temple_1783579255281.jpg',
    cardImage: '/lempuyang_temple_1783579255281.jpg',
    pricePerPerson: 130,
    duration: 'Full-Day (11 Hours)',
    location: 'Karangasem, East Bali',
    difficulty: 'Easy / Walking stairs',
    rating: 4.9,
    reviewCount: 410,
    highlights: [
      'VIP priority booking at the famous Lempuyang Gates of Heaven',
      'Bespoke private travel photographer with pro camera equipment',
      'Guided walkthrough of Tirta Gangga Royal Water Palace',
      'Scenic lunch overlooking the lush terraced valley of Karangasem',
      'Visit to the hidden mountain sanctuary of Pura Penataran'
    ],
    inclusions: [
      'Private luxury transportation in high-end SUV',
      'All entrance fees, sarong rentals, and local shuttle tickets',
      'Professional private photographer with high-res digital delivery',
      'Sumptuous 3-course Balinese heritage lunch',
      'Refreshments, mineral water, and luxury towels'
    ],
    exclusions: [
      'Prints of photographs (all digital files provided instead)',
      'Personal offerings'
    ],
    itinerary: [
      { time: '05:00 AM', title: 'Early Sunrise Departure', desc: 'Depart early to secure the best lighting conditions at the temple.' },
      { time: '07:30 AM', title: 'Gates of Heaven Portrait', desc: 'Behold the incredible Gateway to Mt. Agung. Capture world-famous mirrored photos.' },
      { time: '10:00 AM', title: 'Tirta Gangga Water Palace', desc: 'Stroll across the stone steps of the royal fish pond surrounded by fountains.' },
      { time: '12:30 PM', title: 'Karangasem Heritage Lunch', desc: 'Enjoy local organic delicacies in a luxury restaurant with sweeping valley views.' },
      { time: '02:30 PM', title: 'Taman Ujung Water Palace', desc: 'Explore the majestic historic European-Balinese royal architecture by the sea.' },
      { time: '04:30 PM', title: 'Scenic Coastline Drive', desc: 'Wind down with a beautiful ocean view drive back to your resort.' }
    ]
  },
  {
    id: 'uluwatu',
    title: 'Uluwatu Sunset Horizon',
    tagline: 'Romantic Sunset Cliff',
    shortDesc: 'A spectacular ocean cliff journey. Watch the historic Kecak Dance, visit Uluwatu Temple, and dine at Jimbaran bay.',
    longDesc: 'Dramatically perched 70 meters above the roaring waves of the Indian Ocean, Uluwatu Temple is a timeless wonder. Our curated private experience grants you prime amphitheater seats for the legendary sunset Kecak Fire Dance, private guides to navigate the cliff paths, and concludes with an elite candlelight seafood dinner directly on the beach at Jimbaran Bay.',
    bgImage: '/uluwatu_cliff_1783579271777.jpg',
    cardImage: '/uluwatu_cliff_1783579271777.jpg',
    pricePerPerson: 155,
    duration: 'Half-Day (7 Hours)',
    location: 'Uluwatu Cliff, Jimbaran',
    difficulty: 'Easy / Walking',
    rating: 4.8,
    reviewCount: 290,
    highlights: [
      'VIP front-row seating at the world-famous Kecak Cliffside Dance',
      'Private guided walkthrough of the ancient 11th-century Uluwatu Temple',
      'Scenic walk along the secure, cliffside botanical stone paths',
      'Private candlelight seafood lobster dinner on the sands of Jimbaran Beach',
      'Stunning sunset viewing from the island’s absolute southern tip'
    ],
    inclusions: [
      'Private premium vehicle roundtrip pick up',
      'All temple entrance fees, sarong rentals, and private guide services',
      'VIP tickets to the sunset Kecak Fire Dance',
      'Luxury beachfront seafood BBQ dinner (includes lobster, prawns, fish, clams)',
      'Chilled water and luxury passenger comfort kit'
    ],
    exclusions: [
      'Alcoholic drinks at Jimbaran beach (available to purchase)',
      'Gratuities'
    ],
    itinerary: [
      { time: '02:30 PM', title: 'Resort Departure', desc: 'Settle into your private car and head south to the Bukit Peninsula.' },
      { time: '03:45 PM', title: 'Uluwatu Cliffside Walk', desc: 'Witness ancient clifftop shrines and spot friendly wild temple monkeys.' },
      { time: '05:30 PM', title: 'Kecak Fire & Sunset Dance', desc: 'Take your VIP seats as the sun sinks into the sea and the fiery dance begins.' },
      { time: '07:30 PM', title: 'Jimbaran Bay Candlelight Dinner', desc: 'Sink your toes in the sand as you relish a freshly grilled seafood basket under the stars.' },
      { time: '09:30 PM', title: 'Return Transfer', desc: 'Smooth drive back to your resort to end a beautiful romantic evening.' }
    ]
  },
  {
    id: 'white-water-rafting',
    title: 'Whitewater Rafting',
    tagline: 'River Adventure',
    shortDesc: 'Taklukkan derasnya jeram sungai Ayung dan Telaga Waja dengan pemandangan tebing batu alam dan air terjun memukau.',
    longDesc: 'Nikmati petualangan arung jeram Whitewater Rafting paling mendebarkan di Bali. Lintasi jeram kelas II & III di Sungai Ayung Ubud atau kelas III & IV di Telaga Waja Karangasem dengan pemandu profesional berstandar internasional, perlengkapan keselamatan premium, dan makan siang prasmanan lezat di tepi sungai.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1786184128/e0699feb-0cd5-4d84-9055-d2819efa51a4.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1786184128/e0699feb-0cd5-4d84-9055-d2819efa51a4.png',
    pricePerPerson: 65,
    duration: 'Setengah Hari (6 Jam)',
    location: 'Ayung River, Ubud',
    difficulty: 'Seru / Adrenalin',
    rating: 4.9,
    reviewCount: 215,
    highlights: [
      'Arung jeram 12-16 km menyusuri jeram kelas II-III dengan air jernih',
      'Pemandangan ukiran batu kuno, air terjun alami, dan tebing hijau',
      'Peralatan keselamatan lengkap standar internasional (helm, pelampung, dayung)',
      'Instruktur river guide privat berpengalaman dan bersertifikasi',
      'Fasilitas shower air hangat, handuk bersih, dan makan siang prasmanan'
    ],
    inclusions: [
      'Transportasi privat antar-jemput ber-AC dari hotel',
      'Peralatan rafting lengkap dan instruktur profesional',
      'Fasilitas kamar bilas, shower air panas, dan handuk',
      'Makan siang prasmanan lezat khas Bali'
    ],
    exclusions: [
      'Foto & video dokumentasi profesional (tersedia opsional)',
      'Minuman beralkohol',
      'Tip sukarela untuk river guide'
    ],
    itinerary: [
      { time: '08:00 AM', title: 'Penjemputan Hotel Privat', desc: 'Sopir kami menjemput Anda di hotel menuju start point rafting.' },
      { time: '09:30 AM', title: 'Brifing & Pemasangan Alat', desc: 'Pemakaian helm, pelampung, dan brifing teknik mendayung serta keselamatan.' },
      { time: '10:00 AM', title: 'Mulai Petualangan Rafting', desc: 'Menyusuri jeram seru selama 2-2.5 jam dengan pemandangan air terjun dan hutan tropis.' },
      { time: '12:30 PM', title: 'Finish & Shower Hangat', desc: 'Tiba di finish point, bilas badan dengan air hangat dan ganti pakaian.' },
      { time: '01:00 PM', title: 'Makan Siang Prasmanan', desc: 'Menikmati makan siang lezat di restoran tepi sungai.' },
      { time: '02:30 PM', title: 'Kembali Ke Hotel', desc: 'Diantar kembali ke hotel dengan nyaman.' }
    ]
  },
  {
    id: 'trekking',
    title: 'Trekking',
    tagline: 'Sunrise & Mountain Hike',
    shortDesc: 'Daki Gunung Batur menjelang fajar untuk menyaksikan matahari terbit spektakuler di atas awan dan kaldera vulkanik.',
    longDesc: 'Rasakan sensasi petualangan mendaki gunung terbaik di Bali dengan Mount Batur Sunrise Trekking. Ditemani oleh pemandu lokal berlisensi, Anda akan mencapai puncak berketinggian 1.717 mdpl tepat saat mentari pagi menyinari lautan awan, Danau Batur, dan Gunung Rinjani di kejauhan, disempurnakan dengan sarapan telur rebus uap vulkanik alami.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
    pricePerPerson: 55,
    duration: 'Pagi Hari (7 Jam)',
    location: 'Mount Batur, Kintamani',
    difficulty: 'Menengah / Aktif',
    rating: 4.9,
    reviewCount: 380,
    highlights: [
      'Pemandangan matahari terbit spektakuler di atas lautan awan Batur',
      'Pemandu trekking lokal ramah, profesional, dan berpengalaman',
      'Sarapan unik di puncak dengan telur & pisang rebus uap vulkanik',
      'Eksplorasi kawah aktif dan gua lava bersejarah',
      'Kunjungan opsional relaksasi ke pemandian air panas alami (Hot Spring)'
    ],
    inclusions: [
      'Penjemputan dan pengantaran privat dari hotel',
      'Tiket masuk kawasan Gunung Batur & retribusi Kintamani',
      'Pemandu trekking lokal bersertifikasi',
      'Senter kepala / trekking pole & air mineral',
      'Sarapan hangat di puncak gunung (roti, telur vulkanik, teh/kopi panas)'
    ],
    exclusions: [
      'Tiket masuk pemandian air panas (opsional add-on)',
      'Pengeluaran pribadi',
      'Tip untuk pemandu'
    ],
    itinerary: [
      { time: '02:00 AM', title: 'Penjemputan Dini Hari', desc: 'Berangkat dari hotel menuju basecamp pendakian Kintamani.' },
      { time: '03:45 AM', title: 'Mulai Pendakian', desc: 'Brifing singkat, menyalakan senter, dan mulai mendaki jalur kawah.' },
      { time: '06:00 AM', title: 'Sunrise di Puncak Batur', desc: 'Menyaksikan fajar keemasan di atas awan sembari menikmati sarapan hangat.' },
      { time: '07:30 AM', title: 'Jelajah Kaldera & Turun', desc: 'Melihat celah uap panas bumi dan berjalan menuruni gunung.' },
      { time: '09:30 AM', title: 'Relax di Natural Hot Spring', desc: 'Berendam santai di kolam air panas alami menghadap danau (opsional).' },
      { time: '12:00 PM', title: 'Kembali Ke Hotel', desc: 'Tiba kembali di resort untuk istirahat.' }
    ]
  },
  {
    id: 'paragliding',
    title: 'Paragliding',
    tagline: 'Tandem Cliff Flight',
    shortDesc: 'Terbang bebas melayang di atas tebing megah dan pantai eksotis Bali Selatan bersama pilot tandem berlisensi.',
    longDesc: 'Dapatkan sudut pandang elang paling spektakuler atas Pulau Dewata dengan Bali Tandem Paragliding. Meluncur dari tebing tinggi di Nyang Nyang atau Timbis Beach, melayang di atas deburan ombak Samudera Hindia, pasir putih, dan pura kuno dengan hembusan angin laut tropis yang menyegarkan. Aman untuk pemula.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052460/02018cef-c1e4-4d4c-b918-9c51ff9387b3.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052460/02018cef-c1e4-4d4c-b918-9c51ff9387b3.png',
    pricePerPerson: 85,
    duration: 'Setengah Hari (4 Jam)',
    location: 'Nyang Nyang & Timbis, Uluwatu',
    difficulty: 'Mudah / Mendebarkan',
    rating: 5.0,
    reviewCount: 165,
    highlights: [
      'Penerbangan tandem 15-20 menit bersama pilot instruktur internasional',
      'Pemandangan udara 360 derajat tebing karst dan garis pantai biru toska',
      'Dokumentasi video & foto full HD gratis menggunakan GoPro tongsis',
      'Peralatan parasut dan harness berstandar penerbangan dunia',
      'Sertifikat penerbangan tandem resmi'
    ],
    inclusions: [
      'Transportasi privat pulang-pergi dari hotel',
      'Instruktur pilot paragliding berpengalaman dan bersertifikat FASI/APPI',
      'Peralatan keselamatan terbang lengkap',
      'Rekaman video dan foto GoPro resolusi tinggi'
    ],
    exclusions: [
      'Pakaian khusus penerbangan (disarankan memakai sepatu kets)',
      'Tip untuk pilot'
    ],
    itinerary: [
      { time: '11:00 AM', title: 'Penjemputan Hotel', desc: 'Menuju takeoff point di tebing pantai Nyang Nyang / Timbis.' },
      { time: '12:30 PM', title: 'Brifing & Pemeriksaan Angin', desc: 'Pilot memeriksa kondisi angin dan memberikan arahan takeoff & landing.' },
      { time: '01:00 PM', title: 'Takeoff & Melayang di Udara', desc: 'Terbang melayang di atas laut dan tebing sambil merekam momen dengan GoPro.' },
      { time: '01:30 PM', title: 'Landing & Transfer File Video', desc: 'Mendarat mulus dan langsung transfer file video HD ke smartphone Anda.' },
      { time: '03:00 PM', title: 'Kembali Ke Hotel', desc: 'Perjalanan santai kembali ke hotel.' }
    ]
  },
  {
    id: 'off-road-tours',
    title: 'Adventure Off Road Jeep Mount Batur Sunrise',
    tagline: 'Top Pick • 4x4 Classic Jeep Sunrise & Black Lava Adventure',
    shortDesc: 'Experience the breathtaking sunrise at Mount Batur with our exclusive Mount Batur Sunrise Jeep Tour.',
    longDesc: 'Experience the breathtaking sunrise at Mount Batur with our exclusive Mount Batur Sunrise Jeep Tour. This tour offers an extraordinary adventure as you explore the stunning volcanic landscape and witness the sun rise over the horizon from about 1,365 meters above sea level. Your journey begins with a convenient pickup from your accommodation, where our professional driver will ensure a comfortable and smooth ride to the Kintamani meeting point. From there, you’ll start a thrilling jeep ride through rugged terrain, leading you to spectacular panoramic views.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052559/bf039127-8977-4546-a0bf-aadde17504fd.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052559/bf039127-8977-4546-a0bf-aadde17504fd.png',
    pricePerPerson: 35,
    duration: '10 Jam',
    location: 'Mount Batur, Kintamani',
    difficulty: 'Sedang (Medium)',
    rating: 4.9,
    reviewCount: 356,
    highlights: [
      'Off-Road Adventure: Embark on an off-road journey in a specially designed jeep, reaching remote viewpoints inaccessible by regular vehicles.',
      'Spectacular Sunrise: Witness the magical sunrise over Mount Batur (about 1,365 meters above sea level), its warm hues illuminating the volcanic landscape.',
      'Panoramic Views: Enjoy breathtaking panoramic views of Mount Batur and its caldera, capturing the natural beauty of Bali’s iconic volcano.',
      'Expert Jeep Drivers: Explore with experienced drivers navigating rough terrains, ensuring a safe and thrilling adventure.',
      'Unforgettable Experience: Combine the thrill of off-road jeep exploration with the tranquility of a sunrise.'
    ],
    inclusions: [
      'Air-conditioned Transport service with English Speaking Driver',
      'Light breakfast on the sunrise point (Banana sandwich, Chocolate Bars, Hard Boiled Egg)',
      'Entrance ticket fee to Mount Batur area and government of Bali',
      'One bottle mineral water each person during your Jeep Tour',
      'Hot drink (Tea, Coffee or Hot Chocolate)',
      '4x4 Classic Jeep Tour & Professional Jeep Driver'
    ],
    exclusions: [
      'Extra Money for any purchasing on the rest spot area',
      'Photo or Video by professional photography available to purchase on the spot',
      'Other additional expenses',
      'Souvenir and Tipping'
    ],
    itinerary: [
      { time: '02:00 AM', title: 'Pick-up services at hotel', desc: 'English speaking driver will pick up at lobby hotel with private transportation.' },
      { time: '04:20 AM', title: 'Arrive at Starting Point', desc: 'Arrive at starting point where Jeep Adventure begins after short briefing by our local guide.' },
      { time: '04:30 AM', title: '30 Minute Off-Road Adventure', desc: 'Experiences 30 minute off-road adventure to reach sunrise point 1.400 meters above sea level.' },
      { time: '05:00 AM', title: 'Breakfast at Sunrise Point', desc: 'Reach sunrise point and enjoy light breakfast while waiting for the sunrise.' },
      { time: '06:00 AM', title: 'Magical Sunrise Time', desc: 'Witness the breathtaking sunrise and capture photos/videos of Mount Batur caldera.' },
      { time: '07:30 AM', title: 'Explore Black Lava & Black Sand', desc: 'Explore historic black lava from 1963 and black sand by your 4x4 classic jeep.' },
      { time: '08:30 AM', title: 'Drive Back to Hotel', desc: 'Comfortable return drive back to your accommodation.' }
    ]
  },
  {
    id: 'telaga-waja-rafting',
    title: 'White Water Rafting at Telaga Waja River BALI',
    tagline: 'Adrenaline Rapids Adventure (Grade III-IV)',
    shortDesc: 'Petualangan arung jeram sepanjang 14 km di Sungai Telaga Waja dengan jeram kelas 3 & 4 berair jernih alami.',
    longDesc: 'Get ready for an adrenaline-pumping adventure as you navigate the exhilarating rapids of Telaga Waja river. Meliputi arung jeram 14 km (2.5-3 jam) jeram kelas 3 & 4, air terjun alami, makan siang prasmanan lezat, dan transportasi antar-jemput privat AC.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787061965/9ccc454e-a20f-48d5-a184-d9fc10c7d482.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787061965/9ccc454e-a20f-48d5-a184-d9fc10c7d482.png',
    pricePerPerson: 30,
    duration: '8 Jam',
    location: 'Telaga Waja, Karangasem',
    difficulty: 'Sedang (Medium)',
    rating: 4.9,
    reviewCount: 320,
    highlights: [
      'Jeram kelas 3 & 4 terpanjang 14 km (2.5 - 3 jam)',
      'Air mata air alami Gunung Agung jernih dan segar',
      'Makan siang prasmanan (buffet lunch) view bukit sawah',
      'Peralatan keselamatan rafting berstandar internasional'
    ],
    inclusions: [
      'Layanan antar-jemput ber-AC',
      'Teh atau kopi saat kedatangan',
      'Makan siang prasmanan (buffet lunch)',
      'Peralatan rafting berstandar keselamatan internasional',
      'Pemandu rafting profesional lokal',
      'Handuk, fasilitas kamar mandi, dan toilet'
    ],
    exclusions: [
      'Pengeluaran pribadi untuk belanja di titik peristirahatan',
      'Pembelian foto atau video profesional di tempat',
      'Biaya tambahan lainnya, souvenir, dan tip'
    ],
    itinerary: [
      { time: '08:00', title: 'Penjemputan di Hotel', desc: 'Penjemputan di lobi hotel menggunakan transportasi pribadi ber-AC.' },
      { time: '09:30', title: 'Tiba di Lokasi & Briefing', desc: 'Menikmati teh/kopi penyambut dan mendengarkan arahan keselamatan (briefing) dari pemandu sungai.' },
      { time: '10:45', title: 'Arung Jeram 14 KM', desc: 'Memulai petualangan arung jeram sepanjang 14 km (jeram kelas 3 & 4) selama 2,5 hingga 3 jam, termasuk istirahat dan berfoto.' },
      { time: '13:15', title: 'Makan Siang Prasmanan', desc: 'Makan siang prasmanan di restoran dengan pemandangan bukit hijau dan sawah.' },
      { time: '14:00', title: 'Perjalanan Kembali', desc: 'Perjalanan kembali ke hotel dengan nyaman.' }
    ]
  },
  {
    id: 'atv-rafting-combo',
    title: 'Experience the Thrill of ATV Ride and Rapid Water Rafting',
    tagline: 'Ultimate Combo: 100% Off-Road ATV Ride + Telaga Waja White Water Rafting',
    shortDesc: 'Paket kombinasi petualangan mengendarai ATV di trek off-road dan arung jeram di Sungai Telaga Waja 14 km.',
    longDesc: 'Experience the Thrill of ATV Ride and Rapid Water Rafting. Merasakan sensasi petualangan ATV Ride dan White Water Rafting menjelajahi keindahan alam Bali bersama pemandu profesional dan peralatan keselamatan berstandar internasional.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787062832/8f55222d-518c-4b9e-a56e-574ff17eff8c.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787062832/8f55222d-518c-4b9e-a56e-574ff17eff8c.png',
    pricePerPerson: 75,
    duration: '10 Jam',
    location: 'Ubud / Telaga Waja',
    difficulty: 'Sedang (Medium)',
    rating: 5.0,
    reviewCount: 420,
    highlights: [
      'Merasakan sensasi petualangan ATV Ride dan White Water Rafting.',
      'Menjelajahi pemandangan alam indah di Bali.',
      'Dipandu oleh pemandu ATV dan sungai lokal yang berpengalaman.',
      'Dilengkapi dengan peralatan keselamatan berstandar internasional.'
    ],
    inclusions: [
      'Layanan transportasi ber-AC',
      'Aktivitas ATV Ride dan White Water Rafting',
      'Teh atau kopi saat kedatangan',
      'Makan siang prasmanan (buffet lunch) dengan ragam pilihan menu',
      'Peralatan ATV dan Rafting yang telah disetujui standar kesafetyannya',
      'Pemandu rafting profesional lokal',
      'Handuk (disarankan membawa handuk sendiri)',
      'Fasilitas kamar mandi (shower) dan toilet'
    ],
    exclusions: [
      'Uang ekstra untuk pembelian pribadi di area tempat istirahat',
      'Pembelian foto atau video dari fotografer profesional di lokasi',
      'Pengeluaran tambahan lainnya',
      'Souvenir dan tips'
    ],
    itinerary: [
      { time: '08:00', title: 'Layanan Penjemputan di Hotel', desc: 'Layanan antar-jemput dengan transportasi pribadi dan pengemudi berbahasa Inggris di lobi hotel sesuai rincian pemesanan.' },
      { time: '09:30', title: 'Tiba di Lokasi & Pengarahan Umum', desc: 'Menikmati secangkir teh atau kopi sambil mendengarkan instruksi keselamatan umum dari pemandu sungai mengenai apa yang boleh dan tidak boleh dilakukan.' },
      { time: '09:45', title: 'Memulai Petualangan ATV Ride', desc: 'Trek ATV 100% off-road, diawali dengan pengarahan keselamatan dan latihan selama 10 menit. Rute lintasan melewati hutan bambu, sungai, lintasan berlumpur/genangan air, tanjakan, serta pemukiman desa Bali.' },
      { time: '13:30', title: 'Memulai Petualangan White Water Rafting', desc: 'Menikmati makan siang ringan sebelum menuju titik awal rafting. Mengarungi Sungai Telaga Waja sepanjang 14 km (jeram kelas 3 & 4) selama 2,5 hingga 3 jam, termasuk berhenti di beberapa titik untuk beristirahat dan berfoto.' },
      { time: '15:30', title: 'Makan Siang di Restoran', desc: 'Makan siang prasmanan di restoran dengan pemandangan bukit hijau dan petak sawah.' },
      { time: '16:30', title: 'Perjalanan Kembali ke Hotel', desc: 'Pengantaran kembali ke hotel asal.' }
    ]
  },
  {
    id: 'adventure-atv-telaga-waja',
    title: 'Adventure of ATV Ride at Telaga Waja',
    tagline: 'Best Price • 100% Off-Road ATV Quad Bike Adventure at Telaga Waja',
    shortDesc: 'Petualangan Menantang ATV Ride & Trek Off-Road Melintasi Lanskap Alam Bali yang Indah di Telaga Waja.',
    longDesc: 'Adventure of ATV Ride at Telaga Waja. Rasakan sensasi menantang berkendara ATV Quad Bike menjelajahi lanskap alam Bali yang indah, perkebunan bambu, sungai alami, dan lintasan berlumpur yang memacu adrenalin didampingi pemandu berpengalaman.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787737711/a00cb89b-8836-432b-9e67-c5a125a61627.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787737711/a00cb89b-8836-432b-9e67-c5a125a61627.png',
    pricePerPerson: 55,
    duration: '8 Jam',
    location: 'Telaga Waja Area, Bali',
    difficulty: 'Sedang (Medium)',
    rating: 4.9,
    reviewCount: 280,
    highlights: [
      'Rasakan sensasi menantang berkendara ATV dan Sungai Rapid.',
      'Memulai perjalanan seru melintasi lanskap alam Bali yang indah.',
      'Dipandu oleh pemandu ATV berpengalaman.',
      'Dilengkapi dengan Peralatan Berstandar Internasional.'
    ],
    inclusions: [
      'Transportasi Ber-AC (Shared atau Private)',
      'Instruktur / Pemandu ATV Berpengalaman',
      'Peralatan ATV Berstandar Internasional (Helm, Sepatu Boot)',
      'Makan Siang Prasmanan (Buffet Lunch)',
      'Fasilitas Ruang Ganti, Kamar Mandi, dan Handuk'
    ],
    exclusions: [
      'Pengeluaran pribadi & foto/video di lokasi',
      'Tips untuk pemandu/driver'
    ],
    itinerary: [
      { time: '08:00', title: 'Penjemputan di Hotel', desc: 'Driver berbahasa Inggris akan menjemput di lobby hotel sesuai detail pemesanan.' },
      { time: '09:30', title: 'Tiba di Lokasi & Welcome Drink', desc: 'Tiba di lokasi start ATV, menikmati teh/kopi dan pengarahan keselamatan (safety briefing).' },
      { time: '10:00', title: 'Mulai Petualangan ATV Ride', desc: 'Mengarungi trek off-road sejauh puluhan kilometer melewati hutan bambu, persawahan, sungai kecil, dan lumpur.' },
      { time: '12:00', title: 'Selesai Aktivitas & Bersih Diri', desc: 'Selesai berpetualang, mandi dan berganti pakaian dengan fasilitas yang disediakan.' },
      { time: '12:30', title: 'Makan Siang Prasmanan', desc: 'Menikmati makan siang lezat dengan pemandangan alam perbukitan dan sawah.' },
      { time: '13:30', title: 'Perjalanan Kembali', desc: 'Perjalanan diantar kembali menuju hotel dengan nyaman.' }
    ]
  },
  {
    id: 'adventure-atv-ubud-kuber',
    title: 'Adventure ATV Ride in UBUD with KUBER',
    tagline: 'Top Pick • Jungle, Waterfall & Gorilla Cave Adventure with Kuber Bali',
    shortDesc: 'Embark on the ultimate ATV adventure with Kuber Bali. Ride through lush tropical forests, navigate hidden tunnels, and cross pristine rivers.',
    longDesc: 'Adventure ATV Ride in UBUD with KUBER. Nikmati petualangan ATV paling ikonik di Bali bersama Kuber Bali Adventure! Lintasan menembus terowongan alami, air terjun alami, lembah hijau, dan goa kepala gorilla raksasa yang legendaris.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787742311/70f55d1b-2b8a-405e-a7d2-785753aa5351.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787742311/70f55d1b-2b8a-405e-a7d2-785753aa5351.png',
    pricePerPerson: 45,
    duration: '8 Jam',
    location: 'Ubud, Bali',
    difficulty: 'Sedang (Medium)',
    rating: 5.0,
    reviewCount: 512,
    highlights: [
      'Feel the adrenaline rush as you ride through Bali’s lush tropical forests',
      'Traverse diverse landscapes, including dense forests and clear rivers',
      'Capture the beauty of Bali’s untouched nature on a thrilling ATV ride',
      'Enjoy a complimentary lunch at a scenic restaurant after your adventure',
      'Benefit from the expertise of professional guides who prioritize your safety'
    ],
    inclusions: [
      'Transportasi Ber-AC Antar-Jemput Hotel',
      'Pemandu ATV Profesional dan Berpengalaman',
      'Perlengkapan Standar Keselamatan (Helm & Sepatu Boot)',
      'Akses Terowongan & Gua Kepala Gorilla Kuber',
      'Makan Siang Prasmanan Lezat',
      'Kamar Mandi, Ruang Ganti, dan Handuk'
    ],
    exclusions: [
      'Pembelian dokumentasi foto/video pribadi di lokasi',
      'Pengeluaran pribadi lainnya dan tips sukarela'
    ],
    itinerary: [
      { time: '08:00', title: 'Hotel Pickup', desc: 'Driver ramah menjemput Anda di hotel untuk perjalanan menuju Ubud.' },
      { time: '09:15', title: 'Tiba di Basecamp Kuber & Briefing', desc: 'Registrasi, pemasangan helm dan boots, pengarahan jalur dan tes kendaraan singkat.' },
      { time: '09:45', title: 'Mulai Petualangan ATV Kuber', desc: 'Menembus trek hutan, lembah, air terjun alami, lumpur, dan terowongan gua gorilla.' },
      { time: '11:45', title: 'Selesai ATV & Shower', desc: 'Mandi dan ganti pakaian di fasilitas bersih yang disediakan.' },
      { time: '12:15', title: 'Makan Siang di Restoran', desc: 'Santap siang prasmanan lezat khas Bali dengan pemandangan asri.' },
      { time: '13:30', title: 'Kembali ke Hotel', desc: 'Perjalanan kembali diantar ke hotel dengan nyaman.' }
    ]
  },
  {
    id: 'surya-bintang-rafting',
    title: 'Ubud Rafting at Ayung River by Surya Bintang Adventure',
    tagline: 'Sungai Ayung Payangan, Gianyar • 12 KM Rafting (29 Titik Jeram)',
    shortDesc: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram berdurasi sekitar 2,5 hingga 3 jam bersama Surya Bintang Adventure.',
    longDesc: 'Ubud Rafting at Ayung River by Surya Bintang Adventure. Menikmati keseruan arung jeram di aliran sungai deras dan keindahan pemandangan alam khas Bali didampingi pemandu sungai berpengalaman dan peralatan berstandar internasional.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063019/398e70aa-ea11-449f-a279-6ed8e832b74b.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063019/398e70aa-ea11-449f-a279-6ed8e832b74b.png',
    pricePerPerson: 17,
    duration: '8 Jam',
    location: 'Payangan, Gianyar',
    difficulty: 'Medium',
    rating: 4.8,
    reviewCount: 290,
    highlights: [
      'Menikmati keseruan arung jeram di aliran sungai deras',
      'Menikmati keindahan pemandangan alam khas Bali',
      'Didampingi pemandu sungai berpengalaman',
      'Dilengkapi peralatan berstandar internasional'
    ],
    inclusions: [
      'Layanan transportasi ber-AC (jika memesan dengan opsi antar-jemput)',
      'Kopi atau teh saat kedatangan',
      'Makan siang buffet dengan beragam variasi menu',
      'Peralatan arung jeram berstandar keselamatan',
      'Pemandu arung jeram profesional',
      'Handuk (disarankan tetap membawa milik pribadi)',
      'Fasilitas kamar mandi, shower, dan toilet'
    ],
    exclusions: [
      'Uang pribadi untuk pembelian di area tempat peristirahatan',
      'Pembelian foto atau video hasil dokumentasi fotografer profesional',
      'Pengeluaran pribadi tambahan lainnya',
      'Souvenir dan tips (tipping)'
    ],
    itinerary: [
      { time: '07:30', title: 'Penjemputan di Hotel', desc: 'Penjemputan menggunakan transportasi pribadi oleh pengemudi berbahasa Inggris di lobi hotel.' },
      { time: '09:00', title: 'Tiba di Lokasi & Briefing Singkat', desc: 'Menikmati teh atau kopi hangat sambil mendengarkan instruksi keselamatan dari pemandu sungai.' },
      { time: '10:45', title: 'Mulai Petualangan Rafting', desc: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram berdurasi sekitar 2,5 hingga 3 jam.' },
      { time: '13:15', title: 'Makan Siang', desc: 'Menikmati hidangan makan siang buffet di restoran dengan pemandangan bukit hijau dan petak sawah.' },
      { time: '14:00', title: 'Kembali ke Hotel', desc: 'Perjalanan kembali menuju hotel tempat menginap.' }
    ]
  },
  {
    id: 'bali-dewata-rafting',
    title: 'Ubud Rafting Adventure at Ayung River by Bali Dewata',
    tagline: 'Sungai Ayung Ubud • 12 KM Rafting (29 Titik Jeram) & Pemandu Berpengalaman',
    shortDesc: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram berdurasi sekitar 2,5 hingga 3 jam bersama Bali Dewata.',
    longDesc: 'Rasakan sensasi menerjang jeram sungai dan menikmati perjalanan menyusuri pemandangan alam khas Bali yang indah bersama pemandu sungai berpengalaman dan peralatan berstandar internasional.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063184/31bbe6f8-14e4-48f0-9bf8-8506d9091642.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063184/31bbe6f8-14e4-48f0-9bf8-8506d9091642.png',
    pricePerPerson: 35,
    duration: '8 Jam',
    location: 'Ubud, Gianyar',
    difficulty: 'Medium',
    rating: 4.9,
    reviewCount: 310,
    highlights: [
      'Rasakan sensasi menerjang jeram sungai',
      'Menikmati perjalanan menyusuri pemandangan alam khas Bali yang indah',
      'Didampingi pemandu sungai berpengalaman',
      'Dilengkapi peralatan berstandar internasional'
    ],
    inclusions: [
      'Layanan transportasi ber-AC',
      'Kopi atau teh saat kedatangan',
      'Makan siang buffet dengan beragam variasi menu',
      'Peralatan arung jeram berstandar keselamatan',
      'Pemandu arung jeram profesional khas Bali',
      'Handuk (disarankan tetap membawa milik pribadi)',
      'Fasilitas shower dan toilet'
    ],
    exclusions: [
      'Uang pribadi untuk pembelian di area tempat peristirahatan',
      'Pembelian foto atau video hasil dokumentasi fotografer profesional di lokasi',
      'Pengeluaran pribadi tambahan lainnya',
      'Souvenir dan tips (tipping)'
    ],
    itinerary: [
      { time: '07:30', title: 'Penjemputan di Hotel', desc: 'Penjemputan menggunakan transportasi pribadi oleh pengemudi berbahasa Inggris di lobi hotel.' },
      { time: '09:00', title: 'Tiba di Lokasi & Briefing Singkat', desc: 'Menikmati secangkir teh atau kopi sambil mendengarkan instruksi keselamatan dari pemandu sungai.' },
      { time: '10:45', title: 'Mulai Petualangan Rafting', desc: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram berdurasi sekitar 2,5 hingga 3 jam di sungai.' },
      { time: '13:15', title: 'Makan Siang', desc: 'Menikmati hidangan makan siang di restoran dengan pemandangan bukit hijau dan petak sawah.' },
      { time: '14:00', title: 'Kembali ke Hotel', desc: 'Perjalanan kembali menuju hotel tempat menginap.' }
    ]
  },
  {
    id: 'water-sport-beaches-uluwatu-dinner',
    title: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner',
    tagline: 'Tanjung Benoa Watersport • Pantai Padang Padang • Pura Luhur Uluwatu • Jimbaran Seafood Dinner',
    shortDesc: 'Aktivitas olahraga air di Tanjung Benoa (Banana Boat complimentary), Pantai Padang Padang, sunset Tari Kecak Pura Uluwatu, dan seafood dinner Teluk Jimbaran.',
    longDesc: 'Nikmati kombinasi petualangan bahari dan wisata budaya romantis di pesisir selatan Bali. Menikmati aktivitas olahraga air di Pantai Tanjung Benoa (Termasuk gratis Banana Boat), mengeksplorasi keindahan Pantai Padang Padang, mengunjungi Pura Luhur Uluwatu dengan Tari Kecak sunset, dan ditutup dengan santap malam boga laut (seafood dinner) di tepi pantai Teluk Jimbaran.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
    pricePerPerson: 32,
    duration: '8 Hours',
    location: 'Jimbaran and Nusa Dua',
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 285,
    highlights: [
      'Aktivitas olahraga air di Pantai Tanjung Benoa (Termasuk gratis Banana Boat)',
      'Eksplorasi Pantai Padang Padang dengan tebing batu & tangga unik',
      'Pura Luhur Uluwatu di atas tebing 70m & pertunjukan Tari Kecak sunset',
      'Santap malam boga laut (seafood dinner) di tepi pantai Teluk Jimbaran'
    ],
    inclusions: [
      'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir',
      'Pengemudi berbahasa Inggris (Panduan bahasa lain dikenakan tambahan $25/Grup jika memilih paket All Inclusive)',
      'Makan Siang dan Makan Malam (khusus pilihan paket All Inclusive)',
      'Tiket masuk lokasi wisata (khusus pilihan paket All Inclusive, tidak termasuk tiket Tari Kecak)',
      'Wahana gratis Banana Boat',
      'Air mineral'
    ],
    exclusions: [
      'Tiket Pertunjukan Tari Kecak',
      'Aktivitas water sport tambahan di luar Banana Boat',
      'Pengeluaran pribadi, cenderamata, dan tips pengemudi/pemandu'
    ],
    itinerary: [
      { time: '08:30', title: 'Penjemputan di Hotel', desc: 'Penjemputan di lobby hotel dengan kendaraan pribadi oleh pengemudi berbahasa Inggris.' },
      { time: '09:00', title: 'Water Sports di Pantai Tanjung Benoa', desc: 'Menikmati aktivitas olahraga air (water sports) di Pantai Tanjung Benoa (Termasuk gratis Banana Boat).' },
      { time: '13:30', title: 'Eksplorasi Pantai Padang Padang', desc: 'Mengeksplorasi Pantai Padang Padang yang terkenal dengan tebing batu dan tangga yang unik.' },
      { time: '15:00', title: 'Pura Luhur Uluwatu & Tari Kecak Sunset', desc: 'Mengunjungi Pura Luhur Uluwatu yang berada di atas tebing setinggi 70 meter di atas Samudra Hindia. Menyaksikan Pertunjukan Tari Kecak saat matahari terbenam (sunset).' },
      { time: '17:00', title: 'Seafood Dinner di Pantai Teluk Jimbaran', desc: 'Menikmati santap malam boga laut (seafood dinner) di tepi pantai Teluk Jimbaran.' },
      { time: '19:00', title: 'Perjalanan Kembali Menuju Hotel', desc: 'Perjalanan kembali menuju hotel tempat menginap.' }
    ]
  },
  {
    id: 'nusa-penida-east-trip',
    title: 'NUSA PENIDA ISLAND – EAST TRIP',
    tagline: 'Nusa Penida East • Fast Boat Sanur • Diamond Beach • Atuh Beach • Tree House & Teletubbies Hill',
    shortDesc: 'Penyeberangan Speed Boat 45 menit dari Sanur, pesona Diamond Beach, Atuh Beach, spot Tree House & Thousand Island, serta bukit Teletubbies Hill.',
    longDesc: 'Nusa Penida East Trip mengajak Anda menjelajahi keindahan spektakuler pesisir timur Pulau Nusa Penida. Mengunjungi Diamond Beach dengan tebing terjal dan air laut pirus, Atuh Beach yang tenang diapit tebing tinggi, spot foto ikonik Tree House Molenteng & pemandangan Thousand Island View, serta keindahan bukit hijau Teletubbies Hill.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
    pricePerPerson: 45,
    duration: '10 Hours (08:00 - 22:00)',
    location: 'Nusa Penida and Nusa Lembongan',
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 340,
    highlights: [
      'Penyeberangan Speed Boat cepat ~45 menit dari Pelabuhan Sanur ke Nusa Penida',
      'Eksplorasi Diamond Beach dengan tebing terjal, air pirus, dan tangga ikonik',
      'Atuh Beach yang tenang diapit tebing tinggi dan panorama dramatis',
      'Spot foto Tree House & Thousand Island View serta bukit Teletubbies Hill',
      'Termasuk antar-jemput hotel, fast boat PP, mobil AC pulau, makan siang & tiket wisata'
    ],
    inclusions: [
      'Antar-jemput pulang-pergi dari/ke hotel',
      'Transportasi ber-AC selama di Nusa Penida bersama pengemudi berbahasa Inggris',
      'Tiket kapal cepat (Fast Boat) PP',
      'Makan siang dan air mineral',
      'Retribusi dan tiket masuk tempat wisata'
    ],
    exclusions: [
      'Pemandu wisata resmi/lisensi (Tersedia dalam berbagai bahasa dengan biaya tambahan $35)',
      'Foto atau video profesional (Dapat dibeli terpisah di lokasi)',
      'Pengeluaran pribadi, souvenir, dan tipping'
    ],
    itinerary: [
      { time: '06:30 - 07:00', title: 'Penjemputan di Hotel', desc: 'Penjemputan di hotel dengan transportasi berbagi (share transport) menuju Pelabuhan Sanur.' },
      { time: '07:30', title: 'Tiba di Pelabuhan Sanur & Registrasi', desc: 'Tiba dan pendaftaran di Pelabuhan Sanur, dan pengambilan boarding pass.' },
      { time: '08:00', title: 'Keberangkatan Speed Boat ke Nusa Penida', desc: 'Keberangkatan dari Pelabuhan Sanur menuju Nusa Penida menggunakan Speed Boat (~45 menit).' },
      { time: '09:00', title: 'Tiba di Nusa Penida & Tur Wisata Timur', desc: 'Tiba di Nusa Penida, bertemu pengemudi (island guide), dan mengunjungi Diamond Beach, Atuh Beach, Tree House & Thousand Island View, serta Teletubbies Hill. Makan siang disajikan di perjalanan.' },
      { time: '16:00', title: 'Perjalanan Kembali ke Sanur dengan Speed Boat', desc: 'Perjalanan kembali dari Nusa Penida ke Pelabuhan Sanur dengan Speed Boat.' },
      { time: '17:00', title: 'Tiba di Sanur & Pengantaran Kembali ke Hotel', desc: 'Tiba di Pelabuhan Sanur dan diantar kembali menuju hotel.' }
    ]
  },
  {
    id: 'nusa-penida-west-trip',
    title: 'NUSA PENIDA ISLAND – WEST TRIP',
    tagline: 'Nusa Penida West • Fast Boat Sanur • Angel’s Billabong • Broken Beach • Kelingking Beach • Crystal Bay',
    shortDesc: 'Penyeberangan Speed Boat 45 menit dari Sanur, kolam alami Angel’s Billabong, tebing Broken Beach, kepala T-Rex Kelingking Beach & santai Crystal Bay.',
    longDesc: 'Nusa Penida West Trip mengajak Anda mengunjungi destinasi terpopuler di Nusa Penida: kolam alami Angel’s Billabong, formasi tebing Broken Beach, ikon tebing T-Rex Kelingking Beach dengan pemandangan samudra biru, serta relaksasi berenang dan snorkeling di perairan jernih Crystal Bay.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
    pricePerPerson: 45,
    duration: '10 Hours',
    location: 'Nusa Penida and Nusa Lembongan',
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 385,
    highlights: [
      'Penyeberangan Speed Boat cepat ~45 menit dari Sanur ke Nusa Penida',
      'Kolam renang alami di tepi laut dengan air jernih di Angel’s Billabong',
      'Area pantai unik dengan tebing melengkung alami (arch) di Broken Beach',
      'Destinasi ikonik tebing kepala T-Rex Kelingking Beach & santai berenang/snorkeling di Crystal Bay',
      'Termasuk antar-jemput hotel, fast boat PP, mobil AC pulau, makan siang & tiket wisata'
    ],
    inclusions: [
      'Layanan antar-jemput pulang-pergi dari/ke hotel',
      'Transportasi ber-AC selama perjalanan di Nusa Penida + pengemudi berbahasa Inggris',
      'Tiket Fast Boat / Speed Boat pulang-pergi',
      'Makan siang dan air mineral',
      'Retribusi dan tiket masuk destinasi wisata'
    ],
    exclusions: [
      'Pemandu wisata resmi/lisensi (Tersedia dalam berbagai bahasa dengan biaya tambahan $35)',
      'Biaya foto/video dari fotografer profesional di lokasi',
      'Pengeluaran pribadi tambahan',
      'Oleh-oleh dan tipping'
    ],
    itinerary: [
      { time: '06:30 - 07:00', title: 'Penjemputan di Hotel', desc: 'Penjemputan di hotel dengan transportasi bersama.' },
      { time: '07:30', title: 'Tiba di Pelabuhan Sanur & Registrasi', desc: 'Tiba dan registrasi di Pelabuhan Sanur, pengambilan boarding pass.' },
      { time: '08:00', title: 'Keberangkatan Speed Boat ke Nusa Penida', desc: 'Keberangkatan dari Pelabuhan Sanur ke Nusa Penida dengan Speed Boat (~45 menit).' },
      { time: '09:00', title: 'Tiba di Nusa Penida & Tur Wisata Barat', desc: 'Tiba di Nusa Penida, bertemu driver (pemandu), mengunjungi Angel’s Billabong, Broken Beach, Kelingking Beach (T-Rex Cliff), dan Crystal Bay. Makan siang disajikan di perjalanan (lunch enroute).' },
      { time: '16:00', title: 'Perjalanan Kembali ke Sanur dengan Speed Boat', desc: 'Kembali ke Pelabuhan Sanur menggunakan speed boat.' },
      { time: '17:00', title: 'Tiba di Sanur & Pengantaran Kembali ke Hotel', desc: 'Tiba di Sanur dan pengantaran kembali ke hotel.' }
    ]
  },
  {
    id: 'gate-of-heaven-water-palace-waterfall',
    title: 'Gate Of Heaven Water Palace Hidden Gems Waterfall',
    tagline: 'Gate Of Heaven • Lempuyang Temple • Tirta Gangga Water Palace • Hidden Gems Waterfall • Candidasa & Amed',
    shortDesc: 'Gate Of Heaven Water Palace Hidden Gems Waterfall day trip untuk spot instagramable mengunjungi Pura Lempuyang, Tirta Gangga & air terjun tersembunyi.',
    longDesc: 'Gate Of Heaven Water Palace Hidden Gems Waterfall a famous day trip for instagramable or selfies spot starting to visit Lempuyang Temple, also known as the Gate of Heaven with Mount Agung backdrop, Tirta Gangga Water Palace, and hidden gems waterfalls.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png',
    pricePerPerson: 30,
    duration: '10 Hours',
    location: 'Candidasa and Amed',
    difficulty: 'Medium',
    rating: 4.9,
    reviewCount: 420,
    highlights: [
      'Spot foto ikonik Gerbang Surga (Gate of Heaven) Candi Lempuyang berlatar Gunung Agung',
      'Menjelajahi istana air bersejarah Tirta Gangga karya King of Karangasem dengan taman asri & kolam ikan koi',
      'Treking ringan menyusuri ngarai & sungai untuk melihat air terjun unik Tukad Cepung di dalam tebing batu',
      'Transportasi pribadi ber-AC dengan pengemudi ramah berbahasa Inggris, BBM & biaya parkir'
    ],
    inclusions: [
      'Transportasi pribadi ber-AC dengan pengemudi berbahasa Inggris',
      'Pemandu berbahasa Inggris/bahasa lain (+ $25/grup) (khusus paket All Inclusive)',
      'Tiket masuk semua objek wisata (khusus paket All Inclusive)',
      'Makan siang (khusus paket All Inclusive)',
      'Air mineral, BBM, dan biaya parkir'
    ],
    exclusions: [
      'Foto atau video dari fotografer profesional di lokasi',
      'Pengeluaran pribadi tambahan, souvenir, dan tip driver/guide'
    ],
    itinerary: [
      { time: '06:00', title: 'Penjemputan di Hotel', desc: 'Penjemputan di lobby hotel dengan transportasi pribadi ber-AC dan pengemudi berbahasa Inggris.' },
      { time: '08:30', title: 'Gate of Heaven (Candi Lempuyang)', desc: 'Mengunjungi Gerbang Surga yang ikonik dengan pemandangan latar Gunung Agung.' },
      { time: '11:00', title: 'Water Palace (Tirta Gangga)', desc: 'Menjelajahi istana air bersejarah karya King of Karangasem yang dipenuhi taman asri dan kolam ikan.' },
      { time: '12:30', title: 'Hidden Gems Waterfall (Tukad Cepung)', desc: 'Treking ringan menyusuri ngarai dan sungai untuk melihat air terjun unik di dalam tebing tebing batu.' },
      { time: '17:00', title: 'Kembali ke Hotel', desc: 'Perjalanan pulang menuju hotel tempat Anda menginap.' }
    ]
  },
  {
    id: 'amazing-waterfall-monkey-forest',
    title: 'Amazing Waterfall and Monkey Forest',
    tagline: 'Tegenungan Waterfall (~25m) • Ubud Sacred Monkey Forest Sanctuary • Kanto Lampo Waterfall • Bali Nature & Culture',
    shortDesc: 'Amazing Waterfall and Monkey Forest day trip untuk menjelajahi keindahan Air Terjun Tegenungan (~25m), Ubud Monkey Forest Sanctuary, dan keindahan Air Terjun Kanto Lampo.',
    longDesc: 'Amazing Waterfall and Monkey Forest, this trip let you to explore amazing waterfall and forest life of hundred Monkey starting to explore Tegenungan Waterfall (~25m), lush tropical valley, followed by the enchanting Ubud Sacred Monkey Forest Sanctuary, and stunning Kanto Lampo Waterfall.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
    pricePerPerson: 30,
    duration: '10 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
    difficulty: 'Medium',
    rating: 4.9,
    reviewCount: 395,
    highlights: [
      'Jelajahi Air Terjun Tegenungan (tinggi ~25m, cocok untuk berenang dan bersantai)',
      'Mengunjungi Ubud Monkey Forest Sanctuary (melihat ratusan kera ekor panjang dan menikmati pemandangan alam/budaya Bali)',
      'Mengunjungi Air Terjun Kanto Lampo (menikmati kesegaran air terjun tebing batu yang indah)',
      'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir'
    ],
    inclusions: [
      'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir',
      'Pemandu berbahasa Inggris (atau bahasa lain dengan biaya tambahan $25/Grup jika memesan paket "All Inclusive")',
      'Tiket masuk lokasi wisata & Makan siang (khusus opsi paket "All Inclusive")',
      'Air mineral'
    ],
    exclusions: [
      'Foto/video profesional di lokasi',
      'Pengeluaran pribadi & Souvenir',
      'Tip untuk pengemudi/pemandu'
    ],
    itinerary: [
      { time: '08:00', title: 'Penjemputan di Hotel', desc: 'Penjemputan di lobby hotel dengan transportasi pribadi ber-AC.' },
      { time: '09:00', title: 'Jelajahi Air Terjun Tegenungan', desc: 'Jelajahi Air Terjun Tegenungan (tinggi ~25m, cocok untuk berenang dan bersantai).' },
      { time: '11:30', title: 'Ubud Monkey Forest Sanctuary', desc: 'Mengunjungi Ubud Monkey Forest Sanctuary (melihat ratusan kera ekor panjang dan menikmati pemandangan alam/budaya Bali).' },
      { time: '13:40', title: 'Air Terjun Kanto Lampo', desc: 'Mengunjungi Air Terjun Kanto Lampo (menikmati kesegaran air terjun tebing batu yang indah).' },
      { time: '17:00', title: 'Kembali ke Hotel', desc: 'Perjalanan kembali ke hotel.' }
    ]
  },
  {
    id: 'adventure-bali-swing-nungnung-ulundanu-lekeleke',
    title: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall',
    tagline: 'Bali Swing Pioneer • Nungnung Waterfall (50m) • Ulun Danu Beratan Lake Temple • Leke Leke Waterfall • Bedugul & Ubud',
    shortDesc: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall bermain wahana Bali Swing, Air Terjun Nungnung, Pura Ulun Danu & Air Terjun Leke Leke.',
    longDesc: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai, dilanjutkan mengunjungi Air Terjun Nungnung, Pura Ulun Danu Beratan Bedugul, dan trekking Air Terjun Leke Leke.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
    pricePerPerson: 30,
    duration: '10 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
    difficulty: 'Medium',
    rating: 4.9,
    reviewCount: 410,
    highlights: [
      'Bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai',
      'Mengunjungi Air Terjun Nungnung (menuruni sekitar 300 anak tangga menuju air terjun setinggi 50 meter)',
      'Mengunjungi Pura Ulun Danu Beratan di tepi Danau Beratan, Bedugul (termasuk opsi makan siang di restoran lokal)',
      'Trekking singkat dan menjelajahi Air Terjun Leke Leke yang asri dan menenangkan'
    ],
    inclusions: [
      'Transportasi ber-AC pribadi dengan sopir berbahasa Inggris',
      'Air mineral',
      'Biaya bahan bakar dan parkir',
      'Pemandu wisata, makan siang, dan tiket masuk tempat wisata (khusus Paket All-Inclusive, kecuali wahana Bali Swing)'
    ],
    exclusions: [
      'Foto/video profesional di lokasi',
      'Pengeluaran pribadi, souvenir, dan tip',
      'Biaya aktivitas wahana Bali Swing (jika tidak mengambil opsi tertentu)'
    ],
    itinerary: [
      { time: '08:00', title: 'Penjemputan di Lobi Hotel', desc: 'Penjemputan di lobi hotel menggunakan transportasi pribadi ber-AC.' },
      { time: '09:00', title: 'Bermain Wahana Bali Swing', desc: 'Bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai.' },
      { time: '11:00', title: 'Air Terjun Nungnung', desc: 'Mengunjungi Air Terjun Nungnung (menuruni sekitar 300 anak tangga menuju air terjun setinggi 50 meter).' },
      { time: '12:30', title: 'Pura Ulun Danu Beratan & Makan Siang', desc: 'Mengunjungi Pura Ulun Danu Beratan di tepi Danau Beratan, Bedugul (termasuk opsi makan siang di restoran lokal dengan pemandangan lembah).' },
      { time: '14:30', title: 'Trekking & Air Terjun Leke Leke', desc: 'Trekking singkat dan menjelajahi Air Terjun Leke Leke.' },
      { time: '17:00', title: 'Perjalanan Kembali ke Hotel', desc: 'Perjalanan kembali menuju hotel tempat Anda menginap.' }
    ]
  },
  {
    id: 'discover-waterfall-rice-terrace-monkey-forest',
    title: 'Discover Waterfall Rice Terrace and Monkey Forest',
    tagline: 'Barong & Keris Dance • Celuk Art Village • Tegenungan Waterfall • Tegalalang Rice Terrace • Ubud Sacred Monkey Forest',
    shortDesc: 'Discover Waterfall Rice Terrace and Monkey Forest diawali pertunjukan Tari Barong & Keris Dance, desa kerajinan seni, Air Terjun Tegenungan, sawah Tegalalang & Ubud Monkey Forest.',
    longDesc: 'Discover Waterfall Rice Terrace and Monkey Forest starting by visiting Culture Performance of Barong and Keris Dance which is a traditional Balinese dance that represents eternal good versus evil, followed by Art Craft Village, Tegenungan Waterfall, Tegalalang rice terrace, and Ubud Sacred Monkey Forest.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324453/fdf23903-3780-458b-a52f-e8402aafd246.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324453/fdf23903-3780-458b-a52f-e8402aafd246.png',
    pricePerPerson: 25,
    duration: '8 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 450,
    highlights: [
      'Menyaksikan Pertunjukan Tari Barong & Keris (Simbol pertempuran antara kebaikan dan kejahatan)',
      'Mengunjungi Desa Kerajinan Seni (Kerajinan perak, emas, ukiran kayu, dan tenun batik)',
      'Mengunjungi dan menikmati pemandangan Air Terjun Tegenungan (Tinggi ~25m, bisa berenang)',
      'Mengunjungi Sawah Terasering Tegalalang & Cagar Alam Ubud Monkey Forest habitat kera ekor panjang'
    ],
    inclusions: [
      'Transportasi pribadi ber-AC + Pengemudi berbahasa Inggris',
      'Bahan bakar (Fuel) dan biaya parkir',
      'Air minum kemasan (Mineral Water)',
      'Pemandu wisata berbahasa Inggris/lainnya, makan siang, serta seluruh tiket masuk tempat wisata (khusus Paket "All Inclusive Package Tour")'
    ],
    exclusions: [
      'Foto atau video profesional (dapat dibeli di lokasi)',
      'Pengeluaran pribadi lainnya, souvenir, dan tipping (uang tip)'
    ],
    itinerary: [
      { time: '08:00', title: 'Penjemputan di Hotel', desc: 'Penjemputan di hotel menggunakan transportasi pribadi dengan pengemudi berbahasa Inggris.' },
      { time: '09:00', title: 'Pertunjukan Tari Barong & Keris', desc: 'Menyaksikan Pertunjukan Tari Barong & Keris (Simbol pertempuran abadi antara kebaikan dan kejahatan).' },
      { time: '10:15', title: 'Mengunjungi Desa Kerajinan Seni', desc: 'Mengunjungi Desa Kerajinan Seni (Kerajinan perak, emas, ukiran kayu, dan tenun batik khas Bali).' },
      { time: '11:30', title: 'Air Terjun Tegenungan', desc: 'Mengunjungi dan menikmati pemandangan Air Terjun Tegenungan (Tinggi ~25m, cocok untuk berenang dan bersantai).' },
      { time: '13:30', title: 'Sawah Terasering Tegalalang', desc: 'Mengunjungi Sawah Terasering Tegalalang (Lanskap sawah berundak ikonik dan budaya bertani tradisional).' },
      { time: '15:00', title: 'Ubud Monkey Forest', desc: 'Mengunjungi Ubud Monkey Forest (Cagar alam hutan lindung habitat kera ekor panjang yang ramah).' },
      { time: '16:00', title: 'Pengantaran Kembali ke Hotel', desc: 'Pengantaran pulang kembali ke hotel tempat Anda menginap.' }
    ]
  },
  {
    id: 'explore-iconic-culture-heritage-twin-lake',
    title: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour',
    tagline: 'Ulun Danu Beratan • Handara Gate • Wanagiri Hidden Hills • Leke Leke Waterfall • Tanah Lot Sunset',
    shortDesc: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour mengunjungi Candi Ulun Danu Beratan, Handara Gate, Twin Lake Wanagiri, Air Terjun Leke Leke & sunset Tanah Lot.',
    longDesc: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour mengunjungi candi di tepi Danau Beratan dengan latar pegunungan, Handara Gate, Wanagiri Hidden Hills pemandangan Danau Buyan & Tamblingan, Air Terjun Leke Leke, dan pemandangan sunset di Candi Tanah Lot.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324702/34b12cec-98fb-4209-ae84-305b09b6324c.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324702/34b12cec-98fb-4209-ae84-305b09b6324c.png',
    pricePerPerson: 30,
    duration: '10 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
    difficulty: 'Medium',
    rating: 4.9,
    reviewCount: 435,
    highlights: [
      'Mengunjungi Candi Ulun Danu Beratan di tepi Danau Beratan dengan panorama pegunungan & pagoda khas Bali',
      'Berfoto di Handara Gate ikonik berlatar belakang perbukitan hijau tropis Bedugul',
      'Menikmati keindahan Twin Lake (Buyan & Tamblingan) di Wanagiri Hidden Hills dengan spot foto ayunan',
      'Trekking Air Terjun Leke Leke (50m) & menikmati matahari terbenam (sunset) magis di Candi Tanah Lot'
    ],
    inclusions: [
      'Transportasi pribadi ber-AC dengan pengemudi berbahasa Inggris',
      'Air mineral',
      'Bahan bakar (fuel) dan biaya parkir',
      'Pemandu wisata berbahasa Inggris, makan siang, serta seluruh tiket masuk tempat wisata (Opsional All Inclusive Package)'
    ],
    exclusions: [
      'Foto atau video profesional di lokasi',
      'Pengeluaran pribadi, souvenir, dan tip (tipping)',
      'Pemandu bahasa non-Inggris (tambahan $25/grup)'
    ],
    itinerary: [
      { time: '08:00', title: 'Penjemputan di Hotel', desc: 'Dijemput oleh pengemudi di lobi hotel dengan transportasi pribadi ber-AC.' },
      { time: '09:30', title: 'Candi Ulun Danu Beratan', desc: 'Mengunjungi candi di tepi Danau Beratan dengan pemandangan pegunungan dan struktur pagoda khas Bali.' },
      { time: '11:00', title: 'Handara Gate', desc: 'Berfoto di gerbang ukiran Bali yang ikonik dengan latar belakang hutan dan pemandangan hijau.' },
      { time: '11:30', title: 'Wanagiri Hidden Hills', desc: 'Menikmati pemandangan Danau Buyan & Tamblingan dari ketinggian serta spot foto ayunan (Bali Swing).' },
      { time: '13:30', title: 'Air Terjun Leke Leke', desc: 'Trekking melintasi jalur alam menuju air terjun setinggi 50 meter yang dikelilingi pemandangan hijau berserta kolam alami.' },
      { time: '16:30', title: 'Candi Tanah Lot', desc: 'Mengunjungi candi di atas batu karang tepi laut untuk menikmati pemandangan matahari terbenam (sunset).' },
      { time: '17:00', title: 'Selesai & Pengantaran ke Hotel', desc: 'Pengantaran kembali menuju hotel tempat Anda menginap.' }
    ]
  },
  {
    id: 'adventure-bali-sunrise-trekking-mount-batur',
    title: 'Adventure Bali Sunrise Trekking at Mount Batur',
    tagline: 'Mount Batur Sunrise Summit (1.717 mdpl) • Active Volcano Crater • Breakfast Above Clouds • Coffee Plantation',
    shortDesc: 'Mount Batur Sunrise Trekking pendakian puncak Gunung Batur (1.717 mdpl) menyaksikan matahari terbit, sarapan di puncak & perkebunan kopi.',
    longDesc: 'Adventure Bali Sunrise Trekking at Mount Batur mendaki puncak Gunung Batur (1.717 mdpl) untuk menikmati sunrise spektakuler di atas awan, sarapan ringan uap vulkanik, jelajah kawah utama, dan kunjungan opsional ke perkebunan kopi.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
    pricePerPerson: 50,
    duration: '8 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
    difficulty: 'Hard',
    rating: 4.9,
    reviewCount: 520,
    highlights: [
      'Pendakian dini hari menuju puncak Gunung Batur (1.717 mdpl) dipandu pengemudi pribadi & pemandu trekking lokal',
      'Menyaksikan pemandangan spektakuler matahari terbit (Sunrise) di atas lautan awan',
      'Sarapan ringan di puncak gunung (roti pisang kukus uap vulkanik, telur rebus uap vulkanik, teh/kopi/cokelat panas, buah segar, biskuit)',
      'Jelajah kawah utama dan turun lewat jalur berbeda, serta kunjungan ke perkebunan kopi (opsional/gratis)'
    ],
    inclusions: [
      'Pengemudi pribadi berbahasa Inggris dan pemandu trekking lokal',
      'Tiket masuk kawasan Gunung Batur & retribusi pemerintah Bali',
      '1 botol air mineral per orang',
      'Sarapan ringan di puncak gunung (roti pisang kukus uap vulkanik, telur rebus uap vulkanik, teh/kopi/cokelat panas, buah segar, biskuit)',
      'Perlengkapan pendakian (senter/flashlight, trekking pole)'
    ],
    exclusions: [
      'Pengeluaran pribadi di tempat istirahat',
      'Layanan foto/video profesional di lokasi',
      'Pengeluaran tambahan lainnya, souvenir, dan tip'
    ],
    itinerary: [
      { time: '01:30 – 01:45', title: 'Penjemputan di Hotel', desc: 'Penjemputan di hotel dengan transportasi pribadi menuju titik awal pendakian.' },
      { time: '03:45', title: 'Tiba di Titik Awal & Briefing', desc: 'Tiba di titik awal pendakian dan perkenalan dengan pemandu lokal.' },
      { time: '03:50', title: 'Memulai Pendakian', desc: 'Memulai pendakian menuju puncak Gunung Batur (membutuhkan waktu sekitar 2 jam).' },
      { time: '05:50', title: 'Puncak Gunung Batur, Sunrise & Sarapan', desc: 'Tiba di puncak gunung (1.717 mdpl), menikmati pemandangan matahari terbit yang memukau, dan menikmati sarapan ringan.' },
      { time: '07:00', title: 'Jelajah Kawah Utama & Perjalanan Turun', desc: 'Jelajah kawah utama dan perjalanan turun menyusuri lereng lewat jalur yang berbeda.' },
      { time: '09:00', title: 'Tiba di Area Parkir Mobil', desc: 'Tiba kembali di area parkir mobil untuk beristirahat sejenak.' },
      { time: '10:00', title: 'Kunjungan ke Perkebunan Kopi', desc: 'Kunjungan ke perkebunan kopi tradisional Bali (opsional / gratis).' },
      { time: '10:30', title: 'Perjalanan Kembali ke Hotel', desc: 'Perjalanan pulang kembali menuju hotel tempat Anda menginap.' }
    ]
  },
  {
    id: 'adventure-batur-sunrise-hot-spring-lunch',
    title: 'Adventure Bali Sunrise Trekking at Mount Batur and Hot Spring Water Refreshing with Lunch',
    tagline: 'Mount Batur Sunrise Summit • Natural Volcanic Hot Spring • Buffet Lunch • Kintamani',
    shortDesc: 'Adventure Bali Sunrise Trekking at Mount Batur and Hot Spring Water Refreshing with Lunch pendakian sunrise Batur, relaksasi air panas alami & makan siang.',
    longDesc: 'Adventure Bali Sunrise Trekking at Mount Batur and Hot Spring Water Refreshing with Lunch pendakian ke puncak Gunung Batur (1.717 mdpl) untuk menikmati sunrise spektakuler dan sarapan ringan uap vulkanik, dilanjutkan berendam di Pemandian Air Panas Alami (Natural Hot Spring) dan makan siang.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325801/600b4aa7-95a1-4f0e-b5b1-88158d4364ed.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325801/600b4aa7-95a1-4f0e-b5b1-88158d4364ed.png',
    pricePerPerson: 25,
    duration: '8 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
    difficulty: 'Hard',
    rating: 4.9,
    reviewCount: 480,
    highlights: [
      'Pendakian malam menuju puncak Gunung Batur (1.717 mdpl) dipandu pemandu pendakian lokal profesional',
      'Menyaksikan pemandangan matahari terbit spektakuler dan sarapan ringan di puncak gunung',
      'Menjelajahi kawah utama dan turun melalui jalur lereng yang berbeda',
      'Relaksasi berendam di Pemandian Air Panas Alami (Natural Hot Spring) dan menikmati hidangan makan siang'
    ],
    inclusions: [
      'Pengemudi berbahasa Inggris dan pemandu pendakian lokal profesional',
      'Tiket masuk kawasan Gunung Batur dan pemerintah daerah Bali',
      '1 botol air mineral per orang selama pendakian',
      'Sarapan ringan di puncak gunung (roti pisang kukus uap vulkanik, telur rebus uap vulkanik, teh/kopi/cokelat panas, buah musiman, biskuit)',
      'Peralatan mendaki (senter & trekking pole)',
      'Tiket masuk Pemandian Air Panas Alami (Natural Hot Spring) dan Makan Siang'
    ],
    exclusions: [
      'Uang pribadi untuk belanja tambahan di tempat istirahat',
      'Layanan foto atau video profesional di lokasi',
      'Pengeluaran pribadi tambahan lainnya',
      'Souvenir dan tipping'
    ],
    itinerary: [
      { time: '01:30 – 02:30', title: 'Penjemputan di Hotel / Villa / AirBnB', desc: 'Penjemputan di hotel/villa/guest house/AirBnB dengan transportasi pribadi ber-AC.' },
      { time: '03:45', title: 'Tiba di Titik Awal & Briefing', desc: 'Tiba di titik awal hiking dan perkenalan dengan pemandu lokal.' },
      { time: '03:50', title: 'Memulai Pendakian ke Puncak', desc: 'Memulai pendakian ke puncak Gunung Batur (membutuhkan waktu sekitar 2 jam).' },
      { time: '05:50', title: 'Puncak Gunung, Sunrise & Sarapan', desc: 'Tiba di puncak, menikmati pemandangan matahari terbit dan sarapan ringan uap vulkanik.' },
      { time: '07:00', title: 'Jelajah Kawah Utama & Jalur Turun', desc: 'Menjelajahi kawah utama dan turun melalui jalur yang berbeda.' },
      { time: '09:00', title: 'Tiba di Finish Line & Menuju Hot Spring', desc: 'Tiba di titik garis akhir (finish) lalu menuju ke Pemandian Air Panas Alami (Natural Hot Spring).' },
      { time: '09:30', title: 'Relaksasi Air Panas Alami & Makan Siang', desc: 'Menikmati relaksasi berendam di air panas alami dan makan siang.' },
      { time: '13:00', title: 'Perjalanan Kembali ke Hotel', desc: 'Perjalanan pulang kembali menuju hotel tempat Anda menginap.' }
    ]
  },
  {
    id: 'mount-agung-adventure-sunrise-trekking',
    title: 'Mount Agung Adventure Bali Sunrise Trekking',
    tagline: 'Bali Highest Peak (3.033m) • Sacred Volcano Summit • 2 Trekking Routes (Pasar Agung & Besakih) • Buffet Lunch',
    shortDesc: 'Mount Agung Adventure Bali Sunrise Trekking pendakian puncak tertinggi Bali (3.033 mdpl) dengan 2 rute pilihan (Pasar Agung/Besakih), sunrise spektakuler & makan siang.',
    longDesc: 'Mount Agung Adventure Bali Sunrise Trekking menaklukkan puncak tertinggi dan paling disucikan di Bali (3.033 mdpl) dengan pilihan rute pendek (via Pasar Agung) atau rute panjang (via Besakih). Nikmati golden sunrise memukau di atas awan, sarapan ringan hangat, serta makan siang prasmanan.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325945/07eb4a26-cfc3-4b69-b2bd-be2d633a43c4.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325945/07eb4a26-cfc3-4b69-b2bd-be2d633a43c4.png',
    pricePerPerson: 80,
    duration: '12 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud, Padang Bai, Candidasa, Amed',
    difficulty: 'Hard to Extreme',
    rating: 4.9,
    reviewCount: 390,
    highlights: [
      'Menaklukkan puncak tertinggi dan paling disucikan di pulau dewata, Gunung Agung (3.033 mdpl)',
      'Pilihan 2 Rute Trekking: Rute Pendek (via Pasar Agung - Puncak Selatan) & Rute Panjang (via Besakih - Puncak Barat)',
      'Menyaksikan matahari terbit (sunrise) spektakuler di puncak gunung sambil menikmati teh/kopi hangat & sarapan ringan',
      'Didampingi pengemudi pribadi berbahasa Inggris & pemandu lokal pendakian profesional'
    ],
    inclusions: [
      'Pengemudi pribadi berpendampingan Bahasa Inggris & pemandu lokal pendakian',
      'Tiket masuk dan retribusi Konservasi Alam Nasional',
      '1 botol air mineral per orang selama pendakian',
      'Sarapan ringan (Teh/Kopi hangat, buah musiman, camilan)',
      'Perlengkapan trekking (Senter & Tongkat trekking)',
      'Makan siang prasmanan di restoran'
    ],
    exclusions: [
      'Pengeluaran pribadi untuk belanja di area istirahat',
      'Foto atau video profesional (dapat dibeli terpisah di lokasi)',
      'Pengeluaran tambahan lainnya, souvenir, dan tip (tipping)'
    ],
    itinerary: [
      { time: 'Rute Pendek (Pasar Agung)', title: 'Penjemputan 23:30 – 00:30 WITA | Start 01:45 WITA', desc: 'Tiba di start point (01:00 – 01:30 WITA), mulai mendaki 01:45 WITA menuju Puncak Selatan. Durasi trekking 6 – 8 jam (naik & turun).' },
      { time: 'Rute Panjang (Besakih)', title: 'Penjemputan 20:30 – 21:30 WITA | Start 22:45 WITA', desc: 'Tiba di start point (22:00 – 22:30 WITA via Pura Pengubengan), mulai mendaki 22:45 WITA menuju Puncak Barat tertinggi. Durasi trekking 12 – 14 jam (naik & turun).' },
      { time: '06:00 WITA', title: 'Puncak Gunung Agung & Sunrise', desc: 'Tiba di puncak, menyaksikan matahari terbit yang memukau, menikmati minuman hangat (teh/kopi) dan camilan ringan / buah musiman.' },
      { time: '07:30 WITA', title: 'Perjalanan Turun Gunung', desc: 'Mulai turun gunung menyusuri jalur lereng menuju titik akhir.' },
      { time: '10:30 – 12:30 WITA', title: 'Selesai, Makan Siang & Kembali ke Hotel', desc: 'Tiba di titik akhir, dilanjutkan makan siang prasmanan di restoran, lalu diantar kembali ke hotel.' }
    ]
  },
  {
    id: 'bali-cycling-downhill-mountain-to-village',
    title: 'Bali Cycling Countryside Downhill From Mountain to Village',
    tagline: 'Kintamani Highland to Ubud • Bamboo Forest • Authentic Villages & Rice Fields • Downhill MTB Tour',
    shortDesc: 'Bali Cycling Countryside Downhill gowes santai dari pegunungan Kintamani ke desa tradisional & persawahan dengan sarapan dan makan siang.',
    longDesc: 'Bali Cycling Countryside Downhill From Mountain to Village menyusuri jalur sejuk Kintamani melintasi hutan bambu, pedesaan lokal otentik Bali, dan persawahan hijau. Termasuk sarapan pagi berlatar Danau Batur, makan siang di teras terbuka, dan perlengkapan sepeda lengkap.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326066/04b075c5-bd5c-4f15-a821-b389d514b95e.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326066/04b075c5-bd5c-4f15-a821-b389d514b95e.png',
    pricePerPerson: 20,
    duration: '8 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
    difficulty: 'Medium',
    rating: 4.9,
    reviewCount: 410,
    highlights: [
      'Gowes santai downhill melintasi dataran tinggi Kintamani, hutan bambu, pedesaan lokal, dan area persawahan',
      'Pemandu sepeda profesional berbahasa Inggris & driver pengantar ramah',
      'Termasuk sarapan pagi dengan panorama Gunung/Danau Batur & makan siang di teras terbuka',
      'Dilengkapi peralatan bersepeda lengkap dan air minum kemasan'
    ],
    inclusions: [
      'Penjemputan & pengantaran privat ber-AC (Private Transport)',
      'Tiket masuk Gunung Batur & sirkuit desa',
      'Peralatan bersepeda lengkap (sepeda gunung & helm)',
      'Pemandu sepeda profesional (Bahasa Inggris)',
      'Driver pengantar (Bahasa Inggris)',
      'Sarapan pagi & makan siang di teras terbuka',
      'Air minum kemasan'
    ],
    exclusions: [
      'Pengeluaran pribadi & belanja di tempat istirahat',
      'Pembelian foto/video profesional di lokasi',
      'Souvenir & Tips'
    ],
    itinerary: [
      { time: '07:00 AM', title: 'Penjemputan di Hotel', desc: 'Driver menjemput di lobby hotel/villa Anda dengan transportasi privat ber-AC.' },
      { time: '09:00 AM', title: 'Tiba di Starting Point & Sarapan', desc: 'Tiba di titik awal Kintamani, nikmati teh/kopi pagi dengan pemandangan Gunung/Danau Batur serta pengarahan keselamatan (safety briefing) dari pemandu.' },
      { time: '09:30 AM', title: 'Bersepeda Downhill (2.5 - 3 Jam)', desc: 'Rute bersepeda downhill melintasi dataran tinggi Kintamani yang sejuk, hutan bambu rindang, pedesaan otentik lokal, dan area persawahan bertingkat.' },
      { time: '12:30 PM', title: 'Makan Siang & Bersih-bersih', desc: 'Tiba di finish point untuk mandi, berganti pakaian, dan menikmati makan siang lezat di teras terbuka berlatar alam.' },
      { time: '14:00 PM', title: 'Kembali ke Hotel', desc: 'Pengantaran kembali ke lokasi penjemputan awal dengan nyaman.' }
    ]
  },
  {
    id: 'bali-nature-wonder-experience',
    title: 'Bali Nature Wonder Experience',
    tagline: 'Sekumpul & Fiji Waterfall • Lemukih Waterslide • Cliff Jumping • Rice Terraces Trekking',
    shortDesc: 'Bali Nature Wonder Experience jelajah Air Terjun Sekumpul & Fiji, perosotan alami Lemukih waterslide, cliff jumping 7-15m & trek sawah asri.',
    longDesc: 'Bali Nature Wonder Experience petualangan keindahan alam tersembunyi Bali Utara: menjelajahi megahnya Waterfall Sekumpul & Waterfall Fiji, meluncur di Lemukih Natural Waterslide, aksi loncat tebing (cliff jumping) 7-15m, dan trekking panorama persawahan hijau.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326124/858fd91f-1ff7-428d-beeb-c59f2cdc534b.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326124/858fd91f-1ff7-428d-beeb-c59f2cdc534b.png',
    pricePerPerson: 12,
    duration: '8 Hours',
    location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
    difficulty: 'Medium to Hard',
    rating: 4.9,
    reviewCount: 465,
    highlights: [
      'Menjelajahi keindahan spektakuler Waterfall Sekumpul & Waterfall Fiji',
      'Meluncur di perosotan alami (Lemukih Natural Waterslide) yang seru & menantang',
      'Melakukan cliff jumping (loncat tebing) ke sungai dari ketinggian 7 hingga 15 meter',
      'Trekking menyusuri bentangan sawah hijau asri dan permukiman warga lokal'
    ],
    inclusions: [
      'Transportasi ber-AC + pengemudi berbahasa Inggris',
      'Pemandu trekking lokal profesional',
      'Makan siang (lunch pack untuk opsi Short, Medium, Long Trek)',
      'Tiket masuk tempat wisata & retribusi desa',
      'Air mineral selama perjalanan',
      'Biaya BBM dan parkir kendaraan'
    ],
    exclusions: [
      'Foto atau video profesional di lokasi',
      'Pengeluaran pribadi & konsumsi tambahan di jalan',
      'Cenderamata / Souvenir',
      'Tip (tipping) untuk driver & pemandu'
    ],
    itinerary: [
      { time: '07:00 AM', title: 'Penjemputan di Hotel', desc: 'Penjemputan di lobby hotel Anda dengan armada transportasi pribadi ber-AC.' },
      { time: '09:00 AM', title: 'Tiba di Lokasi & Briefing', desc: 'Tiba di lokasi, briefing singkat oleh pemandu lokal sambil menikmati teh/kopi hangat dan camilan.' },
      { time: '09:30 AM', title: 'Eksplorasi Air Terjun, Waterslide & Cliff Jumping', desc: 'Kegiatan eksplorasi Air Terjun Sekumpul & Fiji, meluncur di perosotan alami (Lemukih waterslide), cliff jumping 7-15m, dan trek sawah dimulai.' },
      { time: '12:30 PM', title: 'Makan Siang (Lunch Pack) Panorama Alam', desc: 'Makan siang (lunch pack) di area terbuka dengan pemandangan lembah dan alam yang asri.' },
      { time: '14:00 PM', title: 'Perjalanan Kembali ke Hotel', desc: 'Perjalanan kembali ke hotel (opsional mampir ke Wanagiri Hills, Handara Gate, atau Danau Beratan dengan biaya pribadi).' }
    ]
  }
];

export const BOOKING_ADDONS: BookingAddon[] = [
  {
    id: 'private-photographer',
    name: 'Bespoke Private Photographer',
    description: 'A professional travel photographer to capture candid moments of your adventure (Includes 50+ edited high-res digital shots).',
    price: 95
  },
  {
    id: 'drone-video',
    name: 'Cinematic Drone Videography',
    description: 'Aerial video shooting utilizing 4K cinema drones for dramatic landscape memories (Includes a 1-minute social media reel).',
    price: 120
  },
  {
    id: 'champagne-service',
    name: 'Veuve Clicquot Champagne & Caviar',
    description: 'A chilled bottle of premium champagne accompanied by gourmet local caviar and fresh strawberries on ice.',
    price: 180
  },
  {
    id: 'helicopter-transfer',
    name: 'Ultra-Luxe Helicopter Return (1-Way)',
    description: 'Skip the return roads completely. Fly back directly to southern heliports with jaw-dropping island vistas.',
    price: 850
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Alexander V.',
    rating: 5,
    date: '2026-06-15',
    comment: 'The Mount Batur Off-Road Jeep Adventure was absolutely spectacular. The caldera sunrise was stunning, and our guide drove with incredible skill. The picnic breakfast on the volcano side felt so luxurious!',
    experienceId: 'jeep-adventure',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Charlotte Dubois',
    rating: 5,
    date: '2026-06-28',
    comment: 'Sailing around Nusa Penida on our own private yacht was a dream come true. We swam with massive manta rays and the onboard chef grilled the best lobster we’ve ever had. Truly professional crew.',
    experienceId: 'ocean-escape',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Made Suarta',
    rating: 5,
    date: '2026-07-02',
    comment: 'Sewa Toyota Avanza di Bali My Travel sangat memuaskan. Unitnya sangat bersih dan terawat, AC dingin, dan supirnya sangat ramah serta hafal jalan-jalan tikus di Bali sehingga bebas macet!',
    experienceId: 'jungle-retreat',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Jonathan K.',
    rating: 4,
    date: '2026-05-19',
    comment: 'The jeep ride can get a little bumpy through the forest trails, but that is part of the fun! The view of Mount Batur is breathtaking and the hot spring dip afterward was so relaxing. Recommend 10/10.',
    experienceId: 'jeep-adventure',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'Are all tours completely private?',
    answer: 'Yes. Every booking with balinikitour is 100% private. Your vehicles, yachts, tour hosts, and designated resort pavilions are exclusively yours. We do not group multiple independent bookings together.'
  },
  {
    question: 'What is the cancellation policy for weather conditions?',
    answer: 'Your safety is our absolute priority. If a tour is cancelled due to heavy rain, strong winds, or volcanic volcanic activity advisories, we offer free rescheduling or a complete 100% refund.'
  },
  {
    question: 'Can dietary restrictions be accommodated?',
    answer: 'Absolutely. Whether you are vegan, gluten-free, keto, halal, or have specific allergen requirements, our private chefs and partner restaurants will craft a customized culinary menu for you. Please indicate your needs when filling out your booking details.'
  },
  {
    question: 'How far in advance should we secure our dates?',
    answer: 'Because we operate exclusively with high-end private charters and highly specialized local guides, our spots are limited. We highly recommend booking at least 2 to 4 weeks in advance, especially during peak seasons.'
  },
  {
    question: 'What should we bring with us?',
    answer: 'For the Volcano Adventure: bring a warm windbreaker/hoodie (temperatures can drop to 12°C/53°F at sunrise), sunglasses, and closed-toe shoes. For the Ocean Cruise: bring swimsuits, high SPF sunblock, and light linen wear. For the Jungle Retreat: bring comfortable walking sandals and a change of garments for the purifying water ritual.'
  }
];

export const GALLERY_PHOTOS = [
  // 1. Destinasi (Destinations)
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
    category: 'destination',
    title: 'Nusa Penida Kelingking & Broken Beach',
    location: 'Nusa Penida Island, Bali'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png',
    category: 'destination',
    title: 'Pura Lempuyang Gate of Heaven & Tirta Gangga',
    location: 'Karangasem, Bali'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324702/34b12cec-98fb-4209-ae84-305b09b6324c.png',
    category: 'destination',
    title: 'Ulun Danu Beratan Temple & Handara Gate',
    location: 'Bedugul, Bali'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
    category: 'destination',
    title: 'Ubud Monkey Forest & Tegenungan Waterfall',
    location: 'Ubud, Gianyar'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
    category: 'destination',
    title: 'Bali Swing & Nungnung Waterfall Trekking',
    location: 'Abiansemal, Badung'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
    category: 'destination',
    title: 'Uluwatu Sunset Temple & Jimbaran Beach',
    location: 'Uluwatu, South Bali'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
    category: 'destination',
    title: 'Diamond Beach & Tree House Molenteng',
    location: 'East Nusa Penida'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326124/858fd91f-1ff7-428d-beeb-c59f2cdc534b.png',
    category: 'destination',
    title: 'Sekumpul Waterfall & Lemukih Water Slide',
    location: 'Singaraja, North Bali'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
    category: 'destination',
    title: 'Mount Batur Sunrise Summit Caldera',
    location: 'Kintamani, Bangli'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324453/fdf23903-3780-458b-a52f-e8402aafd246.png',
    category: 'destination',
    title: 'Tegalalang Rice Terraces & Art Village',
    location: 'Tegalalang, Ubud'
  },

  // 2. ATV & Off-Road (ATV Quad Bike)
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052559/bf039127-8977-4546-a0bf-aadde17504fd.png',
    category: 'atv',
    title: 'ATV Quad Bike Jungle & Gorilla Cave Tunnel',
    location: 'Payangan, Ubud'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787378235/90a03b5d-8896-473b-9309-1095503d30ff.png',
    category: 'atv',
    title: 'Kuber ATV Mud Track & Natural Waterfall Trail',
    location: 'Gianyar, Bali'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787060523/ab2bf9b9-f815-445d-a5f7-30b399cdca47.png',
    category: 'atv',
    title: '4WD Jeep Sunrise & Mount Batur Black Lava',
    location: 'Kintamani Caldera'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787062832/8f55222d-518c-4b9e-a56e-574ff17eff8c.png',
    category: 'atv',
    title: 'ATV Quad Bike Bamboo Forest & River Crossing',
    location: 'Silakarang, Ubud'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787377999/40079c3b-3b6b-4769-8cde-90b8e9aa1278.png',
    category: 'atv',
    title: 'Single & Tandem ATV Off-Road Exploration',
    location: 'Singapadu, Gianyar'
  },

  // 3. Rafting & Kayaking (Rafting and Kayaking)
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787061965/9ccc454e-a20f-48d5-a184-d9fc10c7d482.png',
    category: 'rafting-kayak',
    title: 'Telaga Waja River 16 KM White Water Rafting',
    location: 'Rendang, Karangasem'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063019/398e70aa-ea11-449f-a279-6ed8e832b74b.png',
    category: 'rafting-kayak',
    title: 'Surya Bintang Ayung River Ubud Rafting & Cliff Carvings',
    location: 'Ayung River, Ubud'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063184/31bbe6f8-14e4-48f0-9bf8-8506d9091642.png',
    category: 'rafting-kayak',
    title: 'Bali Dewata Ayung River Rapids & Hidden Waterfall',
    location: 'Kedewatan, Ubud'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1786184128/e0699feb-0cd5-4d84-9055-d2819efa51a4.png',
    category: 'rafting-kayak',
    title: 'White Water Rafting 4-Meter Dam Drop Adrenaline',
    location: 'Telaga Waja, Bali'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787737711/a00cb89b-8836-432b-9e67-c5a125a61627.png',
    category: 'rafting-kayak',
    title: 'Inflatable Kayaking & Coastal Water Sports',
    location: 'Tanjung Benoa, Nusa Dua'
  },
  {
    url: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787742311/70f55d1b-2b8a-405e-a7d2-785753aa5351.png',
    category: 'rafting-kayak',
    title: 'Mangrove Forest & Serene Ocean Kayaking',
    location: 'Sanur & Benoa Bay'
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'toyota-avanza',
    name: 'New Avanza',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783761973/24693abb-f732-49b4-ba68-28c882af0c16.png',
    passengers: 6,
    transmission: 'Manual / Automatic',
    engine: '1,500 cc',
    priceWithDriverPerDay: 450000,
    priceWithoutDriverPerDay: 300000,
    description: 'Sewa mobil New Avanza terbaru di Bali. Dilengkapi kabin yang nyaman, AC dingin merata, dan suspensi mumpuni untuk keluarga Anda.',
    features: ['6 Kursi Penumpang', 'Driver Profesional', 'Bahan Bakar Minyak (BBM)', 'AC Double Blower', 'Bersih & Wangi']
  },
  {
    id: 'toyota-innova',
    name: 'Innova Reborn',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762018/64feebd4-e9e7-4ffe-ac80-801b1ab26fd0.png',
    passengers: 6,
    transmission: 'Automatic',
    engine: '2,400 cc Diesel',
    priceWithDriverPerDay: 600000,
    priceWithoutDriverPerDay: 450000,
    description: 'Kabin super luas, suspensi empuk, dan mesin diesel bertenaga tangguh. Kenyamanan perjalanan berkelas VIP bersama keluarga.',
    features: ['6 Kursi Penumpang', 'Driver Profesional', 'Bahan Bakar Minyak (BBM)', 'Kabin Luas & Senyap', 'AC Dingin Maksimal']
  },
  {
    id: 'innova-zenix',
    name: 'Innova Zenix Type Q',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762059/56d3602a-cd36-437e-9a76-eab2be375ce3.png',
    passengers: 5,
    transmission: 'Automatic',
    engine: '2,000 cc Hybrid',
    priceWithDriverPerDay: 1200000,
    priceWithoutDriverPerDay: 0,
    description: 'Armada premium generasi terbaru dengan teknologi Hybrid senyap, captain seat mewah, dan interior eksklusif kelas VIP.',
    features: ['5 Seat Penumpang', 'Driver VIP & BBM', 'Captain Seat Premium', 'Panoramic Roof', 'Kabin Mewah Senyap']
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762106/74503d32-3371-4191-a619-7b1cd976e1d2.png',
    passengers: 5,
    transmission: 'Automatic',
    engine: '2,500 cc',
    priceWithDriverPerDay: 2500000,
    priceWithoutDriverPerDay: 0,
    description: 'Simbol kemewahan sejati dan kenyamanan VIP First-Class. Dilengkapi dengan suspensi udara super empuk dan interior megah.',
    features: ['5 Seat VIP', 'Driver VIP & BBM', 'Kabin First-Class', 'Electric Sliding Doors', 'AC Double Blower']
  },
  {
    id: 'hiace-commuter',
    name: 'Hiace Commuter',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762136/882d66e6-45b8-429b-a17f-6769179a7221.png',
    passengers: 15,
    transmission: 'Manual',
    engine: '2,500 cc Diesel',
    priceWithDriverPerDay: 1000000,
    priceWithoutDriverPerDay: 0,
    description: 'Mikrobus tangguh untuk rombongan keluarga besar atau rombongan pariwisata. Lapang, nyaman, dan handal menyusuri Bali.',
    features: ['15 Seat Penumpang', 'Sopir Pariwisata & BBM', 'Kabin Sangat Lapang', 'AC Multi-Zone Dingin', 'Sangat Nyaman']
  },
  {
    id: 'bus-29',
    name: 'Bus 29 Seat',
    type: 'car',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1783762175/1dcdb7c6-c3ac-4b4a-b509-fa0697eb985f.png',
    passengers: 29,
    transmission: 'Manual',
    engine: 'Diesel Multi',
    priceWithDriverPerDay: 2000000,
    priceWithoutDriverPerDay: 0,
    description: 'Bus pariwisata medium berkapasitas besar. Sangat nyaman untuk rombongan instansi, korporasi, maupun rombongan keluarga besar.',
    features: ['29 Seat Rombongan', 'Sopir Bus Berlisensi & BBM', 'Bagasi Luas', 'Audio Karaoke', 'AC Dingin Merata']
  }
];

