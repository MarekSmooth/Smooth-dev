import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="relative bg-black/80 backdrop-blur-sm border border-primary-500/30 rounded-lg px-4 py-2 transition-all duration-300 hover:border-primary-400/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 group overflow-hidden"
        aria-label="Toggle theme"
      >
        {/* Neon glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Theme options */}
        <div className="relative flex items-center space-x-3">
          <span 
            className={`text-sm font-bold transition-all duration-300 ${
              !isDark 
                ? 'text-gold-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse' 
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            ☀
          </span>
          
          {/* Separator */}
          <div className="w-px h-4 bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>
          
          <span 
            className={`text-sm font-bold transition-all duration-300 ${
              isDark 
                ? 'text-primary-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse' 
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            ☾
          </span>
        </div>
        
        {/* Active indicator */}
        <div 
          className={`absolute bottom-0 h-0.5 transition-all duration-300 ${
            !isDark 
              ? 'left-2 w-6 bg-gradient-to-r from-gold-400 to-gold-600' 
              : 'right-2 w-6 bg-gradient-to-r from-primary-400 to-primary-600'
          }`}
          style={{
            boxShadow: !isDark 
              ? '0 0 8px rgba(251, 191, 36, 0.6)' 
              : '0 0 8px rgba(56, 189, 248, 0.6)'
          }}
        ></div>
      </button>
    </div>
  );
};

export default ThemeToggle;