import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl, generateCloudinarySrcSet } from '../utils/cloudinary';

interface ActivitySectionProps {
  onBookNow: (experienceId: string) => void;
}

export default function ActivitySection({ onBookNow }: ActivitySectionProps) {
  const { language } = useLanguage();

  const adventureActivities = [
    {
      id: 'white-water-rafting',
      title: language === 'id' ? 'Whitewater Rafting' : 'Whitewater Rafting',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1786184128/e0699feb-0cd5-4d84-9055-d2819efa51a4.png',
      tagline: 'River Adventure',
      price: '$65'
    },
    {
      id: 'trekking',
      title: language === 'id' ? 'Trekking & Hiking' : 'Trekking & Hiking',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
      tagline: 'Mountain Sunrise',
      price: '$55'
    },
    {
      id: 'paragliding',
      title: language === 'id' ? 'Paragliding Tandem' : 'Paragliding Tandem',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052460/02018cef-c1e4-4d4c-b918-9c51ff9387b3.png',
      tagline: 'Cliff Flight',
      price: '$85'
    },
    {
      id: 'off-road-tours',
      title: language === 'id' ? 'Off Road & ATV' : 'Off Road & ATV Tours',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052559/bf039127-8977-4546-a0bf-aadde17504fd.png',
      tagline: '4x4 Mount Batur Sunrise',
      price: '$35'
    }
  ];

  return (
    <section id="luxury-activities" className="py-24 relative overflow-hidden bg-neutral-950">
      {/* Scenic Nature Backdrop with Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-[2px] scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header: Adventure Activities with orange/gold underline */}
        <div className="text-center mb-14">
          <h2 className="font-sans text-3xl md:text-5xl text-white font-normal tracking-wide">
            {language === 'id' ? 'Aktivitas Petualangan' : 'Adventure Activities'}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-3.5 rounded-full" />
        </div>

        {/* 4 Vertical Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adventureActivities.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              onClick={() => onBookNow(activity.id)}
              className="group relative aspect-[4/5] w-full rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 border border-white/5 hover:border-amber-500/30"
            >
              {/* Card Image with smooth hover scale */}
              <img
                src={getOptimizedCloudinaryUrl(activity.image, { width: 600, quality: 'auto', format: 'auto' })}
                srcSet={generateCloudinarySrcSet(activity.image, [300, 450, 600])}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                alt={activity.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay to ensure high contrast for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
              
              {/* Subtle top badge on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="bg-amber-500/90 backdrop-blur-sm text-neutral-950 font-mono text-[9px] uppercase tracking-wider font-bold py-1 px-2.5 rounded-full shadow-md flex items-center gap-1">
                  {language === 'id' ? 'Pesan Sekarang' : 'Book Now'} <ArrowRight size={10} />
                </span>
              </div>

              {/* Bottom-left Short Title */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                <h3 className="text-white font-sans text-lg md:text-xl font-medium tracking-wide drop-shadow-md group-hover:text-amber-300 transition-colors duration-300">
                  {activity.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety & VIP Service Guarantee Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 bg-neutral-900/40 border border-gold-900/15 rounded-xl p-5 backdrop-blur-sm">
          <div className="text-center p-3">
            <p className="font-mono text-amber-400 text-base md:text-lg font-bold">100% SAFE</p>
            <p className="font-sans text-[11px] text-white/50 mt-1">
              {language === 'id' ? 'Sertifikasi Standar Internasional' : 'International Safety Certified'}
            </p>
          </div>
          <div className="text-center p-3 border-l border-white/5">
            <p className="font-mono text-amber-400 text-base md:text-lg font-bold">VIP SERVICE</p>
            <p className="font-sans text-[11px] text-white/50 mt-1">
              {language === 'id' ? 'Antar-Jemput Hotel Privat' : 'Private Hotel Pickup & Transfer'}
            </p>
          </div>
          <div className="text-center p-3 border-l border-white/5">
            <p className="font-mono text-amber-400 text-base md:text-lg font-bold">PRO GUIDES</p>
            <p className="font-sans text-[11px] text-white/50 mt-1">
              {language === 'id' ? 'Instruktur Lisensi Resmi' : 'Officially Licensed Instructors'}
            </p>
          </div>
          <div className="text-center p-3 border-l border-white/5">
            <p className="font-mono text-amber-400 text-base md:text-lg font-bold">FLEXIBLE</p>
            <p className="font-sans text-[11px] text-white/50 mt-1">
              {language === 'id' ? 'Bebas Reschedule / Batal' : 'Free Reschedule & Cancellation'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

