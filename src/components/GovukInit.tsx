'use client'

import React, { useEffect } from 'react'

// Declare GOV.UK Frontend types
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

export const GovukInit: React.FC = () => {
  useEffect(() => {
    // Import GOV.UK Frontend as ES module
    import('govuk-frontend/dist/govuk/govuk-frontend.min.js')
      .then((module) => {
        // The module exports initAll and other components
        // We need to attach them to window for compatibility
        if (module.initAll && typeof module.initAll === 'function') {
          window.GOVUKFrontend = {
            initAll: module.initAll,
            Accordion: module.Accordion,
            Tabs: module.Tabs,
          } as any
          module.initAll()
        }
      })
      .catch((error) => {
        console.warn('Failed to load GOV.UK Frontend:', error)
      })
  }, [])

  return null
}
