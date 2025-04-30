import { useState, useCallback } from 'react';
import type { WeatherData, ForecastData } from '../types/weather';

const API_KEY = '73f89cf97a42051b8ec7f0e2a8f89941';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`),
        fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`)
      ]);
      
      if (!weatherResponse.ok || !forecastResponse.ok) {
        const errorData = await weatherResponse.json();
        throw new Error(errorData.message || 'Failed to fetch weather data');
      }

      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { weather, forecast, loading, error, fetchWeather };
}