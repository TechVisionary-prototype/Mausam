import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { MainDashboard } from './components/dashboard/MainDashboard';
import { DetailedWeatherScreen } from './components/details/DetailedWeatherScreen';
import { BottomNavBar, TabType } from './components/navigation/BottomNavBar';
import { SearchModal } from './components/modals/SearchModal';
import { GlobeMapModal } from './components/modals/GlobeMapModal';
import { CityWeather, TemperatureUnit } from './types/weather';
import { weatherService } from './services/weatherService';
import { Columns3, Smartphone, Search, Globe, Sparkles, RefreshCw } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityWeather>(weatherService.getCityById('dhaka'));
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'dashboard' | 'details'>('dashboard');
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [unit, setUnit] = useState<TemperatureUnit>('C');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGlobeOpen, setIsGlobeOpen] = useState(false);
  const [isDesktopShowcase, setIsDesktopShowcase] = useState(true);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const wide = window.innerWidth >= 1180;
      setIsWideScreen(wide);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectCity = (city: CityWeather) => {
    setSelectedCity(city);
    setCurrentScreen('details');
    setActiveTab('details');
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setCurrentScreen('dashboard');
    } else if (tab === 'details') {
      setCurrentScreen('details');
    } else if (tab === 'welcome') {
      setCurrentScreen('welcome');
    } else if (tab === 'search') {
      setIsSearchOpen(true);
    } else if (tab === 'globe') {
      setIsGlobeOpen(true);
    }
  };

  const toggleUnit = () => {
    setUnit(prev => (prev === 'C' ? 'F' : 'C'));
  };

  return (
    <div className="min-h-screen bg-[#F1F0F5] text-[#171622] flex flex-col justify-between selection:bg-[#6250C7] selection:text-white">
      {/* Top Application Bar for Desktop & Tablet */}
      <header className="hidden lg:flex items-center justify-between px-8 py-3.5 bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[#6250C7] text-white flex items-center justify-center shadow-purple">
            <Sparkles className="w-5 h-5 text-[#FFCE20]" />
          </div>
          <div>
            <h1 className="text-base font-extrabold tracking-tight text-[#171622]">
              Mausam <span className="text-[#6250C7] font-semibold text-xs ml-1 px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100">Modern Weather UI</span>
            </h1>
            <p className="text-[11px] text-[#89869A] font-medium">
              Inspired by minimalist purple dashboard aesthetic
            </p>
          </div>
        </div>

        {/* Global Controls & Layout Switcher */}
        <div className="flex items-center gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#89869A] hover:text-[#171622] transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-[#6250C7]" />
            <span>Search station (⌘K)</span>
          </button>

          {/* Global Radar Globe */}
          <button
            onClick={() => setIsGlobeOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-purple-50 hover:bg-purple-100 text-xs font-semibold text-[#6250C7] transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Global Radar Map</span>
          </button>

          {/* Unit Toggle */}
          <button
            onClick={toggleUnit}
            className="px-3 py-1.5 rounded-2xl bg-white border border-slate-200 hover:border-[#6250C7] text-xs font-bold text-[#6250C7] shadow-sm transition-all"
            title="Toggle Celsius / Fahrenheit"
          >
            Switch to °{unit === 'C' ? 'F' : 'C'}
          </button>

          {/* View Mode Toggle (Multi-panel vs Single Screen) on Wide Screens */}
          {isWideScreen && (
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                onClick={() => setIsDesktopShowcase(true)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  isDesktopShowcase
                    ? 'bg-white text-[#6250C7] shadow-sm'
                    : 'text-[#89869A] hover:text-[#171622]'
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span>3-Panel Showcase</span>
              </button>
              <button
                onClick={() => setIsDesktopShowcase(false)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  !isDesktopShowcase
                    ? 'bg-white text-[#6250C7] shadow-sm'
                    : 'text-[#89869A] hover:text-[#171622]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Single View</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-0 md:p-6 lg:p-8">
        {/* DESKTOP 3-PANEL SHOWCASE LAYOUT (inspired by reference image) */}
        {isWideScreen && isDesktopShowcase ? (
          <div className="w-full max-w-7xl mx-auto grid grid-cols-3 gap-6 lg:gap-8 items-stretch justify-center">
            {/* Panel 1: Welcome / Onboarding Screen */}
            <div className="flex flex-col bg-white rounded-[38px] shadow-2xl border border-slate-200/80 overflow-hidden h-[820px] transition-all hover:shadow-purple/20">
              <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Panel 1: Onboarding & Global Map</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="flex-1 overflow-hidden">
                <WelcomeScreen
                  onGetStarted={() => {
                    setCurrentScreen('dashboard');
                    setActiveTab('home');
                  }}
                  onSelectCity={(city) => setSelectedCity(city)}
                />
              </div>
            </div>

            {/* Panel 2: Main Weather Dashboard (Dhaka, Thunderstorm, 20°C, Carousel) */}
            <div className="flex flex-col bg-[#F1F0F5] rounded-[38px] shadow-2xl border border-slate-200/80 overflow-hidden h-[820px] transition-all hover:shadow-purple/20">
              <div className="px-5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Panel 2: Weather Dashboard</span>
                <span className="text-[11px] font-semibold text-[#6250C7]">Current Location</span>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col justify-between">
                <MainDashboard
                  onOpenDetails={(city) => {
                    if (city) setSelectedCity(city);
                    setCurrentScreen('details');
                    setActiveTab('details');
                  }}
                  onOpenGlobe={() => setIsGlobeOpen(true)}
                  onOpenSearch={() => setIsSearchOpen(true)}
                  selectedCity={selectedCity}
                  onSelectCity={(city) => setSelectedCity(city)}
                  unit={unit}
                  onToggleUnit={toggleUnit}
                />
              </div>
            </div>

            {/* Panel 3: Detailed Weather Screen (Rampura Dhaka, Softly cold, Gauges) */}
            <div className="flex flex-col bg-white rounded-[38px] shadow-2xl border border-slate-200/80 overflow-hidden h-[820px] transition-all hover:shadow-purple/20">
              <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Panel 3: Weather Details & Gauges</span>
                <span className="text-[11px] font-semibold text-[#6250C7]">{selectedCity.name} Station</span>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col justify-between">
                <DetailedWeatherScreen
                  city={selectedCity}
                  onBack={() => {
                    setCurrentScreen('dashboard');
                    setActiveTab('home');
                  }}
                  unit={unit}
                />
              </div>
            </div>
          </div>
        ) : (
          /* RESPONSIVE SINGLE-PANEL / MOBILE / TABLET LAYOUT */
          <div className="w-full max-w-md mx-auto bg-[#F1F0F5] md:rounded-[38px] md:shadow-2xl md:border md:border-slate-200/80 overflow-hidden flex flex-col h-full min-h-[720px] md:h-[820px] relative">
            {/* Screen View Switcher */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
              {currentScreen === 'welcome' && (
                <WelcomeScreen
                  onGetStarted={() => {
                    setCurrentScreen('dashboard');
                    setActiveTab('home');
                  }}
                  onBack={() => {
                    setCurrentScreen('dashboard');
                    setActiveTab('home');
                  }}
                  onSelectCity={handleSelectCity}
                />
              )}

              {currentScreen === 'dashboard' && (
                <MainDashboard
                  onOpenDetails={(city) => {
                    if (city) setSelectedCity(city);
                    setCurrentScreen('details');
                    setActiveTab('details');
                  }}
                  onOpenGlobe={() => setIsGlobeOpen(true)}
                  onOpenSearch={() => setIsSearchOpen(true)}
                  selectedCity={selectedCity}
                  onSelectCity={(city) => setSelectedCity(city)}
                  unit={unit}
                  onToggleUnit={toggleUnit}
                />
              )}

              {currentScreen === 'details' && (
                <DetailedWeatherScreen
                  city={selectedCity}
                  onBack={() => {
                    setCurrentScreen('dashboard');
                    setActiveTab('home');
                  }}
                  unit={unit}
                />
              )}
            </div>

            {/* Bottom Navigation Bar */}
            <BottomNavBar
              activeTab={activeTab}
              onChangeTab={handleTabChange}
              className="relative z-30"
            />
          </div>
        )}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCity={(city) => {
          setSelectedCity(city);
          setCurrentScreen('details');
          setActiveTab('details');
        }}
        unit={unit}
      />

      {/* Global Interactive Radar Map Modal */}
      <GlobeMapModal
        isOpen={isGlobeOpen}
        onClose={() => setIsGlobeOpen(false)}
        onSelectCity={(city) => {
          setSelectedCity(city);
          setCurrentScreen('details');
          setActiveTab('details');
        }}
        unit={unit}
      />
    </div>
  );
};

export default App;
