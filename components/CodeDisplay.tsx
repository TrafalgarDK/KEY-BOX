
import React from 'react';

interface CodeDisplayProps {
  code: string | null;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code }) => {
  const digits = code ? code.split('') : ['-', '-', '-', '-'];

  return (
    <div className="flex space-x-3 md:space-x-5 mb-12">
      {digits.map((digit, index) => (
        <div
          key={index}
          className="relative w-16 h-24 md:w-20 md:h-28 flex items-center justify-center 
                     bg-[#121212] border-[1px] border-[#8A6E2F] rounded-md
                     shadow-[inset_0_2px_10px_rgba(0,0,0,1),_0_5px_15px_rgba(0,0,0,0.5)]
                     overflow-hidden transition-all duration-300"
        >
          {/* Subtle reflection on the glass */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          
          <span className="text-5xl md:text-6xl font-black brushed-gold-text drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
            {digit}
          </span>
          
          {/* Horizontal lines to mimic physical dial */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default CodeDisplay;
