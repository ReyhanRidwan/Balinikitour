const fs = require('fs');

const content = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, MapPin, ArrowRight, ShieldCheck, Map, ArrowLeft, Check, Compass, Navigation, Waves, ChevronDown, ChevronUp } from 'lucide-react';
import { Experience } from '../types';

interface TourCatalogProps {
  onBookNow: (experienceId: string) => void;
  onViewDetails: (experienceId: string) => void;
}

type ViewState = 'overview' | 'detail';

export default function TourCatalog({ onBookNow }: TourCatalogProps) {
  const [currentView, setCurrentView] = useState<ViewState>('overview');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const multiDayPackage = {
    id: 'bali-culture-heritage-3-days',
    title: 'Bali’s Culture Heritage and Natural Beauty',
    categoryTag: 'Multi Days',
    originalPrice: 263,
    discountedPrice: 263,
    savings: 0,
    discountPercentage: 0,
    duration: '3 Days',
    location: 'Bali',
    difficulty: 'Free & Easy',
    capacity: '1 Person',
    description: 'Embrace the cultural heritage and natural beauty of Bali through its remarkable thousand temples, enchanting Sacred Monkey Forest, and exquisite Balinese art. Explore mountain landscapes, rice fields, and enjoy a complimentary Banana Boat Ride.',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png',
    highlights: [
      'Visit remarkable temples and the enchanting Sacred Monkey Forest',
      'Explore exquisite Balinese art crafted by local people',
      'Mountain landscapes, rice fields, beaches, and sea activities',
      'Enjoy a complimentary Banana Boat Ride'
    ]
  };

  const renderPackageCard = () => {
    return (
      <motion.div
        layout
        className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-neutral-800/60 flex flex-col justify-between group hover:border-gold-500/60 hover:shadow-2xl transition-all duration-300 text-white w-full max-w-sm"
      >
        <div>
          {/* Card Image with Discount Badge and Pin Icon */}
          <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-950">
            <img
              src={multiDayPackage.image}
              alt={multiDayPackage.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Top-Right Category Badge */}
            <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 text-gold-300 font-bold text-[11px] px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
              <Waves size={11} className="text-gold-500" />
              <span>{multiDayPackage.categoryTag}</span>
            </div>

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
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/40">
                <Waves size={11} />
                <span>Kategori: {multiDayPackage.categoryTag}</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-bold text-lg text-white group-hover:text-gold-300 transition-colors leading-snug line-clamp-2 min-h-[52px]">
              {multiDayPackage.title}
            </h3>

            {/* SEE MORE DETAILS Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
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
                    <p>{multiDayPackage.description}</p>
                  </div>

                  {/* Meta Attributes (Location, Difficulty, Capacity) */}
                  <div className="p-3 bg-neutral-950/60 rounded-xl border border-neutral-800/40 space-y-2 text-xs text-gold-100 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-gold-500" />
                      <span>{multiDayPackage.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={13} className="text-gold-500" />
                      <span>{multiDayPackage.difficulty}</span>
                    </div>
                  </div>

                  {/* Highlights with subtle checkmarks */}
                  <div className="space-y-1.5 pt-1">
                    {multiDayPackage.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-0.5 rounded-full bg-gold-500/20 p-0.5 border border-gold-500/30 flex-shrink-0">
                          <Check size={9} className="text-gold-400" />
                        </div>
                        <span className="text-[11px] text-gold-100/80 leading-tight font-sans">
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

        {/* Action Bottom */}
        <div className="px-5 sm:px-6 pb-6 space-y-4 pt-4 border-t border-neutral-800/50 bg-neutral-900/40">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-gold-200/50 font-medium uppercase tracking-widest font-mono mb-1">
                Duration
              </p>
              <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                <span>{multiDayPackage.duration}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-baseline justify-end gap-1.5">
                <span className="text-xl sm:text-2xl font-sans font-extrabold text-white leading-none">
                  $\\{multiDayPackage.discountedPrice}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setCurrentView('detail');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full bg-[#B8860B] hover:bg-[#DAA520] active:bg-[#996515] text-white font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            View Details
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-neutral-950 min-h-screen text-left">
      <div className="max-w-7xl mx-auto">
        {currentView === 'overview' ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
                  Multi Days
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
              <p className="text-sm text-gold-100 max-w-2xl leading-relaxed">
                Jelajahi keindahan murni alam Bali dengan layanan VIP privat selama beberapa hari.
              </p>
            </div>

            {/* Cards Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {renderPackageCard()}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-neutral-800"
          >
            <div className="relative h-64 md:h-80 w-full">
              <img src={multiDayPackage.image} alt={multiDayPackage.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
              <button
                onClick={() => setCurrentView('overview')}
                className="absolute top-6 left-6 bg-black/50 backdrop-blur-md p-2 rounded-full text-gold-100 hover:text-white hover:bg-black/70 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-gold-500/20 border border-gold-500/40 text-gold-300 rounded-md text-xs font-mono mb-3">
                  Multi Days Tour
                </span>
                <h1 className="text-2xl md:text-4xl font-bold text-white font-sans">{multiDayPackage.title}</h1>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div className="flex flex-wrap gap-4 text-sm font-medium text-gold-100">
                <div className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700">
                  <Clock size={16} className="text-gold-400" /> 3 Days
                </div>
                <div className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700">
                  <MapPin size={16} className="text-gold-400" /> Ngurah Rai Airport
                </div>
                <div className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700">
                  <ShieldCheck size={16} className="text-gold-400" /> Free & Easy
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                <p className="text-gold-100 leading-relaxed font-light">{multiDayPackage.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Itinerary Summary</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
                    <h4 className="font-bold text-gold-300 mb-2">Day 1: Arrival</h4>
                    <p className="text-sm text-gold-100 font-light">Meet and greet at Ngurah Rai Airport. Transfer to your hotel for an overnight stay.</p>
                  </div>
                  <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
                    <h4 className="font-bold text-gold-300 mb-2">Day 2: Kintamani & Ubud</h4>
                    <p className="text-sm text-gold-100 font-light">Barong Dance, Art Village, Tirta Empul, Mount Batur view, Tegallalang Rice Terrace, and Monkey Forest.</p>
                  </div>
                  <div className="p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
                    <h4 className="font-bold text-gold-300 mb-2">Day 3: Water Sports & Uluwatu</h4>
                    <p className="text-sm text-gold-100 font-light">Tanjung Benoa Water Sports (Complimentary Banana Boat), Padang Padang Beach, Uluwatu Temple, and Airport Transfer.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-neutral-800">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs text-gold-200/60 uppercase tracking-wider mb-1">Pricing</p>
                    <p className="text-2xl font-bold text-gold-400">$\\{multiDayPackage.discountedPrice} <span className="text-sm font-normal text-gold-100/60">/ Adult</span></p>
                    <p className="text-lg font-bold text-gold-400/80">$115 <span className="text-xs font-normal text-gold-100/60">/ Child</span></p>                  </div>
                  <button
                    onClick={() => onBookNow(multiDayPackage.id)}
                    className="bg-gold-500 hover:bg-gold-600 text-neutral-950 font-bold px-8 py-3 rounded-xl transition-colors shadow-lg"
                  >
                    Book Now
                  </button>
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
