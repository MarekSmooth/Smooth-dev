import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'services', 'portfolio', 'contact']);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router basename="/Smooth-dev/">
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
  </Routes>
</Router>
    </ThemeProvider>
  );
};

export default App;
