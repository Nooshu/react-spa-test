import React from 'react'
import { clsx } from 'clsx'

interface ErrorMessageProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  children, 
  className,
  id 
}) => {
  return (
    <span id={id} className={clsx('govuk-error-message', className)}>
      <span className="govuk-visually-hidden">Error:</span>
      {children}
    </span>
  )
}
