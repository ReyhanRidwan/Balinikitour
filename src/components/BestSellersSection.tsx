import React from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl, generateCloudinarySrcSet } from '../utils/cloudinary';

export interface BestSellerPackage {
  id: string;
  price: string;
  title: string;
  duration: string;
  image: string;
  isFeatured?: boolean;
}

interface BestSellersSectionProps {
  onSelectPackage: (packageId: string) => void;
}

export default function BestSellersSection({ onSelectPackage }: BestSellersSectionProps) {
  const { language } = useLanguage();

  const featuredPackage: BestSellerPackage = {
    id: 'explore-balis-majestic-landscapes-5-days',
    price: '$472',
    title: language === 'id' 
      ? 'Jelajahi Lanskap Memukau & Warisan Budaya Bali'
      : 'Explore Bali’s Majestic Landscapes and Cultural Heritage',
    duration: language === 'id' ? '5 Hari - 4 Malam' : '5 Days - 4 Nights',
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787389204/47b5dfa9-787e-4ba6-aa77-2210b85d4160.png',
    isFeatured: true,
  };

  const gridPackages: BestSellerPackage[] = [
    {
      id: 'adventure-bali-swing-nungnung-ulundanu-lekeleke',
      price: '$30',
      title: language === 'id'
        ? 'Petualangan Bali Swing, Air Terjun Nungnung, Pura Ulun Danu & Leke Leke'
        : 'Adventure of Bali Swing, Nungnung Waterfall, Ulun Danu Temple & Leke Leke',
      duration: language === 'id' ? '10 Jam' : '10 Hours',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
    },
    {
      id: 'water-sport-beaches-uluwatu-dinner',
      price: '$32',
      title: language === 'id'
        ? 'Olahraga Air, Pantai Eksotis, Pura Uluwatu & Makan Malam Tepi Pantai'
        : 'Water Sports, Beaches, Uluwatu Temple & Beachside Dinner',
      duration: language === 'id' ? '8 Jam' : '8 Hours',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
    },
    {
      id: 'amazing-waterfall-monkey-forest',
      price: '$30',
      title: language === 'id'
        ? 'Pesona Air Terjun Menakjubkan & Hutan Monyet Ubud'
        : 'Amazing Waterfall and Monkey Forest Sanctuary',
      duration: language === 'id' ? '10 Jam' : '10 Hours',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
    },
    {
      id: 'nusa-penida-west-trip',
      price: '$45',
      title: language === 'id'
        ? 'Tur Eksklusif Nusa Penida Barat'
        : 'NUSA PENIDA ISLAND – WEST TRIP',
      duration: language === 'id' ? '10 Jam' : '10 Hours',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
    },
  ];

  return (
    <section
      id="best-sellers-section"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900/60 border-t border-b border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading with Decorative Line */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight"
          >
            {language === 'id' ? 'Paket Terlaris Kami' : 'Our Best Sellers Packages'}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-16 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-full mx-auto mt-3 sm:mt-3.5"
          />
        </div>

        {/* Responsive Layout: Desktop 1 Large + 4 Small (2x2), Tablet & Mobile Adaptive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* 1. Featured Large Card (Left Column - 50% width on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div
              id="best-seller-featured-card"
              onClick={() => onSelectPackage(featuredPackage.id)}
              className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] rounded-2xl overflow-hidden group cursor-pointer border border-neutral-800/80 hover:border-amber-500/50 shadow-2xl transition-all duration-300 bg-neutral-950"
            >
              {/* Background Image */}
              <img
                src={getOptimizedCloudinaryUrl(featuredPackage.image, { width: 1000, quality: 'auto', format: 'auto' })}
                srcSet={generateCloudinarySrcSet(featuredPackage.image, [640, 1024, 1920])}
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt={featuredPackage.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/15 transition-opacity duration-300 group-hover:via-black/55" />

              {/* Angular Price Ribbon Badge in Top-Left */}
              <div className="absolute top-4 left-0 z-20">
                <div
                  className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-base sm:text-lg px-4 sm:px-5 py-1.5 shadow-lg flex items-center tracking-wide font-sans drop-shadow-md"
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%)',
                  }}
                >
                  <span className="pr-2">{featuredPackage.price}</span>
                </div>
              </div>

              {/* Bottom Content Area: Title & Duration */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 z-10 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-serif font-bold text-white leading-snug drop-shadow-md group-hover:text-amber-300 transition-colors">
                  {featuredPackage.title}
                </h3>
                <div className="mt-2.5 sm:mt-3 flex items-center gap-2 text-sm sm:text-base text-neutral-200/90 font-medium">
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-400 shrink-0" />
                  <span>{featuredPackage.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 4 Small Cards (Right Column - 2x2 Grid on Desktop/Tablet) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {gridPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col"
              >
                <div
                  id={`best-seller-card-${idx + 2}`}
                  onClick={() => onSelectPackage(pkg.id)}
                  className="relative w-full h-full min-h-[250px] sm:min-h-[265px] lg:min-h-[268px] rounded-2xl overflow-hidden group cursor-pointer border border-neutral-800/80 hover:border-amber-500/50 shadow-xl transition-all duration-300 bg-neutral-950"
                >
                  {/* Background Image */}
                  <img
                    src={getOptimizedCloudinaryUrl(pkg.image, { width: 600, quality: 'auto', format: 'auto' })}
                    srcSet={generateCloudinarySrcSet(pkg.image, [300, 450, 600])}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    alt={pkg.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/15 transition-opacity duration-300 group-hover:via-black/60" />

                  {/* Angular Price Ribbon Badge in Top-Left */}
                  <div className="absolute top-3.5 left-0 z-20">
                    <div
                      className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-sm sm:text-base px-3.5 sm:px-4 py-1 shadow-lg flex items-center tracking-wide font-sans drop-shadow-md"
                      style={{
                        clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%)',
                      }}
                    >
                      <span className="pr-2">{pkg.price}</span>
                    </div>
                  </div>

                  {/* Bottom Content Area: Title & Duration */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                    <h3 className="text-sm sm:text-base font-serif font-bold text-white leading-snug drop-shadow-md group-hover:text-amber-300 transition-colors line-clamp-3">
                      {pkg.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm text-neutral-200/90 font-medium">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
