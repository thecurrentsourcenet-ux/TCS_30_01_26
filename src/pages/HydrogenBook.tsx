import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface BookArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}

const bookArticles: BookArticle[] = [
  {
    id: '1',
    title: 'Why 2009 Felt Like the Dawn of a New Era',
    slug: '/hydrogen/2009-dawn-of-a-new-hydrogen-era',
    excerpt: 'A technical reflection on why 2009 felt like hydrogen\'s breakthrough moment. From automaker commitments to real-world pilot projects across GM, Honda, Vancouver Olympics, and Europe.',
    date: 'January 15, 2025'
  }
];

export default function HydrogenBook() {
  return (
    <>
      <SEOHead
        title="Hydrogen & Beyond - A Critical Perspective on Energy Transition | TheCurrentSource"
        description="A technical reflection on hydrogen's journey from 2009's breakthrough optimism to today's complex energy landscape. Exploring what we got right, what we misunderstood, and where we might still be surprised. Read about fuel cell vehicles, pilot projects, policy momentum, and the evolution of hydrogen technology."
        keywords="hydrogen book, hydrogen energy, fuel cells, FCEV history, hydrogen economy, energy transition, clean energy, hydrogen technology, renewable energy, sustainable energy"
        canonicalUrl="https://thecurrentsource.com/hydrogen-book"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Book",
          "name": "Hydrogen & Beyond",
          "description": "A technical reflection on hydrogen's journey from 2009's breakthrough optimism to today's complex energy landscape.",
          "author": {
            "@type": "Organization",
            "name": "TheCurrentSource"
          },
          "publisher": {
            "@type": "Organization",
            "name": "TheCurrentSource"
          },
          "datePublished": "2025-01-15",
          "inLanguage": "en",
          "about": {
            "@type": "Thing",
            "name": "Hydrogen Energy and Energy Transition"
          }
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="text-center mb-16">
            <div className="mb-12">
              <img
                src="/img_6110 copy.png"
                alt="Hydrogen & Beyond - The Hydrogen Future 2009"
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 px-4 leading-[1.1]">
              Hydrogen & Beyond
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-[1.6] px-4">
              A technical reflection and perspective exercise: what we got right, what we misunderstood,
              and where we might still be surprised.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">About This Book</h2>
            <div className="space-y-8 max-w-3xl">
              <p className="text-lg sm:text-xl text-gray-700 leading-[1.9]">
                In 2010, I published a small book about hydrogen: a curated collection of news, pilot projects,
                and institutional declarations capturing the excitement around hydrogen as a promising clean energy vector.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-[1.9]">
                Today, in 2025, the energy landscape has changed radically. Hydrogen is still part of the conversation,
                but it's no longer the whole picture. Over the past fifteen years, my work expanded across smart grids,
                decentralized generation, batteries, energy efficiency, and advanced control systems — while I continued
                to follow hydrogen not as a believer, but as a critical observer.
              </p>
              <p className="text-lg sm:text-xl leading-[1.9] font-semibold text-gray-900">
                This is not a celebration of hydrogen, nor a critique. It's about systems, complexity, and decisions.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Chapters</h2>
            <div className="space-y-6">
              {bookArticles.map((article) => (
                <Link
                  key={article.id}
                  to={article.slug}
                  className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 sm:p-10 md:p-12 group border border-gray-100"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                          Chapter {article.id}
                        </span>
                        <span className="text-gray-400 hidden sm:inline">•</span>
                        <span className="text-sm text-gray-500 font-medium">{article.date}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-colors leading-[1.3]">
                        {article.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 leading-[1.8]">
                        {article.excerpt}
                      </p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-10 sm:p-12 md:p-16 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">More Chapters Coming Soon</h2>
            <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-[1.8]">
              Follow the journey through hydrogen's evolution, from the optimistic dawn of 2009
              to the complex realities of today's energy transition.
            </p>
            <Link
              to="/"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
