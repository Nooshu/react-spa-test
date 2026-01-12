import { NextRequest, NextResponse } from 'next/server'
import { errors, alerts, type ErrorData } from '../lib/data-store'

export async function POST(request: NextRequest) {
  try {
    const errorData: ErrorData = {
      ...(await request.json()),
      receivedAt: new Date().toISOString(),
    }
    
    errors.push(errorData)
    
    // Alert for critical errors
    if (errorData.type === 'JavaScript Error' || errorData.type === 'Unhandled Promise Rejection') {
      const alert = {
        type: 'error',
        severity: 'critical',
        message: `${errorData.type}: ${errorData.message}`,
        metadata: errorData,
        timestamp: new Date().toISOString(),
      }
      alerts.push(alert)
      console.error('🚨 Error Alert:', alert)
    }
    
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error storing error data:', error)
    return NextResponse.json(
      { error: 'Failed to store error' },
      { status: 500 }
    )
  }
}
