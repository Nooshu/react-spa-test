import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { PhaseBanner } from './PhaseBanner'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <PhaseBanner />
      <main className="app-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
