import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='sticky'><h1>Expense Tracker 💵</h1></div>
    <App />
  </React.StrictMode>
);


