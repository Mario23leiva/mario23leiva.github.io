import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <>
    <App />
  </>
);
