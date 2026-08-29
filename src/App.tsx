import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection, { HERO_SLIDES } from './components/HeroSection';

// Lazy load components not immediately visible or for other pages
const DestinationGrid = lazy(() => import('./components/DestinationGrid'));
const ActivitySection = lazy(() => import('./components/ActivitySection'));
const BestSellersSection = lazy(() => import('./components/BestSellersSection'));
const GallerySection = lazy(() => import('./components/GallerySection'));
const ReviewsSection = lazy(() => import('./components/ReviewsSection'));
const Footer = lazy(() => import('./components/Footer'));
const BookingModal = lazy(() => import('./components/BookingModal'));

// Brand New Multi-page components
const TourCatalog = lazy(() => import('./components/TourCatalog'));
const TourActivitiesPage = lazy(() => import('./components/TourActivitiesPage'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const WhyUsSection = lazy(() => import('./components/WhyUsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const DestinationsPage = lazy(() => import('./components/DestinationsPage'));
const DestinationDetailPage = lazy(() => import('./components/DestinationDetailPage'));
const RaftingDetailPage = lazy(() => import('./components/RaftingDetailPage'));
const TripSearchResultPage = lazy(() => import('./components/TripSearchResultPage'));

import { Experience, BookingDetails, SearchFilters } from './types';
import { EXPERIENCES } from './data';
import { LanguageProvider } from './i18n/LanguageContext';

type Page = 'home' | 'tours' | 'activities' | 'destinations' | 'about' | 'gallery' | 'whyus' | 'contact' | 'search';

function MainApp() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [heroActiveIndex, setHeroActiveIndex] = useState<number>(0);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preSelectedExperienceId, setPreSelectedExperienceId] = useState<string>('ubud-monkey-forest-and-kintamani-highland');
  const [initialSearchFilters, setInitialSearchFilters] = useState<SearchFilters | undefined>(undefined);

  // Page change wrapper to reset destination and activity sub-page state
  const handlePageChange = (page: Page) => {
    setActivePage(page);
    setSelectedDestination(null);
    setSelectedActivityId(null);
  };

  // Activity click handler to open details for specific experiences
  const handleActivityClick = (activityId: string) => {
    if (activityId === 'paragliding') {
      setSelectedActivityId('paragliding');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (activityId === 'white-water-rafting' || activityId === 'rafting-kayaking') {
      setSelectedActivityId('rafting and kayaking');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (activityId === 'trekking') {
      setSelectedActivityId('trekking');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (activityId === 'off-road-tours') {
      setSelectedActivityId('off-road-tours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (activityId === 'animal-encounter') {
      setSelectedActivityId('ubud-monkey-forest-and-kintamani-highland');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleOpenBooking(activityId);
    }
  };

  // Open booking modal preselected with a specific experience
  const handleOpenBooking = (experienceId: string) => {
    setPreSelectedExperienceId(experienceId);
    setIsBookingOpen(true);
  };

  // General booking click (pre-select current active slide in hero)
  const handleGeneralBookNow = () => {
    if (activePage === 'home') {
      const currentId = HERO_SLIDES[heroActiveIndex]?.bookingExperienceId || 'telaga-waja-rafting';
      handleOpenBooking(currentId);
    } else {
      // Default to first experience on other pages
      handleOpenBooking(HERO_SLIDES[0]?.bookingExperienceId || 'ubud-monkey-forest-and-kintamani-highland');
    }
  };

  const handleBookingSuccess = (booking: BookingDetails) => {
    console.log('Premium booking finalized:', booking);
  };

  const handleViewDetails = (expId: string) => {
    // When clicking "Detail Rute", scroll up and open booking as primary action
    handleOpenBooking(expId);
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-gold-100 font-sans selection:bg-gold-500/20 selection:text-gold-200">
      
      {/* 1. Universal Luxury Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onBookNow={handleGeneralBookNow}
      />

      <Suspense fallback={<div className="min-h-screen bg-neutral-950 flex items-center justify-center"><div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        {/* 2. Page Content Switcher Router */}
        <main className="min-h-[80vh]">
          {activePage === 'home' && (
            <div className="animate-fade-in">
              {selectedActivityId ? (
                <div className="pt-24 pb-12 bg-neutral-950">
                  {selectedActivityId === 'off-road-tours' || selectedActivityId === 'trekking' || selectedActivityId === 'rafting and kayaking' || selectedActivityId === 'white-water-rafting' || selectedActivityId === 'rafting-kayaking' ? (
                    <DestinationDetailPage
                      destinationName={selectedActivityId}
                      onBack={() => {
                        setSelectedActivityId(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      onBookNow={handleOpenBooking}
                    />
                  ) : (
                    <RaftingDetailPage
                      packageId={selectedActivityId}
                      onBack={() => {
                        setSelectedActivityId(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      onBookNow={handleOpenBooking}
                    />
                  )}
                </div>
              ) : (
                <>
                  {/* Showstopper Hero Carousel */}
                  <HeroSection
                    activeIndex={heroActiveIndex}
                    setActiveIndex={setHeroActiveIndex}
                    onExploreClick={(slide) => {
                      if (slide.type === 'destination') {
                        setSelectedDestination(slide.targetName);
                        setActivePage('destinations');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (slide.type === 'activity') {
                        if (slide.id === 'hero-rafting') {
                          setSelectedActivityId('rafting and kayaking');
                        } else if (slide.id === 'hero-animal') {
                          setSelectedActivityId('ubud-monkey-forest-and-kintamani-highland');
                        } else {
                          setActivePage('activities');
                        }
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    onBookNowClick={(expId) => {
                      handleOpenBooking(expId || HERO_SLIDES[heroActiveIndex]?.bookingExperienceId || 'telaga-waja-rafting');
                    }}
                    onSearchSubmit={(filters) => {
                      setInitialSearchFilters(filters);
                      setActivePage('search');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />

                  {/* Bento Grid "Our Elite Expeditions" Quick Showcase */}
                  <DestinationGrid
                    onSelectDestination={(destName) => {
                      setSelectedDestination(destName);
                      setActivePage('destinations');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onBookNow={handleOpenBooking}
                  />

                  {/* Premium Outdoor Adventure & Wilderness Activities */}
                  <ActivitySection onBookNow={handleActivityClick} />

                  {/* Our Best Sellers Packages Section */}
                  <BestSellersSection
                    onSelectPackage={(packageId) => {
                      setSelectedActivityId(packageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />

                  {/* Why Us Advantage Section */}
                  <WhyUsSection />

                  {/* Testimonials Review section */}
                  <ReviewsSection />
                </>
              )}
            </div>
          )}

          {activePage === 'destinations' && (
            <div className="animate-fade-in">
              {selectedDestination ? (
                <DestinationDetailPage
                  destinationName={selectedDestination}
                  onBack={() => {
                    setSelectedDestination(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onBookNow={handleOpenBooking}
                />
              ) : (
                <DestinationsPage
                  onSelectDestination={(destName) => {
                    setSelectedDestination(destName);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              )}
            </div>
          )}

          {activePage === 'tours' && (
            <div className="animate-fade-in">
              <TourCatalog
                onBookNow={handleOpenBooking}
                onViewDetails={handleViewDetails}
              />
            </div>
          )}

          {activePage === 'activities' && (
            <div className="animate-fade-in">
              <TourActivitiesPage
                onBookNow={handleOpenBooking}
              />
            </div>
          )}

          {activePage === 'about' && (
            <div className="animate-fade-in">
              <AboutSection />
            </div>
          )}

          {activePage === 'gallery' && (
            <div className="animate-fade-in">
              <GallerySection />
            </div>
          )}

          {activePage === 'whyus' && (
            <div className="animate-fade-in">
              <WhyUsSection isPage />
            </div>
          )}

          {activePage === 'contact' && (
            <div className="animate-fade-in">
              <ContactSection />
            </div>
          )}
          {activePage === 'search' && (
            <div className="animate-fade-in pt-24 pb-12 bg-neutral-950">
              <TripSearchResultPage 
                initialFilters={initialSearchFilters}
                onViewDetails={(id) => {
                  setSelectedActivityId(id);
                  setActivePage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />
            </div>
          )}
        </main>

        {/* 3. Universal Coordinates Footer */}
        <Footer />

        {/* 4. The Dynamic Booking & Checkout Modal System */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialExperienceId={preSelectedExperienceId}
          onBookingSuccess={handleBookingSuccess}
        />
      </Suspense>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
