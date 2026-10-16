import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Compass, 
  Map, 
  Sparkles, 
  TreePine, 
  Cloud, 
  Flower2, 
  Hotel, 
  Activity, 
  Heart, 
  Waves 
} from 'lucide-react';
import RaftingDetailPage from './RaftingDetailPage';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl, generateCloudinarySrcSet } from '../utils/cloudinary';
import { TOUR_TRANSLATIONS, MULTIDAY_TRANSLATIONS } from '../utils/localizedData';

interface PackagePreview {
  id: string;
  title: string;
  image: string;
  badge: string;
  categoryTag: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  durationBadge: string;
  description: string;
  location: string;
  difficulty: string;
  highlights: string[];
}

const PACKAGES_DATA: Record<string, PackagePreview> = {
  // Candidasa & Amed packages
  'gate-of-heaven-water-palace-waterfall': {
    id: 'gate-of-heaven-water-palace-waterfall',
    title: 'Gate Of Heaven Water Palace Hidden Gems Waterfall',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png',
    badge: '66% Off',
    categoryTag: 'Full Day Tour',
    originalPrice: 88,
    discountedPrice: 30,
    savings: 58,
    durationBadge: '10 Hours',
    description: 'Gate Of Heaven Water Palace Hidden Gems Waterfall a famous day trip for instagramable or selfies spot starting to visit Lempuyang Temple, also known as the Gate of Heaven with Mount Agung backdrop, Tirta Gangga Water Palace, and hidden gems waterfalls.',
    location: 'Lempuyang & Tirta Gangga',
    difficulty: 'Easy / Moderate',
    highlights: [
      'Spot foto ikonik Gerbang Surga (Gate of Heaven) Candi Lempuyang berlatar Gunung Agung',
      'Menyusuri kolam ikan hias kerajaan yang indah di Istana Air Tirta Gangga',
      'Menjelajahi keindahan air terjun Tukad Cepung dengan pancaran sinar matahari magis'
    ]
  },
  'mount-agung-adventure-sunrise-trekking': {
    id: 'mount-agung-adventure-sunrise-trekking',
    title: 'Mount Agung Adventure Bali Sunrise Trekking',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325945/07eb4a26-cfc3-4b69-b2bd-be2d633a43c4.png',
    badge: '36% Off',
    categoryTag: 'Hiking & Trekking',
    originalPrice: 125,
    discountedPrice: 80,
    savings: 45,
    durationBadge: '12 Hours',
    description: 'Mount Agung Adventure Bali Sunrise Trekking menaklukkan puncak tertinggi dan paling disucikan di Bali (3.033 mdpl) dengan pilihan rute pendek (via Pasar Agung) atau rute panjang (via Besakih). Nikmati golden sunrise memukau di atas awan, sarapan ringan hangat, serta makan siang prasmanan.',
    location: 'Mount Agung Volcano',
    difficulty: 'Challenging / Active',
    highlights: [
      'Pendakian menantang ke puncak tertinggi Bali di ketinggian 3.033 mdpl',
      'Menyaksikan pemandangan matahari terbit (golden sunrise) yang spektakuler di atas awan',
      'Dipandu oleh tim pemandu lokal profesional yang berpengalaman'
    ]
  },

  // Bedugul specific packages
  'royal-family-palace-bedugul-tanah-lot': {
    id: 'royal-family-palace-bedugul-tanah-lot',
    title: 'Royal Family Palace – Bedugul Lake Temple – Tanah Lot Temple',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787378235/90a03b5d-8896-473b-9309-1095503d30ff.png',
    badge: '66% Off',
    categoryTag: 'Full Day Tour',
    originalPrice: 85,
    discountedPrice: 29,
    savings: 56,
    durationBadge: '8 Hours',
    description: 'Mengwi Kingdom Palace – Bedugul Lake Temple and Tanah Lot day tour dengan transportasi privat ber-AC: mengunjungi Puri Kerajaan Mengwi (UNESCO), Candi Ulun Danu di tepi Danau Beratan, foto instagramable Handara Gate, dan panorama siluet sunset di Candi Tanah Lot.',
    location: 'Bedugul, Mengwi & Tanah Lot',
    difficulty: 'Easy',
    highlights: [
      'Sightseeing by Air Conditioned Private Transportation with English Speaking Driver',
      'Admire Culture Heritage with Nature Panoramic',
      'Enjoy Mountain charm and fresh atmosphere',
      'Get iconic instagramable spot or selfie'
    ]
  },
  'adventure-bali-swing-nungnung-ulundanu-lekeleke': {
    id: 'adventure-bali-swing-nungnung-ulundanu-lekeleke',
    title: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
    badge: '66% Off',
    categoryTag: 'Full Day Tour',
    originalPrice: 88,
    discountedPrice: 30,
    savings: 58,
    durationBadge: '10 Hours',
    description: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai, dilanjutkan mengunjungi Air Terjun Nungnung, Pura Ulun Danu Beratan Bedugul, dan trekking Air Terjun Leke Leke.',
    location: 'Bedugul & Ubud',
    difficulty: 'Medium',
    highlights: [
      'Bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai',
      'Mengunjungi Air Terjun Nungnung (menuruni sekitar 300 anak tangga menuju air terjun setinggi 50 meter)',
      'Mengunjungi Pura Ulun Danu Beratan di tepi Danau Beratan, Bedugul (termasuk opsi makan siang di restoran lokal)',
      'Trekking singkat dan menjelajahi Air Terjun Leke Leke yang asri dan menenangkan'
    ]
  },
  'explore-iconic-culture-heritage-twin-lake': {
    id: 'explore-iconic-culture-heritage-twin-lake',
    title: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324702/34b12cec-98fb-4209-ae84-305b09b6324c.png',
    badge: '66% Off',
    categoryTag: 'Full Day Tour',
    originalPrice: 93,
    discountedPrice: 30,
    savings: 63,
    durationBadge: '10 Hours',
    description: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour mengunjungi Candi Ulun Danu Beratan, Handara Gate, Wanagiri Hidden Hills pemandangan Danau Buyan & Tamblingan, Air Terjun Leke Leke, dan pemandangan sunset di Candi Tanah Lot.',
    location: 'Bedugul, Wanagiri & Tanah Lot',
    difficulty: 'Medium',
    highlights: [
      'Mengunjungi Candi Ulun Danu Beratan di tepi Danau Beratan dengan panorama pegunungan & pagoda khas Bali',
      'Berfoto di Handara Gate ikonik berlatar belakang perbukitan hijau tropis Bedugul',
      'Menikmati keindahan Twin Lake (Buyan & Tamblingan) di Wanagiri Hidden Hills dengan spot foto ayunan',
      'Trekking Air Terjun Leke Leke (50m) & menikmati matahari terbenam (sunset) magis di Candi Tanah Lot'
    ]
  },
  'bali-nature-wonder-experience': {
    id: 'bali-nature-wonder-experience',
    title: 'Bali Nature Wonder Experience',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326124/858fd91f-1ff7-428d-beeb-c59f2cdc534b.png',
    badge: '84% Off',
    categoryTag: 'Nature Trail',
    originalPrice: 76,
    discountedPrice: 12,
    savings: 64,
    durationBadge: '8 Hours',
    description: 'Bali Nature Wonder Experience petualangan keindahan alam tersembunyi Bali Utara: menjelajahi megahnya Waterfall Sekumpul & Waterfall Fiji, meluncur di Lemukih Natural Waterslide, aksi loncat tebing (cliff jumping) 7-15m, dan trekking panorama persawahan hijau.',
    location: 'Bali Utara / Singaraja',
    difficulty: 'Medium to Hard',
    highlights: [
      'Menjelajahi keindahan spektakuler Waterfall Sekumpul & Waterfall Fiji',
      'Meluncur di perosotan alami (Lemukih Natural Waterslide) yang seru & menantang',
      'Melakukan cliff jumping (loncat tebing) ke sungai dari ketinggian 7 hingga 15 meter',
      'Trekking menyusuri bentangan sawah hijau asri dan permukiman warga lokal'
    ]
  },
  'bali-spiritual-landscapes-4-days': {
    id: 'bali-spiritual-landscapes-4-days',
    title: 'Bali’s Spiritual Landscapes: Temples, Nature, and Cultural Wonders',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389384/126335b5-4877-474a-8273-8739e11bc16b.png',
    badge: '40% Off',
    categoryTag: 'Multi Days',
    originalPrice: 608,
    discountedPrice: 365,
    savings: 243,
    durationBadge: '4 Days - 3 Nights',
    description: 'Temukan perpaduan memikat antara alam dan spiritualitas di Bali, menampilkan candi-candi indah, terasering sawah yang subur, satwa liar yang unik, serta permata tersembunyi. Kunjungi tempat-tempat suci seperti Candi Tirta Empul dengan air pancuran sucinya dan Candi Ulun Danu Beratan.',
    location: 'Bali (Kintamani, Bedugul, Ubud)',
    difficulty: 'Free & Easy',
    highlights: [
      'Menemukan perpaduan memikat antara alam dan spiritualitas di Bali',
      'Mengunjungi tempat-tempat suci seperti Candi Tirta Empul & Candi Ulun Danu Beratan',
      'Merasakan ketenangan di Sacred Monkey Forest',
      'Menjelajahi permata tersembunyi Air Terjun Leke Leke',
      'Mengabadikan keindahan Tegalalang Rice Terrace'
    ]
  },
  'balis-adventurous-escapes-6-days': {
    id: 'balis-adventurous-escapes-6-days',
    title: 'Bali’s Adventurous Escapes',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787390925/6595cee2-1839-4002-b8b7-6921b4416016.png',
    badge: '40% Off',
    categoryTag: 'Multi Days',
    originalPrice: 930,
    discountedPrice: 555,
    savings: 375,
    durationBadge: '6 Days - 5 Nights',
    description: 'Unleash your adventurous spirit with thrilling experiences that take you from get wets of Bali’s Rapid River and get dirty of ATV Ride to the breathtaking of green scenery. Perfect for nature lovers and adrenaline seekers alike.',
    location: 'Bali',
    difficulty: 'Medium',
    highlights: [
      'Thrilling experiences Bali\'s Rapid River and ATV Ride',
      'Experience the tranquility of the Sacred Monkey Forest',
      'Explore the vibrant hidden gems of Leke Leke waterfall',
      'Capture the timeless beauty of Tegalalang Rice Terrace'
    ]
  },
  'explore-balis-majestic-landscapes-5-days': {
    id: 'explore-balis-majestic-landscapes-5-days',
    title: 'Explore Bali’s Majestic Landscapes and Cultural Heritage',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png',
    badge: '40% Off',
    categoryTag: 'Multi Days',
    originalPrice: 786,
    discountedPrice: 472,
    savings: 314,
    durationBadge: '5 Days - 4 Nights',
    description: 'Embark on an unforgettable journey through Bali’s stunning landscapes, from the breathtaking views of Mount Batur on a downhill cycling tour, a venture magical "Gate of Heaven". Experience the authentic Balinese lifestyle.',
    location: 'Bali',
    difficulty: 'Medium',
    highlights: [
      'Journey through Bali\'s stunning landscapes',
      'A venture magical "Gate of Heaven"',
      'Experience the authentic Balinese lifestyle',
      'An exploring Hidden Gems of Waterfall'
    ]
  },
  'bali-culture-heritage-3-days': {
    id: 'bali-culture-heritage-3-days',
    title: 'Bali’s Culture Heritage and Natural Beauty',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png',
    badge: '40% Off',
    categoryTag: 'Multi Days',
    originalPrice: 442,
    discountedPrice: 263,
    savings: 179,
    durationBadge: '3 Days - 2 Nights',
    description: 'Embrace the cultural heritage and natural beauty of Bali through its remarkable thousand temples and the enchanting Sacred Monkey Forest Sanctuary. Explore exquisite Balinese art crafted by local people, where history and creativity flourish in lush surroundings.',
    location: 'Bali',
    difficulty: 'Free & Easy',
    highlights: [
      'Embrace the cultural heritage and natural beauty of Bali',
      'Visit remarkable temples and the enchanting Sacred Monkey Forest Sanctuary',
      'Witness beautiful traditional arts and majestic cultural sites'
    ]
  },
  'amazing-waterfall-monkey-forest': {
    id: 'amazing-waterfall-monkey-forest',
    title: 'Amazing Waterfall and Monkey Forest',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
    badge: '64% Off',
    categoryTag: 'Full Day Tour',
    originalPrice: 84,
    discountedPrice: 30,
    savings: 54,
    durationBadge: '10 Hours',
    description: 'Amazing Waterfall and Monkey Forest day trip untuk menjelajahi keindahan Air Terjun Tegenungan (~25m), Ubud Monkey Forest Sanctuary, dan keindahan Air Terjun Kanto Lampo.',
    location: 'Gianyar & Ubud',
    difficulty: 'Medium',
    highlights: [
      'Jelajahi Air Terjun Tegenungan (tinggi ~25m, cocok untuk berenang)',
      'Mengunjungi Ubud Monkey Forest Sanctuary (melihat ratusan kera ekor panjang)',
      'Mengunjungi Air Terjun Kanto Lampo (menikmati kesegaran air terjun tebing batu)'
    ]
  },
  'water-sport-beaches-uluwatu-dinner': {
    id: 'water-sport-beaches-uluwatu-dinner',
    title: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
    badge: '66% Off',
    categoryTag: 'Full Day Tour',
    originalPrice: 95,
    discountedPrice: 32,
    savings: 63,
    durationBadge: '8 Hours',
    description: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner menikmati wahana olahraga air di Tanjung Benoa (Banana Boat gratis), eksplorasi pantai eksotis Padang Padang, sunset magis Pura Luhur Uluwatu, dan seafood dinner di Pantai Jimbaran.',
    location: 'Tanjung Benoa, Uluwatu & Jimbaran',
    difficulty: 'Easy (Mudah)',
    highlights: [
      'Aktivitas olahraga air di Pantai Tanjung Benoa dengan gratis Banana Boat',
      'Mengeksplorasi Pantai Padang Padang yang berpasir putih',
      'Mengunjungi Pura Luhur Uluwatu di atas tebing & Kecak Dance',
      'Menikmati santap malam boga laut (seafood dinner) romantis di tepi pantai Teluk Jimbaran'
    ]
  },
  'paragliding': {
    id: 'paragliding',
    title: 'Flying on Sky With Paragliding',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052460/02018cef-c1e4-4d4c-b918-9c51ff9387b3.png',
    badge: 'Ekstrem Adventure',
    categoryTag: 'Paragliding',
    originalPrice: 120,
    discountedPrice: 80,
    savings: 40,
    durationBadge: '3 Hours',
    description: 'Terbang tandem bersama pilot bersertifikat sekitar 225 kaki di atas permukaan laut untuk menikmati pemandangan pantai dan tebing di Bali Selatan (kawasan Gunung Riug, Nusa Dua).',
    location: 'Gunung Riug, Nusa Dua',
    difficulty: 'Ekstrem',
    highlights: [
      'Terbang tandem bersama pilot bersertifikat sekitar 225 kaki di atas laut',
      'Waktu terbang terbaik adalah musim kemarau (April–Oktober) saat angin berhembus',
      'Merasakan sensasi memompa adrenalin di ketinggian dengan pemandangan pesisir pantai Bali'
    ]
  },
  'nusa-penida-east-trip': {
    id: 'nusa-penida-east-trip',
    title: 'NUSA PENIDA ISLAND – EAST TRIP',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
    badge: '40% Off',
    categoryTag: 'Nusa Penida East',
    originalPrice: 75,
    discountedPrice: 45,
    savings: 30,
    durationBadge: '10 Hours',
    description: 'Nusa Penida East • Fast Boat Sanur • Diamond Beach • Atuh Beach • Tree House & Teletubbies Hill',
    location: 'Pelabuhan Sanur & Nusa Penida Timur',
    difficulty: 'Easy (Mudah)',
    highlights: [
      'Penyeberangan Speed Boat cepat ~45 menit dari Pelabuhan Sanur ke Nusa Penida',
      'Eksplorasi Diamond Beach dengan tebing terjal, air pirus, dan tangga ikonik',
      'Atuh Beach yang tenang diapit tebing tinggi dan panorama dramatis',
      'Spot foto Tree House & Thousand Island View serta hamparan bukit Teletubbies Hill'
    ]
  },
  'nusa-penida-west-trip': {
    id: 'nusa-penida-west-trip',
    title: 'NUSA PENIDA ISLAND – WEST TRIP',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
    badge: '40% Off',
    categoryTag: 'Nusa Penida West',
    originalPrice: 75,
    discountedPrice: 45,
    savings: 30,
    durationBadge: '10 Hours',
    description: 'Nusa Penida West • Fast Boat Sanur • Angel’s Billabong • Broken Beach • Kelingking Beach • Crystal Bay',
    location: 'Pelabuhan Sanur & Nusa Penida Barat',
    difficulty: 'Easy (Mudah)',
    highlights: [
      'Penyeberangan Speed Boat cepat ~45 menit dari Pelabuhan Sanur menuju Nusa Penida',
      'Kolam renang alami di tepi laut dengan air jernih dan tebing dramatis di Angel’s Billabong',
      'Area pantai unik dengan tebing melengkung alami (arch) dan celah laut di Broken Beach',
      'Spot foto paling dicari dengan tebing berbentuk dinosaurus di Pantai Kelingking'
    ]
  },
  'atv-rafting-combo': {
    id: 'atv-rafting-combo',
    title: 'Experience the Thrill of ATV Ride and Rapid Water Rafting',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787062832/8f55222d-518c-4b9e-a56e-574ff17eff8c.png',
    badge: '48% Off',
    categoryTag: 'Combo Adventure',
    originalPrice: 145,
    discountedPrice: 75,
    savings: 70,
    durationBadge: '10 Hours',
    description: 'Experience the Thrill of ATV Ride and Rapid Water Rafting. Bali ATV Ride adventure will take you to an amazing off-road terrain through jungle tunnels, muddy tracks, followed by thrilling white water rapids on Ayung River.',
    location: 'Ubud & Ayung River',
    difficulty: 'Sedang (Medium)',
    highlights: [
      'Paket kombo 2 petualangan favorit sekaligus',
      'Trek ATV goa gorilla, terowongan & air terjun',
      'Rafting sungai Ayung jeram kelas II-III',
      'Antar jemput hotel dan makan siang lengkap'
    ]
  },
  'off-road-tours': {
    id: 'off-road-tours',
    title: 'Adventure Off Road Jeep Mount Batur Sunrise',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052559/bf039127-8977-4546-a0bf-aadde17504fd.png',
    badge: 'Top Pick',
    categoryTag: 'Jeep Adventure',
    originalPrice: 70,
    discountedPrice: 35,
    savings: 35,
    durationBadge: '10 Hours',
    description: 'Experience the breathtaking sunrise at Mount Batur with our exclusive Mount Batur Sunrise Jeep Tour. This tour offers an extraordinary adventure as you explore the stunning volcanic landscape and witness the sun rise over the horizon from about 1,365 meters above sea level. Your journey begins with a convenient pickup from your accommodation, where our professional driver will ensure a comfortable and smooth ride to the Kintamani meeting point. From there, you’ll start a thrilling jeep ride through rugged terrain, leading you to spectacular panoramic views.',
    location: 'Mount Batur, Kintamani',
    difficulty: 'Sedang (Medium)',
    highlights: [
      'Off-Road Adventure: Embark on an off-road journey in a specially designed jeep, reaching remote viewpoints inaccessible by regular vehicles.',
      'Spectacular Sunrise: Witness the magical sunrise over Mount Batur (about 1,365 meters above sea level), its warm hues illuminating the volcanic landscape.',
      'Panoramic Views: Enjoy breathtaking panoramic views of Mount Batur and its caldera, capturing the natural beauty of Bali’s iconic volcano.',
      'Expert Jeep Drivers: Explore with experienced drivers navigating rough terrains, ensuring a safe and thrilling adventure.',
      'Unforgettable Experience: Combine the thrill of off-road jeep exploration with the tranquility of a sunrise, creating lasting memories.'
    ]
  },
  'adventure-atv-telaga-waja': {
    id: 'adventure-atv-telaga-waja',
    title: 'Adventure of ATV Ride at Telaga Waja',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787737711/a00cb89b-8836-432b-9e67-c5a125a61627.png',
    badge: 'Best Price',
    categoryTag: 'ATV Ride',
    originalPrice: 95,
    discountedPrice: 55,
    savings: 40,
    durationBadge: '8 Hours',
    description: 'Petualangan Menantang ATV Ride & Trek Off-Road Melintasi Lanskap Alam Bali yang Indah.',
    location: 'Telaga Waja Area, Bali',
    difficulty: 'Sedang (Medium)',
    highlights: [
      'Rasakan sensasi menantang berkendara ATV dan Sungai Rapid.',
      'Memulai perjalanan seru melintasi lanskap alam Bali yang indah.',
      'Dipandu oleh pemandu ATV berpengalaman.',
      'Dilengkapi dengan Peralatan Berstandar Internasional.'
    ]
  },
  'adventure-atv-ubud-kuber': {
    id: 'adventure-atv-ubud-kuber',
    title: 'Adventure ATV Ride in UBUD with KUBER',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787742311/70f55d1b-2b8a-405e-a7d2-785753aa5351.png',
    badge: 'Top Pick',
    categoryTag: 'ATV Ride',
    originalPrice: 90,
    discountedPrice: 45,
    savings: 45,
    durationBadge: '8 Hours',
    description: 'Embark on the ultimate ATV adventure with the official Kuber Bali Adventure. Ride through lush tropical forests, navigate hidden tunnels, and cross pristine rivers.',
    location: 'Ubud, Bali',
    difficulty: 'Sedang (Medium)',
    highlights: [
      "Feel the adrenaline rush as you ride through Bali's lush tropical forests",
      'Traverse diverse landscapes, including dense forests and clear rivers',
      "Capture the beauty of Bali's untouched nature on a thrilling ATV ride",
      'Enjoy a complimentary lunch at a scenic restaurant after your adventure',
      'Benefit from the expertise of professional guides who prioritize your safety'
    ]
  },
  'telaga-waja-rafting': {
    id: 'telaga-waja-rafting',
    title: 'White water rafting at Telaga Waja River',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787061965/9ccc454e-a20f-48d5-a184-d9fc10c7d482.png',
    badge: '60% Off',
    categoryTag: 'Rafting',
    originalPrice: 75,
    discountedPrice: 30,
    savings: 45,
    durationBadge: '8 Hours',
    description: 'Sensasi arung jeram kelas 3 & 4 sepanjang 14 km di Sungai Telaga Waja dengan air jernih segar berlatar Gunung Agung.',
    location: 'Rendang, Karangasem',
    difficulty: 'Sedang (Medium)',
    highlights: [
      'Merasakan sensasi arung jeram di Sungai Telaga Waja dengan jeram kelas 3 & 4',
      'Menyusuri keindahan tebing air terjun alami dan pemandangan lembah Gunung Agung',
      'Dipandu oleh pemandu sungai profesional lokal bersertifikasi keselamatan',
      'Dilengkapi dengan peralatan keselamatan berstandar internasional'
    ]
  },
  'surya-bintang-rafting': {
    id: 'surya-bintang-rafting',
    title: 'Ubud Rafting at Ayung River by Surya Bintang Adventure',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063019/398e70aa-ea11-449f-a279-6ed8e832b74b.png',
    badge: '77% Off',
    categoryTag: 'Rafting',
    originalPrice: 75,
    discountedPrice: 17,
    savings: 58,
    durationBadge: '8 Hours',
    description: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram seru di kawasan Payangan Ubud, Gianyar.',
    location: 'Sungai Ayung, Ubud',
    difficulty: 'Sedang (Medium)',
    highlights: [
      'Menikmati keseruan arung jeram di aliran sungai deras',
      'Menikmati keindahan pemandangan alam khas Bali',
      'Didampingi pemandu sungai berpengalaman',
      'Dilengkapi peralatan berstandar internasional'
    ]
  },
  'bali-dewata-rafting': {
    id: 'bali-dewata-rafting',
    title: 'Ubud Rafting Adventure at Ayung River by Bali Dewata',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063184/31bbe6f8-14e4-48f0-9bf8-8506d9091642.png',
    badge: '53% Off',
    categoryTag: 'Rafting',
    originalPrice: 75,
    discountedPrice: 35,
    savings: 40,
    durationBadge: '8 Hours',
    description: 'Pengarungan Sungai Ayung 12 km dengan 29 titik jeram bersama instruktur berpengalaman dari Bali Dewata.',
    location: 'Sungai Ayung, Ubud',
    difficulty: 'Sedang (Medium)',
    highlights: [
      'Rasakan sensasi menerjang jeram sungai',
      'Menikmati perjalanan menyusuri pemandangan alam khas Bali yang indah',
      'Didampingi pemandu sungai berpengalaman',
      'Dilengkapi peralatan berstandar internasional'
    ]
  },
  'ubud-monkey-forest-and-kintamani-highland': {
    id: 'ubud-monkey-forest-and-kintamani-highland',
    title: 'Ubud Monkey Forest and Kintamani Highland',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787377999/40079c3b-3b6b-4769-8cde-90b8e9aa1278.png',
    badge: '69% Off',
    categoryTag: 'Day Tour',
    originalPrice: 80,
    discountedPrice: 25,
    savings: 55,
    durationBadge: '8 Hours',
    description: 'Wisata budaya dan alam mengunjungi Cagar Alam Monkey Forest Ubud, Tari Barong, Tirta Empul, dan panorama Danau Kintamani.',
    location: 'Ubud & Kintamani',
    difficulty: 'Mudah (Easy)',
    highlights: [
      'Menyaksikan Pertunjukan Tari Barong & Keris',
      'Mengunjungi Cagar Alam Hutan Lindung Sacred Monkey Forest',
      'Menikmati pemandangan Gunung dan Danau Batur Kintamani',
      'Melihat Pura Tirta Empul Tampaksiring dengan sumber air suci'
    ]
  },
  'discover-waterfall-rice-terrace-monkey-forest': {
    id: 'discover-waterfall-rice-terrace-monkey-forest',
    title: 'Discover Waterfall Rice Terrace and Monkey Forest',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324453/fdf23903-3780-458b-a52f-e8402aafd246.png',
    badge: '70% Off',
    categoryTag: 'Day Tour',
    originalPrice: 84,
    discountedPrice: 25,
    savings: 59,
    durationBadge: '8 Hours',
    description: 'Menjelajahi keindahan alam Ubud: Air Terjun Tegenungan, Teras Sawah Tegalalang yang ikonik, dan Sacred Monkey Forest Sanctuary.',
    location: 'Ubud & Tegalalang',
    difficulty: 'Mudah (Easy)',
    highlights: [
      'Menyaksikan Pertunjukan Tari Barong & Keris',
      'Mengunjungi Desa Kerajinan Seni Perak, Ukiran & Batik',
      'Menikmati panorama Air Terjun Tegenungan',
      'Mengunjungi Sawah Terasering Tegalalang & Monkey Forest'
    ]
  },
  'bali-cycling-downhill-mountain-to-village': {
    id: 'bali-cycling-downhill-mountain-to-village',
    title: 'Bali Cycling Countryside Downhill From Mountain to Village',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326066/04b075c5-bd5c-4f15-a821-b389d514b95e.png',
    badge: '73% Off',
    categoryTag: 'Cycling Trip',
    originalPrice: 75,
    discountedPrice: 20,
    savings: 55,
    durationBadge: '8 Hours',
    description: 'Gowes santai downhill melintasi dataran tinggi Kintamani, hutan bambu, pedesaan lokal, dan persawahan hijau Ubud.',
    location: 'Kintamani to Ubud',
    difficulty: 'Sedang (Medium)',
    highlights: [
      'Gowes santai downhill melintasi hutan bambu dan pedesaan lokal',
      'Pemandu sepeda profesional dan perlengkapan lengkap berstandar',
      'Termasuk sarapan dengan pemandangan Gunung Batur & makan siang',
      'Penjemputan privat'
    ]
  },
  'adventure-bali-sunrise-trekking-mount-batur': {
    id: 'adventure-bali-sunrise-trekking-mount-batur',
    title: 'Adventure Bali Sunrise Trekking at Mount Batur',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
    badge: '44% Off',
    categoryTag: 'Hiking & Trekking',
    originalPrice: 90,
    discountedPrice: 50,
    savings: 40,
    durationBadge: '8 Hours',
    description: 'Pendakian dini hari menuju puncak Gunung Batur (1.717 mdpl) untuk menyaksikan sunrise spektakuler di atas lautan awan.',
    location: 'Mount Batur, Kintamani',
    difficulty: 'Tinggi (Hard)',
    highlights: [
      'Pendakian dini hari menuju puncak Gunung Batur (1.717 mdpl)',
      'Menyaksikan pemandangan spektakuler sunrise di atas awan',
      'Sarapan ringan uap vulkanik di puncak gunung',
      'Jelajah kawah utama dan kunjungan ke perkebunan kopi'
    ]
  },
  'adventure-batur-sunrise-hot-spring-lunch': {
    id: 'adventure-batur-sunrise-hot-spring-lunch',
    title: 'Adventure Bali Sunrise Trekking at Mount Batur and Hot Spring Water Refreshing with Lunch',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325801/600b4aa7-95a1-4f0e-b5b1-88158d4364ed.png',
    badge: '77% Off',
    categoryTag: 'Hiking & Trekking',
    originalPrice: 110,
    discountedPrice: 25,
    savings: 85,
    durationBadge: '8 Hours',
    description: 'Kombinasi sempurna pendakian sunrise Gunung Batur dilanjutkan relaksasi berendam di pemandian air panas alami dan makan siang.',
    location: 'Mount Batur & Hot Spring',
    difficulty: 'Tinggi (Hard)',
    highlights: [
      'Pendakian malam menuju puncak Gunung Batur (1.717 mdpl)',
      'Menyaksikan pemandangan matahari terbit spektakuler',
      'Relaksasi berendam di Pemandian Air Panas Alami (Natural Hot Spring)',
      'Termasuk makan siang buffet di restoran kaldera'
    ]
  }
};

interface DestinationStaticData {
  title: string;
  intro: string;
  cards: {
    title: string;
    icon: 'compass' | 'map' | 'tree' | 'cloud' | 'flower' | 'hotel' | 'activity' | 'sparkles' | 'waves';
    sections: {
      label: string;
      content: string;
    }[];
  }[];
  categories: {
    title: string;
    packages: string[];
  }[];
}

const DESTINATIONS_REGISTRY: Record<string, DestinationStaticData> = {
  'candidasa and amed': {
    title: 'Candidasa and Amed',
    intro: 'Candidasa and Amed are two charming coastal areas in East Bali, each offering a unique atmosphere and beautiful surroundings.',
    cards: [
      {
        title: 'Candidasa',
        icon: 'compass',
        sections: [
          { label: 'Suasana (Vibe)', content: 'Tenang, santai, dengan pemandangan laut dan perbukitan.' },
          { label: 'Pantai (Beaches)', content: 'Didominasi bebatuan dengan perairan tenang (cocok untuk berenang & snorkeling, seperti di Blue Lagoon).' },
          { label: 'Aktivitas (Activities)', content: 'Mengunjungi Desa Tenganan, sawah terasering Bugbug, Istana Air Tirta Gangga, serta diving/snorkeling.' },
          { label: 'Akomodasi (Accommodations)', content: 'Hotel butik, penginapan (guesthouse), dan resor berpemandangan laut.' }
        ]
      },
      {
        title: 'Amed',
        icon: 'map',
        sections: [
          { label: 'Suasana (Vibe)', content: 'Asri, kental nuansa lokal, dan sangat populer untuk penyelam.' },
          { label: 'Pantai (Beaches)', content: 'Deretan pantai pasir hitam dengan air jernih dan terumbu karang alami.' },
          { label: 'Aktivitas (Activities)', content: 'Diving/snorkeling (termasuk ke bangkai kapal Jepang), wisata desa nelayan, sunrise, dan trip ke Gunung Agung.' },
          { label: 'Akomodasi (Accommodations)', content: 'Variatif dari guesthouse hemat hingga resor berkonsep ekowisata.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Full Day Tour',
        packages: ['gate-of-heaven-water-palace-waterfall']
      },
      {
        title: 'Hiking and Trekking',
        packages: ['mount-agung-adventure-sunrise-trekking']
      },
      {
        title: 'Nature Trail',
        packages: ['gate-of-heaven-water-palace-waterfall', 'mount-agung-adventure-sunrise-trekking']
      },
      {
        title: 'Swim and Bathing',
        packages: ['gate-of-heaven-water-palace-waterfall']
      }
    ]
  },
  'bedugul': {
    title: 'Bedugul',
    intro: 'Bedugul adalah daerah pegunungan yang sejuk di tengah Bali, terkenal dengan danau vulkaniknya yang menakjubkan, pura ikonik, dan kebun raya yang rimbun.',
    cards: [
      {
        title: 'Bedugul High Overview',
        icon: 'tree',
        sections: [
          { label: 'Keindahan Alam', content: 'Danau Beratan dengan Pura Ulun Danu Beratan yang ikonik, serta Kebun Raya Bali (Bali Botanic Garden) yang asri.' },
          { label: 'Aktivitas', content: 'Trekking di area perbukitan dan hutan, serta wahana air seperti perahu dayung di Danau Beratan.' },
          { label: 'Pertanian & Pasar', content: 'Terkenal dengan hasil bumi segar seperti stroberi dan tomat yang dapat dibeli di pasar lokal.' }
        ]
      },
      {
        title: 'Iklim & Penginapan',
        icon: 'cloud',
        sections: [
          { label: 'Iklim', content: 'Berada di dataran tinggi dengan udara sejuk, menjadi tempat yang tepat untuk menyegarkan diri dari cuaca panas.' },
          { label: 'Akomodasi', content: 'Beragam pilihan penginapan dari guesthouse hingga resor berpanorama alam.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Animal Encounter',
        packages: [
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Beaches',
        packages: [
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Full Day Tour',
        packages: [
          'royal-family-palace-bedugul-tanah-lot',
          'adventure-bali-swing-nungnung-ulundanu-lekeleke',
          'explore-iconic-culture-heritage-twin-lake',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Hiking and Trekking',
        packages: ['bali-nature-wonder-experience']
      },
      {
        title: 'Nature Trail',
        packages: [
          'adventure-bali-swing-nungnung-ulundanu-lekeleke',
          'explore-iconic-culture-heritage-twin-lake',
          'bali-nature-wonder-experience',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Swim and Bathing',
        packages: [
          'adventure-bali-swing-nungnung-ulundanu-lekeleke',
          'explore-iconic-culture-heritage-twin-lake',
          'bali-nature-wonder-experience'
        ]
      }
    ]
  },
  'jimbaran and nusa dua': {
    title: 'Jimbaran & Nusa Dua',
    intro: 'Jimbaran dan Nusa Dua menawarkan pesona pesisir selatan Bali yang memukau, memadukan keindahan pantai pasir putih, kuliner laut romantis, serta fasilitas olahraga air dan resor kelas dunia.',
    cards: [
      {
        title: 'Jimbaran',
        icon: 'compass',
        sections: [
          { label: 'Suasana', content: 'Santai dan romantis, dengan nuansa desa nelayan yang khas serta pemandangan sunset yang indah.' },
          { label: 'Pantai', content: 'Pantai berpasir yang cocok untuk berenang, berjemur, dan menikmati santap malam seafood segar di pinggir pantai.' },
          { label: 'Aktivitas', content: 'Mengunjungi pasar lokal, menjelajahi pura terdekat seperti Pura Uluwatu, memanjakan diri dengan spa, serta olahraga air seperti selancar dan snorkeling.' },
          { label: 'Akomodasi', content: 'Beragam pilihan resor mewah dan hotel butik yang menawarkan pemandangan laut serta akses langsung ke pantai.' }
        ]
      },
      {
        title: 'Nusa Dua',
        icon: 'sparkles',
        sections: [
          { label: 'Suasana', content: 'Mewah dan tertata rapi, cocok untuk keluarga maupun wisatawan berkelas (luxury travelers).' },
          { label: 'Pantai', content: 'Pantai bersih dengan perairan tenang yang sangat aman untuk berenang dan bersantai, dilengkapi berbagai fasilitas beach club dan olahraga air.' },
          { label: 'Aktivitas', content: 'Berbelanja di komplek Bali Collection, mengunjungi Museum Pasifika, menyaksikan pertunjukan seni budaya, atau menghadiri konferensi internasional.' },
          { label: 'Akomodasi', content: 'Deretan hotel dan resor bintang lima berstandar internasional dengan fasilitas spa dan kuliner kelas dunia.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Animal Encounter',
        packages: [
          'amazing-waterfall-monkey-forest',
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Banana Boat Ride',
        packages: [
          'water-sport-beaches-uluwatu-dinner'
        ]
      },
      {
        title: 'Beaches',
        packages: [
          'water-sport-beaches-uluwatu-dinner',
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Full Day Tour',
        packages: [
          'water-sport-beaches-uluwatu-dinner',
          'amazing-waterfall-monkey-forest',
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Nature Trail',
        packages: [
          'amazing-waterfall-monkey-forest',
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Paragliding',
        packages: [
          'paragliding'
        ]
      },
      {
        title: 'Snorkeling',
        packages: [
          'water-sport-beaches-uluwatu-dinner'
        ]
      },
      {
        title: 'Swim and Bathing',
        packages: [
          'water-sport-beaches-uluwatu-dinner',
          'amazing-waterfall-monkey-forest'
        ]
      },
      {
        title: 'Water Sport',
        packages: [
          'water-sport-beaches-uluwatu-dinner'
        ]
      }
    ]
  },
  'kuta and legian': {
    title: 'Kuta & Legian',
    intro: 'Kuta dan Legian menyajikan pusat keriuhan, pantai peselancar legendaris, belanja cinderamata lokal yang semarak, serta hiburan malam yang dinamis di pesisir barat Bali.',
    cards: [
      {
        title: 'Kuta',
        icon: 'compass',
        sections: [
          { label: 'Suasana', content: 'Ramai, penuh energi, dan terkenal dengan kehidupan malam yang hidup serta pantai yang cocok untuk berselancar. Populer di kalangan wisatawan muda.' },
          { label: 'Aktivitas', content: 'Berselancar, berkunjung ke beach club, berbelanja di pasar lokal, menikmati beach bar, serta menikmati pemandangan sunset di Pantai Kuta.' },
          { label: 'Akomodasi', content: 'Beragam pilihan dari hostel hemat hingga resor mewah, dilengkapi banyak pilihan tempat makan internasional maupun lokal.' }
        ]
      },
      {
        title: 'Legian',
        icon: 'sparkles',
        sections: [
          { label: 'Suasana', content: 'Sedikit lebih tenang dibandingkan Kuta, namun tetap memiliki suasana yang ramai. Cocok untuk keluarga dan wisatawan yang menginginkan keseimbangan antara santai dan hiburan malam.' },
          { label: 'Aktivitas', content: 'Berselancar, berjemur, menikmati beach club, dan berbagai olahraga air.' },
          { label: 'Akomodasi', content: 'Pilihan variatif mulai dari hotel butik hingga vila, dengan beragam tempat makan dari warung lokal hingga restoran kelas atas.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Animal Encounter',
        packages: [
          'amazing-waterfall-monkey-forest',
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Beaches',
        packages: [
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Full Day Tour',
        packages: [
          'amazing-waterfall-monkey-forest',
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Nature Trail',
        packages: [
          'amazing-waterfall-monkey-forest',
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'Swim and Bathing',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      }
    ]
  },
  'nusa penida and nusa lembongan': {
    title: 'Nusa Penida & Nusa Lembongan',
    intro: 'Nusa Penida dan Nusa Lembongan menyajikan petualangan pulau eksotis dengan tebing-tebing spektakuler yang menakjubkan, kolam air laut alami yang jernih, pantai pasir putih yang menenangkan, serta spot snorkeling manta kelas dunia.',
    cards: [
      {
        title: 'Nusa Penida',
        icon: 'compass',
        sections: [
          { label: 'Keindahan Alam', content: 'Terkenal dengan tebing-tebing spektakuler, pantai menakjubkan, dan air laut yang jernih. Spot ikonik meliputi Pantai Kelingking, Broken Beach, dan Angel’s Billabong.' },
          { label: 'Aktivitas', content: 'Sangat populer untuk snorkeling dan diving, khususnya di Manta Point untuk melihat ikan pari manta, serta menjelajahi bukit dan alam sekitar.' },
          { label: 'Budaya & Suasana', content: 'Memiliki nuansa yang lebih alami, sedikit lebih terisolasi, dan belum sepadat Bali daratan sehingga memberikan pengalaman lokal yang lebih otentik.' }
        ]
      },
      {
        title: 'Nusa Lembongan',
        icon: 'sparkles',
        sections: [
          { label: 'Suasana', content: 'Lebih santai dan tenang, cocok untuk liburan yang relaks. Ukurannya lebih kecil dan fasilitasnya lebih berkembang dibanding Nusa Penida.' },
          { label: 'Pantai', content: 'Pantai populer seperti Dream Beach dan Mushroom Bay terkenal dengan pasir putih yang lembut serta perairan yang tenang.' },
          { label: 'Aktivitas', content: 'Sangat ideal untuk olahraga air seperti snorkeling, diving, surfing, serta melihat budidaya rumput laut lokal.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Beaches',
        packages: [
          'nusa-penida-east-trip',
          'nusa-penida-west-trip'
        ]
      },
      {
        title: 'Full Day Tour',
        packages: [
          'nusa-penida-east-trip',
          'nusa-penida-west-trip'
        ]
      },
      {
        title: 'Snorkeling',
        packages: [
          'nusa-penida-east-trip',
          'nusa-penida-west-trip'
        ]
      },
      {
        title: 'Swim and Bathing',
        packages: [
          'nusa-penida-east-trip',
          'nusa-penida-west-trip'
        ]
      },
      {
        title: 'Water Sport',
        packages: [
          'nusa-penida-east-trip',
          'nusa-penida-west-trip'
        ]
      }
    ]
  },
  'sanur': {
    title: 'Sanur',
    intro: 'Sanur menyajikan perpaduan keindahan pantai berair tenang yang damai, pesona warisan budaya tradisional Bali yang mendalam, serta tempat sempurna untuk relaksasi dan pemulihan jiwa.',
    cards: [
      {
        title: 'Pantai & Budaya',
        icon: 'compass',
        sections: [
          { label: 'Pantai', content: 'Terkenal dengan perairannya yang tenang dan aman, sangat cocok untuk berenang dan aktivitas keluarga. Dilengkapi dengan jalur pedestrian panjang untuk berjalan kaki, bersepeda, atau joging.' },
          { label: 'Pengalaman Budaya', content: 'Memiliki warisan budaya yang kaya dengan arsitektur Bali tradisional, pura, pasar lokal, serta pertunjukan tari dan upacara adat.' },
          { label: 'Kuliner & Belanja', content: 'Menawarkan perpaduan warung lokal dan restoran internasional, serta toko seni dan butik menarik untuk berbelanja oleh-oleh khas.' }
        ]
      },
      {
        title: 'Aktivitas & Relaksasi',
        icon: 'activity',
        sections: [
          { label: 'Aktivitas Air', content: 'Menjadi lokasi yang ideal untuk snorkeling, diving, stand-up paddleboarding, hingga titik keberangkatan tur perahu ke pulau tetangga seperti Nusa Lembongan.' },
          { label: 'Relaksasi', content: 'Memiliki suasana yang tenang dan santai, sangat pas untuk tempat pemulihan diri (wellness retreats), yoga, dan perawatan spa.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Animal Encounter',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      },
      {
        title: 'Full Day Tour',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      },
      {
        title: 'Nature Trail',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      },
      {
        title: 'Swim and Bathing',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      }
    ]
  },
  'seminyak and canggu': {
    title: 'Seminyak & Canggu',
    intro: 'Seminyak dan Canggu merupakan pusat gaya hidup modern Bali barat, menghadirkan harmoni antara butik belanja kelas atas, kafe organik hits, ombak peselancar, dan suasana pantai bohemian yang santai.',
    cards: [
      {
        title: 'Seminyak',
        icon: 'sparkles',
        sections: [
          { label: 'Suasana', content: 'Mewah, elegan, dan trendi. Terkenal dengan chic boutique, beach club bergaya, serta kawasan kuliner kelas atas.' },
          { label: 'Aktivitas', content: 'Berbelanja di toko-toko mewah, bersantai di beach club terkenal (seperti Ku De Ta), menikmati sunset di Pantai Seminyak, serta mencoba pengalaman surfing yang santai.' },
          { label: 'Akomodasi & Fasilitas', content: 'Resor mewah, layanan spa berkualitas tinggi, serta kehidupan malam yang elegan dengan beragam pilihan bar dan klub.' }
        ]
      },
      {
        title: 'Canggu',
        icon: 'compass',
        sections: [
          { label: 'Suasana', content: 'Santai dan ala bohemian (boho-chic). Sangat populer di kalangan digital nomad, peselancar, dan wisatawan yang menyukai gaya hidup santai.' },
          { label: 'Aktivitas', content: 'Berselancar di spot terkenal seperti Echo Beach, kelas yoga, serta menjelajahi kafe-kafe hits, seni lokal, dan aktivitas kebugaran (wellness).' },
          { label: 'Akomodasi & Fasilitas', content: 'Pilihan penginapan terjangkau, area co-working space, kafe organik, serta kehidupan malam yang santai di pinggir pantai.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Animal Encounter',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      },
      {
        title: 'Full Day Tour',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      },
      {
        title: 'Nature Trail',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      },
      {
        title: 'Swim and Bathing',
        packages: [
          'amazing-waterfall-monkey-forest'
        ]
      }
    ]
  },
  'ubud': {
    title: 'Ubud',
    intro: 'Ubud adalah jantung budaya dan alam Bali yang memikat, memadukan keindahan sawah terasering yang hijau, warisan seni tari dan lukis yang kaya, retret kesehatan holistik, serta kekayaan kuliner khas Bali.',
    cards: [
      {
        title: 'Natural Beauty',
        icon: 'tree',
        sections: [
          { label: 'Terasering Sawah', content: 'Menyoroti keindahan terasering sawah (khususnya Tegalalang Rice Terrace) dengan lanskap hijau bertingkat yang ikonik.' },
          { label: 'Sacred Monkey Forest', content: 'Kawasan hutan Sacred Monkey Forest Sanctuary yang asri, dipenuhi kera ekor panjang yang lincah serta candi-candi kuno yang sakral.' }
        ]
      },
      {
        title: 'Culture and Arts',
        icon: 'sparkles',
        sections: [
          { label: 'Galeri & Museum Seni', content: 'Pusat kebudayaan dan seni Bali yang menampilkan galeri/museum seni ternama seperti Agung Rai Museum of Art (ARMA) dan Neka Art Museum.' },
          { label: 'Pertunjukan Tari', content: 'Menyuguhkan pertunjukan tari tradisional legendaris Bali setiap malam seperti Tari Legong, Barong, dan Tari Kecak.' }
        ]
      },
      {
        title: 'Wellness and Spirituality',
        icon: 'flower',
        sections: [
          { label: 'Yoga & Retret', content: 'Pusat kegiatan yoga kelas dunia, retret kesehatan, lokakarya meditasi, dan penyembuhan holistik.' },
          { label: 'Spa Tradisional', content: 'Perawatan holistik serta spa tradisional khas Bali menggunakan rempah-rempah herbal alami untuk relaksasi menyeluruh.' }
        ]
      },
      {
        title: 'Cuisine & Markets',
        icon: 'compass',
        sections: [
          { label: 'Wisata Kuliner', content: 'Memiliki wisata kuliner yang berkembang pesat dengan beragam tempat makan ikonis seperti Locavore dan Clear Cafe.' },
          { label: 'Ubud Art Market', content: 'Pusat berbelanja kerajinan tangan, tekstil tenun, perhiasan perak, lukisan, dan suvenir lokal berkualitas.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Animal Encounter',
        packages: [
          'ubud-monkey-forest-and-kintamani-highland',
          'amazing-waterfall-monkey-forest',
          'discover-waterfall-rice-terrace-monkey-forest',
          'bali-culture-heritage-3-days',
          'bali-spiritual-landscapes-4-days',
          'balis-adventurous-escapes-6-days',
          'explore-balis-majestic-landscapes-5-days'
        ]
      },
      {
        title: 'ATV Ride',
        packages: [
          'atv-rafting-combo',
          'adventure-atv-telaga-waja',
          'adventure-atv-ubud-kuber'
        ]
      },
      {
        title: 'Cycling Trip',
        packages: [
          'bali-cycling-downhill-mountain-to-village'
        ]
      },
      {
        title: 'Hiking and Trekking',
        packages: [
          'adventure-bali-sunrise-trekking-mount-batur',
          'adventure-batur-sunrise-hot-spring-lunch'
        ]
      },
      {
        title: 'Rafting and Kayaking',
        packages: [
          'telaga-waja-rafting',
          'atv-rafting-combo',
          'surya-bintang-rafting',
          'bali-dewata-rafting'
        ]
      }
    ]
  },
  'off road tours': {
    title: 'Off Road Tours',
    intro: 'Jelajahi petualangan off-road ekstrem dan seru di Bali. Dari rute terjal berlumpur mengendarai ATV Quad Bike hingga ekspedisi mengarungi pasir hitam vulkanik dengan armada Jeep 4x4 klasik.',
    cards: [
      {
        title: 'ATV Quad Bike & Off-Road',
        icon: 'activity',
        sections: [
          { label: 'Trek Menantang', content: 'Nikmati lintasan off-road ekstrem melewati hutan tropis, sungai berlumpur, gua berbentuk kepala gorilla, terowongan, hingga air terjun alami.' },
          { label: 'Pilihan Kendaraan', content: 'Tersedia ATV otomatis berkapasitas mesin 250cc yang tangguh, aman, dan mudah dikendarai baik untuk pemula maupun pencari adrenalin profesional.' }
        ]
      },
      {
        title: 'Jeep Volcano Adventure',
        icon: 'compass',
        sections: [
          { label: 'Eksplorasi Kaldera', content: 'Rasakan petualangan menembus hamparan pasir hitam luas (Black Sand) dan medan berbatu vulkanik (Black Lava) hasil letusan dahsyat Gunung Batur.' },
          { label: 'Matahari Terbit', content: 'Saksikan pemandangan golden sunrise legendaris di atas awan dari atas kap mobil Jeep 4x4 klasik tanpa perlu mendaki lelah di kegelapan fajar.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Off Road',
        packages: [
          'atv-rafting-combo',
          'off-road-tours',
          'adventure-atv-telaga-waja',
          'adventure-atv-ubud-kuber'
        ]
      },
      {
        title: 'ATV Ride',
        packages: [
          'atv-rafting-combo',
          'adventure-atv-telaga-waja',
          'adventure-atv-ubud-kuber'
        ]
      },
      {
        title: 'Jeep Adventure',
        packages: [
          'off-road-tours'
        ]
      }
    ]
  },
  'trekking': {
    title: 'Hiking and Trekking Tours',
    intro: 'Jelajahi keagungan gunung berapi sakral, puncak tertinggi pulau dewata, pemandian air panas alami, dan keajaiban air terjun tersembunyi dengan pemandu trekking lokal profesional.',
    cards: [
      {
        title: 'Sunrise Mount Batur Trekking',
        icon: 'cloud',
        sections: [
          { label: 'Puncak Kaldera 1.717 mdpl', content: 'Mendaki di keheningan dini hari menuju puncak Gunung Batur untuk menyaksikan golden sunrise spektakuler di atas hamparan lautan awan.' },
          { label: 'Sarapan Uap Panas Bumi & Hot Spring', content: 'Menikmati sajian sarapan unik dimasak langsung dari uap vulkanik alami dan berendam relaksasi di kolam air panas alami tepi Danau Batur.' }
        ]
      },
      {
        title: 'Mount Agung & Nature Wonder',
        icon: 'tree',
        sections: [
          { label: 'Puncak Tertinggi Bali 3.033 mdpl', content: 'Menaklukkan Gunung Agung, titik tertinggi dan paling disucikan di Bali via rute Pasar Agung atau Besakih dengan pemandangan magis.' },
          { label: 'Air Terjun & Keajaiban Alam', content: 'Menjelajahi keindahan tersembunyi Sekumpul & Fiji Waterfall, perosotan alami Lemukih, cliff jumping, dan trekking pesawahan hijau.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Hiking and Trekking',
        packages: [
          'adventure-bali-sunrise-trekking-mount-batur',
          'adventure-batur-sunrise-hot-spring-lunch',
          'mount-agung-adventure-sunrise-trekking',
          'bali-nature-wonder-experience'
        ]
      },
      {
        title: 'Mount Batur Sunrise Trekking',
        packages: [
          'adventure-bali-sunrise-trekking-mount-batur',
          'adventure-batur-sunrise-hot-spring-lunch'
        ]
      },
      {
        title: 'Mount Agung Trekking',
        packages: [
          'mount-agung-adventure-sunrise-trekking'
        ]
      },
      {
        title: 'Nature & Waterfall Trekking',
        packages: [
          'bali-nature-wonder-experience'
        ]
      }
    ]
  },
  'rafting and kayaking': {
    title: 'Rafting and Kayaking Tours',
    intro: 'Rasakan sensasi adrenalin mengarungi jeram sungai terbaik di Bali, mulai dari Sungai Telaga Waja Karangasem yang jernih bertenaga hingga Sungai Ayung Ubud yang memesona berpadu relief tebing batu dan pemandangan lembah tropis.',
    cards: [
      {
        title: 'Telaga Waja River Adventure',
        icon: 'waves',
        sections: [
          { label: 'Jeram Kelas III - IV Terpanjang', content: 'Nikmati rute arung jeram sepanjang 16 km dengan air jernih bersumber langsung dari mata air Gunung Agung serta tantangan turunan dam spektakuler setinggi 4 meter.' },
          { label: 'Pemandangan Lembah & Gunung', content: 'Dikelilingi pemandangan spektakuler persawahan terasering, tebing alami, dan hembusan udara sejuk khas perbukitan Karangasem.' }
        ]
      },
      {
        title: 'Ayung River Ubud & Combo Tours',
        icon: 'activity',
        sections: [
          { label: '29 Titik Jeram & Relief Ramayana', content: 'Pengarungan 12 km di Sungai Ayung Ubud yang legendaris dengan ukiran batu Ramayana di tebing sungai, air terjun tersembunyi, dan jeram seru kelas II - III.' },
          { label: 'Paket Kombo ATV & Fasilitas Lengkap', content: 'Pilihan paket petualangan ganda menggabungkan rafting dan ATV Quad Bike menembus hutan tropis, terowongan gua, serta makan siang prasmanan lezat.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Rafting and Kayaking',
        packages: [
          'telaga-waja-rafting',
          'atv-rafting-combo',
          'surya-bintang-rafting',
          'bali-dewata-rafting'
        ]
      },
      {
        title: 'Telaga Waja Rafting',
        packages: [
          'telaga-waja-rafting'
        ]
      },
      {
        title: 'Ayung River Rafting',
        packages: [
          'atv-rafting-combo',
          'surya-bintang-rafting',
          'bali-dewata-rafting'
        ]
      },
      {
        title: 'Combo Adventure',
        packages: [
          'atv-rafting-combo'
        ]
      }
    ]
  },
  'white-water-rafting': {
    title: 'Rafting and Kayaking Tours',
    intro: 'Rasakan sensasi adrenalin mengarungi jeram sungai terbaik di Bali, mulai dari Sungai Telaga Waja Karangasem yang jernih bertenaga hingga Sungai Ayung Ubud yang memesona berpadu relief tebing batu dan pemandangan lembah tropis.',
    cards: [
      {
        title: 'Telaga Waja River Adventure',
        icon: 'waves',
        sections: [
          { label: 'Jeram Kelas III - IV Terpanjang', content: 'Nikmati rute arung jeram sepanjang 16 km dengan air jernih bersumber langsung dari mata air Gunung Agung serta tantangan turunan dam spektakuler setinggi 4 meter.' },
          { label: 'Pemandangan Lembah & Gunung', content: 'Dikelilingi pemandangan spektakuler persawahan terasering, tebing alami, dan hembusan udara sejuk khas perbukitan Karangasem.' }
        ]
      },
      {
        title: 'Ayung River Ubud & Combo Tours',
        icon: 'activity',
        sections: [
          { label: '29 Titik Jeram & Relief Ramayana', content: 'Pengarungan 12 km di Sungai Ayung Ubud yang legendaris dengan ukiran batu Ramayana di tebing sungai, air terjun tersembunyi, dan jeram seru kelas II - III.' },
          { label: 'Paket Kombo ATV & Fasilitas Lengkap', content: 'Pilihan paket petualangan ganda menggabungkan rafting dan ATV Quad Bike menembus hutan tropis, terowongan gua, serta makan siang prasmanan lezat.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Rafting and Kayaking',
        packages: [
          'telaga-waja-rafting',
          'atv-rafting-combo',
          'surya-bintang-rafting',
          'bali-dewata-rafting'
        ]
      },
      {
        title: 'Telaga Waja Rafting',
        packages: [
          'telaga-waja-rafting'
        ]
      },
      {
        title: 'Ayung River Rafting',
        packages: [
          'atv-rafting-combo',
          'surya-bintang-rafting',
          'bali-dewata-rafting'
        ]
      },
      {
        title: 'Combo Adventure',
        packages: [
          'atv-rafting-combo'
        ]
      }
    ]
  },
  'rafting-kayaking': {
    title: 'Rafting and Kayaking Tours',
    intro: 'Rasakan sensasi adrenalin mengarungi jeram sungai terbaik di Bali, mulai dari Sungai Telaga Waja Karangasem yang jernih bertenaga hingga Sungai Ayung Ubud yang memesona berpadu relief tebing batu dan pemandangan lembah tropis.',
    cards: [
      {
        title: 'Telaga Waja River Adventure',
        icon: 'waves',
        sections: [
          { label: 'Jeram Kelas III - IV Terpanjang', content: 'Nikmati rute arung jeram sepanjang 16 km dengan air jernih bersumber langsung dari mata air Gunung Agung serta tantangan turunan dam spektakuler setinggi 4 meter.' },
          { label: 'Pemandangan Lembah & Gunung', content: 'Dikelilingi pemandangan spektakuler persawahan terasering, tebing alami, dan hembusan udara sejuk khas perbukitan Karangasem.' }
        ]
      },
      {
        title: 'Ayung River Ubud & Combo Tours',
        icon: 'activity',
        sections: [
          { label: '29 Titik Jeram & Relief Ramayana', content: 'Pengarungan 12 km di Sungai Ayung Ubud yang legendaris dengan ukiran batu Ramayana di tebing sungai, air terjun tersembunyi, dan jeram seru kelas II - III.' },
          { label: 'Paket Kombo ATV & Fasilitas Lengkap', content: 'Pilihan paket petualangan ganda menggabungkan rafting dan ATV Quad Bike menembus hutan tropis, terowongan gua, serta makan siang prasmanan lezat.' }
        ]
      }
    ],
    categories: [
      {
        title: 'Rafting and Kayaking',
        packages: [
          'telaga-waja-rafting',
          'atv-rafting-combo',
          'surya-bintang-rafting',
          'bali-dewata-rafting'
        ]
      },
      {
        title: 'Telaga Waja Rafting',
        packages: [
          'telaga-waja-rafting'
        ]
      },
      {
        title: 'Ayung River Rafting',
        packages: [
          'atv-rafting-combo',
          'surya-bintang-rafting',
          'bali-dewata-rafting'
        ]
      },
      {
        title: 'Combo Adventure',
        packages: [
          'atv-rafting-combo'
        ]
      }
    ]
  }
};

interface DestinationTranslation {
  title: string;
  intro: string;
  cards: {
    title: string;
    sections: { label: string; content: string }[];
  }[];
}

const DESTINATIONS_EN: Record<string, DestinationTranslation> = {
  'candidasa and amed': {
    title: 'Candidasa and Amed',
    intro: 'Candidasa and Amed are two charming coastal areas in East Bali, each offering a unique atmosphere and beautiful surroundings.',
    cards: [
      {
        title: 'Candidasa',
        sections: [
          { label: 'Vibe', content: 'Calm, relaxed, with panoramic ocean and hillside views.' },
          { label: 'Beaches', content: 'Mainly rocky coastlines with calm waters (ideal for swimming & snorkeling, such as Blue Lagoon).' },
          { label: 'Activities', content: 'Visit Tenganan traditional village, Bugbug rice terraces, Tirta Gangga Water Palace, and enjoy snorkeling/diving.' },
          { label: 'Accommodations', content: 'Boutique hotels, cozy guesthouses, and oceanfront resorts.' }
        ]
      },
      {
        title: 'Amed',
        sections: [
          { label: 'Vibe', content: 'Scenic, deeply rich in local Balinese culture, and highly popular for divers.' },
          { label: 'Beaches', content: 'Stretches of black sand beaches with crystal-clear water and vibrant coral reefs.' },
          { label: 'Activities', content: 'Snorkeling and scuba diving (including the Japanese Shipwreck), local fishing village tours, sunrise views, and Mount Agung tours.' },
          { label: 'Accommodations', content: 'Ranging from budget-friendly guesthouses to eco-friendly beach resorts.' }
        ]
      }
    ]
  },
  'bedugul': {
    title: 'Bedugul',
    intro: 'Bedugul is a refreshing mountain highland region in central Bali, famous for its breathtaking volcanic lakes, iconic water temples, and lush botanical gardens.',
    cards: [
      {
        title: 'Bedugul High Overview',
        sections: [
          { label: 'Natural Beauty', content: 'Lake Beratan with the iconic floating Ulun Danu Beratan Temple, and the serene Bali Botanic Garden.' },
          { label: 'Activities', content: 'Trekking in highland hills and forests, as well as water activities like paddle boating on Lake Beratan.' },
          { label: 'Farming & Markets', content: 'Famous for fresh agricultural produce like strawberries and tomatoes that you can purchase at the local market.' }
        ]
      },
      {
        title: 'Climate & Lodging',
        sections: [
          { label: 'Climate', content: 'Located in the highlands with cool fresh air, making it a perfect escape from coastal tropical heat.' },
          { label: 'Accommodations', content: 'A wide range of lodging options from cozy guesthouses to scenic natural resorts.' }
        ]
      }
    ]
  },
  'jimbaran and nusa dua': {
    title: 'Jimbaran and Nusa Dua',
    intro: 'Jimbaran and Nusa Dua showcase the stunning charm of southern Bali\'s coastline, combining pristine white sand beaches, romantic beachfront seafood dining, and world-class water sports and luxury resorts.',
    cards: [
      {
        title: 'Jimbaran',
        sections: [
          { label: 'Vibe', content: 'Relaxed and romantic, with a distinct fishing village character and gorgeous sunset views.' },
          { label: 'Beaches', content: 'Sandy beaches excellent for swimming, sunbathing, and enjoying fresh grilled seafood dinners right on the beach.' },
          { label: 'Activities', content: 'Visiting local markets, exploring nearby temples like Uluwatu, pampering yourself with spa treatments, and water sports like surfing or snorkeling.' },
          { label: 'Accommodations', content: 'A selection of luxury resorts and boutique hotels offering ocean views and direct beach access.' }
        ]
      },
      {
        title: 'Nusa Dua',
        sections: [
          { label: 'Vibe', content: 'Luxurious and meticulously manicured, perfect for families and high-end travelers.' },
          { label: 'Beaches', content: 'Clean beaches with calm, gentle waves that are highly safe for swimming and relaxing, equipped with various beach clubs and water sports.' },
          { label: 'Activities', content: 'Shopping at the Bali Collection complex, visiting Museum Pasifika, watching cultural arts shows, or attending international conferences.' },
          { label: 'Accommodations', content: 'An array of international 5-star hotels and resorts with world-class spa and dining facilities.' }
        ]
      }
    ]
  },
  'kuta and legian': {
    title: 'Kuta and Legian',
    intro: 'Kuta and Legian represent the energetic core of Bali, featuring legendary surf beaches, vibrant local souvenir shopping, and a dynamic nightlife along the western coast.',
    cards: [
      {
        title: 'Kuta',
        sections: [
          { label: 'Vibe', content: 'Lively, full of energy, and famous for its active nightlife and beginner-friendly surfing beaches. Very popular among young travelers.' },
          { label: 'Activities', content: 'Surfing, visiting beach clubs, shopping at local art markets, enjoying beachside bars, and watching beautiful sunsets at Kuta Beach.' },
          { label: 'Accommodations', content: 'A vast range from budget hostels to luxury resorts, surrounded by countless international and local dining choices.' }
        ]
      },
      {
        title: 'Legian',
        sections: [
          { label: 'Vibe', content: 'Slightly more relaxed than Kuta but still retaining a vibrant atmosphere. Perfect for families and travelers seeking a balance of relaxation and nightlife.' },
          { label: 'Activities', content: 'Surfing, sunbathing, beach clubs, and various beach sports.' },
          { label: 'Accommodations', content: 'Diverse choices ranging from boutique hotels to private villas, with dining options from local warungs to upscale restaurants.' }
        ]
      }
    ]
  },
  'nusa penida and nusa lembongan': {
    title: 'Nusa Penida and Nusa Lembongan',
    intro: 'Nusa Penida and Nusa Lembongan present exotic island adventures with dramatic clifftops, clear natural ocean pools, soothing white sand beaches, and world-class manta ray snorkeling spots.',
    cards: [
      {
        title: 'Nusa Penida',
        sections: [
          { label: 'Natural Beauty', content: 'Renowned for dramatic limestone cliffs, breathtaking beaches, and turquoise waters. Iconic spots include Kelingking Beach, Broken Beach, and Angel\'s Billabong.' },
          { label: 'Activities', content: 'Highly popular for snorkeling and diving, especially at Manta Point to see reef manta rays, as well as hiking scenic island trails.' },
          { label: 'Culture & Vibe', content: 'Has a rugged, more secluded and wild feel compared to mainland Bali, providing an authentic and adventurous island experience.' }
        ]
      },
      {
        title: 'Nusa Lembongan',
        sections: [
          { label: 'Vibe', content: 'More laid-back and peaceful, ideal for a slow-paced, relaxing holiday. Smaller in size and more developed in terms of beach resort amenities than Nusa Penida.' },
          { label: 'Beaches', content: 'Popular beaches like Dream Beach and Mushroom Bay are famous for soft white sand and calm swimming bays.' },
          { label: 'Activities', content: 'Ideal for water activities like snorkeling, diving, surfing, as well as touring local seaweed farms.' }
        ]
      }
    ]
  },
  'sanur': {
    title: 'Sanur',
    intro: 'Sanur offers a peaceful blend of calm beaches, deep traditional Balinese cultural heritage, and a perfect setting for total relaxation and spiritual restoration.',
    cards: [
      {
        title: 'Beaches & Culture',
        sections: [
          { label: 'Beaches', content: 'Famous for its shallow, reef-protected waters that are extremely safe for swimming and family activities. Features a long paved pedestrian path for seaside walking, cycling, or jogging.' },
          { label: 'Cultural Experience', content: 'Rich in cultural heritage with traditional Balinese architecture, temples, local morning markets, and cultural ceremonies.' },
          { label: 'Dining & Shopping', content: 'Offers a pleasant mix of local warungs and international restaurants, alongside charming art shops and boutiques.' }
        ]
      },
      {
        title: 'Activities & Relaxation',
        sections: [
          { label: 'Water Activities', content: 'An ideal spot for snorkeling, diving, stand-up paddleboarding, and serves as the main speed boat gateway to neighboring islands like Nusa Lembongan.' },
          { label: 'Relaxation', content: 'Has a quiet, laid-back atmosphere, perfect for wellness retreats, yoga, and relaxing spa therapies.' }
        ]
      }
    ]
  },
  'seminyak and canggu': {
    title: 'Seminyak and Canggu',
    intro: 'Seminyak and Canggu are the lifestyle hotspots of western Bali, bringing together upscale designer boutiques, trendy organic cafes, surf breaks, and a bohemian beach-side lounge vibe.',
    cards: [
      {
        title: 'Seminyak',
        sections: [
          { label: 'Vibe', content: 'Luxurious, elegant, and trendy. Known for its high-end boutiques, stylish beach clubs, and upscale dining districts.' },
          { label: 'Activities', content: 'Shopping at premium designer shops, relaxing at world-famous beach clubs (like Ku De Ta), sunset viewing at Seminyak Beach, and casual surfing.' },
          { label: 'Accommodations & Facilities', content: 'Luxury pool villas, high-quality spa resorts, and a refined nightlife with elegant bars and clubs.' }
        ]
      },
      {
        title: 'Canggu',
        sections: [
          { label: 'Vibe', content: 'Laid-back and bohemian-chic. Highly popular among digital nomads, surfers, and wellness-focused travelers.' },
          { label: 'Activities', content: 'Surfing at famous breaks like Echo Beach, yoga classes, exploring trendy cafes, local street art, and wellness facilities.' },
          { label: 'Accommodations & Facilities', content: 'Affordable guest houses, trendy co-working spaces, organic vegan cafes, and relaxed beachfront acoustic nightlife.' }
        ]
      }
    ]
  },
  'ubud': {
    title: 'Ubud',
    intro: 'Ubud is the mesmerizing cultural and natural heart of Bali, blending lush terraced rice paddies, rich artistic traditions in dance and painting, holistic health retreats, and delicious culinary experiences.',
    cards: [
      {
        title: 'Natural Beauty',
        sections: [
          { label: 'Rice Terraces', content: 'Showcasing the world-famous Tegalalang Rice Terrace with its iconic emerald green stepped agricultural landscapes.' },
          { label: 'Sacred Monkey Forest', content: 'The lush sanctuary of the Sacred Monkey Forest, home to hundreds of playful long-tailed macaques and ancient temple ruins.' }
        ]
      },
      {
        title: 'Culture and Arts',
        sections: [
          { label: 'Art Galleries & Museums', content: 'Bali\'s artistic center displaying world-renowned art museums like ARMA and the Neka Art Museum.' },
          { label: 'Dance Performances', content: 'Offering legendary traditional Balinese dance performances every night, including Legong, Barong, and Kecak dances.' }
        ]
      },
      {
        title: 'Wellness and Spirituality',
        sections: [
          { label: 'Yoga & Retreats', content: 'World-class yoga centers, wellness retreats, meditation workshops, and holistic energy healing.' },
          { label: 'Traditional Spa', content: 'Balinese massage therapies and traditional treatments utilizing natural local herbs and spices for complete rejuvenation.' }
        ]
      },
      {
        title: 'Cuisine & Markets',
        sections: [
          { label: 'Gastronomy', content: 'Featuring a thriving culinary scene with legendary eateries and iconic farm-to-table organic cafes.' },
          { label: 'Ubud Art Market', content: 'The bustling town center market for authentic local handicrafts, woven textiles, silver jewelry, paintings, and souvenirs.' }
        ]
      }
    ]
  },
  'off road tours': {
    title: 'Off Road Tours',
    intro: 'Explore extreme and exhilarating off-road adventures in Bali. From rugged mud tracks on an ATV Quad Bike to exploring black volcanic sand dunes with a classic 4x4 Jeep caravan.',
    cards: [
      {
        title: 'ATV Quad Bike & Off-Road',
        sections: [
          { label: 'Challenging Tracks', content: 'Enjoy extreme off-road trails through tropical forests, muddy rivers, gorilla-face caves, tunnels, and natural waterfalls.' },
          { label: 'Vehicle Options', content: 'Robust, safe, and easy-to-drive 250cc automatic ATVs, perfect for both beginners and professional adrenaline-seekers.' }
        ]
      },
      {
        title: 'Jeep Volcano Adventure',
        sections: [
          { label: 'Caldera Exploration', content: 'Embark on a unique 4x4 expedition across the vast volcanic black sand fields (Black Sand) and rugged black lava terrains from Mount Batur\'s historic eruptions.' },
          { label: 'Sunrise Viewing', content: 'Witness the legendary golden sunrise above the clouds from the hood of your classic 4x4 Jeep, with no strenuous hiking required.' }
        ]
      }
    ]
  },
  'trekking': {
    title: 'Hiking and Trekking Tours',
    intro: 'Explore sacred volcanoes, the highest peaks of Bali, natural hot springs, and hidden canyon waterfalls with licensed professional local trekking guides.',
    cards: [
      {
        title: 'Sunrise Mount Batur Trekking',
        sections: [
          { label: '1,717m Caldera Summit', content: 'Hike in the early morning darkness to Mount Batur\'s summit to witness a breathtaking golden sunrise above a blanket of clouds.' },
          { label: 'Geothermal Breakfast & Hot Springs', content: 'Enjoy a unique breakfast cooked in natural volcanic steam vents, and soak in a lakeside natural hot spring to relax your muscles.' }
        ]
      },
      {
        title: 'Mount Agung & Nature Wonder',
        sections: [
          { label: '3,033m Bali Highest Peak', content: 'Conquer Mount Agung, the highest and most sacred peak in Bali, via Pasar Agung or Besakih route with majestic panoramic views.' },
          { label: 'Waterfalls & Natural Wonders', content: 'Discover hidden gems like Sekumpul & Fiji Waterfalls, Lemukih natural waterslide, cliff jumping, and lush green rice terrace trekking.' }
        ]
      }
    ]
  },
  'rafting and kayaking': {
    title: 'Rafting and Kayaking Tours',
    intro: 'Feel the rush of adrenaline navigating Bali\'s finest river rapids, from the crystal-clear, fast-flowing Telaga Waja River in Karangasem to the scenic Ayung River in Ubud with its stone relief carvings and tropical gorges.',
    cards: [
      {
        title: 'Telaga Waja River Adventure',
        sections: [
          { label: 'Longest Grade III-IV Rapids', content: 'Enjoy a 16 km arung jeram route with pristine spring water direct from Mount Agung, ending with an exciting 4-meter dam drop.' },
          { label: 'Valley & Mountain Views', content: 'Surrounded by stunning vistas of terraced rice fields, pristine forest cliffs, and cool mountain breezes in Karangasem.' }
        ]
      },
      {
        title: 'Ayung River Ubud & Combo Tours',
        sections: [
          { label: '29 Rapids & Ramayana Carvings', content: 'Raft 12 km on the legendary Ayung River with ancient Ramayana stone reliefs carved directly into the cliffs, waterfalls, and fun Grade II-III rapids.' },
          { label: 'ATV Combo & All-Inclusive Facilities', content: 'Double the adventure with combo packages combining white-water rafting with ATV Quad Biking, followed by a delicious hot buffet lunch.' }
        ]
      }
    ]
  },
  'white-water-rafting': {
    title: 'Rafting and Kayaking Tours',
    intro: 'Feel the rush of adrenaline navigating Bali\'s finest river rapids, from the crystal-clear, fast-flowing Telaga Waja River in Karangasem to the scenic Ayung River in Ubud with its stone relief carvings and tropical gorges.',
    cards: [
      {
        title: 'Telaga Waja River Adventure',
        sections: [
          { label: 'Longest Grade III-IV Rapids', content: 'Enjoy a 16 km arung jeram route with pristine spring water direct from Mount Agung, ending with an exciting 4-meter dam drop.' },
          { label: 'Valley & Mountain Views', content: 'Surrounded by stunning vistas of terraced rice fields, pristine forest cliffs, and cool mountain breezes in Karangasem.' }
        ]
      },
      {
        title: 'Ayung River Ubud & Combo Tours',
        sections: [
          { label: '29 Rapids & Ramayana Carvings', content: 'Raft 12 km on the legendary Ayung River with ancient Ramayana stone reliefs carved directly into the cliffs, waterfalls, and fun Grade II-III rapids.' },
          { label: 'ATV Combo & All-Inclusive Facilities', content: 'Double the adventure with combo packages combining white-water rafting with ATV Quad Biking, followed by a delicious hot buffet lunch.' }
        ]
      }
    ]
  },
  'rafting-kayaking': {
    title: 'Rafting and Kayaking Tours',
    intro: 'Feel the rush of adrenaline navigating Bali\'s finest river rapids, from the crystal-clear, fast-flowing Telaga Waja River in Karangasem to the scenic Ayung River in Ubud with its stone relief carvings and tropical gorges.',
    cards: [
      {
        title: 'Telaga Waja River Adventure',
        sections: [
          { label: 'Longest Grade III-IV Rapids', content: 'Enjoy a 16 km arung jeram route with pristine spring water direct from Mount Agung, ending with an exciting 4-meter dam drop.' },
          { label: 'Valley & Mountain Views', content: 'Surrounded by stunning vistas of terraced rice fields, pristine forest cliffs, and cool mountain breezes in Karangasem.' }
        ]
      },
      {
        title: 'Ayung River Ubud & Combo Tours',
        sections: [
          { label: '29 Rapids & Ramayana Carvings', content: 'Raft 12 km on the legendary Ayung River with ancient Ramayana stone reliefs carved directly into the cliffs, waterfalls, and fun Grade II-III rapids.' },
          { label: 'ATV Combo & All-Inclusive Facilities', content: 'Double the adventure with combo packages combining white-water rafting with ATV Quad Biking, followed by a delicious hot buffet lunch.' }
        ]
      }
    ]
  }
};

interface DestinationDetailPageProps {
  destinationName: string;
  onBack: () => void;
  onBookNow: (experienceId: string) => void;
}

export default function DestinationDetailPage({ destinationName, onBack, onBookNow }: DestinationDetailPageProps) {
  const { language, t } = useLanguage();
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [isAllExpanded, setIsAllExpanded] = useState<boolean>(false);

  // Normalize key to fetch static data
  const lookupKey = destinationName.toLowerCase().replace('&', 'and').trim();
  const rawDestData = DESTINATIONS_REGISTRY[lookupKey];

  const destData = React.useMemo(() => {
    if (!rawDestData) {
      return {
        title: destinationName,
        intro: `${destinationName} is a beautiful region in Bali waiting to be explored. Discover incredible landscapes, local culture, and amazing activities.`,
        cards: [
          {
            title: language === 'id' ? 'Ringkasan' : 'Overview',
            icon: 'compass' as const,
            sections: [
              { label: language === 'id' ? 'Tentang' : 'About', content: language === 'id' ? 'Temukan pemandangan alam memukau, ikon bersejarah, dan pura suci.' : 'Discover beautiful landscapes, landmarks, and sacred temples.' },
              { label: language === 'id' ? 'Aktivitas' : 'Activities', content: language === 'id' ? 'Nikmati tamasya wisata, spot foto estetik, dan tur privat berpemandu.' : 'Enjoy sightseeing, photo spots, and private guided trekking tours.' }
            ]
          }
        ],
        categories: []
      };
    }

    if (language === 'id') {
      return rawDestData;
    }

    const translation = DESTINATIONS_EN[lookupKey];
    if (!translation) return rawDestData;

    return {
      ...rawDestData,
      title: translation.title,
      intro: translation.intro,
      cards: rawDestData.cards.map((card, cardIdx) => {
        const transCard = translation.cards[cardIdx];
        if (!transCard) return card;
        return {
          ...card,
          title: transCard.title,
          sections: card.sections.map((sec, secIdx) => {
            const transSec = transCard.sections[secIdx];
            if (!transSec) return sec;
            return {
              ...sec,
              label: transSec.label,
              content: transSec.content
            };
          })
        };
      })
    };
  }, [lookupKey, rawDestData, language, destinationName]);

  if (selectedPackageId) {
    return (
      <div className="pt-24 pb-12 bg-neutral-950">
        <RaftingDetailPage
          packageId={selectedPackageId}
          onBack={() => {
            setSelectedPackageId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onBookNow={onBookNow}
        />
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'compass': return <Compass size={18} />;
      case 'map': return <Map size={18} />;
      case 'tree': return <TreePine size={18} />;
      case 'cloud': return <Cloud size={18} />;
      case 'flower': return <Flower2 size={18} />;
      case 'hotel': return <Hotel size={18} />;
      case 'activity': return <Activity size={18} />;
      case 'waves': return <Waves size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  const renderPackageCard = (packageId: string, categoryTitle: string) => {
    const rawPkg = PACKAGES_DATA[packageId];
    if (!rawPkg) return null;

    const translation = language === 'id' ? null : (TOUR_TRANSLATIONS[packageId]?.['en'] || MULTIDAY_TRANSLATIONS[packageId]?.['en']);
    const pkg = {
      ...rawPkg,
      title: translation?.title || rawPkg.title,
      description: translation?.shortDesc || translation?.description || rawPkg.description,
      difficulty: translation?.difficulty || rawPkg.difficulty,
      location: translation?.location || rawPkg.location,
      highlights: translation?.highlights || rawPkg.highlights,
    };

    const uniqueCardKey = `${packageId}-${categoryTitle}`;
    const isExpanded = isAllExpanded;

    return (
      <motion.div
        key={uniqueCardKey}
        layout
        className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-neutral-800/80 flex flex-col justify-between group hover:border-gold-500/40 hover:shadow-2xl transition-all duration-300 text-white w-full max-w-sm mx-auto"
      >
        <div>
          {/* Card Image */}
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

            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white font-black text-[11px] px-2.5 py-1 rounded shadow-md z-10 font-mono uppercase">
              {pkg.badge}
            </div>

            {/* Pin Icon */}
            <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center shadow-md z-10">
              <MapPin size={15} className="text-gold-400" />
            </div>

            {/* Dot indicators mimic image.png */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 pointer-events-none">
              <div className="w-2.5 h-1.5 rounded-full bg-white shadow-sm" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            </div>
          </div>

          {/* Card Content */}
          <div className="p-5 space-y-4 text-left">
            <h3 className="font-sans font-bold text-base text-neutral-100 group-hover:text-gold-400 transition-colors leading-snug line-clamp-2 min-h-[44px]">
              {pkg.title}
            </h3>

            {/* SEE MORE DETAILS Button */}
            <button
              onClick={() => setIsAllExpanded(!isAllExpanded)}
              type="button"
              className="w-full py-1.5 px-3 rounded-full border border-neutral-800 hover:border-gold-500/60 bg-neutral-950 text-gold-400 hover:text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer select-none"
            >
              <span>{isExpanded ? (language === 'id' ? 'LIHAT LEBIH SEDIKIT' : 'SEE LESS DETAILS') : (language === 'id' ? 'LIHAT DETAIL LENGKAP' : 'SEE MORE DETAILS')}</span>
              {isExpanded ? (
                <ChevronUp size={12} className="text-gold-500" />
              ) : (
                <ChevronDown size={12} className="text-gold-500" />
              )}
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden space-y-3 pt-1 text-xs text-neutral-300"
                >
                  <p className="bg-neutral-950/80 p-3 rounded-lg border border-neutral-800 text-[11px] leading-relaxed">
                    {pkg.description || (language === 'id' ? 'Pengalaman petualangan terbaik di Bali dengan pemandu profesional dan fasilitas lengkap berstandar internasional.' : 'Premier private Bali adventure with professional English-speaking guide and international safety gear.')}
                  </p>
                  <div className="flex flex-col gap-1.5 font-medium pl-1 text-[11px]">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-gold-500" />
                      <span>{pkg.location || 'Bali, Indonesia'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles size={12} className="text-gold-500" />
                      <span>{pkg.difficulty || (language === 'id' ? 'Sedang' : 'Easy / Moderate')}</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {(pkg.highlights && pkg.highlights.length > 0 ? pkg.highlights : [
                      language === 'id' ? 'Dipandu oleh tim pemandu profesional berpengalaman' : 'Led by experienced, licensed professional guides',
                      language === 'id' ? 'Dilengkapi dengan peralatan keselamatan berstandar internasional' : 'Complete international safety gear and clean vehicle',
                      language === 'id' ? 'Termasuk air mineral dingin selama perjalanan' : 'Includes cold mineral water throughout the trip'
                    ]).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[10px] leading-tight text-neutral-300">
                        <Check size={11} className="text-gold-500 mt-0.5 flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-5 pb-5 pt-3 space-y-3 border-t border-neutral-800/60 bg-neutral-900/30 text-left">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] text-neutral-500 block uppercase font-mono tracking-wider">
                {language === 'id' ? 'Durasi' : 'Duration'}
              </span>
              <span className="text-xs font-bold text-neutral-200">{pkg.durationBadge}</span>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-neutral-400 block font-mono">
                {language === 'id' ? 'Mulai' : 'From'}{' '}
                <span className="line-through text-red-500 font-bold">${pkg.originalPrice}</span>
              </span>
              <span className="text-xl font-black text-white block">${pkg.discountedPrice}</span>
              <span className="text-[9px] font-bold text-emerald-400 block">
                {language === 'id' ? `Hemat $${pkg.savings}` : `You save $${pkg.savings}`}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setSelectedPackageId(pkg.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full bg-gold-500 hover:bg-gold-600 active:scale-[0.98] text-neutral-950 font-bold text-xs py-2 px-4 rounded-xl shadow-md transition-all cursor-pointer text-center block"
          >
            {t('common.details', 'View Details')}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen text-white text-left animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <button onClick={onBack} className="hover:text-gold-500 transition-colors">
            {language === 'id' ? 'Beranda' : 'Home'}
          </button>
          <span>&gt;</span>
          <button onClick={onBack} className="hover:text-gold-500 transition-colors">
            {lookupKey === 'off road tours' || lookupKey === 'trekking' || lookupKey === 'rafting and kayaking' || lookupKey === 'white-water-rafting' || lookupKey === 'rafting-kayaking' 
              ? (language === 'id' ? 'Aktivitas' : 'Activity') 
              : (language === 'id' ? 'Destinasi' : 'Destination')}
          </button>
          <span>&gt;</span>
          <span className="text-gold-500 font-medium">{destData.title}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>
            {lookupKey === 'off road tours' || lookupKey === 'trekking' || lookupKey === 'rafting and kayaking' || lookupKey === 'white-water-rafting' || lookupKey === 'rafting-kayaking'
              ? (language === 'id' ? 'Kembali ke Beranda' : 'Back to Home')
              : (language === 'id' ? 'Kembali ke Semua Destinasi' : 'Back to All Destinations')}
          </span>
        </button>

        {/* Hero title & intro text */}
        <div className="space-y-3 border-b border-neutral-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
            {destData.title}
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed font-medium">
            {destData.intro}
          </p>
        </div>

        {/* Dynamic Detail Cards - Dark & Gold Premium Card layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {destData.cards.map((card, cardIdx) => (
            <div key={cardIdx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4 hover:border-gold-500/20 transition-all shadow-xl">
              <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                  {getIcon(card.icon)}
                </div>
                <h2 className="text-lg font-bold text-white font-sans">{card.title}</h2>
              </div>

              <div className="space-y-3.5 text-xs text-neutral-300">
                {card.sections.map((sec, secIdx) => (
                  <div key={secIdx} className="space-y-1">
                    <span className="text-[10px] font-mono text-gold-500 font-semibold uppercase tracking-wider block">{sec.label}</span>
                    <p className="leading-relaxed font-light">{sec.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Conclusion/Summary banner */}
        <p className="text-xs text-neutral-400 leading-relaxed italic border-l-2 border-gold-500 pl-4 py-1">
          {lookupKey === 'bedugul' 
            ? (language === 'id' ? 'Bedugul menawarkan pengalaman liburan yang menyegarkan di dataran tinggi Bali, ideal untuk menikmati pemandangan alam ber-kabut, danau tenang, dan perkebunan yang subur.' : 'Bedugul offers a refreshing mountain highland retreat in Bali, ideal for enjoying serene lake panoramas, cool mist, and lush botanical flora.')
            : lookupKey === 'off road tours'
            ? (language === 'id' ? 'Nikmati petualangan off-road terpopuler di Bali dengan standar kenyamanan, keselamatan tertinggi, dan pemandu bersertifikasi resmi.' : 'Experience top-rated off-road and adventure tours in Bali with maximum comfort, certified guides, and strict safety standards.')
            : (language === 'id' ? `${destData.title} menawarkan keunikan dan daya tarik istimewa untuk mengisi liburan impian Anda di pulau Bali.` : `${destData.title} offers unique charm and scenic highlights for an unforgettable holiday in Bali.`)}
        </p>

        {/* Category Package Section */}
        {destData.categories.length > 0 && (
          <div className="space-y-16 pt-10 border-t border-neutral-800">
            <h2 className="text-center font-sans font-bold text-xl tracking-widest text-gold-500 uppercase">
              {language === 'id' ? 'Paket Tur Berdasarkan Kategori' : 'Tour Packages by Category'}
            </h2>

            {destData.categories.map((cat, idx) => (
              <div key={idx} className="space-y-8">
                {/* Heading with elegant line on either side to match image.png */}
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-neutral-800" />
                  <h3 className="text-sm font-black text-white font-sans uppercase tracking-widest whitespace-nowrap">
                    {cat.title}
                  </h3>
                  <div className="h-[1px] flex-1 bg-neutral-800" />
                </div>

                {/* Grid of preview package cards under category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {cat.packages.map((packageId) => renderPackageCard(packageId, cat.title))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
