import { NextRequest, NextResponse } from 'next/server'
import { alerts, type AlertData } from '../lib/data-store'

export async function POST(request: NextRequest) {
  try {
    const alertData: AlertData = {
      ...(await request.json()),
      receivedAt: new Date().toISOString(),
    }
    
    alerts.push(alertData)
    console.warn('🚨 Performance Budget Alert:', alertData)
    
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error storing alert:', error)
    return NextResponse.json(
      { error: 'Failed to store alert' },
      { status: 500 }
    )
  }
}
