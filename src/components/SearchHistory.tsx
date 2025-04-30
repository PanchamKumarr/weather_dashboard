import React from 'react';
import { History } from 'lucide-react';
import type { SearchHistoryItem } from '../types/weather';

interface SearchHistoryProps {
  history: SearchHistoryItem[];
  onSelect: (city: string) => void;
  isDark: boolean;
}

export function SearchHistory({ history, onSelect, isDark }: SearchHistoryProps) {
  if (history.length === 0) return null;

  return (
    <div className="w-full max-w-md mt-4">
      <div className={`flex items-center gap-2 mb-2 ${
        isDark ? 'text-gray-300' : 'text-gray-600'
      }`}>
        <History size={16} />
        <h3 className="text-sm font-medium">Recent Searches</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((item) => (
          <button
            key={`${item.city}-${item.timestamp}`}
            onClick={() => onSelect(item.city)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {item.city}
          </button>
        ))}
      </div>
    </div>
  );
}