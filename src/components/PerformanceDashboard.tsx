import React, { useState, useEffect } from 'react'
import { usePerformanceMonitoring } from '@/hooks/usePerformanceMonitoring'
import { performanceBudgetMonitor } from '@/utils/performanceBudgets'

interface DashboardMetrics {
  memoryUsage: number | null
  bundleSize: number | null
  routeChangeTime: number | null
  userInteractions: number
  errors: number
  sessionDuration: number
}

export const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    memoryUsage: null,
    bundleSize: null,
    routeChangeTime: null,
    userInteractions: 0,
    errors: 0,
    sessionDuration: 0,
  })

  const [sessionStart] = useState(Date.now())
  const { trackCustomMetric, getPerformanceBudgets } = usePerformanceMonitoring()

  useEffect(() => {
    // Track session duration
    const updateSessionDuration = () => {
      const duration = Date.now() - sessionStart
      setMetrics(prev => ({ ...prev, sessionDuration: duration }))
    }

    const interval = setInterval(updateSessionDuration, 1000)
    return () => clearInterval(interval)
  }, [sessionStart])

  useEffect(() => {
    // Get memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory
      const memoryUsageMB = memory.usedJSHeapSize / 1024 / 1024
      setMetrics(prev => ({ ...prev, memoryUsage: memoryUsageMB }))
      
      // Track memory usage
      trackCustomMetric('MemoryUsage', memoryUsageMB, {
        totalJSHeapSize: memory.totalJSHeapSize / 1024 / 1024,
        jsHeapSizeLimit: memory.jsHeapSizeLimit / 1024 / 1024,
      })
    }

    // Get bundle sizes
    const resources = performance.getEntriesByType('resource')
    const jsResources = resources.filter(entry => 
      entry.name.includes('.js') && !entry.name.includes('node_modules')
    )
    
    const totalBundleSize = jsResources.reduce((sum, resource) => 
      sum + (resource.transferSize || 0), 0
    )
    
    setMetrics(prev => ({ ...prev, bundleSize: totalBundleSize }))
    trackCustomMetric('BundleSize', totalBundleSize)

    // Track user interactions
    const trackInteraction = () => {
      setMetrics(prev => ({ ...prev, userInteractions: prev.userInteractions + 1 }))
    }

    const events = ['click', 'keydown', 'scroll']
    events.forEach(eventType => {
      document.addEventListener(eventType, trackInteraction, { passive: true })
    })

    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, trackInteraction)
      })
    }
  }, [trackCustomMetric])

  const budgets = getPerformanceBudgets()

  const formatBytes = (bytes: number | null): string => {
    if (bytes === null) return 'Loading...'
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${ms}ms`
    return `${(ms / 1000).toFixed(1)}s`
  }

  const getStatusColor = (metric: string, value: number): string => {
    const status = performanceBudgetMonitor.checkBudget(metric, value)
    switch (status) {
      case 'good': return 'govuk-tag--green'
      case 'needs-improvement': return 'govuk-tag--yellow'
      case 'poor': return 'govuk-tag--red'
      default: return 'govuk-tag--grey'
    }
  }

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <h2 className="govuk-heading-l">Performance Dashboard</h2>
        
        {/* Real-time Metrics */}
        <div className="govuk-grid-row govuk-!-margin-bottom-6">
          <div className="govuk-grid-column-one-quarter">
            <div className="govuk-card">
              <div className="govuk-card__content">
                <h3 className="govuk-heading-s">Memory Usage</h3>
                <p className="govuk-body-s">
                  <span className={`govuk-tag ${getStatusColor('MemoryUsage', metrics.memoryUsage || 0)}`}>
                    {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)} MB` : 'Loading...'}
                  </span>
                </p>
                <p className="govuk-body-xs">
                  Budget: &lt;{budgets.MemoryUsage.good}MB (good), &lt;{budgets.MemoryUsage.poor}MB (poor)
                </p>
              </div>
            </div>
          </div>

          <div className="govuk-grid-column-one-quarter">
            <div className="govuk-card">
              <div className="govuk-card__content">
                <h3 className="govuk-heading-s">Bundle Size</h3>
                <p className="govuk-body-s">
                  <span className={`govuk-tag ${getStatusColor('BundleSize', metrics.bundleSize || 0)}`}>
                    {formatBytes(metrics.bundleSize)}
                  </span>
                </p>
                <p className="govuk-body-xs">
                  Budget: &lt;{formatBytes(budgets.BundleSize.good)} (good), &lt;{formatBytes(budgets.BundleSize.poor)} (poor)
                </p>
              </div>
            </div>
          </div>

          <div className="govuk-grid-column-one-quarter">
            <div className="govuk-card">
              <div className="govuk-card__content">
                <h3 className="govuk-heading-s">User Interactions</h3>
                <p className="govuk-body-s">
                  <span className="govuk-tag govuk-tag--blue">
                    {metrics.userInteractions}
                  </span>
                </p>
                <p className="govuk-body-xs">
                  Clicks, scrolls, and key presses tracked
                </p>
              </div>
            </div>
          </div>

          <div className="govuk-grid-column-one-quarter">
            <div className="govuk-card">
              <div className="govuk-card__content">
                <h3 className="govuk-heading-s">Session Duration</h3>
                <p className="govuk-body-s">
                  <span className="govuk-tag govuk-tag--blue">
                    {formatTime(metrics.sessionDuration)}
                  </span>
                </p>
                <p className="govuk-body-xs">
                  Time since page load
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Budgets */}
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <h3 className="govuk-heading-m">Performance Budgets</h3>
            <div className="govuk-table-responsive">
              <table className="govuk-table">
                <thead className="govuk-table__head">
                  <tr className="govuk-table__row">
                    <th className="govuk-table__header">Metric</th>
                    <th className="govuk-table__header">Good Threshold</th>
                    <th className="govuk-table__header">Poor Threshold</th>
                    <th className="govuk-table__header">Description</th>
                  </tr>
                </thead>
                <tbody className="govuk-table__body">
                  {Object.entries(budgets).map(([metric, budget]) => (
                    <tr key={metric} className="govuk-table__row">
                      <td className="govuk-table__cell">
                        <strong>{metric}</strong>
                      </td>
                      <td className="govuk-table__cell">
                        <span className="govuk-tag govuk-tag--green">
                          {metric === 'BundleSize' ? formatBytes(budget.good) : 
                           metric === 'MemoryUsage' ? `${budget.good}MB` :
                           `${budget.good}ms`}
                        </span>
                      </td>
                      <td className="govuk-table__cell">
                        <span className="govuk-tag govuk-tag--red">
                          {metric === 'BundleSize' ? formatBytes(budget.poor) : 
                           metric === 'MemoryUsage' ? `${budget.poor}MB` :
                           `${budget.poor}ms`}
                        </span>
                      </td>
                      <td className="govuk-table__cell">
                        {metric === 'LCP' && 'Largest Contentful Paint - Core Web Vital (loading performance)'}
                        {metric === 'FID' && 'First Input Delay - Legacy metric (replaced by INP)'}
                        {metric === 'INP' && 'Interaction to Next Paint - Core Web Vital (interactivity)'}
                        {metric === 'CLS' && 'Cumulative Layout Shift - Core Web Vital (visual stability)'}
                        {metric === 'FCP' && 'First Contentful Paint - Supporting metric (loading performance)'}
                        {metric === 'TTFB' && 'Time to First Byte - Supporting metric (server response)'}
                        {metric === 'BundleSize' && 'Total JavaScript bundle size'}
                        {metric === 'MemoryUsage' && 'JavaScript heap memory usage'}
                        {metric === 'RouteChange' && 'SPA route change time'}
                        {metric === 'DOMContentLoaded' && 'DOM content loaded time'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Monitoring Status */}
        <div className="govuk-grid-row govuk-!-margin-top-6">
          <div className="govuk-grid-column-full">
            <h3 className="govuk-heading-m">Monitoring Status</h3>
            <div className="govuk-inset-text">
              <p className="govuk-body">
                <strong>Real User Monitoring (RUM):</strong> Active - Collecting Core Web Vitals and custom metrics
              </p>
              <p className="govuk-body">
                <strong>Error Tracking:</strong> Active - Monitoring JavaScript errors and unhandled promise rejections
              </p>
              <p className="govuk-body">
                <strong>Performance Budgets:</strong> Active - Alerting when metrics exceed thresholds
              </p>
              <p className="govuk-body">
                <strong>Sample Rate:</strong> 10% of users (configurable)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
