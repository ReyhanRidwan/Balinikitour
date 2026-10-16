import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Activity,
  Users,
  ShieldCheck,
  Check,
  X as XIcon,
  ExternalLink,
  Star,
  Sparkles,
  ShoppingBag,
  Car,
  Coffee,
  Utensils,
  Shirt,
  Sun,
  Compass,
  AlertCircle,
  Phone,
  Mail
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl } from '../utils/cloudinary';
import { TOUR_TRANSLATIONS } from '../utils/localizedData';

export interface RaftingDetailProps {
  packageId: string;
  onBack: () => void;
  onBookNow: (experienceId: string) => void;
}

interface PackageDetailData {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  adultPrice: number;
  childPrice: number;
  duration: string;
  difficulty: string;
  ageLimit?: string;
  transportOption?: string;
  operationalLocation?: string;
  pickupAreas?: string[];
  organizerContact?: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  image: string;
  externalLink?: string;
  highlights: string[];
  itinerary: {
    time: string;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  equipment?: {
    title: string;
    subtitle?: string;
    icon: string;
  }[];
  importantNotes?: string[];
}

const PACKAGE_DETAILS_DATA: Record<string, PackageDetailData> = {
  'telaga-waja-rafting': {
    id: 'telaga-waja-rafting',
    title: 'White Water Rafting at Telaga Waja River BALI',
    badge: '60% OFF SPECIAL PROMO',
    tagline: 'Sungai Telaga Waja, Rendang, Karangasem • Air Alami Mata Air Gunung Agung',
    rating: 4.9,
    reviewCount: 320,
    originalPrice: 75,
    adultPrice: 30,
    childPrice: 20,
    duration: '8 Jam',
    difficulty: 'Sedang (Medium)',
    ageLimit: '7 hingga 65 Tahun',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787061965/9ccc454e-a20f-48d5-a184-d9fc10c7d482.png',
    externalLink: 'https://balikutour.com/trip/white-water-rafting-at-telaga-waja-river-bali/',
    highlights: [
      'Merasakan sensasi arung jeram di Sungai Telaga Waja dengan jeram kelas 3 & 4.',
      'Menyusuri keindahan tebing air terjun alami dan pemandangan lembah Gunung Agung.',
      'Dipandu oleh pemandu sungai profesional lokal bersertifikasi keselamatan.',
      'Dilengkapi dengan peralatan keselamatan berstandar internasional.'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di lobi hotel menggunakan transportasi pribadi ber-AC sesuai rincian pemesanan.'
      },
      {
        time: '09:30',
        title: 'Tiba di Lokasi & Briefing Keselamatan',
        description: 'Tiba di lokasi, menikmati teh/kopi penyambut, memakai perlengkapan keselamatan, dan mendengarkan arahan keselamatan (briefing) dari pemandu sungai.'
      },
      {
        time: '10:45',
        title: 'Memulai Petualangan Arung Jeram (14 KM)',
        description: 'Memulai petualangan arung jeram sepanjang 14 km (jeram kelas 3 & 4) selama 2,5 hingga 3 jam, termasuk berhenti sejenak untuk beristirahat dan berfoto.'
      },
      {
        time: '13:15',
        title: 'Makan Siang Prasmanan (Buffet Lunch)',
        description: 'Makan siang prasmanan di restoran dengan pemandangan bukit hijau dan hamparan sawah yang asri.'
      },
      {
        time: '14:00',
        title: 'Perjalanan Kembali ke Hotel',
        description: 'Pengantaran kembali ke hotel asal dengan aman dan nyaman.'
      }
    ],
    inclusions: [
      'Layanan antar-jemput ber-AC',
      'Teh atau kopi saat kedatangan',
      'Makan siang prasmanan (buffet lunch)',
      'Peralatan rafting berstandar keselamatan internasional',
      'Pemandu rafting profesional lokal',
      'Handuk (disarankan tetap membawa sendiri), fasilitas kamar mandi, dan toilet'
    ],
    exclusions: [
      'Pengeluaran pribadi untuk belanja di titik peristirahatan',
      'Pembelian foto atau video profesional di tempat',
      'Biaya tambahan lainnya, souvenir, dan tip'
    ],
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swim wear', icon: 'swim' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'atv-rafting-combo': {
    id: 'atv-rafting-combo',
    title: 'Experience the thrill of atv ride and rapid water rafting',
    badge: '48% OFF COMBO ADVENTURE',
    tagline: 'Kombinasi Off-Road ATV Quad Bike 250cc & White Water Rafting Sungai Telaga Waja 14 KM',
    rating: 5.0,
    reviewCount: 420,
    originalPrice: 145,
    adultPrice: 75,
    childPrice: 65,
    duration: '10 Jam',
    difficulty: 'Sedang (Medium)',
    ageLimit: 'Minimum 7 tahun, Maksimum 65 tahun',
    transportOption: 'Transportasi bersama atau pribadi (Share or Private Transportation)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787062832/8f55222d-518c-4b9e-a56e-574ff17eff8c.png',
    highlights: [
      'Merasakan sensasi petualangan ATV Ride dan White Water Rafting.',
      'Menjelajahi pemandangan alam indah di Bali.',
      'Dipandu oleh pemandu ATV dan sungai lokal yang berpengalaman.',
      'Dilengkapi dengan peralatan keselamatan berstandar internasional.'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Layanan Penjemputan di Hotel',
        description: 'Layanan antar-jemput dengan transportasi pribadi dan pengemudi berbahasa Inggris di lobi hotel sesuai rincian pemesanan.'
      },
      {
        time: '09:30',
        title: 'Tiba di Lokasi & Pengarahan Umum',
        description: 'Menikmati secangkir teh atau kopi sambil mendengarkan instruksi keselamatan umum dari pemandu sungai mengenai apa yang boleh dan tidak boleh dilakukan.'
      },
      {
        time: '09:45',
        title: 'Memulai Petualangan ATV Ride',
        description: 'Trek ATV 100% off-road, diawali dengan pengarahan keselamatan dan latihan selama 10 menit. Rute lintasan melewati hutan bambu, sungai, lintasan berlumpur/genangan air, tanjakan, serta pemukiman desa Bali.'
      },
      {
        time: '13:30',
        title: 'Memulai Petualangan White Water Rafting',
        description: 'Menikmati makan siang ringan sebelum menuju titik awal rafting. Mengarungi Sungai Telaga Waja sepanjang 14 km (jeram kelas 3 & 4) selama 2,5 hingga 3 jam, termasuk berhenti di beberapa titik untuk beristirahat dan berfoto.'
      },
      {
        time: '15:30',
        title: 'Makan Siang di Restoran',
        description: 'Makan siang prasmanan di restoran dengan pemandangan bukit hijau dan petak sawah.'
      },
      {
        time: '16:30',
        title: 'Perjalanan Kembali ke Hotel',
        description: 'Pengantaran kembali ke hotel asal.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swim wear', icon: 'swim' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'off-road-tours': {
    id: 'off-road-tours',
    title: 'Adventure Off Road Jeep Mount Batur Sunrise',
    badge: 'EXCLUSIVE JEEP TOUR',
    tagline: 'Experience the breathtaking sunrise at Mount Batur & Black Lava with 4x4 Classic Jeep',
    rating: 4.9,
    reviewCount: 356,
    originalPrice: 70,
    adultPrice: 35,
    childPrice: 35,
    duration: '10 Jam',
    difficulty: 'Sedang (Medium)',
    ageLimit: '7 – 65 tahun (Disarankan 10 – 60 tahun)',
    transportOption: 'Private Transportation',
    operationalLocation: 'Mount Batur & Kintamani, Bali',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud', 'Lovina', 'Singaraja'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052559/bf039127-8977-4546-a0bf-aadde17504fd.png',
    highlights: [
      'Off-Road Adventure: Embark on an off-road journey in a specially designed jeep, reaching remote viewpoints inaccessible by regular vehicles.',
      'Spectacular Sunrise: Witness the magical sunrise over Mount Batur (about 1,365 meters above sea level), its warm hues illuminating the volcanic landscape, creating a mesmerizing visual spectacle.',
      'Panoramic Views: Enjoy breathtaking panoramic views of Mount Batur and its caldera, capturing the natural beauty of Bali’s iconic volcano.',
      'Expert Jeep Drivers: Explore with experienced drivers navigating rough terrains, ensuring a safe and thrilling adventure.',
      'Unforgettable Experience: Combine the thrill of off-road jeep exploration with the tranquility of a sunrise, creating lasting memories of Bali’s natural wonders.'
    ],
    itinerary: [
      {
        time: '02:00',
        title: 'Pick-up services at your hotel with private transportation',
        description: 'Our English speaking driver will pick up at lobby hotel as mentioned on booking detail, please provide Traveler Name as hotel booking to be easy and contact Person if any possibility (02:00 am – 03:20 am depending on area).'
      },
      {
        time: '04:20',
        title: 'Arrive at starting point',
        description: 'Arrive at starting point where Jeep Adventure begin after short briefing by our local guide.'
      },
      {
        time: '04:30',
        title: '30 minute off-road adventure',
        description: 'We are ready to experience a 30 minute off-road adventure to reach sunrise point 1.400 meter above sea level.'
      },
      {
        time: '05:00',
        title: 'Reach sunrise point & breakfast',
        description: 'You will reach sunrise point and then enjoying light breakfast while waiting sunrise at around 06.00 am.'
      },
      {
        time: '06:00',
        title: 'Sunrise Time & Photo Session',
        description: 'Sunrise time, enjoy the spectacular views, take hundreds of pictures and videos for your social media reels.'
      },
      {
        time: '07:30',
        title: 'Explore Black Lava & Black Sand',
        description: 'Ready to explore black lava from 1963 or Black sand by your 4×4 classic jeep and enjoying the panoramic views.'
      },
      {
        time: '08:30',
        title: 'Drive back to hotel',
        description: 'Drive back to hotel and Thank You very much for your kindly to book this trip.'
      }
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
    equipment: [
      { title: 'Jaket Tebal', subtitle: 'Jacket', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' },
      { title: 'Topi', subtitle: 'Hat', icon: 'shirt' },
      { title: 'Sepatu Olahraga', subtitle: 'Sport Shoes', icon: 'shirt' }
    ]
  },

  'adventure-atv-telaga-waja': {
    id: 'adventure-atv-telaga-waja',
    title: 'Adventure of ATV Ride at Telaga Waja',
    badge: 'EXCLUSIVE ATV',
    tagline: 'Petualangan Menantang ATV Ride & Trek Off-Road Melintasi Lanskap Alam Bali yang Indah',
    rating: 4.9,
    reviewCount: 184,
    originalPrice: 95,
    adultPrice: 55,
    childPrice: 45,
    duration: '8 Jam',
    difficulty: 'Sedang (Medium)',
    ageLimit: '7 - 65 tahun',
    transportOption: 'Shared atau Private Transportation',
    operationalLocation: 'Telaga Waja Area, Bali',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787737711/a00cb89b-8836-432b-9e67-c5a125a61627.png',
    highlights: [
      'Rasakan sensasi menantang berkendara ATV dan Sungai Rapid.',
      'Memulai perjalanan seru melintasi lanskap alam Bali yang indah.',
      'Dipandu oleh pemandu ATV berpengalaman.',
      'Dilengkapi dengan Peralatan Berstandar Internasional.'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Penjemputan di Hotel',
        description: 'Driver berbahasa Inggris akan menjemput di lobby hotel sesuai detail pemesanan. Mohon sediakan nama traveler sesuai pemesanan hotel dan kontak yang dapat dihubungi.'
      },
      {
        time: '09:30',
        title: 'Tiba di Lokasi & Briefing Umum',
        description: 'Setibanya di lokasi, nikmati secangkir teh atau kopi sambil mendengarkan instruksi umum dari pemandu sungai berpengalaman mengenai hal-hal yang boleh dan tidak boleh dilakukan selama di jalur.'
      },
      {
        time: '09:45',
        title: 'Petualangan ATV Dimulai',
        description: 'Tur dimulai dengan briefing keselamatan dan latihan selama 10 menit sebelum memasuki lintasan off-road 100%. Lintasan mencakup hutan bambu, sungai, dan pedesaan Bali dengan rute menanjak serta genangan air.'
      },
      {
        time: '13:30',
        title: 'Makan Siang',
        description: 'Nikmati hidangan makan siang di restoran dengan pemandangan bukit hijau dan sawah.'
      },
      {
        time: '14:30',
        title: 'Kembali ke Hotel',
        description: 'Perjalanan kembali menuju hotel.'
      }
    ],
    inclusions: [
      'Layanan transportasi ber-AC',
      'ATV Ride (Single atau Tandem)',
      'Kopi atau Teh saat kedatangan',
      'Buffet Lunch (Makan siang prasmanan) dengan beragam menu',
      'Peralatan ATV yang disetujui standar keselamatan',
      'Pelatih/Instruktur ATV Profesional',
      'Handuk (Disarankan tetap membawa handuk sendiri)',
      'Fasilitas kamar mandi/shower dan toilet',
      'Perlindungan Asuransi'
    ],
    exclusions: [
      'Uang ekstra untuk pembelian di area tempat istirahat',
      'Foto atau Video oleh fotografer profesional (tersedia untuk dibeli di tempat)',
      'Pengeluaran tambahan lainnya',
      'Souvenir dan Tip'
    ],
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'adventure-atv-ubud-kuber': {
    id: 'adventure-atv-ubud-kuber',
    title: 'Adventure ATV Ride in UBUD with KUBER',
    badge: 'OFFICIAL KUBER',
    tagline: 'Ride through lush tropical forests, navigate hidden tunnels, and cross pristine rivers',
    rating: 4.9,
    reviewCount: 312,
    originalPrice: 90,
    adultPrice: 45,
    childPrice: 45,
    duration: '8 Jam',
    difficulty: 'Sedang (Medium)',
    ageLimit: 'Minimal 7 tahun, Maksimal 65 tahun',
    transportOption: 'Shared atau Private Transportation',
    operationalLocation: 'Kuber Bali Adventure, Ubud, Bali',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787742311/70f55d1b-2b8a-405e-a7d2-785753aa5351.png',
    highlights: [
      "Feel the adrenaline rush as you ride through Bali's lush tropical forests",
      'Traverse diverse landscapes, including dense forests and clear rivers',
      "Capture the beauty of Bali's untouched nature on a thrilling ATV ride",
      'Enjoy a complimentary lunch at a scenic restaurant after your adventure',
      'Benefit from the expertise of professional guides who prioritize your safety'
    ],
    itinerary: [
      {
        time: '07:00',
        title: 'Pick-up services at your hotel with private transportation',
        description: 'Our English speaking driver will pick up at lobby hotel as mentioned on booking detail, please provide Traveler Name as hotel booking to be easy and contact Person if any possibility.'
      },
      {
        time: '08:00',
        title: 'Arrive at Location and General Briefing',
        description: 'Once on arrival enjoy some cup of tea or coffee while take attention to expert river guide general instruction what should to do and not to do along the road.'
      },
      {
        time: '08:30',
        title: '1,5 Hours Off Road Adventure of ATV Ride',
        description: 'After a safety briefing and training session, put on your protective gear and set off on your ATV adventure. Traverse diverse landscapes, including dense forests, secret tunnels, and clear rivers. Capture the beauty of Bali\'s untouched nature as you ride through some of the island\'s most breathtaking locations.'
      },
      {
        time: '13:30',
        title: 'Lunch menu at the restaurant while enjoy the green hills and rice fields',
        description: 'Lunch provided at Restaurant with some view of green hills and rice field.'
      },
      {
        time: '14:30',
        title: 'Drive back to hotel',
        description: 'Drive back to hotel and Thank You very much for your kindly to book this trip.'
      }
    ],
    inclusions: [
      'Air-conditioned transport service',
      'ATV Ride ( Single or Tandem )',
      'Coffee or Tea on arrival',
      'Buffet Lunch with variety menu',
      'Safety-approved ATV equipment',
      'Professional ATV Trainer',
      'Towels (Recommended to bring your own towel)',
      'Shower, and toilet facilities',
      'Insurance coverage'
    ],
    exclusions: [
      'Extra Money for any purchasing on the rest spot area',
      'Photo or Video by professional photography available to purchase on the spot',
      'Other additional expenses',
      'Souvenir and Tipping'
    ],
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'surya-bintang-rafting': {
    id: 'surya-bintang-rafting',
    title: 'Ubud Rafting at Ayung River by Surya Bintang Adventure',
    badge: '77% OFF SUPER PROMO',
    tagline: 'Sungai Ayung Payangan, Gianyar • 12 KM Rafting (29 Titik Jeram)',
    rating: 4.8,
    reviewCount: 290,
    originalPrice: 75,
    adultPrice: 17,
    childPrice: 13,
    duration: '8 Jam',
    difficulty: 'Medium',
    ageLimit: 'Minimal 7 tahun, Maksimal 60 tahun',
    transportOption: 'Shared atau Private Transportation',
    operationalLocation: 'Jl. Raya Payangan, Melinggih Kelod, Kec. Payangan, Kabupaten Gianyar, Bali 80572, Indonesia',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063019/398e70aa-ea11-449f-a279-6ed8e832b74b.png',
    highlights: [
      'Menikmati keseruan arung jeram di aliran sungai deras',
      'Menikmati keindahan pemandangan alam khas Bali',
      'Didampingi pemandu sungai berpengalaman',
      'Dilengkapi peralatan berstandar internasional'
    ],
    itinerary: [
      {
        time: '07:30',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan menggunakan transportasi pribadi oleh pengemudi berbahasa Inggris di lobi hotel.'
      },
      {
        time: '09:00',
        title: 'Tiba di Lokasi & Briefing Singkat',
        description: 'Menikmati teh atau kopi hangat sambil mendengarkan instruksi keselamatan dari pemandu sungai.'
      },
      {
        time: '10:45',
        title: 'Mulai Petualangan Rafting',
        description: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram berdurasi sekitar 2,5 hingga 3 jam.'
      },
      {
        time: '13:15',
        title: 'Makan Siang',
        description: 'Menikmati hidangan makan siang buffet di restoran dengan pemandangan bukit hijau dan petak sawah.'
      },
      {
        time: '14:00',
        title: 'Kembali ke Hotel',
        description: 'Perjalanan kembali menuju hotel tempat menginap.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang / Basahan', subtitle: 'Swim wear', icon: 'swim' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Sunscreen', subtitle: 'Tabir Surya', icon: 'sun' }
    ]
  },

  'bali-dewata-rafting': {
    id: 'bali-dewata-rafting',
    title: 'Ubud Rafting Adventure at Ayung River by Bali Dewata',
    badge: '53% OFF EXCLUSIVE',
    tagline: 'Sungai Ayung Ubud • 12 KM Rafting (29 Titik Jeram) & Pemandu Berpengalaman',
    rating: 4.9,
    reviewCount: 310,
    originalPrice: 75,
    adultPrice: 35,
    childPrice: 25,
    duration: '8 Jam',
    difficulty: 'Medium',
    ageLimit: 'Minimal 7 tahun, Maksimal 65 tahun',
    transportOption: 'Shared atau Private Transportation',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063184/31bbe6f8-14e4-48f0-9bf8-8506d9091642.png',
    highlights: [
      'Rasakan sensasi menerjang jeram sungai',
      'Menikmati perjalanan menyusuri pemandangan alam khas Bali yang indah',
      'Didampingi pemandu sungai berpengalaman',
      'Dilengkapi peralatan berstandar internasional'
    ],
    itinerary: [
      {
        time: '07:30',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan menggunakan transportasi pribadi oleh pengemudi berbahasa Inggris di lobi hotel.'
      },
      {
        time: '09:00',
        title: 'Tiba di Lokasi & Briefing Singkat',
        description: 'Menikmati secangkir teh atau kopi sambil mendengarkan instruksi keselamatan dari pemandu sungai.'
      },
      {
        time: '10:45',
        title: 'Mulai Petualangan Rafting',
        description: 'Pengarungan Sungai Ayung sepanjang 12 km dengan 29 titik jeram berdurasi sekitar 2,5 hingga 3 jam di sungai.'
      },
      {
        time: '13:15',
        title: 'Makan Siang',
        description: 'Menikmati hidangan makan siang di restoran dengan pemandangan bukit hijau dan petak sawah.'
      },
      {
        time: '14:00',
        title: 'Kembali ke Hotel',
        description: 'Perjalanan kembali menuju hotel tempat menginap.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang / Basahan', subtitle: 'Swim wear', icon: 'swim' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Sunscreen', subtitle: 'Tabir Surya', icon: 'sun' }
    ]
  },

  'water-sport-beaches-uluwatu-dinner': {
    id: 'water-sport-beaches-uluwatu-dinner',
    title: 'Water Sport – Beaches – Uluwatu Temple – Beach Dinner',
    badge: '66% OFF BEST VALUE',
    tagline: 'Tanjung Benoa Watersport • Pantai Padang Padang • Pura Luhur Uluwatu • Jimbaran Seafood Dinner',
    rating: 4.9,
    reviewCount: 285,
    originalPrice: 95,
    adultPrice: 32,
    childPrice: 15,
    duration: '8 Jam',
    difficulty: 'Easy (Mudah)',
    ageLimit: 'Semua Umur / Cocok untuk Keluarga',
    transportOption: 'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir',
    operationalLocation: 'Tanjung Benoa, Pantai Padang Padang, Pura Uluwatu & Teluk Jimbaran, Bali',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
    highlights: [
      'Menikmati aktivitas olahraga air (water sports) di Pantai Tanjung Benoa dengan gratis Banana Boat',
      'Mengeksplorasi Pantai Padang Padang yang terkenal dengan tebing batu dan tangga unik',
      'Mengunjungi Pura Luhur Uluwatu di atas tebing 70m dan menyaksikan pertunjukan Tari Kecak saat sunset',
      'Menikmati santap malam boga laut (seafood dinner) romantis di tepi pantai Teluk Jimbaran'
    ],
    itinerary: [
      {
        time: '08:30',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di lobby hotel dengan kendaraan pribadi oleh pengemudi berbahasa Inggris.'
      },
      {
        time: '09:00',
        title: 'Water Sports di Pantai Tanjung Benoa',
        description: 'Menikmati aktivitas olahraga air (water sports) di Pantai Tanjung Benoa (Termasuk gratis Banana Boat).'
      },
      {
        time: '13:30',
        title: 'Eksplorasi Pantai Padang Padang',
        description: 'Mengeksplorasi Pantai Padang Padang yang terkenal dengan tebing batu dan tangga yang unik.'
      },
      {
        time: '15:00',
        title: 'Pura Luhur Uluwatu & Tari Kecak Sunset',
        description: 'Mengunjungi Pura Luhur Uluwatu yang berada di atas tebing setinggi 70 meter di atas Samudra Hindia. Menyaksikan Pertunjukan Tari Kecak saat matahari terbenam (sunset).'
      },
      {
        time: '17:00',
        title: 'Seafood Dinner di Pantai Teluk Jimbaran',
        description: 'Menikmati santap malam boga laut (seafood dinner) di tepi pantai Teluk Jimbaran.'
      },
      {
        time: '19:00',
        title: 'Perjalanan Kembali Menuju Hotel',
        description: 'Perjalanan kembali menuju hotel tempat menginap.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swim wear', icon: 'swim' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'nusa-penida-east-trip': {
    id: 'nusa-penida-east-trip',
    title: 'NUSA PENIDA ISLAND – EAST TRIP',
    badge: '40% OFF POPULAR',
    tagline: 'Nusa Penida East • Fast Boat Sanur • Diamond Beach • Atuh Beach • Tree House & Teletubbies Hill',
    rating: 4.9,
    reviewCount: 340,
    originalPrice: 75,
    adultPrice: 45,
    childPrice: 35,
    duration: '10 Jam (Trip Harian, 08:00 - 22:00)',
    difficulty: 'Easy (Mudah)',
    ageLimit: 'Semua Umur / Cocok untuk Keluarga',
    transportOption: 'Antar-jemput hotel & Transportasi ber-AC di Nusa Penida + Fast Boat PP',
    operationalLocation: 'Pelabuhan Sanur & Nusa Penida Timur (Diamond Beach, Atuh, Tree House, Teletubbies Hill)',
    pickupAreas: ['Ubud', 'Sanur', 'Kuta', 'Seminyak', 'Legian', 'Nusa Dua', 'Jimbaran', 'Pecatu', 'Canggu', 'Tanjung Benoa'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
    highlights: [
      'Penyeberangan Speed Boat cepat ~45 menit dari Pelabuhan Sanur ke Nusa Penida',
      'Eksplorasi Diamond Beach dengan tebing terjal, air pirus, dan tangga ikonik',
      'Atuh Beach yang tenang diapit tebing tinggi dan panorama dramatis',
      'Spot foto Tree House & Thousand Island View serta hamparan bukit Teletubbies Hill'
    ],
    itinerary: [
      {
        time: '06:30 - 07:00',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di hotel dengan transportasi berbagi (share transport) menuju Pelabuhan Sanur.'
      },
      {
        time: '07:30',
        title: 'Tiba di Pelabuhan Sanur & Registrasi',
        description: 'Tiba dan pendaftaran di Pelabuhan Sanur, dan pengambilan boarding pass.'
      },
      {
        time: '08:00',
        title: 'Keberangkatan Speed Boat ke Nusa Penida',
        description: 'Keberangkatan dari Pelabuhan Sanur menuju Nusa Penida menggunakan Speed Boat (~45 menit perjalanan laut).'
      },
      {
        time: '09:00',
        title: 'Tiba di Nusa Penida & Eksplorasi Wisata Timur',
        description: 'Tiba di Nusa Penida, bertemu pengemudi (island guide), dan mengunjungi destinasi: Diamond Beach (pantai pasir putih tebing terjal & air laut pirus), Atuh Beach (pantai tenang tebing tinggi), Tree House & Thousand Island View (panorama pulau-pulau kecil), serta Teletubbies Hill (perbukitan hijau bergelombang). Makan siang lezat disajikan di tengah perjalanan.'
      },
      {
        time: '16:00',
        title: 'Perjalanan Kembali ke Sanur dengan Speed Boat',
        description: 'Perjalanan kembali dari Pelabuhan Nusa Penida menuju Pelabuhan Sanur dengan Speed Boat.'
      },
      {
        time: '17:00',
        title: 'Tiba di Sanur & Pengantaran ke Hotel',
        description: 'Tiba di Pelabuhan Sanur dan diantar kembali menuju hotel tempat menginap.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swim wear', icon: 'swim' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'nusa-penida-west-trip': {
    id: 'nusa-penida-west-trip',
    title: 'NUSA PENIDA ISLAND – WEST TRIP',
    badge: '40% OFF POPULAR',
    tagline: 'Nusa Penida West • Fast Boat Sanur • Angel’s Billabong • Broken Beach • Kelingking Beach • Crystal Bay',
    rating: 4.9,
    reviewCount: 385,
    originalPrice: 75,
    adultPrice: 45,
    childPrice: 35,
    duration: '10 Jam',
    difficulty: 'Easy (Mudah)',
    ageLimit: 'Semua Umur / Cocok untuk Keluarga',
    transportOption: 'Layanan antar-jemput pulang-pergi dari/ke hotel + Transportasi ber-AC di Nusa Penida & Speed Boat PP',
    operationalLocation: 'Pelabuhan Sanur & Nusa Penida Barat (Angel’s Billabong, Broken Beach, Kelingking Beach, Crystal Bay)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
    highlights: [
      'Penyeberangan Speed Boat cepat ~45 menit dari Pelabuhan Sanur menuju Nusa Penida',
      'Kolam renang alami di tepi laut dengan air jernih dan tebing dramatis di Angel’s Billabong',
      'Area pantai unik dengan tebing melengkung alami (arch) dan celah laut di Broken Beach',
      'Destinasi ikonik tebing kepala T-Rex Kelingking Beach & santai berenang/snorkeling di Crystal Bay'
    ],
    itinerary: [
      {
        time: '06:30 - 07:00',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di hotel dengan transportasi bersama.'
      },
      {
        time: '07:30',
        title: 'Tiba di Pelabuhan Sanur & Registrasi',
        description: 'Tiba dan registrasi di Pelabuhan Sanur, pengambilan boarding pass.'
      },
      {
        time: '08:00',
        title: 'Keberangkatan Speed Boat ke Nusa Penida',
        description: 'Keberangkatan dari Pelabuhan Sanur ke Nusa Penida dengan Speed Boat (~45 menit).'
      },
      {
        time: '09:00',
        title: 'Tiba di Nusa Penida & Eksplorasi Destinasi Barat',
        description: 'Tiba di Nusa Penida, bertemu driver (sekaligus pemandu), lalu mengunjungi destinasi utama dan makan siang di perjalanan (lunch enroute): Angel’s Billabong (kolam renang alami tepi laut dengan air jernih & tebing dramatis), Broken Beach (tebing melengkung alami & celah laut unik), Kelingking Beach (tebing ikonik kepala T-Rex & pemandangan laut biru), dan Crystal Bay (pantai pasir putih air tenang untuk bersantai, berenang, dan snorkeling).'
      },
      {
        time: '16:00',
        title: 'Perjalanan Kembali ke Sanur dengan Speed Boat',
        description: 'Kembali ke Pelabuhan Sanur menggunakan speed boat.'
      },
      {
        time: '17:00',
        title: 'Tiba di Sanur & Pengantaran Kembali ke Hotel',
        description: 'Tiba di Sanur dan pengantaran kembali ke hotel.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swim wear', icon: 'swim' },
      { title: 'Pakaian Ganti', subtitle: 'Change Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'gate-of-heaven-water-palace-waterfall': {
    id: 'gate-of-heaven-water-palace-waterfall',
    title: 'Gate Of Heaven Water Palace Hidden Gems Waterfall',
    badge: '66% OFF BESTSELLER',
    tagline: 'Gate Of Heaven (Candi Lempuyang) • Water Palace (Tirta Gangga) • Hidden Gems Waterfall (Tukad Cepung) • Bali Heritage',
    rating: 4.9,
    reviewCount: 420,
    originalPrice: 88,
    adultPrice: 30,
    childPrice: 15,
    duration: '10 Jam',
    difficulty: 'Sedang (Medium)',
    ageLimit: 'Usia 12 - 60 Tahun',
    transportOption: 'Transportasi pribadi ber-AC dengan pengemudi berbahasa Inggris',
    operationalLocation: 'Karangasem & Bangli (Pura Lempuyang, Tirta Gangga Water Palace, Tukad Cepung Waterfall)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png',
    highlights: [
      'Spot foto ikonik Gerbang Surga (Gate of Heaven) Candi Lempuyang berlatar Gunung Agung',
      'Menjelajahi istana air bersejarah Tirta Gangga karya King of Karangasem dengan taman asri & kolam ikan koi',
      'Treking ringan menyusuri ngarai & sungai untuk melihat air terjun unik Tukad Cepung di dalam tebing batu',
      'Transportasi pribadi ber-AC dengan pengemudi ramah berbahasa Inggris, BBM & biaya parkir'
    ],
    itinerary: [
      {
        time: '06:00',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di lobby hotel dengan transportasi pribadi ber-AC dan pengemudi berbahasa Inggris.'
      },
      {
        time: '08:30',
        title: 'Gate of Heaven (Candi Lempuyang)',
        description: 'Mengunjungi Gerbang Surga yang ikonik dengan pemandangan latar Gunung Agung.'
      },
      {
        time: '11:00',
        title: 'Water Palace (Tirta Gangga)',
        description: 'Menjelajahi istana air bersejarah karya King of Karangasem yang dipenuhi taman asri dan kolam ikan.'
      },
      {
        time: '12:30',
        title: 'Hidden Gems Waterfall (Tukad Cepung)',
        description: 'Treking ringan menyusuri ngarai dan sungai untuk melihat air terjun unik di dalam tebing tebing batu.'
      },
      {
        time: '17:00',
        title: 'Kembali ke Hotel',
        description: 'Perjalanan pulang menuju hotel tempat Anda menginap.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swimwear', icon: 'shirt' },
      { title: 'Pakaian Ganti', subtitle: 'Change of Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'amazing-waterfall-monkey-forest': {
    id: 'amazing-waterfall-monkey-forest',
    title: 'Amazing Waterfall and Monkey Forest',
    badge: '64% OFF POPULAR',
    tagline: 'Tegenungan Waterfall (~25m) • Ubud Sacred Monkey Forest Sanctuary • Kanto Lampo Waterfall • Bali Nature & Culture',
    rating: 4.9,
    reviewCount: 395,
    originalPrice: 84,
    adultPrice: 30,
    childPrice: 15,
    duration: '10 Jam',
    difficulty: 'Medium',
    ageLimit: 'Semua Umur / Cocok untuk Keluarga',
    transportOption: 'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir dengan pengemudi ramah',
    operationalLocation: 'Gianyar & Ubud (Air Terjun Tegenungan, Ubud Monkey Forest Sanctuary, Air Terjun Kanto Lampo)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
    highlights: [
      'Jelajahi Air Terjun Tegenungan (tinggi ~25m, cocok untuk berenang dan bersantai)',
      'Mengunjungi Ubud Monkey Forest Sanctuary (melihat ratusan kera ekor panjang dan menikmati pemandangan alam/budaya Bali)',
      'Mengunjungi Air Terjun Kanto Lampo (menikmati kesegaran air terjun tebing batu yang indah)',
      'Transportasi pribadi ber-AC + Bahan bakar & Biaya parkir'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di lobby hotel dengan transportasi pribadi ber-AC.'
      },
      {
        time: '09:00',
        title: 'Jelajahi Air Terjun Tegenungan',
        description: 'Jelajahi Air Terjun Tegenungan (tinggi ~25m, cocok untuk berenang dan bersantai).'
      },
      {
        time: '11:30',
        title: 'Ubud Monkey Forest Sanctuary',
        description: 'Mengunjungi Ubud Monkey Forest Sanctuary (melihat ratusan kera ekor panjang dan menikmati pemandangan alam/budaya Bali).'
      },
      {
        time: '13:40',
        title: 'Air Terjun Kanto Lampo',
        description: 'Mengunjungi Air Terjun Kanto Lampo (menikmati kesegaran air terjun tebing batu yang indah).'
      },
      {
        time: '17:00',
        title: 'Kembali ke Hotel',
        description: 'Perjalanan kembali ke hotel.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swimwear', icon: 'shirt' },
      { title: 'Baju Ganti', subtitle: 'Change of Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'adventure-bali-swing-nungnung-ulundanu-lekeleke': {
    id: 'adventure-bali-swing-nungnung-ulundanu-lekeleke',
    title: 'Adventure of Bali Swing Nungnung Waterfall Ulundanu Temple Leke Leke Waterfall',
    badge: '66% OFF BESTSELLER',
    tagline: 'Bali Swing Pioneer • Nungnung Waterfall (50m) • Ulun Danu Beratan Lake Temple • Leke Leke Waterfall • Bedugul & Ubud',
    rating: 4.9,
    reviewCount: 410,
    originalPrice: 88,
    adultPrice: 30,
    childPrice: 15,
    duration: '10 Jam',
    difficulty: 'Sedang (Medium)',
    ageLimit: 'Semua Umur / Cocok untuk Keluarga',
    transportOption: 'Transportasi ber-AC pribadi dengan sopir berbahasa Inggris',
    operationalLocation: 'Bedugul & Ubud (Bali Swing Bongkasa, Air Terjun Nungnung, Pura Ulun Danu Beratan, Air Terjun Leke Leke)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
    highlights: [
      'Bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai',
      'Mengunjungi Air Terjun Nungnung (menuruni sekitar 300 anak tangga menuju air terjun setinggi 50 meter)',
      'Mengunjungi Pura Ulun Danu Beratan di tepi Danau Beratan, Bedugul (termasuk opsi makan siang di restoran lokal)',
      'Trekking singkat dan menjelajahi Air Terjun Leke Leke yang asri dan menenangkan'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Penjemputan di Lobi Hotel',
        description: 'Penjemputan di lobi hotel menggunakan transportasi pribadi ber-AC.'
      },
      {
        time: '09:00',
        title: 'Bermain Wahana Bali Swing',
        description: 'Bermain wahana ayunan di Bali Swing dengan pemandangan hutan, sawah, dan sungai.'
      },
      {
        time: '11:00',
        title: 'Air Terjun Nungnung',
        description: 'Mengunjungi Air Terjun Nungnung (menuruni sekitar 300 anak tangga menuju air terjun setinggi 50 meter).'
      },
      {
        time: '12:30',
        title: 'Pura Ulun Danu Beratan & Makan Siang',
        description: 'Mengunjungi Pura Ulun Danu Beratan di tepi Danau Beratan, Bedugul (termasuk opsi makan siang di restoran lokal dengan pemandangan lembah).'
      },
      {
        time: '14:30',
        title: 'Trekking & Air Terjun Leke Leke',
        description: 'Trekking singkat dan menjelajahi Air Terjun Leke Leke.'
      },
      {
        time: '17:00',
        title: 'Perjalanan Kembali ke Hotel',
        description: 'Perjalanan kembali menuju hotel tempat Anda menginap.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swimwear', icon: 'shirt' },
      { title: 'Pakaian Ganti', subtitle: 'Change of Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'discover-waterfall-rice-terrace-monkey-forest': {
    id: 'discover-waterfall-rice-terrace-monkey-forest',
    title: 'Discover Waterfall Rice Terrace and Monkey Forest',
    badge: '70% OFF BEST VALUE',
    tagline: 'Barong & Keris Dance • Celuk Art Village • Tegenungan Waterfall • Tegalalang Rice Terrace • Ubud Sacred Monkey Forest',
    rating: 4.9,
    reviewCount: 450,
    originalPrice: 84,
    adultPrice: 25,
    childPrice: 10,
    duration: '8 Jam',
    difficulty: 'Easy (Mudah)',
    ageLimit: 'Usia 12 - 60 Tahun',
    transportOption: 'Transportasi pribadi ber-AC + Pengemudi berbahasa Inggris',
    operationalLocation: 'Batubulan, Celuk, Sukawati, Tegalalang & Ubud (Tari Barong, Desa Seni, Air Terjun Tegenungan, Sawah Tegalalang, Monkey Forest)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324453/fdf23903-3780-458b-a52f-e8402aafd246.png',
    highlights: [
      'Menyaksikan Pertunjukan Tari Barong & Keris (Simbol pertempuran antara kebaikan dan kejahatan)',
      'Mengunjungi Desa Kerajinan Seni (Kerajinan perak, emas, ukiran kayu, dan tenun batik)',
      'Mengunjungi dan menikmati pemandangan Air Terjun Tegenungan (Tinggi ~25m, bisa berenang)',
      'Mengunjungi Sawah Terasering Tegalalang & Cagar Alam Ubud Monkey Forest habitat kera ekor panjang'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di hotel menggunakan transportasi pribadi dengan pengemudi berbahasa Inggris.'
      },
      {
        time: '09:00',
        title: 'Pertunjukan Tari Barong & Keris',
        description: 'Menyaksikan Pertunjukan Tari Barong & Keris (Simbol pertempuran abadi antara kebaikan dan kejahatan).'
      },
      {
        time: '10:15',
        title: 'Mengunjungi Desa Kerajinan Seni',
        description: 'Mengunjungi Desa Kerajinan Seni (Kerajinan perak, emas, ukiran kayu, dan tenun batik khas Bali).'
      },
      {
        time: '11:30',
        title: 'Air Terjun Tegenungan',
        description: 'Mengunjungi dan menikmati pemandangan Air Terjun Tegenungan (Tinggi ~25m, cocok untuk berenang dan bersantai).'
      },
      {
        time: '13:30',
        title: 'Sawah Terasering Tegalalang',
        description: 'Mengunjungi Sawah Terasering Tegalalang (Lanskap sawah berundak ikonik dan budaya bertani tradisional).'
      },
      {
        time: '15:00',
        title: 'Ubud Monkey Forest',
        description: 'Mengunjungi Ubud Monkey Forest (Cagar alam hutan lindung habitat kera ekor panjang yang ramah).'
      },
      {
        time: '16:00',
        title: 'Pengantaran Kembali ke Hotel',
        description: 'Pengantaran pulang kembali ke hotel tempat Anda menginap.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swimwear', icon: 'shirt' },
      { title: 'Pakaian Ganti', subtitle: 'Change of Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'ubud-monkey-forest-and-kintamani-highland': {
    id: 'ubud-monkey-forest-and-kintamani-highland',
    title: 'Ubud Monkey Forest and Kintamani Highland',
    badge: '69% OFF POPULAR',
    tagline: 'Barong & Keris Dance • Art Village • Tirta Empul Holy Spring • Kintamani Mount Batur • Ubud Monkey Forest',
    rating: 4.9,
    reviewCount: 432,
    originalPrice: 80,
    adultPrice: 25,
    childPrice: 10,
    duration: '8 Jam (8 Hours)',
    difficulty: 'Easy (Mudah)',
    ageLimit: 'Semua Umur / Cocok untuk Keluarga',
    transportOption: 'Transportasi pribadi ber-AC dengan sopir berbahasa Inggris',
    operationalLocation: 'Batubulan, Celuk, Tampaksiring (Pura Tirta Empul), Kintamani Highland & Ubud Monkey Forest Sanctuary',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787377999/40079c3b-3b6b-4769-8cde-90b8e9aa1278.png',
    highlights: [
      'Sightseeing by Air Conditioned Private Transportation with English Speaking Driver',
      'Attending Bali Culture performance and local people talent',
      'Admire Culture Heritage and chance to get blessing',
      'Enjoy Mountain charm and fresh atmosphere',
      'Get close with animal at reserved forest'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Pick-up services at your hotel with private transportation',
        description: 'Our English speaking driver will pick up at lobby hotel as mentioned on booking detail, please provide Traveler Name as hotel booking to be easy and contact Person if any possibility.'
      },
      {
        time: '09:00',
        title: 'Watching Culture Performance of Barong and Keris Dance',
        description: 'Dancers wear elaborate costumes and masks, with the Barong often being portrayed by a large, ornate figure that is manipulated by several dancers. The dance typically features intricate movements, vibrant music, and storytelling elements, depicting the struggle between these two forces.'
      },
      {
        time: '10:15',
        title: 'Art Village of Silver and Gold crafting, Wood carving, Batik Weaving',
        description: 'Art Village where you can see talent people of Bali working for handycraft such silver and gold crafting, Wood carving, batik weaving.'
      },
      {
        time: '11:30',
        title: 'Visit Holy Spring Water Temple of Tirta Empul Temple',
        description: 'Visitors to Tirta Empul can participate in a purification ritual, where they bathe in the spring water believed to have healing properties. The temple features several bathing pools, each with spouts from which the holy water flows. The ritual involves a series of steps that promote spiritual cleansing and renewal.'
      },
      {
        time: '13:30',
        title: 'Kintamani Highland viewpoint of Mount Batur',
        description: 'The highland offers stunning vistas, with terraced rice fields and lush forests adding to the natural beauty. There are many viewpoints and cafes where visitors can enjoy the landscape while sampling local cuisine.'
      },
      {
        time: '15:00',
        title: 'Visit Monkey Forest Sanctuary',
        description: 'The sanctuary offers visitors the chance to observe the monkeys in their natural habitat, enjoy scenic walks, and learn about Balinese culture and ecology. Guided tours are available for those wanting a deeper understanding of the area.'
      },
      {
        time: '16:00',
        title: 'Drive back to hotel',
        description: 'Drive back to hotel and Thank You very much for your kindly to book this trip.'
      }
    ],
    inclusions: [
      'Air Conditioned Private Transportation with English Speaking Driver',
      'Experience English Speaking Guide or (Other Language with $25/Group additional Charge), if You book option package "All Inclusive Package Tour"',
      'Lunch, if You book option package "All Inclusive Package Tour"',
      'All Entrance Fee Ticket Including Balinese Culture Performance, if You book option package "All Inclusive Package Tour"',
      'Mineral Water',
      'Fuel and Parking Fee'
    ],
    exclusions: [
      'Other additional expenses',
      'Souvenir and Tipping'
    ],
    equipment: [
      { title: 'Pakaian Nyaman', subtitle: 'Comfortable Clothes', icon: 'shirt' },
      { title: 'Kamera / HP', subtitle: 'Camera / Phone', icon: 'camera' },
      { title: 'Uang Saku', subtitle: 'Pocket Money', icon: 'wallet' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'royal-family-palace-bedugul-tanah-lot': {
    id: 'royal-family-palace-bedugul-tanah-lot',
    title: 'Royal Family Palace – Bedugul Lake Temple – Tanah Lot Temple',
    badge: '66% OFF POPULAR',
    tagline: 'Mengwi Royal Palace • Ulundanu Beratan Temple • Handara Gate • Tanah Lot Sunset',
    rating: 4.9,
    reviewCount: 388,
    originalPrice: 85,
    adultPrice: 29,
    childPrice: 10,
    duration: '8 Hours (8 Jam)',
    difficulty: 'Easy (Mudah)',
    ageLimit: 'Semua Umur / Cocok untuk Keluarga',
    transportOption: 'Transportasi pribadi ber-AC dengan sopir berbahasa Inggris',
    operationalLocation: 'Mengwi (Pura Taman Ayun), Bedugul (Danau & Pura Ulun Danu Beratan, Handara Gate), & Tabanan (Pura Tanah Lot)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787378235/90a03b5d-8896-473b-9309-1095503d30ff.png',
    highlights: [
      'Sightseeing by Air Conditioned Private Transportation with English Speaking Driver',
      'Admire Culture Heritage with Nature Panoramic',
      'Enjoy Mountain charm and fresh atmosphere',
      'Get iconic instagramable spot or selfie'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Pick-up services at your hotel with private transportation',
        description: 'Our English speaking driver will pick up at lobby hotel as mentioned on booking detail, please provide Traveler Name as hotel booking to be easy and contact Person if any possibility'
      },
      {
        time: '09:00',
        title: 'Visit Kingdom Palace of Mengwi Kingdom',
        description: 'The palace features traditional Balinese architecture, with multi-tiered shrines called "meru" and serene gardens, ponds, and water features. It’s an important cultural site and is recognized as a UNESCO World Heritage Site. Visitors often admire its intricate carvings, lush greenery, and the tranquil atmosphere'
      },
      {
        time: '11:30',
        title: 'Visit Ulundanu Temple at shore of Beratan Lake in Bedugul',
        description: 'The temple is famous for its picturesque setting, with the backdrop of the lake and surrounding mountains creating a serene atmosphere. It features beautiful pagoda-like structures, lush gardens, and a unique floating appearance when the water level rises'
      },
      {
        time: '12:30',
        title: 'Taking Instagramable Picture at Handara Gate with Jungle Background',
        description: 'The gate itself features intricate carvings and is often framed by mist and vibrant greenery, making it a popular spot for photos. Visitors flock to capture the perfect shot, with the gate creating a picturesque frame for the surrounding landscape.'
      },
      {
        time: '16:30',
        title: 'Visit Tanah Lot Temple while waiting for sunset for the best picture',
        description: 'The temple is perched on a large rock formation, and during high tide, it appears to be floating on the water. This makes it a popular spot for photography, especially at sunset when the sky transforms into a palette of vibrant colors'
      },
      {
        time: '18:00',
        title: 'Drive back to hotel',
        description: 'Drive back to hotel and Thank You very much for your kindly to book this trip'
      }
    ],
    inclusions: [
      'Air Conditioned Private Transportation with English Speaking Driver',
      'Experience English Speaking Guide or (Other Language with $25/Group additional Charge), if You book option package "All Inclusive Package Tour"',
      'Lunch, if You book option package "All Inclusive Package Tour"',
      'All Entrance Fee Ticket, if You book option package "All Inclusive Package Tour"',
      'Mineral Water',
      'Fuel and Parking Fee'
    ],
    exclusions: [
      'Other additional expenses',
      'Souvenir and Tipping'
    ],
    equipment: [
      { title: 'Pakaian Nyaman', subtitle: 'Comfortable Clothes', icon: 'shirt' },
      { title: 'Kamera / HP', subtitle: 'Camera / Phone', icon: 'camera' },
      { title: 'Uang Saku', subtitle: 'Pocket Money', icon: 'wallet' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'explore-iconic-culture-heritage-twin-lake': {
    id: 'explore-iconic-culture-heritage-twin-lake',
    title: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour',
    badge: '68% OFF BESTSELLER',
    tagline: 'Ulun Danu Beratan • Handara Gate • Wanagiri Hidden Hills • Leke Leke Waterfall • Tanah Lot Sunset',
    rating: 4.9,
    reviewCount: 435,
    originalPrice: 93,
    adultPrice: 30,
    childPrice: 15,
    duration: '10 Jam',
    difficulty: 'Sedang (Medium)',
    ageLimit: 'Usia 10 – 65 Tahun',
    transportOption: 'Transportasi pribadi ber-AC dengan pengemudi berbahasa Inggris',
    operationalLocation: 'Bedugul, Buleleng & Tabanan (Candi Ulun Danu Beratan, Handara Gate, Wanagiri Hidden Hills, Air Terjun Leke Leke, Candi Tanah Lot)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324702/34b12cec-98fb-4209-ae84-305b09b6324c.png',
    highlights: [
      'Mengunjungi Candi Ulun Danu Beratan di tepi Danau Beratan dengan panorama pegunungan & pagoda khas Bali',
      'Berfoto di Handara Gate ikonik berlatar belakang perbukitan hijau tropis Bedugul',
      'Menikmati keindahan Twin Lake (Buyan & Tamblingan) di Wanagiri Hidden Hills dengan spot foto ayunan',
      'Trekking Air Terjun Leke Leke (50m) & menikmati matahari terbenam (sunset) magis di Candi Tanah Lot'
    ],
    itinerary: [
      {
        time: '08:00',
        title: 'Penjemputan di Hotel',
        description: 'Dijemput oleh pengemudi di lobi hotel dengan transportasi pribadi ber-AC.'
      },
      {
        time: '09:30',
        title: 'Candi Ulun Danu Beratan',
        description: 'Mengunjungi candi di tepi Danau Beratan dengan pemandangan pegunungan dan struktur pagoda khas Bali.'
      },
      {
        time: '11:00',
        title: 'Handara Gate',
        description: 'Berfoto di gerbang ukiran Bali yang ikonik dengan latar belakang hutan dan pemandangan hijau.'
      },
      {
        time: '11:30',
        title: 'Wanagiri Hidden Hills',
        description: 'Menikmati pemandangan Danau Buyan & Tamblingan dari ketinggian serta spot foto ayunan (Bali Swing).'
      },
      {
        time: '13:30',
        title: 'Air Terjun Leke Leke',
        description: 'Trekking melintasi jalur alam menuju air terjun setinggi 50 meter yang dikelilingi pemandangan hijau berserta kolam alami.'
      },
      {
        time: '16:30',
        title: 'Candi Tanah Lot',
        description: 'Mengunjungi candi di atas batu karang tepi laut untuk menikmati pemandangan matahari terbenam (sunset).'
      },
      {
        time: '17:00',
        title: 'Selesai & Pengantaran ke Hotel',
        description: 'Pengantaran kembali menuju hotel tempat Anda menginap.'
      }
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
    equipment: [
      { title: 'Handuk', subtitle: 'Towel', icon: 'shirt' },
      { title: 'Pakaian Renang', subtitle: 'Swimwear', icon: 'shirt' },
      { title: 'Pakaian Ganti', subtitle: 'Change of Clothes', icon: 'shirt' },
      { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ]
  },

  'adventure-bali-sunrise-trekking-mount-batur': {
    id: 'adventure-bali-sunrise-trekking-mount-batur',
    title: 'Adventure Bali Sunrise Trekking at Mount Batur',
    badge: '44% OFF POPULAR',
    tagline: 'Mount Batur Sunrise Summit (1.717 mdpl) • Active Volcano Crater • Breakfast Above Clouds • Coffee Plantation',
    rating: 4.9,
    reviewCount: 520,
    originalPrice: 90,
    adultPrice: 50,
    childPrice: 50,
    duration: '8 Jam',
    difficulty: 'Hard (Tinggi)',
    ageLimit: 'Usia 17 – 55 Tahun (Kondisi Fisik Sehat)',
    transportOption: 'Penjemputan di hotel dengan transportasi pribadi',
    operationalLocation: 'Kintamani, Bangli (Puncak Gunung Batur 1.717 mdpl, Kawah Utama, Perkebunan Kopi)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
    highlights: [
      'Pendakian dini hari menuju puncak Gunung Batur (1.717 mdpl) dipandu pengemudi pribadi & pemandu trekking lokal',
      'Menyaksikan pemandangan spektakuler matahari terbit (Sunrise) di atas lautan awan',
      'Sarapan ringan di puncak gunung (roti pisang kukus uap vulkanik, telur rebus uap vulkanik, teh/kopi/cokelat panas, buah segar, biskuit)',
      'Jelajah kawah utama dan turun lewat jalur berbeda, serta kunjungan ke perkebunan kopi (opsional/gratis)'
    ],
    itinerary: [
      {
        time: '01:30 – 01:45',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di hotel dengan transportasi pribadi menuju titik awal pendakian.'
      },
      {
        time: '03:45',
        title: 'Tiba di Titik Awal & Briefing',
        description: 'Tiba di titik awal pendakian dan perkenalan dengan pemandu lokal.'
      },
      {
        time: '03:50',
        title: 'Memulai Pendakian',
        description: 'Memulai pendakian menuju puncak Gunung Batur (membutuhkan waktu sekitar 2 jam).'
      },
      {
        time: '05:50',
        title: 'Puncak Gunung Batur, Sunrise & Sarapan',
        description: 'Tiba di puncak gunung (1.717 mdpl), menikmati pemandangan matahari terbit yang memukau, dan menikmati sarapan ringan.'
      },
      {
        time: '07:00',
        title: 'Jelajah Kawah Utama & Perjalanan Turun',
        description: 'Jelajah kawah utama dan perjalanan turun menyusuri lereng lewat jalur yang berbeda.'
      },
      {
        time: '09:00',
        title: 'Tiba di Area Parkir Mobil',
        description: 'Tiba kembali di area parkir mobil untuk beristirahat sejenak.'
      },
      {
        time: '10:00',
        title: 'Kunjungan ke Perkebunan Kopi',
        description: 'Kunjungan ke perkebunan kopi tradisional Bali (opsional / gratis).'
      },
      {
        time: '10:30',
        title: 'Perjalanan Kembali ke Hotel',
        description: 'Perjalanan pulang kembali menuju hotel tempat Anda menginap.'
      }
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
    equipment: [
      { title: 'Sepatu Gunung / Hiking', subtitle: 'Hiking Shoes', icon: 'shirt' },
      { title: 'Jaket & Celana Panjang', subtitle: 'Warm Jacket & Pants', icon: 'shirt' },
      { title: 'Kaos Cadangan & Topi', subtitle: 'Extra Clothes & Hat', icon: 'shirt' },
      { title: 'Tabir Surya & Kamera', subtitle: 'Sunblock & Camera', icon: 'sun' }
    ]
  },

  'adventure-batur-sunrise-hot-spring-lunch': {
    id: 'adventure-batur-sunrise-hot-spring-lunch',
    title: 'Adventure Bali Sunrise Trekking at Mount Batur and Hot Spring Water Refreshing with Lunch',
    badge: '77% OFF SUPER DEAL',
    tagline: 'Mount Batur Sunrise Summit • Natural Volcanic Hot Spring • Buffet Lunch • Kintamani',
    rating: 4.9,
    reviewCount: 480,
    originalPrice: 110,
    adultPrice: 25,
    childPrice: 25,
    duration: '8 Jam',
    difficulty: 'Hard (Memerlukan Tingkat Kebugaran Sedang)',
    ageLimit: 'Usia 17 – 55 Tahun',
    transportOption: 'Penjemputan di hotel/villa/guest house/AirBnB dengan transportasi pribadi',
    operationalLocation: 'Kintamani, Bangli (Puncak Gunung Batur 1.717 mdpl, Batur Natural Hot Spring, Restoran Kaldera)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325801/600b4aa7-95a1-4f0e-b5b1-88158d4364ed.png',
    highlights: [
      'Pendakian malam menuju puncak Gunung Batur (1.717 mdpl) dipandu pemandu pendakian lokal profesional',
      'Menyaksikan pemandangan matahari terbit spektakuler dan sarapan ringan di puncak gunung',
      'Menjelajahi kawah utama dan turun melalui jalur lereng yang berbeda',
      'Relaksasi berendam di Pemandian Air Panas Alami (Natural Hot Spring) dan menikmati hidangan makan siang'
    ],
    itinerary: [
      {
        time: '01:30 – 02:30',
        title: 'Penjemputan di Hotel / Villa / AirBnB',
        description: 'Penjemputan di hotel/villa/guest house/AirBnB dengan transportasi pribadi ber-AC.'
      },
      {
        time: '03:45',
        title: 'Tiba di Titik Awal & Briefing',
        description: 'Tiba di titik awal hiking dan perkenalan dengan pemandu lokal.'
      },
      {
        time: '03:50',
        title: 'Memulai Pendakian ke Puncak',
        description: 'Memulai pendakian ke puncak Gunung Batur (membutuhkan waktu sekitar 2 jam).'
      },
      {
        time: '05:50',
        title: 'Puncak Gunung, Sunrise & Sarapan',
        description: 'Tiba di puncak, menikmati pemandangan matahari terbit dan sarapan ringan uap vulkanik.'
      },
      {
        time: '07:00',
        title: 'Jelajah Kawah Utama & Jalur Turun',
        description: 'Menjelajahi kawah utama dan turun melalui jalur yang berbeda.'
      },
      {
        time: '09:00',
        title: 'Tiba di Finish Line & Menuju Hot Spring',
        description: 'Tiba di titik garis akhir (finish) lalu menuju ke Pemandian Air Panas Alami (Natural Hot Spring).'
      },
      {
        time: '09:30',
        title: 'Relaksasi Air Panas Alami & Makan Siang',
        description: 'Menikmati relaksasi berendam di air panas alami dan makan siang.'
      },
      {
        time: '13:00',
        title: 'Perjalanan Kembali ke Hotel',
        description: 'Perjalanan pulang kembali menuju hotel tempat Anda menginap.'
      }
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
    equipment: [
      { title: 'Sepatu Mendaki / Hiking', subtitle: 'Hiking Shoes', icon: 'shirt' },
      { title: 'Jaket & Celana Panjang', subtitle: 'Jacket & Pants', icon: 'shirt' },
      { title: 'Pakaian Ganti & Topi', subtitle: 'Change Clothes & Hat', icon: 'shirt' },
      { title: 'Kamera & Tabir Surya', subtitle: 'Camera & Sunblock', icon: 'sun' }
    ]
  },

  'mount-agung-adventure-sunrise-trekking': {
    id: 'mount-agung-adventure-sunrise-trekking',
    title: 'Mount Agung Adventure Bali Sunrise Trekking',
    badge: '36% OFF SACRED PEAK',
    tagline: 'Bali Highest Peak (3.033m) • Sacred Volcano Summit • 2 Trekking Routes (Pasar Agung & Besakih) • Buffet Lunch',
    rating: 4.9,
    reviewCount: 390,
    originalPrice: 125,
    adultPrice: 80,
    childPrice: 80,
    duration: '12 Jam',
    difficulty: 'Hard to Extreme',
    ageLimit: 'Usia 17 – 55 Tahun (Insurance are not covered)',
    transportOption: 'Private Transport (Kuta, Legian, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud, Padang Bai, Candidasa, Amed)',
    operationalLocation: 'Karangasem (Puncak Gunung Agung 3.033 mdpl via Pasar Agung / Besakih)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud', 'Padang Bai', 'Candidasa', 'Amed'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325945/07eb4a26-cfc3-4b69-b2bd-be2d633a43c4.png',
    highlights: [
      'Menaklukkan puncak tertinggi dan paling disucikan di pulau dewata, Gunung Agung (3.033 mdpl)',
      'Pilihan 2 Rute Trekking: Rute Pendek (via Pasar Agung - Puncak Selatan) & Rute Panjang (via Besakih - Puncak Barat)',
      'Menyaksikan matahari terbit (sunrise) spektakuler di puncak gunung sambil menikmati teh/kopi hangat & sarapan ringan',
      'Didampingi pengemudi pribadi berbahasa Inggris & pemandu lokal pendakian profesional'
    ],
    itinerary: [
      {
        time: 'Rute Pendek (Pasar Agung)',
        title: 'Penjemputan 23:30 – 00:30 WITA | Start 01:45 WITA',
        description: 'Tiba di start point (01:00 – 01:30 WITA), mulai mendaki 01:45 WITA menuju Puncak Selatan. Durasi trekking 6 – 8 jam (naik & turun).'
      },
      {
        time: 'Rute Panjang (Besakih)',
        title: 'Penjemputan 20:30 – 21:30 WITA | Start 22:45 WITA',
        description: 'Tiba di start point (22:00 – 22:30 WITA via Pura Pengubengan), mulai mendaki 22:45 WITA menuju Puncak Barat tertinggi. Durasi trekking 12 – 14 jam (naik & turun).'
      },
      {
        time: '06:00 WITA',
        title: 'Puncak Gunung Agung & Sunrise',
        description: 'Tiba di puncak, menyaksikan matahari terbit yang memukau, menikmati minuman hangat (teh/kopi) dan camilan ringan / buah musiman.'
      },
      {
        time: '07:30 WITA',
        title: 'Perjalanan Turun Gunung',
        description: 'Mulai turun gunung menyusuri jalur lereng menuju titik akhir.'
      },
      {
        time: '10:30 – 12:30 WITA',
        title: 'Selesai, Makan Siang & Kembali ke Hotel',
        description: 'Tiba di titik akhir, dilanjutkan makan siang prasmanan di restoran, lalu diantar kembali ke hotel.'
      }
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
      'Pengeluaran tambahan lainnya, souvenir, dan tip (tipping)',
      'Asuransi tidak ditanggung (Insurance are not covered)'
    ],
    equipment: [
      { title: 'Sepatu Gunung / Hiking', subtitle: 'Trekking Boots', icon: 'shirt' },
      { title: 'Jaket Tebal / Hangat', subtitle: 'Warm/Heavy Jacket', icon: 'shirt' },
      { title: 'Celana Panjang', subtitle: 'Long Pants', icon: 'shirt' },
      { title: 'Tas Punggung (Backpack)', subtitle: 'Backpack', icon: 'shirt' }
    ]
  },

  'bali-cycling-downhill-mountain-to-village': {
    id: 'bali-cycling-downhill-mountain-to-village',
    title: 'Bali Cycling Countryside Downhill From Mountain to Village',
    badge: '73% OFF POPULAR',
    tagline: 'Kintamani Highland to Ubud • Bamboo Forest • Authentic Villages & Rice Fields • Downhill MTB Tour',
    rating: 4.9,
    reviewCount: 410,
    originalPrice: 75,
    adultPrice: 20,
    childPrice: 15,
    duration: '8 Jam',
    difficulty: 'Medium',
    ageLimit: 'Usia 17 – 55 Tahun (Tersedia sepeda anak & kursi sepeda anak)',
    transportOption: 'Private Transport (Mobil ber-AC)',
    operationalLocation: 'Kintamani hingga Desa Tradisional & Persawahan Ubud, Gianyar',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326066/04b075c5-bd5c-4f15-a821-b389d514b95e.png',
    highlights: [
      'Gowes santai downhill melintasi dataran tinggi Kintamani, hutan bambu, pedesaan lokal, dan area persawahan',
      'Pemandu sepeda profesional berbahasa Inggris & driver pengantar ramah',
      'Termasuk sarapan pagi dengan panorama Gunung/Danau Batur & makan siang di teras terbuka',
      'Dilengkapi peralatan bersepeda lengkap dan air minum kemasan'
    ],
    itinerary: [
      {
        time: '07:00 AM',
        title: 'Penjemputan di Hotel',
        description: 'Driver menjemput di lobby hotel/villa Anda dengan transportasi privat ber-AC.'
      },
      {
        time: '09:00 AM',
        title: 'Tiba di Starting Point & Sarapan',
        description: 'Tiba di titik awal Kintamani, nikmati teh/kopi pagi dengan pemandangan Gunung/Danau Batur serta pengarahan keselamatan (safety briefing) dari pemandu.'
      },
      {
        time: '09:30 AM',
        title: 'Bersepeda Downhill (2.5 - 3 Jam)',
        description: 'Rute bersepeda downhill melintasi dataran tinggi Kintamani yang sejuk, hutan bambu rindang, pedesaan otentik lokal, dan area persawahan bertingkat.'
      },
      {
        time: '12:30 PM',
        title: 'Makan Siang & Bersih-bersih',
        description: 'Tiba di finish point untuk mandi, berganti pakaian, dan menikmati makan siang lezat di teras terbuka berlatar alam.'
      },
      {
        time: '14:00 PM',
        title: 'Kembali ke Hotel',
        description: 'Pengantaran kembali ke lokasi penjemputan awal dengan nyaman.'
      }
    ],
    inclusions: [
      'Penjemputan & pengantaran privat ber-AC (Private Transport)',
      'Tiket masuk Gunung Batur & sirkuit desa',
      'Peralatan bersepeda lengkap (sepeda gunung & helm)',
      'Pemandu sepeda profesional (Bahasa Inggris)',
      'Driver pengantar (Bahasa Inggris)',
      'Sarapan pagi & makan siang di teras terbuka',
      'Air minum kemasan',
      'Asuransi perlindungan kegiatan'
    ],
    exclusions: [
      'Pengeluaran pribadi & belanja di tempat istirahat',
      'Pembelian foto/video profesional di lokasi',
      'Souvenir & Tips'
    ],
    equipment: [
      { title: 'Pakaian Ganti & Kaus Kaki', subtitle: 'Change Clothes & Socks', icon: 'shirt' },
      { title: 'Sepatu Kets / Sepatu Lari', subtitle: 'Sneakers / Running Shoes', icon: 'shirt' },
      { title: 'Tabir Surya / Sunscreen', subtitle: 'Sunscreen', icon: 'sun' },
      { title: 'Kamera & Uang Tunai Ekstra', subtitle: 'Camera & Extra Cash', icon: 'shirt' }
    ]
  },

  'bali-nature-wonder-experience': {
    id: 'bali-nature-wonder-experience',
    title: 'Bali Nature Wonder Experience',
    badge: '84% OFF BEST DEAL',
    tagline: 'Sekumpul & Fiji Waterfall • Lemukih Waterslide • Cliff Jumping • Rice Terraces Trekking',
    rating: 4.9,
    reviewCount: 465,
    originalPrice: 76,
    adultPrice: 12,
    childPrice: 10,
    duration: '8 Jam',
    difficulty: 'Sedang - Sulit (Medium to Hard)',
    ageLimit: 'Usia 10 – 55 Tahun',
    transportOption: 'Transportasi pribadi ber-AC + pengemudi berbahasa Inggris',
    operationalLocation: 'Singaraja, Buleleng (Waterfall Sekumpul, Waterfall Fiji, Lemukih Waterslide, Sawah Lemukih)',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    organizerContact: {
      name: 'Bali Niki Tour',
      phone: '+62 813-3725-2651',
      email: 'jayaputra040474@gmail.com',
      address: 'Bali Niki Tour In Front Of M-Mart Hotel Karti Area , Jl Kartika Plaza Kuta Bali'
    },
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326124/858fd91f-1ff7-428d-beeb-c59f2cdc534b.png',
    highlights: [
      'Menjelajahi keindahan spektakuler Waterfall Sekumpul & Waterfall Fiji',
      'Meluncur di perosotan alami (Lemukih Natural Waterslide) yang seru & menantang',
      'Melakukan cliff jumping (loncat tebing) ke sungai dari ketinggian 7 hingga 15 meter',
      'Trekking menyusuri bentangan sawah hijau asri dan permukiman warga lokal'
    ],
    itinerary: [
      {
        time: '07:00 AM',
        title: 'Penjemputan di Hotel',
        description: 'Penjemputan di lobby hotel Anda dengan armada transportasi pribadi ber-AC.'
      },
      {
        time: '09:00 AM',
        title: 'Tiba di Lokasi & Briefing',
        description: 'Tiba di lokasi, briefing singkat oleh pemandu lokal sambil menikmati teh/kopi hangat dan camilan.'
      },
      {
        time: '09:30 AM',
        title: 'Eksplorasi Air Terjun, Waterslide & Cliff Jumping',
        description: 'Kegiatan eksplorasi Air Terjun Sekumpul & Fiji, meluncur di perosotan alami (Lemukih waterslide), cliff jumping 7-15m, dan trek sawah dimulai.'
      },
      {
        time: '12:30 PM',
        title: 'Makan Siang (Lunch Pack) Panorama Alam',
        description: 'Makan siang (lunch pack) di area terbuka dengan pemandangan lembah dan alam yang asri.'
      },
      {
        time: '14:00 PM',
        title: 'Perjalanan Kembali ke Hotel',
        description: 'Perjalanan kembali ke hotel (opsional mampir ke Wanagiri Hills, Handara Gate, atau Danau Beratan dengan biaya pribadi).'
      }
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
      'Tip (tipping) untuk driver & pemandu',
      'Asuransi perjalanan'
    ],
    equipment: [
      { title: 'Pakaian Ganti', subtitle: 'Change of Clothes', icon: 'shirt' },
      { title: 'Tabir Surya / Sunscreen', subtitle: 'Sunscreen', icon: 'sun' },
      { title: 'Sepatu Trekking & Sandal Air', subtitle: 'Trekking & Water Shoes', icon: 'shirt' },
      { title: 'Kamera & Uang Tunai', subtitle: 'Camera & Extra Cash', icon: 'shirt' }
    ]
  },
  'bali-culture-heritage-3-days': {
    "id": "bali-culture-heritage-3-days",
    "title": "Bali’s Culture Heritage and Natural Beauty",
    "badge": "40% OFF",
    "tagline": "Ngurah Rai International Airport • Free & Easy • City Hotel",
    "rating": 5,
    "reviewCount": 450,
    "originalPrice": 442,
    "adultPrice": 263,
    "childPrice": 115,
    "duration": "3 Days",
    "difficulty": "Free & Easy",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Embrace the cultural heritage and natural beauty of Bali",
        "Visit remarkable temples and the enchanting Sacred Monkey Forest Sanctuary",
        "Explore exquisite Balinese art crafted by local people",
        "Explore the enchanting blend of mountain landscapes, rice fields, tropical plantations, beaches, and sea activities",
        "Enjoy a complimentary Banana Boat Ride"
    ],
    "itinerary": [
        {
            "time": "Day 1",
            "title": "Airport Arrival - Bali Arrival - Hotel",
            "description": "Meals: No Meals. Upon arrival at Ngurah Rai International Airport, Bali, meet and greet with our team and begin your magical holiday in Bali. Transfer to your hotel for an overnight stay."
        },
        {
            "time": "Day 2",
            "title": "Kintamani Highland - Tirta Empul Temple - Rice Terrace - Monkey Forest",
            "description": "Meals: Breakfast / Lunch. 08:00 AM — Hotel Pickup. 08:45 AM — Barong and Keris Dance Performance. 09:45 AM — Balinese Art Village. 11:00 AM — Tirta Empul Holy Spring Water Temple. 12:30 PM — Kintamani Highland & Mount Batur Viewpoint. 02:00 PM — Tegallalang Rice Terrace. 03:00 PM — Sacred Monkey Forest Sanctuary. 04:30 PM — Return to Hotel."
        },
        {
            "time": "Day 3",
            "title": "Water Sports - Beaches - Uluwatu Temple",
            "description": "Meals: Breakfast / Lunch. 08:00 AM — Hotel Pickup. 09:30 AM — Water Sports at Tanjung Benoa Beach (Complimentary Banana Boat Ride). 11:30 AM — Padang Padang Beach. 02:00 PM — Uluwatu Temple. 03:30 PM — End of Trip & Transfer to Ngurah Rai International Airport."
        }
    ],
    "inclusions": [
        "Air-conditioned private transportation with experienced driver",
        "Accommodation based on selected package",
        "Experienced English-speaking guide",
        "Other language guide available upon request",
        "Lunch and mineral water",
        "Refreshments",
        "All entrance fee tickets, including Balinese performance",
        "Fuel and parking fees"
    ],
    "exclusions": [
        "International and domestic airfare",
        "Services not mentioned or promised in the package",
        "Professional photography and video services, available for purchase on the spot",
        "Emergency and personal expenses, including shopping, flight charter, doctor on call, bar bills, telephone, laundry, and other personal expenses",
        "Souvenirs",
        "Donations",
        "Tipping"
    ],
    "equipment": []
},
  'bali-spiritual-landscapes-4-days': {
    "id": "bali-spiritual-landscapes-4-days",
    "title": "Bali’s Spiritual Landscapes: Temples, Nature, and Cultural Wonders",
    "badge": "40% OFF",
    "tagline": "Ngurah Rai International Airport • Free & Easy • City Hotel",
    "rating": 5,
    "reviewCount": 380,
    "originalPrice": 608,
    "adultPrice": 365,
    "childPrice": 206,
    "duration": "4 Days",
    "difficulty": "Free & Easy",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389384/126335b5-4877-474a-8273-8739e11bc16b.png",
    "highlights": [
        "Menemukan perpaduan memikat antara alam dan spiritualitas di Bali",
        "Mengunjungi tempat-tempat suci",
        "Merasakan ketenangan di Sacred Monkey Forest",
        "Menjelajahi permata tersembunyi Air Terjun Leke Leke",
        "Mengabadikan keindahan Tegalalang Rice Terrace"
    ],
    "itinerary": [
        {
            "time": "Day 1",
            "title": "Kedatangan di Bali - Transfer ke Hotel",
            "description": "Tanpa Makan. Tiba di Bandara Internasional Ngurah Rai, Bali. Penjemputan oleh tim BALIKU Tour dan diantar menuju hotel tempat menginap."
        },
        {
            "time": "Day 2",
            "title": "Kintamani Highland - Candi Tirta Empul - Tegalalang Rice Terrace - Monkey Forest",
            "description": "Sarapan / Makan Siang.\n08:00 : Penjemputan di lobby hotel.\n08:45 : Menonton Pertunjukan Tari Barong dan Keris.\n09:45 : Mengunjungi Desa Kerajinan Seni.\n11:00 : Mengunjungi Pura Tirta Empul.\n12:30 : Pemandangan Kintamani Highland dan Gunung Batur.\n14:00 : Menjelajahi kawasan terasering sawah Tegalalang.\n15:00 : Mengunjungi Suaka Monkey Forest Ubud.\n16:30 : Perjalanan kembali ke hotel."
        },
        {
            "time": "Day 3",
            "title": "Warisan Budaya & Permata Tersembunyi",
            "description": "Sarapan / Makan Siang.\n08:00 : Penjemputan di hotel.\n09:00 : Mengunjungi Pura Ulun Danu Beratan.\n10:30 : Berfoto di Handara Gate.\n11:00 : Mengunjungi Wanagiri Hills.\n14:00 : Menjelajahi jalur alam dan Air Terjun Leke Leke.\n16:30 : Mengunjungi Pura Tanah Lot.\n17:30 : Perjalanan kembali ke hotel."
        },
        {
            "time": "Day 4",
            "title": "Olahraga Air - Pantai - Pura Uluwatu",
            "description": "Sarapan / Makan Siang.\n08:00 : Penjemputan di hotel.\n09:30 : Olahraga air di Pantai Tanjung Benoa (Gratis Banana Boat).\n11:30 : Menjelajahi Pantai Padang Padang.\n14:00 : Mengunjungi Pura Uluwatu.\n15:30 : Akhir perjalanan, transfer ke bandara."
        }
    ],
    "inclusions": [
        "Transportasi Pribadi Ber-AC dengan Pengemudi Berpengalaman",
        "Akomodasi sesuai permintaan paket",
        "Pemandu Wisata Berbahasa Inggris Berpengalaman (Bahasa lain sesuai permintaan)",
        "Makan Siang dan Air Mineral",
        "Makanan Ringan / Refreshment",
        "Seluruh Tiket Masuk Tempat Wisata termasuk Pertunjukan Tari Tradisional Bali",
        "Bahan Bakar dan Biaya Parkir"
    ],
    "exclusions": [
        "Tiket Pesawat Internasional dan Domestik",
        "Asuransi Perjalanan dan Medis",
        "Layanan yang tidak disebutkan dalam program",
        "Foto atau Video oleh fotografer profesional (dapat dibeli di lokasi)",
        "Pengeluaran Darurat dan Pribadi (belanja, charter pesawat, dokter, dll)",
        "Souvenir, Donasi, dan Tip"
    ],
    "equipment": []
},
  'balis-adventurous-escapes-6-days': {
    "id": "balis-adventurous-escapes-6-days",
    "title": "Bali’s Adventurous Escapes",
    "badge": "40% OFF",
    "tagline": "Ngurah Rai International Airport • Medium • City Hotel",
    "rating": 5,
    "reviewCount": 520,
    "originalPrice": 930,
    "adultPrice": 555,
    "childPrice": 320,
    "duration": "6 Days",
    "difficulty": "Medium",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787390925/6595cee2-1839-4002-b8b7-6921b4416016.png",
    "highlights": [
        "Thrilling experiences Bali's Rapid River and ATV Ride",
        "Experience the tranquility of the Sacred Monkey",
        "Explore the vibrant hidden gems of Leke Leke waterfall",
        "Capture the timeless beauty of Tegalalang Rice Terrace"
    ],
    "itinerary": [
        {
            "time": "Day 1",
            "title": "Airport - Bali Arrival - Hotel (No Meals)",
            "description": "Upon arrival at Ngurah Rai International Airport, BALI. Meet and Great with our time work and welcome to magical holiday in Bali !. Transfer to your hotel for overnight stay."
        },
        {
            "time": "Day 2",
            "title": "White water rafting at Telaga Waja River (Breakfast / Lunch)",
            "description": "08:00 am : Pick-up services at your hotel with private transportation. Our English speaking driver as well be your guide.\n09:30 am : Arrive at Location and General Briefing.\n10:45 am : Starting an adventure at rapid river. Coacher most scenic hyper - Bali Rafting Route, 14km of exciting grade 3 & 4 fast moving river.\n13:15 pm : Lunch menu at the restaurant while enjoy the green hills and rice fields.\n14:00 pm : Drive back to hotel for overnight stay."
        },
        {
            "time": "Day 3",
            "title": "ATV Ride Adventure - Coffee Plantation - Rice Terrace - Monkey Forest (Breakfast / Lunch)",
            "description": "07:00 am : Pick-up services at your hotel with private transportation.\n08:00 am : Arrive at Location and General Briefing.\n08:30 am : 1,5 Hours Off Road Adventure of ATV Ride through dense forests, secret tunnels, and clear rivers.\n12:30 pm : Lunch menu at the restaurant while enjoy the green hills and rice fields.\n02:00 pm : Coffee Plantation and Optional Swing.\n03:00 pm : Tegallalang Rice field terrace.\n04:00 pm : Visit Monkey Forest Sanctuary.\n05:30 pm : Drive back to hotel."
        },
        {
            "time": "Day 4",
            "title": "Bali Swing, Hidden Waterfall & Tanah Lot Sunset (Breakfast / Lunch)",
            "description": "08:00 am : Pick-up services at your hotel.\n09:00 am : Visit Ulundanu Temple at shore of Beratan Lake in Bedugul.\n10:30 am : Taking Instagramable Picture at Handara Gate with Jungle Background.\n11:00 am : Visit Wanagiri Hills a beautiful destination known for its breathtaking landscapes.\n02:00 pm : Explore nature track at Leke Leke Waterfall.\n04:30 pm : Visit Tanah Lot Temple while waiting for sunset for the best picture.\n05:30 pm : Drive back to hotel."
        },
        {
            "time": "Day 5",
            "title": "Water Sport – Beaches – Uluwatu Temple (Breakfast / Lunch)",
            "description": "08:00 am : Pick-up services at your hotel.\n09:30 am : Enjoy some water sport activities at Tanjung Benoa Beach. Banana Boat (Complimentary).\n11:30 am : Explore Padang Padang beach.\n02:00 pm : Visit Uluwatu temple which is enjoyable surrounded by lush gardens and offer panoramic views.\nSpecial Performance : You can attend KECAK DANCE at sunset.\n15:00 pm : Enjoy beach dinner at Jimbaran Bay.\n07:30 pm : Drive back to hotel."
        },
        {
            "time": "Day 6",
            "title": "Hotel - Airport Transfer (Breakfast)",
            "description": "Breakfast at hotel, We will pick up at hotel based on your flight details and the direction from the places you stay and then we directly to the airport for departure. Please check your stuff and belonging before we go to airport."
        }
    ],
    "inclusions": [
        "Air Conditioned Private Transportation with Experience Driver",
        "Accommodation based on Request Package",
        "Experience English Speaking Guide or (Other language available as per request)",
        "Lunch and Mineral Water",
        "White Water Rafting",
        "ATV Ride Adventure",
        "All Entrance Fee Ticket Excluding Balinese Performance Dance",
        "Refreshment",
        "Fuel and Parking Fee"
    ],
    "exclusions": [
        "International and Domestic Airfare",
        "Services not mentioned or not promised",
        "Photo or Video by professional photography available to purchase on the spot",
        "Emergency and Personal Expenses such as shopping, flight charter, doctor on call, bar bills, telephone, laundry, etc",
        "Souvenir, Donation and Tipping"
    ],
    "equipment": []
},
  'explore-balis-majestic-landscapes-5-days': {
    "id": "explore-balis-majestic-landscapes-5-days",
    "title": "Explore Bali’s Majestic Landscapes and Cultural Heritage",
    "badge": "40% OFF",
    "tagline": "Ngurah Rai International Airport • Medium • City Hotel",
    "rating": 5,
    "reviewCount": 410,
    "originalPrice": 786,
    "adultPrice": 472,
    "childPrice": 274,
    "duration": "5 Days",
    "difficulty": "Medium",
    "image": "https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png",
    "highlights": [
        "Journey through Bali's stunning landscapes",
        "A venture magical \"Gate of Heaven\"",
        "Experience the authentic Balinese lifestyle",
        "An exploring Hidden Gems of Waterfall"
    ],
    "itinerary": [
        {
            "time": "Day 1",
            "title": "Airport - Bali Arrival - Hotel (No Meals)",
            "description": "Upon arrival at Ngurah Rai International Airport, BALI. Meet and Great with our time work and welcome to magical holiday in Bali !. Transfer to your hotel for overnight stay.\nNote: Driver and Guide will be stand by for your time Free and Easy, if your arrival early noon."
        },
        {
            "time": "Day 2",
            "title": "Bali Cycling Countryside Downhill - Monkey Forest (Breakfast / Lunch)",
            "description": "07:00 am: Pick-up services at your hotel with private transportation.\n09:00 am: Arrival at starting point, Enjoy morning tea or coffee introduction and safety procedure briefing.\n09:30 am: Bali Cycling Downhill From Mount to Village (2.5 - 3 hours).\n12:30 pm: Lunch time at restaurant with beautiful view.\nVisit Monkey Forest Sanctuary.\n05:30 pm: Drive back to hotel for overnight stay."
        },
        {
            "time": "Day 3",
            "title": "Gate Of Heaven Water Palace Hidden Gems Waterfall (Breakfast / Lunch)",
            "description": "05:30 am: Pick-up services at your hotel with private transportation.\n07:30 am: Explore a wonderful of Gate of Heaven, Lempuyang Temple.\n11:00 am: Visit Water Palace at Tirta Gangga.\n12:30 pm: Explore Hidden Gems Waterfall at Tukad Cepung.\n04:30 pm: Drive back to hotel for overnight stay."
        },
        {
            "time": "Day 4",
            "title": "Water Sport – Beaches – Uluwatu Temple (Breakfast / Lunch)",
            "description": "08:00 am: Pick-up services at your hotel.\n09:30 am: Enjoy some water sport activities at Tanjung Benoa Beach. Banana Boat (Complimentary).\n11:30 am: Explore Padang Padang beach.\n02:00 pm: Visit Uluwatu temple.\nSpecial Performance: You can attend KECAK DANCE at sunset.\n07:00 pm: Enjoy beach dinner at Jimbaran Bay.\n08:30 pm: Drive back to hotel for overnight stay."
        },
        {
            "time": "Day 5",
            "title": "Hotel - Airport Transfer (Breakfast)",
            "description": "Breakfast at hotel, We will pick up at hotel based on your flight details and then we directly to the airport for departure. Please check your stuff and belonging before we go to airport."
        }
    ],
    "inclusions": [
        "Air Conditioned Private Transportation with Experience Driver",
        "Accommodation based on Request Package",
        "Experience English Speaking Guide or (Other language available as per request)",
        "Lunch and Mineral Water",
        "Downhill Countryside Cycling",
        "All Entrance Fee Ticket Excluding Balinese Performance Dance",
        "Refreshment",
        "Fuel and Parking Fee"
    ],
    "exclusions": [
        "International and Domestic Airfare",
        "Services not mentioned or not promised",
        "Photo or Video by professional photography available to purchase on the spot",
        "Emergency and Personal Expenses such as shopping, flight charter, doctor on call, bar bills, telephone, laundry, etc",
        "Souvenir, Donation and Tipping"
    ],
    "equipment": []
},

'paragliding': {
    id: 'paragliding',
    title: 'Flying on Sky With Paragliding',
    badge: 'Ekstrem Adventure',
    tagline: 'Terbang tandem bersama pilot bersertifikat sekitar 225 kaki di atas permukaan laut di Bali Selatan.',
    rating: 4.9,
    reviewCount: 180,
    originalPrice: 120,
    adultPrice: 80,
    childPrice: 80,
    duration: '3 Jam',
    difficulty: 'Ekstrem',
    ageLimit: '10 hingga 60 Tahun',
    transportOption: 'Kendaraan Pribadi (Private Transport)',
    operationalLocation: 'Gunung Riug, Nusa Dua',
    pickupAreas: ['Kuta', 'Legian', 'Seminyak', 'Canggu', 'Jimbaran', 'Nusa Dua', 'Sanur', 'Ubud'],
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052460/02018cef-c1e4-4d4c-b918-9c51ff9387b3.png',
    highlights: [
        'Terbang tandem bersama pilot bersertifikat sekitar 225 kaki di atas permukaan laut untuk menikmati pemandangan pantai dan tebing di Bali Selatan (kawasan Gunung Riug, Nusa Dua).',
        'Waktu terbang terbaik adalah musim kemarau (April–Oktober) saat angin berhembus dari arah Tenggara atau Barat Daya.',
        'Merasakan sensasi memompa adrenalin di ketinggian dengan pemandangan pesisir pantai Bali yang memukau.'
    ],
    itinerary: [
        {
            time: '11:30',
            title: 'Penjemputan Hotel',
            description: 'Penjemputan di lobi hotel menggunakan kendaraan pribadi ber-AC oleh pengemudi berbahasa Inggris.'
        },
        {
            time: '13:00',
            title: 'Tiba di Lokasi & Pengarahan',
            description: 'Pengarahan singkat (briefing), dilanjutkan terbang dengan paragliding menjelajahi pantai dan tebing sebelum kembali ke titik awal.'
        },
        {
            time: '14:30',
            title: 'Kembali ke Hotel',
            description: 'Pengantaran kembali ke hotel asal.'
        }
    ],
    inclusions: [
        'Layanan transportasi ber-AC',
        '30 menit terbang Tandem Paragliding',
        'Air mineral atau minuman ringan',
        'Perlengkapan keselamatan: Helm, harness, dan glider (memenuhi standar FAI dan Eropa)',
        'Peminjaman kamera GoPro HERO9 Series untuk merekam penerbangan',
        'Fasilitas lokasi: Wi-Fi, stopkontak pengisian daya, loker, toilet, ruang tunggu/lobi yang nyaman, serta sepatu olahraga jika tidak membawa sepatu kets',
        'Kotak P3K dan obat-obatan (jika diperlukan)'
    ],
    exclusions: [
        'Uang pribadi untuk belanja di area peristirahatan',
        'Pembelian foto atau video dari fotografer profesional di lokasi',
        'Pengeluaran tambahan lainnya',
        'Souvenir dan tip'
    ],
    equipment: [
        { title: 'Topi', subtitle: 'Sun Hat', icon: 'shirt' },
        { title: 'Tabir Surya', subtitle: 'Sunscreen', icon: 'sun' }
    ],
    importantNotes: [
        'Penerbangan bergantung pada kondisi cuaca. Jika dibatalkan karena cuaca, akan ditawarkan penjadwalan ulang di hari lain.',
        'Pengunjung disarankan menghubungi pihak penyedia sebelum datang untuk memastikan kondisi cuaca terkini.',
        'Pemesanan bersifat tidak dapat diuangkan kembali (non-refundable), namun penjadwalan ulang dapat diajukan minimal 48 jam sebelum jadwal keberangkatan.'
    ]
},

};

export default function RaftingDetailPage({ packageId, onBack, onBookNow }: RaftingDetailProps) {
  const { language } = useLanguage();
  // Resolve package data from dictionary or fallback to telaga-waja-rafting
  const rawPkgData = PACKAGE_DETAILS_DATA[packageId] || PACKAGE_DETAILS_DATA['telaga-waja-rafting'];
  
  const pkgData: PackageDetailData = React.useMemo(() => {
    if (language === 'id') return rawPkgData;
    const translation = TOUR_TRANSLATIONS[rawPkgData.id]?.[language] || TOUR_TRANSLATIONS[rawPkgData.id]?.['en'];
    if (!translation) return rawPkgData;
    return {
      ...rawPkgData,
      title: translation.title || rawPkgData.title,
      tagline: translation.tagline || rawPkgData.tagline,
      difficulty: translation.difficulty || rawPkgData.difficulty,
      duration: translation.duration || rawPkgData.duration,
      ageLimit: translation.ageLimit || rawPkgData.ageLimit,
      operationalLocation: translation.operationalLocation || rawPkgData.operationalLocation,
      highlights: translation.highlights || rawPkgData.highlights,
      inclusions: translation.inclusions || rawPkgData.inclusions,
      exclusions: translation.exclusions || rawPkgData.exclusions,
      pickupAreas: translation.pickupAreas || rawPkgData.pickupAreas,
      itinerary: translation.itinerary ? translation.itinerary.map((item) => ({
        time: item.time,
        title: item.title,
        description: item.description,
      })) : rawPkgData.itinerary,
      importantNotes: translation.importantNotes || rawPkgData.importantNotes,
    };
  }, [rawPkgData, language]);

  // Booking calculator state
  const [adultCount, setAdultCount] = useState<number>(2);
  const [childCount, setChildCount] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [selectedPickup, setSelectedPickup] = useState<string>(
    pkgData.pickupAreas && pkgData.pickupAreas.length > 0 ? pkgData.pickupAreas[0] : 'Ubud'
  );

  const adultPrice = pkgData.adultPrice;
  const childPrice = pkgData.childPrice;
  const totalPrice = adultCount * adultPrice + childCount * childPrice;

  const handleBookingSubmit = () => {
    onBookNow(pkgData.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-10 text-left text-white"
    >
      {/* Top Navigation & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>{language === 'id' ? 'Kembali' : 'Back'}</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>{language === 'id' ? 'Katalog Tur' : 'Tour Catalog'}</span>
          <span>/</span>
          <span>{language === 'id' ? 'Paket Wisata' : 'Tour Packages'}</span>
          <span>/</span>
          <span className="text-gold-500 font-medium truncate max-w-[240px]">{pkgData.title}</span>
        </div>
      </div>

      {/* Hero Section / Title & Badges */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          {pkgData.badge && (
            <span className="bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-md shadow-md font-mono">
              {pkgData.badge}
            </span>
          )}
          {pkgData.difficulty && (
            <span className="bg-neutral-800 text-gold-400 font-mono text-[11px] px-3 py-1 rounded-md border border-neutral-700/50 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>{pkgData.difficulty}</span>
            </span>
          )}
          {pkgData.rating && (
            <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold bg-neutral-800 px-3 py-1 rounded-md border border-neutral-700/50">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>{pkgData.rating} / 5.0 ({pkgData.reviewCount || 100}+ {language === 'id' ? 'Ulasan' : 'Reviews'})</span>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-sans">
              {pkgData.title}
            </h1>
          </div>

          {pkgData.externalLink && (
            <a
              href={pkgData.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-gold-400 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/80 px-3.5 py-2 rounded-xl transition-all self-start md:self-auto cursor-pointer"
            >
              <span>{language === 'id' ? 'Lihat Sumber Resmi' : 'Official Page'}</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 pt-2">
          {pkgData.duration && (
            <div className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-lg border border-neutral-700">
              <Clock size={16} className="text-gold-500" />
              <span className="font-medium text-white">{pkgData.duration}</span>
            </div>
          )}
          {pkgData.tagline && (
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-gold-500" />
              <span>{pkgData.tagline}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950 group">
        <img
          src={getOptimizedCloudinaryUrl(pkgData.image, { width: 1200, quality: 'auto', format: 'auto' })}
          alt={pkgData.title}
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Section */}
          <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-5">
            <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
              <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
                <Compass size={18} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">{language === 'id' ? 'Gambaran Umum' : 'Overview'}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
              <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center gap-3">
                <Clock size={18} className="text-gold-500 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-neutral-400 block font-mono">{language === 'id' ? 'DURASI' : 'DURATION'}</span>
                  <span className="font-bold text-white">{pkgData.duration}</span>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center gap-3">
                <Activity size={18} className="text-gold-500 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-neutral-400 block font-mono">{language === 'id' ? 'TINGKAT KESULITAN' : 'DIFFICULTY'}</span>
                  <span className="font-bold text-white">{pkgData.difficulty}</span>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center gap-3">
                <Users size={18} className="text-gold-500 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-neutral-400 block font-mono">{language === 'id' ? 'BATAS USIA' : 'AGE LIMIT'}</span>
                  <span className="font-bold text-white">{pkgData.ageLimit || (language === 'id' ? 'Semua Usia' : 'All Ages')}</span>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center gap-3">
                <ShieldCheck size={18} className="text-gold-500 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-neutral-400 block font-mono">{language === 'id' ? 'KEAMANAN' : 'SAFETY'}</span>
                  <span className="font-bold text-white">{language === 'id' ? 'Terjamin' : 'Guaranteed'}</span>
                </div>
              </div>
            </div>

            {pkgData.pickupAreas && pkgData.pickupAreas.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold-500" size={16} />
                  <h3 className="font-semibold text-white text-sm">{language === 'id' ? 'Area Penjemputan Gratis:' : 'Free Pickup Areas:'}</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {pkgData.pickupAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-lg bg-neutral-900 text-xs text-neutral-200 border border-neutral-700/80 font-medium"
                    >
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {pkgData.organizerContact && (
              <div className="p-4 bg-neutral-900/90 rounded-xl border border-gold-500/30 space-y-2.5 mt-3">
                <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-wider font-mono">
                  <Compass size={16} />
                  <span>{language === 'id' ? 'Penyelenggara Tour' : 'Tour Organizer'} ({pkgData.organizerContact.name})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>WhatsApp / {language === 'id' ? 'Telp' : 'Phone'}: <strong className="text-white">{pkgData.organizerContact.phone}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-sky-400 flex-shrink-0" />
                    <span>Email: <strong className="text-white">{pkgData.organizerContact.email}</strong></span>
                  </div>
                  <div className="sm:col-span-2 flex items-start gap-2 text-[11px] text-neutral-400">
                    <MapPin size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span>{language === 'id' ? 'Alamat' : 'Address'}: {pkgData.organizerContact.address}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Sticky Pricing Sidebar */}
        <div className="space-y-6">
          <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700/60 shadow-xl space-y-5 sticky top-24">
            <h3 className="font-bold text-white text-lg pb-3 border-b border-neutral-700/60 flex items-center justify-between">
              <span>{language === 'id' ? 'Harga Paket' : 'Package Pricing'}</span>
              <span className="text-xs text-gold-500 font-mono bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/30">{language === 'id' ? 'HARGA TERBAIK' : 'BEST PRICE'}</span>
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-sm text-neutral-400 font-medium">{language === 'id' ? 'Dewasa' : 'Adult'}</span>
                <div className="text-right">
                  <span className="text-xs text-red-500 line-through mr-2">${pkgData.originalPrice}</span>
                  <span className="text-2xl font-black text-white">${pkgData.adultPrice}</span>
                </div>
              </div>
              {pkgData.childPrice > 0 && (
                <div className="flex justify-between items-end">
                  <span className="text-sm text-neutral-400 font-medium">{language === 'id' ? 'Anak-anak' : 'Child'}</span>
                  <span className="text-xl font-bold text-neutral-200">${pkgData.childPrice}</span>
                </div>
              )}
            </div>

            {/* Interactive Calculator Controls */}
            <div className="space-y-3 pt-3 border-t border-neutral-700/50">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                  <Calendar size={13} className="text-gold-500" />
                  <span>{language === 'id' ? 'Pilih Tanggal Tour' : 'Select Tour Date'}</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-neutral-900 text-white border border-neutral-700 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              {pkgData.pickupAreas && pkgData.pickupAreas.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Car size={13} className="text-gold-500" />
                    <span>{language === 'id' ? 'Area Penjemputan' : 'Pickup Area'}</span>
                  </label>
                  <select
                    value={selectedPickup}
                    onChange={(e) => setSelectedPickup(e.target.value)}
                    className="w-full bg-neutral-900 text-white border border-neutral-700 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 appearance-none"
                  >
                    {pkgData.pickupAreas.map((area) => (
                      <option key={area} value={area} className="bg-neutral-900 text-white">
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Adult Stepper */}
              <div className="p-2.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">{language === 'id' ? 'Dewasa (Adult)' : 'Adult'}</span>
                  <span className="text-[10px] text-neutral-400">${adultPrice} / pax</span>
                </div>
                <div className="flex items-center gap-2 bg-neutral-800 rounded-lg border border-neutral-700 p-1">
                  <button
                    onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                    className="w-6 h-6 rounded bg-neutral-700 hover:bg-neutral-600 text-white font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-white w-4 text-center">{adultCount}</span>
                  <button
                    onClick={() => setAdultCount(adultCount + 1)}
                    className="w-6 h-6 rounded bg-gold-500 hover:bg-gold-600 text-neutral-950 font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Child Stepper */}
              <div className="p-2.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">{language === 'id' ? 'Anak (Child)' : 'Child'}</span>
                  <span className="text-[10px] text-neutral-400">${childPrice} / pax</span>
                </div>
                <div className="flex items-center gap-2 bg-neutral-800 rounded-lg border border-neutral-700 p-1">
                  <button
                    onClick={() => setChildCount(Math.max(0, childCount - 1))}
                    className="w-6 h-6 rounded bg-neutral-700 hover:bg-neutral-600 text-white font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-white w-4 text-center">{childCount}</span>
                  <button
                    onClick={() => setChildCount(childCount + 1)}
                    className="w-6 h-6 rounded bg-gold-500 hover:bg-gold-600 text-neutral-950 font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                <span className="text-[11px] font-bold text-green-400 block">
                  {language === 'id' ? `Total Bayar: $${totalPrice}` : `Total Payable: $${totalPrice}`}
                </span>
              </div>
            </div>

            <button
              onClick={handleBookingSubmit}
              className="w-full bg-gold-500 hover:bg-gold-600 text-neutral-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-gold-500/20 active:scale-[0.98] cursor-pointer"
            >
              {language === 'id' ? 'PESAN SEKARANG' : 'BOOK NOW'}
            </button>
            <p className="text-[11px] text-center text-neutral-400 mt-2">
              {language === 'id' ? 'Konfirmasi instan. Jaminan harga terbaik.' : 'Instant confirmation. Best price guaranteed.'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. HIGHLIGHTS (SOROTAN UTAMA) */}
      {pkgData.highlights && pkgData.highlights.length > 0 && (
        <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
              <Sparkles size={18} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">{language === 'id' ? 'Sorotan Utama' : 'Highlights'}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {pkgData.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold font-mono">
                  {idx + 1}
                </div>
                <span className="text-xs text-neutral-200 leading-relaxed font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. ITINERARY (JADWAL KEGIATAN) */}
      {pkgData.itinerary && pkgData.itinerary.length > 0 && (
        <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-6">
          <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
              <Clock size={18} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">{language === 'id' ? 'Rencana Perjalanan' : 'Itinerary'}</h2>
          </div>
          <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-neutral-700">
            {pkgData.itinerary.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-6 sm:-left-8 top-0.5 w-5 h-5 rounded-full bg-gold-500 border-4 border-neutral-800 shadow" />
                <div className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-700/50 hover:border-gold-500/60 transition-colors space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="font-mono font-bold text-xs px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-500 border border-gold-500/30 w-fit">
                      {item.time}
                    </span>
                    <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed whitespace-pre-wrap">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. INCLUSIONS & EXCLUSIONS */}
      <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-6">
        <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
            <ShieldCheck size={18} />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">{language === 'id' ? 'Fasilitas Termasuk & Tidak Termasuk' : 'Cost Includes & Excludes'}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Includes */}
          <div className="bg-neutral-900/80 rounded-xl p-5 border border-green-500/30 space-y-3">
            <div className="flex items-center gap-2 text-green-500 font-bold text-sm pb-2 border-b border-neutral-700/50">
              <Check size={18} className="stroke-[3]" />
              <span>{language === 'id' ? 'Termasuk:' : 'Includes:'}</span>
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {pkgData.inclusions.map((inc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px]">✓</span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excludes */}
          <div className="bg-neutral-900/80 rounded-xl p-5 border border-red-500/30 space-y-3">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm pb-2 border-b border-neutral-700/50">
              <XIcon size={18} className="stroke-[3]" />
              <span>{language === 'id' ? 'Tidak Termasuk:' : 'Excludes:'}</span>
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {pkgData.exclusions.map((exc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <XIcon size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 5. EQUIPMENT / NEED TO BRING */}
      {pkgData.equipment && pkgData.equipment.length > 0 && (
        <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
              <ShoppingBag size={18} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">{language === 'id' ? 'Perlengkapan yang Wajib Dibawa' : 'What to Bring'}</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {pkgData.equipment.map((eq, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-neutral-900/90 rounded-xl border border-neutral-700/60 flex flex-col items-center text-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/15 text-gold-500 flex items-center justify-center">
                  {eq.icon === 'sun' ? (
                    <Sun size={20} />
                  ) : eq.icon === 'swim' ? (
                    <Activity size={20} />
                  ) : (
                    <Shirt size={20} />
                  )}
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">{eq.title}</span>
                  {eq.subtitle && (
                    <span className="text-[10px] text-neutral-400 italic font-sans">({eq.subtitle})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. IMPORTANT NOTES / KETENTUAN PENTING */}
      {pkgData.importantNotes && pkgData.importantNotes.length > 0 && (
        <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
              <AlertCircle size={18} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">{language === 'id' ? 'Ketentuan Penting' : 'Important Terms'}</h2>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
            {pkgData.importantNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">!</span>
                <span className="leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
