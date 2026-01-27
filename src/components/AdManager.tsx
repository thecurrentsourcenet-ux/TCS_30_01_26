import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdContextType {
  adsEnabled: boolean;
  userPreferences: {
    categories: string[];
    blockedCompanies: string[];
  };
  toggleAds: () => void;
  updatePreferences: (preferences: Partial<AdContextType['userPreferences']>) => void;
}

const AdContext = createContext<AdContextType>({
  adsEnabled: true,
  userPreferences: { categories: [], blockedCompanies: [] },
  toggleAds: () => {},
  updatePreferences: () => {}
});

export const useAds = () => useContext(AdContext);

interface AdManagerProps {
  children: React.ReactNode;
}

export function AdManager({ children }: AdManagerProps) {
  const [adsEnabled, setAdsEnabled] = useState(true);
  const [userPreferences, setUserPreferences] = useState({
    categories: ['solar', 'wind', 'storage', 'grid', 'efficiency'],
    blockedCompanies: []
  });

  useEffect(() => {
    // Load user preferences from localStorage
    const savedPreferences = localStorage.getItem('adPreferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setUserPreferences(parsed.userPreferences || userPreferences);
        setAdsEnabled(parsed.adsEnabled !== false); // Default to true
      } catch (error) {
        console.error('Error loading ad preferences:', error);
      }
    }
  }, []);

  const toggleAds = () => {
    const newState = !adsEnabled;
    setAdsEnabled(newState);
    
    // Save to localStorage
    const preferences = {
      adsEnabled: newState,
      userPreferences
    };
    localStorage.setItem('adPreferences', JSON.stringify(preferences));
  };

  const updatePreferences = (newPreferences: Partial<AdContextType['userPreferences']>) => {
    const updated = { ...userPreferences, ...newPreferences };
    setUserPreferences(updated);
    
    // Save to localStorage
    const preferences = {
      adsEnabled,
      userPreferences: updated
    };
    localStorage.setItem('adPreferences', JSON.stringify(preferences));
  };

  const value = {
    adsEnabled,
    userPreferences,
    toggleAds,
    updatePreferences
  };

  return (
    <AdContext.Provider value={value}>
      {children}
    </AdContext.Provider>
  );
}

// Hook for components to check if they should show ads
export const useAdVisibility = (adCategory?: string, company?: string) => {
  const { adsEnabled, userPreferences } = useAds();
  
  if (!adsEnabled) return false;
  
  if (company && userPreferences.blockedCompanies.includes(company)) {
    return false;
  }
  
  if (adCategory && userPreferences.categories.length > 0) {
    return userPreferences.categories.includes(adCategory);
  }
  
  return true;
};