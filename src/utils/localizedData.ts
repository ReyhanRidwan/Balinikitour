import { Language } from '../i18n/translations';
import { Experience, Vehicle, Review } from '../types';

/**
 * Localized translation dictionary for dynamic entities across the website.
 * This guarantees 100% fluent English (and Indonesian original) for all tours,
 * multi-day packages, vehicles, destinations, and activities.
 */

export interface LocalizedContent {
  title?: string;
  tagline?: string;
  shortDesc?: string;
  longDesc?: string;
  description?: string;
  location?: string;
  difficulty?: string;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  itinerary?: Array<{ time: string; title: string; desc?: string; description?: string }>;
  features?: string[];
}

export const TOUR_TRANSLATIONS: Record<string, Partial<Record<Language, LocalizedContent>>> = {
  // 1. gate-of-heaven-water-palace-waterfall
  'gate-of-heaven-water-palace-waterfall': {
    en: {
      title: 'Gate of Heaven, Water Palace & Hidden Gems Waterfall',
      tagline: 'Lempuyang Temple • Tirta Gangga • Tukad Cepung Waterfall • Coffee Plantation',
      shortDesc: 'Iconic East Bali day tour visiting the Gate of Heaven at Lempuyang Temple, Tirta Gangga royal water palace, and Tukad Cepung waterfall.',
      longDesc: 'Experience the magic of East Bali with a complete private journey. Capture the world-renowned photograph at the Gate of Heaven with Mount Agung as your backdrop, wander among royal koi ponds at Tirta Gangga, trek into the sunlit cave of Tukad Cepung Waterfall, and savor authentic Balinese coffee.',
      difficulty: 'Easy / Moderate',
      highlights: [
        'Iconic Gate of Heaven photo spot at Lempuyang Temple overlooking Mount Agung',
        'Stroll through the royal lotus ponds and stepping stones at Tirta Gangga Water Palace',
        'Trek into the mystical cave of Tukad Cepung Waterfall with sunbeam light rays',
        'Complimentary tasting of exotic Balinese coffees and herbal teas'
      ],
      inclusions: [
        'Private air-conditioned vehicle with fluent English-speaking driver',
        'All entrance tickets and shuttle fees at Lempuyang Temple',
        'Tirta Gangga and Tukad Cepung entrance tickets',
        'Bottled mineral water throughout the day',
        'Fuel, parking fees, and sarong for temple visits'
      ],
      exclusions: [
        'Personal lunch and personal expenses',
        'Professional photography tips / local photo tickets',
        'Gratuities for driver/guide'
      ],
      itinerary: [
        { time: '05:00 AM', title: 'Hotel Pick-Up', desc: 'Pick-up from your hotel lobby in private AC comfort.' },
        { time: '07:30 AM', title: 'Lempuyang Gate of Heaven', desc: 'Arrive at Lempuyang Temple and take iconic photographs with Mount Agung backdrop.' },
        { time: '10:30 AM', title: 'Tirta Gangga Water Palace', desc: 'Explore historic royal pools, feed giant koi fish, and admire stone carvings.' },
        { time: '12:30 PM', title: 'Lunch Break & Coffee Tasting', desc: 'Lunch at a scenic restaurant and taste authentic Balinese coffee varieties.' },
        { time: '02:30 PM', title: 'Tukad Cepung Waterfall', desc: 'Walk through lush ravines into a unique sunbeam cave waterfall.' },
        { time: '04:30 PM', title: 'Return Journey', desc: 'Comfortable private transfer back to your hotel.' }
      ]
    }
  },

  // 2. amazing-waterfall-monkey-forest
  'amazing-waterfall-monkey-forest': {
    en: {
      title: 'Amazing Waterfall & Ubud Sacred Monkey Forest',
      tagline: 'Tegenungan Waterfall • Sacred Monkey Forest Sanctuary • Ubud Art Market • Rice Terraces',
      shortDesc: 'Full day Ubud exploration featuring Tegenungan Waterfall, Sacred Monkey Forest, art handicraft villages, and royal palaces.',
      longDesc: 'Immerse yourself in the cultural heart of Bali. Encounter playful macaques inside the ancient mossy groves of the Sacred Monkey Forest, swim or relax by Tegenungan Waterfall, visit traditional artisan silversmith and woodcarving villages, and discover Ubud Royal Palace.',
      difficulty: 'Easy',
      highlights: [
        'Encounter playful long-tailed macaques in Ubud Sacred Monkey Forest Sanctuary',
        'Admire the roaring cascades of Tegenungan Waterfall surrounded by dense jungle',
        'Explore traditional art villages (Celuk silversmiths & Mas woodcarvers)',
        'Visit Ubud Royal Palace (Puri Saren) and vibrant local handicraft markets'
      ],
      inclusions: [
        'Private AC transportation and friendly English-speaking driver',
        'Monkey Forest entrance ticket and Tegenungan Waterfall admission',
        'Bottled mineral water and cool vehicle environment',
        'Fuel, toll, and parking fees included'
      ],
      exclusions: [
        'Personal meals and souvenirs',
        'Optional jungle swings or photo props',
        'Gratuities for driver'
      ],
      itinerary: [
        { time: '08:30 AM', title: 'Hotel Pick-Up', desc: 'Pick-up from hotel lobby in south Bali or Ubud.' },
        { time: '09:30 AM', title: 'Tegenungan Waterfall', desc: 'Witness the majestic cascades and lush jungle river gorge.' },
        { time: '11:30 AM', title: 'Art & Craft Villages', desc: 'Visit Celuk silver workshops and traditional Balinese craft studios.' },
        { time: '01:00 PM', title: 'Ubud Sacred Monkey Forest', desc: 'Walk under ancient banyan trees among playful macaque troops.' },
        { time: '03:00 PM', title: 'Ubud Palace & Traditional Market', desc: 'Stroll around royal heritage architecture and shop handcrafted souvenirs.' },
        { time: '05:00 PM', title: 'Return to Hotel', desc: 'Private transfer back to your accommodation.' }
      ]
    }
  },

  // 3. adventure-bali-swing-nungnung-ulundanu-lekeleke
  'adventure-bali-swing-nungnung-ulundanu-lekeleke': {
    en: {
      title: 'Bali Swing, Nungnung Waterfall, Ulun Danu & Leke Leke',
      tagline: 'Iconic Bali Swing • 50m Nungnung Waterfall • Lake Beratan Floating Temple • Leke Leke Hidden Waterfall',
      shortDesc: 'A thrilling nature & adventure day: soar on jungle swings, trek to 50m Nungnung waterfall, and visit iconic Lake Beratan temple.',
      longDesc: 'Combine high-flying thrill with breathtaking nature. Soar over lush valleys on famous Bali swings, descend into the jungle gorge of towering Nungnung Waterfall, visit the iconic Ulun Danu Beratan floating pagoda on Lake Beratan, and finish with a peaceful trek to secluded Leke Leke Waterfall.',
      difficulty: 'Medium',
      highlights: [
        'Soar over lush palm ravines and rice fields on iconic Bali Swings',
        'Trek down to 50-meter roaring Nungnung Waterfall in pristine jungle',
        'Visit scenic lakeside Ulun Danu Beratan Temple in misty Bedugul',
        'Explore the tranquil natural pool of Leke Leke Waterfall'
      ],
      inclusions: [
        'Private vehicle with air conditioning and English-speaking chauffeur',
        'Mineral water throughout the tour',
        'Fuel, parking fees, and local taxes',
        'Optional All-Inclusive package includes all attraction tickets and swing pass'
      ],
      exclusions: [
        'Professional photographer fees',
        'Personal meals and tips'
      ],
      itinerary: [
        { time: '08:00 AM', title: 'Hotel Pick-Up', desc: 'Private pick-up from your resort lobby.' },
        { time: '09:00 AM', title: 'Bali Swing Experience', desc: 'Enjoy exhilarating jungle swings and bird nest photo booths.' },
        { time: '11:00 AM', title: 'Nungnung Waterfall Trek', desc: 'Descend scenic stairs to one of Bali’s most powerful waterfalls.' },
        { time: '01:30 PM', title: 'Ulun Danu Beratan Temple', desc: 'Visit the misty lake temple pagoda and enjoy lakeside dining.' },
        { time: '03:30 PM', title: 'Leke Leke Waterfall', desc: 'Hike through bamboo bridges to a serene emerald jungle cascade.' },
        { time: '05:30 PM', title: 'Return Transfer', desc: 'Comfortable ride back to your hotel.' }
      ]
    }
  },

  // 4. discover-waterfall-rice-terrace-monkey-forest
  'discover-waterfall-rice-terrace-monkey-forest': {
    en: {
      title: 'Discover Waterfall, Tegalalang Rice Terrace & Monkey Forest',
      tagline: 'Ubud Highlights • Tegalalang UNESCO Terraces • Sacred Monkey Forest • Kanto Lampo / Tibumana Waterfall',
      shortDesc: 'The ultimate Ubud essentials: Tegalalang stepped rice fields, playful monkeys, and scenic tropical waterfalls.',
      longDesc: 'Discover the quintessential postcard landscapes of Ubud. Walk the UNESCO-heritage emerald terraces of Tegalalang, encounter sacred long-tailed monkeys in their ancient sanctuary forest, and cool off at a scenic tropical waterfall.',
      difficulty: 'Easy / Moderate',
      highlights: [
        'Walk through the world-famous UNESCO terraced rice paddies of Tegalalang',
        'Interact respectfully with playful monkeys at Ubud Monkey Forest',
        'Relax and swim at refreshing jungle waterfalls',
        'Enjoy scenic hillside cafe lunch overlooking tropical valleys'
      ],
      inclusions: [
        'Private AC vehicle and English-speaking local driver',
        'Bottled drinking water',
        'Fuel and vehicle parking'
      ],
      exclusions: [
        'Attraction entrance tickets (or choose All-Inclusive option)',
        'Personal lunch and gratuities'
      ]
    }
  },

  // 5. explore-iconic-culture-heritage-twin-lake
  'explore-iconic-culture-heritage-twin-lake': {
    en: {
      title: 'Explore Iconic Culture Heritage & Twin Lakes Wanagiri',
      tagline: 'Ulun Danu Beratan • Handara Gate • Wanagiri Twin Lakes • Leke Leke Waterfall • Tanah Lot Sunset',
      shortDesc: 'A scenic highland journey across Bedugul with Handara Gate, Wanagiri viewpoints, waterfalls, and Tanah Lot sea sunset.',
      longDesc: 'Journey through Bali’s cooler northern highlands. Photograph the majestic stone architecture of Handara Gate, gaze over Twin Lakes Buyan and Tamblingan from Wanagiri Hills, visit Ulun Danu Beratan Temple, hike to Leke Leke Waterfall, and finish with a dramatic sunset at Tanah Lot offshore sea temple.',
      difficulty: 'Easy / Moderate',
      highlights: [
        'Photograph the grand Handara Gate surrounded by green tropical hills',
        'Breathtaking panorama over Twin Lakes Buyan & Tamblingan from Wanagiri',
        'Visit Lake Beratan’s floating pagoda temple in fresh mountain air',
        'Sunset spectacle over the ocean at holy Tanah Lot Temple'
      ],
      inclusions: [
        'Private AC transport with licensed English-speaking driver',
        'Bottled mineral water',
        'Fuel, tolls, and parking fees'
      ],
      exclusions: [
        'Personal expenses and food',
        'Driver tips'
      ]
    }
  },

  // 6. nusa-penida-west-trip
  'nusa-penida-west-trip': {
    en: {
      title: 'Nusa Penida Island – West Coast Day Tour',
      tagline: 'Kelingking T-Rex Cliff • Broken Beach • Angel’s Billabong • Crystal Bay • Fast Boat Return',
      shortDesc: 'Awe-inspiring West Nusa Penida day trip featuring Kelingking T-Rex cliff, Angel’s Billabong infinity pool, and Crystal Bay.',
      longDesc: 'Cross the azure Badung Strait by high-speed boat to explore the raw beauty of Nusa Penida’s west coast. Marvel at the dramatic T-Rex shaped limestone cliff at Kelingking Beach, gaze into the circular ocean arch of Broken Beach, view the natural infinity pool of Angel’s Billabong, and relax on Crystal Bay beach.',
      difficulty: 'Moderate',
      highlights: [
        'Stand atop the breathtaking T-Rex headland at Kelingking Beach',
        'Admire the dramatic natural ocean arch at Broken Beach (Pasih Uug)',
        'Natural emerald tidal pool at Angel’s Billabong',
        'Relax and swim in clear turquoise waters at Crystal Bay',
        'Round-trip speed boat transfers from Sanur Harbour'
      ],
      inclusions: [
        'Round-trip fast boat tickets (Sanur – Nusa Penida – Sanur)',
        'Private AC island transport with experienced local driver',
        'All island entrance and tourist retribution fees',
        'Delicious local lunch and mineral water',
        'Hotel pick-up & drop-off in Bali mainland'
      ],
      exclusions: [
        'Optional snorkeling gear or manta boat upgrades',
        'Personal shopping and tips'
      ]
    }
  },

  // 7. nusa-penida-east-trip
  'nusa-penida-east-trip': {
    en: {
      title: 'Nusa Penida Island – East Coast Adventure',
      tagline: 'Diamond Beach • Atuh Beach • Molenteng Tree House • Thousand Islands Viewpoint • Fast Boat Return',
      shortDesc: 'Pristine East Nusa Penida day tour featuring Diamond Beach, Atuh cliffside cove, and the iconic Molenteng Treehouse.',
      longDesc: 'Discover the dramatically sculpted eastern cliffs of Nusa Penida. Walk down the carved stone stairway of glittering Diamond Beach, view the turquoise cove of Atuh Beach, and snap bucket-list photos at the Raja Lima Thousand Islands viewpoint and Molenteng Treehouse.',
      difficulty: 'Moderate',
      highlights: [
        'Descend the cliffside stone staircase to stunning Diamond Beach',
        'Photo session at the famous Molenteng Treehouse overlooking sea pinnacles',
        'Spectacular panoramic vistas from Thousand Islands (Raja Lima)',
        'Relax at peaceful Atuh Beach sheltered by high limestone headlands'
      ],
      inclusions: [
        'Round-trip speed boat tickets (Sanur – Nusa Penida – Sanur)',
        'Private island car with English-speaking driver',
        'All entrance tickets and village retribution fees',
        'Indonesian lunch and mineral water',
        'Pick-up and drop-off in South Bali / Ubud'
      ],
      exclusions: [
        'Diamond Beach swing or local photo prop fees',
        'Personal drinks and gratuities'
      ]
    }
  },

  // 8. water-sport-beaches-uluwatu-dinner
  'water-sport-beaches-uluwatu-dinner': {
    en: {
      title: 'Water Sports, South Beaches, Uluwatu Sunset & Seafood Dinner',
      tagline: 'Tanjung Benoa Watersports • Padang Padang Beach • Uluwatu Cliff Temple • Jimbaran Seafood Dinner',
      shortDesc: 'The quintessential South Bali day: thrilling water sports, surfing beach, cliffside Uluwatu temple sunset, and candlelight seafood dinner.',
      longDesc: 'Experience the ultimate coastal highlights of South Bali. Start with exhilarating water activities at Tanjung Benoa (including complimentary banana boat ride), relax at the secluded cove of Padang Padang Beach, visit Uluwatu Temple perched 70 meters above crashing waves, and conclude with a romantic grilled seafood feast on Jimbaran Beach.',
      difficulty: 'Easy',
      highlights: [
        'Exciting water sports activities at Tanjung Benoa (Banana Boat included)',
        'Sunbathe or swim at famous Padang Padang Beach',
        'Sunset spectacle at ancient Uluwatu Temple on towering sea cliffs',
        'Candlelight fresh grilled seafood dinner right on Jimbaran Beach sand'
      ],
      inclusions: [
        'Private air-conditioned vehicle with driver',
        'Complimentary Banana Boat ride ticket',
        'Mineral water, fuel, and parking fees',
        'Temple sarong rental included'
      ],
      exclusions: [
        'Additional water sport packages (parasailing, jet ski, seawalker)',
        'Jimbaran seafood dinner costs (unless choosing all-inclusive package)',
        'Uluwatu Kecak Fire Dance ticket (optional add-on)'
      ]
    }
  },

  // 9. telaga-waja-rafting
  'telaga-waja-rafting': {
    en: {
      title: 'Telaga Waja River 16 KM White Water Rafting',
      tagline: '16 KM Continuous Rapids • Grade 3-4 Whitewater • 4-Meter Dam Drop • Mount Agung Valley • Buffet Lunch',
      shortDesc: 'Bali’s longest and most exhilarating white water rafting route (16 km / 2.5 hours) with crystal-clear spring water and buffet lunch.',
      longDesc: 'Conquer Bali’s longest white water rafting expedition on the pristine Telaga Waja River. Flowing directly from Mount Agung’s natural springs, navigate Grade 3 to 4 rapids, glide under tropical rainforest canopies and cascading waterfalls, and conquer the famous 4-meter Bajing dam drop with certified international safety gear.',
      difficulty: 'Medium to Challenging',
      highlights: [
        'Conquer Bali’s longest 16-kilometer white water rafting course (approx. 2.5 hours)',
        'Pure, crystal-clear natural mountain spring water with Grade 3-4 rapids',
        'Heart-pounding 4-meter Bajing dam plunge guided by licensed river masters',
        'Indonesian buffet lunch served at scenic riverside restaurant overlooking rice terraces',
        'Hot showers, clean changing rooms, locker storage, and professional gear'
      ],
      inclusions: [
        'Private hotel pick-up and drop-off in air-conditioned transport',
        'Professional river raft master and safety briefing',
        'Complete international safety equipment (CE-approved helmet, life vest, paddle)',
        'Indonesian buffet lunch, mineral water, tea, and coffee',
        'Shower facilities, towel, soap, and waterproof safety dry-bag for valuables'
      ],
      exclusions: [
        'Professional action photos and video documentation (available on-site)',
        'Personal drinks and bar purchases',
        'Gratuities for river guide and driver'
      ]
    }
  },

  // 10. surya-bintang-rafting
  'surya-bintang-rafting': {
    en: {
      title: 'Surya Bintang Ayung River Ubud Rafting & Cliff Carvings',
      tagline: '12 KM Ayung River • Grade 2-3 Rapids • Ancient Ramayana Stone Carvings • Hidden Waterfall • Buffet Lunch',
      shortDesc: 'Scenic Ayung River rafting in Ubud featuring dramatic rock carvings, rainforest canopy, hidden waterfalls, and buffet lunch.',
      longDesc: 'Experience the magic of the Ayung River with Surya Bintang Adventures. Perfect for families, beginners, and adventurers alike, this 12-kilometer journey weaves through lush Ubud river ravines, ancient Ramayana stone cliff carvings, and tropical jungle cascades.',
      difficulty: 'Easy to Moderate (Family Friendly)',
      highlights: [
        '12 KM scenic rafting route through pristine Ubud rainforest gorge',
        'Admire hundreds of meters of intricate stone cliff carvings depicting the Ramayana epic',
        'Stop at natural hidden waterfalls for swimming and photography',
        'Full buffet lunch and clean shower facilities'
      ],
      inclusions: [
        'Private AC hotel return transfers',
        'Professional English-speaking river guide',
        'Complete rafting safety gear (helmet, life vest, paddle)',
        'Buffet lunch and drinking water',
        'Hot shower facilities and towel'
      ],
      exclusions: [
        'Personal photo CD / USB package',
        'Souvenirs and personal expenses'
      ]
    }
  },

  // 11. bali-dewata-rafting
  'bali-dewata-rafting': {
    en: {
      title: 'Bali Dewata Ayung River Rapids & Hidden Waterfall',
      tagline: '10 KM Ayung River Rapids • Rainforest Valley • Waterfalls • Family Friendly • Buffet Lunch',
      shortDesc: 'Exciting 10 km Ayung River white water rafting in Ubud with lush jungle vistas, refreshing waterfall stops, and lunch.',
      longDesc: 'Glide through the tranquil wilderness of Ubud on a 10 km rafting tour with Bali Dewata. Enjoy mild to moderate rapids, admire towering bamboo forests, leap into refreshing waterfall pools, and finish with a hearty buffet feast.',
      difficulty: 'Easy to Moderate',
      highlights: [
        '10 km enjoyable whitewater rafting suitable for all ages (7–65 years)',
        'Pristine nature scenery of Ubud’s untouched river valley',
        'Licensed guides with high safety standards and modern equipment',
        'Includes delicious buffet lunch and hot showers'
      ],
      inclusions: [
        'Return hotel transport in private AC car',
        'Certified river guide and safety equipment',
        'Buffet lunch and refreshments',
        'Shower, changing room, and safety equipment'
      ],
      exclusions: [
        'Photo documentation purchases',
        'Personal souvenirs'
      ]
    }
  },

  // 12. adventure-bali-sunrise-trekking-mount-batur
  'adventure-bali-sunrise-trekking-mount-batur': {
    en: {
      title: 'Mount Batur Sunrise Summit Trekking',
      tagline: 'Mount Batur Summit (1,717m) • Active Volcano Crater • Breakfast Above Clouds • Coffee Plantation',
      shortDesc: 'Early morning hike to Mount Batur summit (1,717m) to witness an awe-inspiring sunrise above the clouds, volcanic breakfast & coffee plantation.',
      longDesc: 'Embark on a bucket-list night trek up Mount Batur (1,717m above sea level). Guided by local trekking experts, reach the volcanic summit just before dawn to witness a breathtaking golden sunrise over Lake Batur, Mount Abang, and distant Mount Rinjani. Enjoy breakfast cooked by natural volcanic steam and explore active crater rims.',
      difficulty: 'Moderate to Challenging',
      highlights: [
        'Pre-dawn guided ascent to the 1,717-meter summit of active Mount Batur volcano',
        'Spectacular 360-degree golden sunrise above an ocean of clouds',
        'Volcanic steam-cooked breakfast (banana sandwiches, hard-boiled eggs, hot tea/coffee)',
        'Explore the active main crater rim and descent via scenic alternate ridge',
        'Complimentary visit to a traditional Balinese coffee plantation'
      ],
      inclusions: [
        'Private AC hotel return transfers',
        'Professional English-speaking local mountain trekking guide',
        'Mount Batur national park entrance ticket and government retribution',
        'Summit breakfast and hot coffee/tea',
        'Flashlights / headlamps and trekking poles',
        'Bottled drinking water'
      ],
      exclusions: [
        'Personal warm clothing or gloves',
        'Tips for mountain guide and driver'
      ]
    }
  },

  // 13. adventure-batur-sunrise-hot-spring-lunch
  'adventure-batur-sunrise-hot-spring-lunch': {
    en: {
      title: 'Mount Batur Sunrise Trekking & Natural Hot Springs with Lunch',
      tagline: 'Mount Batur Sunrise Summit • Natural Volcanic Hot Spring • Buffet Lunch • Kintamani',
      shortDesc: 'Mount Batur sunrise summit trek followed by soothing volcanic natural hot springs on the shores of Lake Batur and lakeside lunch.',
      longDesc: 'The ultimate Mount Batur package: hike to the 1,717m summit for a magnificent sunrise and breakfast, then soothe tired muscles by soaking in natural volcanic thermal hot springs right beside Lake Batur, followed by a delicious buffet lunch overlooking Mount Batur caldera.',
      difficulty: 'Moderate',
      highlights: [
        'Summit sunrise hike of Mount Batur with volcanic steam breakfast',
        'Relax and soak in natural mineral thermal pools at Batur Natural Hot Springs',
        'Panoramic view of Lake Batur and surrounding volcanic peaks while bathing',
        'Buffet lunch served at a scenic lakeside restaurant'
      ],
      inclusions: [
        'Private hotel transfer in AC car',
        'Licensed local trekking guide',
        'Summit breakfast, tea/coffee, and water',
        'Trekking equipment (torches & walking poles)',
        'Admission to Batur Natural Hot Springs with towel and locker',
        'Buffet lunch at restaurant'
      ],
      exclusions: [
        'Personal drinks and snacks',
        'Tips'
      ]
    }
  },

  // 14. mount-agung-adventure-sunrise-trekking
  'mount-agung-adventure-sunrise-trekking': {
    en: {
      title: 'Mount Agung Sunrise Trekking Expedition',
      tagline: 'Bali Highest Peak (3,033m) • Sacred Volcano Summit • 2 Routes (Pasar Agung & Besakih) • Buffet Lunch',
      shortDesc: 'Conquer Bali’s highest and most sacred volcanic peak (3,033m) with choice of 2 trekking routes (Pasar Agung / Besakih) and sunrise view.',
      longDesc: 'Conquer the pinnacle of the Island of Gods. Rising 3,033 meters above the clouds, Mount Agung offers Bali’s most challenging and spiritually revered trekking expedition. Choose between the Pasar Agung route (6–8 hours return) or the ultimate Besakih route (12–14 hours return to the absolute highest summit rim).',
      difficulty: 'Challenging to Extreme',
      highlights: [
        'Conquer Bali’s highest mountain summit at 3,033 meters above sea level',
        'Choice of 2 routes: Short Route via Pasar Agung or Full Summit via Besakih Temple',
        'Watch the sunrise illuminate the entire island of Bali and neighboring Lombok',
        'Guided by veteran mountaineering guides with extensive summit safety records'
      ],
      inclusions: [
        'Private hotel transfers',
        'Experienced certified Mount Agung trekking guides (1 guide per 2–3 guests)',
        'Conservation fees and climbing permits',
        'Summit snacks, hot coffee, and mineral water',
        'Flashlights, headlamps, and trekking poles',
        'Celebratory post-trek buffet lunch'
      ],
      exclusions: [
        'Personal warm alpine clothing and hiking boots'
      ]
    }
  },

  // 15. bali-cycling-downhill-mountain-to-village
  'bali-cycling-downhill-mountain-to-village': {
    en: {
      title: 'Bali Countryside Downhill Cycling: Mountain to Village',
      tagline: 'Kintamani Highland to Ubud • Bamboo Forest • Authentic Villages & Rice Fields • Downhill MTB Tour',
      shortDesc: 'Leisurely downhill mountain bike tour from cool Kintamani highlands through bamboo groves, traditional villages & emerald rice fields.',
      longDesc: 'Experience authentic rural Bali at an easy, relaxing pace. Starting with breakfast overlooking Mount Batur caldera, embark on a mostly downhill bike ride along tranquil backroads, lush bamboo forests, sacred family compounds, and cascading rice terraces.',
      difficulty: 'Easy to Moderate',
      highlights: [
        'Gentle downhill cycling through cooler mountain air and quiet countryside trails',
        'Ride through giant bamboo groves and visit an authentic Balinese family compound',
        'Includes breakfast overlooking Mount Batur & fresh garden lunch in Ubud',
        'Equipped with modern mountain bikes, helmets, support vehicle, and guide'
      ],
      inclusions: [
        'Private AC hotel pick-up and drop-off',
        'Mountain bikes, safety helmets, and safety escort vehicle',
        'Professional English-speaking cycling guides',
        'Breakfast in Kintamani & buffet lunch in Ubud',
        'Mineral water and fresh seasonal fruits'
      ],
      exclusions: [
        'Personal purchases and gratuities'
      ]
    }
  },

  // 16. bali-nature-wonder-experience
  'bali-nature-wonder-experience': {
    en: {
      title: 'Bali Nature Wonder: Sekumpul, Fiji Waterfall & Waterslide',
      tagline: 'Sekumpul & Fiji Waterfall • Lemukih Waterslide • Cliff Jumping • Rice Terraces Trekking',
      shortDesc: 'North Bali nature paradise: Sekumpul & Fiji majestic waterfalls, Lemukih natural water slide, 7-15m cliff jumping & rice terrace trek.',
      longDesc: 'Venture into Bali’s untamed northern wilderness. Trek through lush tropical valleys to behold the iconic twin cascades of Sekumpul Waterfall and triple streams of Fiji Waterfall, slide down smooth natural rock slides at Lemukih, and leap into emerald pools with cliff jumps ranging from 7 to 15 meters.',
      difficulty: 'Moderate to Active',
      highlights: [
        'Trek to Sekumpul & Fiji Waterfalls — renowned as Bali’s most grand natural cascades',
        'Slide down the famous Lemukih natural river rock waterslide',
        'Optional cliff jumping into deep natural river pools (7m – 15m)',
        'Guided hike through untouched hillside rice paddies and spice plantations'
      ],
      inclusions: [
        'Private AC vehicle and English-speaking driver',
        'Licensed local trekking guide and waterfall entry tickets',
        'Indonesian lunch pack and mineral water',
        'Safety life jackets for waterslide and cliff jumping',
        'Fuel and parking fees'
      ],
      exclusions: [
        'Photo purchases and personal tips'
      ]
    }
  }
};

export const MULTIDAY_TRANSLATIONS: Record<string, Partial<Record<Language, LocalizedContent>>> = {
  'bali-culture-heritage-3-days': {
    en: {
      title: 'Bali Culture Heritage & Natural Beauty (3 Days / 2 Nights)',
      tagline: 'Ngurah Rai Airport • Free & Easy • Culture & Beach Highlights',
      description: 'Embrace the cultural heritage and natural beauty of Bali through its remarkable thousand temples, Sacred Monkey Forest Sanctuary, artisan craft villages, Kintamani highland viewpoint, and exhilarating Tanjung Benoa water sports.',
      highlights: [
        'Embrace the rich cultural heritage and natural scenery of Bali',
        'Visit sacred temples and the enchanting Ubud Monkey Forest',
        'Witness traditional Barong & Keris dance performances in art villages',
        'Breathtaking Mount Batur & Kintamani highland views',
        'Enjoy a complimentary Banana Boat ride at Tanjung Benoa beach'
      ],
      itinerary: [
        { time: 'Day 1', title: 'Airport Arrival & Hotel Transfer', desc: 'Meet & greet at Ngurah Rai International Airport with flower garland welcome. Private transfer to your hotel for check-in and leisure.' },
        { time: 'Day 2', title: 'Kintamani Highland, Tirta Empul & Ubud', desc: '08:00 AM Hotel Pick-up • Barong Dance performance • Balinese Art Village • Holy Spring Tirta Empul Temple • Kintamani Mount Batur Viewpoint • Tegalalang Rice Terrace • Ubud Sacred Monkey Forest.' },
        { time: 'Day 3', title: 'Water Sports, South Beaches & Airport Departure', desc: '08:00 AM Pick-up • Water Sports at Tanjung Benoa (Complimentary Banana Boat) • Padang Padang Beach • Uluwatu Temple • Transfer to airport for flight departure.' }
      ]
    }
  },
  'bali-spiritual-landscapes-4-days': {
    en: {
      title: 'Bali Spiritual Landscapes: Temples, Nature & Wonders (4 Days / 3 Nights)',
      tagline: 'Ngurah Rai Airport • Temples & Waterfalls • Scenic Highlands',
      description: 'Discover the captivating harmony of nature and spirituality in Bali. Visit holy spring temples, misty highland lakes at Ulun Danu Beratan, lush Tegalalang terraces, secluded Leke Leke waterfall, and cliffside Uluwatu sunset.',
      highlights: [
        'Discover the captivating harmony between nature and spirituality in Bali',
        'Visit holy temples including Tirta Empul and Ulun Danu Lake Temple',
        'Experience peace in the Sacred Monkey Forest and Wanagiri Hills',
        'Trek to the secluded emerald cascade of Leke Leke Waterfall',
        'Capture postcard photos at iconic Handara Gate and Tanah Lot'
      ],
      itinerary: [
        { time: 'Day 1', title: 'Bali Arrival & Hotel Check-in', desc: 'Arrival at Ngurah Rai International Airport. Warm welcome by our team and transfer to hotel.' },
        { time: 'Day 2', title: 'Kintamani Volcano, Tirta Empul & Tegalalang', desc: 'Barong dance show, craft villages, holy spring water blessing, Kintamani highland lunch, Tegalalang rice paddies, and Ubud Monkey Forest.' },
        { time: 'Day 3', title: 'Cultural Heritage & Hidden Waterfalls', desc: 'Ulun Danu Beratan Lake Temple, Handara Gate photo stop, Wanagiri Hidden Hills, Leke Leke Waterfall trek, and Tanah Lot sea temple sunset.' },
        { time: 'Day 4', title: 'Water Sports, Beaches & Airport Departure', desc: 'Tanjung Benoa water sports (Banana boat ride), Padang Padang Beach, Uluwatu cliff temple, and airport transfer.' }
      ]
    }
  },
  'balis-adventurous-escapes-6-days': {
    en: {
      title: 'Bali Adventurous Escapes & Island Discovery (6 Days / 5 Nights)',
      tagline: 'Full Island Tour • Nusa Penida • Rafting • Volcano Trekking • Culture',
      description: 'The ultimate comprehensive 6-day Bali itinerary. Combines Nusa Penida island exploration, Ayung River white water rafting, Mount Batur sunrise, Ubud cultural heart, scenic waterfalls, and south coast beaches.',
      highlights: [
        'Comprehensive 6-day private tour covering all regions of Bali',
        'Nusa Penida West Island day trip (Kelingking T-Rex, Broken Beach, Angel’s Billabong)',
        'White water rafting expedition on the Ayung River in Ubud',
        'Mount Batur sunrise summit hike or jeep sunrise tour',
        'Romantic Jimbaran Bay sunset seafood dinner'
      ],
      itinerary: [
        { time: 'Day 1', title: 'Airport Arrival & Hotel Check-in', desc: 'Warm VIP welcome at Ngurah Rai Airport and comfortable transfer to your hotel.' },
        { time: 'Day 2', title: 'Ubud Culture, Monkey Forest & Waterfalls', desc: 'Tegenungan Waterfall, Ubud Monkey Forest, artisan villages, and Tegalalang terraces.' },
        { time: 'Day 3', title: 'Nusa Penida West Coast Island Adventure', desc: 'Speedboat to Nusa Penida, Kelingking Beach, Broken Beach, Angel’s Billabong, and Crystal Bay.' },
        { time: 'Day 4', title: 'Ayung River White Water Rafting & Coffee Plantation', desc: 'Exhilarating river rafting, riverside buffet lunch, and Luwak coffee plantation tour.' },
        { time: 'Day 5', title: 'Bedugul Highland, Handara Gate & Tanah Lot Sunset', desc: 'Ulun Danu Beratan Temple, Handara Gate, Wanagiri Hills, and Tanah Lot sunset.' },
        { time: 'Day 6', title: 'South Bali Beaches, Uluwatu & Airport Departure', desc: 'Water sports at Tanjung Benoa, Padang Padang Beach, Uluwatu Temple, and departure transfer.' }
      ]
    }
  },
  'royal-family-palace-bedugul-tanah-lot': {
    en: {
      title: 'Royal Family Palace, Bedugul Lake Temple & Tanah Lot',
      shortDesc: 'Mengwi Kingdom Palace, Bedugul Lake Temple and Tanah Lot day tour with private air-conditioned vehicle.',
      difficulty: 'Easy',
      highlights: [
        'Sightseeing by Air-Conditioned Private Transportation with English-Speaking Driver',
        'Admire rich cultural heritage combined with spectacular nature panoramas',
        'Enjoy refreshing mountain charm and crisp, fresh atmosphere',
        'Get iconic Instagramable photos at Handara Gate and sunset at Tanah Lot'
      ]
    }
  },
  'explore-balis-majestic-landscapes-5-days': {
    en: {
      title: 'Explore Bali’s Majestic Landscapes and Cultural Heritage (5 Days / 4 Nights)',
      shortDesc: 'Embark on an unforgettable journey through Bali’s stunning landscapes, downhill mountain cycling, and a venture to the magical Gate of Heaven.',
      difficulty: 'Medium',
      highlights: [
        'Unforgettable journey through Bali\'s most stunning mountain and coastal landscapes',
        'A venture to the magical "Gate of Heaven" Lempuyang Temple',
        'Experience the authentic Balinese lifestyle and traditional farming villages',
        'Explore the beautiful hidden gems of lush tropical waterfalls'
      ]
    }
  },
  'paragliding': {
    en: {
      title: 'Flying on Sky with Tandem Paragliding',
      shortDesc: 'Fly tandem with a certified pilot 225 feet above the sea to enjoy majestic views of cliffs and beaches in South Bali.',
      difficulty: 'Extreme',
      highlights: [
        'Fly tandem with a certified professional pilot 225 feet above the ocean',
        'Perfect soaring conditions during dry season with refreshing sea breezes',
        'An adrenaline-pumping experience with spectacular views of the Bali coast'
      ]
    }
  },
  'atv-rafting-combo': {
    en: {
      title: 'Ayung River Rafting and ATV Quad Bike Combo Adventure',
      shortDesc: 'The ultimate action-packed day: ride powerful ATV Quad Bikes through muddy tracks, jungle tunnels, and raft the Ayung River.',
      difficulty: 'Medium',
      highlights: [
        'Best-selling combo package combining Bali\'s two favorite extreme adventures',
        'Trek ATV through gorilla-face caves, bamboo tunnels, and natural waterfalls',
        'White water rafting on the Ayung River with Grade II-III rapids',
        'Includes private hotel round-trip transfers and a delicious buffet lunch'
      ]
    }
  },
  'off-road-tours': {
    en: {
      title: 'Adventure Off-Road Jeep Mount Batur Sunrise',
      shortDesc: 'Experience a breathtaking Mount Batur sunrise and black lava caldera exploration in a classic 4x4 Jeep.',
      difficulty: 'Medium',
      highlights: [
        'Off-Road Adventure: Reach remote viewpoints inaccessible by regular vehicles in a classic 4x4 Jeep',
        'Spectacular Sunrise: Witness the magical sunrise over Mount Batur without the exhausting hike',
        'Panoramic Views: Enjoy stunning views of the active volcano and its surrounding crater lake',
        'Expert Jeep Drivers: Explore safely with highly experienced, professional drivers'
      ]
    }
  },
  'adventure-atv-telaga-waja': {
    en: {
      title: 'Adventure ATV Ride at Telaga Waja',
      shortDesc: 'Challenging ATV ride & off-road trek through Karangasem\'s beautiful natural landscape and rural valleys.',
      difficulty: 'Medium',
      highlights: [
        'Feel the adrenaline rush of driving a powerful ATV Quad Bike',
        'Embark on an exciting journey through gorgeous Balinese countryside and rural rivers',
        'Guided by experienced, licensed professional ATV safety instructors',
        'Fully equipped with international standard safety gear'
      ]
    }
  },
  'adventure-atv-ubud-kuber': {
    en: {
      title: 'Adventure ATV Ride in Ubud with Kuber Bali',
      shortDesc: 'Embark on the ultimate ATV adventure with the official Kuber Bali Adventure. Ride through lush tropical forests, tunnels, and rivers.',
      difficulty: 'Medium',
      highlights: [
        'Feel the adrenaline rush as you ride through Bali\'s lush tropical forests',
        'Traverse diverse landscapes, including dense forests, caves, and clear rivers',
        'Capture the beauty of Bali\'s untouched nature on a thrilling ATV ride',
        'Enjoy a complimentary lunch at a scenic restaurant after your adventure'
      ]
    }
  },
  'ubud-monkey-forest-and-kintamani-highland': {
    en: {
      title: 'Ubud Monkey Forest & Kintamani Highland Cultural Tour',
      shortDesc: 'A cultural day trip visiting the Sacred Monkey Forest, Tirta Empul Holy Springs, and the majestic active volcano panorama of Kintamani.',
      difficulty: 'Easy',
      highlights: [
        'Witness a fascinating live performance of the traditional Barong & Keris Dance',
        'Explore the ancient trees and friendly macaques in Ubud Sacred Monkey Forest',
        'Admire the breathtaking, expansive caldera and lake views of Mount Kintamani',
        'Visit the sacred purification pools of Tirta Empul Holy Spring Temple'
      ]
    }
  }
};

export const VEHICLE_TRANSLATIONS: Record<string, Partial<Record<Language, { description: string; features: string[] }>>> = {
  'toyota-avanza': {
    en: {
      description: 'Rent the latest New Toyota Avanza in Bali. Features a comfortable cabin, dual blower AC, and reliable suspension for family travel.',
      features: ['6 Passenger Seats', 'Professional Driver', 'Fuel Included (BBM)', 'Dual Zone Air Conditioning', 'Sanitized & Clean']
    }
  },
  'toyota-innova': {
    en: {
      description: 'Super spacious cabin, plush suspension, and powerful diesel engine. VIP class ride comfort for you and your family.',
      features: ['6 Passenger Seats', 'Professional Driver', 'Fuel Included (BBM)', 'Quiet & Spacious Cabin', 'Maximum Cooling AC']
    }
  },
  'innova-zenix': {
    en: {
      description: 'Latest generation premium fleet with whisper-quiet Hybrid technology, luxury captain chairs, and VIP interior.',
      features: ['5 VIP Passenger Seats', 'VIP Driver & Fuel', 'Premium Captain Seats', 'Panoramic Sunroof', 'Ultra-Quiet Luxury Cabin']
    }
  },
  'toyota-alphard': {
    en: {
      description: 'The pinnacle of luxury and First-Class VIP comfort. Fitted with air suspension, electric sliding doors, and executive seating.',
      features: ['5 First-Class VIP Seats', 'VIP Chauffeur & Fuel', 'First-Class Executive Cabin', 'Electric Sliding Doors', 'Full Climate Control']
    }
  },
  'hiace-commuter': {
    en: {
      description: 'Robust minibus designed for large families, corporate groups, and tour groups. Spacious, reliable, and smooth on Bali roads.',
      features: ['15 Passenger Seats', 'Licensed Tour Driver & Fuel', 'Extra Spacious Legroom', 'Multi-Zone Chilled AC', 'High Comfort Suspension']
    }
  },
  'bus-29': {
    en: {
      description: 'Medium-capacity luxury tourist coach. Highly comfortable for corporate delegations, wedding entourages, and large groups.',
      features: ['29 Group Passenger Seats', 'Licensed Coach Captain & Fuel', 'Large Luggage Capacity', 'Audio Karaoke System', 'Evenly Chilled AC']
    }
  }
};

/**
 * Helper to get fully localized Experience object
 */
export function getLocalizedExperience(exp: Experience, lang: Language): Experience {
  if (lang === 'id') return exp;

  const translation = TOUR_TRANSLATIONS[exp.id]?.[lang] || TOUR_TRANSLATIONS[exp.id]?.['en'];
  if (!translation) return exp;

  return {
    ...exp,
    title: translation.title || exp.title,
    tagline: translation.tagline || exp.tagline,
    shortDesc: translation.shortDesc || exp.shortDesc,
    longDesc: translation.longDesc || exp.longDesc,
    location: translation.location || exp.location,
    difficulty: translation.difficulty || exp.difficulty,
    highlights: translation.highlights || exp.highlights,
    inclusions: translation.inclusions || exp.inclusions,
    exclusions: translation.exclusions || exp.exclusions,
    itinerary: translation.itinerary ? translation.itinerary.map(item => ({
      time: item.time,
      title: item.title,
      desc: item.desc || item.description || ''
    })) : exp.itinerary
  };
}

/**
 * Helper to get fully localized MultiDayPackage object
 */
export function getLocalizedMultiDayPackage(pkg: any, lang: Language): any {
  if (lang === 'id') return pkg;

  const translation = MULTIDAY_TRANSLATIONS[pkg.id]?.[lang] || MULTIDAY_TRANSLATIONS[pkg.id]?.['en'];
  if (!translation) return pkg;

  return {
    ...pkg,
    title: translation.title || pkg.title,
    tagline: translation.tagline || pkg.tagline,
    description: translation.description || pkg.description,
    highlights: translation.highlights || pkg.highlights,
    itinerary: translation.itinerary ? translation.itinerary.map((item, idx) => ({
      time: item.time || (pkg.itinerary[idx]?.time || `Day ${idx + 1}`),
      title: item.title,
      description: item.desc || item.description || (pkg.itinerary[idx]?.description || '')
    })) : pkg.itinerary
  };
}

/**
 * Helper to get fully localized Vehicle object
 */
export function getLocalizedVehicle(veh: Vehicle, lang: Language): Vehicle {
  if (lang === 'id') return veh;

  const translation = VEHICLE_TRANSLATIONS[veh.id]?.[lang] || VEHICLE_TRANSLATIONS[veh.id]?.['en'];
  if (!translation) return veh;

  return {
    ...veh,
    description: translation.description || veh.description,
    features: translation.features || veh.features
  };
}
