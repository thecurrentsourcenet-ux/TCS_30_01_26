import { CategoryStructure, LegislationCountry } from '../types';

export const countries: LegislationCountry[] = [
  { id: 'us', name: 'United States', code: 'US' },
  { id: 'eu', name: 'European Union', code: 'EU' },
  { id: 'uk', name: 'United Kingdom', code: 'GB' },
  { id: 'de', name: 'Germany', code: 'DE' },
  { id: 'fr', name: 'France', code: 'FR' },
  { id: 'jp', name: 'Japan', code: 'JP' },
  { id: 'cn', name: 'China', code: 'CN' },
  { id: 'kr', name: 'South Korea', code: 'KR' },
  { id: 'au', name: 'Australia', code: 'AU' },
  { id: 'in', name: 'India', code: 'IN' },
  { id: 'vn', name: 'Vietnam', code: 'VN' },
];

export const categories: CategoryStructure[] = [
  {
    id: 'technical',
    name: 'Technical Knowledge Base',
    icon: 'BookOpen',
    subcategories: [
      {
        id: 'production',
        name: 'Clean Energy Production',
        description: 'Methods for producing hydrogen, e-fuels, and other renewable energy sources.'
      },
      {
        id: 'storage',
        name: 'Energy Storage Solutions',
        description: 'Technologies for storing hydrogen, ammonia, and other energy carriers.'
      },
      {
        id: 'transport',
        name: 'Transportation & Distribution',
        description: 'Infrastructure and methods for transporting clean energy carriers.'
      },
      {
        id: 'safety',
        name: 'Safety Standards',
        description: 'Safety protocols and best practices for handling various energy carriers.'
      },
      {
        id: 'applications',
        name: 'Industrial Applications',
        description: 'Applications of hydrogen, e-fuels, and other low-carbon solutions.'
      }
    ]
  },
  {
    id: 'legislation',
    name: 'Energy Policy & Regulation',
    icon: 'Scale',
    subcategories: countries.map(country => ({
      id: country.id,
      name: country.name,
      description: `Clean energy legislation and regulations in ${country.name}`
    }))
  }
];