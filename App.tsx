
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
      
      if (counter > 20) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 50);
  }, [isGenerating]);

  return (
    <div className="min-h-screen h-screen w-full flex flex-col items-center justify-between p-6 metallic-anthracite overflow-hidden select-none">
      {/* Glossy overlay layer */}
      <div className="fixed inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none z-0"></div>

      {/* Header */}
      <header className="relative z-10 w-full text-center pt-8">
        <h1 className="text-5xl md:text-7xl font-black brushed-gold-text tracking-widest uppercase italic transform skew-x-[-5deg]">
          KEY BOX
        </h1>
        <div className="h-[2px] w-1/2 mx-auto mt-2 bg-gradient-to-r from-transparent via-[#C5A022] to-transparent opacity-50"></div>
        <p className="text-[#C5A022] text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-80 mt-2">
          Générateur de Code Sécurisé
        </p>
      </header>

      {/* Main Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-lg">
        <div className="relative mb-10 group">
          <div className="absolute inset-0 bg-[#F9D423] opacity-5 blur-[60px] transition-opacity duration-1000"></div>
          <Logo className="transform scale-90 md:scale-100" />
        </div>
        
        <div className="w-full flex flex-col items-center">
          <CodeDisplay code={code} />
          
          <button
            onClick={generateCode}
            disabled={isGenerating}
            className={`
              relative group overflow-hidden
              px-10 py-5 rounded-md font-black text-xl md:text-2xl uppercase tracking-[0.2em]
              transition-all duration-300 transform active:scale-95
              ${isGenerating 
                ? 'bg-[#1a1a1a] cursor-not-allowed opacity-50 border-gray-700' 
                : 'bg-gradient-to-b from-[#F9D423] via-[#C5A022] to-[#8A6E2F] shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(249,212,35,0.2)] hover:shadow-[0_0_40px_rgba(249,212,35,0.4)] border-[#FFE787]'
              }
              text-black border-t-[1px] border-b-[4px] border-l-[1px] border-r-[1px]
            `}
          >
            <span className="relative z-10 flex items-center justify-center min-w-[200px]">
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Génération...
                </>
              ) : 'Générer code'}
            </span>
            {!isGenerating && <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-40"></div>}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full text-center pb-8">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#C5A022] text-[9px] uppercase tracking-widest font-medium opacity-50">
            Design Industriel &middot; Premium Edition
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
