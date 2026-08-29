const fs = require('fs');

const content = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, MapPin, ArrowRight, ShieldCheck, ArrowLeft, Check, Navigation, Waves, ChevronDown, ChevronUp, Sparkles, Star, X as XIcon } from 'lucide-react';
import { Experience } from '../types';

interface TourCatalogProps {
  onBookNow: (experienceId: string) => void;
  onViewDetails: (experienceId: string) => void;
}

const multiDayPackages = [
  {
    id: 'bali-culture-heritage-3-days',
    title: 'Bali’s Culture Heritage and Natural Beauty',
    badge: '40% OFF',
    categoryTag: 'Multi Days',
    originalPrice: 442,
    adultPrice: 263,
    childPrice: 115,
    discountedPrice: 263,
    savings: 179,
    discountPercentage: 40,
    duration: '3 Days',
    durationBadge: '3 Days - 2 Nights',
    location: 'Bali',
    difficulty: 'Free & Easy',
    capacity: '1 Person',
    tagline: 'Ngurah Rai International Airport • Free & Easy • City Hotel',
    rating: 5.0,
    reviewCount: 450,
    description: 'Embrace the cultural heritage and natural beauty of Bali through its remarkable thousand temples and the enchanting Sacred Monkey Forest Sanctuary. Explore exquisite Balinese art crafted by local people, where history and creativity flourish in lush surroundings. Then, be captivated by the playful long-tailed macaques at the sanctuary, creating unforgettable memories amidst grand temples and serene forests.',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png',
    highlights: [
      'Embrace the cultural heritage and natural beauty of Bali',
      'Visit remarkable temples and the enchanting Sacred Monkey Forest Sanctuary',
      'Explore exquisite Balinese art crafted by local people',
      'Explore the enchanting blend of mountain landscapes, rice fields, tropical plantations, beaches, and sea activities',
      'Enjoy a complimentary Banana Boat Ride'
    ],
    itinerary: [
      {
        time: 'Day 1',
        title: 'Airport Arrival - Bali Arrival - Hotel',
        description: 'Meals: No Meals. Upon arrival at Ngurah Rai International Airport, Bali, meet and greet with our team and begin your magical holiday in Bali. Transfer to your hotel for an overnight stay.'
      },
      {
        time: 'Day 2',
        title: 'Kintamani Highland - Tirta Empul Temple - Rice Terrace - Monkey Forest',
        description: 'Meals: Breakfast / Lunch. 08:00 AM — Hotel Pickup. 08:45 AM — Barong and Keris Dance Performance. 09:45 AM — Balinese Art Village. 11:00 AM — Tirta Empul Holy Spring Water Temple. 12:30 PM — Kintamani Highland & Mount Batur Viewpoint. 02:00 PM — Tegallalang Rice Terrace. 03:00 PM — Sacred Monkey Forest Sanctuary. 04:30 PM — Return to Hotel.'
      },
      {
        time: 'Day 3',
        title: 'Water Sports - Beaches - Uluwatu Temple',
        description: 'Meals: Breakfast / Lunch. 08:00 AM — Hotel Pickup. 09:30 AM — Water Sports at Tanjung Benoa Beach (Complimentary Banana Boat Ride). 11:30 AM — Padang Padang Beach. 02:00 PM — Uluwatu Temple. 03:30 PM — End of Trip & Transfer to Ngurah Rai International Airport.'
      }
    ],
    inclusions: [
      'Air-conditioned private transportation with experienced driver',
      'Accommodation based on selected package',
      'Experienced English-speaking guide',
      'Other language guide available upon request',
      'Lunch and mineral water',
      'Refreshments',
      'All entrance fee tickets, including Balinese performance',
      'Fuel and parking fees'
    ],
    exclusions: [
      'International and domestic airfare',
      'Travel and medical insurance',
      'Services not mentioned or promised in the package',
      'Professional photography and video services, available for purchase on the spot',
      'Emergency and personal expenses, including shopping, flight charter, doctor on call, bar bills, telephone, laundry, and other personal expenses',
      'Souvenirs',
      'Donations',
      'Tipping'
    ]
  },
  {
    id: 'bali-spiritual-landscapes-4-days',
    title: 'Bali’s Spiritual Landscapes: Temples, Nature, and Cultural Wonders',
    badge: '40% OFF',
    categoryTag: 'Multi Days',
    originalPrice: 608,
    adultPrice: 365,
    childPrice: 206,
    discountedPrice: 365,
    savings: 243,
    discountPercentage: 40,
    duration: '4 Days',
    durationBadge: '4 Days - 3 Nights',
    location: 'Bali',
    difficulty: 'Free & Easy',
    capacity: '1 Person',
    tagline: 'Ngurah Rai International Airport • Free & Easy • City Hotel',
    rating: 5.0,
    reviewCount: 380,
    description: 'Temukan perpaduan memikat antara alam dan spiritualitas di Bali, menampilkan candi-candi indah, terasering sawah yang subur, satwa liar yang unik, serta permata tersembunyi. Kunjungi tempat-tempat suci seperti Candi Tirta Empul dengan air pancuran sucinya dan Candi Ulun Danu, nikmati ketenangan Sacred Monkey Forest, dan saksikan pemandangan indah Gunung Batur. Jelajahi air terjun Leke Leke dan keindahan Tegalalang Rice Terrace.',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389384/126335b5-4877-474a-8273-8739e11bc16b.png',
    highlights: [
      'Menemukan perpaduan memikat antara alam dan spiritualitas di Bali',
      'Mengunjungi tempat-tempat suci',
      'Merasakan ketenangan di Sacred Monkey Forest',
      'Menjelajahi permata tersembunyi Air Terjun Leke Leke',
      'Mengabadikan keindahan Tegalalang Rice Terrace'
    ],
    itinerary: [
      {
        time: 'Day 1',
        title: 'Kedatangan di Bali - Transfer ke Hotel',
        description: 'Tanpa Makan. Tiba di Bandara Internasional Ngurah Rai, Bali. Penjemputan oleh tim BALIKU Tour dan diantar menuju hotel tempat menginap.'
      },
      {
        time: 'Day 2',
        title: 'Kintamani Highland - Candi Tirta Empul - Tegalalang Rice Terrace - Monkey Forest',
        description: 'Sarapan / Makan Siang.\\n08:00 : Penjemputan di lobby hotel.\\n08:45 : Menonton Pertunjukan Tari Barong dan Keris.\\n09:45 : Mengunjungi Desa Kerajinan Seni.\\n11:00 : Mengunjungi Pura Tirta Empul.\\n12:30 : Pemandangan Kintamani Highland dan Gunung Batur.\\n14:00 : Menjelajahi kawasan terasering sawah Tegalalang.\\n15:00 : Mengunjungi Suaka Monkey Forest Ubud.\\n16:30 : Perjalanan kembali ke hotel.'
      },
      {
        time: 'Day 3',
        title: 'Warisan Budaya & Permata Tersembunyi',
        description: 'Sarapan / Makan Siang.\\n08:00 : Penjemputan di hotel.\\n09:00 : Mengunjungi Pura Ulun Danu Beratan.\\n10:30 : Berfoto di Handara Gate.\\n11:00 : Mengunjungi Wanagiri Hills.\\n14:00 : Menjelajahi jalur alam dan Air Terjun Leke Leke.\\n16:30 : Mengunjungi Pura Tanah Lot.\\n17:30 : Perjalanan kembali ke hotel.'
      },
      {
        time: 'Day 4',
        title: 'Olahraga Air - Pantai - Pura Uluwatu',
        description: 'Sarapan / Makan Siang.\\n08:00 : Penjemputan di hotel.\\n09:30 : Olahraga air di Pantai Tanjung Benoa (Gratis Banana Boat).\\n11:30 : Menjelajahi Pantai Padang Padang.\\n14:00 : Mengunjungi Pura Uluwatu.\\n15:30 : Akhir perjalanan, transfer ke bandara.'
      }
    ],
    inclusions: [
      'Transportasi Pribadi Ber-AC dengan Pengemudi Berpengalaman',
      'Akomodasi sesuai permintaan paket',
      'Pemandu Wisata Berbahasa Inggris Berpengalaman (Bahasa lain sesuai permintaan)',
      'Makan Siang dan Air Mineral',
      'Makanan Ringan / Refreshment',
      'Seluruh Tiket Masuk Tempat Wisata termasuk Pertunjukan Tari Tradisional Bali',
      'Bahan Bakar dan Biaya Parkir'
    ],
    exclusions: [
      'Tiket Pesawat Internasional dan Domestik',
      'Asuransi Perjalanan dan Medis',
      'Layanan yang tidak disebutkan dalam program',
      'Foto atau Video oleh fotografer profesional (dapat dibeli di lokasi)',
      'Pengeluaran Darurat dan Pribadi (belanja, charter pesawat, dokter, dll)',
      'Souvenir, Donasi, dan Tip'
    ]
  }
];

export default function TourCatalog({ onBookNow }: TourCatalogProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const selectedPackage = multiDayPackages.find(p => p.id === selectedPackageId);

  const renderPackageCard = (pkg: typeof multiDayPackages[0]) => {
    const isExpanded = expandedCardId === pkg.id;

    return (
      <motion.div
        key={pkg.id}
        layout
        className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-neutral-800/60 flex flex-col justify-between group hover:border-gold-500/60 hover:shadow-2xl transition-all duration-300 text-white w-full max-w-sm"
      >
        <div>
          {/* Card Image with Discount Badge and Pin Icon */}
          <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-950">
            <img
              src={pkg.image}
              alt={pkg.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Top-Left Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-sm shadow-md z-10">
              {pkg.badge}
            </div>

            {/* Top-Right Category Badge */}
            <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 text-gold-300 font-bold text-[11px] px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 z-10">
              <Waves size={11} className="text-gold-500" />
              <span>{pkg.categoryTag}</span>
            </div>

            {/* Bottom-Right Pin Icon */}
            <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center shadow-md z-10">
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
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/40">
                <Waves size={11} />
                <span>Kategori: {pkg.categoryTag}</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-bold text-lg text-white group-hover:text-gold-300 transition-colors leading-snug line-clamp-2 min-h-[52px]">
              {pkg.title}
            </h3>

            {/* SEE MORE DETAILS Toggle Button */}
            <button
              onClick={() => setExpandedCardId(isExpanded ? null : pkg.id)}
              type="button"
              className="w-full py-2 px-4 rounded-full border border-neutral-800 hover:border-gold-500/60 bg-neutral-950/60 hover:bg-neutral-950 text-gold-100 hover:text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer select-none"
            >
              <span>{isExpanded ? 'SEE LESS DETAILS' : 'SEE MORE DETAILS'}</span>
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
                    <p className="line-clamp-4">{pkg.description}</p>
                  </div>

                  {/* Meta Attributes (Location, Difficulty, Capacity) */}
                  <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/40 space-y-2 text-xs text-gold-100 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-gold-500" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={13} className="text-gold-500" />
                      <span>{pkg.difficulty}</span>
                    </div>
                  </div>

                  {/* Highlights with subtle checkmarks */}
                  <div className="space-y-1.5 pt-1">
                    {pkg.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-0.5 rounded-full bg-gold-500/20 p-0.5 border border-gold-500/30 flex-shrink-0">
                          <Check size={9} className="text-gold-400" />
                        </div>
                        <span className="text-[11px] text-gold-100/80 leading-tight font-sans line-clamp-2">
                          {hl}
                        </span>
                      </div>
                    ))}
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
              <span className="text-[11px] text-gold-200/40 block font-sans">Duration</span>
              <span className="text-sm font-bold text-white font-sans">{pkg.durationBadge}</span>
            </div>

            {/* Right: Pricing & You Save */}
            <div className="text-right">
              <span className="text-xs text-gold-200/60 font-sans block mb-0.5">
                From <span className="font-semibold text-red-500 line-through">$\${pkg.originalPrice}</span>
              </span>
              <div className="text-2xl font-black text-white leading-none my-0.5">
                $\${pkg.discountedPrice}
              </div>
              <span className="text-[11px] font-bold text-green-500 block font-sans">
                You save $\${pkg.savings}
              </span>
            </div>
          </div>

          {/* View Details Action Button */}
          <button
            onClick={() => {
              setSelectedPackageId(pkg.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-white font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>View Details</span>
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-neutral-950 min-h-screen text-left">
      <div className="max-w-7xl mx-auto">
        {!selectedPackage ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight uppercase">
                  Multi Days
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
            </div>

            {/* Cards Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {multiDayPackages.map((pkg) => renderPackageCard(pkg))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-10"
          >
            {/* Top Navigation & Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-5">
              <button
                onClick={() => setSelectedPackageId(null)}
                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Packages</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>Tour Catalog</span>
                <span>/</span>
                <span>{selectedPackage.categoryTag}</span>
                <span>/</span>
                <span className="text-gold-500 font-medium truncate max-w-[240px]">{selectedPackage.title}</span>
              </div>
            </div>

            {/* Hero Section / Title & Badges */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-md shadow-md font-mono">
                  {selectedPackage.badge}
                </span>
                <span className="bg-neutral-800 text-green-500 border border-green-500/40 font-bold text-xs px-3 py-1 rounded-md font-mono flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>{selectedPackage.difficulty}</span>
                </span>
                <div className="flex items-center gap-1 text-xs text-gold-400 font-semibold bg-neutral-800 px-3 py-1 rounded-md border border-neutral-700">
                  <Star size={13} className="fill-gold-400" />
                  <span>{selectedPackage.rating} / 5.0 ({selectedPackage.reviewCount}+ Reviews)</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
                    {selectedPackage.title}
                  </h1>
                  <div className="h-1.5 w-32 bg-gold-500 rounded-full mt-2" />
                </div>
              </div>

              <p className="text-sm text-neutral-300 font-medium flex items-center gap-2 mt-2">
                <MapPin size={16} className="text-gold-500" />
                {selectedPackage.tagline}
              </p>
            </div>

            {/* Image Gallery Header */}
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/60 bg-neutral-900 group">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
            </div>

            {/* 1. INFORMASI PAKET (OVERVIEW & DETAILS) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-4">
                  <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
                      <Navigation size={18} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white">Overview</h2>
                  </div>
                  <p className="text-sm text-neutral-200 leading-relaxed font-light">
                    {selectedPackage.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700/60 shadow-xl space-y-4 sticky top-24">
                  <h3 className="font-bold text-white text-lg pb-3 border-b border-neutral-700/60">
                    Package Pricing
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-neutral-400 font-medium">Adult</span>
                      <div className="text-right">
                        <span className="text-xs text-red-500 line-through mr-2">$\${selectedPackage.originalPrice}</span>
                        <span className="text-2xl font-black text-white">$\${selectedPackage.adultPrice}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-sm text-neutral-400 font-medium">Child</span>
                      <span className="text-xl font-bold text-neutral-200">$\${selectedPackage.childPrice}</span>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                      <span className="text-xs font-bold text-green-400">
                        You Save $\${selectedPackage.savings} (40% OFF)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onBookNow(selectedPackage.id)}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-neutral-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-gold-500/20 active:scale-[0.98] cursor-pointer"
                  >
                    BOOK NOW
                  </button>
                  <p className="text-[11px] text-center text-neutral-400 mt-2">
                    Instant confirmation. Best price guaranteed.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. SOROTAN UTAMA (HIGHLIGHTS) */}
            <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
                  <Sparkles size={18} />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Highlights</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {selectedPackage.highlights.map((item, idx) => (
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

            {/* 3. JADWAL KEGIATAN (ITINERARY) */}
            <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-6">
              <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
                  <Clock size={18} />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Itinerary</h2>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-neutral-700">
                {selectedPackage.itinerary.map((item, idx) => (
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

            {/* 4. RINCIAN BIAYA (INCLUDES & EXCLUDES) */}
            <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-6">
              <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
                  <ShieldCheck size={18} />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Cost Includes & Excludes</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Includes */}
                <div className="bg-neutral-900/80 rounded-xl p-5 border border-green-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-green-500 font-bold text-sm pb-2 border-b border-neutral-700/50">
                    <Check size={18} className="stroke-[3]" />
                    <span>Includes:</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-neutral-300">
                    {selectedPackage.inclusions.map((inc, idx) => (
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
                    <span>Excludes:</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-neutral-300">
                    {selectedPackage.exclusions.map((exc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px]">✕</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
`

fs.writeFileSync('src/components/TourCatalog.tsx', content);
