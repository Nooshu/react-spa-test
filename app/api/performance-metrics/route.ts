import { NextRequest, NextResponse } from 'next/server'
import { performanceMetrics, alerts, type PerformanceMetric } from '../lib/data-store'

export async function POST(request: NextRequest) {
  try {
    const metricData: PerformanceMetric = {
      ...(await request.json()),
      receivedAt: new Date().toISOString(),
    }
    
    performanceMetrics.push(metricData)
    
    // Real-time alerting for poor performance
    if (metricData.metric === 'LCP' && metricData.value > 4000) {
      const alert = {
        type: 'performance',
        severity: 'warning',
        message: `Poor LCP detected: ${metricData.value}ms on ${metricData.url}`,
        metadata: metricData,
        timestamp: new Date().toISOString(),
      }
      alerts.push(alert)
      console.warn('🚨 Performance Alert:', alert)
    }
    
    if (metricData.metric === 'MemoryUsage' && metricData.value > 50) {
      const alert = {
        type: 'performance',
        severity: 'critical',
        message: `High memory usage: ${metricData.value}MB on ${metricData.url}`,
        metadata: metricData,
        timestamp: new Date().toISOString(),
      }
      alerts.push(alert)
      console.warn('🚨 Memory Alert:', alert)
    }
    
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error storing performance metric:', error)
    return NextResponse.json(
      { error: 'Failed to store metric' },
      { status: 500 }
    )
  }
}
