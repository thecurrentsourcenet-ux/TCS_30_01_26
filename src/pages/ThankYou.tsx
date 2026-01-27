import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Mail, ArrowRight, BookOpen, Zap, Clock, Linkedin } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function ThankYou() {
  return (
    <>
      <SEOHead
        title="Thank You for Subscribing"
        description="Welcome to The Current Source community. You'll receive the best energy news and insights delivered to your inbox monthly."
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            You're All Set!
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to The Current Source community. You'll start receiving our monthly digest with the best energy news and insights.
          </p>
        </div>

        <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-lg border border-electric-100 p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-7 w-7 text-electric" />
            <h2 className="text-2xl font-bold text-gray-900">What Happens Next?</h2>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-electric text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Get Your Monthly Digest</h3>
                <p className="text-gray-600">
                  Every month, we'll send you the most important energy news, trends, and insights—all in one comprehensive email.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-electric text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Stay Informed</h3>
                <p className="text-gray-600">
                  In-depth coverage of renewable energy, hydrogen, smart grids, and the global energy transition—straight to your inbox.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-electric text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">Connect on LinkedIn</h3>
                <p className="text-gray-600 mb-3">
                  Join our professional community for daily updates, industry discussions, and networking opportunities.
                </p>
                <a
                  href="https://www.linkedin.com/company/thecurrentsource"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-electric hover:text-electric-600 font-semibold transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  Follow us on LinkedIn
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You'll Get
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <Clock className="h-8 w-8 text-electric mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Monthly Digest</h3>
              <p className="text-gray-600 text-sm">
                The most important energy news of the month, curated just for you
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <BookOpen className="h-8 w-8 text-electric mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Analysis</h3>
              <p className="text-gray-600 text-sm">
                In-depth coverage of trends, policy changes, and technological breakthroughs
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              <Zap className="h-8 w-8 text-electric mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Always Free</h3>
              <p className="text-gray-600 text-sm">
                No cost, no spam, no hidden fees—unsubscribe anytime with one click
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Start Exploring Our Latest Articles
          </h2>

          <div className="space-y-4">
            <Link
              to="/category/technical"
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-electric transition-colors">
                  Technical Insights
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore hydrogen production, storage, and transportation
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-electric transition-colors" />
            </Link>

            <Link
              to="/category/legislation"
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-electric transition-colors">
                  Policy & Legislation
                </h3>
                <p className="text-gray-600 text-sm">
                  Stay updated on energy policies around the world
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-electric transition-colors" />
            </Link>

            <Link
              to="/infographics"
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-electric transition-colors">
                  Infographics
                </h3>
                <p className="text-gray-600 text-sm">
                  Visual insights on global energy transitions
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-electric transition-colors" />
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-electric text-white px-8 py-4 rounded-lg hover:bg-electric-600 transition-colors font-semibold"
            >
              Browse All Articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100 p-8 mb-8">
          <div className="text-center">
            <Linkedin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Connect With Us on LinkedIn
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get daily energy news updates, join industry discussions, and connect with professionals shaping the future of energy.
            </p>
            <a
              href="https://www.linkedin.com/company/thecurrentsource"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <Linkedin className="h-5 w-5" />
              Follow The Current Source
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/about"
            className="text-electric hover:text-electric-600 font-semibold"
          >
            Learn more about The Current Source
          </Link>
        </div>
      </div>
    </>
  );
}
