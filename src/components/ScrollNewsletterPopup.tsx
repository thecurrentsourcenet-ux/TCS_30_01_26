import React, { useState, useEffect } from 'react';
import { X, Mail, ArrowRight, Clock, Users, Zap } from 'lucide-react';

interface ScrollNewsletterPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ScrollNewsletterPopup({ isVisible, onClose }: ScrollNewsletterPopupProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Redirect to full newsletter page with email pre-filled
      window.location.href = `/newsletter?email=${encodeURIComponent(email)}`;
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 transition-all duration-300 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-electric-500 to-teal-600 p-5 sm:p-4 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Chiudi"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/20 p-3 rounded-lg">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl sm:text-lg">Don't miss anything!</h3>
          </div>
          <p className="text-electric-100 text-base sm:text-sm">
            Join our growing community for monthly energy insights
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-4">
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-base sm:text-sm text-gray-600">
              <Clock className="h-5 w-5 text-electric" />
              <span>Monthly digest</span>
            </div>
            <div className="flex items-center gap-3 text-base sm:text-sm text-gray-600">
              <Users className="h-5 w-5 text-electric" />
              <span>Growing community</span>
            </div>
            <div className="flex items-center gap-3 text-base sm:text-sm text-gray-600">
              <Zap className="h-5 w-5 text-electric" />
              <span>Always free</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric"
              required
            />
            
            <button
              className="w-full bg-electric text-white px-6 py-4 rounded-lg hover:bg-electric-600 transition-colors font-semibold text-lg flex items-center justify-center gap-3"
            >
              <Mail className="h-5 w-5" />
              Subscribe Free Now
              <ArrowRight className="h-5 w-5" />
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-4">
            ✓ No spam ✓ Easy unsubscribe
          </p>
        </div>
      </div>
    </div>
  );
}