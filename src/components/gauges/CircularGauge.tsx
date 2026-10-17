import React from 'react';

interface CircularGaugeProps {
  value: number;
  min: number;
  max: number;
  unit: string;
  label: string;
  subLabel?: string;
  statusBadge?: string;
  colorStart?: string;
  colorEnd?: string;
  gradientId: string;
  size?: number;
  strokeWidth?: number;
}

export const CircularGauge: React.FC<CircularGaugeProps> = ({
  value,
  min,
  max,
  unit,
  label,
  subLabel,
  statusBadge,
  colorStart = '#6250C7',
  colorEnd = '#22D3EE',
  gradientId,
  size = 140,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  // Use a 240-degree open arc for a sleek speedometer/gauge look
  const arcLength = circumference * 0.72;
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = (clampedValue - min) / (max - min);
  const strokeDashoffset = arcLength * (1 - percentage);

  // Center coordinate
  const center = size / 2;

  // Calculate needle/dot tip angle for indicator
  // Arc starts at 144 deg (bottom-left) and sweeps 259 deg to bottom-right
  const startAngleDeg = 140;
  const sweepAngleDeg = 260;
  const currentAngleDeg = startAngleDeg + sweepAngleDeg * percentage;
  const currentAngleRad = (currentAngleDeg * Math.PI) / 180;
  const dotX = center + radius * Math.cos(currentAngleRad);
  const dotY = center + radius * Math.sin(currentAngleRad);

  return (
    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-md transition-all duration-300">
      <div className="w-full flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#89869A]">{label}</span>
        {statusBadge && (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-purple-50 text-[#6250C7] border border-purple-100/60">
            {statusBadge}
          </span>
        )}
      </div>

      <div className="relative flex items-center justify-center my-1" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorStart} />
              <stop offset="100%" stopColor={colorEnd} />
            </linearGradient>

            <filter id={`glow-${gradientId}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Arc */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#F1F0F5"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
            className="transform origin-center rotate-[40deg]"
          />

          {/* Active Gradient Arc */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="gauge-circle transform origin-center rotate-[40deg]"
            filter={`url(#glow-${gradientId})`}
          />
        </svg>

        {/* Center Metric Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-2xl font-bold tracking-tight text-[#171622] leading-none">
            {value}
          </span>
          <span className="text-xs font-medium text-[#89869A] mt-0.5">
            {unit}
          </span>
          {subLabel && (
            <span className="text-[10px] font-semibold text-[#6250C7] mt-0.5">
              {subLabel}
            </span>
          )}
        </div>
      </div>

      {/* Min / Max Range Markers */}
      <div className="w-full flex items-center justify-between text-[10px] text-[#89869A] px-2 pt-1 border-t border-slate-50">
        <span>{min} {unit}</span>
        <span className="font-medium text-[#171622]">Avg</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
};
