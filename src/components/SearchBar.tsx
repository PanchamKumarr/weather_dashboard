import React, { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
  isDark: boolean;
}

export function SearchBar({ onSearch, loading, isDark }: SearchBarProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (e.g., London,UK or Tokyo)"
          title="You can search for any city worldwide. Add country code for more specific results (e.g., London,UK)"
          className={`w-full px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            isDark
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20'
              : 'bg-white border border-gray-200 text-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
          }`}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className={`absolute right-2 top-1/2 -translate-y-1/2 ${
            isDark
              ? 'text-gray-400 hover:text-gray-300'
              : 'text-gray-400 hover:text-gray-600'
          } disabled:opacity-50 transition-colors`}
        >
          <Search size={20} />
        </button>
      </div>
      <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        Tip: Add country code for precise results (e.g., London,UK)
      </p>
    </form>
  );
}