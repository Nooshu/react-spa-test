import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { PhaseBanner } from './PhaseBanner'
import { SkipLink } from './SkipLink'
import { CookieBanner } from './CookieBanner'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <CookieBanner />
      <SkipLink>Skip to main content</SkipLink>
      <Header />
      <div className="govuk-width-container">
        <PhaseBanner />
        <main className="govuk-main-wrapper app-main" id="main-content" role="main">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
