import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl, generateCloudinarySrcSet } from '../utils/cloudinary';
import { TOUR_TRANSLATIONS, MULTIDAY_TRANSLATIONS } from '../utils/localizedData';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  User, 
  Activity, 
  ArrowLeft, 
  Sparkles,
  Waves
} from 'lucide-react';
import RaftingDetailPage from './RaftingDetailPage';
import MultiDayDetailPage from './MultiDayDetailPage';
import { multiDayPackages } from '../data/multiDayPackages';

interface TourActivitiesPageProps {
  onBookNow: (experienceId: string) => void;
  initialCategory?: 'overview' | 'rafting-kayaking' | 'water-sport' | 'nature-trail' | 'full-day-tour' | 'animal-encounter' | 'beach';
}

interface ActivityPackage {
  id: string;
  title: string;
  categoryTag?: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  discountPercentage: number;
  duration: string;
  location: string;
  difficulty: string;
  capacity: string;
  description: string;
  image: string;
  highlights: string[];
}

export default function TourActivitiesPage({ onBookNow, initialCategory = 'overview' }: TourActivitiesPageProps) {
  const { language, t } = useLanguage();

  const localizeActivityPackage = (pkg: ActivityPackage): ActivityPackage => {
    if (language === 'id') return pkg;
    let translation = TOUR_TRANSLATIONS[pkg.id]?.[language] || TOUR_TRANSLATIONS[pkg.id]?.['en'];
    
    if (!translation) {
      const multiDayTranslation = MULTIDAY_TRANSLATIONS[pkg.id]?.[language] || MULTIDAY_TRANSLATIONS[pkg.id]?.['en'];
      if (multiDayTranslation) {
        return {
          ...pkg,
          title: multiDayTranslation.title || pkg.title,
          description: multiDayTranslation.description || pkg.description,
          highlights: multiDayTranslation.highlights || pkg.highlights,
        };
      }
      return pkg;
    }
    
    return {
      ...pkg,
      title: translation.title || pkg.title,
      description: translation.shortDesc || translation.description || pkg.description,
      difficulty: translation.difficulty || pkg.difficulty,
      highlights: translation.highlights || pkg.highlights,
    };
  };

  // Navigation state: 'overview' | 'rafting-kayaking' | 'package-detail' | 'water-sport' | 'nature-trail' | 'full-day-tour' | 'animal-encounter' | 'beach'
  const [currentView, setCurrentView] = useState<'overview' | 'rafting-kayaking' | 'package-detail' | 'water-sport' | 'nature-trail' | 'full-day-tour' | 'animal-encounter' | 'beach'>(initialCategory);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('telaga-waja-rafting');
  const [previousView, setPreviousView] = useState<'rafting-kayaking' | 'water-sport' | 'nature-trail' | 'full-day-tour' | 'animal-encounter' | 'beach'>(
    initialCategory === 'water-sport' || initialCategory === 'nature-trail' || initialCategory === 'full-day-tour' || initialCategory === 'animal-encounter' || initialCategory === 'beach'
      ? initialCategory
      : 'rafting-kayaking'
  );
  
  // State to track whether details are expanded. Default is false (hidden). When clicked, all packages expand details together.
  const [allExpanded, setAllExpanded] = useState<boolean>(false);

  const toggleAllDetails = () => {
    setAllExpanded(prev => !prev);
  };

  const handleViewPackageDetails = (pkgId: string, fromCategory: 'rafting-kayaking' | 'water-sport' | 'nature-trail' | 'full-day-tour' | 'animal-encounter' | 'beach' | 'beach' = 'rafting-kayaking') => {
    setSelectedPackageId(pkgId);
    setPreviousView(fromCategory);
    setCurrentView('package-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Water Sport Packages
  const waterSportMainPackages: ActivityPackage[] = [
    {
      id: 'water-sport-beaches-uluwatu-dinner',
      title: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner',
      categoryTag: 'Water Sport',
      originalPrice: 95,
      discountedPrice: 32,
      savings: 63,
      discountPercentage: 66,
      duration: '8 Hours',
      location: 'Jimbaran and Nusa Dua',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'playing some water activities at Tanjung Benoa beach as like Banana Boat ( complimentary ), Jet Ski, Parasailing, visiting stunning southern beaches, magnificent Uluwatu cliff temple sunset, and romantic Jimbaran seafood beach dinner.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
      highlights: [
        'Aktivitas Banana Boat gratis di Pantai Tanjung Benoa',
        'Jelajah pantai pasir putih eksotis Nusa Dua & Padang Padang',
        'Sunset spektakuler di atas tebing Pura Luhur Uluwatu',
        'Santap malam romantis seafood di pinggir Pantai Jimbaran'
      ]
    }
  ];


  // Snorkeling Packages placed under Snorkeling subcategory
  const snorkelingPackages: ActivityPackage[] = [
    {
      id: 'water-sport-beaches-uluwatu-dinner',
      title: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner',
      categoryTag: 'Water Sport',
      originalPrice: 95,
      discountedPrice: 32,
      savings: 63,
      discountPercentage: 66,
      duration: '8 Hours',
      location: 'Jimbaran and Nusa Dua',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'playing some water activities at Tanjung Benoa beach as like Banana Boat ( complimentary ), Jet Ski, Parasailing, visiting stunning southern beaches, magnificent Uluwatu cliff temple sunset, and romantic Jimbaran seafood beach dinner.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
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
      categoryTag: 'Snorkeling',
      originalPrice: 75,
      discountedPrice: 45,
      savings: 30,
      discountPercentage: 40,
      duration: '10 Hours',
      location: 'Nusa Penida and Nusa Lembongan',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'Nusa Penida East Trip taking just about 45 minutes by Speed Boat from Sanur Harbour. Visiting Diamond Beach, Atuh Beach, Tree House & Thousand Island View, and Teletubbies Hill.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
      highlights: [
        'Penyeberangan Speed Boat cepat 45 menit dari Sanur ke Nusa Penida',
        'Pesona Diamond Beach dengan tebing terjal & air laut pirus',
        'Spot foto ikonik Tree House, Thousand Island & bukit Teletubbies Hill',
        'Termasuk antar-jemput hotel, mobil AC pulau, makan siang & tiket wisata'
      ]
    },
    {
      id: 'nusa-penida-west-trip',
      title: 'NUSA PENIDA ISLAND – WEST TRIP',
      categoryTag: 'Snorkeling',
      originalPrice: 75,
      discountedPrice: 45,
      savings: 30,
      discountPercentage: 40,
      duration: '10 Hours',
      location: 'Nusa Penida and Nusa Lembongan',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'Nusa Penida West Trip taking about 45 minutes by Speed Boat from Sanur Harbour. Visiting Angel’s Billabong, Broken Beach, iconic Kelingking T-Rex Beach, and crystal clear waters of Crystal Bay.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
      highlights: [
        'Penyeberangan Speed Boat cepat ~45 menit dari Sanur ke Nusa Penida',
        'Kolam renang alami di tepi laut dengan air jernih di Angel’s Billabong',
        'Area pantai unik dengan tebing melengkung alami (arch) di Broken Beach',
        'Destinasi ikonik tebing kepala T-Rex Kelingking Beach & santai Crystal Bay',
        'Termasuk antar-jemput hotel, fast boat PP, mobil AC pulau, makan siang & tiket wisata'
      ]
    }
  ];

  // Banana Boat Ride Packages placed under Banana Boat Ride subcategory
  const bananaBoatPackages: ActivityPackage[] = [
    {
      id: 'water-sport-beaches-uluwatu-dinner',
      title: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner',
      categoryTag: 'Banana Boat',
      originalPrice: 95,
      discountedPrice: 32,
      savings: 63,
      discountPercentage: 66,
      duration: '8 Hours',
      location: 'Jimbaran and Nusa Dua',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'playing some water activities at Tanjung Benoa beach as like Banana Boat ( complimentary ), Jet Ski, Parasailing, visiting stunning southern beaches, magnificent Uluwatu cliff temple sunset, and romantic Jimbaran seafood beach dinner.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
      highlights: [
        'Aktivitas Banana Boat gratis di Pantai Tanjung Benoa',
        'Jelajah pantai pasir putih eksotis Nusa Dua & Padang Padang',
        'Sunset spektakuler di atas tebing Pura Luhur Uluwatu',
        'Santap malam romantis seafood di pinggir Pantai Jimbaran'
      ]
    }
  ];

  // 4 Specific Rafting & Kayaking Packages requested by user
  const raftingPackages: ActivityPackage[] = [
    {
      id: 'telaga-waja-rafting',
      title: 'White water rafting at Telaga Waja River',
      categoryTag: 'Rafting',
      originalPrice: 75,
      discountedPrice: 30,
      savings: 45,
      discountPercentage: 60,
      duration: '8 Hours',
      location: 'Ubud',
      difficulty: 'Sedang (Medium)',
      capacity: '1 Person',
      description: 'Get ready for an adrenaline-pumping adventure as you navigate the exhilarating rapids of Telaga Waja river. Lead by experienced local guides with stunning rice field vistas and pristine water.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787061965/9ccc454e-a20f-48d5-a184-d9fc10c7d482.png',
      highlights: ['Jeram kelas III-IV terpanjang di Bali (16 km)', 'Mata air alami Gunung Agung jernih', 'Termasuk makan siang buffet khas Bali', 'Perlengkapan standar keselamatan internasional']
    },
    {
      id: 'atv-rafting-combo',
      title: 'Experience the Thrill of ATV Ride and Rapid Water Rafting',
      categoryTag: 'Combo Adventure',
      originalPrice: 145,
      discountedPrice: 75,
      savings: 70,
      discountPercentage: 48,
      duration: '10 Hours',
      location: 'Ubud',
      difficulty: 'Sedang (Medium)',
      capacity: '1 Person',
      description: 'Experience the Thrill of ATV Ride and Rapid Water Rafting. Our Bali ATV Ride adventure will take you to an amazing off-road terrain through jungle tunnels, muddy tracks, followed by thrilling white water rapids on Ayung River.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787062832/8f55222d-518c-4b9e-a56e-574ff17eff8c.png',
      highlights: ['Paket kombo 2 petualangan favorit sekaligus', 'Trek ATV goa gorilla, terowongan & air terjun', 'Rafting sungai Ayung jeram kelas II-III', 'Antar jemput hotel dan makan siang lengkap']
    },
    {
      id: 'off-road-tours',
      title: 'Adventure Off Road Jeep Mount Batur Sunrise',
      categoryTag: 'Jeep Adventure',
      originalPrice: 70,
      discountedPrice: 35,
      savings: 35,
      discountPercentage: 50,
      duration: '10 Hours',
      location: 'Mount Batur, Kintamani',
      difficulty: 'Sedang (Medium)',
      capacity: '1 Person',
      description: 'Experience the breathtaking sunrise at Mount Batur with our exclusive Mount Batur Sunrise Jeep Tour. This tour offers an extraordinary adventure as you explore the stunning volcanic landscape and witness the sun rise over the horizon from about 1,365 meters above sea level.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052559/bf039127-8977-4546-a0bf-aadde17504fd.png',
      highlights: [
        'Off-Road Adventure in a specially designed 4x4 classic jeep',
        'Spectacular Sunrise at 1,365 meters above sea level without trekking',
        'Breathtaking panoramic views of Mount Batur and caldera',
        'Explore historic 1963 Black Lava and Black Sand fields',
        'Light breakfast and hot drinks included at sunrise point'
      ]
    },
    {
      id: 'adventure-atv-telaga-waja',
      title: 'Adventure of ATV Ride at Telaga Waja',
      categoryTag: 'ATV Ride',
      originalPrice: 95,
      discountedPrice: 55,
      savings: 40,
      discountPercentage: 42,
      duration: '8 Hours',
      location: 'Telaga Waja Area',
      difficulty: 'Sedang (Medium)',
      capacity: '1 Person',
      description: 'Petualangan Menantang ATV Ride & Trek Off-Road Melintasi Lanskap Alam Bali yang Indah di Telaga Waja.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787737711/a00cb89b-8836-432b-9e67-c5a125a61627.png',
      highlights: [
        'Rasakan sensasi menantang berkendara ATV dan Sungai Rapid.',
        'Memulai perjalanan seru melintasi lanskap alam Bali yang indah.',
        'Dipandu oleh pemandu ATV berpengalaman.',
        'Dilengkapi dengan Peralatan Berstandar Internasional.'
      ]
    },
    {
      id: 'adventure-atv-ubud-kuber',
      title: 'Adventure ATV Ride in UBUD with KUBER',
      categoryTag: 'ATV Ride',
      originalPrice: 90,
      discountedPrice: 45,
      savings: 45,
      discountPercentage: 50,
      duration: '8 Hours',
      location: 'Ubud, Bali',
      difficulty: 'Sedang (Medium)',
      capacity: '1 Person',
      description: 'Embark on the ultimate ATV adventure with the official Kuber Bali Adventure. Ride through lush tropical forests, navigate hidden tunnels, and cross pristine rivers.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787742311/70f55d1b-2b8a-405e-a7d2-785753aa5351.png',
      highlights: [
        "Feel the adrenaline rush as you ride through Bali's lush tropical forests",
        'Traverse diverse landscapes, including dense forests and clear rivers',
        "Capture the beauty of Bali's untouched nature on a thrilling ATV ride",
        'Enjoy a complimentary lunch at a scenic restaurant after your adventure',
        'Benefit from the expertise of professional guides who prioritize your safety'
      ]
    },
    {
      id: 'surya-bintang-rafting',
      title: 'Ubud Rafting at Ayung River by Surya Bintang Adventure',
      categoryTag: 'Rafting',
      originalPrice: 75,
      discountedPrice: 17,
      savings: 58,
      discountPercentage: 77,
      duration: '8 Jam',
      location: 'Payangan, Gianyar',
      difficulty: 'Sedang (Medium)',
      capacity: '1 Person',
      description: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram berdurasi sekitar 2,5 hingga 3 jam didampingi pemandu berpengalaman dan makan siang buffet lezat.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063019/398e70aa-ea11-449f-a279-6ed8e832b74b.png',
      highlights: ['Diskon spesial 77%', '12 km pengarungan (29 titik jeram)', 'Didampingi pemandu berpengalaman', 'Peralatan standar internasional']
    },
    {
      id: 'bali-dewata-rafting',
      title: 'Ubud Rafting Adventure at Ayung River by Bali Dewata',
      categoryTag: 'Rafting',
      originalPrice: 75,
      discountedPrice: 35,
      savings: 40,
      discountPercentage: 53,
      duration: '8 Jam',
      location: 'Ubud, Gianyar',
      difficulty: 'Sedang (Medium)',
      capacity: '1 Person',
      description: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram berdurasi sekitar 2,5 hingga 3 jam di sungai bersama pemandu berpengalaman.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063184/31bbe6f8-14e4-48f0-9bf8-8506d9091642.png',
      highlights: ['Sensasi menerjang jeram sungai', '12 km pengarungan (29 titik jeram)', 'Didampingi pemandu berpengalaman', 'Peralatan standar internasional']
    }
  ];

  // Nature Trail Packages
  const natureTrailPackages: ActivityPackage[] = [
{
    "id": "bali-culture-heritage-3-days",
    "title": "Bali’s Culture Heritage and Natural Beauty",
    "categoryTag": "Multi Days",
    "originalPrice": 442,
    "discountedPrice": 263,
    "savings": 179,
    "discountPercentage": 40,
    "duration": "3 Days",
    "location": "Bali",
    "difficulty": "Free & Easy",
    "capacity": "1 Person",
    "description": "Embrace the cultural heritage and natural beauty of Bali through its remarkable thousand temples and the enchanting Sacred Monkey Forest Sanctuary. Explore exquisite Balinese art crafted by local people, where history and creativity flourish in lush surroundings. Then, be captivated by the playful long-tailed macaques at the sanctuary, creating unforgettable memories amidst grand temples and serene forests.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Embrace the cultural heritage and natural beauty of Bali",
        "Visit remarkable temples and the enchanting Sacred Monkey Forest Sanctuary",
        "Explore exquisite Balinese art crafted by local people",
        "Explore the enchanting blend of mountain landscapes, rice fields, tropical plantations, beaches, and sea activities",
        "Enjoy a complimentary Banana Boat Ride"
    ]
},
{
    "id": "bali-spiritual-landscapes-4-days",
    "title": "Bali’s Spiritual Landscapes: Temples, Nature, and Cultural Wonders",
    "categoryTag": "Multi Days",
    "originalPrice": 608,
    "discountedPrice": 365,
    "savings": 243,
    "discountPercentage": 40,
    "duration": "4 Days",
    "location": "Bali",
    "difficulty": "Free & Easy",
    "capacity": "1 Person",
    "description": "Temukan perpaduan memikat antara alam dan spiritualitas di Bali, menampilkan candi-candi indah, terasering sawah yang subur, satwa liar yang unik, serta permata tersembunyi. Kunjungi tempat-tempat suci seperti Candi Tirta Empul dengan air pancuran sucinya dan Candi Ulun Danu, nikmati ketenangan Sacred Monkey Forest, dan saksikan pemandangan indah Gunung Batur. Jelajahi air terjun Leke Leke dan keindahan Tegalalang Rice Terrace.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389384/126335b5-4877-474a-8273-8739e11bc16b.png",
    "highlights": [
        "Menemukan perpaduan memikat antara alam dan spiritualitas di Bali",
        "Mengunjungi tempat-tempat suci",
        "Merasakan ketenangan di Sacred Monkey Forest",
        "Menjelajahi permata tersembunyi Air Terjun Leke Leke",
        "Mengabadikan keindahan Tegalalang Rice Terrace"
    ]
},
{
    "id": "balis-adventurous-escapes-6-days",
    "title": "Bali’s Adventurous Escapes",
    "categoryTag": "Multi Days",
    "originalPrice": 930,
    "discountedPrice": 555,
    "savings": 375,
    "discountPercentage": 40,
    "duration": "6 Days",
    "location": "Bali",
    "difficulty": "Medium",
    "capacity": "1 Person",
    "description": "Unleash your adventurous spirit with thrilling experiences that take you from get wets of Bali’s Rapid River and get dirty of ATV Ride to the breathtaking of green scenery hidden gems waterfall. Perfect for nature lovers and adrenaline seekers alike, these exciting outings promise unforgettable moments in stunning surroundings.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787390925/6595cee2-1839-4002-b8b7-6921b4416016.png",
    "highlights": [
        "Thrilling experiences Bali's Rapid River and ATV Ride",
        "Experience the tranquility of the Sacred Monkey",
        "Explore the vibrant hidden gems of Leke Leke waterfall",
        "Capture the timeless beauty of Tegalalang Rice Terrace"
    ]
},
{
    "id": "explore-balis-majestic-landscapes-5-days",
    "title": "Explore Bali’s Majestic Landscapes and Cultural Heritage",
    "categoryTag": "Multi Days",
    "originalPrice": 786,
    "discountedPrice": 472,
    "savings": 314,
    "discountPercentage": 40,
    "duration": "5 Days",
    "location": "Bali",
    "difficulty": "Medium",
    "capacity": "1 Person",
    "description": "Embark on an unforgettable journey through Bali’s stunning landscapes, from the breathtaking views of Mount Batur on a downhill cycling tour, a venture magical \"Gate of Heaven\". Experience the authentic Balinese lifestyle as you meander through lush rice paddies and picturesque ravines, capturing the essence of Bali away from the bustling crowds, every moment is a chance to immerse yourself in the island’s natural splendor.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Journey through Bali's stunning landscapes",
        "A venture magical \"Gate of Heaven\"",
        "Experience the authentic Balinese lifestyle",
        "An exploring Hidden Gems of Waterfall"
    ]
},

    {
      id: 'gate-of-heaven-water-palace-waterfall',
      title: 'Gate Of Heaven Water Palace Hidden Gems Waterfall',
      categoryTag: 'Nature Trail',
      originalPrice: 88,
      discountedPrice: 30,
      savings: 58,
      discountPercentage: 66,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Gate Of Heaven Water Palace Hidden Gems Waterfall a famous day trip for instagramable or selfies spot starting to visit Lempuyang Temple, also known as the Gate of Heaven with Mount Agung backdrop, Tirta Gangga Water Palace, and hidden gems waterfalls.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png',
      highlights: [
        'Spot foto ikonik Gerbang Surga (Gate of Heaven) Candi Lempuyang berlatar Gunung Agung',
        'Menjelajahi istana air bersejarah Tirta Gangga karya King of Karangasem dengan taman asri & kolam ikan koi',
        'Treking ringan menyusuri ngarai & sungai untuk melihat air terjun unik Tukad Cepung di dalam tebing batu',
        'Transportasi pribadi ber-AC dengan pengemudi ramah berbahasa Inggris, BBM & biaya parkir'
      ]
    },
    {
      id: 'amazing-waterfall-monkey-forest',
      title: 'Amazing Waterfall and Monkey Forest',
      categoryTag: 'Nature Trail',
      originalPrice: 84,
      discountedPrice: 30,
      savings: 54,
      discountPercentage: 64,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Amazing Waterfall and Monkey Forest day trip untuk menjelajahi keindahan Air Terjun Tegenungan (~25m), Ubud Monkey Forest Sanctuary, dan keindahan Air Terjun Kanto Lampo.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
      highlights: [
        'Jelajahi Air Terjun Tegenungan (tinggi ~25m, cocok untuk berenang dan bersantai)',
        'Mengunjungi Ubud Monkey Forest Sanctuary (melihat ratusan kera ekor panjang dan menikmati pemandangan alam/budaya Bali)',
        'Mengunjungi Air Terjun Kanto Lampo (menikmati kesegaran air terjun tebing batu yang indah)',
        'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir'
      ]
    },
    {
      id: 'adventure-bali-swing-nungnung-ulundanu-lekeleke',
      title: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall',
      categoryTag: 'Nature Trail',
      originalPrice: 88,
      discountedPrice: 30,
      savings: 58,
      discountPercentage: 66,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai, dilanjutkan mengunjungi Air Terjun Nungnung, Pura Ulun Danu Beratan Bedugul, dan trekking Air Terjun Leke Leke.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
      highlights: [
        'Bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai',
        'Mengunjungi Air Terjun Nungnung (menuruni sekitar 300 anak tangga menuju air terjun setinggi 50 meter)',
        'Mengunjungi Pura Ulun Danu Beratan di tepi Danau Beratan, Bedugul (termasuk opsi makan siang di restoran lokal)',
        'Trekking singkat dan menjelajahi Air Terjun Leke Leke yang asri dan menenangkan'
      ]
    },
    {
      id: 'discover-waterfall-rice-terrace-monkey-forest',
      title: 'Discover Waterfall Rice Terrace and Monkey Forest',
      categoryTag: 'Nature Trail',
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
    },
    {
      id: 'explore-iconic-culture-heritage-twin-lake',
      title: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour',
      categoryTag: 'Nature Trail',
      originalPrice: 93,
      discountedPrice: 30,
      savings: 63,
      discountPercentage: 68,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour mengunjungi Candi Ulun Danu Beratan, Handara Gate, Wanagiri Hidden Hills pemandangan Danau Buyan & Tamblingan, Air Terjun Leke Leke, dan pemandangan sunset di Candi Tanah Lot.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324702/34b12cec-98fb-4209-ae84-305b09b6324c.png',
      highlights: [
        'Mengunjungi Candi Ulun Danu Beratan di tepi Danau Beratan dengan panorama pegunungan & pagoda khas Bali',
        'Berfoto di Handara Gate ikonik berlatar belakang perbukitan hijau tropis Bedugul',
        'Menikmati keindahan Twin Lake (Buyan & Tamblingan) di Wanagiri Hidden Hills dengan spot foto ayunan',
        'Trekking Air Terjun Leke Leke (50m) & menikmati matahari terbenam (sunset) magis di Candi Tanah Lot'
      ]
    },
    {
      id: 'adventure-bali-sunrise-trekking-mount-batur',
      title: 'Adventure Bali Sunrise Trekking at Mount Batur',
      categoryTag: 'Nature Trail',
      originalPrice: 90,
      discountedPrice: 50,
      savings: 40,
      discountPercentage: 44,
      duration: '8 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Hard',
      capacity: '1 Person',
      description: 'Adventure Bali Sunrise Trekking at Mount Batur mendaki puncak Gunung Batur (1.717 mdpl) untuk menikmati sunrise spektakuler di atas awan, sarapan ringan uap vulkanik, jelajah kawah utama, dan perkebunan kopi.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
      highlights: [
        'Pendakian dini hari menuju puncak Gunung Batur (1.717 mdpl) dipandu pengemudi pribadi & pemandu trekking lokal',
        'Menyaksikan pemandangan spektakuler matahari terbit (Sunrise) di atas lautan awan',
        'Sarapan ringan di puncak gunung (roti pisang kukus uap vulkanik, telur rebus uap vulkanik, teh/kopi/cokelat panas, buah segar, biskuit)',
        'Jelajah kawah utama dan turun lewat jalur berbeda, serta kunjungan ke perkebunan kopi (opsional/gratis)'
      ]
    },
    {
      id: 'adventure-batur-sunrise-hot-spring-lunch',
      title: 'Adventure Bali Sunrise Trekking at Mount Batur and Hot Spring Water Refreshing with Lunch',
      categoryTag: 'Nature Trail',
      originalPrice: 110,
      discountedPrice: 25,
      savings: 85,
      discountPercentage: 77,
      duration: '8 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Hard',
      capacity: '1 Person',
      description: 'Adventure Bali Sunrise Trekking at Mount Batur and Hot Spring Water Refreshing with Lunch pendakian ke puncak Gunung Batur (1.717 mdpl) untuk menikmati sunrise spektakuler dan sarapan ringan uap vulkanik, dilanjutkan berendam di Pemandian Air Panas Alami (Natural Hot Spring) dan makan siang.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325801/600b4aa7-95a1-4f0e-b5b1-88158d4364ed.png',
      highlights: [
        'Pendakian malam menuju puncak Gunung Batur (1.717 mdpl) dipandu pemandu pendakian lokal profesional',
        'Menyaksikan pemandangan matahari terbit spektakuler dan sarapan ringan di puncak gunung',
        'Menjelajahi kawah utama dan turun melalui jalur lereng yang berbeda',
        'Relaksasi berendam di Pemandian Air Panas Alami (Natural Hot Spring) dan menikmati hidangan makan siang'
      ]
    },
    {
      id: 'mount-agung-adventure-sunrise-trekking',
      title: 'Mount Agung Adventure Bali Sunrise Trekking',
      categoryTag: 'Nature Trail',
      originalPrice: 125,
      discountedPrice: 80,
      savings: 45,
      discountPercentage: 36,
      duration: '12 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud, Padang Bai, Candidasa, Amed',
      difficulty: 'Hard to Extreme',
      capacity: '1 Person',
      description: 'Mount Agung Adventure Bali Sunrise Trekking menaklukkan puncak tertinggi dan paling disucikan di Bali (3.033 mdpl) dengan pilihan rute pendek (via Pasar Agung) atau rute panjang (via Besakih). Nikmati golden sunrise memukau di atas awan, sarapan ringan hangat, serta makan siang prasmanan.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325945/07eb4a26-cfc3-4b69-b2bd-be2d633a43c4.png',
      highlights: [
        'Menaklukkan puncak tertinggi dan paling disucikan di pulau dewata, Gunung Agung (3.033 mdpl)',
        'Pilihan 2 Rute Trekking: Rute Pendek (via Pasar Agung - Puncak Selatan) & Rute Panjang (via Besakih - Puncak Barat)',
        'Menyaksikan matahari terbit (sunrise) spektakuler di puncak gunung sambil menikmati teh/kopi hangat & sarapan ringan',
        'Didampingi pengemudi pribadi berbahasa Inggris & pemandu lokal pendakian profesional'
      ]
    },
    {
      id: 'bali-cycling-downhill-mountain-to-village',
      title: 'Bali Cycling Countryside Downhill From Mountain to Village',
      categoryTag: 'Nature Trail',
      originalPrice: 75,
      discountedPrice: 20,
      savings: 55,
      discountPercentage: 73,
      duration: '8 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Bali Cycling Countryside Downhill From Mountain to Village menyusuri jalur sejuk Kintamani melintasi hutan bambu, pedesaan lokal otentik Bali, dan persawahan hijau. Termasuk sarapan pagi berlatar Danau Batur, makan siang di teras terbuka, dan perlengkapan sepeda lengkap.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326066/04b075c5-bd5c-4f15-a821-b389d514b95e.png',
      highlights: [
        'Gowes santai downhill melintasi dataran tinggi Kintamani, hutan bambu, pedesaan lokal, dan area persawahan',
        'Pemandu sepeda profesional berbahasa Inggris & driver pengantar ramah',
        'Termasuk sarapan pagi dengan panorama Gunung/Danau Batur & makan siang di teras terbuka',
        'Dilengkapi peralatan bersepeda lengkap dan air minum kemasan'
      ]
    },
    {
      id: 'bali-nature-wonder-experience',
      title: 'Bali Nature Wonder Experience',
      categoryTag: 'Nature Trail',
      originalPrice: 76,
      discountedPrice: 12,
      savings: 64,
      discountPercentage: 84,
      duration: '8 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium to Hard',
      capacity: '1 Person',
      description: 'Bali Nature Wonder Experience petualangan keindahan alam tersembunyi Bali Utara: menjelajahi megahnya Waterfall Sekumpul & Waterfall Fiji, meluncur di Lemukih Natural Waterslide, aksi loncat tebing (cliff jumping) 7-15m, dan trekking panorama persawahan hijau.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326124/858fd91f-1ff7-428d-beeb-c59f2cdc534b.png',
      highlights: [
        'Menjelajahi keindahan spektakuler Waterfall Sekumpul & Waterfall Fiji',
        'Meluncur di perosotan alami (Lemukih Natural Waterslide) yang seru & menantang',
        'Melakukan cliff jumping (loncat tebing) ke sungai dari ketinggian 7 hingga 15 meter',
        'Trekking menyusuri bentangan sawah hijau asri dan permukiman warga lokal'
      ]
    }
  ];

  // Full Day Tour Packages
  const fullDayTourPackages: ActivityPackage[] = [
{
    "id": "bali-culture-heritage-3-days",
    "title": "Bali’s Culture Heritage and Natural Beauty",
    "categoryTag": "Multi Days",
    "originalPrice": 442,
    "discountedPrice": 263,
    "savings": 179,
    "discountPercentage": 40,
    "duration": "3 Days",
    "location": "Bali",
    "difficulty": "Free & Easy",
    "capacity": "1 Person",
    "description": "Embrace the cultural heritage and natural beauty of Bali through its remarkable thousand temples and the enchanting Sacred Monkey Forest Sanctuary. Explore exquisite Balinese art crafted by local people, where history and creativity flourish in lush surroundings. Then, be captivated by the playful long-tailed macaques at the sanctuary, creating unforgettable memories amidst grand temples and serene forests.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Embrace the cultural heritage and natural beauty of Bali",
        "Visit remarkable temples and the enchanting Sacred Monkey Forest Sanctuary",
        "Explore exquisite Balinese art crafted by local people",
        "Explore the enchanting blend of mountain landscapes, rice fields, tropical plantations, beaches, and sea activities",
        "Enjoy a complimentary Banana Boat Ride"
    ]
},
{
    "id": "bali-spiritual-landscapes-4-days",
    "title": "Bali’s Spiritual Landscapes: Temples, Nature, and Cultural Wonders",
    "categoryTag": "Multi Days",
    "originalPrice": 608,
    "discountedPrice": 365,
    "savings": 243,
    "discountPercentage": 40,
    "duration": "4 Days",
    "location": "Bali",
    "difficulty": "Free & Easy",
    "capacity": "1 Person",
    "description": "Temukan perpaduan memikat antara alam dan spiritualitas di Bali, menampilkan candi-candi indah, terasering sawah yang subur, satwa liar yang unik, serta permata tersembunyi. Kunjungi tempat-tempat suci seperti Candi Tirta Empul dengan air pancuran sucinya dan Candi Ulun Danu, nikmati ketenangan Sacred Monkey Forest, dan saksikan pemandangan indah Gunung Batur. Jelajahi air terjun Leke Leke dan keindahan Tegalalang Rice Terrace.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389384/126335b5-4877-474a-8273-8739e11bc16b.png",
    "highlights": [
        "Menemukan perpaduan memikat antara alam dan spiritualitas di Bali",
        "Mengunjungi tempat-tempat suci",
        "Merasakan ketenangan di Sacred Monkey Forest",
        "Menjelajahi permata tersembunyi Air Terjun Leke Leke",
        "Mengabadikan keindahan Tegalalang Rice Terrace"
    ]
},
{
    "id": "balis-adventurous-escapes-6-days",
    "title": "Bali’s Adventurous Escapes",
    "categoryTag": "Multi Days",
    "originalPrice": 930,
    "discountedPrice": 555,
    "savings": 375,
    "discountPercentage": 40,
    "duration": "6 Days",
    "location": "Bali",
    "difficulty": "Medium",
    "capacity": "1 Person",
    "description": "Unleash your adventurous spirit with thrilling experiences that take you from get wets of Bali’s Rapid River and get dirty of ATV Ride to the breathtaking of green scenery hidden gems waterfall. Perfect for nature lovers and adrenaline seekers alike, these exciting outings promise unforgettable moments in stunning surroundings.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787390925/6595cee2-1839-4002-b8b7-6921b4416016.png",
    "highlights": [
        "Thrilling experiences Bali's Rapid River and ATV Ride",
        "Experience the tranquility of the Sacred Monkey",
        "Explore the vibrant hidden gems of Leke Leke waterfall",
        "Capture the timeless beauty of Tegalalang Rice Terrace"
    ]
},
{
    "id": "explore-balis-majestic-landscapes-5-days",
    "title": "Explore Bali’s Majestic Landscapes and Cultural Heritage",
    "categoryTag": "Multi Days",
    "originalPrice": 786,
    "discountedPrice": 472,
    "savings": 314,
    "discountPercentage": 40,
    "duration": "5 Days",
    "location": "Bali",
    "difficulty": "Medium",
    "capacity": "1 Person",
    "description": "Embark on an unforgettable journey through Bali’s stunning landscapes, from the breathtaking views of Mount Batur on a downhill cycling tour, a venture magical \"Gate of Heaven\". Experience the authentic Balinese lifestyle as you meander through lush rice paddies and picturesque ravines, capturing the essence of Bali away from the bustling crowds, every moment is a chance to immerse yourself in the island’s natural splendor.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Journey through Bali's stunning landscapes",
        "A venture magical \"Gate of Heaven\"",
        "Experience the authentic Balinese lifestyle",
        "An exploring Hidden Gems of Waterfall"
    ]
},

    {
      id: 'water-sport-beaches-uluwatu-dinner',
      title: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner',
      categoryTag: 'Full Day Tour',
      originalPrice: 95,
      discountedPrice: 32,
      savings: 63,
      discountPercentage: 66,
      duration: '8 Hours',
      location: 'Tanjung Benoa, Padang Padang, Uluwatu, Jimbaran',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner menikmati wahana olahraga air di Tanjung Benoa (Banana Boat gratis), eksplorasi pantai eksotis Padang Padang, sunset magis Pura Luhur Uluwatu, dan santap malam romantis seafood di Pantai Jimbaran.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
      highlights: [
        'Aktivitas Banana Boat gratis di Pantai Tanjung Benoa & watersport seru',
        'Jelajah pantai pasir putih eksotis Padang Padang dengan tebing karang unik',
        'Sunset spektakuler di atas tebing 70m Pura Luhur Uluwatu & Tari Kecak',
        'Santap malam romantis seafood dinner di tepi Pantai Teluk Jimbaran'
      ]
    },
    {
      id: 'nusa-penida-east-trip',
      title: 'NUSA PENIDA ISLAND – EAST TRIP',
      categoryTag: 'Full Day Tour',
      originalPrice: 75,
      discountedPrice: 45,
      savings: 30,
      discountPercentage: 40,
      duration: '10 Hours',
      location: 'Sanur & Nusa Penida Timur (Diamond Beach, Atuh, Tree House)',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'NUSA PENIDA ISLAND – EAST TRIP perjalanan laut 45 menit dengan Speed Boat dari Sanur menuju pesona Nusa Penida Timur: Diamond Beach dengan tebing terjal & air pirus, pantai tenang Atuh Beach, Tree House & Thousand Island View, dan perbukitan hijau Teletubbies Hill.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
      highlights: [
        'Penyeberangan Speed Boat cepat ~45 menit dari Pelabuhan Sanur ke Nusa Penida PP',
        'Eksplorasi Diamond Beach dengan tebing terjal, air pirus, dan tangga batu ikonik',
        'Spot foto spektakuler Tree House & Thousand Island View serta bukit Teletubbies Hill',
        'Transportasi pribadi ber-AC di Nusa Penida, tiket masuk & makan siang lezat'
      ]
    },
    {
      id: 'nusa-penida-west-trip',
      title: 'NUSA PENIDA ISLAND – WEST TRIP',
      categoryTag: 'Full Day Tour',
      originalPrice: 75,
      discountedPrice: 45,
      savings: 30,
      discountPercentage: 40,
      duration: '10 Hours',
      location: 'Sanur & Nusa Penida Barat (Kelingking, Angel’s Billabong, Broken Beach)',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'NUSA PENIDA ISLAND – WEST TRIP tur eksklusif menjelajahi keajaiban alam Nusa Penida Barat: kolam renang alami Angel’s Billabong, tebing melengkung Broken Beach, pemandangan ikonik tebing T-Rex Kelingking Beach, dan pantai berpasir putih Crystal Bay.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
      highlights: [
        'Penyeberangan Speed Boat cepat ~45 menit dari Pelabuhan Sanur menuju Nusa Penida PP',
        'Kolam renang alami tepi laut dengan air jernih dan tebing dramatis Angel’s Billabong',
        'Tebing melengkung alami Broken Beach & spot foto legendaris tebing T-Rex Kelingking Beach',
        'Santai dan berenang di Crystal Bay, mobil ber-AC pulau, tiket wisata & makan siang'
      ]
    },
    {
      id: 'gate-of-heaven-water-palace-waterfall',
      title: 'Gate Of Heaven Water Palace Hidden Gems Waterfall',
      categoryTag: 'Full Day Tour',
      originalPrice: 88,
      discountedPrice: 30,
      savings: 58,
      discountPercentage: 66,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Gate Of Heaven Water Palace Hidden Gems Waterfall a famous day trip for instagramable or selfies spot starting to visit Lempuyang Temple, also known as the Gate of Heaven with Mount Agung backdrop, Tirta Gangga Water Palace, and hidden gems waterfalls.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png',
      highlights: [
        'Spot foto ikonik Gerbang Surga (Gate of Heaven) Candi Lempuyang berlatar Gunung Agung',
        'Menjelajahi istana air bersejarah Tirta Gangga karya King of Karangasem dengan taman asri & kolam ikan koi',
        'Treking ringan menyusuri ngarai & sungai untuk melihat air terjun unik Tukad Cepung di dalam tebing batu',
        'Transportasi pribadi ber-AC dengan pengemudi ramah berbahasa Inggris, BBM & biaya parkir'
      ]
    },
    {
      id: 'amazing-waterfall-monkey-forest',
      title: 'Amazing Waterfall and Monkey Forest',
      categoryTag: 'Full Day Tour',
      originalPrice: 84,
      discountedPrice: 30,
      savings: 54,
      discountPercentage: 64,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Amazing Waterfall and Monkey Forest day trip untuk menjelajahi keindahan Air Terjun Tegenungan (~25m), Ubud Monkey Forest Sanctuary, dan keindahan Air Terjun Kanto Lampo.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
      highlights: [
        'Jelajahi Air Terjun Tegenungan (tinggi ~25m, cocok untuk berenang dan bersantai)',
        'Mengunjungi Ubud Monkey Forest Sanctuary (melihat ratusan kera ekor panjang dan menikmati pemandangan alam/budaya Bali)',
        'Mengunjungi Air Terjun Kanto Lampo (menikmati kesegaran air terjun tebing batu yang indah)',
        'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir'
      ]
    },
    {
      id: 'adventure-bali-swing-nungnung-ulundanu-lekeleke',
      title: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall',
      categoryTag: 'Full Day Tour',
      originalPrice: 88,
      discountedPrice: 30,
      savings: 58,
      discountPercentage: 66,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai, dilanjutkan mengunjungi Air Terjun Nungnung, Pura Ulun Danu Beratan Bedugul, dan trekking Air Terjun Leke Leke.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
      highlights: [
        'Bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai',
        'Mengunjungi Air Terjun Nungnung (menuruni sekitar 300 anak tangga menuju air terjun setinggi 50 meter)',
        'Mengunjungi Pura Ulun Danu Beratan di tepi Danau Beratan, Bedugul (termasuk opsi makan siang di restoran lokal)',
        'Trekking singkat dan menjelajahi Air Terjun Leke Leke yang asri dan menenangkan'
      ]
    },
    {
      id: 'discover-waterfall-rice-terrace-monkey-forest',
      title: 'Discover Waterfall Rice Terrace and Monkey Forest',
      categoryTag: 'Full Day Tour',
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
    },
    {
      id: 'explore-iconic-culture-heritage-twin-lake',
      title: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour',
      categoryTag: 'Full Day Tour',
      originalPrice: 93,
      discountedPrice: 30,
      savings: 63,
      discountPercentage: 68,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour mengunjungi Candi Ulun Danu Beratan, Handara Gate, Wanagiri Hidden Hills pemandangan Danau Buyan & Tamblingan, Air Terjun Leke Leke, dan pemandangan sunset di Candi Tanah Lot.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324702/34b12cec-98fb-4209-ae84-305b09b6324c.png',
      highlights: [
        'Mengunjungi Candi Ulun Danu Beratan di tepi Danau Beratan dengan panorama pegunungan & pagoda khas Bali',
        'Berfoto di Handara Gate ikonik berlatar belakang perbukitan hijau tropis Bedugul',
        'Menikmati keindahan Twin Lake (Buyan & Tamblingan) di Wanagiri Hidden Hills dengan spot foto ayunan',
        'Trekking Air Terjun Leke Leke (50m) & menikmati matahari terbenam (sunset) magis di Candi Tanah Lot'
      ]
    },
    {
      id: 'ubud-monkey-forest-and-kintamani-highland',
      title: 'Ubud Monkey Forest and Kintamani Highland',
      categoryTag: 'Full Day Tour',
      originalPrice: 80,
      discountedPrice: 25,
      savings: 55,
      discountPercentage: 69,
      duration: '8 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'Ubud and Kintamani Highland day tour dengan transportasi privat: menyaksikan Tari Barong & Keris, Desa Seni Kerajinan, Pura Tirta Empul, pesona Gunung Batur Kintamani, dan Cagar Alam Ubud Monkey Forest.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787377999/40079c3b-3b6b-4769-8cde-90b8e9aa1278.png',
      highlights: [
        'Sightseeing by Air Conditioned Private Transportation with English Speaking Driver',
        'Attending Bali Culture performance and local people talent',
        'Admire Culture Heritage and chance to get blessing',
        'Enjoy Mountain charm and fresh atmosphere',
        'Get close with animal at reserved forest'
      ]
    },
    {
      id: 'royal-family-palace-bedugul-tanah-lot',
      title: 'Royal Family Palace – Bedugul Lake Temple – Tanah Lot Temple',
      categoryTag: 'Full Day Tour',
      originalPrice: 85,
      discountedPrice: 29,
      savings: 56,
      discountPercentage: 66,
      duration: '8 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'Mengwi Kingdom Palace – Bedugul Lake Temple and Tanah Lot day tour dengan transportasi privat ber-AC: mengunjungi Puri Kerajaan Mengwi (UNESCO), Candi Ulun Danu di tepi Danau Beratan, foto instagramable Handara Gate, dan panorama siluet sunset di Candi Tanah Lot.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787378235/90a03b5d-8896-473b-9309-1095503d30ff.png',
      highlights: [
        'Sightseeing by Air Conditioned Private Transportation with English Speaking Driver',
        'Admire Culture Heritage with Nature Panoramic',
        'Enjoy Mountain charm and fresh atmosphere',
        'Get iconic instagramable spot or selfie'
      ]
    }
  ];

  // Animal Encounter Packages
  const animalEncounterPackages: ActivityPackage[] = [
{
    "id": "bali-culture-heritage-3-days",
    "title": "Bali’s Culture Heritage and Natural Beauty",
    "categoryTag": "Multi Days",
    "originalPrice": 442,
    "discountedPrice": 263,
    "savings": 179,
    "discountPercentage": 40,
    "duration": "3 Days",
    "location": "Bali",
    "difficulty": "Free & Easy",
    "capacity": "1 Person",
    "description": "Embrace the cultural heritage and natural beauty of Bali through its remarkable thousand temples and the enchanting Sacred Monkey Forest Sanctuary. Explore exquisite Balinese art crafted by local people, where history and creativity flourish in lush surroundings. Then, be captivated by the playful long-tailed macaques at the sanctuary, creating unforgettable memories amidst grand temples and serene forests.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Embrace the cultural heritage and natural beauty of Bali",
        "Visit remarkable temples and the enchanting Sacred Monkey Forest Sanctuary",
        "Explore exquisite Balinese art crafted by local people",
        "Explore the enchanting blend of mountain landscapes, rice fields, tropical plantations, beaches, and sea activities",
        "Enjoy a complimentary Banana Boat Ride"
    ]
},
{
    "id": "bali-spiritual-landscapes-4-days",
    "title": "Bali’s Spiritual Landscapes: Temples, Nature, and Cultural Wonders",
    "categoryTag": "Multi Days",
    "originalPrice": 608,
    "discountedPrice": 365,
    "savings": 243,
    "discountPercentage": 40,
    "duration": "4 Days",
    "location": "Bali",
    "difficulty": "Free & Easy",
    "capacity": "1 Person",
    "description": "Temukan perpaduan memikat antara alam dan spiritualitas di Bali, menampilkan candi-candi indah, terasering sawah yang subur, satwa liar yang unik, serta permata tersembunyi. Kunjungi tempat-tempat suci seperti Candi Tirta Empul dengan air pancuran sucinya dan Candi Ulun Danu, nikmati ketenangan Sacred Monkey Forest, dan saksikan pemandangan indah Gunung Batur. Jelajahi air terjun Leke Leke dan keindahan Tegalalang Rice Terrace.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389384/126335b5-4877-474a-8273-8739e11bc16b.png",
    "highlights": [
        "Menemukan perpaduan memikat antara alam dan spiritualitas di Bali",
        "Mengunjungi tempat-tempat suci",
        "Merasakan ketenangan di Sacred Monkey Forest",
        "Menjelajahi permata tersembunyi Air Terjun Leke Leke",
        "Mengabadikan keindahan Tegalalang Rice Terrace"
    ]
},
{
    "id": "balis-adventurous-escapes-6-days",
    "title": "Bali’s Adventurous Escapes",
    "categoryTag": "Multi Days",
    "originalPrice": 930,
    "discountedPrice": 555,
    "savings": 375,
    "discountPercentage": 40,
    "duration": "6 Days",
    "location": "Bali",
    "difficulty": "Medium",
    "capacity": "1 Person",
    "description": "Unleash your adventurous spirit with thrilling experiences that take you from get wets of Bali’s Rapid River and get dirty of ATV Ride to the breathtaking of green scenery hidden gems waterfall. Perfect for nature lovers and adrenaline seekers alike, these exciting outings promise unforgettable moments in stunning surroundings.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787390925/6595cee2-1839-4002-b8b7-6921b4416016.png",
    "highlights": [
        "Thrilling experiences Bali's Rapid River and ATV Ride",
        "Experience the tranquility of the Sacred Monkey",
        "Explore the vibrant hidden gems of Leke Leke waterfall",
        "Capture the timeless beauty of Tegalalang Rice Terrace"
    ]
},
{
    "id": "explore-balis-majestic-landscapes-5-days",
    "title": "Explore Bali’s Majestic Landscapes and Cultural Heritage",
    "categoryTag": "Multi Days",
    "originalPrice": 786,
    "discountedPrice": 472,
    "savings": 314,
    "discountPercentage": 40,
    "duration": "5 Days",
    "location": "Bali",
    "difficulty": "Medium",
    "capacity": "1 Person",
    "description": "Embark on an unforgettable journey through Bali’s stunning landscapes, from the breathtaking views of Mount Batur on a downhill cycling tour, a venture magical \"Gate of Heaven\". Experience the authentic Balinese lifestyle as you meander through lush rice paddies and picturesque ravines, capturing the essence of Bali away from the bustling crowds, every moment is a chance to immerse yourself in the island’s natural splendor.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Journey through Bali's stunning landscapes",
        "A venture magical \"Gate of Heaven\"",
        "Experience the authentic Balinese lifestyle",
        "An exploring Hidden Gems of Waterfall"
    ]
},

    {
      id: 'ubud-monkey-forest-and-kintamani-highland',
      title: 'Ubud Monkey Forest and Kintamani Highland',
      categoryTag: 'Animal Encounter',
      originalPrice: 80,
      discountedPrice: 25,
      savings: 55,
      discountPercentage: 69,
      duration: '8 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Easy',
      capacity: '1 Person',
      description: 'Ubud and Kintamani Highland day tour dengan transportasi privat: menyaksikan Tari Barong & Keris, Desa Seni Kerajinan, Pura Tirta Empul, pesona Gunung Batur Kintamani, dan Cagar Alam Ubud Monkey Forest.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787377999/40079c3b-3b6b-4769-8cde-90b8e9aa1278.png',
      highlights: [
        'Sightseeing by Air Conditioned Private Transportation with English Speaking Driver',
        'Attending Bali Culture performance and local people talent',
        'Admire Culture Heritage and chance to get blessing',
        'Enjoy Mountain charm and fresh atmosphere',
        'Get close with animal at reserved forest'
      ]
    },
    {
      id: 'amazing-waterfall-monkey-forest',
      title: 'Amazing Waterfall and Monkey Forest',
      categoryTag: 'Animal Encounter',
      originalPrice: 84,
      discountedPrice: 30,
      savings: 54,
      discountPercentage: 64,
      duration: '10 Hours',
      location: 'Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud',
      difficulty: 'Medium',
      capacity: '1 Person',
      description: 'Amazing Waterfall and Monkey Forest day trip untuk menjelajahi keindahan Air Terjun Tegenungan (~25m), Ubud Monkey Forest Sanctuary, dan keindahan Air Terjun Kanto Lampo.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
      highlights: [
        'Jelajahi Air Terjun Tegenungan (tinggi ~25m, cocok untuk berenang dan bersantai)',
        'Mengunjungi Ubud Monkey Forest Sanctuary (melihat ratusan kera ekor panjang dan menikmati pemandangan alam/budaya Bali)',
        'Mengunjungi Air Terjun Kanto Lampo (menikmati kesegaran air terjun tebing batu yang indah)',
        'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir'
      ]
    },
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
  ];

  // Beach Packages
  const beachPackages: ActivityPackage[] = [
{
    "id": "bali-culture-heritage-3-days",
    "title": "Bali’s Culture Heritage and Natural Beauty",
    "categoryTag": "Multi Days",
    "originalPrice": 442,
    "discountedPrice": 263,
    "savings": 179,
    "discountPercentage": 40,
    "duration": "3 Days",
    "location": "Bali",
    "difficulty": "Free & Easy",
    "capacity": "1 Person",
    "description": "Embrace the cultural heritage and natural beauty of Bali through its remarkable thousand temples and the enchanting Sacred Monkey Forest Sanctuary. Explore exquisite Balinese art crafted by local people, where history and creativity flourish in lush surroundings. Then, be captivated by the playful long-tailed macaques at the sanctuary, creating unforgettable memories amidst grand temples and serene forests.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Embrace the cultural heritage and natural beauty of Bali",
        "Visit remarkable temples and the enchanting Sacred Monkey Forest Sanctuary",
        "Explore exquisite Balinese art crafted by local people",
        "Explore the enchanting blend of mountain landscapes, rice fields, tropical plantations, beaches, and sea activities",
        "Enjoy a complimentary Banana Boat Ride"
    ]
},
{
    "id": "bali-spiritual-landscapes-4-days",
    "title": "Bali’s Spiritual Landscapes: Temples, Nature, and Cultural Wonders",
    "categoryTag": "Multi Days",
    "originalPrice": 608,
    "discountedPrice": 365,
    "savings": 243,
    "discountPercentage": 40,
    "duration": "4 Days",
    "location": "Bali",
    "difficulty": "Free & Easy",
    "capacity": "1 Person",
    "description": "Temukan perpaduan memikat antara alam dan spiritualitas di Bali, menampilkan candi-candi indah, terasering sawah yang subur, satwa liar yang unik, serta permata tersembunyi. Kunjungi tempat-tempat suci seperti Candi Tirta Empul dengan air pancuran sucinya dan Candi Ulun Danu, nikmati ketenangan Sacred Monkey Forest, dan saksikan pemandangan indah Gunung Batur. Jelajahi air terjun Leke Leke dan keindahan Tegalalang Rice Terrace.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389384/126335b5-4877-474a-8273-8739e11bc16b.png",
    "highlights": [
        "Menemukan perpaduan memikat antara alam dan spiritualitas di Bali",
        "Mengunjungi tempat-tempat suci",
        "Merasakan ketenangan di Sacred Monkey Forest",
        "Menjelajahi permata tersembunyi Air Terjun Leke Leke",
        "Mengabadikan keindahan Tegalalang Rice Terrace"
    ]
},
{
    "id": "balis-adventurous-escapes-6-days",
    "title": "Bali’s Adventurous Escapes",
    "categoryTag": "Multi Days",
    "originalPrice": 930,
    "discountedPrice": 555,
    "savings": 375,
    "discountPercentage": 40,
    "duration": "6 Days",
    "location": "Bali",
    "difficulty": "Medium",
    "capacity": "1 Person",
    "description": "Unleash your adventurous spirit with thrilling experiences that take you from get wets of Bali’s Rapid River and get dirty of ATV Ride to the breathtaking of green scenery hidden gems waterfall. Perfect for nature lovers and adrenaline seekers alike, these exciting outings promise unforgettable moments in stunning surroundings.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787390925/6595cee2-1839-4002-b8b7-6921b4416016.png",
    "highlights": [
        "Thrilling experiences Bali's Rapid River and ATV Ride",
        "Experience the tranquility of the Sacred Monkey",
        "Explore the vibrant hidden gems of Leke Leke waterfall",
        "Capture the timeless beauty of Tegalalang Rice Terrace"
    ]
},
{
    "id": "explore-balis-majestic-landscapes-5-days",
    "title": "Explore Bali’s Majestic Landscapes and Cultural Heritage",
    "categoryTag": "Multi Days",
    "originalPrice": 786,
    "discountedPrice": 472,
    "savings": 314,
    "discountPercentage": 40,
    "duration": "5 Days",
    "location": "Bali",
    "difficulty": "Medium",
    "capacity": "1 Person",
    "description": "Embark on an unforgettable journey through Bali’s stunning landscapes, from the breathtaking views of Mount Batur on a downhill cycling tour, a venture magical \"Gate of Heaven\". Experience the authentic Balinese lifestyle as you meander through lush rice paddies and picturesque ravines, capturing the essence of Bali away from the bustling crowds, every moment is a chance to immerse yourself in the island’s natural splendor.",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Journey through Bali's stunning landscapes",
        "A venture magical \"Gate of Heaven\"",
        "Experience the authentic Balinese lifestyle",
        "An exploring Hidden Gems of Waterfall"
    ]
},

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
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
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
        'Melihat keindahan kolam renang alami berbingkai karang di Angel\'s Billabong',
        'Bersantai & berenang di perairan tenang Crystal Bay (Cocok untuk Snorkeling/Sunset)',
        'Sudah termasuk tiket Fast Boat PP Sanur - Nusa Penida'
      ]
    }
  ];

  // The main activity categories
  const categories = [
    {
      id: 'water-sport',
      name: 'Water Sport',
      tripCount: waterSportMainPackages.length + snorkelingPackages.length + bananaBoatPackages.length,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787060361/f2c37895-db0c-4a77-a7c7-27762e7b1622.png',
      desc: 'Wahana air Tanjung Benoa, Snorkeling Nusa Penida East & West Trip, Sunset Uluwatu & Beach Dinner Jimbaran'
    },
    {
      id: 'rafting-kayaking',
      name: 'Rafting and Kayaking',
      tripCount: raftingPackages.length,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1786184128/e0699feb-0cd5-4d84-9055-d2819efa51a4.png',
      desc: 'Arung jeram seru di Sungai Telaga Waja & Sungai Ayung Ubud dengan tantangan jeram terbaik'
    },
    {
      id: 'nature-trail',
      name: 'Nature Trail',
      tripCount: natureTrailPackages.length,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787060523/ab2bf9b9-f815-445d-a5f7-30b399cdca47.png',
      desc: 'Bersepeda Kintamani Ubud, Air Terjun Sekumpul, Sunrise Trekking Gunung Agung & Batur, Hot Spring, Bali Swing, Handara Gate, dan Monkey Forest'
    },
    {
      id: 'full-day-tour',
      name: 'Full Day Tour',
      tripCount: fullDayTourPackages.length,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787376725/037354da-c547-4e44-bd3a-e657f8f18d62.png',
      desc: 'Paket tur privat seharian menjelajahi Puri Mengwi, Bedugul & Tanah Lot, Nusa Penida East & West, Watersport & Uluwatu Sunset Dinner, Ubud & Kintamani, dan Lempuyang'
    },
    {
      id: 'animal-encounter',
      name: 'Animal Encounter',
      tripCount: animalEncounterPackages.length,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787379481/940c1085-0d65-4285-904c-c84a343cc4f2.png',
      desc: 'Pengalaman satwa tak terlupakan mengunjungi Ubud Monkey Forest dan petualangan di sekitar hutan'
    },
    {
      id: 'beach',
      name: 'Beach',
      tripCount: beachPackages.length,
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787386817/81ce1801-2f2e-4e73-b47c-9de76a04f02d.png',
      desc: 'Pantai memukau Nusa Penida, aktivitas Water Sport, hingga makan malam romantis pinggir pantai di Bali'
    }
  ];

  const handleCategoryClick = (catId: string) => {
    if (catId === 'water-sport') {
      setCurrentView('water-sport');
      setPreviousView('water-sport');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (catId === 'rafting-kayaking') {
      setCurrentView('rafting-kayaking');
      setPreviousView('rafting-kayaking');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (catId === 'nature-trail') {
      setCurrentView('nature-trail');
      setPreviousView('nature-trail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (catId === 'full-day-tour') {
      setCurrentView('full-day-tour');
      setPreviousView('full-day-tour');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (catId === 'animal-encounter') {
      setCurrentView('animal-encounter');
      setPreviousView('animal-encounter');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (catId === 'beach') {
      setCurrentView('beach');
      setPreviousView('beach');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView(catId as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reusable Package Card Renderer
  const renderPackageCard = (pkg: ActivityPackage, categoryType: 'rafting-kayaking' | 'water-sport' | 'nature-trail' | 'full-day-tour' | 'animal-encounter' | 'beach' | 'beach') => {
    const isExpanded = allExpanded;

    return (
      <motion.div
        key={pkg.id}
        layout
        className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-neutral-800/60 flex flex-col justify-between group hover:border-gold-500/60 hover:shadow-2xl transition-all duration-300 text-white"
      >
        <div>
          {/* Card Image with Discount Badge and Pin Icon */}
          <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-950">
            <img
              src={getOptimizedCloudinaryUrl(pkg.image, { width: 600, quality: 'auto', format: 'auto' })}
              srcSet={generateCloudinarySrcSet(pkg.image, [300, 450, 600])}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={pkg.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Top-Left Red Discount Badge (e.g. 66% Off) */}
            <div className="absolute top-3 left-3 bg-[#E53E3E] text-white font-bold text-xs px-2.5 py-1 rounded-md shadow-md font-mono">
              {pkg.discountPercentage}% Off
            </div>

            {/* Top-Right Category Badge if available */}
            {pkg.categoryTag && (
              <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 text-gold-300 font-bold text-[11px] px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                <Waves size={11} className="text-gold-500" />
                <span>{pkg.categoryTag}</span>
              </div>
            )}

            {/* Bottom-Right Pin Icon */}
            <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center shadow-md">
              <MapPin size={15} className="text-gold-100" />
            </div>

            {/* Bottom Center Carousel Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 pointer-events-none">
              <div className="w-2.5 h-1.5 rounded-full bg-white shadow-sm" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </div>
          </div>

          {/* Card Content */}
          <div className="p-5 sm:p-6 space-y-4">
            {/* Category Tag pill above title */}
            {pkg.categoryTag && (
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${
                  pkg.categoryTag === 'Snorkeling' 
                    ? 'bg-[#3182CE]/25 text-[#90CDF4] border border-[#3182CE]/50'
                    : 'bg-gold-500/20 text-gold-300 border border-gold-500/40'
                }`}>
                  <Waves size={11} />
                  <span>{language === 'id' ? 'Kategori:' : 'Category:'} {pkg.categoryTag}</span>
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="font-sans font-bold text-lg text-white group-hover:text-gold-300 transition-colors leading-snug line-clamp-2 min-h-[52px]">
              {pkg.title}
            </h3>

            {/* SEE MORE DETAILS / SEE LESS DETAILS Toggle Button (controls all package cards) */}
            <button
              onClick={toggleAllDetails}
              type="button"
              className="w-full py-2 px-4 rounded-full border border-neutral-800 hover:border-gold-500/60 bg-neutral-950/60 hover:bg-neutral-950 text-gold-100 hover:text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer select-none"
            >
              <span>{isExpanded ? (language === 'id' ? 'TUTUP DETAIL' : 'SEE LESS DETAILS') : (language === 'id' ? 'LIHAT DETAIL' : 'SEE MORE DETAILS')}</span>
              {isExpanded ? (
                <ChevronUp size={14} className="stroke-[2.5] text-gold-500" />
              ) : (
                <ChevronDown size={14} className="stroke-[2.5] text-gold-500" />
              )}
            </button>

            {/* Description & Metadata that ONLY appears on SEE MORE DETAILS */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden space-y-3 pt-1"
                >
                  {/* Description Box */}
                  <div className="p-3.5 bg-neutral-950/90 rounded-xl border border-neutral-800/60 text-xs text-gold-100 leading-relaxed font-sans shadow-inner">
                    <p>{pkg.description}</p>
                  </div>

                  {/* Meta Attributes (Location, Difficulty, Capacity) */}
                  <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/40 space-y-2 text-xs text-gold-100 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-gold-500 flex-shrink-0" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity size={14} className="text-gold-500 flex-shrink-0" />
                      <span>{pkg.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-gold-500 flex-shrink-0" />
                      <span>{pkg.capacity}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Card Footer: Duration, Pricing & "View Details" Button */}
        <div className="px-5 sm:px-6 pb-6 pt-3 space-y-4 border-t border-neutral-800/50 bg-neutral-900/40">
          {/* Duration & Price Row */}
          <div className="flex items-end justify-between pt-1">
            {/* Left: Duration */}
            <div>
              <span className="text-[11px] text-gold-200/40 block font-sans">{language === 'id' ? 'Durasi' : 'Duration'}</span>
              <span className="text-sm font-bold text-white font-sans">{pkg.duration}</span>
            </div>

            {/* Right: Pricing & You Save */}
            <div className="text-right">
              <span className="text-xs text-gold-200/60 font-sans">
                {language === 'id' ? 'Mulai Dari' : 'From'} <span className="line-through text-[#FC8181] font-semibold">${pkg.originalPrice}</span>
              </span>
              <div className="text-2xl font-black text-white leading-none my-0.5">
                ${pkg.discountedPrice}
              </div>
              <span className="text-[11px] font-bold text-[#48BB78] block font-mono">
                {language === 'id' ? `Hemat $${pkg.savings}` : `You save $${pkg.savings}`}
              </span>
            </div>
          </div>

          {/* View Details Action Button (Jingga Labu Hangat #DD6B20) */}
          <button
            onClick={() => handleViewPackageDetails(pkg.id, categoryType)}
            className="w-full bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-white font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{t('common.details', 'View Details')}</span>
          </button>
        </div>

      </motion.div>
    );
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-neutral-950 min-h-screen text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* VIEW: WATER SPORT DEDICATED PAGE                                          */}
        {/* ========================================================================= */}
        {currentView === 'water-sport' ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Breadcrumb Navigation & Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-6">
              <button
                onClick={() => setCurrentView('overview')}
                className="inline-flex items-center gap-2 text-sm text-gold-100 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>{language === 'id' ? 'Kembali ke Tour & Activities' : 'Back to Tour & Activities'}</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gold-200/60">{language === 'id' ? 'Pilihan Kategori:' : 'Category Options:'}</span>
                <button
                  onClick={() => setCurrentView('overview')}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {language === 'id' ? 'Semua' : 'All'}
                </button>
                <button
                  onClick={() => setCurrentView('water-sport')}
                  className="text-xs px-3.5 py-1 rounded-full bg-gold-500 text-white font-bold cursor-pointer shadow-sm"
                >
                  Water Sport (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('rafting-kayaking');
                    setPreviousView('rafting-kayaking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Rafting and Kayaking (4)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('nature-trail');
                    setPreviousView('nature-trail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Nature Trail (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('full-day-tour');
                    setPreviousView('full-day-tour');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Full Day Tour (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('animal-encounter');
                    setPreviousView('animal-encounter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Animal Encounter (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('beach');
                    setPreviousView('beach');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Beach (3)
                </button>
              </div>
            </div>

            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
                  Water Sport
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
              <p className="text-sm text-gold-100 max-w-2xl leading-relaxed">
                Pilihan paket petualangan bahari dan wahana air seru di Tanjung Benoa & Nusa Dua, serta tur pulau dan snorkeling Nusa Penida.
              </p>
            </div>

            {/* Cards Grid Layout (Water Sport packages - Standard 3 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-2">
              {waterSportMainPackages.map((pkg) => renderPackageCard(localizeActivityPackage(pkg), 'water-sport'))}
            </div>

            {/* Sub-Kategori Snorkeling */}
            <div className="pt-6 space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                  Snorkeling
                </h2>
                <div className="h-0.5 w-16 bg-gold-500 rounded-full" />
              </div>

              {/* Cards Grid Layout (Snorkeling packages - Standard 3 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-2">
                {snorkelingPackages.map((pkg) => renderPackageCard(localizeActivityPackage(pkg), 'water-sport'))}
              </div>
            </div>

            {/* Sub-Kategori Banana Boat Ride */}
            <div className="pt-6 space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                  Banana Boat Ride
                </h2>
                <div className="h-0.5 w-16 bg-gold-500 rounded-full" />
              </div>

              {/* Cards Grid Layout (Banana Boat packages - Standard 3 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-2">
                {bananaBoatPackages.map((pkg) => renderPackageCard(localizeActivityPackage(pkg), 'water-sport'))}
              </div>
            </div>

            {/* Service Inclusions & Safety Guarantee */}
            <div className="mt-16 bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Standard Keamanan Internasional</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Peralatan watersport dan fast boat berstandar maritim internasional, pelampung bersertifikasi, dan instruktur profesional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Fasilitas Lengkap All-In Termasuk</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Termasuk transportasi hotel ber-AC, tiket fast boat & atraksi wisata, serta makan siang/malam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Garansi Kepuasan & Reschedule</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Fleksibilitas perubahan tanggal bila cuaca maritim tidak memungkinkan hingga 24 jam sebelum keberangkatan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        ) : currentView === 'rafting-kayaking' ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Breadcrumb Navigation & Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-6">
              <button
                onClick={() => setCurrentView('overview')}
                className="inline-flex items-center gap-2 text-sm text-gold-100 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>{language === 'id' ? 'Kembali ke Tour & Activities' : 'Back to Tour & Activities'}</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gold-200/60">{language === 'id' ? 'Pilihan Kategori:' : 'Category Options:'}</span>
                <button
                  onClick={() => setCurrentView('overview')}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {language === 'id' ? 'Semua' : 'All'}
                </button>
                <button
                  onClick={() => {
                    setCurrentView('water-sport');
                    setPreviousView('water-sport');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Water Sport (3)
                </button>
                <button
                  onClick={() => setCurrentView('rafting-kayaking')}
                  className="text-xs px-3.5 py-1 rounded-full bg-gold-500 text-white font-bold cursor-pointer shadow-sm"
                >
                  Rafting and Kayaking (4)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('nature-trail');
                    setPreviousView('nature-trail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Nature Trail (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('full-day-tour');
                    setPreviousView('full-day-tour');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Full Day Tour (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('animal-encounter');
                    setPreviousView('animal-encounter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Animal Encounter (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('beach');
                    setPreviousView('beach');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Beach (3)
                </button>
              </div>
            </div>

            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
                  Rafting and Kayaking
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
              <p className="text-sm text-gold-100 max-w-2xl leading-relaxed">
                Pilihan paket petualangan arung jeram terbaik di Sungai Telaga Waja dan Sungai Ayung Ubud. Dapatkan harga promo hemat eksklusif dengan diskon hingga 77%.
              </p>
            </div>

            {/* 4 Cards Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {raftingPackages.map((pkg) => renderPackageCard(localizeActivityPackage(pkg), 'rafting-kayaking'))}
            </div>

            {/* Service Inclusions & Safety Guarantee in Adventure Theme */}
            <div className="mt-16 bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Standard Keamanan Internasional</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Dilengkapi jaket pelampung, helm bersertifikasi, dayung karbon kuat, dan pemandu bersertifikasi river rescue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Fasilitas Lengkap Termasuk</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Termasuk makan siang buffet lezat, kamar bilas shower air hangat, dan handuk bersih.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Garansi Kepuasan & Reschedule</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Bebas ubah tanggal perjalanan jika cuaca buruk atau ada kendala perjalanan hingga 24 jam sebelum keberangkatan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        ) : currentView === 'nature-trail' ? (
          /* ========================================================================= */
          /* VIEW: NATURE TRAIL DEDICATED PAGE                                         */
          /* ========================================================================= */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Breadcrumb Navigation & Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-6">
              <button
                onClick={() => setCurrentView('overview')}
                className="inline-flex items-center gap-2 text-sm text-gold-100 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>{language === 'id' ? 'Kembali ke Tour & Activities' : 'Back to Tour & Activities'}</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gold-200/60">{language === 'id' ? 'Pilihan Kategori:' : 'Category Options:'}</span>
                <button
                  onClick={() => setCurrentView('overview')}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {language === 'id' ? 'Semua' : 'All'}
                </button>
                <button
                  onClick={() => {
                    setCurrentView('water-sport');
                    setPreviousView('water-sport');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Water Sport (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('rafting-kayaking');
                    setPreviousView('rafting-kayaking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Rafting and Kayaking (4)
                </button>
                <button
                  onClick={() => setCurrentView('nature-trail')}
                  className="text-xs px-3.5 py-1 rounded-full bg-gold-500 text-white font-bold cursor-pointer shadow-sm"
                >
                  Nature Trail (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('full-day-tour');
                    setPreviousView('full-day-tour');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Full Day Tour (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('animal-encounter');
                    setPreviousView('animal-encounter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Animal Encounter (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('beach');
                    setPreviousView('beach');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Beach (3)
                </button>
              </div>
            </div>

            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
                  Nature Trail
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
              <p className="text-sm text-gold-100 max-w-2xl leading-relaxed">
                Jelajahi keindahan alam Bali, pendakian sunrise Gunung Batur, wahana Bali Swing, spot ikonik Handara Gate Twin Lake, Gate of Heaven Pura Lempuyang, Tirta Gangga, dan air terjun tersembunyi.
              </p>
            </div>

            {/* Cards Grid Layout (Nature Trail packages - Standard 3 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {natureTrailPackages.map((pkg) => renderPackageCard(localizeActivityPackage(pkg), 'nature-trail'))}
            </div>

            {/* Service Inclusions & Safety Guarantee */}
            <div className="mt-16 bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Pengemudi & Pemandu Berpengalaman</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Didampingi sopir profesional berbahasa Inggris yang ramah, memahami rute terbaik, dan siap membantu dokumentasi foto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Fasilitas All-Inclusive Nyaman</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Mobil privat ber-AC, BBM, tiket masuk objek wisata lengkap, shuttle bus Lempuyang, dan air mineral.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Garansi Kepuasan & Reschedule</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Fleksibilitas penjadwalan ulang jika cuaca ekstrem atau kendala tak terduga hingga 24 jam sebelum tur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        ) : currentView === 'full-day-tour' ? (
          /* ========================================================================= */
          /* VIEW: FULL DAY TOUR DEDICATED PAGE                                        */
          /* ========================================================================= */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Breadcrumb Navigation & Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-6">
              <button
                onClick={() => setCurrentView('overview')}
                className="inline-flex items-center gap-2 text-sm text-gold-100 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>{language === 'id' ? 'Kembali ke Tour & Activities' : 'Back to Tour & Activities'}</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gold-200/60">{language === 'id' ? 'Pilihan Kategori:' : 'Category Options:'}</span>
                <button
                  onClick={() => setCurrentView('overview')}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {language === 'id' ? 'Semua' : 'All'}
                </button>
                <button
                  onClick={() => {
                    setCurrentView('water-sport');
                    setPreviousView('water-sport');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Water Sport (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('rafting-kayaking');
                    setPreviousView('rafting-kayaking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Rafting and Kayaking (4)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('nature-trail');
                    setPreviousView('nature-trail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Nature Trail (10)
                </button>
                <button
                  onClick={() => setCurrentView('full-day-tour')}
                  className="text-xs px-3.5 py-1 rounded-full bg-gold-500 text-white font-bold cursor-pointer shadow-sm"
                >
                  Full Day Tour (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('animal-encounter');
                    setPreviousView('animal-encounter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Animal Encounter (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('beach');
                    setPreviousView('beach');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Beach (3)
                </button>
              </div>
            </div>

            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
                  Full Day Tour
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
              <p className="text-sm text-gold-100 max-w-2xl leading-relaxed">
                Paket tur privat seharian menjelajahi destinasi terpopuler di Bali: Royal Family Palace Mengwi, Bedugul Lake & Tanah Lot Temple, Ubud Monkey Forest & Kintamani Highland, Nusa Penida East & West Trip, Water Sport Tanjung Benoa & Uluwatu Sunset Beach Dinner, Pura Lempuyang Gate of Heaven, Tirta Gangga Water Palace, Danau Beratan Bedugul, Air Terjun tersembunyi, dan Bali Swing.
              </p>
            </div>

            {/* Cards Grid Layout (Full Day Tour packages - Standard 3 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {fullDayTourPackages.map((pkg) => renderPackageCard(localizeActivityPackage(pkg), 'full-day-tour'))}
            </div>

            {/* Service Inclusions & Safety Guarantee */}
            <div className="mt-16 bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Transportasi Privat Ber-AC & Driver</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Layanan privat penuh dengan mobil ber-AC bersih, bahan bakar, biaya parkir, dan driver pariwisata ramah berbahasa Inggris.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Rute Fleksibel & Spot Ikonik</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Jelajahi landmark foto terbaik Bali tanpa terburu-buru, didampingi bantuan foto dan rekomendasi kuliner lokal lezat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-500 flex-shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white">Garansi Kepuasan & Reschedule</h4>
                    <p className="text-xs text-gold-100 leading-relaxed">
                      Fleksibilitas penjadwalan ulang jika cuaca ekstrem atau kendala perjalanan hingga 24 jam sebelum tur dimulai.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        ) : currentView === 'animal-encounter' ? (
          /* ========================================================================= */
          /* VIEW: ANIMAL ENCOUNTER DEDICATED PAGE                                     */
          /* ========================================================================= */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Breadcrumb Navigation & Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-6">
              <button
                onClick={() => setCurrentView('overview')}
                className="inline-flex items-center gap-2 text-sm text-gold-100 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>{language === 'id' ? 'Kembali ke Tour & Activities' : 'Back to Tour & Activities'}</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gold-200/60">{language === 'id' ? 'Pilihan Kategori:' : 'Category Options:'}</span>
                <button
                  onClick={() => setCurrentView('overview')}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {language === 'id' ? 'Semua' : 'All'}
                </button>
                <button
                  onClick={() => {
                    setCurrentView('water-sport');
                    setPreviousView('water-sport');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Water Sport (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('rafting-kayaking');
                    setPreviousView('rafting-kayaking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Rafting and Kayaking (4)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('nature-trail');
                    setPreviousView('nature-trail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Nature Trail (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('full-day-tour');
                    setPreviousView('full-day-tour');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Full Day Tour (10)
                </button>
                <button
                  onClick={() => setCurrentView('animal-encounter')}
                  className="text-xs px-3.5 py-1 rounded-full bg-gold-500 text-white font-bold cursor-pointer shadow-sm"
                >
                  Animal Encounter (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('beach');
                    setPreviousView('beach');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Beach (3)
                </button>
              </div>
            </div>

            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
                  Animal Encounter
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
              <p className="text-sm text-gold-100 max-w-2xl leading-relaxed">
                Pengalaman berkesan untuk berinteraksi lebih dekat dengan satwa eksotis. Kunjungi Cagar Alam Ubud Monkey Forest dan nikmati pesona magis alam sekitarnya.
              </p>
            </div>

            {/* Cards Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {animalEncounterPackages.map((pkg) => renderPackageCard(localizeActivityPackage(pkg), 'animal-encounter'))}
            </div>

          </motion.div>
        ) : currentView === 'beach' ? (
          /* ========================================================================= */
          /* VIEW: BEACH DEDICATED PAGE                                                */
          /* ========================================================================= */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Breadcrumb Navigation & Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-6">
              <button
                onClick={() => setCurrentView('overview')}
                className="inline-flex items-center gap-2 text-sm text-gold-100 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>{language === 'id' ? 'Kembali ke Tour & Activities' : 'Back to Tour & Activities'}</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gold-200/60">{language === 'id' ? 'Pilihan Kategori:' : 'Category Options:'}</span>
                <button
                  onClick={() => setCurrentView('overview')}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {language === 'id' ? 'Semua' : 'All'}
                </button>
                <button
                  onClick={() => {
                    setCurrentView('water-sport');
                    setPreviousView('water-sport');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Water Sport (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('rafting-kayaking');
                    setPreviousView('rafting-kayaking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Rafting and Kayaking (4)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('nature-trail');
                    setPreviousView('nature-trail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Nature Trail (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('full-day-tour');
                    setPreviousView('full-day-tour');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Full Day Tour (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('animal-encounter');
                    setPreviousView('animal-encounter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Animal Encounter (3)
                </button>
                <button
                  onClick={() => setCurrentView('beach')}
                  className="text-xs px-3.5 py-1 rounded-full bg-gold-500 text-neutral-950 font-bold cursor-pointer shadow-sm"
                >
                  Beach (3)
                </button>
              </div>
            </div>

            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
                  Beach
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
              <p className="text-sm text-gold-100 max-w-2xl leading-relaxed">
                Jelajahi pantai-pantai memukau di Nusa Penida, aktivitas Water Sport, hingga makan malam romantis di pinggir pantai.
              </p>
            </div>

            {/* Cards Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {beachPackages.map((pkg) => renderPackageCard(localizeActivityPackage(pkg), 'beach'))}
            </div>

          </motion.div>
        ) : currentView === 'package-detail' ? (
          /* ========================================================================= */
          /* VIEW: DEDICATED PACKAGE DETAIL PAGE                                       */
          /* ========================================================================= */
          (() => {
            const isMultiDay = multiDayPackages.some(p => p.id === selectedPackageId);
            if (isMultiDay) {
              return (
                <MultiDayDetailPage 
                  packageId={selectedPackageId!}
                  onBack={() => {
                    setCurrentView(previousView);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onBookNow={onBookNow}
                />
              );
            }
            return (
              <RaftingDetailPage
                packageId={selectedPackageId}
                onBack={() => {
                  setCurrentView(previousView);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onBookNow={onBookNow}
              />
            );
          })()
        ) : (
          /* ========================================================================= */
          /* VIEW: OVERVIEW (4 MAIN CARDS IN DARK NATURE THEME)                        */
          /* ========================================================================= */
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500 font-bold bg-gold-500/10 px-4 py-1.5 border border-gold-500/30 rounded-full inline-block">
                Bali Adventure & Tours
              </span>
              <h1 className="font-sans text-3xl md:text-5xl text-white font-semibold tracking-tight">
                Tour and Activities
              </h1>
              <p className="font-sans text-xs md:text-sm text-gold-100 max-w-xl mx-auto">
                Pilih kategori aktivitas petualangan di bawah untuk melihat daftar paket lengkap dan harga promo eksklusif.
              </p>
            </div>

            {/* 4 Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="activity-categories-grid">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="group cursor-pointer select-none"
                >
                  {/* Image Card Container */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/60 group-hover:border-gold-500/80 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay with click cue */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-gold-500 text-white font-bold text-xs font-mono uppercase px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span>Lihat Paket</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>

                  {/* Title and Trips count */}
                  <div className="mt-3 flex items-baseline gap-2">
                    <h3 className="font-sans font-bold text-base md:text-lg text-white group-hover:text-gold-300 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="font-sans text-xs md:text-sm text-gold-200/60 font-normal">
                      ({cat.tripCount} Trips)
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Preview Highlight Box */}
            <div className="bg-gradient-to-r from-gold-500/15 via-neutral-900 to-neutral-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-gold-500" />
                  <span className="font-mono text-xs uppercase text-gold-500 font-bold">Promo Spesial Hari Ini</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Paket Rafting & Kayaking Diskon Hingga 77%
                </h3>
                <p className="text-xs md:text-sm text-gold-100 max-w-xl leading-relaxed">
                  Nikmati pengalaman arung jeram di Sungai Ayung & Telaga Waja dengan pemandu berlisensi internasional dan makan siang prasmanan lengkap.
                </p>
              </div>

              <button
                onClick={() => setCurrentView('rafting-kayaking')}
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs font-mono uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer shadow-lg active:scale-95"
              >
                <span>Buka Rafting & Kayaking</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
