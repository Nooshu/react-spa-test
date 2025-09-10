import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

interface PerformanceData {
  metric: string
  value: number
  delta: number
  id: string
  navigationType: string
  timestamp: number
  url: string
  userAgent: string
  connectionType?: string
  deviceMemory?: number
  sessionId?: string
  userId?: string | null
}

class PerformanceMonitor {
  private apiEndpoint: string
  private sampleRate: number = 0.1 // 10% sampling
  private isEnabled: boolean = true

  constructor(apiEndpoint: string = '/api/performance-metrics', sampleRate: number = 0.1) {
    this.apiEndpoint = apiEndpoint
    this.sampleRate = sampleRate
  }

  private shouldSample(): boolean {
    return Math.random() < this.sampleRate
  }

  private async sendMetric(data: PerformanceData): Promise<void> {
    if (!this.isEnabled || !this.shouldSample()) return

    try {
      // In development, just log to console
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metric:', data)
        return
      }

      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          sessionId: this.getSessionId(),
          userId: this.getUserId(),
        }),
      })
    } catch (error) {
      console.warn('Failed to send performance metric:', error)
    }
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('performance-session-id')
    if (!sessionId) {
      sessionId = crypto.randomUUID()
      sessionStorage.setItem('performance-session-id', sessionId)
    }
    return sessionId
  }

  private getUserId(): string | null {
    // Return user ID if authenticated, null otherwise
    return localStorage.getItem('userId')
  }

  init(): void {
    if (!this.isEnabled) return

    // Core Web Vitals
    getCLS((metric) => this.sendMetric(this.formatMetric(metric, 'CLS')))
    getFID((metric) => this.sendMetric(this.formatMetric(metric, 'FID')))
    getFCP((metric) => this.sendMetric(this.formatMetric(metric, 'FCP')))
    getLCP((metric) => this.sendMetric(this.formatMetric(metric, 'LCP')))
    getTTFB((metric) => this.sendMetric(this.formatMetric(metric, 'TTFB')))
    
    // Interaction to Next Paint (replaces FID)
    this.trackINP()
    
    // Custom metrics
    this.trackPageLoad()
    this.trackRouteChanges()
    this.trackMemoryUsage()
    this.trackBundleSize()
  }

  private trackINP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'event') {
            const eventEntry = entry as any
            this.sendMetric({
              metric: 'INP',
              value: eventEntry.processingStart - eventEntry.startTime,
              delta: eventEntry.processingStart - eventEntry.startTime,
              id: eventEntry.name,
              navigationType: 'navigate',
              timestamp: Date.now(),
              url: window.location.href,
              userAgent: navigator.userAgent,
              connectionType: (navigator as any).connection?.effectiveType,
              deviceMemory: (navigator as any).deviceMemory,
            })
          }
        }
      })
      observer.observe({ entryTypes: ['event'] })
    }
  }

  private formatMetric(metric: any, name: string): PerformanceData {
    return {
      metric: name,
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connectionType: (navigator as any).connection?.effectiveType,
      deviceMemory: (navigator as any).deviceMemory,
    }
  }

  private trackPageLoad(): void {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        this.sendMetric({
          metric: 'DOMContentLoaded',
          value: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          delta: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          id: 'dom-content-loaded',
          navigationType: 'navigate',
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        })

        this.sendMetric({
          metric: 'PageLoad',
          value: navigation.loadEventEnd - navigation.loadEventStart,
          delta: navigation.loadEventEnd - navigation.loadEventStart,
          id: 'page-load',
          navigationType: 'navigate',
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        })
      }
    })
  }

  private trackRouteChanges(): void {
    // Track SPA route changes
    let routeStartTime = Date.now()
    
    window.addEventListener('popstate', () => {
      const routeChangeTime = Date.now() - routeStartTime
      this.sendMetric({
        metric: 'RouteChange',
        value: routeChangeTime,
        delta: routeChangeTime,
        id: 'route-change',
        navigationType: 'back_forward',
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      })
      routeStartTime = Date.now()
    })

    // Track programmatic navigation
    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState

    history.pushState = function(...args) {
      originalPushState.apply(history, args)
      routeStartTime = Date.now()
    }

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args)
      routeStartTime = Date.now()
    }
  }

  private trackMemoryUsage(): void {
    if ('memory' in performance) {
      // Initial memory reading
      setTimeout(() => {
        const memory = (performance as any).memory
        this.sendMetric({
          metric: 'MemoryUsage',
          value: memory.usedJSHeapSize / 1024 / 1024, // MB
          delta: memory.usedJSHeapSize / 1024 / 1024,
          id: 'memory-usage',
          navigationType: 'navigate',
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        })
      }, 5000) // After 5 seconds

      // Periodic memory monitoring
      setInterval(() => {
        const memory = (performance as any).memory
        this.sendMetric({
          metric: 'MemoryUsage',
          value: memory.usedJSHeapSize / 1024 / 1024, // MB
          delta: memory.usedJSHeapSize / 1024 / 1024,
          id: 'memory-usage-periodic',
          navigationType: 'navigate',
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        })
      }, 30000) // Every 30 seconds
    }
  }

  private trackBundleSize(): void {
    // Track JavaScript bundle sizes
    const resources = performance.getEntriesByType('resource')
    const jsResources = resources.filter(entry => 
      entry.name.includes('.js') && !entry.name.includes('node_modules')
    )

    jsResources.forEach(resource => {
      this.sendMetric({
        metric: 'BundleSize',
        value: resource.transferSize || 0,
        delta: resource.transferSize || 0,
        id: `bundle-${resource.name.split('/').pop()}`,
        navigationType: 'navigate',
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      })
    })
  }

  // Public methods for manual tracking
  trackCustomMetric(name: string, value: number, context?: any): void {
    this.sendMetric({
      metric: name,
      value,
      delta: value,
      id: `custom-${name}`,
      navigationType: 'navigate',
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...context,
    })
  }

  enable(): void {
    this.isEnabled = true
  }

  disable(): void {
    this.isEnabled = false
  }

  setSampleRate(rate: number): void {
    this.sampleRate = Math.max(0, Math.min(1, rate))
  }
}

export const performanceMonitor = new PerformanceMonitor()
export default PerformanceMonitor
