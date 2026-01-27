import { useState, useEffect } from 'react';
import { X, FileText, CheckCircle, ArrowRight } from 'lucide-react';

interface YearEndPresentationPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function YearEndPresentationPopup({ isVisible, onClose }: YearEndPresentationPopupProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
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
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 shadow-2xl ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-all z-10"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header with Badge */}
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-12 pb-8 px-6 sm:px-10 border-b border-slate-200">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-900 font-medium mb-4">
              <FileText className="w-4 h-4" />
              <span>Free Year-End Report</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 leading-tight">
              The Energy Year in Review: 2025
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              A year of accelerating ambition meets physical reality—explained in 13 visual slides.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          {/* Slide Preview */}
          <div className="mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-300 shadow-lg">
              <img
                src="/slide-preview-1.jpg"
                alt="The Energy Year in Review: 2025 - Presentation title slide"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* What You'll Get */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
              What You'll Get:
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Key trends that defined the energy transition</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Data-driven insights on grid challenges</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Policy shifts that matter</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Signals to watch in the year ahead</span>
              </div>
            </div>
          </div>

          {/* Mailchimp Form */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Get Your Free Presentation
              </h3>
              <p className="text-slate-600">
                Delivered instantly via email, plus future energy briefings
              </p>
            </div>

            <div id="mc_embed_shell">
              <div id="mc_embed_signup">
                <form
                  action="https://gmail.us22.list-manage.com/subscribe/post?u=a655408a1d3c6b2169d9ee551&id=0cc545a8de&f_id=00bbc2e1f0"
                  method="post"
                  id="mc-embedded-subscribe-form-popup"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_self"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="popup-MERGE0" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                          id="popup-MERGE0"
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="popup-MERGE1" className="block text-sm font-medium text-slate-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="FNAME"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                            id="popup-MERGE1"
                            placeholder="First Name"
                          />
                        </div>

                        <div>
                          <label htmlFor="popup-MERGE2" className="block text-sm font-medium text-slate-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="LNAME"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                            id="popup-MERGE2"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div id="mce-responses-popup" className="mt-4">
                      <div className="response" id="mce-error-response-popup" style={{display: 'none'}}></div>
                      <div className="response" id="mce-success-response-popup" style={{display: 'none'}}></div>
                    </div>

                    <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                      <input type="text" name="b_a655408a1d3c6b2169d9ee551_0cc545a8de" tabIndex={-1} />
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe-popup"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                      >
                        Download Free Presentation
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 mt-4">
              No payment required • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
