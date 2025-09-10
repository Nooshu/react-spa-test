import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/main.scss'

// Initialize GOV.UK Frontend JavaScript
import 'govuk-frontend/dist/govuk/govuk-frontend.min.js'

// Initialize performance monitoring
import { performanceMonitor } from '@/utils/performanceMonitoring'
import { errorTracker } from '@/utils/errorTracking'

// Declare GOV.UK Frontend global
declare global {
  interface Window {
    GOVUKFrontend: {
      initAll: () => void
      Accordion: new (element: HTMLElement) => {
        init: () => void
      }
      Tabs: new (element: HTMLElement) => {
        init: () => void
      }
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

// Initialize monitoring
performanceMonitor.init()
errorTracker.trackUserAction('App Initialized', { 
  timestamp: Date.now(),
  url: window.location.href 
})

// Initialize GOV.UK Frontend components after React renders
setTimeout(() => {
  if (window.GOVUKFrontend) {
    window.GOVUKFrontend.initAll()
  }
}, 100)
