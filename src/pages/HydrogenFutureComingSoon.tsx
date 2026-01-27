import React from 'react';
import SEOHead from '../components/SEOHead';
import { Zap, Clock, BookOpen, ChevronRight, Mail, Bell } from 'lucide-react';
import EmailSignup from '../components/EmailSignup';

export default function HydrogenFutureComingSoon() {
  const pageTitle = "Future of Hydrogen - Coming Soon | TheCurrentSource";
  const pageDescription = "The Future of Hydrogen section is coming soon to TheCurrentSource. Subscribe to our newsletter to be notified when this comprehensive guide becomes available.";
  const canonicalUrl = "https://thecurrentsource.net/technical/future";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="hydrogen future, clean energy, hydrogen technology, energy transition, coming soon"
        canonicalUrl={canonicalUrl}
        ogType="website"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-8 border border-electric-100 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Zap className="h-12 w-12 text-electric" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Future of Hydrogen
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            A comprehensive guide to hydrogen's role in the global energy transition
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
            <Clock className="h-5 w-5" />
            Coming Soon
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-electric" />
            <h2 className="text-2xl font-semibold text-gray-800">What to Expect</h2>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            We're developing a comprehensive resource that will explore hydrogen's transformative 
            potential across industries, policy landscapes, and technological innovations. This 
            section will provide in-depth analysis and insights into how hydrogen is shaping 
            the future of clean energy.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Topics We'll Cover:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span>Technological breakthroughs and innovations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span>Global policy developments and frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span>Market trends and investment opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span>Industrial applications and use cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span>Infrastructure development and challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span>Environmental impact and sustainability</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Get Notified</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Be the first to know when this comprehensive hydrogen guide launches. 
                Subscribe to our newsletter for updates and early access.
              </p>
              <div className="text-center">
                <a
                  href="/newsletter"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Mail className="h-4 w-4" />
                  Subscribe Now
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Current Resources */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Explore Current Hydrogen Resources
          </h2>
          <p className="text-gray-600 mb-6">
            While we prepare the comprehensive Future of Hydrogen guide, explore our existing 
            technical resources covering hydrogen production, storage, and applications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/category/technical/production"
              className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors group"
            >
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-electric transition-colors">
                Production Methods
              </h3>
              <p className="text-gray-600 text-sm">
                Learn about electrolysis, SMR, and other hydrogen production technologies
              </p>
            </a>
            
            <a
              href="/category/technical/storage"
              className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors group"
            >
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-electric transition-colors">
                Storage Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Explore compressed gas, liquid, and underground storage options
              </p>
            </a>
            
            <a
              href="/category/technical/applications"
              className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors group"
            >
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-electric transition-colors">
                Industrial Applications
              </h3>
              <p className="text-gray-600 text-sm">
                Discover how hydrogen is being used across different industries
              </p>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    </>
  );
}