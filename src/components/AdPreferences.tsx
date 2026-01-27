import React, { useState } from 'react';
import { Settings, X, Check, Eye, EyeOff } from 'lucide-react';
import { useAds } from './AdManager';

interface AdPreferencesProps {
  isOpen: boolean;
  onClose: () => void;
}

const energyCategories = [
  { id: 'solar', name: 'Solar Energy', description: 'Solar panels, photovoltaic technology, solar installations' },
  { id: 'wind', name: 'Wind Energy', description: 'Wind turbines, offshore wind, wind farm development' },
  { id: 'storage', name: 'Energy Storage', description: 'Battery technology, grid storage, energy management' },
  { id: 'grid', name: 'Smart Grid', description: 'Grid modernization, smart meters, grid management' },
  { id: 'efficiency', name: 'Energy Efficiency', description: 'Building efficiency, industrial optimization' },
  { id: 'investment', name: 'Energy Investment', description: 'Clean energy funds, project financing' }
];

export default function AdPreferences({ isOpen, onClose }: AdPreferencesProps) {
  const { adsEnabled, userPreferences, toggleAds, updatePreferences } = useAds();
  const [localCategories, setLocalCategories] = useState(userPreferences.categories);
  const [localBlockedCompanies, setLocalBlockedCompanies] = useState(userPreferences.blockedCompanies);

  const handleSave = () => {
    updatePreferences({
      categories: localCategories,
      blockedCompanies: localBlockedCompanies
    });
    onClose();
  };

  const toggleCategory = (categoryId: string) => {
    setLocalCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-electric" />
            <h2 className="text-xl font-semibold text-gray-800">Ad Preferences</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Ad Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              {adsEnabled ? (
                <Eye className="h-5 w-5 text-electric" />
              ) : (
                <EyeOff className="h-5 w-5 text-gray-400" />
              )}
              <div>
                <h3 className="font-medium text-gray-800">Show Relevant Ads</h3>
                <p className="text-sm text-gray-600">
                  See energy-related advertisements that match your interests
                </p>
              </div>
            </div>
            <button
              onClick={toggleAds}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                adsEnabled ? 'bg-electric' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  adsEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {adsEnabled && (
            <>
              {/* Category Preferences */}
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Energy Categories</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Choose which types of energy-related ads you'd like to see
                </p>
                <div className="space-y-3">
                  {energyCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          localCategories.includes(category.id)
                            ? 'bg-electric border-electric text-white'
                            : 'border-gray-300 hover:border-electric'
                        }`}
                      >
                        {localCategories.includes(category.id) && (
                          <Check className="h-3 w-3" />
                        )}
                      </button>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{category.name}</h4>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Privacy & Relevance</h4>
                <p className="text-sm text-blue-700">
                  We only show ads related to energy and power topics. Your preferences are stored locally 
                  and help us display more relevant content. We don't share your data with third parties.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-electric text-white rounded-lg hover:bg-electric-600 transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}