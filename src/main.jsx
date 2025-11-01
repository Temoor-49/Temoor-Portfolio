import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile';
import 'tailwindcss/tailwind.css'; // ADD THIS LINE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitProfile config={CONFIG} />
  </React.StrictMode>,
);