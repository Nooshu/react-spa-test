import React from 'react'
import { clsx } from 'clsx'

interface ErrorMessageProps {
  children: React.ReactNode
  className?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  children, 
  className 
}) => {
  return (
    <span className={clsx('govuk-error-message', className)}>
      <span className="govuk-visually-hidden">Error:</span>
      {children}
    </span>
  )
}
