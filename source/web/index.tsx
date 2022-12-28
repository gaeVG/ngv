// DEPENDENCIES
import React from 'react';
import { createRoot } from 'react-dom/client';
// COMPONENTS
import App from './app';
// STYLES
import './styles/main.scss';
// STORES

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);
