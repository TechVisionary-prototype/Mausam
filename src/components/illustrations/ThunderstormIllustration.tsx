import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
}

export const ThunderstormIllustration: React.FC<IllustrationProps> = ({ className = '', size = 180 }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-xl"
      >
        <defs>
          {/* Cloud Gradients */}
          <linearGradient id="cloudBackGrad" x1="40" y1="50" x2="160" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E2E8F0" />
            <stop offset="0.6" stopColor="#CBD5E1" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id="cloudFrontGrad" x1="30" y1="60" x2="150" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.7" stopColor="#F1F5F9" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>

          {/* Lightning Glow */}
          <linearGradient id="lightningGrad" x1="90" y1="90" x2="120" y2="175" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF7D6" />
            <stop offset="0.3" stopColor="#FFDE43" />
            <stop offset="1" stopColor="#FFB800" />
          </linearGradient>

          <filter id="lightningGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="rainDropGrad" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* Ambient Back Glow */}
        <circle cx="100" cy="100" r="70" fill="#FFDE43" opacity="0.12" filter="blur(20px)" />

        {/* Back Cloud */}
        <g opacity="0.75" className="animate-float" style={{ animationDuration: '6s' }}>
          <path
            d="M75 110C65 110 57 102 57 92C57 83 63 76 71 74C73 60 85 50 100 50C114 50 126 59 129 72C131 71 133 71 135 71C147 71 157 81 157 93C157 105 147 115 135 115H75Z"
            fill="url(#cloudBackGrad)"
          />
        </g>

        {/* Dynamic Lightning Bolt */}
        <g filter="url(#lightningGlow)" className="animate-lightning">
          <path
            d="M106 88L88 126H104L94 166L126 118H110L118 88H106Z"
            fill="url(#lightningGrad)"
            stroke="#FFF9E5"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Front Main Cloud */}
        <g className="animate-float" style={{ animationDuration: '4.5s', animationDelay: '-1s' }}>
          {/* Cloud Shadow Layer */}
          <path
            d="M50 135 C38 135 28 125 28 113 C28 102 36 93 47 91 C49 75 63 62 80 62 C96 62 109 73 113 87 C116 86 119 85 122 85 C136 85 148 97 148 111 C148 125 136 137 122 137 L50 135 Z"
            fill="black"
            opacity="0.08"
            transform="translate(0, 4)"
          />
          {/* Cloud Body */}
          <path
            d="M52 135C40 135 30 125 30 113C30 102 38 93 49 91C51 75 65 62 82 62C98 62 111 73 115 87C118 86 121 85 124 85C138 85 150 97 150 111C150 125 138 137 124 137H52Z"
            fill="url(#cloudFrontGrad)"
          />
          {/* Highlights on Cloud Top */}
          <ellipse cx="82" cy="72" rx="20" ry="10" fill="#FFFFFF" opacity="0.6" />
          <ellipse cx="124" cy="94" rx="14" ry="7" fill="#FFFFFF" opacity="0.5" />
        </g>

        {/* Raindrops with Cyan Accent */}
        <g opacity="0.85">
          <line x1="58" y1="146" x2="52" y2="162" stroke="url(#rainDropGrad)" strokeWidth="3" strokeLinecap="round" className="animate-float" style={{ animationDuration: '2s' }} />
          <line x1="78" y1="150" x2="72" y2="168" stroke="url(#rainDropGrad)" strokeWidth="3.5" strokeLinecap="round" className="animate-float" style={{ animationDuration: '2.4s', animationDelay: '-0.8s' }} />
          <line x1="130" y1="145" x2="124" y2="163" stroke="url(#rainDropGrad)" strokeWidth="3" strokeLinecap="round" className="animate-float" style={{ animationDuration: '2.1s', animationDelay: '-1.2s' }} />
          <line x1="146" y1="148" x2="140" y2="164" stroke="url(#rainDropGrad)" strokeWidth="2.5" strokeLinecap="round" className="animate-float" style={{ animationDuration: '2.7s', animationDelay: '-0.4s' }} />
        </g>
      </svg>
    </div>
  );
};
