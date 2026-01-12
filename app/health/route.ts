import { performanceMetrics, errors, alerts } from '../api/lib/data-store'

export async function GET() {
  return Response.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    metrics: performanceMetrics.length,
    errors: errors.length,
    alerts: alerts.length
  })
}
