import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, MapPin, Clock, Check, ChevronDown, ChevronUp, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { getOptimizedCloudinaryUrl, generateCloudinarySrcSet } from '../utils/cloudinary';
import { EXPERIENCES } from '../data';
import { multiDayPackages } from '../data/multiDayPackages';
import { SearchFilters } from '../types';

interface TripResult {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  region: string;
  duration: string;
  durationHours: number;
  difficulty: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  discountPercentage: number;
  rating: number;
  type: string[]; // For filtering
}

interface TripSearchResultPageProps {
  onViewDetails: (id: string) => void;
  initialFilters?: SearchFilters;
}

const mapLocationToRegion = (location: string, title: string, desc: string): string => {
  const text = `${location} ${title} ${desc}`.toLowerCase();
  
  if (text.includes('bedugul') || text.includes('sekumpul') || text.includes('singaraja') || text.includes('banyumala') || text.includes('gitgit') || text.includes('ulun danu') || text.includes('twin lake')) return 'Bedugul';
  if (text.includes('candidasa') || text.includes('amed') || text.includes('karangasem') || text.includes('telaga waja') || text.includes('lempuyang') || text.includes('tirta gangga')) return 'Candidasa and Amed';
  if (text.includes('jimbaran') || text.includes('nusa dua') || text.includes('uluwatu') || text.includes('benoa')) return 'Jimbaran and Nusa Dua';
  if (text.includes('kuta') || text.includes('legian')) return 'Kuta and Legian';
  if (text.includes('nusa penida') || text.includes('lembongan')) return 'Nusa Penida and Nusa Lembongan';
  if (text.includes('sanur')) return 'Sanur';
  if (text.includes('seminyak') || text.includes('canggu')) return 'Seminyak and Canggu';
  
  // Default to Ubud since most tours (Batur, ATV, Ayung, monkey forest) are central/Ubud based
  return 'Ubud';
};

// Helper: Custom simple dual range slider
const DualRangeSlider = ({ min, max, value, onChange, formatLabel }: { min: number, max: number, value: [number, number], onChange: (val: [number, number]) => void, formatLabel: (v: number) => string }) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), value[1] - 1);
    onChange([newMin, value[1]]);
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), value[0] + 1);
    onChange([value[0], newMax]);
  };
  const leftPercent = ((value[0] - min) / (max - min)) * 100;
  const rightPercent = ((value[1] - min) / (max - min)) * 100;

  return (
    <div className="pt-2 pb-1">
      <div className="relative h-1.5 bg-neutral-800 rounded-full mb-4">
        <div 
          className="absolute h-full bg-gradient-to-r from-gold-500 to-orange-500 rounded-full"
          style={{ left: `${leftPercent}%`, right: `${100 - rightPercent}%` }}
        />
        <input 
          type="range" min={min} max={max} value={value[0]} onChange={handleMinChange}
          className="absolute w-full h-1.5 opacity-0 cursor-pointer pointer-events-auto" style={{ zIndex: 3 }}
        />
        <input 
          type="range" min={min} max={max} value={value[1]} onChange={handleMaxChange}
          className="absolute w-full h-1.5 opacity-0 cursor-pointer pointer-events-auto" style={{ zIndex: 4 }}
        />
        <div 
          className="absolute w-4 h-4 bg-white rounded-full border-2 border-gold-500 shadow-md top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: `calc(${leftPercent}% - 8px)` }}
        />
        <div 
          className="absolute w-4 h-4 bg-white rounded-full border-2 border-orange-500 shadow-md top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: `calc(${rightPercent}% - 8px)` }}
        />
      </div>
      <div className="flex justify-between text-xs font-mono text-neutral-400">
        <span>{formatLabel(value[0])}</span>
        <span>{formatLabel(value[1])}</span>
      </div>
    </div>
  );
};

export default function TripSearchResultPage({ onViewDetails, initialFilters }: TripSearchResultPageProps) {
  // 1. Normalize Data
  const allTrips: TripResult[] = useMemo(() => {
    // List of initial dummy tour IDs to exclude
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

    const fromExperiences = EXPERIENCES.filter(exp => !excludedInitialIds.includes(exp.id)).map((exp) => {
      const discountPercentage = 15;
      const originalPrice = Math.round(exp.pricePerPerson / (1 - discountPercentage / 100));
      const savings = originalPrice - exp.pricePerPerson;
      // parse duration to hours for filtering
      const hours = exp.duration.toLowerCase().includes('full-day') ? 10 : 8;

      return {
        id: exp.id,
        title: exp.title,
        description: exp.shortDesc,
        image: exp.cardImage || exp.bgImage,
        location: exp.location,
        region: mapLocationToRegion(exp.location, exp.title, exp.shortDesc),
        duration: exp.duration,
        durationHours: hours,
        difficulty: exp.difficulty,
        originalPrice: originalPrice,
        discountedPrice: exp.pricePerPerson,
        savings: savings,
        discountPercentage: discountPercentage,
        rating: exp.rating || 4.5,
        type: ['Full Day Tour']
      };
    });

    const fromMultiDay = multiDayPackages.map((pkg) => {
      // rough heuristic: 1 day = 24h
      const daysStr = pkg.duration.split(' ')[0];
      const hours = !isNaN(Number(daysStr)) ? Number(daysStr) * 24 : 72;

      return {
        id: pkg.id,
        title: pkg.title,
        description: pkg.description,
        image: pkg.image,
        location: pkg.location,
        region: mapLocationToRegion(pkg.location, pkg.title, pkg.description),
        duration: pkg.duration,
        durationHours: hours,
        difficulty: pkg.difficulty,
        originalPrice: pkg.originalPrice,
        discountedPrice: pkg.discountedPrice || pkg.adultPrice,
        savings: pkg.savings || (pkg.originalPrice - (pkg.discountedPrice || pkg.adultPrice)),
        discountPercentage: pkg.discountPercentage || Math.round(((pkg.originalPrice - (pkg.discountedPrice || pkg.adultPrice)) / pkg.originalPrice) * 100),
        rating: pkg.rating || 5.0,
        type: ['Multi Days']
      };
    });

    return [...fromExperiences, ...fromMultiDay];
  }, []);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(initialFilters?.destination ? [initialFilters.destination] : []);
  const [selectedActivities, setSelectedActivities] = useState<string[]>(initialFilters?.activity ? [initialFilters.activity] : []);
  const [selectedTripTypes, setSelectedTripTypes] = useState<string[]>(initialFilters?.tripType ? [initialFilters.tripType] : []);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(initialFilters?.difficulty ? [initialFilters.difficulty] : []);
  
  const minPrice = Math.min(...allTrips.map(t => t.discountedPrice));
  const maxPrice = Math.max(...allTrips.map(t => t.discountedPrice));
  const minHours = Math.min(...allTrips.map(t => t.durationHours));
  const maxHours = Math.max(...allTrips.map(t => t.durationHours));

  // Parse initial price range string to values
  let initPriceRange: [number, number] = [minPrice, maxPrice];
  if (initialFilters?.price) {
    if (initialFilters.price === 'Under $50') initPriceRange = [minPrice, 50];
    else if (initialFilters.price === '$50 - $100') initPriceRange = [50, 100];
    else if (initialFilters.price === '$100 - $300') initPriceRange = [100, 300];
    else if (initialFilters.price === 'Over $300') initPriceRange = [300, maxPrice];
  }

  // Parse initial duration range string to values
  let initDurationRange: [number, number] = [minHours, maxHours];
  if (initialFilters?.duration) {
    if (initialFilters.duration === 'Up to 5 Hours') initDurationRange = [minHours, 5];
    else if (initialFilters.duration === '1 Day') initDurationRange = [6, 24]; // Approx 1 day
    else if (initialFilters.duration === '2-3 Days') initDurationRange = [48, 72];
    else if (initialFilters.duration === '4+ Days') initDurationRange = [96, maxHours];
  }

  const [priceRange, setPriceRange] = useState<[number, number]>(initPriceRange);
  const [durationRange, setDurationRange] = useState<[number, number]>(initDurationRange);
  
  const [sortBy, setSortBy] = useState<'top_rated' | 'price_low' | 'price_high'>('top_rated');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  // Accordion States
  const [isDestOpen, setIsDestOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isDurationOpen, setIsDurationOpen] = useState(true);
  const [isActivityOpen, setIsActivityOpen] = useState(true);
  const [isTripTypeOpen, setIsTripTypeOpen] = useState(true);
  const [isDiffOpen, setIsDiffOpen] = useState(true);

  // Derived Filter Options
  const destinations = [
    'Bedugul',
    'Candidasa and Amed',
    'Jimbaran and Nusa Dua',
    'Kuta and Legian',
    'Nusa Penida and Nusa Lembongan',
    'Sanur',
    'Seminyak and Canggu',
    'Ubud'
  ];
  const difficulties = Array.from(new Set(allTrips.map(t => t.difficulty))).filter(Boolean);
  const tripTypes = ['Full Day Tour', 'Multi Days', 'Adventure', 'Culture', 'Water Sports'];
  const activitiesList = ['Animal Encounter', 'Beaches', 'Cycling Trip', 'Rafting', 'Off-Road ATV'];

  // Apply Filters
  const filteredTrips = allTrips.filter((trip) => {
    if (searchQuery && !trip.title.toLowerCase().includes(searchQuery.toLowerCase()) && !trip.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedDestinations.length > 0 && !selectedDestinations.includes(trip.region)) {
      return false;
    }
    if (selectedDifficulties.length > 0 && !selectedDifficulties.includes(trip.difficulty)) {
      return false;
    }
    if (selectedTripTypes.length > 0 && !trip.type.some(t => selectedTripTypes.includes(t))) {
      return false;
    }
    if (selectedActivities.length > 0) {
      // Simulate activity filtering (checking keywords in title/desc)
      const matchesActivity = selectedActivities.some(act => 
        trip.title.toLowerCase().includes(act.toLowerCase()) || 
        trip.description.toLowerCase().includes(act.toLowerCase())
      );
      if (!matchesActivity) return false;
    }
    if (trip.discountedPrice < priceRange[0] || trip.discountedPrice > priceRange[1]) {
      return false;
    }
    if (trip.durationHours < durationRange[0] || trip.durationHours > durationRange[1]) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'top_rated') return b.rating - a.rating;
    if (sortBy === 'price_low') return a.discountedPrice - b.discountedPrice;
    if (sortBy === 'price_high') return b.discountedPrice - a.discountedPrice;
    return 0;
  });

  const handleClearAll = () => {
    setSelectedDestinations([]);
    setSelectedActivities([]);
    setSelectedTripTypes([]);
    setSelectedDifficulties([]);
    setPriceRange([minPrice, maxPrice]);
    setDurationRange([minHours, maxHours]);
    setSearchQuery('');
  };

  const toggleSelection = (setter: React.Dispatch<React.SetStateAction<string[]>>, list: string[], value: string) => {
    if (list.includes(value)) {
      setter(list.filter(item => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  const renderCheckbox = (label: string, checked: boolean, onChange: () => void, count: number) => (
    <label key={label} className="flex items-center justify-between cursor-pointer group mb-2.5">
      <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-gold-500 border-gold-500' : 'border-neutral-600 bg-neutral-900 group-hover:border-gold-500/50'}`}>
          {checked && <Check className="w-3.5 h-3.5 text-neutral-950" strokeWidth={3} />}
        </div>
        <span className={`text-sm ${checked ? 'text-gold-300 font-medium' : 'text-neutral-300 group-hover:text-gold-100'}`}>{label}</span>
      </div>
      <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded-full">{count}</span>
    </label>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-neutral-200">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif text-gold-100 font-bold tracking-wide">Trip Search Result</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-orange-500 mt-3 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <button 
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 bg-neutral-900 border border-gold-900/30 text-gold-200 px-4 py-2 rounded-lg"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>
          <div className="text-sm text-neutral-400">
            <strong className="text-gold-200">{filteredTrips.length}</strong> Trips Found
          </div>
        </div>

        {/* Sidebar Filter */}
        <aside className={`lg:w-72 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-5 md:p-6">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
              <h2 className="text-lg font-serif font-semibold text-gold-200">Filter By</h2>
              <button onClick={handleClearAll} className="text-xs font-semibold text-gold-500 hover:text-gold-400 uppercase tracking-wider underline underline-offset-4">
                Clear All
              </button>
            </div>

            {/* Destination Filter */}
            <div className="mb-6 pb-6 border-b border-neutral-800">
              <button onClick={() => setIsDestOpen(!isDestOpen)} className="flex items-center justify-between w-full mb-4">
                <span className="font-semibold text-gold-100/90 tracking-wide">Destination</span>
                {isDestOpen ? <ChevronUp size={16} className="text-neutral-400" /> : <ChevronDown size={16} className="text-neutral-400" />}
              </button>
              {isDestOpen && (
                <div className="animate-fade-in">
                  {destinations.map(dest => (
                    renderCheckbox(
                      dest, 
                      selectedDestinations.includes(dest), 
                      () => toggleSelection(setSelectedDestinations, selectedDestinations, dest),
                      allTrips.filter(t => t.region === dest).length
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="mb-6 pb-6 border-b border-neutral-800">
              <button onClick={() => setIsPriceOpen(!isPriceOpen)} className="flex items-center justify-between w-full mb-4">
                <span className="font-semibold text-gold-100/90 tracking-wide">Price</span>
                {isPriceOpen ? <ChevronUp size={16} className="text-neutral-400" /> : <ChevronDown size={16} className="text-neutral-400" />}
              </button>
              {isPriceOpen && (
                <div className="animate-fade-in pt-2 px-1">
                  <DualRangeSlider 
                    min={minPrice} 
                    max={maxPrice} 
                    value={priceRange} 
                    onChange={setPriceRange} 
                    formatLabel={(val) => `$${val}`} 
                  />
                </div>
              )}
            </div>

            {/* Duration Filter */}
            <div className="mb-6 pb-6 border-b border-neutral-800">
              <button onClick={() => setIsDurationOpen(!isDurationOpen)} className="flex items-center justify-between w-full mb-4">
                <span className="font-semibold text-gold-100/90 tracking-wide">Duration</span>
                {isDurationOpen ? <ChevronUp size={16} className="text-neutral-400" /> : <ChevronDown size={16} className="text-neutral-400" />}
              </button>
              {isDurationOpen && (
                <div className="animate-fade-in pt-2 px-1">
                  <DualRangeSlider 
                    min={minHours} 
                    max={maxHours} 
                    value={durationRange} 
                    onChange={setDurationRange} 
                    formatLabel={(val) => val >= 24 ? `${Math.round(val/24)} Days` : `${val} Hours`} 
                  />
                </div>
              )}
            </div>

            {/* Activities Filter */}
            <div className="mb-6 pb-6 border-b border-neutral-800">
              <button onClick={() => setIsActivityOpen(!isActivityOpen)} className="flex items-center justify-between w-full mb-4">
                <span className="font-semibold text-gold-100/90 tracking-wide">Activities</span>
                {isActivityOpen ? <ChevronUp size={16} className="text-neutral-400" /> : <ChevronDown size={16} className="text-neutral-400" />}
              </button>
              {isActivityOpen && (
                <div className="animate-fade-in">
                  {activitiesList.map(act => (
                    renderCheckbox(
                      act, 
                      selectedActivities.includes(act), 
                      () => toggleSelection(setSelectedActivities, selectedActivities, act),
                      allTrips.filter(trip => trip.title.toLowerCase().includes(act.toLowerCase()) || trip.description.toLowerCase().includes(act.toLowerCase())).length
                    )
                  ))}
                  <button className="text-xs text-gold-500 uppercase tracking-wider font-semibold mt-2 hover:text-gold-400">Show More</button>
                </div>
              )}
            </div>

            {/* Trip Types Filter */}
            <div className="mb-6 pb-6 border-b border-neutral-800">
              <button onClick={() => setIsTripTypeOpen(!isTripTypeOpen)} className="flex items-center justify-between w-full mb-4">
                <span className="font-semibold text-gold-100/90 tracking-wide">Trip Types</span>
                {isTripTypeOpen ? <ChevronUp size={16} className="text-neutral-400" /> : <ChevronDown size={16} className="text-neutral-400" />}
              </button>
              {isTripTypeOpen && (
                <div className="animate-fade-in">
                  {tripTypes.map(type => (
                    renderCheckbox(
                      type, 
                      selectedTripTypes.includes(type), 
                      () => toggleSelection(setSelectedTripTypes, selectedTripTypes, type),
                      allTrips.filter(t => t.type.includes(type)).length
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Difficulties Filter */}
            <div className="mb-2">
              <button onClick={() => setIsDiffOpen(!isDiffOpen)} className="flex items-center justify-between w-full mb-4">
                <span className="font-semibold text-gold-100/90 tracking-wide">Difficulties</span>
                {isDiffOpen ? <ChevronUp size={16} className="text-neutral-400" /> : <ChevronDown size={16} className="text-neutral-400" />}
              </button>
              {isDiffOpen && (
                <div className="animate-fade-in">
                  {difficulties.map(diff => (
                    renderCheckbox(
                      diff, 
                      selectedDifficulties.includes(diff), 
                      () => toggleSelection(setSelectedDifficulties, selectedDifficulties, diff),
                      allTrips.filter(t => t.difficulty === diff).length
                    )
                  ))}
                </div>
              )}
            </div>

          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search destinations, tours..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-3 pl-11 pr-4 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-48">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full appearance-none bg-neutral-900 border border-neutral-800 rounded-xl py-3 pl-4 pr-10 text-neutral-300 focus:outline-none focus:border-gold-500/50 cursor-pointer"
                  aria-label="Sort search results"
                >
                  <option value="top_rated">Sort (Top Rated)</option>
                  <option value="price_low">Price (Low to High)</option>
                  <option value="price_high">Price (High to Low)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4 pointer-events-none" />
              </div>

              <div className="hidden sm:flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-1">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-neutral-800 text-gold-400' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  <List size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-neutral-800 text-gold-400' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  <LayoutGrid size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block mb-6 text-sm text-neutral-400">
            <strong className="text-gold-200">{filteredTrips.length}</strong> Trips Found
          </div>

          {/* Results List */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {filteredTrips.map((trip) => (
              <div 
                key={trip.id} 
                className={`flex flex-col ${viewMode === 'list' ? 'sm:flex-row' : ''} bg-neutral-900/60 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 group`}
              >
                {/* Image Section */}
                <div className={`relative ${viewMode === 'list' ? 'sm:w-64 md:w-72 shrink-0' : 'w-full aspect-[4/3]'} overflow-hidden`}>
                  {trip.discountPercentage > 0 && (
                    <div className="absolute top-4 left-0 z-10 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-xs px-3 py-1 rounded-r-md shadow-lg">
                      {trip.discountPercentage}% Off
                    </div>
                  )}
                  <img 
                    src={getOptimizedCloudinaryUrl(trip.image, { width: 600, quality: 'auto', format: 'auto' })} 
                    srcSet={generateCloudinarySrcSet(trip.image, [300, 450, 600])}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    alt={trip.title} 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                  </div>
                  <div className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`flex-1 p-5 md:p-6 flex flex-col ${viewMode === 'list' ? 'sm:flex-row gap-6' : 'gap-4'}`}>
                  
                  {/* Middle: Info */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-serif font-bold text-gold-100 group-hover:text-gold-400 transition-colors line-clamp-2 mb-2">
                      {trip.title}
                    </h3>
                    <p className="text-sm text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                      {trip.description}
                    </p>
                    
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-2 text-sm text-neutral-300">
                        <MapPin className="w-4 h-4 text-neutral-500" />
                        <span>{trip.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-300">
                        <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span>{trip.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Pricing & CTA */}
                  <div className={`flex flex-col ${viewMode === 'list' ? 'sm:w-48 sm:items-end sm:text-right border-t sm:border-t-0 sm:border-l border-neutral-800 pt-4 sm:pt-0 sm:pl-6' : 'border-t border-neutral-800 pt-4 mt-2'}`}>
                    
                    <div className={`flex items-center gap-1.5 text-sm text-neutral-400 mb-1 ${viewMode === 'grid' ? 'justify-start' : 'sm:justify-end'}`}>
                      <Clock className="w-4 h-4 text-gold-500" />
                      <span>Duration</span>
                    </div>
                    <div className="font-semibold text-neutral-200 mb-4">{trip.duration}</div>

                    <div className={`mt-auto flex flex-col ${viewMode === 'grid' ? 'items-start' : 'sm:items-end'}`}>
                      {trip.originalPrice > trip.discountedPrice && (
                        <div className="text-sm text-neutral-500 flex items-center gap-2">
                          <span>From</span>
                          <span className="line-through text-neutral-400">${trip.originalPrice}</span>
                        </div>
                      )}
                      <div className="text-3xl font-bold text-gold-400 my-1">${trip.discountedPrice}</div>
                      {trip.savings > 0 && (
                        <div className="text-xs font-semibold text-green-400 mb-4">
                          You save ${trip.savings}
                        </div>
                      )}
                      
                      <button 
                        onClick={() => onViewDetails(trip.id)}
                        className={`w-full ${viewMode === 'list' ? 'sm:w-auto' : ''} bg-gradient-to-r from-gold-600 to-orange-500 hover:from-gold-500 hover:to-orange-400 text-neutral-950 font-bold py-2.5 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-md`}
                      >
                        View Details
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}

            {filteredTrips.length === 0 && (
              <div className="py-20 text-center bg-neutral-900/30 rounded-2xl border border-neutral-800 border-dashed">
                <Search className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif text-gold-200 mb-2">No trips found</h3>
                <p className="text-neutral-400">Try adjusting your filters or search query to find more trips.</p>
                <button 
                  onClick={handleClearAll}
                  className="mt-6 text-gold-500 font-semibold hover:text-gold-400 underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
