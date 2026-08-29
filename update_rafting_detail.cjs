const fs = require('fs');

let code = fs.readFileSync('src/components/RaftingDetailPage.tsx', 'utf-8');

// 1. Ensure Navigation is imported from lucide-react
if (!code.includes('Navigation,')) {
  code = code.replace("  Phone,", "  Navigation,\n  Phone,");
}

// 2. Find start of export default function RaftingDetailPage
const funcIndex = code.indexOf('export default function RaftingDetailPage');

if (funcIndex !== -1) {
  const dataPart = code.substring(0, funcIndex);

  const newComponent = `export default function RaftingDetailPage({ packageId, onBack, onBookNow }: RaftingDetailProps) {
  // Resolve package data from dictionary or fallback to telaga-waja-rafting
  const pkgData: PackageDetailData = PACKAGE_DETAILS_DATA[packageId] || PACKAGE_DETAILS_DATA['telaga-waja-rafting'];

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
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>Tour Catalog</span>
          <span>/</span>
          <span>Paket Wisata</span>
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
              <span>{pkgData.rating} / 5.0 ({pkgData.reviewCount || 100}+ Ulasan)</span>
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
              <span>Lihat Sumber Resmi</span>
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
          src={pkgData.image}
          alt={pkgData.title}
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
                <Navigation size={18} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">Overview</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
              <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center gap-3">
                <Clock size={18} className="text-gold-500 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-neutral-400 block font-mono">DURASI</span>
                  <span className="font-bold text-white">{pkgData.duration}</span>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center gap-3">
                <Activity size={18} className="text-gold-500 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-neutral-400 block font-mono">TINGKAT KESULITAN</span>
                  <span className="font-bold text-white">{pkgData.difficulty}</span>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center gap-3">
                <Users size={18} className="text-gold-500 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-neutral-400 block font-mono">BATAS USIA</span>
                  <span className="font-bold text-white">{pkgData.ageLimit || 'All Ages'}</span>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-900/80 rounded-xl border border-neutral-700/50 flex items-center gap-3">
                <ShieldCheck size={18} className="text-gold-500 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-neutral-400 block font-mono">ASURANSI</span>
                  <span className="font-bold text-white">Termasuk / Included</span>
                </div>
              </div>
            </div>

            {pkgData.pickupAreas && pkgData.pickupAreas.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold-500" size={16} />
                  <h3 className="font-semibold text-white text-sm">Area Penjemputan Gratis (Free Pickup):</h3>
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
                  <span>Penyelenggara Tour ({pkgData.organizerContact.name})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>WhatsApp / Telp: <strong className="text-white">{pkgData.organizerContact.phone}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-sky-400 flex-shrink-0" />
                    <span>Email: <strong className="text-white">{pkgData.organizerContact.email}</strong></span>
                  </div>
                  <div className="sm:col-span-2 flex items-start gap-2 text-[11px] text-neutral-400">
                    <MapPin size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span>Alamat: {pkgData.organizerContact.address}</span>
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
              <span>Package Pricing</span>
              <span className="text-xs text-gold-500 font-mono bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/30">BEST PRICE</span>
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-sm text-neutral-400 font-medium">Adult</span>
                <div className="text-right">
                  <span className="text-xs text-red-500 line-through mr-2">${pkgData.originalPrice}</span>
                  <span className="text-2xl font-black text-white">${pkgData.adultPrice}</span>
                </div>
              </div>
              {pkgData.childPrice > 0 && (
                <div className="flex justify-between items-end">
                  <span className="text-sm text-neutral-400 font-medium">Child</span>
                  <span className="text-xl font-bold text-neutral-200">${pkgData.childPrice}</span>
                </div>
              )}
            </div>

            {/* Interactive Calculator Controls */}
            <div className="space-y-3 pt-3 border-t border-neutral-700/50">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                  <Calendar size={13} className="text-gold-500" />
                  <span>Pilih Tanggal Tour</span>
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
                    <span>Area Penjemputan</span>
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
                  <span className="text-xs font-bold text-white block">Dewasa (Adult)</span>
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
                  <span className="text-xs font-bold text-white block">Anak (Child)</span>
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
                  Total Bayar: ${totalPrice}
                </span>
              </div>
            </div>

            <button
              onClick={handleBookingSubmit}
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

      {/* 2. HIGHLIGHTS (SOROTAN UTAMA) */}
      {pkgData.highlights && pkgData.highlights.length > 0 && (
        <div className="bg-neutral-800 rounded-2xl p-6 sm:p-7 border border-neutral-700/60 shadow-xl space-y-4">
          <div className="flex items-center gap-2.5 border-b border-neutral-700/60 pb-3">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-500">
              <Sparkles size={18} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Highlights</h2>
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
            <h2 className="text-lg sm:text-xl font-bold text-white">Itinerary</h2>
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
              <span>Excludes:</span>
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
            <h2 className="text-lg sm:text-xl font-bold text-white">Perlengkapan yang Wajib Dibawa (Need to Bring)</h2>
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
    </motion.div>
  );
}
`;

  fs.writeFileSync('src/components/RaftingDetailPage.tsx', dataPart + newComponent);
  console.log('Successfully updated RaftingDetailPage.tsx to Multi Days design style!');
} else {
  console.error('Could not find RaftingDetailPage function');
}
