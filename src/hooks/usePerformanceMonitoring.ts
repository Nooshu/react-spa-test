import { useEffect, useCallback } from 'react'
import { performanceMonitor } from '@/utils/performanceMonitoring'
import { errorTracker } from '@/utils/errorTracking'
import { performanceBudgetMonitor } from '@/utils/performanceBudgets'

interface UsePerformanceMonitoringOptions {
  trackRouteChanges?: boolean
  trackUserInteractions?: boolean
  trackMemoryUsage?: boolean
  sampleRate?: number
}

export const usePerformanceMonitoring = (options: UsePerformanceMonitoringOptions = {}) => {
  const {
    trackRouteChanges = true,
    trackUserInteractions = true,
    trackMemoryUsage = true,
    sampleRate = 0.1,
  } = options

  useEffect(() => {
    // Initialize performance monitoring
    performanceMonitor.init()
    
    // Set sample rate
    performanceMonitor.setSampleRate(sampleRate)

    // Track route changes if enabled
    if (trackRouteChanges) {
      const handleRouteChange = () => {
        const startTime = performance.now()
        
        // Track route change completion
        const trackRouteComplete = () => {
          const routeChangeTime = performance.now() - startTime
          performanceMonitor.trackCustomMetric('RouteChange', routeChangeTime, {
            url: window.location.href,
            timestamp: Date.now(),
          })
          
          // Check against budget
          performanceBudgetMonitor.alertIfPoor('RouteChange', routeChangeTime, {
            url: window.location.href,
          })
        }

        // Track when route change is complete
        setTimeout(trackRouteComplete, 100)
      }

      // Listen for route changes
      window.addEventListener('popstate', handleRouteChange)
      
      return () => {
        window.removeEventListener('popstate', handleRouteChange)
      }
    }
  }, [trackRouteChanges, sampleRate])

  // Track user interactions
  useEffect(() => {
    if (!trackUserInteractions) return

    const trackInteraction = (event: Event) => {
      const interactionTime = performance.now()
      performanceMonitor.trackCustomMetric('UserInteraction', interactionTime, {
        type: event.type,
        target: (event.target as Element)?.tagName,
        timestamp: Date.now(),
      })
    }

    // Track various user interactions
    const events = ['click', 'keydown', 'scroll', 'resize']
    events.forEach(eventType => {
      document.addEventListener(eventType, trackInteraction, { passive: true })
    })

    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, trackInteraction)
      })
    }
  }, [trackUserInteractions])

  // Track memory usage
  useEffect(() => {
    if (!trackMemoryUsage || !('memory' in performance)) return

    const trackMemory = () => {
      const memory = (performance as any).memory
      const memoryUsageMB = memory.usedJSHeapSize / 1024 / 1024
      
      performanceMonitor.trackCustomMetric('MemoryUsage', memoryUsageMB, {
        totalJSHeapSize: memory.totalJSHeapSize / 1024 / 1024,
        jsHeapSizeLimit: memory.jsHeapSizeLimit / 1024 / 1024,
        timestamp: Date.now(),
      })

      // Check against budget
      performanceBudgetMonitor.alertIfPoor('MemoryUsage', memoryUsageMB, {
        totalJSHeapSize: memory.totalJSHeapSize / 1024 / 1024,
        jsHeapSizeLimit: memory.jsHeapSizeLimit / 1024 / 1024,
      })
    }

    // Track memory every 30 seconds
    const interval = setInterval(trackMemory, 30000)
    
    // Initial memory reading after 5 seconds
    const initialTimeout = setTimeout(trackMemory, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimeout)
    }
  }, [trackMemoryUsage])

  // Manual tracking functions
  const trackCustomMetric = useCallback((name: string, value: number, context?: any) => {
    performanceMonitor.trackCustomMetric(name, value, context)
  }, [])

  const trackError = useCallback((error: Error, context?: any) => {
    errorTracker.trackCustomError(error, context)
  }, [])

  const trackUserAction = useCallback((action: string, context?: any) => {
    errorTracker.trackUserAction(action, context)
  }, [])

  const checkPerformanceBudget = useCallback((metric: string, value: number) => {
    return performanceBudgetMonitor.checkBudget(metric, value)
  }, [])

  const getPerformanceBudgets = useCallback(() => {
    return performanceBudgetMonitor.getAllBudgets()
  }, [])

  return {
    trackCustomMetric,
    trackError,
    trackUserAction,
    checkPerformanceBudget,
    getPerformanceBudgets,
  }
}
