const fs = require('fs');

let code = fs.readFileSync('src/components/TourActivitiesPage.tsx', 'utf-8');

if (!code.includes('import MultiDayDetailPage')) {
    code = code.replace("import RaftingDetailPage from './RaftingDetailPage';", "import RaftingDetailPage from './RaftingDetailPage';\nimport MultiDayDetailPage from './MultiDayDetailPage';\nimport { multiDayPackages } from '../data/multiDayPackages';");
}

const target = `        ) : currentView === 'package-detail' ? (
          /* ========================================================================= */
          /* VIEW: DEDICATED PACKAGE DETAIL PAGE                                       */
          /* ========================================================================= */
          <RaftingDetailPage
            packageId={selectedPackageId}
            onBack={() => {
              setCurrentView(previousView);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBookNow={onBookNow}
          />
        ) : (`;

const replacement = `        ) : currentView === 'package-detail' ? (
          /* ========================================================================= */
          /* VIEW: DEDICATED PACKAGE DETAIL PAGE                                       */
          /* ========================================================================= */
          (() => {
            const isMultiDay = multiDayPackages.some(p => p.id === selectedPackageId);
            if (isMultiDay) {
              return (
                <MultiDayDetailPage 
                  packageId={selectedPackageId!}
                  onBack={() => {
                    setCurrentView(previousView);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onBookNow={onBookNow}
                />
              );
            }
            return (
              <RaftingDetailPage
                packageId={selectedPackageId}
                onBack={() => {
                  setCurrentView(previousView);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onBookNow={onBookNow}
              />
            );
          })()
        ) : (`;

code = code.replace(target, replacement);
fs.writeFileSync('src/components/TourActivitiesPage.tsx', code);
console.log("Updated TourActivitiesPage.tsx successfully");
