import type { PerformanceMetric, ErrorData, AlertData } from './data-store'

export function getMetricsSummary(metrics: PerformanceMetric[]) {
  const summary: Record<string, {
    count: number
    values: number[]
    avg: number
    min: number
    max: number
  }> = {}
  
  metrics.forEach(metric => {
    if (!summary[metric.metric]) {
      summary[metric.metric] = {
        count: 0,
        values: [],
        avg: 0,
        min: Infinity,
        max: -Infinity
      }
    }
    
    const stat = summary[metric.metric]
    stat.count++
    stat.values.push(metric.value)
    stat.min = Math.min(stat.min, metric.value)
    stat.max = Math.max(stat.max, metric.value)
  })
  
  // Calculate averages
  Object.keys(summary).forEach(metric => {
    const stat = summary[metric]
    stat.avg = stat.values.reduce((sum, val) => sum + val, 0) / stat.values.length
  })
  
  return summary
}

export function getErrorsSummary(errors: ErrorData[]) {
  const summary = {
    total: errors.length,
    byType: {} as Record<string, number>,
    byUrl: {} as Record<string, number>,
    recent: errors.slice(-10)
  }
  
  errors.forEach(error => {
    summary.byType[error.type] = (summary.byType[error.type] || 0) + 1
    summary.byUrl[error.url] = (summary.byUrl[error.url] || 0) + 1
  })
  
  return summary
}

export function getAlertsSummary(alerts: AlertData[]) {
  const summary = {
    total: alerts.length,
    byType: {} as Record<string, number>,
    bySeverity: {} as Record<string, number>,
    recent: alerts.slice(-10)
  }
  
  alerts.forEach(alert => {
    summary.byType[alert.type] = (summary.byType[alert.type] || 0) + 1
    summary.bySeverity[alert.severity] = (summary.bySeverity[alert.severity] || 0) + 1
  })
  
  return summary
}
