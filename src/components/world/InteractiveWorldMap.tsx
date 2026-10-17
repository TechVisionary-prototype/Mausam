import React, { useState } from 'react';
import { CITIES_DATA } from '../../services/weatherService';
import { CityWeather } from '../../types/weather';

interface InteractiveWorldMapProps {
  onSelectCity?: (city: CityWeather) => void;
  selectedCityId?: string;
  className?: string;
  interactive?: boolean;
}

export const InteractiveWorldMap: React.FC<InteractiveWorldMapProps> = ({
  onSelectCity,
  selectedCityId,
  className = '',
  interactive = true,
}) => {
  const [hoveredCity, setHoveredCity] = useState<CityWeather | null>(null);

  return (
    <div className={`relative w-full h-full overflow-hidden select-none bg-gradient-to-b from-[#5140B5] via-[#4332A6] to-[#34248B] ${className}`}>
      {/* Background Radial Light Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#6250C7] rounded-full blur-[100px] opacity-40 pointer-events-none" />

      {/* SVG Map Canvas */}
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full object-cover md:object-contain"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Grid Line Pattern */}
          <pattern id="worldGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" />
          </pattern>

          {/* Landmass Gradient */}
          <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#4834D4" stopOpacity="0.65" />
          </linearGradient>

          {/* Glow Filter for Markers */}
          <filter id="markerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Latitude / Longitude Subtle Coordinates Grid */}
        <rect width="1000" height="600" fill="url(#worldGrid)" />

        {/* Equator and Prime Meridian Accent Lines */}
        <line x1="0" y1="300" x2="1000" y2="300" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="500" y1="0" x2="500" y2="600" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Stylized World Map Continents */}
        <g fill="url(#landGrad)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" className="filter drop-shadow-md">
          {/* North America */}
          <path d="M120 110 C 160 90, 240 100, 270 140 C 290 170, 310 180, 270 230 C 240 270, 190 280, 160 250 C 130 220, 100 240, 110 180 Z" />
          {/* Alaska / Northwest */}
          <path d="M70 110 C 100 95, 130 110, 120 140 C 95 150, 75 130, 70 110 Z" />
          {/* Greenland */}
          <path d="M360 80 C 400 70, 440 90, 430 130 C 390 140, 360 120, 360 80 Z" />
          {/* South America */}
          <path d="M250 310 C 290 300, 340 330, 340 390 C 340 450, 290 520, 270 540 C 260 520, 250 440, 240 380 C 230 340, 230 320, 250 310 Z" />
          {/* Europe */}
          <path d="M470 150 C 510 140, 560 145, 570 190 C 550 210, 500 220, 480 200 C 460 180, 455 160, 470 150 Z" />
          <path d="M450 170 C 470 160, 480 180, 460 195 C 445 190, 440 180, 450 170 Z" />
          {/* Africa */}
          <path d="M480 235 C 540 230, 590 260, 590 330 C 590 400, 540 460, 520 470 C 490 470, 470 410, 465 350 C 460 290, 460 250, 480 235 Z" />
          {/* Asia */}
          <path d="M580 130 C 660 110, 800 120, 850 180 C 880 220, 860 290, 820 310 C 760 340, 720 360, 680 320 C 650 290, 620 300, 610 260 C 600 210, 560 170, 580 130 Z" />
          {/* Indian Subcontinent (Dhaka region distinct) */}
          <path d="M680 280 C 720 270, 750 310, 740 360 C 720 390, 700 370, 680 340 C 670 310, 670 290, 680 280 Z" />
          {/* Southeast Asia Islands */}
          <path d="M780 360 C 830 350, 850 380, 820 400 C 790 400, 780 380, 780 360 Z" />
          <path d="M820 410 C 850 405, 870 430, 840 440 C 820 435, 810 420, 820 410 Z" />
          {/* Australia */}
          <path d="M810 450 C 880 430, 930 460, 920 510 C 890 550, 830 550, 800 520 C 790 480, 790 460, 810 450 Z" />
        </g>

        {/* Global Ocean Currents & Wind Streamlines */}
        <g stroke="rgba(34, 211, 238, 0.35)" strokeWidth="1.5" strokeDasharray="8 6" className="animate-wind">
          <path d="M 120 220 Q 300 240 500 210 T 850 240" fill="none" />
          <path d="M 200 350 Q 400 370 650 340 T 950 380" fill="none" stroke="rgba(255, 206, 32, 0.3)" />
          <path d="M 50 420 Q 350 460 600 440 T 920 470" fill="none" />
          <path d="M 300 130 Q 550 110 750 150" fill="none" />
        </g>

        {/* Glowing Weather Markers for Key Cities */}
        {CITIES_DATA.map((city) => {
          const cx = (city.coordinates.xPercent / 100) * 1000;
          const cy = (city.coordinates.yPercent / 100) * 600;
          const isSelected = selectedCityId === city.id;
          const isHovered = hoveredCity?.id === city.id;

          const isThunder = city.condition.toLowerCase().includes('thunder');
          const isSun = city.condition.toLowerCase().includes('sun');
          const markerColor = isThunder ? '#22D3EE' : isSun ? '#FFCE20' : '#FFFFFF';

          return (
            <g
              key={city.id}
              className="cursor-pointer transition-transform duration-300"
              onClick={() => onSelectCity && onSelectCity(city)}
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
              transform={`translate(${cx}, ${cy})`}
            >
              {/* Outer Pulsing Ripple */}
              <circle
                r="18"
                fill="none"
                stroke={markerColor}
                strokeWidth="1.5"
                opacity="0.6"
                className="animate-ripple"
              />

              {/* Middle Glow Circle */}
              <circle
                r="8"
                fill={markerColor}
                opacity={isSelected || isHovered ? 0.9 : 0.45}
                filter="url(#markerGlow)"
              />

              {/* Inner Solid Marker Dot */}
              <circle
                r={isSelected || isHovered ? 5 : 3.5}
                fill="#FFFFFF"
                stroke={markerColor}
                strokeWidth="1.5"
              />

              {/* Weather Data Pill Floating Above Marker */}
              <g
                transform={`translate(0, ${isHovered || isSelected ? -32 : -24})`}
                className="transition-all duration-300"
              >
                <rect
                  x="-42"
                  y="-14"
                  width="84"
                  height="24"
                  rx="12"
                  fill={isSelected ? '#6250C7' : 'rgba(23, 22, 34, 0.85)'}
                  stroke={isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.25)'}
                  strokeWidth="1"
                  filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                />
                <text
                  x="0"
                  y="2"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                >
                  {city.name} {city.temp}°
                </text>
              </g>
            </g>
          );
        })}
      </svg>

      {/* Floating Interactive Legend / Status Tag */}
      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-xs text-white/90">
        <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
        <span className="font-medium tracking-wide">Live Global Radar Stream</span>
      </div>
    </div>
  );
};
