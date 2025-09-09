// Theme override to fix color parsing issues in GOV.UK React components
export const govukThemeOverride = {
  // Override problematic color values that cause Polished parsing errors
  colors: {
    // Use standard hex colors instead of CSS variables
    primary: '#0b0c0c',
    secondary: '#1d70b8',
    success: '#00703c',
    warning: '#f47738',
    error: '#d4351c',
    // Override any undefined or problematic color values
    undefined: '#0b0c0c',
    null: '#0b0c0c',
    '': '#0b0c0c'
  },
  // Override icon colors to prevent parsing errors
  icons: {
    color: '#0b0c0c',
    hoverColor: '#1d70b8'
  }
}

// Function to safely parse colors
export const safeColor = (color: any): string => {
  if (typeof color === 'string' && color.match(/^#[0-9A-Fa-f]{6}$/)) {
    return color
  }
  if (typeof color === 'string' && color.match(/^rgb\(/)) {
    return color
  }
  if (typeof color === 'string' && color.match(/^rgba\(/)) {
    return color
  }
  if (typeof color === 'string' && color.match(/^hsl\(/)) {
    return color
  }
  if (typeof color === 'string' && color.match(/^hsla\(/)) {
    return color
  }
  // Return default color for any invalid values
  return '#0b0c0c'
}
