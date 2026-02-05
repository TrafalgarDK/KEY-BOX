
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  // Utilisation explicite de createElement pour éviter l'erreur #31
  root.render(React.createElement(App));
}
