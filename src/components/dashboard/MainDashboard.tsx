import React, { useState, useRef, useEffect } from 'react';
import { Search, Globe, MapPin, ChevronRight, Wind, Droplets, ArrowUpRight, Sparkles } from 'lucide-react';
import { CityWeather, TemperatureUnit } from '../../types/weather';
import { weatherService } from '../../services/weatherService';
import { WeatherIllustration } from '../illustrations/WeatherIllustration';
import { ThunderstormIllustration } from '../illustrations/ThunderstormIllustration';

interface MainDashboardProps {
  onOpenDetails: (city?: CityWeather) => void;
  onOpenGlobe: () => void;
  onOpenSearch: () => void;
  selectedCity: CityWeather;
  onSelectCity: (city: CityWeather) => void;
  unit: TemperatureUnit;
  onToggleUnit?: () => void;
}

export const MainDashboard: React.FC<MainDashboardProps> = ({
  onOpenDetails,
  onOpenGlobe,
  onOpenSearch,
  selectedCity,
  onSelectCity,
  unit,
  onToggleUnit,
}) => {
  const aroundWorldCities = weatherService.getAroundTheWorldCities();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Sync scroll position with pagination dots
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const cardWidth = 220; // approximate card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(Math.max(index, 0), aroundWorldCities.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = 220;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveSlideIndex(index);
  };

  // Find Dhaka for current location card, or fallback to selectedCity
  const dhakaCity = weatherService.getCityById('dhaka');
  const currentHeroCity = selectedCity.id === 'dhaka' ? dhakaCity : selectedCity;

  return (
    <div className="w-full h-full flex flex-col justify-between p-5 md:p-7 max-w-xl mx-auto overflow-y-auto no-scrollbar">
      {/* 1. Header with Greeting and Actions */}
      <header className="flex items-center justify-between pt-2 pb-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#171622] tracking-tight">
            Hello, Arian,
          </h2>
          <p className="text-sm font-medium text-[#89869A] mt-0.5">
            Discover the weather
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Unit Toggle Button */}
          {onToggleUnit && (
            <button
              onClick={onToggleUnit}
              className="px-2.5 py-2 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/80 text-xs font-bold text-[#6250C7] shadow-sm transition-all"
              title="Toggle Celsius / Fahrenheit"
            >
              °{unit}
            </button>
          )}

          {/* Search Icon Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search cities"
            className="w-11 h-11 rounded-2xl bg-white hover:bg-slate-50 active:scale-95 border border-slate-200/80 flex items-center justify-center text-[#171622] shadow-sm transition-all duration-200"
          >
            <Search className="w-5 h-5 text-[#171622]" />
          </button>

          {/* Globe Icon Button */}
          <button
            onClick={onOpenGlobe}
            aria-label="Global weather map"
            className="w-11 h-11 rounded-2xl bg-white hover:bg-purple-50 active:scale-95 border border-slate-200/80 flex items-center justify-center text-[#6250C7] shadow-sm transition-all duration-200"
          >
            <Globe className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 2. Prominent Current-Location Weather Card (Dhaka, Thunderstorm, 20°C) */}
      <div className="my-2">
        <div
          onClick={() => onOpenDetails(currentHeroCity)}
          role="button"
          tabIndex={0}
          className="relative overflow-hidden cursor-pointer rounded-3xl purple-gradient-hero text-white p-6 md:p-7 shadow-purple hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1"
        >
          {/* Subtle Ambient Background Glows */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#3E2F96]/40 rounded-full blur-xl pointer-events-none" />

          {/* Card Top Row: Location & Details Arrow */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <MapPin className="w-4 h-4 text-[#FFCE20]" />
              <span className="text-sm font-semibold tracking-wide">
                {currentHeroCity.name}
              </span>
            </div>

            <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-[#6250C7] transition-all duration-200">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card Center Row: Temperature & Weather Art */}
          <div className="flex items-center justify-between my-4 relative z-10">
            <div>
              {/* Temperature Display */}
              <div className="flex items-baseline leading-none">
                <span className="text-6xl md:text-7xl font-extrabold tracking-tighter">
                  {unit === 'F' ? weatherService.toFahrenheit(currentHeroCity.temp) : currentHeroCity.temp}
                </span>
                <span className="text-4xl md:text-5xl font-light text-white/90 ml-1">
                  °
                </span>
              </div>

              {/* Weather Condition Label */}
              <p className="text-lg md:text-xl font-bold tracking-tight text-white mt-2">
                {currentHeroCity.condition}
              </p>
              <p className="text-xs text-white/80 font-medium">
                {currentHeroCity.conditionLabel}
              </p>
            </div>

            {/* Cloud and Lightning Weather Illustration */}
            <div className="relative -mr-2 scale-110 md:scale-125">
              <WeatherIllustration condition={currentHeroCity.condition} size={150} />
            </div>
          </div>

          {/* Card Bottom Row: Micro-stats & High/Low */}
          <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/85 relative z-10">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 font-medium">
                <Wind className="w-3.5 h-3.5 text-cyan-200" />
                {currentHeroCity.windSpeed} km/h {currentHeroCity.windDir}
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Droplets className="w-3.5 h-3.5 text-cyan-200" />
                {currentHeroCity.humidity}%
              </span>
            </div>
            <div className="font-semibold text-white/95">
              H: {unit === 'F' ? weatherService.toFahrenheit(currentHeroCity.high) : currentHeroCity.high}°  L: {unit === 'F' ? weatherService.toFahrenheit(currentHeroCity.low) : currentHeroCity.low}°
            </div>
          </div>
        </div>
      </div>

      {/* 3. "Around the world" Horizontally Swipeable Carousel */}
      <section className="mt-4 mb-2">
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-lg font-bold text-[#171622]">
            Around the world
          </h3>
          <button
            onClick={onOpenGlobe}
            className="text-xs font-semibold text-[#6250C7] hover:text-[#5140B5] flex items-center gap-0.5 transition-colors"
          >
            <span>See all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex items-center gap-3.5 overflow-x-auto no-scrollbar py-2 px-1 snap-x snap-mandatory scroll-smooth"
        >
          {aroundWorldCities.map((city, index) => {
            const isCityActive = selectedCity.id === city.id;

            return (
              <div
                key={city.id}
                onClick={() => {
                  onSelectCity(city);
                  onOpenDetails(city);
                }}
                role="button"
                tabIndex={0}
                className={`flex-shrink-0 w-[190px] md:w-[205px] snap-start rounded-3xl p-4 md:p-5 cursor-pointer transition-all duration-300 border ${
                  isCityActive
                    ? 'bg-purple-50/70 border-[#6250C7] shadow-md ring-2 ring-[#6250C7]/20'
                    : 'bg-white border-slate-100 hover:border-purple-200 shadow-soft hover:shadow-md'
                } hover:-translate-y-1 flex flex-col justify-between`}
              >
                {/* City Name & Country */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-[#171622] text-base leading-snug">
                      {city.name}
                    </h4>
                    <span className="text-[11px] font-medium text-[#89869A]">
                      {city.country}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {city.condition}
                  </span>
                </div>

                {/* City Weather Art */}
                <div className="my-2 flex items-center justify-center h-20">
                  <WeatherIllustration condition={city.condition} size={85} />
                </div>

                {/* City Temperature & Footer */}
                <div className="flex items-end justify-between pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-2xl font-extrabold text-[#171622] tracking-tight leading-none">
                      {unit === 'F' ? weatherService.toFahrenheit(city.temp) : city.temp}°
                    </span>
                    <span className="text-[11px] text-[#89869A] block mt-0.5">
                      {city.conditionLabel.split(' ')[0]}
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-purple-50 group-hover:bg-[#6250C7] flex items-center justify-center text-[#6250C7] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {aroundWorldCities.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlideIndex === idx
                  ? 'w-6 bg-[#6250C7]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
