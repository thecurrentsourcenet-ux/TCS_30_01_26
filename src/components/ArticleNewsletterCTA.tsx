import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Users, Clock } from 'lucide-react';

interface ArticleNewsletterCTAProps {
  articleTitle?: string;
  className?: string;
}

export default function ArticleNewsletterCTA({
  articleTitle,
  className = ''
}: ArticleNewsletterCTAProps) {
  return (
    <div className={`bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-4 sm:p-6 border border-electric-100 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="bg-white p-3 rounded-lg shadow-sm mx-auto sm:mx-0">
          <Mail className="h-6 w-6 text-electric" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            Want to receive more news like this?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Join our <strong>growing community</strong> who read TheCurrentSource every month. 
            Get the top energy news delivered directly to your inbox.
          </p>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-electric" />
              <span>Weekly</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-electric" />
              <span>Growing community</span>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Always free
            </div>
          </div>

          <Link
            to="/newsletter"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-electric text-white px-8 py-4 rounded-lg hover:bg-electric-600 transition-all duration-300 font-bold text-lg group shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Mail className="h-6 w-6" />
            Get weekly top news
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}