import React, { useState, useRef, useEffect } from 'react';
import { Filter, X, TrendingUp, Clock } from 'lucide-react';

interface FilterDropdownProps {
  categories: string[];
  years: string[];
  selectedCategories: Set<string>;
  selectedYears: Set<string>;
  onToggleCategory: (category: string) => void;
  onToggleYear: (year: string) => void;
  onClearAll: () => void;
}

export default function FilterDropdown({
  categories,
  years,
  selectedCategories,
  selectedYears,
  onToggleCategory,
  onToggleYear,
  onClearAll
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeFilterCount = selectedCategories.size + selectedYears.size;
  const hasActiveFilters = activeFilterCount > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-electric transition-colors"
        aria-label="Filters"
      >
        <Filter className="h-4 w-4" />
        <span>Filters</span>
        {hasActiveFilters && (
          <span className="bg-electric text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
            {activeFilterCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="bg-gradient-to-r from-electric to-blue-600 p-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-white" />
                <h3 className="text-sm font-semibold text-white">Filters</h3>
              </div>
              <div className="flex items-center gap-2">
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      onClearAll();
                    }}
                    className="flex items-center gap-1 px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-white text-xs font-medium transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 bg-white/20 hover:bg-white/30 rounded text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-3.5 w-3.5 text-gray-500" />
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Categories
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map(category => {
                    const isSelected = selectedCategories.has(category);
                    return (
                      <button
                        key={category}
                        onClick={() => onToggleCategory(category)}
                        className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors capitalize ${
                          isSelected
                            ? 'bg-electric text-white'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-3.5 w-3.5 text-gray-500" />
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Year
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {years.map(year => {
                    const isSelected = selectedYears.has(year);
                    return (
                      <button
                        key={year}
                        onClick={() => onToggleYear(year)}
                        className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                          isSelected
                            ? 'bg-electric text-white'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
