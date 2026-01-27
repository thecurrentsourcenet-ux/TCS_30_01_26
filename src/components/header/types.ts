import type { Profile } from '../../types';

export interface HeaderProps {
  className?: string;
}

export interface MainNavProps {
  className?: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  mobile?: boolean;
  className?: string;
}

export interface UserMenuProps {
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  activeDropdown: string | null;
  toggleDropdown: (id: string) => void;
  onSearch: (query: string) => void;
  onClose: () => void;
  user: Profile | null;
  className?: string;
}

export interface CategoryDropdownProps {
  category: {
    id: string;
    name: string;
    subcategories?: {
      id: string;
      name: string;
      description?: string;
    }[];
  };
  className?: string;
}