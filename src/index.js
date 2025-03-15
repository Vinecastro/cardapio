import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importando o App para renderizar

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Renderizando o App aqui, não é necessário Router novamente */}
  </React.StrictMode>
);
