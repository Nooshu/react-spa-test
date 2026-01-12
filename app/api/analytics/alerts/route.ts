import { NextRequest, NextResponse } from 'next/server'
import { alerts } from '../../lib/data-store'
import { getAlertsSummary } from '../../lib/helpers'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get('limit') || '50', 10)
  
  return NextResponse.json({
    alerts: alerts.slice(-limit),
    total: alerts.length,
    summary: getAlertsSummary(alerts)
  })
}
