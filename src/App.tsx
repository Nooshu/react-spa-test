import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'

// Import pages directly for now to avoid lazy loading issues
import { Home } from '@/pages/Home'
import { Forms } from '@/pages/Forms'
import { Components } from '@/pages/Components'
import { MojComponents } from '@/pages/MojComponents'
import { Journey } from '@/pages/Journey'
import { JourneySearch } from '@/pages/JourneySearch'
import { JourneySearchByName } from '@/pages/JourneySearchByName'
import { ManchesterCrownCourt } from '@/pages/ManchesterCrownCourt'
import { BirminghamCrownCourt } from '@/pages/BirminghamCrownCourt'
import { InnerLondonCrownCourt } from '@/pages/InnerLondonCrownCourt'
import { NotFound } from '@/pages/NotFound'

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/components" element={<Components />} />
          <Route path="/moj-components" element={<MojComponents />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/journey/search" element={<JourneySearch />} />
          <Route path="/journey/search-by-name" element={<JourneySearchByName />} />
          <Route path="/court/manchester-crown-court" element={<ManchesterCrownCourt />} />
          <Route path="/court/birmingham-crown-court" element={<BirminghamCrownCourt />} />
          <Route path="/court/inner-london-crown-court" element={<InnerLondonCrownCourt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
