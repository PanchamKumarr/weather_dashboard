import React from 'react';
import type { ForecastData } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData;
  isDark: boolean;
}

export function ForecastCard({ forecast, isDark }: ForecastCardProps) {
  const dailyForecasts = forecast.list.filter((item, index) => {
    const date = new Date(item.dt_txt);
    return date.getHours() === 12 && index < 5;
  });

  return (
    <div className={`rounded-xl shadow-lg p-6 w-full max-w-md mt-4 transition-colors ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}>5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-4">
        {dailyForecasts.map((day) => (
          <div key={day.dt_txt} className="text-center">
            <div className={`text-sm font-medium mb-2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].main}
              className="w-12 h-12 mx-auto mb-2"
            />
            <div className={`text-sm font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {Math.round(day.main.temp)}°C
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}