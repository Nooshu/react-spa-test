import { NextRequest, NextResponse } from 'next/server'
import { performanceMetrics } from '../../lib/data-store'
import { getMetricsSummary } from '../../lib/helpers'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const metric = searchParams.get('metric')
  const limit = parseInt(searchParams.get('limit') || '100', 10)
  
  let filteredMetrics = performanceMetrics
  if (metric) {
    filteredMetrics = performanceMetrics.filter(m => m.metric === metric)
  }
  
  return NextResponse.json({
    metrics: filteredMetrics.slice(-limit),
    total: filteredMetrics.length,
    summary: getMetricsSummary(filteredMetrics)
  })
}
