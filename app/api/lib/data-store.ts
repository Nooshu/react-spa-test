// In-memory data store for performance metrics, errors, and alerts
// Note: This is in-memory and will reset on server restart
// For production, consider using a database or Redis

export interface PerformanceMetric {
  metric: string
  value: number
  url: string
  receivedAt?: string
  [key: string]: unknown
}

export interface ErrorData {
  type: string
  message: string
  url: string
  receivedAt?: string
  [key: string]: unknown
}

export interface AlertData {
  type: string
  severity: string
  message: string
  metadata?: unknown
  timestamp?: string
  receivedAt?: string
  [key: string]: unknown
}

export const performanceMetrics: PerformanceMetric[] = []
export const errors: ErrorData[] = []
export const alerts: AlertData[] = []
