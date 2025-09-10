// Vercel serverless function for performance metrics
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
    const metricData = {
      ...req.body,
      receivedAt: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    }

    // Log the metric (in production, you'd store this in a database)
    console.log('Performance Metric:', JSON.stringify(metricData, null, 2))

    // Real-time alerting for poor performance
    if (metricData.metric === 'LCP' && metricData.value > 4000) {
      console.warn('🚨 Performance Alert: Poor LCP detected:', {
        value: metricData.value,
        url: metricData.url,
        timestamp: metricData.timestamp
      })
    }

    if (metricData.metric === 'MemoryUsage' && metricData.value > 50) {
      console.warn('🚨 Memory Alert: High memory usage:', {
        value: metricData.value,
        url: metricData.url,
        timestamp: metricData.timestamp
      })
    }

    res.status(200).json({ 
      success: true,
      message: 'Metric received',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error processing performance metric:', error)
    res.status(500).json({ error: 'Failed to process metric' })
  }
}
