import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ArticleEndCTA() {
  const navigate = useNavigate();

  const handleMoreArticles = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className="border-t border-gray-200 pt-8 mt-12">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Stay Informed on the Energy Transition
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get the latest insights, analysis, and developments shaping the global energy landscape.
        </p>

        <button
          onClick={handleMoreArticles}
          className="inline-flex items-center justify-center px-8 py-3 bg-electric text-white rounded-lg hover:bg-electric-600 transition-colors font-medium shadow-md hover:shadow-lg"
        >
          More Articles
          <ArrowRight className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  );
}
