import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
}

export const CloudyIllustration: React.FC<IllustrationProps> = ({ className = '', size = 180 }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-xl"
      >
        <defs>
          <linearGradient id="cloudBack2" x1="40" y1="50" x2="160" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CBD5E1" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id="cloudFront2" x1="30" y1="60" x2="160" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.75" stopColor="#F8FAFC" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Back Cloud */}
        <g opacity="0.6" className="animate-float" style={{ animationDuration: '6s' }}>
          <path
            d="M60 115C50 115 42 107 42 97C42 88 48 81 56 79C58 65 70 55 85 55C99 55 111 64 114 77C116 76 119 75 122 75C134 75 144 85 144 97C144 109 134 119 122 119H60V115Z"
            fill="url(#cloudBack2)"
          />
        </g>

        {/* Front Cloud */}
        <g className="animate-float" style={{ animationDuration: '4.5s', animationDelay: '-1.5s' }}>
          <path
            d="M55 145C42 145 32 135 32 122C32 110 41 100 53 98C55 81 70 68 88 68C105 68 119 79 124 94C127 93 130 92 134 92C149 92 161 104 161 119C161 134 149 146 134 146H55V145Z"
            fill="url(#cloudFront2)"
          />
          <ellipse cx="88" cy="78" rx="22" ry="11" fill="#FFFFFF" opacity="0.7" />
          <ellipse cx="134" cy="102" rx="14" ry="7" fill="#FFFFFF" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
};

export const RainIllustration: React.FC<IllustrationProps> = ({ className = '', size = 180 }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-xl"
      >
        <defs>
          <linearGradient id="rainDrop" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>

          <linearGradient id="cloudRainGrad" x1="30" y1="60" x2="160" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F1F5F9" />
            <stop offset="0.75" stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>

        {/* Cloud Body */}
        <g className="animate-float" style={{ animationDuration: '4s' }}>
          <path
            d="M52 125C40 125 30 115 30 103C30 92 38 83 49 81C51 65 65 52 82 52C98 52 111 63 115 77C118 76 121 75 124 75C138 75 150 87 150 101C150 115 138 127 124 127H52V125Z"
            fill="url(#cloudRainGrad)"
          />
          <ellipse cx="82" cy="62" rx="20" ry="10" fill="#FFFFFF" opacity="0.6" />
        </g>

        {/* Cascading Rain Streams */}
        <g opacity="0.9">
          <line x1="56" y1="138" x2="48" y2="160" stroke="url(#rainDrop)" strokeWidth="3" strokeLinecap="round" className="animate-float" style={{ animationDuration: '1.8s' }} />
          <line x1="78" y1="142" x2="70" y2="166" stroke="url(#rainDrop)" strokeWidth="3.5" strokeLinecap="round" className="animate-float" style={{ animationDuration: '2.2s', animationDelay: '-0.7s' }} />
          <line x1="102" y1="138" x2="94" y2="162" stroke="url(#rainDrop)" strokeWidth="3" strokeLinecap="round" className="animate-float" style={{ animationDuration: '1.9s', animationDelay: '-1.3s' }} />
          <line x1="126" y1="140" x2="118" y2="164" stroke="url(#rainDrop)" strokeWidth="3.5" strokeLinecap="round" className="animate-float" style={{ animationDuration: '2.4s', animationDelay: '-0.4s' }} />
          <line x1="144" y1="136" x2="138" y2="154" stroke="url(#rainDrop)" strokeWidth="2.5" strokeLinecap="round" className="animate-float" style={{ animationDuration: '2.6s', animationDelay: '-1.1s' }} />
        </g>
      </svg>
    </div>
  );
};

export const SnowIllustration: React.FC<IllustrationProps> = ({ className = '', size = 180 }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-xl"
      >
        <defs>
          <linearGradient id="cloudSnowGrad" x1="30" y1="60" x2="160" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.7" stopColor="#F1F5F9" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Ambient Icy Blue Glow */}
        <circle cx="100" cy="100" r="70" fill="#E0F2FE" opacity="0.3" filter="blur(20px)" />

        {/* Cloud Body */}
        <g className="animate-float" style={{ animationDuration: '4.5s' }}>
          <path
            d="M52 125C40 125 30 115 30 103C30 92 38 83 49 81C51 65 65 52 82 52C98 52 111 63 115 77C118 76 121 75 124 75C138 75 150 87 150 101C150 115 138 127 124 127H52V125Z"
            fill="url(#cloudSnowGrad)"
          />
          <ellipse cx="82" cy="62" rx="20" ry="10" fill="#FFFFFF" opacity="0.6" />
        </g>

        {/* Floating Snowflakes */}
        <g fill="#BAE6FD" opacity="0.9">
          {[
            { cx: 58, cy: 148, r: 3.5, delay: '0s' },
            { cx: 86, cy: 156, r: 4.5, delay: '-0.8s' },
            { cx: 114, cy: 146, r: 3.5, delay: '-1.4s' },
            { cx: 136, cy: 154, r: 4, delay: '-0.5s' },
            { cx: 72, cy: 172, r: 3, delay: '-1.1s' },
            { cx: 104, cy: 175, r: 3, delay: '-1.7s' },
          ].map((flake, idx) => (
            <circle
              key={idx}
              cx={flake.cx}
              cy={flake.cy}
              r={flake.r}
              className="animate-float"
              style={{ animationDuration: '3s', animationDelay: flake.delay }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
