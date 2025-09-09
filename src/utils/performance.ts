import React from 'react'

// Performance monitoring utilities
export interface PerformanceMetrics {
  loadTime: number
  bundleSize: number
  lighthouseScore: number
  memoryUsage: number
  renderTime: number
  firstContentfulPaint?: number
  largestContentfulPaint?: number
  cumulativeLayoutShift?: number
  firstInputDelay?: number
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: PerformanceMetrics | null = null

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  // Measure page load performance
  measureLoadTime(): number {
    if (typeof window === 'undefined') return 0
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    return navigation ? navigation.loadEventEnd - navigation.fetchStart : 0
  }

  // Measure memory usage (if available)
  measureMemoryUsage(): number {
    if (typeof window === 'undefined' || !('memory' in performance)) return 0
    
    const memory = (performance as any).memory
    return memory ? memory.usedJSHeapSize / 1024 / 1024 : 0 // Convert to MB
  }

  // Measure render time for a component
  measureRenderTime<T>(renderFn: () => T): T {
    const start = performance.now()
    const result = renderFn()
    const end = performance.now()
    
    console.log(`Render time: ${(end - start).toFixed(2)}ms`)
    return result
  }

  // Get Web Vitals metrics
  getWebVitals(): Partial<PerformanceMetrics> {
    if (typeof window === 'undefined') return {}

    const vitals: Partial<PerformanceMetrics> = {}

    // First Contentful Paint
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0]
    if (fcpEntry) {
      vitals.firstContentfulPaint = fcpEntry.startTime
    }

    // Largest Contentful Paint
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint')
    if (lcpEntries.length > 0) {
      vitals.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime
    }

    // Cumulative Layout Shift
    const clsEntries = performance.getEntriesByType('layout-shift')
    if (clsEntries.length > 0) {
      vitals.cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
        return sum + (entry as any).value
      }, 0)
    }

    return vitals
  }

  // Generate mock metrics for demonstration
  generateMockMetrics(): PerformanceMetrics {
    return {
      loadTime: Math.random() * 2000 + 500,
      bundleSize: Math.random() * 100 + 200,
      lighthouseScore: Math.floor(Math.random() * 20) + 80,
      memoryUsage: Math.random() * 50 + 10,
      renderTime: Math.random() * 100 + 10,
      ...this.getWebVitals()
    }
  }

  // Store metrics
  setMetrics(metrics: PerformanceMetrics): void {
    this.metrics = metrics
  }

  // Get stored metrics
  getMetrics(): PerformanceMetrics | null {
    return this.metrics
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics = null
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance()

// Utility function to measure component performance
export function withPerformanceMeasurement<T extends React.ComponentType<any>>(
  Component: T,
  componentName?: string
): T {
  return React.forwardRef((props: any, ref: any) => {
    const start = performance.now()
    
    React.useEffect(() => {
      const end = performance.now()
      console.log(`${componentName || Component.displayName || 'Component'} render time: ${(end - start).toFixed(2)}ms`)
    })

    return React.createElement(Component, { ...props, ref })
  }) as T
}

// Performance observer for Web Vitals
export function observeWebVitals(callback: (metrics: Partial<PerformanceMetrics>) => void): void {
  if (typeof window === 'undefined') return

  // Observe Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        callback({ largestContentfulPaint: lastEntry.startTime })
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Observe Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        callback({ cumulativeLayoutShift: clsValue })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Observe First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          callback({ firstInputDelay: (entry as any).processingStart - entry.startTime })
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
    } catch (error) {
      console.warn('Performance Observer not supported:', error)
    }
  }
}
