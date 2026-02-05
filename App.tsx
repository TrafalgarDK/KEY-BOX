
import React, { useState, useCallback } from 'react';
import Logo from './components/Logo';
import CodeDisplay from './components/CodeDisplay';

const App: React.FC = () => {
  const [code, setCode] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCode = useCallback(() => {
    if (isGenerating) return;
    setIsGenerating(true);
    
    let counter = 0;
    const interval = setInterval(() => {
      const randomCode = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      setCode(randomCode);
      counter++;
      
      if (counter > 15) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 40);
  }, [isGenerating]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 metallic-anthracite overflow-hidden select-none">
      {/* Glossy overlay layer */}
      <div className="fixed inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none z-0"></div>

      {/* Header */}
      <header className="relative z-10 w-full text-center mt-6">
        <h1 className="text-5xl md:text-7xl font-black brushed-gold-text tracking-widest uppercase italic transform skew-x-[-5deg]">
          KEY BOX
        </h1>
        <p className="text-[#C5A022] text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-70 mt-1">
          Générateur de Code Sécurisé
        </p>
      </header>

      {/* Main Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-lg">
        <div className="relative mb-14 group">
          {/* Halo effect behind logo */}
          <div className="absolute inset-0 bg-[#F9D423] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-1000"></div>
          <Logo />
        </div>
        
        <div className="w-full flex flex-col items-center">
          <CodeDisplay code={code} />
          
          <button
            onClick={generateCode}
            disabled={isGenerating}
            className={`
              relative group
              px-12 py-5 rounded-sm font-black text-xl md:text-2xl uppercase tracking-[0.2em]
              transition-all duration-500 transform
              ${isGenerating 
                ? 'bg-gray-800 cursor-not-allowed opacity-50 border-gray-600' 
                : 'bg-gradient-to-b from-[#F9D423] via-[#C5A022] to-[#8A6E2F] hover:shadow-[0_0_40px_rgba(249,212,35,0.4)] active:scale-95 border-[#FFE787]'
              }
              text-[#000] border-t-[1px] border-b-[3px]
            `}
          >
            <span className="relative z-10 flex items-center">
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Génération...
                </>
              ) : 'Générer un code'}
            </span>
            {/* Shimmer effect inside button */}
            {!isGenerating && <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-30"></div>}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full text-center mb-6">
        <div className="flex flex-col items-center gap-2">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C5A022] to-transparent opacity-30"></div>
          <p className="text-[#C5A022] text-[9px] uppercase tracking-widest font-medium opacity-40">
            Design Industriel &middot; Premium Edition
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
