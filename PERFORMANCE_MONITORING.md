# Performance Monitoring Implementation

This document describes the comprehensive performance monitoring system implemented in this React SPA.

## Overview

The performance monitoring system provides:

- **Real User Monitoring (RUM)** - Collects Core Web Vitals and custom metrics from actual users
- **Error Tracking** - Monitors JavaScript errors and unhandled promise rejections
- **Performance Budgets** - Alerts when metrics exceed defined thresholds
- **Synthetic Monitoring** - Automated Lighthouse CI testing
- **Analytics Dashboard** - Real-time performance data visualization

## Architecture

### Core Components

1. **PerformanceMonitor** (`src/utils/performanceMonitoring.ts`)
   - Collects Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
   - Tracks custom metrics (memory usage, bundle size, route changes)
   - Implements sampling to reduce data volume
   - Sends data to backend API

2. **ErrorTracker** (`src/utils/errorTracking.ts`)
   - Monitors JavaScript errors and unhandled promise rejections
   - Tracks React component errors
   - Correlates errors with performance metrics
   - Provides manual error tracking methods

3. **PerformanceBudgetMonitor** (`src/utils/performanceBudgets.ts`)
   - Defines performance thresholds for all metrics
   - Automatically alerts when budgets are exceeded
   - Provides budget status checking

4. **usePerformanceMonitoring** (`src/hooks/usePerformanceMonitoring.ts`)
   - React hook for easy integration
   - Tracks route changes, user interactions, memory usage
   - Provides manual tracking methods

### UI Components

1. **PerformanceMetrics** - Enhanced existing component showing Core Web Vitals
2. **PerformanceDashboard** - New comprehensive dashboard with real-time metrics

## Configuration

### Performance Budgets

Default thresholds are defined in `src/utils/performanceBudgets.ts`:

```typescript
const PERFORMANCE_BUDGETS = {
  LCP: { good: 2500, poor: 4000 },        // ms - Core Web Vital
  FID: { good: 100, poor: 300 },          // ms - Legacy metric (replaced by INP)
  INP: { good: 200, poor: 500 },          // ms - Current Core Web Vital
  CLS: { good: 0.1, poor: 0.25 },         // score - Core Web Vital
  FCP: { good: 1800, poor: 3000 },        // ms - Supporting metric
  TTFB: { good: 800, poor: 1800 },        // ms - Supporting metric
  BundleSize: { good: 250000, poor: 500000 }, // bytes
  MemoryUsage: { good: 30, poor: 50 },     // MB
  RouteChange: { good: 100, poor: 300 },  // ms
  DOMContentLoaded: { good: 1000, poor: 2000 }, // ms
}
```

**Core Web Vitals (2024):**
- **LCP (Largest Contentful Paint)**: ≤2.5s (good), >4.0s (poor)
- **INP (Interaction to Next Paint)**: ≤200ms (good), >500ms (poor) 
- **CLS (Cumulative Layout Shift)**: ≤0.1 (good), >0.25 (poor)

**Supporting Metrics:**
- **FCP (First Contentful Paint)**: ≤1.8s (good), >3.0s (poor)
- **TTFB (Time to First Byte)**: ≤800ms (good), >1.8s (poor)

### Sampling Rate

By default, only 10% of users are sampled to reduce data volume:

```typescript
const performanceMonitor = new PerformanceMonitor('', 0.1) // No API endpoint - logs to console
```

## Usage

### Basic Setup

The monitoring is automatically initialized in `src/main.tsx`:

```typescript
import { performanceMonitor } from '@/utils/performanceMonitoring'
import { errorTracker } from '@/utils/errorTracking'

performanceMonitor.init()
errorTracker.trackUserAction('App Initialized', { 
  timestamp: Date.now(),
  url: window.location.href 
})
```

### Using the Hook

```typescript
import { usePerformanceMonitoring } from '@/hooks/usePerformanceMonitoring'

const MyComponent = () => {
  const { trackCustomMetric, trackError, trackUserAction } = usePerformanceMonitoring()

  const handleClick = () => {
    trackUserAction('Button Clicked', { buttonId: 'submit' })
  }

  const handleError = (error: Error) => {
    trackError(error, { component: 'MyComponent' })
  }

  return <button onClick={handleClick}>Click me</button>
}
```

### Manual Tracking

```typescript
import { performanceMonitor } from '@/utils/performanceMonitoring'
import { errorTracker } from '@/utils/errorTracking'

// Track custom metrics
performanceMonitor.trackCustomMetric('CustomMetric', 123, { context: 'value' })

// Track errors
errorTracker.trackCustomError(new Error('Something went wrong'), { userId: '123' })

// Track user actions
errorTracker.trackUserAction('Form Submitted', { formId: 'contact' })
```

## Backend Integration

### Example Server

A complete example server is provided in `server-example.js`:

```bash
npm run server:example
```

This provides endpoints for:
- `POST /api/performance-metrics` - Store performance data (optional - logs to console by default)
- `POST /api/errors` - Store error data (optional - logs to console by default)
- `POST /api/performance-alerts` - Store budget alerts (optional - logs to console by default)
- `GET /api/analytics/*` - Retrieve analytics data (if implemented)

### Production Integration

For production, integrate these endpoints into your existing backend:

```javascript
// Express.js example
app.post('/api/performance-metrics', async (req, res) => {
  const metricData = req.body
  
  // Store in your database
  await db.performanceMetrics.create(metricData)
  
  // Real-time alerting
  if (metricData.metric === 'LCP' && metricData.value > 4000) {
    await alertingService.sendAlert({
      type: 'performance',
      severity: 'warning',
      message: `Poor LCP: ${metricData.value}ms`,
      metadata: metricData,
    })
  }
  
  res.json({ success: true })
})
```

## Synthetic Monitoring

### Lighthouse CI

Automated Lighthouse testing is configured with:

- **Configuration**: `lighthouserc.json`
- **GitHub Actions**: `.github/workflows/lighthouse-ci.yml`
- **Scripts**: `npm run lighthouse:ci`

### Running Tests

```bash
# Run Lighthouse CI locally
npm run lighthouse:ci

# Run full performance test suite
npm run performance:test
```

### Thresholds

Lighthouse CI enforces:
- Performance score: ≥90
- Accessibility score: ≥95
- Best practices score: ≥90
- SEO score: ≥90
- Core Web Vitals within budget

## Development vs Production

### Development Mode

In development (`import.meta.env.DEV`):
- Metrics are logged to console instead of sent to API
- No sampling applied (100% of metrics logged)
- Error tracking logs to console
- Alerts logged to console

### Production Mode

In production:
- Metrics sent to configured API endpoints
- Sampling applied (default 10%)
- Real error tracking and alerting
- Data stored in backend database

## Monitoring Tools Integration

### Recommended Production Tools

1. **Google Analytics 4**
   ```typescript
   // Send metrics to GA4
   gtag('event', 'web_vitals', {
     metric_name: 'LCP',
     metric_value: value,
     metric_delta: delta,
   })
   ```

2. **Sentry**
   ```typescript
   import * as Sentry from '@sentry/react'
   
   // Automatic error tracking
   Sentry.init({ dsn: 'YOUR_DSN' })
   
   // Custom performance tracking
   Sentry.addBreadcrumb({
     category: 'performance',
     message: `LCP: ${value}ms`,
     level: 'info',
   })
   ```

3. **DataDog RUM**
   ```typescript
   import { datadogRum } from '@datadog/browser-rum'
   
   datadogRum.init({
     applicationId: 'YOUR_APP_ID',
     clientToken: 'YOUR_CLIENT_TOKEN',
   })
   ```

## Data Privacy & Compliance

### GDPR Compliance

- No personally identifiable information (PII) is collected by default
- Session IDs are generated client-side and not linked to user accounts
- User IDs are only collected if explicitly set in localStorage
- All data collection can be disabled via configuration

### Data Retention

Configure appropriate data retention policies in your backend:

```javascript
// Example: Delete metrics older than 90 days
setInterval(async () => {
  await db.performanceMetrics.deleteMany({
    timestamp: { $lt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) }
  })
}, 24 * 60 * 60 * 1000) // Run daily
```

## Troubleshooting

### Common Issues

1. **Metrics not appearing**
   - Check browser console for errors
   - Verify API endpoints are accessible
   - Check sampling rate configuration

2. **High data volume**
   - Reduce sampling rate
   - Implement data filtering
   - Add rate limiting

3. **Performance impact**
   - Monitor monitoring overhead
   - Use passive event listeners
   - Implement lazy loading for monitoring code

### Debug Mode

Enable debug logging:

```typescript
// In development
localStorage.setItem('debug-performance', 'true')

// In monitoring code
if (localStorage.getItem('debug-performance')) {
  console.log('Performance metric:', data)
}
```

## Best Practices

1. **Start Small**: Begin with Core Web Vitals and essential metrics
2. **Monitor Overhead**: Ensure monitoring doesn't impact performance
3. **Set Realistic Budgets**: Base thresholds on your actual user base
4. **Regular Review**: Analyze data weekly and adjust budgets
5. **Alert Fatigue**: Set up meaningful alerts, not every threshold breach
6. **Data Quality**: Validate data before storing/analyzing
7. **Privacy First**: Always consider user privacy and compliance

## Future Enhancements

- [ ] Real-time dashboard with WebSocket updates
- [ ] Machine learning for anomaly detection
- [ ] A/B testing integration
- [ ] Mobile-specific metrics
- [ ] Advanced error grouping and analysis
- [ ] Performance regression detection
- [ ] Automated performance optimization suggestions
