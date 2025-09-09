import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  return (
    <div>
      <nav>
        <h1>React A11y Test</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/forms">Forms</Link></li>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/performance">Performance</Link></li>
        </ul>
      </nav>
      <main id="main-content">
        {children}
      </main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  )
}

export default Layout
