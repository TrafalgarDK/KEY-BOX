
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width="220"
        height="220"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gold3D" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFE787', stopOpacity: 1 }} />
            <stop offset="20%" style={{ stopColor: '#F9D423', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
            <stop offset="80%" style={{ stopColor: '#F9D423', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8A6E2F', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="metalBevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4a5568', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1a202c', stopOpacity: 1 }} />
          </linearGradient>

          <filter id="shadow3D" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <feOffset dx="4" dy="8" result="offsetblur" />
            <feFlood floodColor="black" floodOpacity="0.7" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="innerBevel">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#ffffff" result="specOut">
              <fePointLight x="-50" y="-100" z="200" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>

        {/* Outer Shadow Circle for Depth */}
        <circle cx="120" cy="120" r="105" fill="black" fillOpacity="0.3" filter="url(#shadow3D)" />

        {/* Main Box Outer Frame (3D effect with multiple layers) */}
        <rect x="25" y="25" width="190" height="190" rx="15" fill="#2d3748" filter="url(#shadow3D)" />
        <rect x="30" y="30" width="180" height="180" rx="12" fill="url(#metalBevel)" />
        
        {/* Inner Chamber with depth */}
        <rect x="45" y="45" width="150" height="150" rx="8" fill="#111" />
        <rect x="48" y="48" width="144" height="144" rx="6" fill="rgba(255,215,0,0.05)" stroke="url(#gold3D)" strokeWidth="0.5" />

        {/* Ancient Key with 3D shadows */}
        <g transform="translate(65, 55) scale(0.75)" filter="url(#innerBevel)">
          {/* Key Bow */}
          <path
            d="M75 10C55.67 10 40 25.67 40 45C40 59.81 49.19 72.48 62.19 77.56L62.19 180C62.19 185.52 66.67 190 72.19 190H77.81C83.33 190 87.81 185.52 87.81 180V77.56C100.81 72.48 110 59.81 110 45C110 25.67 94.33 10 75 10ZM75 65C63.95 65 55 56.05 55 45C55 33.95 63.95 25 75 25C86.05 25 95 33.95 95 45C95 56.05 86.05 65 75 65Z"
            fill="url(#gold3D)"
            stroke="#5c4a1b"
            strokeWidth="0.5"
          />
          {/* Key Teeth */}
          <path
            d="M87.81 120H108C110 120 112 122 112 124V136C112 138 110 140 108 140H87.81V120Z"
            fill="url(#gold3D)"
          />
          <path
            d="M87.81 155H118C120 155 122 157 122 159V171C122 173 120 175 118 175H87.81V155Z"
            fill="url(#gold3D)"
          />
        </g>
        
        {/* Bolts on the corners for industrial look */}
        {[35, 205].map(x => [35, 205].map(y => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#4a5568" stroke="#1a202c" strokeWidth="1" />
        )))}
      </svg>
    </div>
  );
};

export default Logo;
