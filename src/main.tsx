import React from 'react'
import ReactDOM from 'react-dom/client'
import './config/i18next-config';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
