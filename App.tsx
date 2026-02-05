
import React, { useState, useCallback } from 'react';

const Logo: React.FC = () => (
  <div className="relative flex items-center justify-center scale-90">
    <svg width="200" height="200" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFE787' }} />
          <stop offset="50%" style={{ stopColor: '#B8860B' }} />
          <stop offset="100%" style={{ stopColor: '#8A6E2F' }} />
        </linearGradient>
      </defs>
      <rect x="25" y="25" width="190" height="190" rx="15" fill="#2d3748" />
      <rect x="30" y="30" width="180" height="180" rx="12" fill="#1a202c" />
      <rect x="45" y="45" width="150" height="150" rx="8" fill="#111" />
      <g transform="translate(65, 55) scale(0.75)">
        <path d="M75 10C55.67 10 40 25.67 40 45C40 59.81 49.19 72.48 62.19 77.56L62.19 180C62.19 185.52 66.67 190 72.19 190H77.81C83.33 190 87.81 185.52 87.81 180V77.56C100.81 72.48 110 59.81 110 45C110 25.67 94.33 10 75 10Z" fill="url(#gold3D)" />
        <rect x="87" y="120" width="25" height="20" rx="2" fill="url(#gold3D)" />
        <rect x="87" y="155" width="35" height="20" rx="2" fill="url(#gold3D)" />
      </g>
    </svg>
  </div>
);

const App: React.FC = () => {
  const [code, setCode] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCode = useCallback(() => {
    if (isGenerating) return;
    if (window.navigator?.vibrate) window.navigator.vibrate(50);
    setIsGenerating(true);
    let counter = 0;
    const interval = setInterval(() => {
      setCode(Math.floor(Math.random() * 10000).toString().padStart(4, '0'));
      if (++counter > 15) {
        clearInterval(interval);
        setIsGenerating(false);
        if (window.navigator?.vibrate) window.navigator.vibrate([100, 50, 100]);
      }
    }, 70);
  }, [isGenerating]);

  const digits = code ? code.split('') : ['-', '-', '-', '-'];

  return (
    <div className="min-h-screen h-screen w-full flex flex-col items-center justify-between p-6 bg-[#0f0f0f] overflow-hidden select-none">
      <header className="w-full text-center pt-8">
        <h1 className="text-4xl font-black brushed-gold-text tracking-widest uppercase italic transform skew-x-[-5deg]">KEY BOX</h1>
        <p className="text-[#C5A022] text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 mt-1">Security Terminal</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <Logo />
        
        <div className="flex space-x-2 mt-4 mb-10">
          {digits.map((digit, index) => (
            <div key={index} className="relative w-14 h-20 flex items-center justify-center bg-[#121212] border border-[#8A6E2F]/50 rounded-md shadow-[inset_0_2px_8px_rgba(0,0,0,1)]">
              <span className="text-4xl font-black brushed-gold-text">{digit}</span>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"></div>
            </div>
          ))}
        </div>

        <button
          onClick={generateCode}
          disabled={isGenerating}
          className={`px-10 py-5 rounded-sm font-black text-lg uppercase tracking-widest transition-all active:scale-95 ${
            isGenerating 
            ? 'bg-[#111] text-[#333] border border-[#222]' 
            : 'bg-gradient-to-b from-[#F9D423] to-[#8A6E2F] text-black shadow-[0_10px_20px_rgba(0,0,0,0.5)]'
          }`}
        >
          {isGenerating ? 'CHIFFREMENT...' : 'Générer Code'}
        </button>
      </main>

      <footer className="w-full text-center pb-6">
        <p className="text-[#C5A022] text-[8px] uppercase tracking-[0.5em] font-bold opacity-30 italic">High Encryption Standard v1.2</p>
      </footer>
    </div>
  );
};

export default App;
