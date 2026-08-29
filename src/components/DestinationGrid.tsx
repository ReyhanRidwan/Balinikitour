import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowUpRight, MapPin, Compass } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl, generateCloudinarySrcSet } from '../utils/cloudinary';

interface DestinationCard {
  id: string;
  destinationName: string;
  title: string;
  tagline: string;
  rating: number;
  reviews: number;
  tripsCount: number;
  description: string;
  image: string;
  cols: string;
  rows: string;
  heightClass: string;
}

interface DestinationGridProps {
  onSelectDestination: (destinationName: string) => void;
  onBookNow?: (experienceId: string) => void;
}

export default function DestinationGrid({ onSelectDestination }: DestinationGridProps) {
  const { language } = useLanguage();

  const destinations: DestinationCard[] = [
    {
      id: 'nusa-penida-lembongan',
      destinationName: 'Nusa Penida and Nusa Lembongan',
      title: 'Nusa Penida and Nusa Lembongan',
      tagline: language === 'id' ? 'PELARIAN PULAU • 2 TUR' : 'ISLAND ESCAPE • 2 TRIPS',
      rating: 4.9,
      reviews: 380,
      tripsCount: 2,
      description: language === 'id' 
        ? 'Tebing karang spektakuler Kelingking T-Rex, Diamond Beach, Broken Beach, dan snorkeling jernih bersama pari manta liar di perairan kristal Nusa Lembongan.'
        : 'Spectacular Kelingking T-Rex cliffs, Diamond Beach, Broken Beach, and crystal-clear manta ray snorkeling in Nusa Lembongan waters.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397088/74fe9ef3-c143-4676-80ff-a1afa5ea370a.png',
      cols: 'lg:col-span-2',
      rows: 'lg:row-span-2',
      heightClass: 'h-[420px] lg:h-[530px]',
    },
    {
      id: 'sanur',
      destinationName: 'Sanur',
      title: 'Sanur',
      tagline: language === 'id' ? 'PANTAI MATAHARI TERBIT • 1 TUR' : 'SUNRISE COAST • 1 TRIP',
      rating: 4.8,
      reviews: 160,
      tripsCount: 1,
      description: language === 'id'
        ? 'Kawasan pesisir timur yang tenang dengan jalur sepeda tepi pantai, fajar matahari terbit yang damai, dan atmosfer rileks khas Bali.'
        : 'Tranquil eastern coastline featuring beachfront cycling promenades, peaceful sunrises, and a serene classic Balinese ambiance.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397152/f868a9ee-8917-4270-9a47-c52b9362bd4e.png',
      cols: 'lg:col-span-1',
      rows: 'lg:row-span-1',
      heightClass: 'h-[250px]',
    },
    {
      id: 'kuta-legian',
      destinationName: 'Kuta and Legian',
      title: 'Kuta and Legian',
      tagline: language === 'id' ? 'SENJA & SELANCAR • 5 TUR' : 'SUNSET & SURF • 5 TRIPS',
      rating: 4.8,
      reviews: 420,
      tripsCount: 5,
      description: language === 'id'
        ? 'Garis pantai pasir emas legendaris dengan ombak selancar kelas dunia, pusat hiburan semarak, dan panorama matahari terbenam memukau.'
        : 'Legendary golden sand coastlines with world-class surf breaks, vibrant entertainment, and sensational sunset vistas.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396965/924f8055-ab12-42f2-845e-6347471ff305.png',
      cols: 'lg:col-span-1',
      rows: 'lg:row-span-1',
      heightClass: 'h-[264px]',
    },
    {
      id: 'ubud',
      destinationName: 'Ubud',
      title: 'Ubud',
      tagline: language === 'id' ? 'JANTUNG BUDAYA • 18 TUR' : 'CULTURAL HEART • 18 TRIPS',
      rating: 4.9,
      reviews: 580,
      tripsCount: 18,
      description: language === 'id'
        ? 'Jantung seni dan budaya Bali, sawah terasering Tegalalang yang hijau asri, Sacred Monkey Forest Sanctuary, dan retret kesehatan holistik.'
        : 'The cultural heartbeat of Bali, emerald Tegalalang rice terraces, Sacred Monkey Forest sanctuary, and holistic wellness retreats.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397434/c67903ef-d494-4a2d-8614-e2e2964fc934.png',
      cols: 'lg:col-span-2',
      rows: 'lg:row-span-1',
      heightClass: 'h-[280px]',
    },
    {
      id: 'bedugul',
      destinationName: 'Bedugul',
      title: 'Bedugul',
      tagline: language === 'id' ? 'DATARAN TINGGI & DANAU • 7 TUR' : 'HIGHLAND & LAKE • 7 TRIPS',
      rating: 4.9,
      reviews: 310,
      tripsCount: 7,
      description: language === 'id'
        ? 'Dataran tinggi sejuk berkabut dengan Pura Ulun Danu Beratan yang mengapung di danau, kebun raya tropis, dan Handara Gate yang magis.'
        : 'Misty cool highlands featuring the iconic floating Ulun Danu Beratan temple, lush botanical gardens, and the magical Handara Gate.',
      image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396469/55789d88-0e33-4fb1-8165-183964e9879a.png',
      cols: 'lg:col-span-1',
      rows: 'lg:row-span-1',
      heightClass: 'h-[280px]',
    }
  ];

  return (
    <section id="exclusive-destinations" className="pt-32 pb-20 px-4 md:px-8 bg-neutral-900 border-t border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-gold-400" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
                {language === 'id' ? 'Kurasi Eksklusif' : 'Bespoke Curations'}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-gold-100 font-medium tracking-wide">
              {language === 'id' ? 'Eksplorasi Destinasi Elit Bali' : 'Explore Bali’s Elite Destinations'}
            </h2>
          </div>
          <p className="max-w-md text-gold-200/60 text-sm font-sans leading-relaxed">
            {language === 'id'
              ? 'Pilihan destinasi terfavorit di Bali yang memadukan keindahan alam tropis, keagungan budaya leluhur, serta petualangan eksklusif.'
              : 'Our most beloved destinations across Bali, merging tropical natural wonder, timeless ancestral culture, and private luxury experiences.'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="bento-grid-destinations">
          {destinations.map((dest, idx) => (
            <motion.div
              key={`${dest.id}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className={`${dest.cols} ${dest.rows} ${dest.heightClass} relative rounded-xl overflow-hidden group shadow-xl shadow-black/40 cursor-pointer border border-gold-500/10`}
              onClick={() => onSelectDestination(dest.destinationName)}
            >
              {/* Background Image */}
              <img
                src={getOptimizedCloudinaryUrl(dest.image, { width: 800, quality: 'auto', format: 'auto' })}
                srcSet={generateCloudinarySrcSet(dest.image, [400, 600, 800])}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={dest.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Dark Overlays & Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 transition-opacity duration-300 group-hover:via-black/55" />
              <div className="absolute inset-0 bg-gold-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top Section: Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center bg-black/70 backdrop-blur-md text-[9px] font-mono uppercase tracking-[0.18em] text-gold-300 font-bold px-3 py-1.5 rounded-md border border-gold-500/20">
                  {dest.tagline}
                </span>
              </div>

              {/* Bottom Section: Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-3/4 z-10">
                
                {/* Rating Badge */}
                <div className="flex items-center gap-1.5 mb-2">
                  <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  <span className="font-mono text-[11px] text-gold-300 font-bold">
                    {dest.rating.toFixed(1)}
                  </span>
                  <span className="text-gold-200/50 text-[10px]">
                    ({dest.reviews} {language === 'id' ? 'ulasan' : 'reviews'})
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-gold-100 font-medium tracking-wide mb-2 group-hover:text-gold-300 transition-colors duration-300">
                  {dest.title}
                </h3>

                {/* Description */}
                <p className="text-gold-200/70 text-xs md:text-sm font-sans line-clamp-2 md:line-clamp-3 mb-4 leading-relaxed group-hover:text-gold-100/90 transition-colors duration-300">
                  {dest.description}
                </p>

                {/* Action CTA */}
                <div className="flex items-center gap-1.5 text-gold-400 text-xs font-mono uppercase tracking-wider group-hover:text-gold-300 transition-colors duration-300 mt-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Jelajahi Paket Destinasi' : 'Explore Destination Packages'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Gold border accent that glows on hover */}
              <div className="absolute inset-0 border border-gold-400/0 group-hover:border-gold-400/30 rounded-xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
