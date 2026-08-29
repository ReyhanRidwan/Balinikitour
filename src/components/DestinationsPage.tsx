import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl } from '../utils/cloudinary';

interface DestinationItem {
  id: string;
  name: string;
  tripsCount: number;
  image: string;
}

const DESTINATIONS: DestinationItem[] = [
  {
    id: 'bedugul',
    name: 'Bedugul',
    tripsCount: 7,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396469/55789d88-0e33-4fb1-8165-183964e9879a.png',
  },
  {
    id: 'candidasa-amed',
    name: 'Candidasa and Amed',
    tripsCount: 2,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396762/821eee62-70ba-4a23-849c-216504284334.png',
  },
  {
    id: 'jimbaran-nusa-dua',
    name: 'Jimbaran and Nusa Dua',
    tripsCount: 7,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396840/8e5c9a57-4402-40b0-8c97-91721df7b029.png',
  },
  {
    id: 'kuta-legian',
    name: 'Kuta and Legian',
    tripsCount: 5,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396965/924f8055-ab12-42f2-845e-6347471ff305.png',
  },
  {
    id: 'nusa-penida-lembongan',
    name: 'Nusa Penida and Nusa Lembongan',
    tripsCount: 2,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397088/74fe9ef3-c143-4676-80ff-a1afa5ea370a.png',
  },
  {
    id: 'sanur',
    name: 'Sanur',
    tripsCount: 1,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397152/f868a9ee-8917-4270-9a47-c52b9362bd4e.png',
  },
  {
    id: 'seminyak-canggu',
    name: 'Seminyak and Canggu',
    tripsCount: 1,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397321/694437a5-182c-49a0-b8bd-6123869b78a7.png',
  },
  {
    id: 'ubud',
    name: 'Ubud',
    tripsCount: 18,
    image: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397434/c67903ef-d494-4a2d-8614-e2e2964fc934.png',
  },
];

interface DestinationsPageProps {
  onSelectDestination?: (destinationName: string) => void;
}

export default function DestinationsPage({ onSelectDestination }: DestinationsPageProps) {
  const { language, t } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen text-white text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title with gold indicator to match other pages */}
        <div className="space-y-2">
          <div className="inline-block">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight uppercase">
              {language === 'id' ? 'Destinasi Wisata Bali' : language === 'zh' ? '巴厘岛热门旅游目的地' : language === 'ru' ? 'Туристические направления Бали' : 'Bali Tour Destinations'}
            </h1>
            <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium max-w-lg mt-3">
            {language === 'id' 
              ? 'Temukan keindahan lokasi terbaik di Bali dengan beragam pilihan paket trip menarik' 
              : language === 'zh'
              ? '探索巴厘岛最负盛名的旅游胜地与多样化的独家定制行程'
              : language === 'ru'
              ? 'Откройте для себя лучшие места Бали с широким выбором захватывающих туров'
              : 'Discover the best destinations across Bali with our handpicked private tour packages'}
          </p>
        </div>

        {/* Destination Cards Grid - Clean 3 Columns as in image.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination && onSelectDestination(dest.name)}
              className="group cursor-pointer flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-neutral-900 border border-neutral-800/80 group-hover:shadow-xl group-hover:border-gold-500/40 transition-all duration-300">
                <img
                  src={getOptimizedCloudinaryUrl(dest.image, { width: 600, quality: 'auto', format: 'auto' })}
                  alt={dest.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title and Trips Count below image */}
              <div className="mt-3 sm:mt-4 text-center">
                <h3 className="text-base sm:text-lg font-bold text-neutral-200 group-hover:text-gold-400 transition-colors font-sans">
                  {dest.name}{' '}
                  <span className="text-xs sm:text-sm font-normal text-neutral-400 font-mono ml-1">
                    ({dest.tripsCount} {dest.tripsCount === 1 ? (language === 'id' ? 'Trip' : 'Trip') : (language === 'id' ? 'Trips' : 'Trips')})
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
