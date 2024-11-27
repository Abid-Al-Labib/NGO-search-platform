import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { ThemeProvider } from "./context/ThemeContext";
import './index.css'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
