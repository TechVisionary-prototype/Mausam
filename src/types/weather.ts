export type WeatherCondition =
  | 'Thunderstorm'
  | 'Sunny'
  | 'Clear'
  | 'Partly Cloudy'
  | 'Cloudy'
  | 'Overcast'
  | 'Rain'
  | 'Heavy Rain'
  | 'Softly Cold'
  | 'Snow'
  | 'Windy'
  | 'Haze';

export interface HourlyForecast {
  time: string;
  temp: number;
  condition: WeatherCondition;
  rainProb: number;
}

export interface DailyForecast {
  day: string;
  date: string;
  high: number;
  low: number;
  condition: WeatherCondition;
  rainProb: number;
}

export interface CityWeather {
  id: string;
  name: string;
  district?: string;
  region: string;
  country: string;
  temp: number;
  feelsLike: number;
  high: number;
  low: number;
  condition: WeatherCondition;
  conditionLabel: string;
  description: string;
  windSpeed: number; // km/h
  windDir: string;
  windGust: number; // km/h
  pressure: number; // hPa
  pressureTrend: 'falling' | 'stable' | 'rising';
  humidity: number; // %
  uv: number;
  uvStatus: 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme';
  visibility: number; // km
  airQuality: number; // AQI
  rainProb: number; // %
  oceanCondition?: string;
  coordinates: {
    lat: number;
    lng: number;
    xPercent: number; // For SVG world map coordinate (0 to 100)
    yPercent: number; // For SVG world map coordinate (0 to 100)
  };
  hourly: HourlyForecast[];
  forecast: DailyForecast[];
}

export type ForecastPeriod = 'Today' | 'Tomorrow' | 'Next 7 Days';

export type TemperatureUnit = 'C' | 'F';
