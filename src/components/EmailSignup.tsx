import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Clock, BookOpen, ChevronRight, Mail } from 'lucide-react';

export default function EmailSignup() {
  return (
    <div id="newsletter" className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-lg p-6 sm:p-8 border border-electric-100" data-email-signup>
      <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
        <Mail className="h-8 w-8 text-electric" />
        <h3 className="text-2xl sm:text-xl font-bold text-gray-800 text-center sm:text-left">
          Subscribe to Our Newsletter
        </h3>
      </div>

      <div className="space-y-5 mb-8">
        <div className="flex items-start gap-3">
          <Clock className="h-6 w-6 text-electric mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">Monthly Digest</h4>
            <p className="text-gray-600 text-base">Get the most important energy news of the month in your inbox</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <BookOpen className="h-6 w-6 text-electric mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">Comprehensive Coverage</h4>
            <p className="text-gray-600 text-base">News from all energy sectors organized in an easy-to-read format</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Zap className="h-6 w-6 text-electric mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">Always Free</h4>
            <p className="text-gray-600 text-base">No cost, no hidden fees - just valuable energy information</p>
          </div>
        </div>
      </div>
      
      <div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
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
                <div id="mc_embed_signup_scroll" className="space-y-6">
                  <div>
                    <h4 className="text-xl sm:text-lg font-bold text-gray-800 mb-3 text-center sm:text-left">Subscribe to Newsletter</h4>
                    <p className="text-base sm:text-sm text-gray-600 mb-4 text-center sm:text-left">
                      <span className="text-electric">*</span> required field
                    </p>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="mce-EMAIL" className="block text-base font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-electric">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="EMAIL" 
                        className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric" 
                        id="mce-EMAIL" 
                        required="" 
                        defaultValue="" 
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-50">
                      <div>
                        <label htmlFor="mce-FNAME" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name (optional)
                        </label>
                        <input 
                          type="text" 
                          name="FNAME" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric" 
                          id="mce-FNAME" 
                          defaultValue="" 
                          placeholder="First Name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="mce-LNAME" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name (optional)
                        </label>
                        <input 
                          type="text" 
                          name="LNAME" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric" 
                          id="mce-LNAME" 
                          defaultValue="" 
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                  </div>
                  
                  <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <input type="text" name="b_a655408a1d3c6b2169d9ee551_0cc545a8de" tabIndex="-1" defaultValue="" />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="w-full bg-electric text-white px-8 py-5 rounded-lg hover:bg-electric-600 transition-colors font-bold text-xl flex items-center justify-center gap-3"
                    >
                      <Mail className="h-6 w-6" />
                      Get monthly top news
                    </button>
                    
                    <div className="mt-6 text-center">
                      <a 
                        href="http://eepurl.com/jj1wbI" 
                        title="Mailchimp - email marketing made easy and fun"
                        className="inline-block opacity-40 hover:opacity-60 transition-opacity"
                      >
                        <img 
                          className="mx-auto" 
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                          alt="Intuit Mailchimp" 
                          style={{width: '160px', height: '28px'}} 
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}