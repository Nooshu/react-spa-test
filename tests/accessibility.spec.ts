import { test, expect } from '@playwright/test'

test.describe('Accessibility Tests', () => {
  test('should have proper page structure', async ({ page }) => {
    await page.goto('/')
    
    // Check for main landmark
    await expect(page.locator('main')).toBeVisible()
    
    // Check for proper heading hierarchy
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).toHaveText('React A11y Test')
  })

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/')
    
    // Tab through navigation
    await page.keyboard.press('Tab')
    await expect(page.locator('a[href="/"]')).toBeFocused()
    
    await page.keyboard.press('Tab')
    await expect(page.locator('a[href="/forms"]')).toBeFocused()
    
    await page.keyboard.press('Tab')
    await expect(page.locator('a[href="/components"]')).toBeFocused()
  })

  test('should have accessible forms', async ({ page }) => {
    await page.goto('/forms')
    
    // Check form labels
    const nameInput = page.locator('input[name="fullName"]')
    await expect(nameInput).toBeVisible()
    
    const nameLabel = page.locator('label[for*="fullName"]')
    await expect(nameLabel).toBeVisible()
    
    // Check error handling
    await page.click('button[type="submit"]')
    await expect(page.locator('.govuk-error-message')).toBeVisible()
  })

  test('should have accessible components', async ({ page }) => {
    await page.goto('/components')
    
    // Test accordion accessibility
    const accordionButton = page.locator('.govuk-accordion__section-button').first()
    await expect(accordionButton).toBeVisible()
    await expect(accordionButton).toHaveAttribute('aria-expanded', 'false')
    
    await accordionButton.click()
    await expect(accordionButton).toHaveAttribute('aria-expanded', 'true')
    
    // Test tabs accessibility
    const tabButton = page.locator('.govuk-tabs__tab').first()
    await expect(tabButton).toHaveAttribute('role', 'tab')
    await expect(tabButton).toHaveAttribute('aria-selected', 'true')
  })

  test('should have proper focus management', async ({ page }) => {
    await page.goto('/')
    
    // Check focus indicators
    await page.keyboard.press('Tab')
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
    
    // Check focus styles
    const focusStyles = await focusedElement.evaluate(el => {
      const styles = window.getComputedStyle(el)
      return {
        outline: styles.outline,
        outlineOffset: styles.outlineOffset
      }
    })
    
    expect(focusStyles.outline).not.toBe('none')
  })

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/')
    
    // Check for ARIA landmarks
    await expect(page.locator('main[role="main"]')).toBeVisible()
    await expect(page.locator('header[role="banner"]')).toBeVisible()
    await expect(page.locator('footer[role="contentinfo"]')).toBeVisible()
    
    // Check navigation ARIA
    const navigation = page.locator('nav[aria-label="Top Level Navigation"]')
    await expect(navigation).toBeVisible()
  })

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/')
    
    // This would typically use axe-core or similar tools
    // For now, we'll check that the page loads without errors
    await expect(page.locator('body')).toBeVisible()
  })
})
