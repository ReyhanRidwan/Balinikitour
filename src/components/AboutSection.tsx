import React from 'react';
import { ShieldCheck, Compass, Users, Star, Award, Heart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl } from '../utils/cloudinary';

export default function AboutSection() {
  const { language } = useLanguage();

  const stats = [
    { label: language === 'id' ? 'PRO GUIDE BERSERTIFIKAT' : 'CERTIFIED PRO GUIDES', value: '100%' },
    { label: language === 'id' ? 'TETAMU VIP TAHUNAN' : 'ANNUAL VIP GUESTS', value: '5,000+' },
    { label: language === 'id' ? 'KEPUASAN MAKSIMAL' : 'CUSTOMER RATING', value: '4.95/5' },
    { label: language === 'id' ? 'ARMADA LUXURY PRIBADI' : 'PRIVATE LUXURY FLEET', value: '25+' },
  ];

  return (
    <div className="pt-28 pb-24 bg-neutral-950 text-gold-100 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold bg-gold-500/5 px-4 py-2 border border-gold-400/10 rounded-full inline-block">
            {language === 'id' ? 'Kisah Kami' : 'Our Story'}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-gold-100 font-medium tracking-tight leading-tight">
            {language === 'id' ? 'Pelopor Layanan Tour Privat Luxury di Bali' : 'Pioneer in Private Luxury Bali Tours'}
          </h1>
          <p className="font-sans text-sm md:text-base text-gold-200/60 leading-relaxed font-light">
            {language === 'id' 
              ? 'Didirikan dengan visi untuk mendefinisikan kembali arti kemewahan perjalanan, balinikitour menghadirkan pengalaman liburan privat yang eksklusif, aman, dan dirancang khusus untuk memenuhi ekspektasi tertinggi Anda.'
              : 'Founded with a vision to redefine bespoke luxury travel, balinikitour delivers exclusive, private, and secure holiday experiences crafted to exceed your highest expectations.'}
          </p>
        </div>

        {/* Brand Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24" id="about-brand-grid">
          {/* Left Column Text details */}
          <div className="space-y-8 text-left">
            <h2 className="font-serif text-2xl md:text-3xl text-gold-200 font-medium tracking-wide">
              {language === 'id' ? 'Misi Kami: Menghadirkan Momen Liburan Tanpa Batas' : 'Our Mission: Delivering Boundless Holiday Moments'}
            </h2>
            
            <p className="text-gold-200/70 text-sm leading-relaxed">
              {language === 'id'
                ? 'Di balinikitour, kami percaya bahwa setiap detik perjalanan Anda di Bali adalah berharga. Kami menolak paket wisata massal yang penuh sesak dan terburu-buru. Itulah sebabnya setiap itinerary yang kami buat bersifat 100% privat, fleksibel, dan ditemani oleh pemandu bersertifikasi internasional.'
                : 'At balinikitour, we believe every second of your journey in Bali is priceless. We reject crowded, rushed mass tours. Every itinerary we design is 100% private, flexible, and led by internationally certified, multilingual guides.'}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-400/10 border border-gold-400/20 text-gold-400 rounded-sm mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gold-100 font-medium">
                    {language === 'id' ? 'Prioritas Keamanan & Kenyamanan' : 'Safety & Comfort Priority'}
                  </h3>
                  <p className="text-gold-200/50 text-xs leading-relaxed mt-1">
                    {language === 'id'
                      ? 'Semua armada kami melalui pemeriksaan keamanan berkala standar tinggi. Pemandu off-road dan instruktur arung jeram kami memiliki lisensi resmi internasional.'
                      : 'All vehicles undergo rigorous safety inspections. Our adventure guides and drivers hold certified professional licenses and high safety accreditations.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-400/10 border border-gold-400/20 text-gold-400 rounded-sm mt-1">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gold-100 font-medium">
                    {language === 'id' ? 'Eksplorasi yang Dipersonalisasi' : 'Personalized Exploration'}
                  </h3>
                  <p className="text-gold-200/50 text-xs leading-relaxed mt-1">
                    {language === 'id'
                      ? 'Rencana perjalanan bersifat santai dan fleksibel. Anda dapat meminta penyesuaian menu kuliner, waktu penjemputan, atau rute tambahan secara langsung selama perjalanan.'
                      : 'Itineraries are relaxed and completely adaptable. Customize dining stops, pickup times, or scenic detours on the fly.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gold-400/10 border border-gold-400/20 text-gold-400 rounded-sm mt-1">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gold-100 font-medium">
                    {language === 'id' ? 'Berdampak pada Lingkungan Lokal' : 'Sustainable & Local Community Impact'}
                  </h3>
                  <p className="text-gold-200/50 text-xs leading-relaxed mt-1">
                    {language === 'id'
                      ? 'Sebagian hasil dari pesanan Anda disalurkan langsung untuk pelestarian terumbu karang di Nusa Penida serta kesejahteraan komunitas adat pemandu lokal di Kintamani.'
                      : 'A portion of every booking directly supports coral reef conservation in Nusa Penida and local community guides across Bali.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 h-[480px] lg:h-[540px] group shadow-2xl bg-neutral-900" id="about-visual-panel">
            <img
              src={getOptimizedCloudinaryUrl("https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png", { width: 800, quality: 'auto', format: 'auto' })}
              alt="Ubud Cultural & Nature Destination - Sacred Monkey Forest and Waterfalls"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left space-y-2">
              <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded border border-amber-500/30 inline-block">
                Ubud Sanctuary & Heritage
              </span>
              <h3 className="font-serif text-2xl text-gold-100 font-medium">
                {language === 'id' ? 'Keasrian Budaya & Alam Ubud' : 'Cultural & Natural Splendor of Ubud'}
              </h3>
              <p className="text-gold-200/70 text-xs leading-relaxed max-w-md">
                {language === 'id'
                  ? 'Menghadirkan keindahan spiritual, hutan tropis Sacred Monkey Forest, lembah air terjun alami, dan tradisi Bali yang otentik dalam setiap perjalanan privat Anda.'
                  : 'Delivering spiritual serenity, lush Monkey Forest sanctuaries, hidden valley waterfalls, and authentic Balinese heritage on every private journey.'}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-neutral-900/40 border border-gold-400/10 p-8 rounded-lg text-center" id="about-stats-strip">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="font-mono text-2xl md:text-4xl text-gold-400 font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-[9px] md:text-[11px] text-gold-200/40 tracking-wider uppercase font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
