import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { CityWeather, TemperatureUnit } from '../../types/weather';
import { weatherService, CITIES_DATA } from '../../services/weatherService';
import { WeatherIllustration } from '../illustrations/WeatherIllustration';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCity: (city: CityWeather) => void;
  unit: TemperatureUnit;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCity,
  unit,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredCities = weatherService.searchCities(query);

  const quickCities = ['Dhaka', 'California', 'Beijing', 'Moscow', 'London'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 md:pt-24 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header & Input */}
        <div className="p-4 md:p-5 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-[#6250C7]">
            <Search className="w-5 h-5" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city, region, or condition..."
            className="flex-1 text-base md:text-lg font-medium text-[#171622] placeholder-[#89869A] bg-transparent focus:outline-none"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-600 transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Quick Suggestions Chips */}
        <div className="px-5 py-2.5 bg-slate-50/70 border-b border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-semibold text-[#89869A] flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#6250C7]" /> Quick:
          </span>
          {quickCities.map((cityName) => (
            <button
              key={cityName}
              onClick={() => setQuery(cityName)}
              className="text-xs px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#6250C7] hover:text-[#6250C7] font-medium transition-colors"
            >
              {cityName}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-3 md:p-4 overflow-y-auto space-y-2 flex-1">
          {filteredCities.length === 0 ? (
            <div className="py-12 text-center text-[#89869A]">
              <p className="text-sm font-medium">No weather stations matched "{query}"</p>
              <p className="text-xs mt-1 text-slate-400">Try searching Dhaka, California, Beijing, or Moscow</p>
            </div>
          ) : (
            filteredCities.map((city) => (
              <div
                key={city.id}
                onClick={() => {
                  onSelectCity(city);
                  onClose();
                }}
                className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-purple-50/60 border border-transparent hover:border-purple-100 cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <WeatherIllustration condition={city.condition} size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171622] group-hover:text-[#6250C7] transition-colors">
                      {city.name}
                    </h4>
                    <span className="text-xs text-[#89869A] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#89869A]" />
                      {city.country} · {city.condition}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-lg font-extrabold text-[#171622]">
                    {unit === 'F' ? weatherService.toFahrenheit(city.temp) : city.temp}°
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-slate-200 group-hover:bg-[#6250C7] group-hover:border-[#6250C7] group-hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
