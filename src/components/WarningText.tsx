import React from 'react'
import { clsx } from 'clsx'

interface WarningTextProps {
  children: React.ReactNode
  className?: string
}

export const WarningText: React.FC<WarningTextProps> = ({ children, className }) => {
  return (
    <div className={clsx('govuk-warning-text', className)}>
      <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">Warning</span>
        {children}
      </strong>
    </div>
  )
}
