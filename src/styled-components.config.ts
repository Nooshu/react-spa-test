// Styled-components configuration to suppress development warnings

// Custom shouldForwardProp function to filter out unknown props
const shouldForwardProp = (prop: string) => {
  // List of props that should be filtered out
  const filteredProps = [
    'bgColor',
    'serviceUrl', 
    'serviceName',
    'items',
    'defaultOpen',
    'columnOneThird',
    'columnOneHalf', 
    'columnTwoThirds',
    'columnThreeQuarters',
    'columnFull',
    'columnOneQuarter',
    'setWidth',
    'grow',
    'bold'
  ]
  
  return !filteredProps.includes(prop)
}

export { shouldForwardProp }
