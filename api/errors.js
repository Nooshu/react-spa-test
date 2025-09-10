// Vercel serverless function for error tracking
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const errorData = {
      ...req.body,
      receivedAt: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    }

    // Log the error (in production, you'd store this in a database)
    console.error('Error Tracked:', JSON.stringify(errorData, null, 2))

    // Alert for critical errors
    if (errorData.type === 'JavaScript Error' || errorData.type === 'Unhandled Promise Rejection') {
      console.error('🚨 Critical Error Alert:', {
        type: errorData.type,
        message: errorData.message,
        url: errorData.url,
        timestamp: errorData.timestamp
      })
    }

    res.status(200).json({ 
      success: true,
      message: 'Error logged',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error processing error data:', error)
    res.status(500).json({ error: 'Failed to process error' })
  }
}
