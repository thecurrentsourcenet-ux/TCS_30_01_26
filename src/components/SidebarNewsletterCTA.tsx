import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Zap, TrendingUp, Users } from 'lucide-react';

export default function SidebarNewsletterCTA() {
  return (
    <div className="bg-gradient-to-br from-electric-500 to-teal-600 rounded-xl p-8 text-white shadow-lg">
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm p-5 rounded-lg w-fit mx-auto mb-6">
          <Mail className="h-12 w-12 text-white" />
        </div>
        
        <h3 className="text-3xl font-bold mb-4 leading-tight">
          Don't miss the most important news
        </h3>
        
        <p className="text-electric-100 text-xl mb-8">
          Join our growing community
        </p>

        <div className="space-y-4 mb-10">
          <div className="flex items-center justify-center gap-4 text-lg">
            <Zap className="h-6 w-6" />
            <span>All news in one place</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <TrendingUp className="h-6 w-6" />
            <span>Monthly analysis</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <Users className="h-6 w-6" />
            <span>Always free</span>
          </div>
        </div>

        <Link
          to="/newsletter"
          className="block w-full bg-white text-electric px-8 py-5 rounded-lg hover:bg-gray-50 transition-colors font-bold text-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
        >
          Subscribe Free Now
        </Link>
        
        <p className="text-base text-electric-200 mt-5">
          ✓ No spam ✓ Easy unsubscribe
        </p>
      </div>
    </div>
  );
}