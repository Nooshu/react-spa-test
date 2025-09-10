import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/main.scss'

// Initialize GOV.UK Frontend JavaScript
import 'govuk-frontend/dist/govuk/govuk-frontend.min.js'

// Declare GOV.UK Frontend global
declare global {
  interface Window {
    GOVUKFrontend: {
      initAll: () => void
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Initialize GOV.UK Frontend components after React renders
setTimeout(() => {
  if (window.GOVUKFrontend) {
    window.GOVUKFrontend.initAll()
  }
}, 100)
