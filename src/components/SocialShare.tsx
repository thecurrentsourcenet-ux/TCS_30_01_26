import React from 'react';
import { Share2, Mail } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');

  const shareLinks = {
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
    copy: async () => {
      try {
        await navigator.clipboard.writeText(url);
        return true;
      } catch (error) {
        console.error('Failed to copy:', error);
        return false;
      }
    }
  };

  const handleCopyLink = async () => {
    const success = await shareLinks.copy();
    if (success) {
      const button = document.getElementById('copy-button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-500 flex items-center">
        <Share2 className="h-4 w-4 mr-2" />
        Share:
      </span>
      <div className="flex items-center space-x-3">
        <a
          href={shareLinks.email}
          className="text-gray-400 hover:text-blue-600 transition-colors"
          title="Share via Email"
          aria-label="Share via Email"
        >
          <Mail className="h-5 w-5" />
        </a>
        <button
          id="copy-button"
          onClick={handleCopyLink}
          className="text-gray-400 hover:text-blue-600 transition-colors text-sm font-medium"
          title="Copy link"
          aria-label="Copy link to clipboard"
        >
          Copy link
        </button>
      </div>
    </div>
  );
}