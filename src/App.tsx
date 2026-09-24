import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

// Only the homepage ships in the main bundle — it's what mobile visitors land on first.
// Every other route loads on demand, so first load doesn't pay for pages the visitor may never open.
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MadeBySmoothPage = lazy(() => import('./pages/MadeBySmoothPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MarekPage = lazy(() => import('./pages/MarekPage'));

// A client-side route change keeps the previous page's scroll position, so a link clicked
// near the bottom of one page would open the next page near its bottom. Start each new page
// at the top — except on browser back/forward (POP), where returning to the old spot is expected.
function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // 'instant' overrides the global `scroll-behavior: smooth`, which would otherwise animate the jump.
    if (navigationType !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, navigationType]);

  return null;
}

// Shared chrome (Smooth Development header/footer) for the main site's routes only —
// /marek is Marek's own page and must never show the Smooth Development logo or nav.
function SiteLayout() {
  return (
    <div className="bg-black text-white min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/marek"
              element={
                <Suspense fallback={null}>
                  <MarekPage />
                </Suspense>
              }
            />
            <Route element={<SiteLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/made-by-smooth" element={<MadeBySmoothPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Any unmatched path (old bookmarks/links like /cenik, typos, etc.) — without this,
                  React Router renders nothing at all for an unknown path, not even the header/footer. */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
