
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const startApp = () => {
  try {
    const container = document.getElementById('root');
    if (!container) throw new Error("Le conteneur 'root' est introuvable.");

    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("App KEY BOX démarrée avec succès.");
  } catch (error) {
    const errorDisplay = document.getElementById('error-display');
    if (errorDisplay) {
      errorDisplay.style.display = 'block';
      errorDisplay.innerHTML = "ERREUR REACT:<br>" + (error instanceof Error ? error.message : String(error));
    }
  }
};

// Exécution immédiate ou après chargement du DOM
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  startApp();
} else {
  window.addEventListener('DOMContentLoaded', startApp);
}
