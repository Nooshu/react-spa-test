import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'

// Import pages directly for now to avoid lazy loading issues
import { Home } from '@/page-components/Home'
import { Forms } from '@/page-components/Forms'
import { Components } from '@/page-components/Components'
import { MojComponents } from '@/page-components/MojComponents'
import { Journey } from '@/page-components/Journey'
import { JourneySearch } from '@/page-components/JourneySearch'
import { JourneySearchByName } from '@/page-components/JourneySearchByName'
import { ManchesterCrownCourt } from '@/page-components/ManchesterCrownCourt'
import { BirminghamCrownCourt } from '@/page-components/BirminghamCrownCourt'
import { InnerLondonCrownCourt } from '@/page-components/InnerLondonCrownCourt'
import { NotFound } from '@/page-components/NotFound'

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
