
import React, { useState, useCallback } from 'react';

// --- COMPOSANT LOGO (Inliné pour fiabilité) ---
const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
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

// --- COMPOSANT CODE DISPLAY (Inliné pour fiabilité) ---
const CodeDisplay: React.FC<{ code: string | null }> = ({ code }) => {
  const digits = code ? code.split('') : ['-', '-', '-', '-'];
  return (
    <div className="flex space-x-3 mb-10">
      {digits.map((digit, index) => (
        <div key={index} className="relative w-16 h-24 flex items-center justify-center bg-[#121212] border border-[#8A6E2F] rounded-md shadow-[inset_0_2px_10px_rgba(0,0,0,1)]">
          <span className="text-5xl font-black brushed-gold-text">{digit}</span>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"></div>
        </div>
      ))}
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
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
      if (++counter > 20) {
        clearInterval(interval);
        setIsGenerating(false);
        if (window.navigator?.vibrate) window.navigator.vibrate([100, 50, 100]);
      }
    }, 60);
  }, [isGenerating]);

  return (
    <div className="min-h-screen h-screen w-full flex flex-col items-center justify-between p-6 bg-[#0f0f0f] overflow-hidden select-none">
      <header className="w-full text-center pt-10">
        <h1 className="text-5xl font-black brushed-gold-text tracking-widest uppercase italic transform skew-x-[-5deg]">KEY BOX</h1>
        <p className="text-[#C5A022] text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 mt-2">Security System</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <Logo className="mb-8" />
        <CodeDisplay code={code} />
        <button
          onClick={generateCode}
          disabled={isGenerating}
          className={`px-10 py-5 rounded-sm font-black text-xl uppercase tracking-widest transition-all ${isGenerating ? 'bg-[#111] opacity-50' : 'bg-gradient-to-b from-[#F9D423] to-[#8A6E2F] text-black shadow-lg active:scale-95'}`}
        >
          {isGenerating ? 'CRYPTAGE...' : 'Générer Code'}
        </button>
      </main>

      <footer className="w-full text-center pb-8">
        <p className="text-[#C5A022] text-[9px] uppercase tracking-[0.5em] font-bold opacity-40">Premium Key Box v1.1</p>
      </footer>
    </div>
  );
};

export default App;
