
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("SYSTEM: Booting Key Box...");

const init = () => {
  const container = document.getElementById('root');
  if (!container) return;

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("SYSTEM: UI Rendered.");
  } catch (e) {
    console.error("SYSTEM: Render failure", e);
    const errDisplay = document.getElementById('error-display');
    if (errDisplay) {
      errDisplay.style.display = 'block';
      errDisplay.innerText = "Erreur de rendu: " + e;
    }
  }
};

if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init);
}
