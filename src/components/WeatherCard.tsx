import React from 'react';
import { Droplets, Wind } from 'lucide-react';
import type { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
  isDark: boolean;
}

export function WeatherCard({ weather, isDark }: WeatherCardProps) {
  return (
    <div className={`rounded-xl shadow-lg p-6 w-full max-w-md transition-colors ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-2xl font-bold ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>{weather.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-16 h-16"
        />
      </div>
      
      <div className="mb-4">
        <div className={`text-5xl font-bold mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {Math.round(weather.main.temp)}°C
        </div>
        <div className={`capitalize ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {weather.weather[0].description}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Droplets className="text-blue-500 mr-2" size={20} />
          <div>
            <div className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>Humidity</div>
            <div className={`font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{weather.main.humidity}%</div>
          </div>
        </div>
        <div className="flex items-center">
          <Wind className="text-blue-500 mr-2" size={20} />
          <div>
            <div className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>Wind Speed</div>
            <div className={`font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{weather.wind.speed} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}