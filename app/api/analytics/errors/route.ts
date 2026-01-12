import { NextRequest, NextResponse } from 'next/server'
import { errors } from '../../lib/data-store'
import { getErrorsSummary } from '../../lib/helpers'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get('limit') || '100', 10)
  
  return NextResponse.json({
    errors: errors.slice(-limit),
    total: errors.length,
    summary: getErrorsSummary(errors)
  })
}
