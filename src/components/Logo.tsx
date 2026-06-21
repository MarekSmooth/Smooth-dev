import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  /** Overrides the default height class — use "h-full" to fill a fixed-height parent exactly. */
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className }) => {
  // Icon-only mark for compact placements (header); full icon+wordmark lockup where there's room to breathe (footer).
  const iconHeight = size === 'sm' ? 'h-8' : size === 'lg' ? 'h-12' : 'h-10';
  const fullHeight = size === 'sm' ? 'h-12' : size === 'lg' ? 'h-20' : 'h-16';
  const heightClass = className ?? (showText ? fullHeight : iconHeight);

  return (
    <Link to="/" className="group inline-flex items-center">
      <img
        src={showText ? '/LogoFull.png' : '/LogoIcon.png'}
        alt="Smooth Development"
        loading={showText ? 'lazy' : 'eager'}
        className={`${heightClass} w-auto object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]`}
      />
    </Link>
  );
};

export default Logo;
