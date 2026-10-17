import React, { useState } from 'react';
import { X, Globe, Layers, Wind, Droplets, Thermometer, Gauge, ArrowRight } from 'lucide-react';
import { InteractiveWorldMap } from '../world/InteractiveWorldMap';
import { CityWeather, TemperatureUnit } from '../../types/weather';
import { weatherService } from '../../services/weatherService';
import { WeatherIllustration } from '../illustrations/WeatherIllustration';

interface GlobeMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCity: (city: CityWeather) => void;
  unit: TemperatureUnit;
}

type MapLayer = 'wind' | 'rain' | 'temp' | 'pressure';

export const GlobeMapModal: React.FC<GlobeMapModalProps> = ({
  isOpen,
  onClose,
  onSelectCity,
  unit,
}) => {
  const [activeLayer, setActiveLayer] = useState<MapLayer>('wind');
  const [inspectedCity, setInspectedCity] = useState<CityWeather>(weatherService.getCityById('dhaka'));

  if (!isOpen) return null;

  const layers: { id: MapLayer; label: string; icon: any }[] = [
    { id: 'wind', label: 'Wind Velocity', icon: Wind },
    { id: 'rain', label: 'Precipitation', icon: Droplets },
    { id: 'temp', label: 'Temperature', icon: Thermometer },
    { id: 'pressure', label: 'Barometer', icon: Gauge },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#5140B5] rounded-3xl md:rounded-[36px] w-full max-w-5xl h-[88vh] shadow-2xl border border-white/20 overflow-hidden flex flex-col relative text-white">
        {/* Top Control Bar */}
        <div className="p-4 md:p-5 flex items-center justify-between border-b border-white/15 bg-white/10 backdrop-blur-md relative z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-[#FFCE20]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                Global Atmospheric Radar
              </h3>
              <p className="text-xs text-white/70">
                Ocean currents, jet-stream streamlines, and live satellite markers
              </p>
            </div>
          </div>

          {/* Layer Selector Chips */}
          <div className="hidden md:flex items-center gap-1.5 bg-black/25 p-1 rounded-2xl border border-white/10">
            {layers.map((l) => {
              const Icon = l.icon;
              const isSelected = activeLayer === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => setActiveLayer(l.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#6250C7] text-white shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{l.label}</span>
                </button>
              );
            })}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* World Map Body */}
        <div className="flex-1 relative overflow-hidden">
          <InteractiveWorldMap
            onSelectCity={(city) => setInspectedCity(city)}
            selectedCityId={inspectedCity.id}
            className="w-full h-full"
          />

          {/* Inspected City Floating Inspector Bottom Overlay */}
          <div className="absolute bottom-5 left-4 right-4 md:left-6 md:right-auto md:w-96 z-30">
            <div className="bg-white/95 backdrop-blur-xl text-[#171622] rounded-3xl p-5 shadow-2xl border border-white/50 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6250C7] block">
                    Selected Station
                  </span>
                  <h4 className="text-xl font-extrabold text-[#171622]">
                    {inspectedCity.name}, {inspectedCity.country}
                  </h4>
                  <p className="text-xs text-[#89869A] font-medium">
                    {inspectedCity.conditionLabel}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <WeatherIllustration condition={inspectedCity.condition} size={42} />
                  <span className="text-2xl font-extrabold text-[#171622]">
                    {unit === 'F' ? weatherService.toFahrenheit(inspectedCity.temp) : inspectedCity.temp}°
                  </span>
                </div>
              </div>

              {/* Station metrics */}
              <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 text-center">
                <div>
                  <span className="text-[10px] text-[#89869A] block">Wind</span>
                  <span className="text-xs font-bold text-[#171622]">{inspectedCity.windSpeed} km/h</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#89869A] block">Pressure</span>
                  <span className="text-xs font-bold text-[#171622]">{inspectedCity.pressure} hPa</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#89869A] block">Rain Chance</span>
                  <span className="text-xs font-bold text-cyan-600">{inspectedCity.rainProb}%</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  onSelectCity(inspectedCity);
                  onClose();
                }}
                className="w-full py-2.5 bg-[#6250C7] hover:bg-[#5140B5] active:scale-98 text-white font-semibold text-xs rounded-xl shadow-purple transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Full Weather Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
