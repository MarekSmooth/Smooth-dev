import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import MadeBySmoothPage from './pages/MadeBySmoothPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <div className="bg-black text-white min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/made-by-smooth" element={<MadeBySmoothPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;