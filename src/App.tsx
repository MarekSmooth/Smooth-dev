import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <div className="bg-black text-white min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/made-by-smooth" element={<MadeBySmoothPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;