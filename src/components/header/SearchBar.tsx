import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  mobile?: boolean;
}

export default function SearchBar({ onSearch, mobile = false }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsFocused(false);
  };

  if (mobile) {
    return (
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 text-gray-600 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="hidden md:block relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        placeholder="Search..."
        className="w-36 px-3 py-2 text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric"
      />
      {query && isFocused && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </form>
  );
}