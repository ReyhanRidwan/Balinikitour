import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

interface NavbarProps {
  activePage: 'home' | 'tours' | 'activities' | 'destinations' | 'about' | 'gallery' | 'whyus' | 'contact' | 'search';
  setActivePage: (page: 'home' | 'tours' | 'activities' | 'destinations' | 'about' | 'gallery' | 'whyus' | 'contact' | 'search') => void;
  onBookNow: () => void;
}

export default function Navbar({ activePage, setActivePage, onBookNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t, languages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems: Array<{ id: typeof activePage; label: string }> = [
    { id: 'home', label: t('nav.home') },
    { id: 'destinations', label: t('nav.destinations') },
    { id: 'tours', label: t('nav.tours') },
    { id: 'activities', label: t('nav.activities') },
    { id: 'about', label: t('nav.about') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'whyus', label: t('nav.whyUs') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (pageId: typeof activePage) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a] border-b border-gold-900/25 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 select-none group text-left cursor-pointer"
          id="nav-logo"
        >
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-wider text-gold-200 group-hover:text-gold-400 transition-colors duration-300 font-bold">
              balinikitour
            </span>
            <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-gold-300/80 -mt-0.5 font-semibold group-hover:text-gold-100 transition-colors duration-300">
              Premium Tour & Travel
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" id="desktop-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[11px] uppercase tracking-[0.18em] font-mono font-semibold transition-all duration-300 cursor-pointer relative py-1 ${
                activePage === item.id
                  ? 'text-gold-400 font-bold'
                  : 'text-gold-100/75 hover:text-gold-300'
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Language Switcher */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-gold-400/20 bg-neutral-900/80 hover:bg-neutral-900 text-gold-200 text-xs font-mono transition-all cursor-pointer shadow-sm hover:border-gold-400/50"
              aria-label="Select Language"
              id="btn-lang-selector"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="font-bold text-[11px] uppercase tracking-wider">{currentLangObj.short}</span>
              <ChevronDown size={13} className={`text-gold-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-neutral-950 border border-gold-400/30 rounded-md shadow-2xl py-1 z-50 text-left animate-fade-in">
                <div className="px-3 py-1.5 border-b border-gold-900/30 text-[9px] font-mono uppercase tracking-widest text-gold-400/60">
                  {language === 'id' ? 'Pilih Bahasa' : 'Select Language'}
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-mono transition-colors text-left cursor-pointer hover:bg-gold-500/10 ${
                      language === lang.code ? 'text-gold-400 font-bold bg-gold-500/5' : 'text-gold-100/80 hover:text-gold-200'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    {language === lang.code && <Check size={14} className="text-gold-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('search')}
            className={`p-2 rounded-sm border border-gold-900/30 transition-colors cursor-pointer ${
              activePage === 'search' ? 'bg-gold-500/20 text-gold-400 border-gold-500/50' : 'bg-neutral-900/60 text-gold-100/80 hover:bg-gold-500/20 hover:text-gold-300'
            }`}
            aria-label="Search Trips"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          
          <button
            onClick={onBookNow}
            id="btn-nav-book"
            className="bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-[10px] uppercase tracking-[0.18em] font-bold px-5 py-2.5 transition-all duration-300 shadow-md hover:shadow-gold-500/10 cursor-pointer rounded-sm active:scale-95 whitespace-nowrap"
          >
            {t('nav.bookNow')}
          </button>
        </div>

        {/* Mobile Header Icons: Lang + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick Lang Switcher for mobile header */}
          <button
            onClick={() => {
              const nextIndex = (languages.findIndex(l => l.code === language) + 1) % languages.length;
              setLanguage(languages[nextIndex].code);
            }}
            className="flex items-center gap-1 px-2 py-1 bg-neutral-900 border border-gold-400/20 rounded text-[11px] font-mono text-gold-200 cursor-pointer"
            aria-label="Toggle language"
          >
            <span>{currentLangObj.flag}</span>
            <span className="font-bold text-[10px]">{currentLangObj.short}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gold-200 hover:text-gold-400 transition-colors focus:outline-none p-1.5 bg-neutral-900 border border-gold-400/20 rounded cursor-pointer"
            aria-label="Toggle menu"
            id="btn-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SOLID BLACK MOBILE MENU (NO TRANSPARENT / NO INVISIBLE EFFECTS) */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#000000] text-gold-100 md:hidden flex flex-col justify-between overflow-y-auto"
          id="mobile-nav-panel"
          style={{ backgroundColor: '#000000', opacity: 1 }}
        >
          {/* Mobile Top Header inside menu */}
          <div className="bg-[#000000] border-b border-gold-900/30 px-6 py-4 flex items-center justify-between shrink-0">
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl tracking-wider text-gold-200 font-bold">
                balinikitour
              </span>
              <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                Premium Tour & Travel
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gold-300 hover:text-gold-100 bg-neutral-900 border border-gold-400/30 rounded-full cursor-pointer focus:outline-none"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Language Selection Grid on Mobile */}
          <div className="px-6 pt-5 pb-3 border-b border-neutral-900 bg-neutral-950 shrink-0">
            <p className="text-[10px] font-mono uppercase tracking-widest text-gold-400/70 mb-2.5 text-left">
              {language === 'id' ? 'Pilih Bahasa:' : 'Select Language:'}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center space-x-2 p-2 rounded text-xs font-mono border transition-all cursor-pointer text-left ${
                    language === lang.code
                      ? 'bg-gold-500/20 border-gold-400 text-gold-200 font-bold shadow-sm'
                      : 'bg-neutral-900 border-neutral-800 text-gold-100/60 hover:text-gold-200'
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span className="truncate">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 px-6 py-6 overflow-y-auto text-left">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-4 rounded-md text-sm uppercase tracking-[0.18em] font-mono font-bold transition-colors cursor-pointer border ${
                  activePage === item.id
                    ? 'text-gold-400 bg-gold-500/15 border-gold-500/30'
                    : 'text-gold-100/85 hover:text-gold-200 bg-neutral-950 border-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('search')}
              className={`text-left py-2.5 px-4 rounded-md text-sm uppercase tracking-[0.18em] font-mono font-bold transition-colors cursor-pointer border flex items-center gap-2 ${
                activePage === 'search'
                  ? 'text-gold-400 bg-gold-500/15 border-gold-500/30'
                  : 'text-gold-100/85 hover:text-gold-200 bg-neutral-950 border-neutral-900'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <span>{t('nav.search')}</span>
            </button>
          </div>

          {/* Bottom Actions */}
          <div className="bg-[#000000] border-t border-gold-900/30 p-6 space-y-4 shrink-0">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookNow();
              }}
              className="w-full bg-gold-400 hover:bg-gold-500 text-neutral-950 font-mono text-xs uppercase tracking-[0.2em] font-bold py-3.5 transition-all rounded-sm shadow-lg cursor-pointer"
            >
              {t('nav.bookNow')}
            </button>
            <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-gold-300/60">
              <Sparkles size={12} className="text-gold-400" />
              <span>{t('nav.hotline')}: +62 812-3456-7890</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

