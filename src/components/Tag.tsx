import React from 'react'
import { clsx } from 'clsx'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'grey' | 'green' | 'turquoise' | 'blue' | 'light-blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow'
  className?: string
}

export const Tag: React.FC<TagProps> = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  const variantClasses = {
    default: '',
    grey: 'govuk-tag--grey',
    green: 'govuk-tag--green',
    turquoise: 'govuk-tag--turquoise',
    blue: 'govuk-tag--blue',
    'light-blue': 'govuk-tag--light-blue',
    purple: 'govuk-tag--purple',
    pink: 'govuk-tag--pink',
    red: 'govuk-tag--red',
    orange: 'govuk-tag--orange',
    yellow: 'govuk-tag--yellow'
  }

  return (
    <strong className={clsx('govuk-tag', variantClasses[variant], className)}>
      {children}
    </strong>
  )
}
