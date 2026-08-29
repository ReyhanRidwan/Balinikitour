import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, MapPin, Navigation, ShieldCheck, Sparkles, Check, X as XIcon, Waves } from 'lucide-react';
import { multiDayPackages } from '../data/multiDayPackages';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedMultiDayPackage } from '../utils/localizedData';

interface MultiDayDetailProps {
  packageId: string;
  onBack: () => void;
  onBookNow: (experienceId: string) => void;
}

export default function MultiDayDetailPage({ packageId, onBack, onBookNow }: MultiDayDetailProps) {
  const { language } = useLanguage();
  const rawPackage = multiDayPackages.find(p => p.id === packageId) || multiDayPackages[0];
  const selectedPackage = getLocalizedMultiDayPackage(rawPackage, language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-10"
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
          <span className="bg-neutral-800 text-neutral-300 font-mono text-[11px] px-3 py-1 rounded-md border border-neutral-700/50">
            {language === 'id' ? 'Kategori:' : 'Category:'} {selectedPackage.categoryTag}
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-sans">
          {selectedPackage.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 pt-2">
          <div className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-lg border border-neutral-700">
            <Clock size={16} className="text-gold-500" />
            <span className="font-medium text-white">{selectedPackage.durationBadge}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="text-gold-500" />
            <span>{selectedPackage.tagline}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
        <img
          src={selectedPackage.image}
          alt={selectedPackage.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-4">
            <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
              <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
                <Navigation size={18} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {language === 'id' ? 'Gambaran Umum' : 'Overview'}
              </h2>
            </div>
            <p className="text-sm text-neutral-200 leading-relaxed font-light whitespace-pre-wrap">
              {selectedPackage.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700/60 shadow-xl space-y-4 sticky top-24">
            <h3 className="font-bold text-white text-lg pb-3 border-b border-neutral-700/60">
              {language === 'id' ? 'Harga Paket' : 'Package Pricing'}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm text-neutral-400 font-medium">{language === 'id' ? 'Dewasa' : 'Adult'}</span>
                <div className="text-right">
                  <span className="text-xs text-red-500 line-through mr-2">${selectedPackage.originalPrice}</span>
                  <span className="text-2xl font-black text-white">${selectedPackage.adultPrice}</span>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-neutral-400 font-medium">{language === 'id' ? 'Anak-anak' : 'Child'}</span>
                <span className="text-xl font-bold text-neutral-200">${selectedPackage.childPrice}</span>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                <span className="text-xs font-bold text-green-400">
                  {language === 'id' ? `Hemat $${selectedPackage.savings} (Diskon 40%)` : `You Save $${selectedPackage.savings} (40% OFF)`}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => onBookNow(selectedPackage.id)}
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

      {/* 2. SOROTAN UTAMA (HIGHLIGHTS) */}
      <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-4">
        <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
          <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
            <Sparkles size={18} />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            {language === 'id' ? 'Sorotan Utama' : 'Highlights'}
          </h2>
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
          <h2 className="text-lg sm:text-xl font-bold text-white">
            {language === 'id' ? 'Rencana Perjalanan' : 'Itinerary'}
          </h2>
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
          <h2 className="text-lg sm:text-xl font-bold text-white">
            {language === 'id' ? 'Fasilitas Termasuk & Tidak Termasuk' : 'Cost Includes & Excludes'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Includes */}
          <div className="bg-neutral-900/80 rounded-xl p-5 border border-green-500/30 space-y-3">
            <div className="flex items-center gap-2 text-green-500 font-bold text-sm pb-2 border-b border-neutral-700/50">
              <Check size={18} className="stroke-[3]" />
              <span>{language === 'id' ? 'Termasuk:' : 'Includes:'}</span>
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
              <span>{language === 'id' ? 'Tidak Termasuk:' : 'Excludes:'}</span>
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {selectedPackage.exclusions.map((exc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <XIcon size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
