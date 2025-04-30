import React, { useState, useEffect } from 'react';
import { Cloud, AlertCircle, Loader2, RefreshCw, Sun, Moon } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { SearchHistory } from './components/SearchHistory';
import { useWeather } from './hooks/useWeather';
import type { SearchHistoryItem } from './types/weather';

function App() {
  const { weather, forecast, loading, error, fetchWeather } = useWeather();
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleSearch = (city: string) => {
    fetchWeather(city);
    setSearchHistory((prev) => {
      const newHistory = [
        { city, timestamp: Date.now() },
        ...prev.filter((item) => item.city !== city),
      ].slice(0, 5);
      return newHistory;
    });
  };

  const handleRefresh = () => {
    if (weather) {
      fetchWeather(weather.name);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-blue-100'
    } p-4 md:p-8`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Cloud className={`${isDark ? 'text-blue-400' : 'text-blue-500'}`} size={32} />
            <h1 className={`text-2xl md:text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Weather Dashboard
            </h1>
          </div>
          <div className="flex gap-4">
            {weather && (
              <button
                onClick={handleRefresh}
                className={`p-2 rounded-full transition-colors ${
                  isDark 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                title="Refresh weather data"
              >
                <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
              </button>
            )}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${
                isDark 
                  ? 'hover:bg-gray-700 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <SearchBar onSearch={handleSearch} loading={loading} isDark={isDark} />
          <SearchHistory history={searchHistory} onSelect={handleSearch} isDark={isDark} />

          {loading && (
            <div className={`flex items-center gap-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <Loader2 className="animate-spin" size={20} />
              <span>Fetching weather data...</span>
            </div>
          )}

          {error && (
            <div className={`flex items-center gap-2 ${
              isDark 
                ? 'text-red-400 bg-red-900/30' 
                : 'text-red-500 bg-red-50'
            } px-4 py-2 rounded-lg`}>
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          {weather && <WeatherCard weather={weather} isDark={isDark} />}
          {forecast && <ForecastCard forecast={forecast} isDark={isDark} />}
        </div>
      </div>
    </div>
  );
}

export default App;