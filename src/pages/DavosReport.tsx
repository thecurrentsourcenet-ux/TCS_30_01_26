import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, FileText } from 'lucide-react';

export default function DavosReport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Davos 2026: Signal Through The Noise | TheCurrentSource</title>
        <meta
          name="description"
          content="Exclusive report for newsletter subscribers: Davos 2026 - Signal Through The Noise"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
              Davos 2026: Signal Through The Noise
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 mb-8 text-center">
              Exclusive report for newsletter subscribers
            </p>

            {/* Download Button */}
            <div className="flex justify-center">
              <a
                href="/Files/davos_2026_signal_through_the_noise.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download Report (PDF)
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 text-center">
                Thank you for being a valued subscriber of TheCurrentSource newsletter
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
