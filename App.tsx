
import React, { useState, useCallback } from 'react';
import Logo from './components/Logo.tsx';
import CodeDisplay from './components/CodeDisplay.tsx';

const App: React.FC = () => {
  const [code, setCode] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCode = useCallback(() => {
    if (isGenerating) return;
    
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }

    setIsGenerating(true);
    
    let counter = 0;
    const duration = 25; 
    const interval = setInterval(() => {
      const randomCode = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      setCode(randomCode);
      counter++;
      
      if (counter > duration) {
        clearInterval(interval);
        setIsGenerating(false);
        if (window.navigator && window.navigator.vibrate) {
          window.navigator.vibrate([100, 50, 100]);
        }
      }
    }, 60);
  }, [isGenerating]);

  return (
    <div className="min-h-screen h-screen w-full flex flex-col items-center justify-between p-6 metallic-anthracite overflow-hidden select-none">
      <div className="fixed inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5 pointer-events-none z-0"></div>

      <header className="relative z-10 w-full text-center pt-10">
        <h1 className="text-5xl md:text-7xl font-black brushed-gold-text tracking-widest uppercase italic transform skew-x-[-5deg]">
          KEY BOX
        </h1>
        <div className="h-[2px] w-24 mx-auto mt-2 bg-gradient-to-r from-transparent via-[#C5A022] to-transparent"></div>
        <p className="text-[#C5A022] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold opacity-70 mt-3">
          Security System
        </p>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-lg">
        <div className="relative mb-8 transform hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-[#F9D423] opacity-10 blur-[80px]"></div>
          <Logo className="scale-90 md:scale-110" />
        </div>
        
        <div className="w-full flex flex-col items-center">
          <div className={`${isGenerating ? 'animate-pulse' : ''}`}>
            <CodeDisplay code={code} />
          </div>
          
          <button
            onClick={generateCode}
            disabled={isGenerating}
            className={`
              relative group overflow-hidden
              px-12 py-5 rounded-sm font-black text-xl md:text-2xl uppercase tracking-[0.25em]
              transition-all duration-300 transform active:scale-95 active:brightness-90
              ${isGenerating 
                ? 'bg-[#111] cursor-not-allowed opacity-50 border-gray-800' 
                : 'bg-gradient-to-b from-[#F9D423] via-[#C5A022] to-[#8A6E2F] shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_15px_rgba(249,212,35,0.1)] border-[#FFE787]'
              }
              text-black border-t-[1.5px] border-b-[5px] border-l-[1.5px] border-r-[1.5px]
            `}
          >
            <span className="relative z-10 flex items-center justify-center min-w-[220px]">
              {isGenerating ? 'CRYPTAGE...' : 'Générer Code'}
            </span>
            {!isGenerating && <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-30"></div>}
          </button>
        </div>
      </main>

      <footer className="relative z-10 w-full text-center pb-10">
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-[1px] bg-[#C5A022] opacity-30 mb-2"></div>
          <p className="text-[#C5A022] text-[9px] uppercase tracking-[0.5em] font-bold opacity-40">
            Premium Key Box v1.0
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
