import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async"
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <HelmetProvider><App /></HelmetProvider>);
} else {
  createRoot(rootElement).render(<HelmetProvider><App /></HelmetProvider>);
}