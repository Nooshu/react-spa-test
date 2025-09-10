import React from 'react'
import { clsx } from 'clsx'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error'
  className?: string
}

export const Tag: React.FC<TagProps> = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  const variantClasses = {
    default: '',
    success: 'govuk-tag--success',
    warning: 'govuk-tag--warning',
    error: 'govuk-tag--error'
  }

  return (
    <strong className={clsx('govuk-tag', variantClasses[variant], className)}>
      {children}
    </strong>
  )
}
