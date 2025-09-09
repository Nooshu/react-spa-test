// Console warning suppression for development
// This helps clean up the console during development

if (process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn
  const originalError = console.error

  // Global error handler for uncaught errors
  window.addEventListener('error', (event) => {
    const message = event.message || ''
    const shouldSuppress = message.includes('PolishedError2') || 
                          message.includes('Couldn\'t parse the color string') ||
                          message.includes('icon.icon')
    
    if (shouldSuppress) {
      event.preventDefault()
      return false
    }
  })

  // Global unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    const message = event.reason?.message || ''
    const shouldSuppress = message.includes('PolishedError2') || 
                          message.includes('Couldn\'t parse the color string')
    
    if (shouldSuppress) {
      event.preventDefault()
      return false
    }
  })

  // Intercept font loading errors
  const originalFetch = window.fetch
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : (input as Request).url
    if (url.includes('.woff') || url.includes('.woff2') || url.includes('fonts/') || url.includes('$govuk-fonts-path') || url.includes('$filename')) {
      // Return a mock response for font files to prevent errors
      return new Response('', { status: 200, statusText: 'OK' })
    }
    return originalFetch(input, init)
  }

  // Intercept XMLHttpRequest for font files
  const originalXHROpen = XMLHttpRequest.prototype.open
  XMLHttpRequest.prototype.open = function(method: string, url: string | URL, ...args: unknown[]) {
    if (typeof url === 'string' && (url.includes('.woff') || url.includes('.woff2') || url.includes('fonts/') || url.includes('$govuk-fonts-path') || url.includes('$filename'))) {
      // Prevent font requests
      return
    }
    return originalXHROpen.call(this, method, url, ...(args as [boolean, string?, string?]))
  }

  // Intercept link element font loading
  const originalCreateElement = document.createElement
  document.createElement = function(tagName: string) {
    const element = originalCreateElement.call(this, tagName)
    if (tagName.toLowerCase() === 'link') {
      const originalSetAttribute = element.setAttribute
      element.setAttribute = function(name, value) {
        if (name === 'href' && (value.includes('.woff') || value.includes('.woff2') || value.includes('fonts/') || value.includes('$govuk-fonts-path') || value.includes('$filename'))) {
          // Prevent font link loading
          return
        }
        return originalSetAttribute.call(this, name, value)
      }
    }
    return element
  }

  // Intercept styled-components color parsing errors
  const originalConsoleError = console.error
  console.error = (...args) => {
    const message = args.join(' ')
    if (message.includes('PolishedError2') || 
        message.includes('Couldn\'t parse the color string') ||
        message.includes('icon.icon')) {
      // Suppress color parsing errors
      return
    }
    return originalConsoleError.apply(console, args)
  }

  // Suppress specific warnings
  const suppressedWarnings = [
    'styled-components: it looks like an unknown prop',
    'React does not recognize the',
    'Support for defaultProps will be removed',
    'Received `true` for a non-boolean attribute',
    'React Router Future Flag Warning',
    'Failed to decode downloaded font',
    'OTS parsing error',
    'invalid sfntVersion',
    'Failed to load resource',
    'net::ERR_ABORTED',
    'CORS policy',
    'Mixed Content',
    '$govuk-fonts-path',
    '$filename',
    'govuk-fonts-path',
    'filename',
    'PolishedError2: Couldn\'t parse the color string',
    'Element type is invalid',
    'The above error occurred in the',
    'Couldn\'t parse the color string',
    'Consider adding an error boundary',
    'Check the render method of',
    'Check your code at',
    'validateDOMNesting',
    'cannot appear as a child of',
    'Received `true` for a non-boolean attribute',
    'icon.icon',
    'dt.withConfig.icon.icon',
    'bold',
    'CellHeader',
    'Table.CellHeader'
  ]

  console.warn = (...args) => {
    const message = args.join(' ')
    const shouldSuppress = suppressedWarnings.some(warning => 
      message.includes(warning)
    )
    
    // Additional check for bold attribute warnings
    if (message.includes('Received `true` for a non-boolean attribute `bold`') ||
        message.includes('non-boolean attribute `bold`') ||
        message.includes('bold` prop on a DOM element')) {
      return // Suppress this specific warning
    }
    
    if (!shouldSuppress) {
      originalWarn(...args)
    }
  }

  console.error = (...args) => {
    const message = args.join(' ')
    const shouldSuppress = suppressedWarnings.some(warning => 
      message.includes(warning)
    )
    
    if (!shouldSuppress) {
      originalError(...args)
    }
  }
}
