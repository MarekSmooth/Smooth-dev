import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Váš obrázek jako pozadí */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background\\ copy.png)'
        }}
      />
      
      {/* Overlay pro light/dark mode - světlejší v light mode, tmavší v dark mode */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/40"></div>
      
      {/* Extra světlý overlay jen pro light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 dark:hidden"></div>
    </div>
  );
};

export default BackgroundEffects;