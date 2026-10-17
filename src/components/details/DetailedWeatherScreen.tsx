import React, { useState } from 'react';
import { ArrowLeft, LayoutGrid, ChevronDown, Check, Droplets, Eye, Sun, Navigation } from 'lucide-react';
import { CityWeather, ForecastPeriod, TemperatureUnit } from '../../types/weather';
import { weatherService } from '../../services/weatherService';
import { CircularGauge } from '../gauges/CircularGauge';
import { WeatherIllustration } from '../illustrations/WeatherIllustration';

interface DetailedWeatherScreenProps {
  city?: CityWeather;
  onBack: () => void;
  unit: TemperatureUnit;
}

export const DetailedWeatherScreen: React.FC<DetailedWeatherScreenProps> = ({
  city,
  onBack,
  unit,
}) => {
  // Fallback to Dhaka if no city passed
  const activeCity = city || weatherService.getCityById('dhaka');

  const [period, setPeriod] = useState<ForecastPeriod>('Today');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const periods: ForecastPeriod[] = ['Today', 'Tomorrow', 'Next 7 Days'];

  // Adjust display temperature based on period
  let displayTemp = activeCity.temp;
  let displayCondition = activeCity.condition;
  let displayConditionLabel = activeCity.conditionLabel;

  if (period === 'Tomorrow') {
    const tmrw = activeCity.forecast[1];
    if (tmrw) {
      displayTemp = tmrw.high;
      displayCondition = tmrw.condition;
      displayConditionLabel = `${tmrw.condition} skies`;
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-between p-5 md:p-7 max-w-xl mx-auto overflow-y-auto no-scrollbar">
      {/* 1. Compact Top Navigation Bar */}
      <nav className="flex items-center justify-between pt-2 pb-4 relative z-30">
        <div className="flex items-center gap-2">
          {/* Back Button */}
          <button
            onClick={onBack}
            aria-label="Back to dashboard"
            className="w-10 h-10 rounded-2xl bg-white hover:bg-slate-50 active:scale-95 border border-slate-200/80 flex items-center justify-center text-[#171622] shadow-sm transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Grid/Menu Icon */}
          <button
            aria-label="Menu"
            className="w-10 h-10 rounded-2xl bg-white hover:bg-slate-50 active:scale-95 border border-slate-200/80 flex items-center justify-center text-[#171622] shadow-sm transition-all"
          >
            <LayoutGrid className="w-4 h-4 text-[#89869A]" />
          </button>
        </div>

        {/* "Today" Interactive Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/80 text-sm font-bold text-[#171622] shadow-sm transition-all"
          >
            <span>{period}</span>
            <ChevronDown className={`w-4 h-4 text-[#89869A] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-12 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 p-1.5 z-40 animate-fadeIn">
              {periods.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setPeriod(item);
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    period === item
                      ? 'bg-purple-50 text-[#6250C7]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item}</span>
                  {period === item && <Check className="w-3.5 h-3.5 text-[#6250C7]" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* 2. Large Purple Weather Hero Card */}
      <div className="my-2">
        <div className="relative overflow-hidden rounded-3xl purple-gradient-hero text-white p-7 md:p-8 shadow-purple transition-all duration-300">
          {/* Ambient Lighting Circles */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3E2F96]/50 rounded-full blur-2xl pointer-events-none" />

          {/* Location & Region Badge */}
          <div className="flex items-center justify-between relative z-10 mb-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-200 block">
                {activeCity.country}
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                {activeCity.district || activeCity.name}
              </h2>
            </div>

            <div className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
              Live Station
            </div>
          </div>

          {/* Center Weather Illustration & Huge Temperature */}
          <div className="flex items-center justify-between my-5 relative z-10">
            {/* Prominent Weather Illustration */}
            <div className="scale-110 md:scale-125 transform -ml-1">
              <WeatherIllustration condition={displayCondition} size={150} />
            </div>

            <div className="text-right">
              <div className="flex items-baseline justify-end leading-none">
                <span className="text-6xl md:text-7xl font-extrabold tracking-tighter">
                  {unit === 'F' ? weatherService.toFahrenheit(displayTemp) : displayTemp}
                </span>
                <span className="text-4xl md:text-5xl font-light text-white/90 ml-1">
                  °
                </span>
              </div>

              {/* Condition Label: e.g. "Softly cold" */}
              <p className="text-lg md:text-xl font-bold tracking-tight text-white mt-2">
                {displayConditionLabel}
              </p>
              <p className="text-xs text-white/80 font-medium">
                Feels like {unit === 'F' ? weatherService.toFahrenheit(activeCity.feelsLike) : activeCity.feelsLike}°
              </p>
            </div>
          </div>

          {/* Micro stats banner */}
          <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/85 relative z-10">
            <span className="flex items-center gap-1 font-medium">
              <Droplets className="w-3.5 h-3.5 text-cyan-200" />
              Precipitation: {activeCity.rainProb}%
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Sun className="w-3.5 h-3.5 text-yellow-200" />
              UV Index: {activeCity.uv} ({activeCity.uvStatus})
            </span>
          </div>
        </div>
      </div>

      {/* 3. "Weather now" Section with Circular Gauges */}
      <section className="mt-4 mb-2">
        <h3 className="text-lg font-bold text-[#171622] mb-3 px-1">
          Weather now
        </h3>

        {/* Two Information Cards: Wind and Pressure */}
        <div className="grid grid-cols-2 gap-3.5">
          {/* 1. Wind Card */}
          <CircularGauge
            value={activeCity.windSpeed}
            min={0}
            max={50}
            unit="km/h"
            label="Wind"
            subLabel={activeCity.windDir}
            statusBadge="Breezy"
            gradientId="windGaugeGrad"
            colorStart="#6250C7"
            colorEnd="#22D3EE"
            size={130}
          />

          {/* 2. Pressure Card */}
          <CircularGauge
            value={activeCity.pressure}
            min={980}
            max={1040}
            unit="hPa"
            label="Pressure"
            subLabel={activeCity.pressureTrend === 'stable' ? 'Stable' : 'Shifting'}
            statusBadge="Normal"
            gradientId="pressureGaugeGrad"
            colorStart="#5140B5"
            colorEnd="#6250C7"
            size={130}
          />
        </div>
      </section>

      {/* 4. Forecast Section: Hourly or 7-Day depending on period */}
      <section className="mt-3 mb-1">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <h4 className="text-sm font-bold text-[#171622]">
            {period === 'Next 7 Days' ? '7-Day Outlook' : 'Hourly Breakdown'}
          </h4>
          <span className="text-xs text-[#89869A]">
            {period === 'Next 7 Days' ? 'Daily High & Low' : 'Next 12 Hours'}
          </span>
        </div>

        {period === 'Next 7 Days' ? (
          /* 7-Day Forecast Cards */
          <div className="space-y-2">
            {activeCity.forecast.map((f, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100 shadow-soft"
              >
                <div className="w-20">
                  <span className="font-bold text-xs text-[#171622] block">{f.day}</span>
                  <span className="text-[10px] text-[#89869A]">{f.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <WeatherIllustration condition={f.condition} size={28} />
                  <span className="text-xs font-semibold text-slate-700">{f.condition}</span>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-[#171622]">
                    {unit === 'F' ? weatherService.toFahrenheit(f.high) : f.high}°
                  </span>
                  <span className="text-[11px] text-[#89869A] ml-2">
                    {unit === 'F' ? weatherService.toFahrenheit(f.low) : f.low}°
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Hourly Forecast Pills */
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
            {activeCity.hourly.map((h, i) => (
              <div
                key={i}
                className={`flex-shrink-0 flex flex-col items-center justify-between p-3 w-16 rounded-2xl border transition-all ${
                  i === 0
                    ? 'bg-[#6250C7] text-white border-[#6250C7] shadow-purple'
                    : 'bg-white text-[#171622] border-slate-100 shadow-soft'
                }`}
              >
                <span className={`text-[11px] font-medium ${i === 0 ? 'text-white/80' : 'text-[#89869A]'}`}>
                  {h.time}
                </span>

                <div className="my-1.5">
                  <WeatherIllustration condition={h.condition} size={30} />
                </div>

                <span className="text-sm font-bold">
                  {unit === 'F' ? weatherService.toFahrenheit(h.temp) : h.temp}°
                </span>

                <span className={`text-[9px] font-semibold mt-0.5 ${i === 0 ? 'text-cyan-200' : 'text-[#22D3EE]'}`}>
                  {h.rainProb}%
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
