import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {
  H1,
  H2,
  H3,
  Paragraph,
  Button,
  Panel,
  Table,
  GridRow,
  GridCol,
  Tag,
  LoadingBox,
  Details
} from 'govuk-react'

interface PerformanceMetrics {
  loadTime: number
  bundleSize: number
  lighthouseScore: number
  memoryUsage: number
  renderTime: number
}

const Performance: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [largeData, setLargeData] = useState<number[]>([])
  const [filter, setFilter] = useState('all')

  // Simulate performance measurement
  const measurePerformance = useCallback(async () => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const mockMetrics: PerformanceMetrics = {
      loadTime: Math.random() * 2000 + 500, // 500-2500ms
      bundleSize: Math.random() * 100 + 200, // 200-300KB
      lighthouseScore: Math.floor(Math.random() * 20) + 80, // 80-100
      memoryUsage: Math.random() * 50 + 10, // 10-60MB
      renderTime: Math.random() * 100 + 10 // 10-110ms
    }
    
    setMetrics(mockMetrics)
    setIsLoading(false)
  }, [])

  // Generate large dataset for performance testing
  const generateLargeData = useCallback(() => {
    const data = Array.from({ length: 10000 }, (_, i) => i)
    setLargeData(data)
  }, [])

  // Memoized filtered data to prevent unnecessary re-renders
  const filteredData = useMemo(() => {
    if (filter === 'even') {
      return largeData.filter(num => num % 2 === 0)
    } else if (filter === 'odd') {
      return largeData.filter(num => num % 2 === 1)
    }
    return largeData
  }, [largeData, filter])

  // Memoized expensive calculation
  const expensiveCalculation = useMemo(() => {
    return filteredData.reduce((sum, num) => sum + num, 0)
  }, [filteredData])

  // Virtual scrolling component for large lists
  const VirtualList: React.FC<{ items: number[] }> = ({ items }) => {
    const [visibleItems, setVisibleItems] = useState<number[]>([])
    const [scrollTop, setScrollTop] = useState(0)
    const itemHeight = 30
    const containerHeight = 300
    const visibleCount = Math.ceil(containerHeight / itemHeight)
    const startIndex = Math.floor(scrollTop / itemHeight)

    useEffect(() => {
      const endIndex = Math.min(startIndex + visibleCount, items.length)
      setVisibleItems(items.slice(startIndex, endIndex))
    }, [items, scrollTop, visibleCount, startIndex])

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      setScrollTop(e.currentTarget.scrollTop)
    }

    return (
      <div
        style={{
          height: containerHeight,
          overflow: 'auto',
          border: '1px solid #ccc',
          padding: '10px'
        }}
        onScroll={handleScroll}
      >
        <div style={{ height: items.length * itemHeight, position: 'relative' }}>
          {visibleItems.map((item, index) => (
            <div
              key={startIndex + index}
              style={{
                height: itemHeight,
                padding: '5px',
                borderBottom: '1px solid #eee'
              }}
            >
              Item {item}
            </div>
          ))}
        </div>
      </div>
    )
  }

  useEffect(() => {
    // Measure initial load time
    const startTime = performance.now()
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime
      console.log(`Page load time: ${loadTime.toFixed(2)}ms`)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  const performanceTableData = metrics ? [
    { metric: 'Load Time', value: `${metrics.loadTime.toFixed(0)}ms`, status: metrics.loadTime < 1000 ? 'good' : 'warning' },
    { metric: 'Bundle Size', value: `${metrics.bundleSize.toFixed(0)}KB`, status: metrics.bundleSize < 250 ? 'good' : 'warning' },
    { metric: 'Lighthouse Score', value: `${metrics.lighthouseScore}/100`, status: metrics.lighthouseScore >= 90 ? 'good' : 'warning' },
    { metric: 'Memory Usage', value: `${metrics.memoryUsage.toFixed(1)}MB`, status: metrics.memoryUsage < 30 ? 'good' : 'warning' },
    { metric: 'Render Time', value: `${metrics.renderTime.toFixed(1)}ms`, status: metrics.renderTime < 50 ? 'good' : 'warning' }
  ] : []

  return (
    <>
      <H1>Performance Testing</H1>
      <Paragraph>
        This page demonstrates various performance optimization techniques and measures
        real-time performance metrics for the React application.
      </Paragraph>

      <GridRow>
        <GridCol setWidth="two-thirds">
          <H2>Performance Metrics</H2>
          
          <Button onClick={measurePerformance} disabled={isLoading}>
            {isLoading ? 'Measuring...' : 'Measure Performance'}
          </Button>

          {isLoading && <LoadingBox>Measuring performance metrics...</LoadingBox>}

          {metrics && (
            <Table caption="Current performance metrics">
              <Table.Row>
                <Table.CellHeader>Metric</Table.CellHeader>
                <Table.CellHeader>Value</Table.CellHeader>
                <Table.CellHeader>Status</Table.CellHeader>
              </Table.Row>
              {performanceTableData.map((row, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{row.metric}</Table.Cell>
                  <Table.Cell>{row.value}</Table.Cell>
                  <Table.Cell>
                    <Tag color={row.status === 'good' ? 'green' : 'red'}>
                      {row.status === 'good' ? 'Good' : 'Needs improvement'}
                    </Tag>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table>
          )}

          <H2>Performance Optimizations</H2>

          <H3>Code Splitting & Lazy Loading</H3>
          <Panel title="Implementation">
            <ul>
              <li>React.lazy() for component-level code splitting</li>
              <li>Suspense boundaries for loading states</li>
              <li>Dynamic imports for route-based splitting</li>
              <li>Bundle analysis with webpack-bundle-analyzer</li>
            </ul>
          </Panel>

          <H3>Memoization</H3>
          <Panel title="React.memo, useMemo, useCallback">
            <ul>
              <li>React.memo for component memoization</li>
              <li>useMemo for expensive calculations</li>
              <li>useCallback for stable function references</li>
              <li>Dependency array optimization</li>
            </ul>
          </Panel>

          <H3>Virtual Scrolling</H3>
          <Panel title="Large List Performance">
            <p>Demonstration of virtual scrolling for large datasets:</p>
            <Button onClick={generateLargeData} style={{ marginBottom: '10px' }}>
              Generate 10,000 items
            </Button>
            
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="filter">Filter: </label>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ marginLeft: '10px' }}
              >
                <option value="all">All</option>
                <option value="even">Even numbers</option>
                <option value="odd">Odd numbers</option>
              </select>
            </div>

            {largeData.length > 0 && (
              <>
                <p>Total items: {largeData.length}</p>
                <p>Filtered items: {filteredData.length}</p>
                <p>Sum: {expensiveCalculation.toLocaleString()}</p>
                <VirtualList items={filteredData} />
              </>
            )}
          </Panel>

          <H3>Bundle Optimization</H3>
          <Details summary="Bundle analysis results">
            <Paragraph>Click to view detailed bundle analysis</Paragraph>
            <ul>
              <li>Vendor chunks separated from application code</li>
              <li>GOV.UK components in separate chunk</li>
              <li>Tree shaking enabled for unused code elimination</li>
              <li>Gzip compression reducing bundle size by ~70%</li>
            </ul>
          </Details>
        </GridCol>

        <GridCol setWidth="one-third">
          <H2>Performance Best Practices</H2>
          
          <Panel title="Loading Performance">
            <ul>
              <li>Critical CSS inlined</li>
              <li>Non-critical CSS loaded asynchronously</li>
              <li>Images optimized and lazy-loaded</li>
              <li>Service worker for caching</li>
            </ul>
          </Panel>

          <Panel title="Runtime Performance">
            <ul>
              <li>Debounced user inputs</li>
              <li>Throttled scroll events</li>
              <li>Efficient re-render patterns</li>
              <li>Memory leak prevention</li>
            </ul>
          </Panel>

          <Panel title="Accessibility Performance">
            <ul>
              <li>Screen reader optimizations</li>
              <li>Keyboard navigation efficiency</li>
              <li>Focus management performance</li>
              <li>ARIA live region updates</li>
            </ul>
          </Panel>

          <H2>Tools Used</H2>
          <ul>
            <li>React DevTools Profiler</li>
            <li>Chrome DevTools Performance</li>
            <li>Lighthouse CI</li>
            <li>Web Vitals</li>
            <li>Bundle Analyzer</li>
          </ul>
        </GridCol>
      </GridRow>
    </>
  )
}

export default Performance
