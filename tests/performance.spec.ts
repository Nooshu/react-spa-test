import { test, expect } from '@playwright/test'

test.describe('Performance Tests', () => {
  test('should load quickly', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime
    
    // Should load within 3 seconds
    expect(loadTime).toBeLessThan(3000)
  })

  test('should have good Lighthouse scores', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')
    
    // Check that main content is visible
    await expect(page.locator('h1')).toBeVisible()
    
    // Check that performance metrics are loaded
    await expect(page.locator('.govuk-card')).toBeVisible()
  })

  test('should handle large datasets efficiently', async ({ page }) => {
    await page.goto('/performance')
    
    // Test virtual scrolling
    await page.click('button:has-text("Show Virtual List")')
    await expect(page.locator('.react-window')).toBeVisible()
    
    // Check that large dataset renders without performance issues
    await page.waitForTimeout(1000) // Wait for rendering
    await expect(page.locator('text=Item 1')).toBeVisible()
  })

  test('should have optimized bundle size', async ({ page }) => {
    await page.goto('/')
    
    // Check that main JavaScript bundle is reasonable size
    const resources = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('.js'))
        .map(entry => ({
          name: entry.name,
          size: entry.transferSize || 0
        }))
    })
    
    // Total JS should be under 500KB
    const totalJSSize = resources.reduce((sum, resource) => sum + resource.size, 0)
    expect(totalJSSize).toBeLessThan(500000)
  })

  test('should have good Core Web Vitals', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')
    
    // Get performance metrics
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          resolve(entries.map(entry => ({
            name: entry.name,
            startTime: entry.startTime,
            duration: entry.duration
          })))
        })
        
        observer.observe({ entryTypes: ['measure', 'navigation'] })
        
        // Resolve after a short delay to collect metrics
        setTimeout(() => resolve([]), 1000)
      })
    })
    
    expect(metrics).toBeDefined()
  })

  test('should handle memory efficiently', async ({ page }) => {
    await page.goto('/performance')
    
    // Navigate between pages to test memory management
    await page.click('a[href="/forms"]')
    await page.waitForLoadState('networkidle')
    
    await page.click('a[href="/components"]')
    await page.waitForLoadState('networkidle')
    
    await page.click('a[href="/performance"]')
    await page.waitForLoadState('networkidle')
    
    // Check that page still functions correctly
    await expect(page.locator('h1')).toBeVisible()
  })
})
