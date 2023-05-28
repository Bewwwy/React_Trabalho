import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Title from './componentes/title';
import Comp from './componentes/criar';
import Merc from './componentes/mercado';
import Comu from './componentes/opn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <App />
    <Comp />
    <Comu />
    <Merc />
  </React.StrictMode>
);