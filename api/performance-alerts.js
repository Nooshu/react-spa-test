// Vercel serverless function for performance alerts
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
    const alertData = {
      ...req.body,
      receivedAt: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    }

    // Log the alert (in production, you'd store this in a database and send notifications)
    console.warn('🚨 Performance Budget Alert:', JSON.stringify(alertData, null, 2))

    // In production, you could integrate with:
    // - Slack notifications
    // - Email alerts
    // - PagerDuty
    // - Database logging
    // - Analytics platforms

    res.status(200).json({ 
      success: true,
      message: 'Alert processed',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error processing performance alert:', error)
    res.status(500).json({ error: 'Failed to process alert' })
  }
}
