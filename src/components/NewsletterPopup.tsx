import React, { useState, useEffect } from 'react';
import { X, Mail, ChevronRight, Clock, Globe, Zap } from 'lucide-react';

interface NewsletterPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function NewsletterPopup({ isVisible, onClose }: NewsletterPopupProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when popup is closed
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-electric-100 p-2 rounded-lg">
              <Mail className="h-6 w-6 text-electric" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Stay Informed</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close newsletter popup"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Don't miss the most important news
            </h3>
            <p className="text-gray-600 text-lg">
              Get our free monthly digest with comprehensive news from all sectors
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-electric-100 p-3 rounded-lg w-fit mx-auto mb-3">
                <Clock className="h-6 w-6 text-electric" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Weekly Digest</h4>
              <p className="text-gray-600 text-sm">The most important energy news of the week</p>
            </div>
            <div className="text-center">
              <div className="bg-electric-100 p-3 rounded-lg w-fit mx-auto mb-3">
                <Globe className="h-6 w-6 text-electric" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Comprehensive</h4>
              <p className="text-gray-600 text-sm">News from all energy sectors in one place</p>
            </div>
            <div className="text-center">
              <div className="bg-electric-100 p-3 rounded-lg w-fit mx-auto mb-3">
                <Zap className="h-6 w-6 text-electric" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Always Free</h4>
              <p className="text-gray-600 text-sm">No cost, no hidden fees</p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-lg p-6 border border-electric-100">
            <div id="mc_embed_shell">
              <div id="mc_embed_signup">
                <form 
                  action="https://gmail.us22.list-manage.com/subscribe/post?u=a655408a1d3c6b2169d9ee551&id=0cc545a8de&f_id=00bbc2e1f0" 
                  method="post" 
                  id="mc-embedded-subscribe-form" 
                  name="mc-embedded-subscribe-form" 
                  className="validate space-y-4" 
                  target="_self" 
                  noValidate=""
                >
                  <div id="mc_embed_signup_scroll" className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Subscribe Now</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        <span className="text-electric">*</span> required field
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="popup-mce-EMAIL" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-electric">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="EMAIL" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric" 
                          id="popup-mce-EMAIL" 
                          required="" 
                          defaultValue="" 
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-60">
                        <div>
                          <label htmlFor="popup-mce-FNAME" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name (optional)
                          </label>
                          <input 
                            type="text" 
                            name="FNAME" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric" 
                            id="popup-mce-FNAME" 
                            defaultValue="" 
                            placeholder="First Name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="popup-mce-LNAME" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name (optional)
                          </label>
                          <input 
                            type="text" 
                            name="LNAME" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric" 
                            id="popup-mce-LNAME" 
                            defaultValue="" 
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div id="mce-responses-popup" className="clear foot">
                      <div className="response" id="mce-error-response-popup" style={{display: 'none'}}></div>
                      <div className="response" id="mce-success-response-popup" style={{display: 'none'}}></div>
                    </div>
                    
                    <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                      <input type="text" name="b_a655408a1d3c6b2169d9ee551_0cc545a8de" tabIndex="-1" defaultValue="" />
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe-popup"
                        className="w-full bg-electric text-white px-6 py-3 rounded-lg hover:bg-electric-600 transition-colors font-semibold flex items-center justify-center gap-3"
                      >
                        <Mail className="h-5 w-5" />
                        Get weekly top news
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Join hundreds of energy professionals who trust TheCurrentSource for their weekly insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}