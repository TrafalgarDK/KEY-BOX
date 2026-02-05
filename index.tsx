
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Retrait de l'extension .tsx ici pour laisser le resolver travailler

console.log("SYSTEM: Booting Key Box...");

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("SYSTEM: UI Rendered.");
} else {
  console.error("SYSTEM: Root container not found");
}
