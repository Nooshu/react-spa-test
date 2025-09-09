import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Import GOV.UK Frontend SCSS
import 'govuk-frontend/govuk/all.scss'

// Import GOV.UK Frontend JavaScript
import { initAll } from 'govuk-frontend'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// Initialize GOV.UK Frontend JavaScript components
initAll()
