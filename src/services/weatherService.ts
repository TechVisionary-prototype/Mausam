import { CityWeather, WeatherCondition } from '../types/weather';

export const CITIES_DATA: CityWeather[] = [
  {
    id: 'dhaka',
    name: 'Dhaka',
    district: 'Rampura, Dhaka',
    region: 'Dhaka Division',
    country: 'Bangladesh',
    temp: 20,
    feelsLike: 19,
    high: 24,
    low: 18,
    condition: 'Thunderstorm',
    conditionLabel: 'Softly cold',
    description: 'Active convective thunder cells with mild cooling breeze across northern Rampura.',
    windSpeed: 19,
    windDir: 'NW',
    windGust: 28,
    pressure: 1012,
    pressureTrend: 'stable',
    humidity: 78,
    uv: 3,
    uvStatus: 'Moderate',
    visibility: 6.5,
    airQuality: 68,
    rainProb: 85,
    oceanCondition: 'Moderate Chop (Bay of Bengal)',
    coordinates: {
      lat: 23.8103,
      lng: 90.4125,
      xPercent: 71.5,
      yPercent: 47.8,
    },
    hourly: [
      { time: '12 PM', temp: 21, condition: 'Thunderstorm', rainProb: 80 },
      { time: '2 PM', temp: 20, condition: 'Heavy Rain', rainProb: 90 },
      { time: '4 PM', temp: 20, condition: 'Thunderstorm', rainProb: 85 },
      { time: '6 PM', temp: 19, condition: 'Rain', rainProb: 65 },
      { time: '8 PM', temp: 18, condition: 'Softly Cold', rainProb: 30 },
      { time: '10 PM', temp: 18, condition: 'Cloudy', rainProb: 20 },
    ],
    forecast: [
      { day: 'Today', date: '25 Sep', high: 24, low: 18, condition: 'Thunderstorm', rainProb: 85 },
      { day: 'Fri', date: '26 Sep', high: 26, low: 19, condition: 'Rain', rainProb: 60 },
      { day: 'Sat', date: '27 Sep', high: 28, low: 20, condition: 'Partly Cloudy', rainProb: 25 },
      { day: 'Sun', date: '28 Sep', high: 29, low: 21, condition: 'Sunny', rainProb: 10 },
      { day: 'Mon', date: '29 Sep', high: 30, low: 22, condition: 'Sunny', rainProb: 15 },
      { day: 'Tue', date: '30 Sep', high: 29, low: 21, condition: 'Partly Cloudy', rainProb: 30 },
      { day: 'Wed', date: '01 Oct', high: 27, low: 20, condition: 'Rain', rainProb: 45 },
    ],
  },
  {
    id: 'california',
    name: 'California',
    district: 'San Francisco, CA',
    region: 'California',
    country: 'United States',
    temp: 28,
    feelsLike: 29,
    high: 31,
    low: 19,
    condition: 'Sunny',
    conditionLabel: 'Clear and Sun-drenched',
    description: 'Golden sunshine and coastal dry breeze sweeping across the bay area.',
    windSpeed: 14,
    windDir: 'W',
    windGust: 20,
    pressure: 1018,
    pressureTrend: 'rising',
    humidity: 42,
    uv: 8,
    uvStatus: 'Very High',
    visibility: 10.0,
    airQuality: 35,
    rainProb: 0,
    oceanCondition: 'Gentle Swell (Pacific Coast)',
    coordinates: {
      lat: 36.7783,
      lng: -119.4179,
      xPercent: 18.2,
      yPercent: 40.5,
    },
    hourly: [
      { time: '12 PM', temp: 28, condition: 'Sunny', rainProb: 0 },
      { time: '2 PM', temp: 31, condition: 'Sunny', rainProb: 0 },
      { time: '4 PM', temp: 30, condition: 'Sunny', rainProb: 0 },
      { time: '6 PM', temp: 26, condition: 'Clear', rainProb: 0 },
      { time: '8 PM', temp: 23, condition: 'Clear', rainProb: 0 },
      { time: '10 PM', temp: 20, condition: 'Clear', rainProb: 0 },
    ],
    forecast: [
      { day: 'Today', date: '25 Sep', high: 31, low: 19, condition: 'Sunny', rainProb: 0 },
      { day: 'Fri', date: '26 Sep', high: 32, low: 20, condition: 'Sunny', rainProb: 0 },
      { day: 'Sat', date: '27 Sep', high: 30, low: 19, condition: 'Partly Cloudy', rainProb: 5 },
      { day: 'Sun', date: '28 Sep', high: 29, low: 18, condition: 'Sunny', rainProb: 0 },
      { day: 'Mon', date: '29 Sep', high: 28, low: 17, condition: 'Clear', rainProb: 0 },
      { day: 'Tue', date: '30 Sep', high: 29, low: 18, condition: 'Sunny', rainProb: 0 },
      { day: 'Wed', date: '01 Oct', high: 31, low: 19, condition: 'Sunny', rainProb: 0 },
    ],
  },
  {
    id: 'beijing',
    name: 'Beijing',
    district: 'Chaoyang, Beijing',
    region: 'Beijing Municipality',
    country: 'China',
    temp: 15,
    feelsLike: 14,
    high: 18,
    low: 11,
    condition: 'Cloudy',
    conditionLabel: 'Crisp Overcast',
    description: 'High altitude stratocumulus coverage with mild continental cooling.',
    windSpeed: 12,
    windDir: 'NNE',
    windGust: 18,
    pressure: 1024,
    pressureTrend: 'stable',
    humidity: 55,
    uv: 4,
    uvStatus: 'Moderate',
    visibility: 8.0,
    airQuality: 74,
    rainProb: 15,
    oceanCondition: 'Calm (Bohai Bay)',
    coordinates: {
      lat: 39.9042,
      lng: 116.4074,
      xPercent: 78.4,
      yPercent: 37.2,
    },
    hourly: [
      { time: '12 PM', temp: 15, condition: 'Cloudy', rainProb: 10 },
      { time: '2 PM', temp: 18, condition: 'Cloudy', rainProb: 15 },
      { time: '4 PM', temp: 17, condition: 'Overcast', rainProb: 20 },
      { time: '6 PM', temp: 14, condition: 'Cloudy', rainProb: 15 },
      { time: '8 PM', temp: 12, condition: 'Partly Cloudy', rainProb: 10 },
      { time: '10 PM', temp: 11, condition: 'Clear', rainProb: 5 },
    ],
    forecast: [
      { day: 'Today', date: '25 Sep', high: 18, low: 11, condition: 'Cloudy', rainProb: 15 },
      { day: 'Fri', date: '26 Sep', high: 19, low: 12, condition: 'Partly Cloudy', rainProb: 10 },
      { day: 'Sat', date: '27 Sep', high: 21, low: 13, condition: 'Sunny', rainProb: 5 },
      { day: 'Sun', date: '28 Sep', high: 20, low: 12, condition: 'Sunny', rainProb: 0 },
      { day: 'Mon', date: '29 Sep', high: 17, low: 10, condition: 'Windy', rainProb: 10 },
      { day: 'Tue', date: '30 Sep', high: 16, low: 9, condition: 'Partly Cloudy', rainProb: 15 },
      { day: 'Wed', date: '01 Oct', high: 18, low: 10, condition: 'Sunny', rainProb: 5 },
    ],
  },
  {
    id: 'moscow',
    name: 'Moscow',
    district: 'Central Okrug, Moscow',
    region: 'Moscow Oblast',
    country: 'Russia',
    temp: -2,
    feelsLike: -6,
    high: 1,
    low: -5,
    condition: 'Snow',
    conditionLabel: 'Sub-Zero Frost',
    description: 'Crisp northern snowfall with icy polar air mass moving south-east.',
    windSpeed: 22,
    windDir: 'N',
    windGust: 34,
    pressure: 1008,
    pressureTrend: 'falling',
    humidity: 86,
    uv: 1,
    uvStatus: 'Low',
    visibility: 4.2,
    airQuality: 28,
    rainProb: 75,
    oceanCondition: 'Frozen Ice Pack (Baltic Northern)',
    coordinates: {
      lat: 55.7558,
      lng: 37.6173,
      xPercent: 58.2,
      yPercent: 26.5,
    },
    hourly: [
      { time: '12 PM', temp: 0, condition: 'Snow', rainProb: 70 },
      { time: '2 PM', temp: 1, condition: 'Snow', rainProb: 80 },
      { time: '4 PM', temp: -1, condition: 'Snow', rainProb: 75 },
      { time: '6 PM', temp: -3, condition: 'Cloudy', rainProb: 50 },
      { time: '8 PM', temp: -4, condition: 'Snow', rainProb: 60 },
      { time: '10 PM', temp: -5, condition: 'Snow', rainProb: 65 },
    ],
    forecast: [
      { day: 'Today', date: '25 Sep', high: 1, low: -5, condition: 'Snow', rainProb: 75 },
      { day: 'Fri', date: '26 Sep', high: 0, low: -6, condition: 'Snow', rainProb: 60 },
      { day: 'Sat', date: '27 Sep', high: -2, low: -8, condition: 'Partly Cloudy', rainProb: 20 },
      { day: 'Sun', date: '28 Sep', high: -1, low: -7, condition: 'Snow', rainProb: 45 },
      { day: 'Mon', date: '29 Sep', high: 2, low: -4, condition: 'Overcast', rainProb: 30 },
      { day: 'Tue', date: '30 Sep', high: 1, low: -5, condition: 'Snow', rainProb: 65 },
      { day: 'Wed', date: '01 Oct', high: -1, low: -6, condition: 'Snow', rainProb: 80 },
    ],
  },
  {
    id: 'london',
    name: 'London',
    district: 'Westminster, London',
    region: 'Greater London',
    country: 'United Kingdom',
    temp: 14,
    feelsLike: 13,
    high: 17,
    low: 10,
    condition: 'Rain',
    conditionLabel: 'Gentle British Drizzle',
    description: 'Passing Atlantic maritime front bringing intermittent soft showers.',
    windSpeed: 18,
    windDir: 'SSW',
    windGust: 26,
    pressure: 1015,
    pressureTrend: 'stable',
    humidity: 82,
    uv: 3,
    uvStatus: 'Moderate',
    visibility: 7.2,
    airQuality: 40,
    rainProb: 65,
    oceanCondition: 'Rough Seas (English Channel)',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278,
      xPercent: 48.6,
      yPercent: 30.1,
    },
    hourly: [
      { time: '12 PM', temp: 14, condition: 'Rain', rainProb: 70 },
      { time: '2 PM', temp: 16, condition: 'Rain', rainProb: 60 },
      { time: '4 PM', temp: 15, condition: 'Cloudy', rainProb: 40 },
      { time: '6 PM', temp: 13, condition: 'Rain', rainProb: 50 },
      { time: '8 PM', temp: 11, condition: 'Overcast', rainProb: 30 },
      { time: '10 PM', temp: 10, condition: 'Cloudy', rainProb: 20 },
    ],
    forecast: [
      { day: 'Today', date: '25 Sep', high: 17, low: 10, condition: 'Rain', rainProb: 65 },
      { day: 'Fri', date: '26 Sep', high: 18, low: 11, condition: 'Partly Cloudy', rainProb: 30 },
      { day: 'Sat', date: '27 Sep', high: 19, low: 12, condition: 'Sunny', rainProb: 15 },
      { day: 'Sun', date: '28 Sep', high: 16, low: 10, condition: 'Rain', rainProb: 55 },
      { day: 'Mon', date: '29 Sep', high: 15, low: 9, condition: 'Cloudy', rainProb: 25 },
      { day: 'Tue', date: '30 Sep', high: 17, low: 10, condition: 'Partly Cloudy', rainProb: 20 },
      { day: 'Wed', date: '01 Oct', high: 18, low: 11, condition: 'Sunny', rainProb: 10 },
    ],
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    district: 'Shinjuku, Tokyo',
    region: 'Kanto',
    country: 'Japan',
    temp: 22,
    feelsLike: 23,
    high: 25,
    low: 18,
    condition: 'Partly Cloudy',
    conditionLabel: 'Breezy & Mild',
    description: 'High thin cirrus clouds with comfortable Pacific breeze.',
    windSpeed: 16,
    windDir: 'E',
    windGust: 22,
    pressure: 1016,
    pressureTrend: 'rising',
    humidity: 64,
    uv: 6,
    uvStatus: 'High',
    visibility: 9.5,
    airQuality: 32,
    rainProb: 20,
    oceanCondition: 'Moderate Swell (Tokyo Bay)',
    coordinates: {
      lat: 35.6762,
      lng: 139.6503,
      xPercent: 86.8,
      yPercent: 41.2,
    },
    hourly: [
      { time: '12 PM', temp: 22, condition: 'Partly Cloudy', rainProb: 20 },
      { time: '2 PM', temp: 25, condition: 'Sunny', rainProb: 10 },
      { time: '4 PM', temp: 24, condition: 'Partly Cloudy', rainProb: 15 },
      { time: '6 PM', temp: 21, condition: 'Clear', rainProb: 10 },
      { time: '8 PM', temp: 19, condition: 'Clear', rainProb: 5 },
      { time: '10 PM', temp: 18, condition: 'Clear', rainProb: 5 },
    ],
    forecast: [
      { day: 'Today', date: '25 Sep', high: 25, low: 18, condition: 'Partly Cloudy', rainProb: 20 },
      { day: 'Fri', date: '26 Sep', high: 26, low: 19, condition: 'Sunny', rainProb: 10 },
      { day: 'Sat', date: '27 Sep', high: 24, low: 17, condition: 'Rain', rainProb: 50 },
      { day: 'Sun', date: '28 Sep', high: 23, low: 16, condition: 'Partly Cloudy', rainProb: 25 },
      { day: 'Mon', date: '29 Sep', high: 25, low: 18, condition: 'Sunny', rainProb: 5 },
      { day: 'Tue', date: '30 Sep', high: 26, low: 19, condition: 'Sunny', rainProb: 5 },
      { day: 'Wed', date: '01 Oct', high: 24, low: 17, condition: 'Partly Cloudy', rainProb: 20 },
    ],
  },
  {
    id: 'sydney',
    name: 'Sydney',
    district: 'Darling Harbour, Sydney',
    region: 'New South Wales',
    country: 'Australia',
    temp: 24,
    feelsLike: 25,
    high: 27,
    low: 16,
    condition: 'Sunny',
    conditionLabel: 'Crisp Coastal Spring',
    description: 'Bright sunshine with refreshing southerly ocean sea breeze.',
    windSpeed: 21,
    windDir: 'SSE',
    windGust: 30,
    pressure: 1020,
    pressureTrend: 'rising',
    humidity: 58,
    uv: 7,
    uvStatus: 'High',
    visibility: 10.0,
    airQuality: 22,
    rainProb: 5,
    oceanCondition: 'Energetic Surf (Tasman Sea)',
    coordinates: {
      lat: -33.8688,
      lng: 151.2093,
      xPercent: 88.5,
      yPercent: 79.5,
    },
    hourly: [
      { time: '12 PM', temp: 24, condition: 'Sunny', rainProb: 5 },
      { time: '2 PM', temp: 27, condition: 'Sunny', rainProb: 5 },
      { time: '4 PM', temp: 25, condition: 'Sunny', rainProb: 10 },
      { time: '6 PM', temp: 21, condition: 'Clear', rainProb: 5 },
      { time: '8 PM', temp: 18, condition: 'Clear', rainProb: 0 },
      { time: '10 PM', temp: 16, condition: 'Clear', rainProb: 0 },
    ],
    forecast: [
      { day: 'Today', date: '25 Sep', high: 27, low: 16, condition: 'Sunny', rainProb: 5 },
      { day: 'Fri', date: '26 Sep', high: 28, low: 17, condition: 'Sunny', rainProb: 0 },
      { day: 'Sat', date: '27 Sep', high: 26, low: 18, condition: 'Partly Cloudy', rainProb: 15 },
      { day: 'Sun', date: '28 Sep', high: 24, low: 15, condition: 'Sunny', rainProb: 5 },
      { day: 'Mon', date: '29 Sep', high: 25, low: 16, condition: 'Sunny', rainProb: 5 },
      { day: 'Tue', date: '30 Sep', high: 27, low: 17, condition: 'Sunny', rainProb: 0 },
      { day: 'Wed', date: '01 Oct', high: 26, low: 16, condition: 'Sunny', rainProb: 10 },
    ],
  },
];

class WeatherService {
  private cities: CityWeather[] = CITIES_DATA;
  private currentCityId: string = 'dhaka';

  public getAllCities(): CityWeather[] {
    return this.cities;
  }

  public getAroundTheWorldCities(): CityWeather[] {
    // California, Beijing, Moscow as requested in prompt, plus extra for rich carousel
    const priority = ['california', 'beijing', 'moscow', 'london', 'tokyo', 'sydney'];
    return priority
      .map(id => this.cities.find(c => c.id === id))
      .filter((c): c is CityWeather => Boolean(c));
  }

  public getCityById(id: string): CityWeather {
    const found = this.cities.find(c => c.id.toLowerCase() === id.toLowerCase());
    return found || this.cities[0];
  }

  public getCurrentCity(): CityWeather {
    return this.getCityById(this.currentCityId);
  }

  public setCurrentCity(id: string): CityWeather {
    const city = this.getCityById(id);
    this.currentCityId = city.id;
    return city;
  }

  public searchCities(query: string): CityWeather[] {
    const q = query.trim().toLowerCase();
    if (!q) return this.cities;
    return this.cities.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.country.toLowerCase().includes(q) ||
      (c.district && c.district.toLowerCase().includes(q)) ||
      c.condition.toLowerCase().includes(q)
    );
  }

  public toFahrenheit(celsius: number): number {
    return Math.round((celsius * 9) / 5 + 32);
  }

  public formatTemp(celsius: number, unit: 'C' | 'F' = 'C'): string {
    if (unit === 'F') {
      return `${this.toFahrenheit(celsius)}°`;
    }
    return `${celsius}°C`;
  }
}

export const weatherService = new WeatherService();
