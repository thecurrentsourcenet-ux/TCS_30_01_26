import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, Globe, ChevronRight } from 'lucide-react';

export default function SimpleSidebar() {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Google Ad - Home Page Vertical */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-4468932841277540"
          data-ad-slot="4816021054"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </div>

      {/* What We Do Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          What We Do
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Growing community of energy professionals
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-electric mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800 text-sm">Comprehensive Coverage</h4>
              <p className="text-gray-600 text-xs">Monitor energy news from multiple sources across all sectors</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-electric mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800 text-sm">Monthly Digest</h4>
              <p className="text-gray-600 text-xs">Regular monthly updates delivered to your inbox, saving research time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-electric-500 to-teal-600 rounded-lg p-8 text-white shadow-lg">
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg w-fit mx-auto mb-6">
            <Mail className="h-10 w-10 text-white" />
          </div>
          <h3 className="font-bold text-2xl mb-3">
            Don't miss anything
          </h3>
          <p className="text-electric-100 text-lg mb-6">
            join growing number already subscribed
          </p>
          <Link
            to="/newsletter"
            className="block w-full bg-white text-electric px-6 py-5 rounded-lg hover:bg-gray-50 transition-all duration-300 font-bold text-xl text-center shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Subscribe Free Now
          </Link>
          <p className="text-base text-electric-200 mt-4">
            ✓ No spam ✓ Easy unsubscribe
          </p>
        </div>
      </div>
          Quick Links
        </h3>
        <div className="space-y-3">
          <Link 
            to="/category/technical/production"
            className="block text-gray-600 hover:text-electric transition-colors text-sm"
          >
            Technical Guides
          </Link>
          <Link 
            to="/category/legislation/us"
            className="block text-gray-600 hover:text-electric transition-colors text-sm"
          >
            US Energy Policy
          </Link>
          <Link 
            to="/about"
            className="block text-gray-600 hover:text-electric transition-colors text-sm"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}