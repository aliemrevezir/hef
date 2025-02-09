import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './utils/i18n';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('IT8cAk2-mACQuYoFo');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
