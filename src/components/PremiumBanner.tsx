import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ChevronRight, Mail } from 'lucide-react';

export default function PremiumBanner() {
  return (
    <div className="bg-gradient-to-r from-electric-50 to-teal-50 border border-electric-100 rounded-lg p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-white p-3 rounded-lg">
          <Mail className="h-6 w-6 text-electric" />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Stay Updated with Energy News
          </h3>
          <p className="text-gray-600 mb-4">
            Subscribe to our free monthly newsletter to get comprehensive energy news 
            from all sectors delivered to your inbox. No cost, just valuable information.
          </p>
          <Link
            to="/newsletter"
            className="inline-flex items-center text-electric hover:text-electric-700 font-medium group"
          >
            Subscribe to Newsletter
            <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}