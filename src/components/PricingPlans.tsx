import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, Zap, Clock, BookOpen, Globe, ChevronRight } from 'lucide-react';

export default function PricingPlans() {
  return (
    <>
      <Helmet>
        <title>Subscribe to Newsletter - TheCurrentSource</title>
        <meta name="description" content="Subscribe to TheCurrentSource weekly newsletter for comprehensive energy news from all sectors. Free, organized, and delivered to your inbox." />
        <meta name="keywords" content="energy newsletter, subscribe, weekly digest, energy news, renewable energy updates" />
        <link rel="canonical" href="https://thecurrentsource.net/newsletter" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Subscribe to Newsletter - TheCurrentSource" />
        <meta property="og:description" content="Get weekly energy news from all sectors delivered to your inbox. Free forever." />
        <meta property="og:url" content="https://thecurrentsource.net/newsletter" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Subscribe to Newsletter - TheCurrentSource" />
        <meta name="twitter:description" content="Get weekly energy news from all sectors delivered to your inbox. Free forever." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-electric-100 p-5 sm:p-4 rounded-full">
              <Mail className="h-16 w-16 sm:h-12 sm:w-12 text-electric" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">
            Get weekly top energy news
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Join our growing community who stay updated with TheCurrentSource. 
            All the most important news, organized and delivered every week.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Benefits Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-electric-100 p-4 rounded-lg flex-shrink-0">
                  <Clock className="h-7 w-7 sm:h-6 sm:w-6 text-electric" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-xl font-bold text-gray-800 mb-3">Weekly Digest</h3>
                  <p className="text-base sm:text-base text-gray-600">
                    The most important news of the week in your inbox
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-electric-100 p-4 rounded-lg flex-shrink-0">
                  <Globe className="h-7 w-7 sm:h-6 sm:w-6 text-electric" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-xl font-bold text-gray-800 mb-3">Comprehensive Coverage</h3>
                  <p className="text-base sm:text-base text-gray-600">
                    News from all energy sectors in an easy-to-read format
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-electric-100 p-4 rounded-lg flex-shrink-0">
                  <Zap className="h-7 w-7 sm:h-6 sm:w-6 text-electric" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-xl font-bold text-gray-800 mb-3">Always Free</h3>
                  <p className="text-base sm:text-base text-gray-600">
                    No cost, no hidden fees - just valuable information
                  </p>
                </div>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center sm:justify-start gap-2">
                <BookOpen className="h-6 w-6 text-electric" />
                What you'll get:
              </h3>
              <ul className="space-y-3 text-base text-gray-600">
                <li>• Latest developments in renewable energy</li>
                <li>• Policy and regulation updates</li>
                <li>• Market analysis and investment news</li>
                <li>• Technological innovations and breakthroughs</li>
                <li>• Industry analysis from reliable sources</li>
                <li>• Global regional energy developments</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                All the most important news, organized and delivered every week.
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div id="mc_embed_shell">
              <div id="mc_embed_signup">
                <form 
                  action="https://gmail.us22.list-manage.com/subscribe/post?u=a655408a1d3c6b2169d9ee551&id=0cc545a8de&f_id=00bbc2e1f0" 
                  method="post" 
                  id="mc-embedded-subscribe-form" 
                  name="mc-embedded-subscribe-form" 
                  className="validate space-y-6" 
                  target="_self" 
                  noValidate=""
                >
                  <div id="mc_embed_signup_scroll" className="space-y-6 sm:space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 mb-3">Start your subscription</h3>
                      <p className="text-base sm:text-sm text-gray-600 mb-4">
                        <span className="text-electric">*</span> required field
                      </p>
                    </div>
                    
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="mce-EMAIL" className="block text-base font-semibold text-gray-700 mb-3">
                          Email Address <span className="text-electric">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="EMAIL" 
                          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric text-xl" 
                          id="mce-EMAIL" 
                          required="" 
                          defaultValue="" 
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-40">
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
                      <input type="text" name="b_a655408a1d3c6b2169d9ee551_0cc545a8de" tabIndex="-1" defaultValue="" />
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="w-full bg-electric text-white px-8 py-5 rounded-lg hover:bg-electric-600 transition-colors font-bold text-2xl flex items-center justify-center gap-4"
                      >
                        <Mail className="h-7 w-7" />
                        Get weekly top news
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      
                      <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 mb-3">Powered by</p>
                        <a 
                          href="http://eepurl.com/jj1wbI" 
                          title="Mailchimp - email marketing made easy and fun"
                          className="inline-block opacity-30 hover:opacity-50 transition-opacity"
                        >
                          <img 
                            className="mx-auto" 
                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                            alt="Intuit Mailchimp" 
                            style={{width: '140px', height: '24px'}} 
                          />
                        </a>
                        <p className="text-sm text-gray-500 mt-3">
                          No cost, no hidden fees - just valuable information
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Why choose TheCurrentSource?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <strong className="text-gray-800">Comprehensive</strong><br />
                We monitor 100+ sources across all energy sectors
              </div>
              <div>
                <strong className="text-gray-800">Organized</strong><br />
                Categorized information that's easy to navigate
              </div>
              <div>
                <strong className="text-gray-800">Reliable</strong><br />
                Consistent weekly delivery, no spam
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}