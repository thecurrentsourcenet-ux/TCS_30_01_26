import React from 'react';
import { useNavigate } from 'react-router-dom';

const logoSrc = '/Logo.PNG'; // Make sure this file exists in /public/Logo.PNG

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  /** usa nel footer per avere il logo compatto e senza -mt-3 */
  compact?: boolean;
  /** nasconde la tagline */
  hideTagline?: boolean;
}

export default function Logo({
  className = '',
  size = 'medium',
  compact = false,
  hideTagline = false,
}: LogoProps) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  const sizeClasses = {
    small: {
      container: 'w-20 h-20',
      image: 'max-h-[92%] max-w-[92%] p-1.5',
      text: 'text-xl',
      tagline: 'text-sm',
    },
    medium: {
      container: 'w-32 h-32',
      image: 'max-h-[92%] max-w-[92%] p-1.5',
      text: 'text-4xl',
      tagline: 'text-lg',
    },
    large: {
      container: 'w-36 h-36',
      image: 'max-h-[92%] max-w-[92%] p-2',
      text: 'text-5xl',
      tagline: 'text-xl',
    },
  } as const;

  const currentSize = sizeClasses[size];

  // override compatti per il footer
  const compactContainer = 'w-12 h-12';         // 48px
  const compactImage = 'max-h-full max-w-full p-0.5';
  const compactText = 'text-lg';
  const compactTagline = 'text-xs';

  return (
    <button
      onClick={handleLogoClick}
      className={`flex ${compact ? 'items-center gap-3' : 'items-start gap-4'} group ${className} cursor-pointer`}
      aria-label="Go to homepage"
      type="button"
    >
      {/* Logo box */}
      <div
        className={`relative ${compact ? compactContainer : currentSize.container} ${compact ? '' : '-mt-3'} shrink-0 flex items-center justify-center`}
      >
        <img
          src={logoSrc}
          alt="TheCurrentSource logo"
          className={`${compact ? compactImage : currentSize.image} object-contain`}
          draggable={false}
        />
      </div>

      {/* Brand text */}
      <div className={`flex flex-col ${compact ? 'leading-none' : 'leading-tight'}`}>
        <span className={`${compact ? compactText : currentSize.text} font-bold text-gray-700 font-barlow tracking-tight`}>
          TheCurrentSource
        </span>
        {!hideTagline && (
          <span className={`${compact ? compactTagline : currentSize.tagline} text-electric-400 font-medium tracking-wide`}>
            Plugged Into Energy News
          </span>
        )}
      </div>
    </button>
  );
}