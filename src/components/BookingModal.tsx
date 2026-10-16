import React, { useState, useEffect } from 'react';
import {
  X, Check, Calendar, Users, Star, ArrowRight, ShieldCheck,
  Sparkles, Printer, AlertTriangle, MessageSquare, PhoneCall, ExternalLink, MapPin, Globe, Mail
} from 'lucide-react';
import { BookingDetails, BookingAddon } from '../types';
import { EXPERIENCES, BOOKING_ADDONS } from '../data';
import { multiDayPackages } from '../data/multiDayPackages';
import { useLanguage } from '../i18n/LanguageContext';
import { getOptimizedCloudinaryUrl } from '../utils/cloudinary';

const excludedInitialIds = [
  'nusa-penida',
  'ocean-escape',
  'jungle-retreat',
  'jeep-adventure',
  'nusa-dua',
  'bedugul-danau',
  'lempuyang',
  'uluwatu'
];

export interface BookablePackage {
  id: string;
  title: string;
  category: 'Destinasi & Day Tours' | 'Tour Activities & Rafting' | 'Trekking & Gunung' | 'Off-Road ATV & Combo' | 'Multi-Day Packages' | 'Paragliding & Cycling';
  pricePerPerson: number;
  cardImage: string;
  location: string;
}

export const COUNTRIES_LIST = [
  'Indonesia',
  'Australia',
  'United States',
  'United Kingdom',
  'Singapore',
  'Malaysia',
  'Germany',
  'France',
  'Netherlands',
  'Japan',
  'South Korea',
  'China',
  'India',
  'Russia',
  'Canada',
  'Italy',
  'Spain',
  'New Zealand',
  'Switzerland',
  'United Arab Emirates',
  'Saudi Arabia',
  'Philippines',
  'Thailand',
  'Vietnam',
  'Taiwan',
  'Hong Kong',
  'Other Country / Lainnya'
];

// Curated list of all genuine packages from Destinations, Tour Activities, Multiday, and Off-road
export const ALL_BOOKABLE_PACKAGES: BookablePackage[] = [
  // 1. Destinasi & Day Tours
  {
    id: 'gate-of-heaven-water-palace-waterfall',
    title: 'Gate of Heaven, Tirta Gangga Water Palace & Waterfall',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 55,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png',
    location: 'Karangasem, East Bali'
  },
  {
    id: 'amazing-waterfall-monkey-forest',
    title: 'Amazing Waterfall & Ubud Sacred Monkey Forest',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 45,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787323636/377959ab-3a0a-4afe-a294-930a79196a33.png',
    location: 'Ubud, Gianyar'
  },
  {
    id: 'adventure-bali-swing-nungnung-ulundanu-lekeleke',
    title: 'Bali Swing, Nungnung Waterfall, Ulun Danu & Leke Leke',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 65,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324362/9d6f0219-6dfc-4f28-9234-4e307a58f316.png',
    location: 'Bedugul & Tabanan'
  },
  {
    id: 'discover-waterfall-rice-terrace-monkey-forest',
    title: 'Discover Waterfall, Tegalalang Rice Terrace & Monkey Forest',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 50,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324453/fdf23903-3780-458b-a52f-e8402aafd246.png',
    location: 'Ubud, Gianyar'
  },
  {
    id: 'explore-iconic-culture-heritage-twin-lake',
    title: 'Bali Swing, Hidden Waterfall & Tanah Lot Sunset Tour',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 55,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787324702/34b12cec-98fb-4209-ae84-305b09b6324c.png',
    location: 'Bedugul, North Bali'
  },
  {
    id: 'royal-family-palace-bedugul-tanah-lot',
    title: 'Royal Family Palace, Bedugul Lake Temple & Tanah Lot',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 48,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787378235/90a03b5d-8896-473b-9309-1095503d30ff.png',
    location: 'Bedugul & Tabanan'
  },
  {
    id: 'ubud-monkey-forest-and-kintamani-highland',
    title: 'Ubud Monkey Forest and Kintamani Volcano Highland',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 45,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787377999/40079c3b-3b6b-4769-8cde-90b8e9aa1278.png',
    location: 'Ubud & Kintamani'
  },
  {
    id: 'nusa-penida-east-trip',
    title: 'Nusa Penida East Island Trip (Diamond Beach & Treehouse)',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 85,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787236800/014c6311-2bb0-4cee-9989-3e56d2c9b75e.png',
    location: 'Nusa Penida Island'
  },
  {
    id: 'nusa-penida-west-trip',
    title: 'Nusa Penida West Island Trip (Kelingking & Angel’s Billabong)',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 80,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787237616/1f45e3b9-9f61-4f5f-919e-dce4609140fd.png',
    location: 'Nusa Penida Island'
  },
  {
    id: 'water-sport-beaches-uluwatu-dinner',
    title: 'Tanjung Benoa Watersport, Beaches & Uluwatu Sunset Dinner',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 60,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635616/c9781194-47fa-46da-ab2f-f11870ab6cc8.png',
    location: 'Uluwatu & Jimbaran'
  },
  {
    id: 'bali-nature-wonder-experience',
    title: 'Sekumpul Waterfall, Lemukih Waterslide & Nature Wonder',
    category: 'Destinasi & Day Tours',
    pricePerPerson: 60,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326124/858fd91f-1ff7-428d-beeb-c59f2cdc534b.png',
    location: 'Buleleng, North Bali'
  },

  // 2. Tour Activities & Rafting
  {
    id: 'telaga-waja-rafting',
    title: 'Telaga Waja River 16 KM White Water Rafting',
    category: 'Tour Activities & Rafting',
    pricePerPerson: 45,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787061965/9ccc454e-a20f-48d5-a184-d9fc10c7d482.png',
    location: 'Rendang, Karangasem'
  },
  {
    id: 'surya-bintang-rafting',
    title: 'Surya Bintang Ayung River Ubud Rafting & Cliff Carvings',
    category: 'Tour Activities & Rafting',
    pricePerPerson: 40,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063019/398e70aa-ea11-449f-a279-6ed8e832b74b.png',
    location: 'Ubud, Gianyar'
  },
  {
    id: 'bali-dewata-rafting',
    title: 'Bali Dewata Ayung River Rapids & Hidden Waterfall',
    category: 'Tour Activities & Rafting',
    pricePerPerson: 38,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787063184/31bbe6f8-14e4-48f0-9bf8-8506d9091642.png',
    location: 'Ubud, Gianyar'
  },

  // 3. Trekking & Gunung
  {
    id: 'adventure-bali-sunrise-trekking-mount-batur',
    title: 'Mount Batur Sunrise Summit Trekking & Breakfast',
    category: 'Trekking & Gunung',
    pricePerPerson: 55,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052296/32172e3b-f147-4fcf-a7c0-abfe6c3d1997.png',
    location: 'Kintamani, Bangli'
  },
  {
    id: 'adventure-batur-sunrise-hot-spring-lunch',
    title: 'Mount Batur Sunrise Trekking + Natural Hot Spring & Lunch',
    category: 'Trekking & Gunung',
    pricePerPerson: 75,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325801/600b4aa7-95a1-4f0e-b5b1-88158d4364ed.png',
    location: 'Kintamani, Bangli'
  },
  {
    id: 'mount-agung-adventure-sunrise-trekking',
    title: 'Mount Agung Adventure Sunrise Summit Trekking (Highest Peak)',
    category: 'Trekking & Gunung',
    pricePerPerson: 110,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787325945/07eb4a26-cfc3-4b69-b2bd-be2d633a43c4.png',
    location: 'Besakih, Karangasem'
  },

  // 4. Paragliding & Cycling
  {
    id: 'paragliding',
    title: 'Tandem Paragliding Cliff Flight over Nyang Nyang Beach',
    category: 'Paragliding & Cycling',
    pricePerPerson: 85,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052460/02018cef-c1e4-4d4c-b918-9c51ff9387b3.png',
    location: 'Uluwatu Cliff, Nyang Nyang'
  },
  {
    id: 'bali-cycling-downhill-mountain-to-village',
    title: 'Bali Cycling Downhill From Mountain to Village',
    category: 'Paragliding & Cycling',
    pricePerPerson: 50,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787326066/04b075c5-bd5c-4f15-a821-b389d514b95e.png',
    location: 'Kintamani to Ubud'
  },

  // 5. Off-Road ATV & Combo
  {
    id: 'atv-rafting-combo',
    title: 'Super Combo: ATV Quad Bike + Ayung River Rafting & Lunch',
    category: 'Off-Road ATV & Combo',
    pricePerPerson: 80,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787062832/8f55222d-518c-4b9e-a56e-574ff17eff8c.png',
    location: 'Ubud, Gianyar'
  },
  {
    id: 'adventure-atv-telaga-waja',
    title: 'Jungle ATV Quad Bike + Telaga Waja 16 KM Rafting Combo',
    category: 'Off-Road ATV & Combo',
    pricePerPerson: 85,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787737711/a00cb89b-8836-432b-9e67-c5a125a61627.png',
    location: 'Karangasem'
  },
  {
    id: 'adventure-atv-ubud-kuber',
    title: 'Kuber ATV Quad Bike Gorilla Cave Tunnel & Mud Track',
    category: 'Off-Road ATV & Combo',
    pricePerPerson: 65,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787742311/70f55d1b-2b8a-405e-a7d2-785753aa5351.png',
    location: 'Payangan, Ubud'
  },
  {
    id: 'off-road-tours',
    title: 'Adventure Off Road Jeep Mount Batur Sunrise',
    category: 'Off-Road ATV & Combo',
    pricePerPerson: 45,
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787052559/bf039127-8977-4546-a0bf-aadde17504fd.png',
    location: 'Mount Batur, Kintamani'
  },

  // 6. Multi-Day Packages
  ...multiDayPackages.map(pkg => ({
    id: pkg.id,
    title: pkg.title,
    category: 'Multi-Day Packages' as const,
    pricePerPerson: pkg.discountedPrice,
    cardImage: pkg.image,
    location: pkg.location,
  }))
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialExperienceId?: string;
  onBookingSuccess: (booking: BookingDetails) => void;
}

interface Participant {
  name: string;
  ageCategory: 'Dewasa' | 'Anak';
}

export default function BookingModal({
  isOpen,
  onClose,
  initialExperienceId,
  onBookingSuccess,
}: BookingModalProps) {
  const { language } = useLanguage();

  // Step state: 'details' | 'success'
  const [step, setStep] = useState<'details' | 'success'>('details');

  // Booking fields state
  const defaultPkgId = ALL_BOOKABLE_PACKAGES[0]?.id || 'gate-of-heaven-water-palace-waterfall';
  const [selectedExpId, setSelectedExpId] = useState<string>(initialExperienceId || defaultPkgId);
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Indonesia');
  const [specialNotes, setSpecialNotes] = useState('');

  // Blocked Dates State Warning
  const [dateWarning, setDateWarning] = useState<string | null>(null);

  // Dynamic Participants state
  const [participants, setParticipants] = useState<Participant[]>([
    { name: '', ageCategory: 'Dewasa' },
    { name: '', ageCategory: 'Dewasa' },
  ]);

  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [generatedWaUrl, setGeneratedWaUrl] = useState<string>('');

  // Sync initial experience ID if provided
  useEffect(() => {
    if (initialExperienceId) {
      if (excludedInitialIds.includes(initialExperienceId)) {
        setSelectedExpId(defaultPkgId);
      } else {
        const found = ALL_BOOKABLE_PACKAGES.find(p => p.id === initialExperienceId);
        if (found) {
          setSelectedExpId(initialExperienceId);
        } else {
          setSelectedExpId(defaultPkgId);
        }
      }
    }
  }, [initialExperienceId, isOpen]);

  // Sync participants list size to guests count
  useEffect(() => {
    setParticipants((prev) => {
      const next = [...prev];
      if (next.length < guests) {
        // Add new blank participants
        while (next.length < guests) {
          next.push({ name: '', ageCategory: 'Dewasa' });
        }
      } else if (next.length > guests) {
        // Trim participants
        return next.slice(0, guests);
      }
      return next;
    });
  }, [guests]);

  // Check for fully booked dates
  useEffect(() => {
    if (!date) {
      setDateWarning(null);
      return;
    }
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay(); // 0 Sunday, 1 Monday, etc.

    // 1. Block Mondays (maintenance)
    if (dayOfWeek === 1) {
      const warn = language === 'en'
        ? '⚠️ Monday is scheduled for yacht maintenance and conservation. This slot is fully booked. Please select another date.'
        : language === 'zh'
        ? '⚠️ 周一为游艇定期维护和自然保护区维护时间，此日期已预订满。请选择其他日期。'
        : language === 'ru'
        ? '⚠️ Понедельник — день техобслуживания яхт и заповедников. Дата полностью забронирована. Выберите другую дату.'
        : '⚠️ Hari Senin adalah jadwal pemeliharaan berkala yacht & area konservasi alam. Jadwal ini terisi penuh (Fully Booked). Silakan pilih tanggal lain.';
      setDateWarning(warn);
      return;
    }

    // 2. Block specific high-demand dates
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const year = selectedDate.getFullYear();

    if (year === 2026 && month === 7 && (day === 12 || day === 15 || day === 20)) {
      const warn = language === 'en'
        ? '⚠️ This date is fully booked for a VIP diplomatic delegation. Please select another date.'
        : language === 'zh'
        ? '⚠️ 该日期已被贵宾代表团全额预订。请选择其他日期。'
        : language === 'ru'
        ? '⚠️ Эта дата полностью забронирована для VIP-делегации. Пожалуйста, выберите другую дату.'
        : '⚠️ Tanggal ini sudah dipesan penuh oleh tamu kenegaraan (Fully Booked). Silakan pilih tanggal lain.';
      setDateWarning(warn);
      return;
    }

    setDateWarning(null);
  }, [date, language]);

  if (!isOpen) return null;

  // Find current selected package in bookable items list
  const currentExp = ALL_BOOKABLE_PACKAGES.find((e) => e.id === selectedExpId) || ALL_BOOKABLE_PACKAGES[0];

  // Price calculations
  const basePrice = currentExp.pricePerPerson * guests;
  const addonsPrice = BOOKING_ADDONS.filter((addon) => selectedAddons.includes(addon.id)).reduce(
    (total, addon) => total + addon.price,
    0
  );
  const subtotal = basePrice + addonsPrice;
  const tax = Math.round(subtotal * 0.1); // 10% Service & Tax
  const grandTotal = subtotal + tax;

  const handleAddonToggle = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleParticipantChange = (index: number, field: keyof Participant, value: any) => {
    setParticipants((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const validateDetails = () => {
    if (!date) {
      alert(language === 'en' ? 'Please select your preferred tour date.' : language === 'zh' ? '请选择您的行程日期。' : language === 'ru' ? 'Пожалуйста, выберите дату тура.' : 'Mohon pilih tanggal pilihan tur Anda.');
      return false;
    }
    if (dateWarning) {
      alert(dateWarning);
      return false;
    }
    if (!fullName.trim()) {
      alert(language === 'en' ? 'Please enter the primary booker name.' : language === 'zh' ? '请输入主预订人姓名。' : language === 'ru' ? 'Пожалуйста, введите имя основного заказчика.' : 'Mohon masukkan nama pemesan utama.');
      return false;
    }
    if (!email.trim() || !email.includes('@')) {
      alert(language === 'en' ? 'Please enter a valid email address.' : language === 'zh' ? '请输入有效的电子邮件地址。' : language === 'ru' ? 'Пожалуйста, введите корректный email.' : 'Mohon masukkan alamat email aktif Anda.');
      return false;
    }
    if (!phone.trim()) {
      alert(language === 'en' ? 'Please enter your WhatsApp / Phone number.' : language === 'zh' ? '请输入您的 WhatsApp / 电话号码。' : language === 'ru' ? 'Пожалуйста, введите номер WhatsApp / телефона.' : 'Mohon masukkan nomor WhatsApp / Phone aktif Anda.');
      return false;
    }
    if (!country.trim()) {
      alert(language === 'en' ? 'Please select your country.' : language === 'zh' ? '请选择您的国家。' : language === 'ru' ? 'Пожалуйста, выберите страну.' : 'Mohon pilih negara asal Anda.');
      return false;
    }

    // Validate each participant
    for (let i = 0; i < participants.length; i++) {
      if (!participants[i].name.trim()) {
        const msg = language === 'en'
          ? `Please enter the name for Participant #${i + 1}`
          : language === 'zh'
          ? `请填写第 ${i + 1} 位乘客的姓名`
          : language === 'ru'
          ? `Пожалуйста, укажите имя для участника #${i + 1}`
          : `Mohon lengkapi nama untuk Peserta #${i + 1}`;
        alert(msg);
        return false;
      }
    }

    return true;
  };

  const buildWhatsAppMessage = (bookingCode: string) => {
    const participantsText = participants.map((p, idx) => 
      `${idx + 1}. ${p.name} - (${p.ageCategory})`
    ).join('\n');

    return `*🌴 RESERVASI PAKET TOUR - BALI NIKI TOUR 🌴*
━━━━━━━━━━━━━━━━━━━━
*Kode Booking:* ${bookingCode}
*Paket Tour:* ${currentExp.title}
*Kategori:* ${currentExp.category}
*Lokasi:* ${currentExp.location}
*Tanggal Trip:* ${date}
*Jumlah Peserta:* ${guests} Orang

*👤 Data Pemesan Utama:*
• Nama Lengkap: ${fullName}
• Email: ${email}
• No. WhatsApp / Phone: ${phone}
• Negara Asal (Country): ${country}

*📋 Daftar Peserta (${guests} Orang):*
${participantsText}

*📝 Catatan / Permintaan Khusus:*
${specialNotes || '-'}

━━━━━━━━━━━━━━━━━━━━
*💰 Rincian Biaya:*
• Tarif Dasar: $${basePrice}
• Pajak & Layanan (10%): $${tax}
*TOTAL ESTIMASI:* $${grandTotal} (USD)
━━━━━━━━━━━━━━━━━━━━
Halo Concierge Bali Niki Tour, saya ingin konfirmasi pemesanan paket tur di atas. Mohon info ketersediaan armada, penjemputan, dan langkah selanjutnya. Terima kasih!`;
  };

  const handleWhatsAppBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDetails()) return;

    const bookingCode = `BNT-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const waMessage = buildWhatsAppMessage(bookingCode);
    const waUrl = `https://wa.me/6281225657382?text=${encodeURIComponent(waMessage)}`;

    const bookingObj = {
      id: `booking-${Date.now()}`,
      experienceId: selectedExpId,
      date,
      guests,
      addons: selectedAddons,
      fullName,
      email,
      phone,
      country,
      specialNotes,
      participants,
      totalPrice: grandTotal,
      bookingCode,
      paymentMethod: 'Konfirmasi via WhatsApp Concierge (+62 813-3725-2651)',
      createdAt: new Date().toISOString(),
    };

    setConfirmedBooking(bookingObj);
    setGeneratedWaUrl(waUrl);
    setStep('success');
    onBookingSuccess(bookingObj as any);

    // Open WhatsApp in a new window/tab
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.log('Popup prevented, user can click the button on confirmation screen');
    }
  };

  const handleReset = () => {
    setStep('details');
    onClose();
  };

  // Group packages by category for the select dropdown
  const categories = Array.from(new Set(ALL_BOOKABLE_PACKAGES.map(p => p.category)));

  const tModal = {
    titleDetails: language === 'en' ? 'Tour Package Booking via WhatsApp' : language === 'zh' ? '通过 WhatsApp 预订旅游套餐' : language === 'ru' ? 'Бронирование тура через WhatsApp' : 'Pemesanan Paket Tour via WhatsApp',
    titleSuccess: language === 'en' ? 'Reservation Confirmation & E-Ticket' : language === 'zh' ? '预订确认与电子凭证' : language === 'ru' ? 'Подтверждение бронирования и электронный билет' : 'Konfirmasi Reservasi & E-Tiket',
    selectPkg: language === 'en' ? 'Select Tour Package' : language === 'zh' ? '选择旅游套餐' : language === 'ru' ? 'Выберите тур-пакет' : 'Pilih Paket Perjalanan',
    pkgsAvailable: language === 'en' ? `${ALL_BOOKABLE_PACKAGES.length} Packages Available` : language === 'zh' ? `${ALL_BOOKABLE_PACKAGES.length} 个套餐可用` : language === 'ru' ? `${ALL_BOOKABLE_PACKAGES.length} пакетов доступно` : `${ALL_BOOKABLE_PACKAGES.length} Paket Tersedia`,
    selectDate: language === 'en' ? 'Select Date' : language === 'zh' ? '选择日期' : language === 'ru' ? 'Выберите дату' : 'Pilih Tanggal',
    guestsCount: language === 'en' ? 'Number of Guests' : language === 'zh' ? '乘客人数' : language === 'ru' ? 'Количество гостей' : 'Jumlah Peserta',
    guestsUnit: language === 'en' ? 'Guests' : language === 'zh' ? '人' : language === 'ru' ? 'гостей' : 'Orang',
    participantsManifest: language === 'en' ? 'Participants Manifest' : language === 'zh' ? '旅客名单' : language === 'ru' ? 'Список участников' : 'Daftar Nama Peserta Tour',
    forInsurance: language === 'en' ? 'For Manifest & Insurance' : language === 'zh' ? '用于名单登记与保险' : language === 'ru' ? 'Для манифеста и страховки' : 'Untuk Manifest & Asuransi',
    participant: language === 'en' ? 'Participant' : language === 'zh' ? '乘客' : language === 'ru' ? 'Участник' : 'Peserta',
    primaryBooker: language === 'en' ? '(Primary Booker)' : language === 'zh' ? '(主预订人)' : language === 'ru' ? '(Основной заказчик)' : '(Pemesan Utama)',
    adult: language === 'en' ? 'Adult' : language === 'zh' ? '成人' : language === 'ru' ? 'Взрослый' : 'Dewasa',
    child: language === 'en' ? 'Child' : language === 'zh' ? '儿童' : language === 'ru' ? 'Ребенок' : 'Anak',
    contactInfo: language === 'en' ? 'Contact & Origin Details' : language === 'zh' ? '联系信息与来源地' : language === 'ru' ? 'Контактная информация и страна' : 'Informasi Kontak & Asal Pemesan',
    fullNameLabel: language === 'en' ? 'Full Name of Primary Booker' : language === 'zh' ? '主预订人全名' : language === 'ru' ? 'Полное имя основного заказчика' : 'Nama Pemesan Utama',
    emailLabel: language === 'en' ? 'Email Address' : language === 'zh' ? '电子邮箱' : language === 'ru' ? 'Электронная почта' : 'Alamat Email',
    phoneLabel: language === 'en' ? 'WhatsApp / Phone Number' : language === 'zh' ? 'WhatsApp / 电话号码' : language === 'ru' ? 'Номер WhatsApp / телефона' : 'Nomor WhatsApp / Phone',
    countryLabel: language === 'en' ? 'Country of Origin' : language === 'zh' ? '国籍/所属国家' : language === 'ru' ? 'Страна проживания' : 'Negara Asal / Country',
    requiredBadge: language === 'en' ? 'Required' : language === 'zh' ? '必填' : language === 'ru' ? 'Обязательно' : 'Wajib',
    notesLabel: language === 'en' ? 'Pickup Location / Special Notes' : language === 'zh' ? '接送地点 / 特殊要求' : language === 'ru' ? 'Место встречи / Особые пожелания' : 'Lokasi Jemput / Permintaan Khusus',
    notesPlaceholder: language === 'en' ? 'Hotel / Villa name / Pickup address in Bali, or special notes...' : language === 'zh' ? '巴厘岛酒店/别墅名称/接送地址或特殊要求...' : language === 'ru' ? 'Название отеля / виллы / адрес трансфера на Бали...' : 'Nama Hotel / Villa / Alamat Penjemputan di Bali, atau catatan khusus...',
    summaryTitle: language === 'en' ? 'Order Summary' : language === 'zh' ? '订单摘要' : language === 'ru' ? 'Сводка заказа' : 'Ringkasan Pesanan',
    baseRate: language === 'en' ? 'Base Rate' : language === 'zh' ? '基础费用' : language === 'ru' ? 'Базовый тариф' : 'Tarif Dasar',
    taxConcierge: language === 'en' ? 'Taxes & Concierge Service' : language === 'zh' ? '税费及礼宾服务' : language === 'ru' ? 'Налоги и консьерж-сервис' : 'Pajak & Layanan Concierge',
    totalEst: language === 'en' ? 'Estimated Total:' : language === 'zh' ? '预估总额:' : language === 'ru' ? 'Итоговая стоимость:' : 'Total Estimasi:',
    btnBookWhatsApp: language === 'en' ? 'Book Now via WhatsApp' : language === 'zh' ? '立即通过 WhatsApp 预订' : language === 'ru' ? 'Забронировать через WhatsApp' : 'Booking Sekarang via WhatsApp',
    disclaimerWa: language === 'en' ? 'Upon clicking, a pre-formatted message will be created and ready to send via WhatsApp.' : language === 'zh' ? '点击后将自动生成格式化信息，可直接在 WhatsApp 中发送。' : language === 'ru' ? 'После нажатия сформируется готовое сообщение для отправки в WhatsApp.' : 'Setelah tombol ditekan, pesan pemesanan otomatis terformat & siap dikirimkan via WhatsApp.',
    successHeading: language === 'en' ? 'Booking Sent to WhatsApp!' : language === 'zh' ? '预订已成功发送至 WhatsApp！' : language === 'ru' ? 'Бронирование успешно отправлено в WhatsApp!' : 'Pemesanan Berhasil Dikirimkan ke WhatsApp!',
    openWaNow: language === 'en' ? 'Open WhatsApp Chat Now' : language === 'zh' ? '立即打开 WhatsApp 对话' : language === 'ru' ? 'Открыть чат в WhatsApp' : 'Buka Chat WhatsApp Sekarang',
    printTicket: language === 'en' ? 'Print E-Ticket' : language === 'zh' ? '打印电子凭证' : language === 'ru' ? 'Печать билета' : 'Cetak E-Tiket (Print)',
    closeReturn: language === 'en' ? 'Close & Return' : language === 'zh' ? '关闭并返回' : language === 'ru' ? 'Закрыть и вернуться' : 'Tutup & Kembali'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 overflow-y-auto bg-black/90 backdrop-blur-md animate-fade-in text-gold-100 font-sans">
      <div
        id="booking-modal-container"
        className="relative bg-neutral-950 border border-gold-400/30 w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden flex flex-col my-4 md:my-8 max-h-[94vh]"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-900/90 border-b border-gold-900/20 backdrop-blur">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <MessageSquare size={16} className="text-emerald-400" />
            </div>
            <div className="text-left">
              <h2 className="font-serif text-base md:text-lg text-gold-200 tracking-wide font-medium">
                {step === 'details' ? tModal.titleDetails : tModal.titleSuccess}
              </h2>
              <p className="text-[10px] font-mono text-gold-400/60 uppercase tracking-wider">
                Bali Niki Tour • Direct Concierge Service
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-neutral-400 hover:text-gold-400 transition-colors p-1.5 rounded-lg hover:bg-neutral-800 cursor-pointer"
            aria-label="Tutup"
            id="btn-close-booking"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Box */}
        <div className="flex-grow overflow-y-auto p-5 md:p-8">

          {/* STEP 1: SPECIFICATION & DETAILS ENTRY */}
          {step === 'details' && (
            <form onSubmit={handleWhatsAppBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="form-booking-details">
              
              {/* Left Column Form inputs */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Select Package Dropdown */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs uppercase tracking-widest text-gold-300/80 font-semibold font-mono flex items-center justify-between">
                    <span>{tModal.selectPkg}</span>
                    <span className="text-[10px] text-emerald-400 normal-case font-sans">
                      {tModal.pkgsAvailable}
                    </span>
                  </label>
                  <select
                    value={selectedExpId}
                    onChange={(e) => {
                      setSelectedExpId(e.target.value);
                      setSelectedAddons([]); // reset upgrades
                    }}
                    id="booking-select-experience"
                    className="w-full bg-neutral-900 border border-gold-400/30 px-4 py-3.5 text-sm text-gold-100 rounded-lg focus:outline-none focus:border-gold-400 font-sans cursor-pointer shadow-inner"
                    aria-label={tModal.selectPkg}
                  >
                    {categories.map((cat) => (
                      <optgroup key={cat} label={`── ${cat} ──`} className="bg-neutral-900 text-gold-400 font-bold font-mono">
                        {ALL_BOOKABLE_PACKAGES.filter(p => p.category === cat).map((exp) => (
                          <option key={exp.id} value={exp.id} className="bg-neutral-950 text-gold-100 font-sans font-normal py-1">
                            {exp.title} — ${exp.pricePerPerson}/{language === 'en' ? 'person' : language === 'zh' ? '人' : language === 'ru' ? 'чел' : 'org'}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Date & Guest Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/80 font-semibold font-mono flex items-center gap-1.5">
                      <Calendar size={13} className="text-gold-400" />
                      <span>{tModal.selectDate}</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      id="booking-input-date"
                      className="w-full bg-neutral-900 border border-gold-400/30 px-4 py-3 text-sm text-gold-100 rounded-lg focus:outline-none focus:border-gold-400 font-sans [color-scheme:dark] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/80 font-semibold font-mono flex items-center gap-1.5">
                      <Users size={13} className="text-gold-400" />
                      <span>{tModal.guestsCount}</span>
                    </label>
                    <div className="flex items-center border border-gold-400/30 rounded-lg bg-neutral-900 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="px-4 py-3 text-gold-300 hover:text-gold-400 hover:bg-neutral-800 font-bold cursor-pointer transition-colors"
                      >
                        -
                      </button>
                      <span className="flex-grow text-center text-sm font-semibold text-gold-100 font-mono">
                        {guests} {tModal.guestsUnit}
                      </span>
                      <button
                        type="button"
                        onClick={() => setGuests(Math.min(20, guests + 1))}
                        className="px-4 py-3 text-gold-300 hover:text-gold-400 hover:bg-neutral-800 font-bold cursor-pointer transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Date warning block */}
                {dateWarning && (
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-2.5 text-xs text-amber-200 text-left">
                    <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{dateWarning}</span>
                  </div>
                )}

                {/* Dynamic Participants Details */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between border-b border-gold-900/20 pb-2">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/80 font-semibold font-mono">
                      {tModal.participantsManifest} ({guests} {tModal.guestsUnit})
                    </label>
                    <span className="text-[10px] text-gold-400/60 font-mono">{tModal.forInsurance}</span>
                  </div>

                  <div className="space-y-2.5" id="participants-inputs-container">
                    {participants.map((participant, index) => (
                      <div
                        key={index}
                        className="p-3.5 bg-neutral-900/60 border border-gold-400/15 rounded-lg space-y-2.5 text-left"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-gold-300 font-bold">
                            {tModal.participant} #{index + 1} {index === 0 && tModal.primaryBooker}
                          </span>
                          
                          {/* Age Category selection */}
                          <div className="flex gap-1.5">
                            {[
                              { key: 'Dewasa', label: tModal.adult },
                              { key: 'Anak', label: tModal.child }
                            ].map((cat) => (
                              <button
                                key={cat.key}
                                type="button"
                                onClick={() => handleParticipantChange(index, 'ageCategory', cat.key)}
                                className={`px-2.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                                  participant.ageCategory === cat.key
                                    ? 'bg-gold-400 text-neutral-950 font-bold'
                                    : 'bg-neutral-800 text-gold-100/50 hover:text-gold-200'
                                }`}
                              >
                                {cat.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <input
                            type="text"
                            required
                            placeholder={`${tModal.participant} ${index + 1}`}
                            value={participant.name}
                            onChange={(e) => {
                              handleParticipantChange(index, 'name', e.target.value);
                              if (index === 0) setFullName(e.target.value);
                            }}
                            className="w-full bg-neutral-950 border border-gold-400/20 px-3.5 py-2.5 text-xs text-gold-100 rounded focus:outline-none focus:border-gold-400 font-sans"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information & Country */}
                <div className="space-y-4 pt-2">
                  <div className="border-b border-gold-900/20 pb-2 text-left">
                    <label className="block text-xs uppercase tracking-widest text-gold-300/80 font-semibold font-mono">
                      {tModal.contactInfo}
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
                    {/* Full Name Confirmation */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="block text-[11px] font-mono text-gold-300/70 flex items-center justify-between">
                        <span>{tModal.fullNameLabel} <span className="text-emerald-400">*</span></span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === 'en' ? 'Full name of booker' : language === 'zh' ? '预订人全名' : language === 'ru' ? 'Полное имя заказчика' : 'Nama lengkap pemesan'}
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (participants.length > 0) {
                            handleParticipantChange(0, 'name', e.target.value);
                          }
                        }}
                        id="booking-input-fullname"
                        className="w-full bg-neutral-900 border border-gold-400/30 px-3.5 py-2.5 text-xs text-gold-100 rounded-lg focus:outline-none focus:border-gold-400 font-sans"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono text-gold-300/70 flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Mail size={12} className="text-gold-400" />
                          <span>{tModal.emailLabel} <span className="text-emerald-400">*</span></span>
                        </span>
                        <span className="text-[10px] text-gold-400/60 font-sans">{tModal.requiredBadge}</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="booking-input-email"
                        className="w-full bg-neutral-900 border border-gold-400/30 px-3.5 py-2.5 text-xs text-gold-100 rounded-lg focus:outline-none focus:border-gold-400 font-sans"
                      />
                    </div>

                    {/* Phone / WhatsApp Field */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono text-gold-300/70 flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <PhoneCall size={12} className="text-emerald-400" />
                          <span>{tModal.phoneLabel} <span className="text-emerald-400">*</span></span>
                        </span>
                        <span className="text-[10px] text-gold-400/60 font-sans">{tModal.requiredBadge}</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+62 812 3456 7890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="booking-input-phone"
                        className="w-full bg-neutral-900 border border-gold-400/30 px-3.5 py-2.5 text-xs text-gold-100 rounded-lg focus:outline-none focus:border-gold-400 font-mono"
                      />
                    </div>

                    {/* Country Field */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="block text-[11px] font-mono text-gold-300/70 flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Globe size={12} className="text-gold-400" />
                          <span>{tModal.countryLabel} <span className="text-emerald-400">*</span></span>
                        </span>
                        <span className="text-[10px] text-gold-400/60 font-sans">{tModal.requiredBadge}</span>
                      </label>
                      <div className="relative">
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          id="booking-input-country"
                          className="w-full bg-neutral-900 border border-gold-400/30 px-3.5 py-2.5 text-xs text-gold-100 rounded-lg focus:outline-none focus:border-gold-400 font-sans cursor-pointer"
                          aria-label={tModal.countryLabel}
                        >
                          {COUNTRIES_LIST.map((c) => (
                            <option key={c} value={c} className="bg-neutral-950 text-gold-100">
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="block text-[11px] font-mono text-gold-300/70">
                      {tModal.notesLabel}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={tModal.notesPlaceholder}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full bg-neutral-900 border border-gold-400/30 px-3.5 py-2 text-xs text-gold-100 rounded-lg focus:outline-none focus:border-gold-400 resize-none"
                    />
                  </div>
                </div>

              </div>

              {/* Right Panel Summary Invoice */}
              <div className="lg:col-span-5 bg-neutral-900/80 border border-gold-400/20 p-5 md:p-6 rounded-xl flex flex-col justify-between h-fit lg:sticky lg:top-4 text-left shadow-xl">
                <div>
                  <h3 className="font-serif text-base text-gold-200 border-b border-gold-900/20 pb-3 mb-4 font-medium tracking-wide flex items-center justify-between">
                    <span>{tModal.summaryTitle}</span>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase">WhatsApp Checkout</span>
                  </h3>

                  {/* Selected Item Preview */}
                  <div className="flex items-center space-x-3 mb-5 bg-neutral-950 p-3 border border-gold-900/20 rounded-lg">
                    <img
                      src={getOptimizedCloudinaryUrl(currentExp.cardImage || 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png', { width: 200, quality: 'auto', format: 'auto' })}
                      alt={currentExp.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1789635759/bcadd418-6d1e-45ed-bb5d-71979c5c6da5.png';
                      }}
                      className="w-14 h-16 object-cover rounded-md border border-gold-400/20 flex-shrink-0"
                    />
                    <div className="overflow-hidden">
                      <span className="inline-block font-mono text-[8px] uppercase tracking-wider text-gold-400 bg-gold-400/10 px-1.5 py-0.5 rounded">
                        {currentExp.category}
                      </span>
                      <h4 className="font-serif text-xs md:text-sm text-gold-100 font-medium leading-snug mt-1 truncate">
                        {currentExp.title}
                      </h4>
                      <p className="font-sans text-[10px] text-gold-200/40 flex items-center gap-1 mt-0.5">
                        <MapPin size={10} className="text-gold-400" />
                        <span className="truncate">{currentExp.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center text-gold-100/70 pt-3 border-t border-gold-900/20">
                      <span>{tModal.baseRate} ({guests} {tModal.guestsUnit})</span>
                      <span className="font-mono text-gold-100 font-semibold">${basePrice}</span>
                    </div>

                    <div className="flex justify-between items-center text-gold-100/70">
                      <span className="flex items-center gap-1">
                        <span>{tModal.taxConcierge}</span>
                        <span className="bg-gold-500/10 text-gold-300 font-mono text-[9px] px-1.5 py-0.5 rounded">10%</span>
                      </span>
                      <span className="font-mono text-gold-100">${tax}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-gold-400/20">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-serif text-sm text-gold-200">{tModal.totalEst}</span>
                    <span className="font-mono text-2xl text-gold-400 font-extrabold">${grandTotal}</span>
                  </div>

                  {/* WHATSAPP ACTION BUTTON */}
                  <button
                    type="submit"
                    disabled={!!dateWarning}
                    id="btn-confirm-whatsapp-booking"
                    className={`w-full font-mono text-xs uppercase tracking-wider font-bold py-4 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg active:scale-98 ${
                      dateWarning
                        ? 'bg-neutral-800 text-neutral-500 border border-neutral-700 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:shadow-emerald-500/20'
                    }`}
                  >
                    <MessageSquare size={17} className="stroke-[2.5]" />
                    <span>{tModal.btnBookWhatsApp}</span>
                  </button>

                  <div className="mt-3.5 space-y-1 text-center">
                    <p className="text-[10px] text-emerald-400/90 font-mono flex items-center justify-center gap-1">
                      <PhoneCall size={10} />
                      <span>CS Hotline: +62 813-3725-2651 (24/7)</span>
                    </p>
                    <p className="text-[9px] text-gold-300/40">
                      {tModal.disclaimerWa}
                    </p>
                  </div>
                </div>
              </div>

            </form>
          )}

          {/* STEP 2: SUCCESS OFFICIAL E-TICKET & VOUCHER */}
          {step === 'success' && confirmedBooking && (
            <div className="space-y-6 text-left animate-fade-in" id="booking-success-layout">
              
              {/* Congratulations Header Banner */}
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-5 md:p-6 text-center space-y-3 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Check size={26} className="stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl md:text-2xl text-emerald-200 font-medium tracking-wide">
                    {tModal.successHeading}
                  </h3>
                  <p className="text-gold-200/70 text-xs md:text-sm font-sans max-w-xl mx-auto leading-relaxed">
                    {language === 'en'
                      ? <>Thank you <strong>{confirmedBooking.fullName}</strong>. Your reservation has been generated with Booking Code: <strong className="text-emerald-400 font-mono">{confirmedBooking.bookingCode}</strong>.</>
                      : language === 'zh'
                      ? <>感谢您 <strong>{confirmedBooking.fullName}</strong>。您的预订已成功生成，预订编号为：<strong className="text-emerald-400 font-mono">{confirmedBooking.bookingCode}</strong>。</>
                      : language === 'ru'
                      ? <>Спасибо, <strong>{confirmedBooking.fullName}</strong>. Ваше бронирование оформлено. Код бронирования: <strong className="text-emerald-400 font-mono">{confirmedBooking.bookingCode}</strong>.</>
                      : <>Terima kasih <strong>{confirmedBooking.fullName}</strong>. Data reservasi Anda telah berhasil dibuat dengan Kode Booking: <strong className="text-emerald-400 font-mono">{confirmedBooking.bookingCode}</strong>.</>
                    }
                  </p>
                </div>

                {/* Direct WhatsApp button in case popup blocked */}
                {generatedWaUrl && (
                  <a
                    href={generatedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-lg shadow-md transition-all mt-2"
                  >
                    <MessageSquare size={15} />
                    <span>{tModal.openWaNow}</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Printable Voucher Ticket layout styled like an actual luxury ticket */}
              <div
                id="printable-luxury-voucher"
                className="bg-neutral-900 border border-gold-400/30 rounded-xl p-5 md:p-8 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative classic background watermark lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfab56_1px,transparent_1px),linear-gradient(to_bottom,#dfab56_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.02]" />
                
                <div className="relative z-10 space-y-6">
                  {/* Voucher Header with Branding and QR Code */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gold-900/20 pb-5">
                    <div className="text-left">
                      <span className="font-serif text-xl text-gold-200 font-bold tracking-widest uppercase block">BALI NIKI TOUR</span>
                      <span className="block text-[9px] font-mono tracking-[0.25em] text-gold-400 uppercase font-bold mt-0.5">EXCLUSIVE BALI TOUR VOUCHER</span>
                    </div>

                    <div className="bg-white p-2 rounded border border-gold-400 flex items-center gap-3">
                      <div className="w-12 h-12 bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:5px_5px]" />
                      <div className="text-left font-mono">
                        <span className="text-[8px] text-neutral-500 block uppercase leading-none">BOOKING CODE</span>
                        <span className="text-xs text-neutral-900 font-bold block">{confirmedBooking.bookingCode}</span>
                        <span className="text-[8px] text-emerald-600 font-bold block mt-0.5">WHATSAPP CONFIRMED</span>
                      </div>
                    </div>
                  </div>

                  {/* Core Tour Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left text-xs font-mono">
                    <div className="space-y-1">
                      <span className="text-gold-400/60 block uppercase tracking-wider text-[10px]">TOUR PACKAGE</span>
                      <span className="text-gold-100 font-serif font-bold text-sm block">{currentExp.title}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gold-400/60 block uppercase tracking-wider text-[10px]">TRIP DATE</span>
                      <span className="text-gold-100 text-sm font-bold block">{confirmedBooking.date}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gold-400/60 block uppercase tracking-wider text-[10px]">PRIMARY BOOKER</span>
                      <span className="text-gold-100 text-sm font-bold block">{confirmedBooking.fullName}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gold-400/60 block uppercase tracking-wider text-[10px]">COUNTRY</span>
                      <span className="text-gold-100 text-sm font-bold block">{confirmedBooking.country || 'Indonesia'}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gold-400/60 block uppercase tracking-wider text-[10px]">WHATSAPP / PHONE</span>
                      <span className="text-gold-100 text-sm font-bold block">{confirmedBooking.phone}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-gold-400/60 block uppercase tracking-wider text-[10px]">EMAIL</span>
                      <span className="text-gold-100 text-sm font-bold block truncate">{confirmedBooking.email}</span>
                    </div>
                  </div>

                  {/* PARTICIPANTS TICKETS GRID */}
                  <div className="space-y-3 pt-4 border-t border-gold-900/20">
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-gold-400 font-bold">
                      {tModal.participantsManifest} ({confirmedBooking.participants.length} {tModal.guestsUnit})
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" id="success-participants-list">
                      {confirmedBooking.participants.map((part: Participant, i: number) => (
                        <div key={i} className="bg-neutral-950 p-3.5 border border-gold-400/15 rounded-lg flex items-center justify-between">
                          <div className="text-left space-y-0.5">
                            <span className="text-[8px] font-mono text-gold-400/50 uppercase">{tModal.participant} #{i + 1}</span>
                            <p className="font-serif text-sm text-gold-200 font-bold">{part.name}</p>
                          </div>
                          <span className="inline-block px-2.5 py-1 bg-gold-400/10 border border-gold-400/20 rounded text-[9px] font-mono font-bold text-gold-400 uppercase shrink-0">
                            {part.ageCategory === 'Dewasa' ? tModal.adult : tModal.child}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights and guidelines for user */}
                  <div className="bg-neutral-950 p-4 border border-gold-900/20 rounded-lg text-left grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-gold-200/70 leading-relaxed">
                    <div className="space-y-1">
                      <h5 className="font-bold text-gold-100 font-mono text-xs uppercase text-gold-400">
                        {language === 'en' ? 'Next Steps:' : language === 'zh' ? '后续流程:' : language === 'ru' ? 'Следующие шаги:' : 'Langkah Selanjutnya:'}
                      </h5>
                      <p>
                        {language === 'en'
                          ? '• Our Concierge team has received your message and will confirm your pickup time & vehicle details on WhatsApp.'
                          : language === 'zh'
                          ? '• 我们的礼宾团队已收到您的信息，并将通过 WhatsApp 确认接送时间及车辆信息。'
                          : language === 'ru'
                          ? '• Наша команда консьержей получила сообщение и подтвердит время трансфера в WhatsApp.'
                          : '• Tim Concierge kami telah menerima pesan Anda dan akan merespon via WhatsApp untuk konfirmasi jam jemput & detail mobil.'}
                      </p>
                      <p>
                        {language === 'en'
                          ? '• No immediate payment is required now. Payment is settled after itinerary confirmation.'
                          : language === 'zh'
                          ? '• 目前无需立即付款。在确认行程安排后付款即可。'
                          : language === 'ru'
                          ? '• Немедленная оплата не требуется. Оплата производится после согласования.'
                          : '• Tidak diperlukan pembayaran instan saat ini. Pembayaran dapat diselesaikan setelah konfirmasi jadwal.'}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-bold text-gold-100 font-mono text-xs uppercase text-gold-400">
                        {language === 'en' ? 'All-Inclusive Inclusions:' : language === 'zh' ? '全包服务包含:' : language === 'ru' ? 'Включено:' : 'Fasilitas All-In:'}
                      </h5>
                      <p>
                        {language === 'en'
                          ? '• Private air-conditioned vehicle, professional driver/guide, entrance tickets, and fuel.'
                          : language === 'zh'
                          ? '• 私人空调专车、专业中文/英文司机向导、景区门票及油费。'
                          : language === 'ru'
                          ? '• Автомобиль с кондиционером, опытный водитель/гид, входные билеты и топливо.'
                          : '• Mobil ber-AC privat, supir/guide berpengalaman, tiket masuk lokasi, dan bensin.'}
                      </p>
                      <p>• CS 24/7: <strong>+62 813-3725-2651</strong></p>
                    </div>
                  </div>

                  {/* Price Summary footer on voucher */}
                  <div className="flex justify-between items-baseline pt-3 border-t border-gold-900/20">
                    <span className="font-mono text-[10px] text-gold-400/60 uppercase">
                      {language === 'en' ? 'Total Estimated Price' : language === 'zh' ? '预订预估总价' : language === 'ru' ? 'Общая стоимость' : 'Total Estimasi Reservasi'}
                    </span>
                    <span className="font-mono text-xl font-bold text-gold-400">${confirmedBooking.totalPrice}</span>
                  </div>

                </div>
              </div>

              {/* PDF Action buttons */}
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer size={14} />
                  <span>{tModal.printTicket}</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-neutral-900 border border-gold-400/30 hover:border-gold-400 text-gold-300 hover:text-gold-100 font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-all cursor-pointer"
                >
                  {tModal.closeReturn}
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
