import { Link } from 'react-router-dom';
import { BarChart3, ArrowRight, Sparkles } from 'lucide-react';

export default function InfographicsBanner() {
  return (
    <Link to="/infographics" className="block group">
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-electric to-blue-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <div className="bg-white/20 backdrop-blur-sm p-2.5 sm:p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse hidden sm:block" />
                <span className="text-xs sm:text-sm font-semibold text-teal-100 uppercase tracking-wide">
                  Visual Analysis
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">
                Country Energy Transition Infographics
              </h3>
              <p className="text-xs sm:text-sm text-teal-100 leading-snug line-clamp-1 sm:line-clamp-none">
                Rwanda, Uruguay & more - Data-driven visual insights from around the world
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg group-hover:bg-white/30 group-hover:translate-x-1 transition-all">
                <span className="text-xs sm:text-sm font-semibold text-white hidden sm:inline">
                  Explore
                </span>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-teal-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Link>
  );
}
