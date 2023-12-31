import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './global/app/index';
import GlobalStyles from './global/styles';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
);
