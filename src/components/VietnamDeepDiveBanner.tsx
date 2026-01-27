import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Globe, TrendingUp, ArrowRight, Zap, DollarSign, Target } from 'lucide-react';

export default function VietnamDeepDiveBanner() {
  return (
    <div className="bg-gradient-to-br from-red-500 via-red-600 to-yellow-500 rounded-xl shadow-xl overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Play className="h-6 w-6 text-white" />
              </div>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                🇻🇳 EXCLUSIVE DEEP DIVE
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Vietnam's $2.4 Trillion Energy Revolution
            </h2>
            
            <p className="text-red-100 text-lg mb-6 leading-relaxed">
              Discover how Vietnam plans to achieve net-zero emissions by 2050 through massive 
              renewable energy expansion, strategic investments, and innovative policy frameworks.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <DollarSign className="h-6 w-6 text-white mx-auto mb-1" />
                <div className="text-xl font-bold">$2.4T</div>
                <div className="text-xs text-red-100">Investment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <Target className="h-6 w-6 text-white mx-auto mb-1" />
                <div className="text-xl font-bold">2050</div>
                <div className="text-xs text-red-100">Net-Zero</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <Zap className="h-6 w-6 text-white mx-auto mb-1" />
                <div className="text-xl font-bold">78%</div>
                <div className="text-xs text-red-100">Reduction</div>
              </div>
            </div>

            <Link
              to="/category/legislation/vn"
              className="inline-flex items-center gap-3 bg-white text-red-600 px-6 py-4 rounded-xl hover:bg-red-50 transition-all duration-300 font-semibold text-lg group shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Play className="h-6 w-6" />
              <span>Watch Full Analysis</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Live Analysis Available</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-white/90">
                    <span className="text-sm">Clean Power Strategy</span>
                    <span className="text-sm font-bold">36%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-9/12"></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-white/90">
                    <span className="text-sm">Carbon Capture & Storage</span>
                    <span className="text-sm font-bold">27%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-7/12"></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-white/90">
                    <span className="text-sm">Energy Efficiency</span>
                    <span className="text-sm font-bold">15%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-4/12"></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-white">
                    <Globe className="h-5 w-5" />
                    <span className="font-medium">Southeast Asia's Energy Leader</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-red-800 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              NEW!
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/90 text-sm">
              <span className="font-medium">TheCurrentSource.net:</span> Plugged Into Energy News
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-white/80">Also available on:</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-white font-medium">YouTube</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white font-medium">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}