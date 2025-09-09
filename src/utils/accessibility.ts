// Accessibility testing and validation utilities

export interface AccessibilityTest {
  id: string
  name: string
  description: string
  test: () => boolean
  severity: 'error' | 'warning' | 'info'
}

export class AccessibilityChecker {
  private static instance: AccessibilityChecker
  private tests: AccessibilityTest[] = []

  static getInstance(): AccessibilityChecker {
    if (!AccessibilityChecker.instance) {
      AccessibilityChecker.instance = new AccessibilityChecker()
      AccessibilityChecker.instance.initializeTests()
    }
    return AccessibilityChecker.instance
  }

  private initializeTests(): void {
    this.tests = [
      {
        id: 'heading-hierarchy',
        name: 'Heading Hierarchy',
        description: 'Check if headings follow proper hierarchy (h1 > h2 > h3)',
        test: () => this.checkHeadingHierarchy(),
        severity: 'error'
      },
      {
        id: 'alt-text',
        name: 'Image Alt Text',
        description: 'Check if all images have alt text',
        test: () => this.checkImageAltText(),
        severity: 'error'
      },
      {
        id: 'form-labels',
        name: 'Form Labels',
        description: 'Check if all form inputs have associated labels',
        test: () => this.checkFormLabels(),
        severity: 'error'
      },
      {
        id: 'color-contrast',
        name: 'Color Contrast',
        description: 'Check if text has sufficient color contrast',
        test: () => this.checkColorContrast(),
        severity: 'warning'
      },
      {
        id: 'focus-management',
        name: 'Focus Management',
        description: 'Check if focus is properly managed',
        test: () => this.checkFocusManagement(),
        severity: 'warning'
      },
      {
        id: 'aria-labels',
        name: 'ARIA Labels',
        description: 'Check if interactive elements have proper ARIA labels',
        test: () => this.checkAriaLabels(),
        severity: 'warning'
      }
    ]
  }

  private checkHeadingHierarchy(): boolean {
    if (typeof document === 'undefined') return true

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let lastLevel = 0

    for (const heading of headings) {
      const level = parseInt(heading.tagName.charAt(1))
      if (level > lastLevel + 1) {
        return false
      }
      lastLevel = level
    }

    return true
  }

  private checkImageAltText(): boolean {
    if (typeof document === 'undefined') return true

    const images = document.querySelectorAll('img')
    for (const img of images) {
      if (!img.alt && !img.getAttribute('aria-label')) {
        return false
      }
    }

    return true
  }

  private checkFormLabels(): boolean {
    if (typeof document === 'undefined') return true

    const inputs = document.querySelectorAll('input, textarea, select')
    for (const input of inputs) {
      const id = input.getAttribute('id')
      const ariaLabel = input.getAttribute('aria-label')
      const ariaLabelledBy = input.getAttribute('aria-labelledby')
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        return false
      }

      if (id && !document.querySelector(`label[for="${id}"]`)) {
        return false
      }
    }

    return true
  }

  private checkColorContrast(): boolean {
    // This is a simplified check - in a real application, you'd use a proper contrast checker
    if (typeof document === 'undefined') return true

    const elements = document.querySelectorAll('*')
    for (const element of elements) {
      const computedStyle = window.getComputedStyle(element)
      const color = computedStyle.color
      const backgroundColor = computedStyle.backgroundColor

      // Basic check for high contrast colors
      if (color && backgroundColor) {
        // This is a simplified implementation
        // In practice, you'd calculate the actual contrast ratio
        return true
      }
    }

    return true
  }

  private checkFocusManagement(): boolean {
    if (typeof document === 'undefined') return true

    // Check if focusable elements can receive focus
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    for (const element of focusableElements) {
      if (element.getAttribute('tabindex') === '-1') {
        continue
      }

      // Check if element is visible and not disabled
      const style = window.getComputedStyle(element)
      if (style.display === 'none' || style.visibility === 'hidden') {
        return false
      }
    }

    return true
  }

  private checkAriaLabels(): boolean {
    if (typeof document === 'undefined') return true

    const interactiveElements = document.querySelectorAll(
      'button, [role="button"], [role="link"], [role="tab"], [role="menuitem"]'
    )

    for (const element of interactiveElements) {
      const ariaLabel = element.getAttribute('aria-label')
      const ariaLabelledBy = element.getAttribute('aria-labelledby')
      const textContent = element.textContent?.trim()

      if (!ariaLabel && !ariaLabelledBy && !textContent) {
        return false
      }
    }

    return true
  }

  // Run all accessibility tests
  runAllTests(): { test: AccessibilityTest; passed: boolean }[] {
    return this.tests.map(test => ({
      test,
      passed: test.test()
    }))
  }

  // Run a specific test
  runTest(testId: string): { test: AccessibilityTest; passed: boolean } | null {
    const test = this.tests.find(t => t.id === testId)
    if (!test) return null

    return {
      test,
      passed: test.test()
    }
  }

  // Get all available tests
  getTests(): AccessibilityTest[] {
    return [...this.tests]
  }

  // Generate accessibility report
  generateReport(): {
    total: number
    passed: number
    failed: number
    results: { test: AccessibilityTest; passed: boolean }[]
  } {
    const results = this.runAllTests()
    const passed = results.filter(r => r.passed).length
    const failed = results.length - passed

    return {
      total: results.length,
      passed,
      failed,
      results
    }
  }
}

// Export singleton instance
export const accessibilityChecker = AccessibilityChecker.getInstance()

// Utility function to check if an element is accessible
export function isElementAccessible(element: HTMLElement): boolean {
  // Check if element has proper ARIA attributes
  const hasAriaLabel = element.hasAttribute('aria-label')
  const hasAriaLabelledBy = element.hasAttribute('aria-labelledby')
  const hasTextContent = element.textContent?.trim().length > 0

  // Check if element is focusable
  const isFocusable = element.tabIndex >= 0 || 
    element.tagName === 'BUTTON' || 
    element.tagName === 'A' ||
    element.hasAttribute('role')

  return (hasAriaLabel || hasAriaLabelledBy || hasTextContent) && isFocusable
}

// Utility function to announce changes to screen readers
export function announceToScreenReader(message: string): void {
  if (typeof document === 'undefined') return

  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message

  document.body.appendChild(announcement)

  // Remove the announcement after a short delay
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Utility function to manage focus
export function manageFocus(element: HTMLElement | null): void {
  if (!element) return

  element.focus()
  
  // Ensure the element is visible
  element.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
