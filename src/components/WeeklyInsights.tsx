import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Filter, BookOpen, ChevronRight, Mail, Globe, Zap } from 'lucide-react';

// Card component for better reusability
interface InsightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InsightCard = memo(({ icon, title, description }: InsightCardProps) => (
  <article className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-electric focus-within:ring-opacity-50 border border-gray-100">
    <header className="flex items-center gap-3 mb-3">
      <div className="text-electric flex-shrink-0" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-medium text-gray-800 text-sm">{title}</h3>
    </header>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </article>
));

InsightCard.displayName = 'InsightCard';

interface WeeklyInsightsProps {
  title?: string;
  description?: string;
  cta?: {
    text: string;
    url: string;
    prompt?: string;
    subtext?: string;
  };
}

export default function WeeklyInsights({
  title = "What We Do",
  description = "TheCurrentSource gathers energy news from multiple sources and organizes it into a comprehensive monthly digest. Save time by getting all your energy information in one place.",
  cta = {
    text: "Subscribe to Newsletter",
    url: "/newsletter",
    prompt: "Stay Informed",
    subtext: "Get our free monthly digest"
  }
}: WeeklyInsightsProps) {
  // Define our insight cards data
  const insightCards = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Comprehensive Coverage",
      description: "We monitor energy news from multiple sources across all sectors and regions"
    },
    {
      icon: <Filter className="h-5 w-5" />,
      title: "Organized Information", 
      description: "All news organized by category and region for easy navigation"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Monthly Digest",
      description: "Regular monthly updates in your inbox, saving research time"
    }
  ];

  return (
    <section 
      className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
      aria-labelledby="insights-title"
    >
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-electric" />
            <h2 
              id="insights-title" 
              className="text-xl font-semibold text-gray-800"
            >
              {title}
            </h2>
          </div>
          
          <p className="text-gray-600 text-base mb-6 max-w-2xl">
            {description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {insightCards.map((card, index) => (
              <InsightCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        
        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-lg p-8 sm:p-6 border border-electric-100 lg:w-64">
            {cta.prompt && (
              <h3 className="font-bold text-gray-800 mb-3 text-center text-xl sm:text-lg">
                {cta.prompt}
              </h3>
            )}
            {cta.subtext && (
              <p className="text-gray-600 text-base sm:text-sm text-center mb-6">
                Join our growing community for monthly insights
              </p>
            )}
            
            <Link
              to="/newsletter"
              className="group inline-flex items-center justify-center gap-3 w-full bg-electric text-white px-6 py-4 rounded-lg hover:bg-electric-600 transition-colors focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 text-lg sm:text-sm font-bold"
              aria-label={`${cta.text} for ${title}`}
            >
              <Mail className="h-5 w-5 sm:h-4 sm:w-4" />
              <span>{cta.text}</span>
              <ChevronRight
                className="h-5 w-5 sm:h-4 sm:w-4 transform group-hover:translate-x-1 transition-transform"
                aria-hidden="true" 
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}