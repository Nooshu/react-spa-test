import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'

// Import pages directly for now to avoid lazy loading issues
import { Home } from '@/pages/Home'
import { Forms } from '@/pages/Forms'
import { Components } from '@/pages/Components'
import { Performance } from '@/pages/Performance'
import { NotFound } from '@/pages/NotFound'

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <main className="govuk-main-wrapper app-main" id="main-content" role="main">
          <div className="govuk-width-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/components" element={<Components />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
