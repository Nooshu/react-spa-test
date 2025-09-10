import React, { useState, useEffect } from 'react'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'
import { performanceBudgetMonitor } from '@/utils/performanceBudgets'

interface Metrics {
  cls: number | null
  fid: number | null
  fcp: number | null
  lcp: number | null
  ttfb: number | null
}

export const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null
  })

  useEffect(() => {
    const updateMetric = (name: keyof Metrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }))
    }

    getCLS((metric) => updateMetric('cls', metric.value))
    getFID((metric) => updateMetric('fid', metric.value))
    getFCP((metric) => updateMetric('fcp', metric.value))
    getLCP((metric) => updateMetric('lcp', metric.value))
    getTTFB((metric) => updateMetric('ttfb', metric.value))
  }, [])

  const formatMetric = (value: number | null, unit: string) => {
    if (value === null) return 'Loading...'
    return `${value.toFixed(2)}${unit}`
  }

  const getMetricStatus = (value: number | null, metricName: string) => {
    if (value === null) return 'loading'
    return performanceBudgetMonitor.checkBudget(metricName, value)
  }

  const metricConfigs = [
    {
      name: 'cls',
      label: 'Cumulative Layout Shift',
      unit: '',
      description: 'Measures visual stability'
    },
    {
      name: 'fid',
      label: 'First Input Delay',
      unit: 'ms',
      description: 'Measures interactivity'
    },
    {
      name: 'fcp',
      label: 'First Contentful Paint',
      unit: 'ms',
      description: 'Measures loading performance'
    },
    {
      name: 'lcp',
      label: 'Largest Contentful Paint',
      unit: 'ms',
      description: 'Measures loading performance'
    },
    {
      name: 'ttfb',
      label: 'Time to First Byte',
      unit: 'ms',
      description: 'Measures server response time'
    }
  ]

  return (
    <div className="govuk-grid-row">
      {metricConfigs.map((config) => {
        const value = metrics[config.name as keyof Metrics]
        const status = getMetricStatus(value, config.name.toUpperCase())
        
        const statusClasses = {
          good: 'govuk-tag--green',
          'needs-improvement': 'govuk-tag--yellow',
          poor: 'govuk-tag--red',
          loading: 'govuk-tag--grey'
        }

        return (
          <div key={config.name} className="govuk-grid-column-one-fifth">
            <div className="govuk-card">
              <div className="govuk-card__content">
                <h3 className="govuk-heading-s">{config.label}</h3>
                <p className="govuk-body-s">
                  <span className={`govuk-tag ${statusClasses[status]}`}>
                    {formatMetric(value, config.unit)}
                  </span>
                </p>
                <p className="govuk-body-xs">{config.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
