import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, TrendingUp, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function YearEndPresentation() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>The Energy Year in Review: 2025 - Free Presentation | TheCurrentSource</title>
        <meta
          name="description"
          content="Download our free 2025 energy year-end review: A year of accelerating ambition meets physical reality. 13 visual slides covering the energy transition, grid challenges, and key signals for the year ahead."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecurrentsource.net/year-end-presentation" />

        <meta property="og:title" content="The Energy Year in Review: 2025 - Free Presentation" />
        <meta property="og:description" content="A year of accelerating ambition meets physical reality—explained in 13 visual slides. Download our free energy year-end review." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecurrentsource.net/year-end-presentation" />
        <meta property="og:image" content="https://thecurrentsource.net/slide-preview-1.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Energy Year in Review: 2025 - Free Presentation" />
        <meta name="twitter:description" content="A year of accelerating ambition meets physical reality—explained in 13 visual slides." />
        <meta name="twitter:image" content="https://thecurrentsource.net/slide-preview-1.jpg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-900 font-medium mb-8">
              <FileText className="w-4 h-4" />
              <span>Free Year-End Report</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              The Energy Year in Review: 2025
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A year of accelerating ambition meets physical reality—explained in 13 visual slides.
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Download the presentation (free)
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="mt-6 text-sm text-slate-500">
              No payment required • Delivered instantly via email
            </p>
          </div>
        </section>

        {/* Why This Presentation Is Different */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why this presentation is different
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Signal over noise
                  </h3>
                  <p className="text-slate-600">
                    Only the most relevant trends that shaped the energy system this year—no filler.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Neutral and analytical
                  </h3>
                  <p className="text-slate-600">
                    Data-driven perspective without hype, ideology, or vendor agendas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Built for professionals
                  </h3>
                  <p className="text-slate-600">
                    Designed for energy professionals, policymakers, analysts, and informed readers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Fast to review
                  </h3>
                  <p className="text-slate-600">
                    Get the full picture in just a few minutes—13 slides, no fluff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Find Inside */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
              What you'll find inside
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              A high-level overview of the structural shifts, bottlenecks, and signals that defined the energy landscape.
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 sm:p-10">
              <ul className="space-y-5">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">
                    What accelerated—and what didn't—in the energy transition
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">
                    Renewables, grids, and system bottlenecks
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">
                    How energy security thinking evolved
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">
                    The key structural tensions shaping the year
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">
                    Signals to watch in the year ahead
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              Preview
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Slide preview 1 - Title slide */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-300 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="/slide-preview-1.jpg"
                  alt="The Energy Year in Review: 2025 - Presentation title slide"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Placeholder for slide preview 2 */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden border border-slate-300 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <p className="text-sm text-slate-500 font-medium">
                      Additional slides preview
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-500 mt-6 text-sm">
              Preview of presentation title slide
            </p>
          </div>
        </section>

        {/* About The Current Source */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              About The Current Source
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The Current Source is an independent newsletter that curates and explains the most important signals
              in energy, climate, and the global energy transition—clearly and without hype. We serve energy
              professionals, policymakers, and informed readers seeking signal over noise.
            </p>
          </div>
        </section>

        {/* Mailchimp Signup Section */}
        <section ref={formRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Get your free presentation
              </h2>
              <p className="text-lg text-slate-600">
                Enter your email below to receive the year-end presentation instantly, plus future energy briefings.
              </p>
            </div>

            {/* Mailchimp Embedded Form Container */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 sm:p-10">
              <div id="mc_embed_shell">
                <div id="mc_embed_signup">
                  <form
                    action="https://gmail.us22.list-manage.com/subscribe/post?u=a655408a1d3c6b2169d9ee551&id=0cc545a8de&f_id=00bbc2e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                  >
                    <div id="mc_embed_signup_scroll" className="space-y-6">
                      {/* Email Field */}
                      <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL" className="block text-base font-semibold text-slate-700 mb-2">
                          Email Address <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          className="w-full px-4 py-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                          id="mce-EMAIL"
                          required
                          defaultValue=""
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* First Name and Last Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mc-field-group">
                          <label htmlFor="mce-FNAME" className="block text-sm font-medium text-slate-700 mb-2">
                            First Name (optional)
                          </label>
                          <input
                            type="text"
                            name="FNAME"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                            id="mce-FNAME"
                            defaultValue=""
                            placeholder="First Name"
                          />
                        </div>

                        <div className="mc-field-group">
                          <label htmlFor="mce-LNAME" className="block text-sm font-medium text-slate-700 mb-2">
                            Last Name (optional)
                          </label>
                          <input
                            type="text"
                            name="LNAME"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                            id="mce-LNAME"
                            defaultValue=""
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      {/* Response Messages */}
                      <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                      </div>

                      {/* Bot Protection */}
                      <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="text" name="b_a655408a1d3c6b2169d9ee551_0cc545a8de" tabIndex={-1} defaultValue="" />
                      </div>

                      {/* Submit Button */}
                      <div className="clear pt-2">
                        <button
                          type="submit"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors cursor-pointer shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <FileText className="w-5 h-5" />
                          Send me the presentation
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <p className="text-sm text-slate-500 text-center mt-6">
                No spam. Unsubscribe at any time. We respect your privacy.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600">
                By subscribing, you'll also receive our weekly energy briefings—curated insights on what's
                happening in the global energy system.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get the presentation and receive future energy briefings for free
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join energy professionals staying informed on what matters.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-blue-600 text-lg font-semibold rounded-lg transition-colors shadow-lg"
            >
              Get started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Footer Note */}
        <div className="py-8 px-4 bg-slate-50 text-center">
          <p className="text-sm text-slate-500">
            Questions? Contact us at{' '}
            <a href="mailto:contact@thecurrentsource.net" className="text-blue-600 hover:underline">
              contact@thecurrentsource.net
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
