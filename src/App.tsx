import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative bg-gray-200 dark:bg-dark-900 text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
          {/* Abstract Digital Background */}
          <BackgroundEffects />
          
          {/* Gradient overlay from navigation edge */}
          <div className="hidden lg:block fixed inset-y-0 left-20 xl:left-64 w-48 bg-gradient-to-r from-black/90 via-black/70 via-gray-800/50 via-gray-700/30 via-gray-600/15 via-gray-500/8 via-gray-400/4 to-transparent pointer-events-none z-10"></div>
          
          <Header />
          
          {/* Mobile Lightning and Gradient Effect */}
          <div className="lg:hidden fixed top-16 left-0 right-0 h-8 pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 via-gray-800/50 via-gray-700/30 via-gray-600/15 via-gray-500/8 via-gray-400/4 to-transparent"></div>
            <img 
              src="/Blesk bez pozadi use.png" 
              alt="Lightning Separator" 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 h-8 w-auto object-contain opacity-90"
            />
          </div>
          
          {/* Lightning Separator - at the border between navigation and content */}
          <div className="hidden lg:block fixed left-20 xl:left-64 top-0 h-screen w-32 pointer-events-none z-20">
            <img 
              src="/Blesk bez pozadi use.png" 
              alt="Lightning Separator" 
              className="h-screen w-full object-cover opacity-90 -translate-x-1/2"
            />
          </div>
          
          <Hero />
          <Services />
          <About />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;