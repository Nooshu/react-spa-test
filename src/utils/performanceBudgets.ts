interface PerformanceBudget {
  good: number
  poor: number
}

interface PerformanceBudgets {
  LCP: PerformanceBudget
  FID: PerformanceBudget
  INP: PerformanceBudget
  CLS: PerformanceBudget
  FCP: PerformanceBudget
  TTFB: PerformanceBudget
  BundleSize: PerformanceBudget
  MemoryUsage: PerformanceBudget
  RouteChange: PerformanceBudget
  DOMContentLoaded: PerformanceBudget
}

const PERFORMANCE_BUDGETS: PerformanceBudgets = {
  LCP: { good: 2500, poor: 4000 }, // ms - Core Web Vital
  FID: { good: 100, poor: 300 }, // ms - Legacy metric, replaced by INP
  INP: { good: 200, poor: 500 }, // ms - Current Core Web Vital
  CLS: { good: 0.1, poor: 0.25 }, // score - Core Web Vital
  FCP: { good: 1800, poor: 3000 }, // ms - Supporting metric
  TTFB: { good: 800, poor: 1800 }, // ms - Supporting metric
  BundleSize: { good: 250000, poor: 500000 }, // bytes
  MemoryUsage: { good: 30, poor: 50 }, // MB
  RouteChange: { good: 100, poor: 300 }, // ms
  DOMContentLoaded: { good: 1000, poor: 2000 }, // ms
}

type BudgetStatus = 'good' | 'needs-improvement' | 'poor'

class PerformanceBudgetMonitor {
  private apiEndpoint: string = '/api/performance-alerts'
  private isEnabled: boolean = true

  checkBudget(metric: string, value: number): BudgetStatus {
    const budget = PERFORMANCE_BUDGETS[metric as keyof PerformanceBudgets]
    if (!budget) return 'good'

    if (value <= budget.good) return 'good'
    if (value <= budget.poor) return 'needs-improvement'
    return 'poor'
  }

  async alertIfPoor(metric: string, value: number, context?: any): Promise<void> {
    if (!this.isEnabled) return

    const status = this.checkBudget(metric, value)
    
    if (status === 'poor') {
      const alertData = {
        metric,
        value,
        status,
        context,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        sessionId: this.getSessionId(),
      }

      try {
        // In development, just log to console
        if (process.env.NODE_ENV === 'development') {
          console.warn('Performance Alert:', alertData)
          return
        }

        await fetch(this.apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(alertData),
        })
      } catch (error) {
        console.warn('Failed to send performance alert:', error)
      }
    }
  }

  getBudgetThresholds(metric: string): PerformanceBudget | null {
    return PERFORMANCE_BUDGETS[metric as keyof PerformanceBudgets] || null
  }

  getAllBudgets(): PerformanceBudgets {
    return { ...PERFORMANCE_BUDGETS }
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('performance-session-id')
    if (!sessionId) {
      sessionId = crypto.randomUUID()
      sessionStorage.setItem('performance-session-id', sessionId)
    }
    return sessionId
  }

  enable(): void {
    this.isEnabled = true
  }

  disable(): void {
    this.isEnabled = false
  }
}

export const performanceBudgetMonitor = new PerformanceBudgetMonitor()
export default PerformanceBudgetMonitor
