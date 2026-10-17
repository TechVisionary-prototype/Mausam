import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
}

export const SunnyIllustration: React.FC<IllustrationProps> = ({ className = '', size = 180 }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-xl"
      >
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop stopColor="#FFF1B8" stopOpacity="0.8" />
            <stop offset="0.6" stopColor="#FFCE20" stopOpacity="0.4" />
            <stop offset="1" stopColor="#FF9F1C" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="sunBall" x1="60" y1="50" x2="140" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF5C0" />
            <stop offset="0.4" stopColor="#FFD027" />
            <stop offset="1" stopColor="#FF9F1C" />
          </linearGradient>

          <linearGradient id="sunCloudGrad" x1="40" y1="80" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.85" stopColor="#F1F5F9" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Ambient Sun Flare Glow */}
        <circle cx="100" cy="100" r="78" fill="url(#sunGlow)" className="animate-pulse-glow" />

        {/* Rotating Subtle Sun Rays */}
        <g opacity="0.65" className="animate-float" style={{ animationDuration: '8s' }}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="100"
              y1="42"
              x2="100"
              y2="28"
              stroke="#FFCE20"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </g>

        {/* Sun Core Ball */}
        <circle cx="100" cy="100" r="46" fill="url(#sunBall)" />
        <ellipse cx="88" cy="84" rx="14" ry="7" fill="#FFFFFF" opacity="0.5" />

        {/* Little passing friendly cloud */}
        <g className="animate-float" style={{ animationDuration: '5s' }}>
          <path
            d="M80 152C70 152 62 144 62 134C62 125 69 117 78 115C80 102 91 92 105 92C118 92 129 100 132 112C134 111 137 110 140 110C151 110 160 119 160 130C160 141 151 150 140 150L80 152Z"
            fill="url(#sunCloudGrad)"
            opacity="0.9"
            filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))"
          />
        </g>
      </svg>
    </div>
  );
};
