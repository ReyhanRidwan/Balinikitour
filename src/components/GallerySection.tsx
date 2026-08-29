import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PHOTOS } from '../data';
import { useLanguage } from '../i18n/LanguageContext';

type GalleryCategory = 'all' | 'destination' | 'atv' | 'rafting-kayak';

export default function GallerySection() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = GALLERY_PHOTOS.filter(
    (photo) => filter === 'all' || photo.category === filter
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxIndex(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % filteredPhotos.length;
    setLightboxIndex(nextIdx);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'destination':
        return language === 'id' ? 'Destinasi Bali' : 'Bali Destinations';
      case 'atv':
        return 'ATV Quad & Off-Road';
      case 'rafting-kayak':
        return language === 'id' ? 'Rafting & Kayaking' : 'Rafting & Watersports';
      default:
        return 'Bali Experience';
    }
  };

  return (
    <section id="gallery" className="py-24 bg-neutral-950 text-gold-100 font-sans border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Headers */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Galeri Visual Tur' : 'Visual Tour Gallery'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight"
          >
            {language === 'id' 
              ? 'Dokumentasi Destinasi, ATV & Petualangan Air' 
              : 'Bali Destinations, ATV & Water Expeditions Gallery'}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-full mx-auto mt-3 sm:mt-3.5"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {language === 'id'
              ? 'Koleksi foto otentik destinasi eksotis Bali, sensasi off-road ATV melintasi gua gorilla & trek lumpur, serta jeram arung jeram Telaga Waja & Ayung River.'
              : 'Authentic photo captures from Bali’s exotic locales, thrilling gorilla cave ATV trails, muddy off-road circuits, and high-energy river rafting on Telaga Waja & Ayung.'}
          </motion.p>

          {/* Filter Toggles */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8" id="gallery-filters">
            {[
              { id: 'all', label: language === 'id' ? 'Semua Koleksi' : 'All Collections' },
              { id: 'destination', label: language === 'id' ? 'Destinasi Wisata' : 'Destinations' },
              { id: 'atv', label: 'ATV & Off-Road' },
              { id: 'rafting-kayak', label: language === 'id' ? 'Rafting & Kayaking' : 'Rafting & Watersports' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as GalleryCategory)}
                className={`py-2 px-5 rounded-full text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 border-amber-500 text-white shadow-lg shadow-amber-500/20 font-bold'
                    : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photogrid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={`${photo.url}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden cursor-pointer shadow-xl hover:border-amber-500/50 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Cover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Category Badge Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-black/60 backdrop-blur-md text-amber-400 border border-amber-500/30">
                  {getCategoryLabel(photo.category)}
                </span>
              </div>

              {/* Details Overlay Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col justify-end text-left">
                <h3 className="font-serif text-base sm:text-lg text-white font-bold tracking-wide leading-snug group-hover:text-amber-300 transition-colors drop-shadow-md">
                  {photo.title}
                </h3>
                
                {photo.location && (
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{photo.location}</span>
                  </div>
                )}
                
                {/* Enlarge Symbol */}
                <div className="mt-3 flex items-center space-x-1.5 text-[11px] font-mono tracking-wider text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Eye size={13} className="text-amber-400" />
                  <span>{language === 'id' ? 'Lihat Foto Penuh' : 'View Full Image'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty search fallback */}
        {filteredPhotos.length === 0 && (
          <div className="py-16 text-center text-neutral-400 font-mono text-sm space-y-2">
            <ImageIcon size={32} className="mx-auto text-neutral-600" />
            <p>{language === 'id' ? 'Belum ada foto yang cocok dengan kategori ini.' : 'No photos found matching this category.'}</p>
          </div>
        )}

        {/* Full screen Lightbox overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 md:p-12 select-none"
              id="gallery-lightbox"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-neutral-900/80 border border-neutral-700 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              {/* Prev Trigger */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 bg-neutral-900/80 border border-neutral-700 hover:border-amber-400 text-white p-3 rounded-full transition-colors z-50 cursor-pointer shadow-xl"
                aria-label="Previous photograph"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Active Slide */}
              <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
                <img
                  src={filteredPhotos[lightboxIndex].url}
                  alt={filteredPhotos[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  onClick={(e) => e.stopPropagation()}
                  className="object-contain max-h-[70vh] sm:max-h-[75vh] w-auto rounded-xl border border-amber-500/30 shadow-2xl"
                />
                <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold mb-1 block">
                    {getCategoryLabel(filteredPhotos[lightboxIndex].category)}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-white font-bold tracking-wide">
                    {filteredPhotos[lightboxIndex].title}
                  </h4>
                  {filteredPhotos[lightboxIndex].location && (
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 flex items-center justify-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{filteredPhotos[lightboxIndex].location}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Next Trigger */}
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 bg-neutral-900/80 border border-neutral-700 hover:border-amber-400 text-white p-3 rounded-full transition-colors z-50 cursor-pointer shadow-xl"
                aria-label="Next photograph"
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
