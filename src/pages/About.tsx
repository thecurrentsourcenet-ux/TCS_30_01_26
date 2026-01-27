import React from 'react';
import SEOHead from '../components/SEOHead';
import { Zap, Clock, BarChart as ChartBar, BookOpen, Globe, Users, Filter, Database } from 'lucide-react';
import EmailSignup from '../components/EmailSignup';

export default function About() {
  const pageTitle = "About - TheCurrentSource";
  const pageDescription = "TheCurrentSource gathers and organizes energy news from across all sectors into one comprehensive platform, making energy information accessible and easy to navigate.";
  const canonicalUrl = "https://thecurrentsource.net/about";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="about thecurrentsource, energy news platform, energy information hub, comprehensive energy coverage"
        canonicalUrl={canonicalUrl}
        ogType="website"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-8 border border-electric-100">
          <div className="flex items-center gap-4 mb-6">
            <Zap className="h-8 w-8 text-electric" />
            <h1 className="text-3xl font-bold text-gray-800">About TheCurrentSource</h1>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            TheCurrentSource is your comprehensive energy information hub. We gather news and insights 
            from across the vast and diverse energy sector, organizing everything into one accessible 
            platform. Our mission is to save you time by bringing together energy information from 
            multiple sources so you don't have to search everywhere.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-electric" />
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The energy world is vast and constantly evolving. From renewable technologies to policy 
              changes, market developments to industry innovations - there's a lot to keep track of. 
              Our mission is to gather this diverse information and organize it in one place, making 
              it easy for professionals, researchers, and anyone interested in energy to stay informed 
              without having to visit dozens of different sources.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-electric" />
              <h2 className="text-2xl font-semibold text-gray-800">What We Cover</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">All Energy Sectors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Renewable energy (solar, wind, hydro)</li>
                  <li>• Traditional energy sources</li>
                  <li>• Energy storage technologies</li>
                  <li>• Grid and infrastructure</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Market & Policy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Market trends and analysis</li>
                  <li>• Policy changes and regulations</li>
                  <li>• Investment and funding news</li>
                  <li>• Government initiatives</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Innovation & Technology</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Technology breakthroughs</li>
                  <li>• Research developments</li>
                  <li>• Industry innovations</li>
                  <li>• Startup and company news</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-electric" />
              <h2 className="text-2xl font-semibold text-gray-800">Our Approach</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We believe that energy information should be accessible, organized, and comprehensive. 
                Rather than focusing on just one aspect of the energy sector, we cast a wide net to 
                capture developments from all areas - because the energy transition affects every part 
                of the industry.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="font-semibold text-2xl text-gray-800">100+</div>
                  <div className="text-sm text-gray-600">Sources Monitored</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-2xl text-gray-800">Weekly</div>
                  <div className="text-sm text-gray-600">Newsletter Delivery</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-2xl text-gray-800">Free</div>
                  <div className="text-sm text-gray-600">Always</div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why We Started This</h2>
            <div className="text-gray-600 space-y-4">
              <p className="leading-relaxed">
                The energy sector is incredibly diverse and fast-moving. Staying informed requires 
                checking multiple websites, newsletters, and sources daily. We realized there was 
                a need for a single place where all this information could be gathered, organized, 
                and presented in an easy-to-digest format.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3">Our Commitment</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" />
                    <span>Regular, reliable updates delivered weekly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Filter className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" />
                    <span>Comprehensive coverage across all energy sectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" />
                    <span>Well-organized information that's easy to navigate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-electric flex-shrink-0 mt-0.5" />
                    <span>Always free - no hidden costs or premium tiers</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              Have questions, suggestions, or feedback? We'd love to hear from you. Reach out to us at{' '}
              <a href="mailto:thecurrentsource.net@gmail.com" className="text-electric hover:text-electric-700">
               thecurrentsource.net@gmail.com
              </a>
            </p>
          </section>
        </div>

        <EmailSignup />
      </div>
    </>
  );
}