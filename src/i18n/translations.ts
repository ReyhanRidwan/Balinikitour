export type Language = 'id' | 'en';

export interface TranslationDictionary {
  nav: {
    home: string;
    destinations: string;
    tours: string;
    activities: string;
    about: string;
    gallery: string;
    whyUs: string;
    contact: string;
    search: string;
    bookNow: string;
    hotline: string;
  };
  hero: {
    tagline: string;
    subtagline: string;
    bookExperience: string;
    exploreTours: string;
    searchDestination: string;
    allDestinations: string;
    tourCategory: string;
    allCategories: string;
    duration: string;
    allDurations: string;
    travelers: string;
    searchButton: string;
    dayTour: string;
    multiDay: string;
    adventure: string;
    waterSports: string;
    person: string;
    persons: string;
  };
  bestSellers: {
    badge: string;
    title: string;
    subtitle: string;
    perPerson: string;
    duration: string;
    viewDetails: string;
    bookNow: string;
    allInTitle: string;
    instantConfirmation: string;
    privateVehicle: string;
    freeCancellation: string;
  };
  destinations: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    culture: string;
    nature: string;
    beach: string;
    highland: string;
    island: string;
    tripsCount: string;
    exploreDestination: string;
    fromPrice: string;
  };
  activities: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    rafting: string;
    trekking: string;
    paragliding: string;
    atv: string;
    cycling: string;
    waterSports: string;
    bookActivity: string;
    viewDetails: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    privateTourTitle: string;
    privateTourDesc: string;
    guideTitle: string;
    guideDesc: string;
    priceTitle: string;
    priceDesc: string;
    customTitle: string;
    customDesc: string;
    fleetTitle: string;
    fleetDesc: string;
    supportTitle: string;
    supportDesc: string;
    expYears: string;
    happyGuests: string;
    satisfaction: string;
    privateGuarantee: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    securityTitle: string;
    securityDesc: string;
    customTitle: string;
    customDesc: string;
    statGuide: string;
    statGuests: string;
    statSatisfaction: string;
    statFleet: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    destinations: string;
    activities: string;
    culture: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    verifiedGuest: string;
    ratingText: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    hqTitle: string;
    hqDesc: string;
    hotlineTitle: string;
    hotlineDesc: string;
    emailTitle: string;
    hoursTitle: string;
    hoursDesc: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formTour: string;
    formTourPlaceholder: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    faqTitle: string;
    faqSubtitle: string;
  };
  footer: {
    desc: string;
    sustainableBadge: string;
    baliTime: string;
    quickLinks: string;
    popularDestinations: string;
    contactInfo: string;
    copyright: string;
    rights: string;
  };
  booking: {
    modalTitle: string;
    step1: string;
    step2: string;
    step3: string;
    selectPackage: string;
    selectDate: string;
    guestsCount: string;
    participantsManifest: string;
    participant: string;
    mainBookerTag: string;
    adult: string;
    child: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    country: string;
    countryPlaceholder: string;
    notes: string;
    notesPlaceholder: string;
    totalEstimated: string;
    continueToSummary: string;
    continueToParticipants: string;
    back: string;
    confirmWhatsApp: string;
    printVoucher: string;
    voucherTitle: string;
    voucherDesc: string;
    bookingCode: string;
    statusConfirmed: string;
    required: string;
    optional: string;
    close: string;
  };
  common: {
    perPerson: string;
    duration: string;
    hours: string;
    days: string;
    from: string;
    details: string;
    bookNow: string;
    allInclusive: string;
    privateTrip: string;
    search: string;
    cancel: string;
  };
}

export type TranslationKey = keyof TranslationDictionary;

export const translations: Record<Language, TranslationDictionary> = {
  // ==========================
  // BAHASA INDONESIA (ID)
  // ==========================
  id: {
    nav: {
      home: 'Beranda',
      destinations: 'Destinasi',
      tours: 'Paket Tour',
      activities: 'Tour & Activities',
      about: 'About',
      gallery: 'Gallery',
      whyUs: 'Why Us',
      contact: 'Contact',
      search: 'Pencarian',
      bookNow: 'Pesan Sekarang',
      hotline: 'Hotline Konsultan 24/7',
    },
    hero: {
      tagline: 'Eksplorasi Keajaiban Pulau Dewata',
      subtagline: 'Layanan tur privat eksklusif, petualangan alam murni, dan keindahan budaya Bali dengan standar kenyamanan tertinggi.',
      bookExperience: 'Pesan Sekarang',
      exploreTours: 'Jelajahi Paket Tour',
      searchDestination: 'Pilih Destinasi',
      allDestinations: 'Semua Destinasi di Bali',
      tourCategory: 'Kategori Tour',
      allCategories: 'Semua Kategori',
      duration: 'Durasi Tour',
      allDurations: 'Semua Durasi',
      travelers: 'Jumlah Peserta',
      searchButton: 'Cari Paket Wisata',
      dayTour: 'Day Tour (1 Hari)',
      multiDay: 'Paket Multi-Hari',
      adventure: 'Petualangan & Trekking',
      waterSports: 'Watersport & Rafting',
      person: 'Orang',
      persons: 'Orang',
    },
    bestSellers: {
      badge: 'PAKET TERPOPULER',
      title: 'Pilihan Favorit Wisatawan Mancanegara',
      subtitle: 'Rangkaian paket tur privat pilihan terbaik dengan ulasan bintang lima, itinerary terstruktur, dan pengalaman otentik.',
      perPerson: '/ orang',
      duration: 'Durasi',
      viewDetails: 'Detail Lengkap',
      bookNow: 'Reservasi Tur',
      allInTitle: 'All-Inclusive Termasuk Tiket & Driver Privat',
      instantConfirmation: 'Konfirmasi Instan',
      privateVehicle: 'Mobil Privat Nyaman',
      freeCancellation: 'Bisa Ubah Tanggal',
    },
    destinations: {
      badge: 'DESTINASI POPULER',
      title: 'Jelajahi Sudut Terbaik Pulau Bali',
      subtitle: 'Dari pantai tropis berpasir putih, candi bersejarah warisan leluhur, hingga pegunungan dan danau sejuk.',
      all: 'Semua Wilayah',
      culture: 'Budaya & Pura',
      nature: 'Air Terjun & Alam',
      beach: 'Pantai & Pesisir',
      highland: 'Danau & Pegunungan',
      island: 'Kepulauan Nusa',
      tripsCount: 'Pilihan Trip',
      exploreDestination: 'Lihat Paket',
      fromPrice: 'Mulai dari',
    },
    activities: {
      badge: 'PETUALANGAN & AKTIVITAS',
      title: 'Pacu Adrenalin di Alam Eksotis Bali',
      subtitle: 'Arung jeram sungai deras, mendaki matahari terbit di puncak gunung berapi, paralayang tebing laut, hingga ATV off-road.',
      all: 'Semua Aktivitas',
      rafting: 'White Water Rafting',
      trekking: 'Sunrise Trekking',
      paragliding: 'Paragliding Tebing',
      atv: 'ATV Quad Bike',
      cycling: 'Cycling Downhill',
      waterSports: 'Watersport & Snorkeling',
      bookActivity: 'Pesan Aktivitas',
      viewDetails: 'Detail Aktivitas',
    },
    whyUs: {
      badge: 'KEUNGGULAN KAMI',
      title: 'Mengapa Memilih balinikitour?',
      subtitle: 'Komitmen kami menghadirkan liburan privat yang tenang, aman, dan berkesan tanpa repot.',
      privateTourTitle: '100% Layanan Tur Privat',
      privateTourDesc: 'Perjalanan eksklusif tanpa digabung dengan tamu lain. Kendaraan, sopir, dan pemandu sepenuhnya didedikasikan untuk kenyamanan Anda.',
      guideTitle: 'Driver & Pemandu Berpengalaman',
      guideDesc: 'Driver lokal ramah, profesional, dan berlisensi yang memahami rute terbaik, sejarah budaya Bali, dan spot foto tersembunyi.',
      priceTitle: 'Harga Transparan & All-In',
      priceDesc: 'Semua biaya diinfokan dengan jelas sejak awal tanpa ada biaya siluman. Termasuk BBM dan tiket masuk objek wisata.',
      customTitle: 'Itinerary Fleksibel Bebas Custom',
      customDesc: 'Bebas menyesuaikan jadwal, durasi kunjungan, rute alternatif, atau menambah destinasi sesuai preferensi Anda.',
      fleetTitle: 'Armada Nyaman, Bersih & Ber-AC',
      fleetDesc: 'Pilihan kendaraan modern terawat prima mulai dari MPV keluarga hingga van mewah yang selalu wangi, bersih, dan ber-AC sejuk.',
      supportTitle: 'Customer Support Cepat 24/7',
      supportDesc: 'Tim layanan pelanggan responsif siap membantu konsultasi rute, perubahan jadwal, dan kebutuhan Anda kapan saja via WhatsApp.',
      expYears: 'Tahun Pengalaman',
      happyGuests: 'Wisatawan Bahagia',
      satisfaction: 'Rating Kepuasan',
      privateGuarantee: 'Jaminan Tur Privat',
    },
    about: {
      badge: 'TENTANG KAMI',
      title: 'Pelopor Layanan Tour Privat Luxury di Bali',
      subtitle: 'Didirikan dengan visi untuk mendefinisikan kembali arti kemewahan perjalanan, balinikitour menghadirkan pengalaman liburan privat yang eksklusif, aman, dan dirancang khusus untuk memenuhi ekspektasi tertinggi Anda.',
      missionTitle: 'Misi Kami: Menghadirkan Momen Liburan Tanpa Batas',
      missionDesc: 'Di balinikitour, kami percaya bahwa setiap detik perjalanan Anda di Bali adalah berharga. Kami menolak paket wisata massal yang penuh sesak dan terburu-buru. Itulah sebabnya setiap itinerary yang kami buat bersifat 100% privat dan fleksibel.',
      securityTitle: 'Prioritas Keamanan & Kenyamanan',
      securityDesc: 'Semua armada kami melalui pemeriksaan keamanan berkala standar tinggi. Pemandu dan instruktur kami memiliki lisensi resmi.',
      customTitle: 'Eksplorasi yang Dipersonalisasi',
      customDesc: 'Setiap pelancong memiliki mimpi liburan berbeda. Kami mewujudkannya secara personal dari pantai eksotis hingga puncak gunung.',
      statGuide: 'PRO GUIDE BERSERTIFIKAT',
      statGuests: 'TETAMU VIP TAHUNAN',
      statSatisfaction: 'KEPUASAN MAKSIMAL',
      statFleet: 'ARMADA LUXURY PRIBADI',
    },
    gallery: {
      badge: 'GALERI FOTO',
      title: 'Koleksi Potret Liburan di Bali',
      subtitle: 'Potret otentik keindahan alam, keceriaan tamu kami, dan momen menakjubkan di seantero Pulau Dewata.',
      all: 'Semua Momen',
      destinations: 'Destinasi Indah',
      activities: 'Keseruan Aktivitas',
      culture: 'Budaya & Tradisi',
    },
    reviews: {
      badge: 'ULASAN WISATAWAN',
      title: 'Apa Kata Mereka Tentang Kami',
      subtitle: 'Kisah nyata dan kepuasan ribuan wisatawan domestik dan internasional yang telah mempercayakan liburan mereka kepada balinikitour.',
      verifiedGuest: 'Wisatawan Terverifikasi',
      ratingText: 'Ulasan Bintang 5 di TripAdvisor & Google Review',
    },
    contact: {
      badge: 'HUBUNGI KAMI',
      title: 'Konsultasi & Reservasi Liburan Anda',
      subtitle: 'Pramutamu dan konsultan perjalanan kami siap melayani pertanyaan, kustomisasi itinerary, dan pemesanan tur Anda 24/7.',
      hqTitle: 'Kantor Operasional Bali',
      hqDesc: 'Bali Niki Tour (Depan M-Mart Hotel Karti), Jl. Kartika Plaza, Kuta, Bali',
      hotlineTitle: 'WhatsApp Hotline & Concierge',
      hotlineDesc: '+62 813-3725-2651 (Aktif 24 Jam)',
      emailTitle: 'Email Resmi',
      hoursTitle: 'Jam Layanan Operasional',
      hoursDesc: 'Senin - Minggu: 24 Jam (Layanan Darurat & Booking)',
      formTitle: 'Kirim Pesan Langsung',
      formName: 'Nama Lengkap',
      formEmail: 'Alamat Email',
      formPhone: 'Nomor WhatsApp / Telepon',
      formTour: 'Pilihan Tur yang Diminati',
      formTourPlaceholder: 'Pilih paket atau tulis destinasi impian Anda...',
      formMessage: 'Pesan / Catatan Tambahan',
      formSubmit: 'Kirim Pesan ke Konsultan',
      formSuccess: 'Terima kasih! Pesan Anda telah diterima. Tim kami akan segera menghubungi via WhatsApp.',
      faqTitle: 'Pertanyaan yang Sering Diajukan (FAQ)',
      faqSubtitle: 'Temukan jawaban cepat atas pertanyaan umum seputar pemesanan, pembatalan, dan fasilitas tur kami.',
    },
    footer: {
      desc: 'balinikitour adalah operator tur privat dan sewa kendaraan terkemuka di Pulau Bali. Kami menghadirkan tur alam, budaya, dan petualangan dengan komitmen kepuasan pelanggan nomor satu.',
      sustainableBadge: 'Operator Tur Resmi & Terpercaya di Bali',
      baliTime: 'Waktu Lokal Bali (WITA):',
      quickLinks: 'Navigasi Cepat',
      popularDestinations: 'Destinasi Unggulan',
      contactInfo: 'Informasi Kontak',
      copyright: 'Hak Cipta Dilindungi',
      rights: 'Semua hak dilindungi undang-undang.',
    },
    booking: {
      modalTitle: 'Reservasi Paket Wisata Bali',
      step1: '1. Pilih Paket & Jadwal',
      step2: '2. Data Pemesan & Peserta',
      step3: '3. Konfirmasi & Tiket',
      selectPackage: 'Pilih Paket Tur',
      selectDate: 'Pilih Tanggal Wisata',
      guestsCount: 'Jumlah Peserta',
      participantsManifest: 'Daftar Nama Peserta',
      participant: 'Peserta',
      mainBookerTag: '(Pemesan Utama)',
      adult: 'Dewasa',
      child: 'Anak (3-10 th)',
      fullName: 'Nama Pemesan Utama',
      fullNamePlaceholder: 'Nama lengkap sesuai identitas',
      email: 'Alamat Email',
      emailPlaceholder: 'contoh@email.com',
      phone: 'Nomor WhatsApp / Telepon',
      phonePlaceholder: 'Contoh: +62 812 3456 7890',
      country: 'Negara Asal (Country)',
      countryPlaceholder: 'Pilih negara asal Anda',
      notes: 'Catatan Khusus / Alamat Hotel Penjemputan',
      notesPlaceholder: 'Nama hotel / villa penjemputan di Bali atau permintaan khusus...',
      totalEstimated: 'Total Estimasi Biaya',
      continueToSummary: 'Lanjut ke Ringkasan',
      continueToParticipants: 'Lanjut ke Data Peserta',
      back: 'Kembali',
      confirmWhatsApp: 'Konfirmasi via WhatsApp',
      printVoucher: 'Cetak E-Voucher',
      voucherTitle: 'E-Voucher Reservasi Resmi',
      voucherDesc: 'Reservasi Anda telah tercatat! Silakan klik tombol di bawah untuk konfirmasi langsung ke WhatsApp customer service kami.',
      bookingCode: 'KODE BOOKING',
      statusConfirmed: 'TERDAFTAR',
      required: 'Wajib',
      optional: 'Opsional',
      close: 'Tutup',
    },
    common: {
      perPerson: '/ orang',
      duration: 'Durasi',
      hours: 'Jam',
      days: 'Hari',
      from: 'Mulai',
      details: 'Detail',
      bookNow: 'Pesan Sekarang',
      allInclusive: 'Semua Termasuk',
      privateTrip: 'Tur Privat',
      search: 'Cari',
      cancel: 'Batal',
    }
  },

  // ==========================
  // ENGLISH (EN)
  // ==========================
  en: {
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      tours: 'Tour Packages',
      activities: 'Tour & Activities',
      about: 'About',
      gallery: 'Gallery',
      whyUs: 'Why Us',
      contact: 'Contact',
      search: 'Search Trips',
      bookNow: 'Book Now',
      hotline: '24/7 Concierge Hotline',
    },
    hero: {
      tagline: 'Discover the Enchantment of Bali',
      subtagline: 'Exclusive private tours, pristine nature adventures, and authentic Balinese cultural journeys with the highest standard of luxury and comfort.',
      bookExperience: 'Book Now',
      exploreTours: 'Explore Tour Packages',
      searchDestination: 'Select Destination',
      allDestinations: 'All Destinations in Bali',
      tourCategory: 'Tour Category',
      allCategories: 'All Categories',
      duration: 'Tour Duration',
      allDurations: 'All Durations',
      travelers: 'Number of Travelers',
      searchButton: 'Search Tours',
      dayTour: 'Day Tour (1 Day)',
      multiDay: 'Multi-Day Package',
      adventure: 'Adventure & Trekking',
      waterSports: 'Watersport & Rafting',
      person: 'Guest',
      persons: 'Guests',
    },
    bestSellers: {
      badge: 'TOP BEST SELLERS',
      title: 'Most Loved Tours by Global Travelers',
      subtitle: 'Curated 100% private itineraries with five-star ratings, scenic photo spots, and genuine Balinese hospitality.',
      perPerson: '/ person',
      duration: 'Duration',
      viewDetails: 'Full Details',
      bookNow: 'Book Tour',
      allInTitle: 'All-Inclusive: Entrance Fees, Fuel & Private Driver',
      instantConfirmation: 'Instant Confirmation',
      privateVehicle: 'Clean AC Private Vehicle',
      freeCancellation: 'Flexible Rescheduling',
    },
    destinations: {
      badge: 'ICONIC DESTINATIONS',
      title: 'Explore the Best of Bali',
      subtitle: 'From pristine white sand beaches and sacred ocean temples to lush emerald rice terraces and misty mountain lakes.',
      all: 'All Regions',
      culture: 'Culture & Temples',
      nature: 'Waterfalls & Nature',
      beach: 'Beaches & Coastline',
      highland: 'Lakes & Volcanoes',
      island: 'Nusa Islands',
      tripsCount: 'Available Trips',
      exploreDestination: 'View Tours',
      fromPrice: 'Starting from',
    },
    activities: {
      badge: 'ADVENTURE & OUTDOOR',
      title: 'Ignite Your Adrenaline in Paradise',
      subtitle: 'Whitewater river rafting, sunrise volcano trekking, cliffside paragliding, downhill cycling, and jungle ATV quad biking.',
      all: 'All Activities',
      rafting: 'White Water Rafting',
      trekking: 'Sunrise Volcano Trekking',
      paragliding: 'Cliffside Paragliding',
      atv: 'ATV Quad Bike',
      cycling: 'Downhill Mountain Cycling',
      waterSports: 'Watersport & Snorkeling',
      bookActivity: 'Book Activity',
      viewDetails: 'Activity Details',
    },
    whyUs: {
      badge: 'WHY CHOOSE US',
      title: 'The balinikitour Advantage',
      subtitle: 'Our steadfast promise to provide peaceful, secure, and tailor-made holidays with zero hassle.',
      privateTourTitle: '100% Private Tour Guarantee',
      privateTourDesc: 'No sharing with strangers. Your vehicle, driver, and licensed guide are solely dedicated to you and your companions.',
      guideTitle: 'Expert English-Speaking Guides',
      guideDesc: 'Warm, licensed local drivers who master the smoothest routes, Balinese history, and top photography viewpoints.',
      priceTitle: 'Transparent All-Inclusive Pricing',
      priceDesc: 'No hidden fees or surprise costs. Fuel, parking, and attraction admissions are clearly included upfront.',
      customTitle: 'Flexible & Tailored Itineraries',
      customDesc: 'Adjust departure times, linger longer at favorite spots, or customize stops to match your travel rhythm.',
      fleetTitle: 'Modern, Pristine & Air-Conditioned Fleet',
      fleetDesc: 'Comfortable family MPVs and luxury vans that are spotlessly sanitized, chilled, and maintained to safety standards.',
      supportTitle: '24/7 Fast WhatsApp Assistance',
      supportDesc: 'Our friendly concierge team is always online to answer inquiries, adjust plans, and coordinate your pick-ups.',
      expYears: 'Years of Experience',
      happyGuests: 'Delighted Travelers',
      satisfaction: 'Guest Satisfaction',
      privateGuarantee: 'Private Tour Guarantee',
    },
    about: {
      badge: 'ABOUT US',
      title: 'Pioneering Luxury Private Tours in Bali',
      subtitle: 'Founded with a vision to redefine travel excellence, balinikitour delivers exclusive, private, and customizable island experiences that exceed expectations.',
      missionTitle: 'Our Mission: Boundless Holiday Memories',
      missionDesc: 'We believe every moment of your Bali vacation is priceless. We reject rushed, overcrowded mass tour buses in favor of personalized, mindful travel.',
      securityTitle: 'Uncompromising Safety & Comfort',
      securityDesc: 'All vehicles pass rigorous periodic inspections. Our adventure guides and drivers hold certified government licenses.',
      customTitle: 'Tailored Explorations',
      customDesc: 'Every traveler has unique aspirations. We craft bespoke journeys from serene spiritual temples to rugged mountain summits.',
      statGuide: 'CERTIFIED PRO GUIDES',
      statGuests: 'ANNUAL VIP TRAVELERS',
      statSatisfaction: 'CUSTOMER RATING',
      statFleet: 'PRIVATE LUXURY FLEET',
    },
    gallery: {
      badge: 'PHOTO GALLERY',
      title: 'Memories from the Island of Gods',
      subtitle: 'Real captured moments of joy, sublime scenery, and thrilling expeditions across Bali.',
      all: 'All Photos',
      destinations: 'Sceneries',
      activities: 'Adventures',
      culture: 'Culture & Temples',
    },
    reviews: {
      badge: 'GUEST REVIEWS',
      title: 'Stories from Our Global Guests',
      subtitle: 'Read genuine feedback from international travelers who discovered Bali with balinikitour.',
      verifiedGuest: 'Verified Traveler',
      ratingText: '5-Star Rated on TripAdvisor & Google Reviews',
    },
    contact: {
      badge: 'CONTACT US',
      title: 'Plan Your Dream Bali Holiday',
      subtitle: 'Our VIP concierge team is eager to assist with itinerary planning, private group arrangements, and bookings.',
      hqTitle: 'Bali Operations HQ',
      hqDesc: 'Bali Niki Tour (In Front Of M-Mart Hotel Karti Area), Jl. Kartika Plaza, Kuta, Bali',
      hotlineTitle: 'WhatsApp Hotline & Concierge',
      hotlineDesc: '+62 813-3725-2651 (Available 24/7)',
      emailTitle: 'Official Email',
      hoursTitle: 'Operating Hours',
      hoursDesc: 'Monday - Sunday: 24/7 (Emergency & Bookings)',
      formTitle: 'Send Us a Message',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formPhone: 'WhatsApp / Phone Number',
      formTour: 'Interested Tour / Package',
      formTourPlaceholder: 'Select package or type your dream destinations...',
      formMessage: 'Message & Special Inquiries',
      formSubmit: 'Send Inquiry to Concierge',
      formSuccess: 'Thank you! Your message has been received. Our team will contact you via WhatsApp shortly.',
      faqTitle: 'Frequently Asked Questions (FAQ)',
      faqSubtitle: 'Find quick answers regarding payment, cancellation, pick-up times, and inclusions.',
    },
    footer: {
      desc: 'balinikitour is the premier bespoke private tour operator in Bali. We specialize in authentic cultural routes, volcano trekking, and watersports with dedication to guest satisfaction.',
      sustainableBadge: 'Licensed & Registered Bali Tour Operator',
      baliTime: 'Bali Local Time (UTC+8):',
      quickLinks: 'Quick Links',
      popularDestinations: 'Popular Destinations',
      contactInfo: 'Contact Information',
      copyright: 'Copyright Protected',
      rights: 'All rights reserved.',
    },
    booking: {
      modalTitle: 'Bali Tour Package Reservation',
      step1: '1. Select Package & Date',
      step2: '2. Booker & Guest Details',
      step3: '3. Voucher & Confirmation',
      selectPackage: 'Choose Tour Package',
      selectDate: 'Select Travel Date',
      guestsCount: 'Number of Guests',
      participantsManifest: 'Participant Manifest',
      participant: 'Participant',
      mainBookerTag: '(Main Booker)',
      adult: 'Adult',
      child: 'Child (3-10 yrs)',
      fullName: 'Lead Traveler Full Name',
      fullNamePlaceholder: 'Full name as in passport / ID',
      email: 'Email Address',
      emailPlaceholder: 'you@example.com',
      phone: 'WhatsApp / Phone Number',
      phonePlaceholder: 'e.g. +1 555 123 4567 or +62 812...',
      country: 'Country of Residence',
      countryPlaceholder: 'Select your country',
      notes: 'Special Requests / Hotel Pick-up Location',
      notesPlaceholder: 'Hotel/villa name in Bali or dietary/timing requests...',
      totalEstimated: 'Total Estimated Price',
      continueToSummary: 'Continue to Summary',
      continueToParticipants: 'Continue to Guest Details',
      back: 'Back',
      confirmWhatsApp: 'Confirm via WhatsApp',
      printVoucher: 'Print E-Voucher',
      voucherTitle: 'Official Booking E-Voucher',
      voucherDesc: 'Your reservation is recorded! Please click the button below to confirm instantly with our WhatsApp customer concierge.',
      bookingCode: 'BOOKING CODE',
      statusConfirmed: 'CONFIRMED',
      required: 'Required',
      optional: 'Optional',
      close: 'Close',
    },
    common: {
      perPerson: '/ person',
      duration: 'Duration',
      hours: 'Hours',
      days: 'Days',
      from: 'From',
      details: 'Details',
      bookNow: 'Book Now',
      allInclusive: 'All-Inclusive',
      privateTrip: 'Private Tour',
      search: 'Search',
      cancel: 'Cancel',
    }
  },
};