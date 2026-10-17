import React from 'react';
import { WeatherCondition } from '../../types/weather';
import { ThunderstormIllustration } from './ThunderstormIllustration';
import { SunnyIllustration } from './SunnyIllustration';
import { CloudyIllustration, RainIllustration, SnowIllustration } from './WeatherIllustrationSet';

interface WeatherIllustrationProps {
  condition: WeatherCondition | string;
  size?: number;
  className?: string;
}

export const WeatherIllustration: React.FC<WeatherIllustrationProps> = ({
  condition,
  size = 140,
  className = '',
}) => {
  const norm = condition.toLowerCase();

  if (norm.includes('thunder') || norm.includes('lightning')) {
    return <ThunderstormIllustration size={size} className={className} />;
  }
  if (norm.includes('sun') || norm.includes('clear')) {
    return <SunnyIllustration size={size} className={className} />;
  }
  if (norm.includes('snow') || norm.includes('ice') || norm.includes('frost')) {
    return <SnowIllustration size={size} className={className} />;
  }
  if (norm.includes('rain') || norm.includes('drizzle') || norm.includes('shower')) {
    return <RainIllustration size={size} className={className} />;
  }
  // Softly cold, cloudy, overcast, default
  return <CloudyIllustration size={size} className={className} />;
};
