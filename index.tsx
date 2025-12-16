/**
 * @file index.tsx
 * @author Ashraf Morningstar <https://github.com/AshrafMorningstar>
 * @copyright 2025 Ashraf Morningstar
 * @license MIT
 *
 * ðŸŒŒ Eigenfolio Quantum - The Neural-Interface Operating System
 * "The future is unwritten, but the code is compiled."
 */

// Main Entry Point
/**
 * EIGENFOLIO QUANTUM - The Ultimate Interactive Portfolio OS
 * 
 * Developed by: Ashraf Morningstar (https://github.com/AshrafMorningstar)
 * Repository: https://github.com/AshrafMorningstar/Eigenfolio-Quantum
 * 
 * © 2025 Ashraf Morningstar. All Rights Reserved.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
    console.error("Critical Error: Root element '#root' not found in DOM.");
    const newRoot = document.createElement('div');
    newRoot.id = 'root';
    document.body.appendChild(newRoot);
    // Proceed with new root or halt - here we proceed to try and save the render.
    ReactDOM.createRoot(newRoot).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
