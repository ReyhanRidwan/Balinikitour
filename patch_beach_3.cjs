const fs = require('fs');
let content = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf8');

const replacement = `          </motion.div>
        ) : currentView === 'beach' ? (
          /* ========================================================================= */
          /* VIEW: BEACH DEDICATED PAGE                                                */
          /* ========================================================================= */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Breadcrumb Navigation & Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-6">
              <button
                onClick={() => setCurrentView('overview')}
                className="inline-flex items-center gap-2 text-sm text-gold-100 hover:text-gold-500 font-mono transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Kembali ke Tour & Activities</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gold-200/60">Pilihan Kategori:</span>
                <button
                  onClick={() => setCurrentView('overview')}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Semua
                </button>
                <button
                  onClick={() => {
                    setCurrentView('water-sport');
                    setPreviousView('water-sport');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Water Sport (3)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('rafting-kayaking');
                    setPreviousView('rafting-kayaking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Rafting and Kayaking (4)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('nature-trail');
                    setPreviousView('nature-trail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Nature Trail (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('full-day-tour');
                    setPreviousView('full-day-tour');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Full Day Tour (10)
                </button>
                <button
                  onClick={() => {
                    setCurrentView('animal-encounter');
                    setPreviousView('animal-encounter');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-gold-100 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Animal Encounter (3)
                </button>
                <button
                  onClick={() => setCurrentView('beach')}
                  className="text-xs px-3.5 py-1 rounded-full bg-gold-500 text-neutral-950 font-bold cursor-pointer shadow-sm"
                >
                  Beach (3)
                </button>
              </div>
            </div>

            {/* Title Section with Accent Underline Indicator */}
            <div className="space-y-2">
              <div className="inline-block">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
                  Beach
                </h1>
                <div className="h-1 w-24 bg-gold-500 rounded-full mt-2" />
              </div>
              <p className="text-sm text-gold-100 max-w-2xl leading-relaxed">
                Jelajahi pantai-pantai memukau di Nusa Penida, aktivitas Water Sport, hingga makan malam romantis di pinggir pantai.
              </p>
            </div>

            {/* Cards Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {beachPackages.map((pkg) => renderPackageCard(pkg, 'beach'))}
            </div>

          </motion.div>
        ) : currentView === 'package-detail' ? (`;

content = content.replace(/          <\/motion\.div>\n        \) : currentView === 'package-detail' \? \(/, replacement);

// I also need to update handleCategoryClick
// Let's add the handleCategoryClick logic
content = content.replace(
  /\} else if \(catId === 'animal-encounter'\) \{\n      setCurrentView\('animal-encounter'\);\n      setPreviousView\('animal-encounter'\);\n      window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\n    \}/g,
  `} else if (catId === 'animal-encounter') {
      setCurrentView('animal-encounter');
      setPreviousView('animal-encounter');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (catId === 'beach') {
      setCurrentView('beach');
      setPreviousView('beach');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }`
);

fs.writeFileSync('src/components/TourActivitiesPage.tsx', content);
