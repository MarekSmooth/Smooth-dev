import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const imgHeight = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-12' : 'h-10';
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base';

  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      {/* Icon — LogoIcon.png = favicon bez bílého pozadí */}
      <img
        src="/LogoIcon.png"
        alt="Smooth Development"
        className={`${imgHeight} w-auto object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]`}
      />

      {/* Text */}
      {showText && (
        <div className={`font-display ${textSize} font-bold tracking-tight leading-none`}>
          <span className="text-white">Smooth</span>
          <span
            className="ml-1"
            style={{
              background: 'linear-gradient(90deg, #a78bfa, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Development
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
