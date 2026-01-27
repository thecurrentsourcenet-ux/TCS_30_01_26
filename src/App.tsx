import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './components/AuthProvider';
import { AdManager } from './components/AdManager';
import AuthGuard from './components/AuthGuard';
import GA4RouteTracker from './components/GA4RouteTracker';

// Lazy load routes
const Timeline = lazy(() => import('./pages/Timeline'));

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const LegacyRedirect = lazy(() => import('./pages/LegacyRedirect'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));
const PricingPlans = lazy(() => import('./components/PricingPlans'));
const Privacy = lazy(() => import('./pages/Privacy'));
const HydrogenFutureComingSoon = lazy(() => import('./pages/HydrogenFutureComingSoon'));
const YearEndPresentation = lazy(() => import('./pages/YearEndPresentation'));
const HydrogenBook = lazy(() => import('./pages/HydrogenBook'));
const Dawn2009 = lazy(() => import('./pages/hydrogen-book/Dawn2009'));
const Infographics = lazy(() => import('./pages/Infographics'));
const RwandaInfographic = lazy(() => import('./pages/infographics/Rwanda'));
const UruguayInfographic = lazy(() => import('./pages/infographics/Uruguay'));
const GreenlandInfographic = lazy(() => import('./pages/infographics/Greenland'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

// Load Layout immediately since it's needed for all routes
import Layout from './components/Layout';

const PageLoader = () => (
  <div className="min-h-[40vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-electric"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GA4RouteTracker />
        <AuthProvider>
          <AdManager>
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Timeline />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/technical/future" element={<HydrogenFutureComingSoon />} />
                  <Route path="/year-end-presentation" element={<YearEndPresentation />} />
                  <Route path="/hydrogen-book" element={<HydrogenBook />} />
                  <Route path="/hydrogen/2009-dawn-of-a-new-hydrogen-era" element={<Dawn2009 />} />
                  <Route path="/infographics" element={<Infographics />} />
                  <Route path="/infographics/greenland-strategic-resources-energy-transition" element={<GreenlandInfographic />} />
                  <Route path="/infographics/rwanda-2030-clean-energy-climate" element={<RwandaInfographic />} />
                  <Route path="/infographics/uruguay-renewable-energy-success" element={<UruguayInfographic />} />
                  <Route path="/category/:category" element={<CategoryPage />} />
                  <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
                  <Route path="/articles/:slug" element={<ArticlePage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/digest/:id" element={<LegacyRedirect />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/newsletter" element={<PricingPlans />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route
                    path="/profile"
                    element={
                      <AuthGuard>
                        <Profile />
                      </AuthGuard>
                    }
                  />
                </Routes>
              </Suspense>
              </Layout>
          </AdManager>
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;