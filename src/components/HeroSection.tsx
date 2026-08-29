import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Compass, ArrowRight, Search, Activity, Clock, DollarSign, Briefcase } from 'lucide-react';
import { SearchFilters } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';
import { getOptimizedCloudinaryUrl, generateCloudinarySrcSet } from '../utils/cloudinary';

export interface HeroSlideItem {
  id: string;
  type: 'destination' | 'activity';
  targetName: string;
  tagline: string;
  category: string;
  title: string;
  displayTitle: string;
  shortDesc: string;
  bgImage: string;
  cardImage: string;
  bookingExperienceId: string;
}

export interface LocalizedSlideContent {
  tagline: string;
  category: string;
  title: string;
  displayTitle: string;
  shortDesc: string;
}

export const HERO_SLIDE_TRANSLATIONS: Record<string, Record<string, LocalizedSlideContent>> = {
  'hero-ubud': {
    id: {
      tagline: 'DESTINASI • 18 TRIPS',
      category: 'Destinasi',
      title: 'Ubud Cultural & Nature Heart',
      displayTitle: 'Ubud',
      shortDesc: 'Pusat seni, budaya, sawah terasering hijau Tegalalang, retret kesehatan holistik, dan Sacred Monkey Forest Sanctuary.',
    },
    en: {
      tagline: 'DESTINATION • 18 TRIPS',
      category: 'Destination',
      title: 'Ubud Cultural & Nature Heart',
      displayTitle: 'Ubud',
      shortDesc: 'The center of art, culture, verdant Tegalalang rice terraces, holistic wellness retreats, and the Sacred Monkey Forest Sanctuary.',
    },
    zh: {
      tagline: '目的地 • 18 个行程',
      category: '目的地',
      title: '乌布文化与自然之心',
      displayTitle: '乌布 (Ubud)',
      shortDesc: '巴厘岛艺术与文化中心，拥有德格拉朗翠绿梯田、身心疗愈静修胜地以及圣猴森林保护区。',
    },
    ru: {
      tagline: 'НАПРАВЛЕНИЕ • 18 ТУРОВ',
      category: 'Направление',
      title: 'Убуд — Сердце культуры и природы',
      displayTitle: 'Убуд',
      shortDesc: 'Центр искусства, культуры, изумрудных рисовых террас Тегаллаланг, оздоровительных ретритов и Леса обезьян.',
    },
  },
  'hero-bedugul': {
    id: {
      tagline: 'DESTINASI • 7 TRIPS',
      category: 'Destinasi',
      title: 'Bedugul Lake & Highland',
      displayTitle: 'Bedugul',
      shortDesc: 'Danau Beratan dengan Pura Ulun Danu ikonik, perbukitan sejuk berkabut, dan gerbang kembar Handara Gate.',
    },
    en: {
      tagline: 'DESTINATION • 7 TRIPS',
      category: 'Destination',
      title: 'Bedugul Lake & Highland',
      displayTitle: 'Bedugul',
      shortDesc: 'Lake Beratan with the iconic Ulun Danu Temple, misty cool highlands, and the majestic Handara Gate.',
    },
    zh: {
      tagline: '目的地 • 7 个行程',
      category: '目的地',
      title: '贝都古尔湖泊与高原',
      displayTitle: '贝都古尔 (Bedugul)',
      shortDesc: '拥有标志性水上水神庙的布拉坦湖、清凉云雾缭绕的高原以及宏伟的汉达拉天门。',
    },
    ru: {
      tagline: 'НАПРАВЛЕНИЕ • 7 ТУРОВ',
      category: 'Направление',
      title: 'Бедугул — Озеро и высокогорье',
      displayTitle: 'Бедугул',
      shortDesc: 'Озеро Бератан со знаменитым храмом Улун Дану, прохладные туманные холмы и ворота Хандара.',
    },
  },
  'hero-kuta-legian': {
    id: {
      tagline: 'DESTINASI • 5 TRIPS',
      category: 'Destinasi',
      title: 'Kuta & Legian Sunset Coast',
      displayTitle: 'Kuta & Legian',
      shortDesc: 'Pantai pasir emas yang terkenal, suasana pesisir semarak, ombak surfing legendaris, dan panorama sunset menawan.',
    },
    en: {
      tagline: 'DESTINATION • 5 TRIPS',
      category: 'Destination',
      title: 'Kuta & Legian Sunset Coast',
      displayTitle: 'Kuta & Legian',
      shortDesc: 'Famous golden sand beaches, vibrant coastal vibe, legendary surf breaks, and stunning panoramic sunsets.',
    },
    zh: {
      tagline: '目的地 • 5 个行程',
      category: '目的地',
      title: '库塔与雷吉安日落海岸',
      displayTitle: '库塔与雷吉安',
      shortDesc: '著名的金色沙滩、充满活力的海岸氛围、传奇的冲浪浪点以及迷人的日落全景。',
    },
    ru: {
      tagline: 'НАПРАВЛЕНИЕ • 5 ТУРОВ',
      category: 'Направление',
      title: 'Кута и Легиан — Побережье закатов',
      displayTitle: 'Кута и Легиан',
      shortDesc: 'Знаменитые золотые пляжи, яркая прибрежная жизнь, легендарный серфинг и завораживающие закаты.',
    },
  },
  'hero-nusa-penida': {
    id: {
      tagline: 'DESTINASI • 2 TRIPS',
      category: 'Destinasi',
      title: 'Nusa Penida & Lembongan',
      displayTitle: 'Nusa Penida',
      shortDesc: 'Tebing karang dramatis Kelingking Beach, Diamond Beach, dan perairan kristal untuk snorkeling pari manta eksotis.',
    },
    en: {
      tagline: 'DESTINATION • 2 TRIPS',
      category: 'Destination',
      title: 'Nusa Penida & Lembongan',
      displayTitle: 'Nusa Penida',
      shortDesc: 'Dramatic limestone cliffs at Kelingking Beach, Diamond Beach, and crystal waters for exotic manta ray snorkeling.',
    },
    zh: {
      tagline: '目的地 • 2 个行程',
      category: '目的地',
      title: '佩尼达岛与蓝梦岛',
      displayTitle: '佩尼达岛 (Nusa Penida)',
      shortDesc: '精灵坠崖震撼的石灰岩悬崖、钻石海滩以及与魔鬼鱼共游的清澈水域。',
    },
    ru: {
      tagline: 'НАПРАВЛЕНИЕ • 2 ТУРА',
      category: 'Направление',
      title: 'Нуса-Пенида и Лембонган',
      displayTitle: 'Нуса-Пенида',
      shortDesc: 'Впечатляющие скалы пляжа Келингкинг, Даймонд Бич и кристально чистые воды для снорклинга с мантами.',
    },
  },
  'hero-sanur': {
    id: {
      tagline: 'DESTINASI • 1 TRIP',
      category: 'Destinasi',
      title: 'Sanur Peaceful Sunrise Bay',
      displayTitle: 'Sanur',
      shortDesc: 'Pesisir timur yang tenang dengan jalur sepeda tepi pantai, fajar matahari terbit yang damai, dan atmosfer rileks.',
    },
    en: {
      tagline: 'DESTINATION • 1 TRIP',
      category: 'Destination',
      title: 'Sanur Peaceful Sunrise Bay',
      displayTitle: 'Sanur',
      shortDesc: 'Tranquil eastern coastline with beachfront cycling paths, peaceful golden sunrises, and a relaxing vibe.',
    },
    zh: {
      tagline: '目的地 • 1 个行程',
      category: '目的地',
      title: '沙努尔宁静日出海湾',
      displayTitle: '沙努尔 (Sanur)',
      shortDesc: '宁静的东部海岸线、海滨骑行步道、祥和灿烂的日出以及悠闲惬意的度假氛围。',
    },
    ru: {
      tagline: 'НАПРАВЛЕНИЕ • 1 ТУР',
      category: 'Направление',
      title: 'Санур — Умиротворенная бухта рассветов',
      displayTitle: 'Санур',
      shortDesc: 'Спокойное восточное побережье с велодорожками вдоль моря, живописные рассветы и атмосфера релакса.',
    },
  },
  'hero-rafting': {
    id: {
      tagline: 'AKTIVITAS • 4 TRIPS',
      category: 'Aktivitas',
      title: 'Rafting & Kayaking Adventure',
      displayTitle: 'Rafting & Kayaking',
      shortDesc: 'Arung jeram seru di Sungai Telaga Waja & Sungai Ayung Ubud dengan tantangan jeram terbaik dan pemandangan lembah tropis.',
    },
    en: {
      tagline: 'ACTIVITY • 4 TRIPS',
      category: 'Activity',
      title: 'Rafting & Kayaking Adventure',
      displayTitle: 'Rafting & Kayaking',
      shortDesc: 'Thrilling white water rafting on Telaga Waja & Ayung River with top-class rapids and lush tropical valley views.',
    },
    zh: {
      tagline: '活动 • 4 个行程',
      category: '活动',
      title: '白水漂流与皮划艇冒险',
      displayTitle: '漂流与皮划艇',
      shortDesc: '在特拉嘎河与阿勇河体验刺激的白水漂流，领略顶级急流挑战与热带雨林峡谷美景。',
    },
    ru: {
      tagline: 'АКТИВНОСТЬ • 4 ТУРА',
      category: 'Активность',
      title: 'Рафтинг и каякинг приключения',
      displayTitle: 'Рафтинг и каякинг',
      shortDesc: 'Захватывающий рафтинг по рекам Телага Ваджа и Аюнг с лучшими порогами и видами на тропические ущелья.',
    },
  },
  'hero-animal': {
    id: {
      tagline: 'AKTIVITAS • 7 TRIPS',
      category: 'Aktivitas',
      title: 'Animal Encounter Sanctuary',
      displayTitle: 'Animal Encounter',
      shortDesc: 'Pengalaman satwa tak terlupakan mengunjungi Sacred Monkey Forest Ubud, kera ekor panjang, dan keindahan cagar alam tropis.',
    },
    en: {
      tagline: 'ACTIVITY • 7 TRIPS',
      category: 'Activity',
      title: 'Animal Encounter Sanctuary',
      displayTitle: 'Animal Encounter',
      shortDesc: 'Unforgettable wildlife encounters at the Sacred Monkey Forest Sanctuary, playful macaques, and tropical nature reserves.',
    },
    zh: {
      tagline: '活动 • 7 个行程',
      category: '活动',
      title: '野生动物圣所体验',
      displayTitle: '野生动物互动',
      shortDesc: '在乌布圣猴森林保护区与长尾猕猴亲密接触，体验令人难忘的热带自然保护区风光。',
    },
    ru: {
      tagline: 'АКТИВНОСТЬ • 7 ТУРОВ',
      category: 'Активность',
      title: 'Встречи с дикой природой',
      displayTitle: 'Животный мир',
      shortDesc: 'Незабываемые впечатления в заповеднике Священного леса обезьян Убуда и красота тропической природы.',
    },
  },
};

export const getHeroSlideContent = (slide: HeroSlideItem, lang: Language): LocalizedSlideContent => {
  const transMap = HERO_SLIDE_TRANSLATIONS[slide.id];
  if (transMap && transMap[lang]) {
    return transMap[lang];
  }
  if (transMap && transMap.en) {
    return transMap.en;
  }
  return {
    tagline: slide.tagline,
    category: slide.category,
    title: slide.title,
    displayTitle: slide.displayTitle,
    shortDesc: slide.shortDesc,
  };
};

export const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: 'hero-ubud',
    type: 'destination',
    targetName: 'Ubud',
    tagline: 'DESTINASI • 18 TRIPS',
    category: 'Destinasi',
    title: 'Ubud Cultural & Nature Heart',
    displayTitle: 'Ubud',
    shortDesc: 'Pusat seni, budaya, sawah terasering hijau Tegalalang, retret kesehatan holistik, dan Sacred Monkey Forest Sanctuary.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397434/c67903ef-d494-4a2d-8614-e2e2964fc934.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397434/c67903ef-d494-4a2d-8614-e2e2964fc934.png',
    bookingExperienceId: 'ubud-monkey-forest-and-kintamani-highland'
  },
  {
    id: 'hero-bedugul',
    type: 'destination',
    targetName: 'Bedugul',
    tagline: 'DESTINASI • 7 TRIPS',
    category: 'Destinasi',
    title: 'Bedugul Lake & Highland',
    displayTitle: 'Bedugul',
    shortDesc: 'Danau Beratan dengan Pura Ulun Danu ikonik, perbukitan sejuk berkabut, dan gerbang kembar Handara Gate.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396469/55789d88-0e33-4fb1-8165-183964e9879a.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396469/55789d88-0e33-4fb1-8165-183964e9879a.png',
    bookingExperienceId: 'royal-family-palace-bedugul-tanah-lot'
  },
  {
    id: 'hero-kuta-legian',
    type: 'destination',
    targetName: 'Kuta and Legian',
    tagline: 'DESTINASI • 5 TRIPS',
    category: 'Destinasi',
    title: 'Kuta & Legian Sunset Coast',
    displayTitle: 'Kuta & Legian',
    shortDesc: 'Pantai pasir emas yang terkenal, suasana pesisir semarak, ombak surfing legendaris, dan panorama sunset menawan.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396965/924f8055-ab12-42f2-845e-6347471ff305.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787396965/924f8055-ab12-42f2-845e-6347471ff305.png',
    bookingExperienceId: 'water-sport-beaches-uluwatu-dinner'
  },
  {
    id: 'hero-nusa-penida',
    type: 'destination',
    targetName: 'Nusa Penida and Nusa Lembongan',
    tagline: 'DESTINASI • 2 TRIPS',
    category: 'Destinasi',
    title: 'Nusa Penida & Lembongan',
    displayTitle: 'Nusa Penida',
    shortDesc: 'Tebing karang dramatis Kelingking Beach, Diamond Beach, dan perairan kristal untuk snorkeling pari manta eksotis.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397088/74fe9ef3-c143-4676-80ff-a1afa5ea370a.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397088/74fe9ef3-c143-4676-80ff-a1afa5ea370a.png',
    bookingExperienceId: 'nusa-penida-east-trip'
  },
  {
    id: 'hero-sanur',
    type: 'destination',
    targetName: 'Sanur',
    tagline: 'DESTINASI • 1 TRIP',
    category: 'Destinasi',
    title: 'Sanur Peaceful Sunrise Bay',
    displayTitle: 'Sanur',
    shortDesc: 'Pesisir timur yang tenang dengan jalur sepeda tepi pantai, fajar matahari terbit yang damai, dan atmosfer rileks.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397152/f868a9ee-8917-4270-9a47-c52b9362bd4e.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787397152/f868a9ee-8917-4270-9a47-c52b9362bd4e.png',
    bookingExperienceId: 'bali-culture-heritage-3-days'
  },
  {
    id: 'hero-rafting',
    type: 'activity',
    targetName: 'Rafting and Kayaking',
    tagline: 'AKTIVITAS • 4 TRIPS',
    category: 'Aktivitas',
    title: 'Rafting & Kayaking Adventure',
    displayTitle: 'Rafting & Kayaking',
    shortDesc: 'Arung jeram seru di Sungai Telaga Waja & Sungai Ayung Ubud dengan tantangan jeram terbaik dan pemandangan lembah tropis.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1786184128/e0699feb-0cd5-4d84-9055-d2819efa51a4.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1786184128/e0699feb-0cd5-4d84-9055-d2819efa51a4.png',
    bookingExperienceId: 'telaga-waja-rafting'
  },
  {
    id: 'hero-animal',
    type: 'activity',
    targetName: 'Animal Encounter',
    tagline: 'AKTIVITAS • 7 TRIPS',
    category: 'Aktivitas',
    title: 'Animal Encounter Sanctuary',
    displayTitle: 'Animal Encounter',
    shortDesc: 'Pengalaman satwa tak terlupakan mengunjungi Sacred Monkey Forest Ubud, kera ekor panjang, dan keindahan cagar alam tropis.',
    bgImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787379481/940c1085-0d65-4285-904c-c84a343cc4f2.png',
    cardImage: 'https://res.cloudinary.com/di6ziqvtp/image/upload/v1787379481/940c1085-0d65-4285-904c-c84a343cc4f2.png',
    bookingExperienceId: 'ubud-monkey-forest-and-kintamani-highland'
  }
];

interface HeroSectionProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onExploreClick: (slide: HeroSlideItem) => void;
  onBookNowClick: (experienceId?: string) => void;
  onSearchSubmit?: (filters: SearchFilters) => void;
}

export default function HeroSection({
  activeIndex,
  setActiveIndex,
  onExploreClick,
  onBookNowClick,
  onSearchSubmit,
}: HeroSectionProps) {
  const { language } = useLanguage();
  // Ensure activeIndex is within bounds
  const safeIndex = (activeIndex >= 0 && activeIndex < HERO_SLIDES.length) ? activeIndex : 0;
  const currentSlide = HERO_SLIDES[safeIndex];
  const activeContent = getHeroSlideContent(currentSlide, language);

  const tHero = {
    exploreDest: language === 'id' ? 'Lihat Destinasi' : language === 'zh' ? '探索目的地' : language === 'ru' ? 'Исследовать направление' : 'Explore Destination',
    exploreAct: language === 'id' ? 'Lihat Aktivitas' : language === 'zh' ? '探索活动' : language === 'ru' ? 'Посмотреть активность' : 'Explore Activity',
    bookNow: language === 'id' ? 'Booking Sekarang' : language === 'zh' ? '立即预订' : language === 'ru' ? 'Забронировать' : 'Book Now',
    featuredHeader: language === 'id' ? 'Destinasi & Aktivitas Pilihan' : language === 'zh' ? '精选目的地与活动' : language === 'ru' ? 'Рекомендуемые направления и активности' : 'Featured Destinations & Activities',
    selectedBadge: language === 'id' ? 'Dipilih' : language === 'zh' ? '已选择' : language === 'ru' ? 'Выбрано' : 'Selected',

    // Search Bar
    searchDestLabel: language === 'id' ? 'Destinasi' : language === 'zh' ? '目的地' : language === 'ru' ? 'Направление' : 'Destination',
    allLocations: language === 'id' ? 'Semua Lokasi' : language === 'zh' ? '全部地点' : language === 'ru' ? 'Все локации' : 'All Locations',
    
    searchActLabel: language === 'id' ? 'Aktivitas' : language === 'zh' ? '活动项目' : language === 'ru' ? 'Активности' : 'Activities',
    allActivities: language === 'id' ? 'Semua Aktivitas' : language === 'zh' ? '全部活动' : language === 'ru' ? 'Все активности' : 'Any Activity',
    actAnimal: language === 'id' ? 'Interaksi Satwa' : language === 'zh' ? '动物互动' : language === 'ru' ? 'Общение с животными' : 'Animal Encounter',
    actBeaches: language === 'id' ? 'Pantai' : language === 'zh' ? '海滩' : language === 'ru' ? 'Пляжи' : 'Beaches',
    actCycling: language === 'id' ? 'Wisata Sepeda' : language === 'zh' ? '骑行之旅' : language === 'ru' ? 'Велопрогулки' : 'Cycling Trip',
    actRafting: language === 'id' ? 'Arung Jeram' : language === 'zh' ? '白水漂流' : language === 'ru' ? 'Рафтинг' : 'Rafting',
    
    searchDurLabel: language === 'id' ? 'Durasi' : language === 'zh' ? '行程时长' : language === 'ru' ? 'Длительность' : 'Duration',
    allDurations: language === 'id' ? 'Semua Durasi' : language === 'zh' ? '全部时长' : language === 'ru' ? 'Любая длительность' : 'Any Duration',
    dur5Hours: language === 'id' ? 'Hingga 5 Jam' : language === 'zh' ? '5小时以内' : language === 'ru' ? 'До 5 часов' : 'Up to 5 Hours',
    dur1Day: language === 'id' ? '1 Hari' : language === 'zh' ? '1天 (一日游)' : language === 'ru' ? '1 день' : '1 Day',
    dur23Days: language === 'id' ? '2-3 Hari' : language === 'zh' ? '2-3天' : language === 'ru' ? '2-3 дня' : '2-3 Days',
    dur4PlusDays: language === 'id' ? '4+ Hari' : language === 'zh' ? '4天及以上' : language === 'ru' ? '4+ дней' : '4+ Days',

    searchTypeLabel: language === 'id' ? 'Jenis Paket' : language === 'zh' ? '套餐类型' : language === 'ru' ? 'Тип тура' : 'Trip Type',
    allTypes: language === 'id' ? 'Semua Jenis' : language === 'zh' ? '全部类型' : language === 'ru' ? 'Все типы' : 'Any Type',
    typeFullDay: language === 'id' ? 'Tur Sehari Penuh' : language === 'zh' ? '一日游全日' : language === 'ru' ? 'Однодневный тур' : 'Full Day Tour',
    typeMultiDay: language === 'id' ? 'Paket Multi Hari' : language === 'zh' ? '多日环岛游' : language === 'ru' ? 'Многодневный тур' : 'Multi Days',
    typeAdventure: language === 'id' ? 'Petualangan' : language === 'zh' ? '户外冒险' : language === 'ru' ? 'Приключения' : 'Adventure',
    typeCulture: language === 'id' ? 'Budaya' : language === 'zh' ? '文化遗产' : language === 'ru' ? 'Культура' : 'Culture',
    typeWaterSports: language === 'id' ? 'Olahraga Air' : language === 'zh' ? '水上运动' : language === 'ru' ? 'Водные виды спорта' : 'Water Sports',

    searchPriceLabel: language === 'id' ? 'Harga' : language === 'zh' ? '价格范围' : language === 'ru' ? 'Цена' : 'Price',
    allPrices: language === 'id' ? 'Semua Harga' : language === 'zh' ? '全部价格' : language === 'ru' ? 'Любая цена' : 'Any Price',
    priceUnder50: language === 'id' ? 'Di bawah $50' : language === 'zh' ? '$50 以下' : language === 'ru' ? 'До $50' : 'Under $50',
    priceOver300: language === 'id' ? 'Di atas $300' : language === 'zh' ? '$300 以上' : language === 'ru' ? 'Более $300' : 'Over $300',

    searchDiffLabel: language === 'id' ? 'Tingkat Kesulitan' : language === 'zh' ? '难度级别' : language === 'ru' ? 'Сложность' : 'Difficulty',
    allDiff: language === 'id' ? 'Semua' : language === 'zh' ? '全部' : language === 'ru' ? 'Любая' : 'Any',
    diffEasy: language === 'id' ? 'Mudah' : language === 'zh' ? '简单' : language === 'ru' ? 'Легко' : 'Easy',
    diffModerate: language === 'id' ? 'Sedang' : language === 'zh' ? '中等' : language === 'ru' ? 'Средне' : 'Moderate',
    diffHard: language === 'id' ? 'Sulit' : language === 'zh' ? '较难' : language === 'ru' ? 'Сложно' : 'Hard',
    diffExtreme: language === 'id' ? 'Ekstrem' : language === 'zh' ? '极难/探险' : language === 'ru' ? 'Экстрим' : 'Extreme',

    searchBtn: language === 'id' ? 'Cari' : language === 'zh' ? '搜索' : language === 'ru' ? 'Поиск' : 'Search',
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const startXRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((safeIndex + 1) % HERO_SLIDES.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [safeIndex, setActiveIndex]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      setContainerWidth(containerRef.current?.parentElement?.getBoundingClientRect().width || 0);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    const timer = setTimeout(updateWidth, 100);
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, []);

  const cardWidth = isMobile ? 144 : 192; // w-36 is 144px, w-48 is 192px
  const gap = 16; // gap-4 is 16px

  const targetTranslate = containerWidth > 0
    ? (containerWidth / 2) - (safeIndex * (cardWidth + gap) + cardWidth / 2)
    : 0;

  const totalTranslate = targetTranslate + dragOffset;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    stopAutoplay();
    setIsDragging(true);
    startXRef.current = e.clientX;
    hasDraggedRef.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    
    if (Math.abs(deltaX) > 10) {
      hasDraggedRef.current = true;
    }
    
    let finalDelta = deltaX;
    if (safeIndex === 0 && deltaX > 0) {
      finalDelta = deltaX * 0.4;
    } else if (safeIndex === HERO_SLIDES.length - 1 && deltaX < 0) {
      finalDelta = deltaX * 0.4;
    }
    
    setDragOffset(finalDelta);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    const swipeThreshold = 50;
    if (dragOffset < -swipeThreshold) {
      if (safeIndex < HERO_SLIDES.length - 1) {
        setActiveIndex(safeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    } else if (dragOffset > swipeThreshold) {
      if (safeIndex > 0) {
        setActiveIndex(safeIndex - 1);
      } else {
        setActiveIndex(HERO_SLIDES.length - 1);
      }
    }
    setDragOffset(0);
    startAutoplay();
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setDragOffset(0);
    e.currentTarget.releasePointerCapture(e.pointerId);
    startAutoplay();
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('destinations-overview') || document.getElementById('experiences');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    destination: '',
    activity: '',
    duration: '',
    tripType: '',
    price: '',
    difficulty: ''
  });

  const handleSearchChange = (field: keyof SearchFilters, value: string) => {
    setSearchFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleSearchSubmit = () => {
    if (onSearchSubmit) {
      onSearchSubmit(searchFilters);
    }
  };

  return (
    <section
      id="hero-top"
      className="relative min-h-screen w-full flex flex-col justify-between bg-neutral-950 pb-8 md:pb-0"
    >
      {/* Background Images with Cross-fade Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={getOptimizedCloudinaryUrl(currentSlide.bgImage, { width: 1920, quality: 'auto', format: 'auto' })}
              srcSet={generateCloudinarySrcSet(currentSlide.bgImage, [640, 1024, 1920])}
              sizes="100vw"
              alt={currentSlide.title}
              loading="eager"
              // @ts-ignore
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Ambient Dark Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/60 to-neutral-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/30" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Eager preloading for the other carousel slides to make transitions instant */}
        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
          {HERO_SLIDES.map((slide, idx) => (
            idx !== safeIndex && (
              <img
                key={slide.id}
                src={getOptimizedCloudinaryUrl(slide.bgImage, { width: 1920, quality: 'auto', format: 'auto' })}
                alt=""
                loading="eager"
                referrerPolicy="no-referrer"
              />
            )
          ))}
        </div>
      </div>

      {/* Main Content Arena */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center pt-24 md:pt-28 pb-4 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 flex flex-col items-start text-left" id="hero-text-block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Dynamic Category/Tagline */}
                <div className="flex items-center space-x-3">
                  <span className="h-[2px] w-6 bg-gold-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400 font-bold">
                    {activeContent.tagline}
                  </span>
                </div>

                {/* Hero Title */}
                <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight uppercase">
                  {activeContent.title}
                </h1>

                {/* Hero Description */}
                <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed max-w-md font-normal">
                  {activeContent.shortDesc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                  <button
                    onClick={() => onExploreClick(currentSlide)}
                    id="btn-hero-explore"
                    className="bg-gold-500 hover:bg-gold-400 text-neutral-950 font-sans text-xs uppercase tracking-[0.15em] font-bold py-3.5 px-6 transition-all duration-300 rounded-lg active:scale-95 hover:shadow-lg hover:shadow-gold-500/20 text-center cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>
                      {currentSlide.type === 'destination' ? tHero.exploreDest : tHero.exploreAct}
                    </span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => onBookNowClick(currentSlide.bookingExperienceId)}
                    id="btn-hero-book"
                    className="border border-gold-500/60 hover:border-gold-400 hover:bg-gold-500/10 text-gold-300 font-sans text-xs uppercase tracking-[0.15em] font-bold py-3.5 px-6 transition-all duration-300 rounded-lg active:scale-95 text-center cursor-pointer"
                  >
                    {tHero.bookNow}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Interactive Slider Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-4" id="hero-slider-block">
            {/* Visual Header for Cards Block */}
            <div className="flex items-center justify-between pb-2 border-b border-gold-500/20 max-w-md ml-auto mr-0 w-full">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                <Compass size={12} className="text-gold-400" />
                {tHero.featuredHeader}
              </span>
              <span className="font-mono text-[10px] text-gold-400 font-semibold tracking-widest">
                {String(safeIndex + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
              </span>
            </div>

            {/* Floating Row of portrait cards stacked beautifully */}
            <div className="w-full max-w-md md:max-w-lg xl:max-w-xl lg:ml-auto overflow-hidden relative pb-4 pt-6" id="hero-slider-container">

              <div
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                style={{
                  transform: `translateX(${totalTranslate}px)`,
                  transition: isDragging ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  touchAction: 'none',
                }}
                className={`flex items-end justify-start gap-4 select-none ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
              >
                {HERO_SLIDES.map((slide, index) => {
                  const isActive = index === safeIndex;
                  const slideContent = getHeroSlideContent(slide, language);

                  return (
                    <button
                      key={slide.id}
                      onClick={(e) => {
                        if (hasDraggedRef.current) {
                          e.preventDefault();
                          return;
                        }
                        setActiveIndex(index);
                      }}
                      id={`hero-card-${slide.id}`}
                      className={`relative flex-shrink-0 w-36 md:w-48 h-[210px] md:h-[270px] rounded-xl overflow-hidden text-left transition-all duration-500 transform select-none cursor-pointer group ${
                        isActive
                          ? 'ring-2 ring-gold-400 scale-102 -translate-y-2 z-20 shadow-2xl shadow-black/80'
                          : 'opacity-50 hover:opacity-85 hover:-translate-y-1 z-10 scale-95 shadow-lg shadow-black/50'
                      }`}
                    >
                      {/* Card Image */}
                      <img
                        src={getOptimizedCloudinaryUrl(slide.cardImage, { width: 480, height: 640, quality: 'auto', format: 'auto' })}
                        alt={slideContent.title}
                        loading="eager"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Dark gradient vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      
                      {/* Category Badge top left */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          slide.type === 'destination' 
                            ? 'bg-gold-500/90 text-neutral-950' 
                            : 'bg-emerald-500/90 text-neutral-950'
                        }`}>
                          {slideContent.category}
                        </span>
                      </div>

                      {/* Card Content focused at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                        <p className="font-mono text-[9px] uppercase tracking-widest text-gold-300/90 font-bold mb-1">
                          {slideContent.displayTitle}
                        </p>
                        <h3 className="font-sans text-sm md:text-base text-white font-bold tracking-tight leading-snug line-clamp-2">
                          {slideContent.title}
                        </h3>
                        {isActive && (
                          <span className="font-mono text-[8px] text-gold-400 uppercase tracking-wider mt-1.5 flex items-center space-x-1 font-semibold">
                            <span>● {tHero.selectedBadge}</span>
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll/Chevron Pill */}
      <div className="relative z-10 w-full flex justify-center py-2 md:pb-32">
        <button
          onClick={handleScrollDown}
          id="btn-scroll-down"
          className="flex flex-col items-center group cursor-pointer"
          aria-label="Scroll to experiences"
        >
          <div className="w-6 h-10 border border-gold-400/40 rounded-full flex justify-center items-start p-1 hover:border-gold-400 transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronDown size={12} className="text-gold-400 group-hover:text-gold-300 transition-colors" />
            </motion.div>
          </div>
        </button>
      </div>

      {/* Floating Search Bar */}
      <div className="relative md:absolute left-0 right-0 bottom-0 md:translate-y-1/2 z-30 px-4 md:px-12 w-full flex justify-center pointer-events-none mt-2 md:mt-0 pb-6 md:pb-0">
        <div className="w-full max-w-7xl pointer-events-auto">
          <div className="bg-neutral-900/95 md:bg-neutral-900/80 backdrop-blur-md border border-gold-900/40 shadow-2xl rounded-2xl p-4 md:p-3 flex flex-col md:flex-row items-center gap-3 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">
          
          <div className="flex items-center gap-3 w-full md:w-auto md:flex-1 px-4 py-2 md:py-1 group cursor-pointer">
            <MapPin size={18} className="text-gold-500 shrink-0" />
            <div className="flex-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mb-1">
                {tHero.searchDestLabel}
              </div>
              <select 
                value={searchFilters.destination}
                onChange={(e) => handleSearchChange('destination', e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-neutral-200 focus:outline-none cursor-pointer appearance-none"
                aria-label={tHero.searchDestLabel}
              >
                <option value="" className="bg-neutral-900 text-neutral-400">{tHero.allLocations}</option>
                <option value="Bedugul" className="bg-neutral-900 text-neutral-200">Bedugul</option>
                <option value="Candidasa and Amed" className="bg-neutral-900 text-neutral-200">Candidasa & Amed</option>
                <option value="Jimbaran and Nusa Dua" className="bg-neutral-900 text-neutral-200">Jimbaran & Nusa Dua</option>
                <option value="Kuta and Legian" className="bg-neutral-900 text-neutral-200">Kuta & Legian</option>
                <option value="Nusa Penida and Nusa Lembongan" className="bg-neutral-900 text-neutral-200">Nusa Penida</option>
                <option value="Sanur" className="bg-neutral-900 text-neutral-200">Sanur</option>
                <option value="Seminyak and Canggu" className="bg-neutral-900 text-neutral-200">Seminyak & Canggu</option>
                <option value="Ubud" className="bg-neutral-900 text-neutral-200">Ubud</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-neutral-500 shrink-0 group-hover:text-gold-400 transition-colors" />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto md:flex-1 px-4 py-2 md:py-1 group cursor-pointer">
            <Activity size={18} className="text-gold-500 shrink-0" />
            <div className="flex-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mb-1">
                {tHero.searchActLabel}
              </div>
              <select 
                value={searchFilters.activity}
                onChange={(e) => handleSearchChange('activity', e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-neutral-200 focus:outline-none cursor-pointer appearance-none"
                aria-label={tHero.searchActLabel}
              >
                <option value="" className="bg-neutral-900 text-neutral-400">{tHero.allActivities}</option>
                <option value="Animal Encounter" className="bg-neutral-900 text-neutral-200">{tHero.actAnimal}</option>
                <option value="Beaches" className="bg-neutral-900 text-neutral-200">{tHero.actBeaches}</option>
                <option value="Cycling Trip" className="bg-neutral-900 text-neutral-200">{tHero.actCycling}</option>
                <option value="Rafting" className="bg-neutral-900 text-neutral-200">{tHero.actRafting}</option>
                <option value="Off-Road ATV" className="bg-neutral-900 text-neutral-200">Off-Road ATV</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-neutral-500 shrink-0 group-hover:text-gold-400 transition-colors" />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto md:flex-1 px-4 py-2 md:py-1 group cursor-pointer">
            <Clock size={18} className="text-gold-500 shrink-0" />
            <div className="flex-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mb-1">
                {tHero.searchDurLabel}
              </div>
              <select 
                value={searchFilters.duration}
                onChange={(e) => handleSearchChange('duration', e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-neutral-200 focus:outline-none cursor-pointer appearance-none"
                aria-label={tHero.searchDurLabel}
              >
                <option value="" className="bg-neutral-900 text-neutral-400">{tHero.allDurations}</option>
                <option value="Up to 5 Hours" className="bg-neutral-900 text-neutral-200">{tHero.dur5Hours}</option>
                <option value="1 Day" className="bg-neutral-900 text-neutral-200">{tHero.dur1Day}</option>
                <option value="2-3 Days" className="bg-neutral-900 text-neutral-200">{tHero.dur23Days}</option>
                <option value="4+ Days" className="bg-neutral-900 text-neutral-200">{tHero.dur4PlusDays}</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-neutral-500 shrink-0 group-hover:text-gold-400 transition-colors" />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto md:flex-1 px-4 py-2 md:py-1 group cursor-pointer">
            <Briefcase size={18} className="text-gold-500 shrink-0" />
            <div className="flex-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mb-1">
                {tHero.searchTypeLabel}
              </div>
              <select 
                value={searchFilters.tripType}
                onChange={(e) => handleSearchChange('tripType', e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-neutral-200 focus:outline-none cursor-pointer appearance-none"
                aria-label={tHero.searchTypeLabel}
              >
                <option value="" className="bg-neutral-900 text-neutral-400">{tHero.allTypes}</option>
                <option value="Full Day Tour" className="bg-neutral-900 text-neutral-200">{tHero.typeFullDay}</option>
                <option value="Multi Days" className="bg-neutral-900 text-neutral-200">{tHero.typeMultiDay}</option>
                <option value="Adventure" className="bg-neutral-900 text-neutral-200">{tHero.typeAdventure}</option>
                <option value="Culture" className="bg-neutral-900 text-neutral-200">{tHero.typeCulture}</option>
                <option value="Water Sports" className="bg-neutral-900 text-neutral-200">{tHero.typeWaterSports}</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-neutral-500 shrink-0 group-hover:text-gold-400 transition-colors" />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto md:flex-1 px-4 py-2 md:py-1 group cursor-pointer">
            <DollarSign size={18} className="text-gold-500 shrink-0" />
            <div className="flex-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mb-1">
                {tHero.searchPriceLabel}
              </div>
              <select 
                value={searchFilters.price}
                onChange={(e) => handleSearchChange('price', e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-neutral-200 focus:outline-none cursor-pointer appearance-none"
                aria-label={tHero.searchPriceLabel}
              >
                <option value="" className="bg-neutral-900 text-neutral-400">{tHero.allPrices}</option>
                <option value="Under $50" className="bg-neutral-900 text-neutral-200">{tHero.priceUnder50}</option>
                <option value="$50 - $100" className="bg-neutral-900 text-neutral-200">$50 - $100</option>
                <option value="$100 - $300" className="bg-neutral-900 text-neutral-200">$100 - $300</option>
                <option value="Over $300" className="bg-neutral-900 text-neutral-200">{tHero.priceOver300}</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-neutral-500 shrink-0 group-hover:text-gold-400 transition-colors" />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto md:flex-1 px-4 py-2 md:py-1 group cursor-pointer">
            <Compass size={18} className="text-gold-500 shrink-0" />
            <div className="flex-1">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mb-1">
                {tHero.searchDiffLabel}
              </div>
              <select 
                value={searchFilters.difficulty}
                onChange={(e) => handleSearchChange('difficulty', e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-neutral-200 focus:outline-none cursor-pointer appearance-none"
              >
                <option value="" className="bg-neutral-900 text-neutral-400">{tHero.allDiff}</option>
                <option value="Easy" className="bg-neutral-900 text-neutral-200">{tHero.diffEasy}</option>
                <option value="Moderate" className="bg-neutral-900 text-neutral-200">{tHero.diffModerate}</option>
                <option value="Hard" className="bg-neutral-900 text-neutral-200">{tHero.diffHard}</option>
                <option value="Extreme" className="bg-neutral-900 text-neutral-200">{tHero.diffExtreme}</option>
              </select>
            </div>
            <ChevronDown size={14} className="text-neutral-500 shrink-0 group-hover:text-gold-400 transition-colors" />
          </div>

          <div className="w-full md:w-auto px-4 md:px-2 py-3 md:py-0">
            <button
              onClick={handleSearchSubmit}
              className="w-full bg-gradient-to-r from-gold-600 to-orange-500 hover:from-gold-500 hover:to-orange-400 text-neutral-950 font-bold py-3 md:py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search size={18} strokeWidth={2.5} />
              <span className="uppercase tracking-wider">{tHero.searchBtn}</span>
            </button>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}

