import React from 'react'
import { clsx } from 'clsx'

interface DetailsProps {
  summary: string
  children: React.ReactNode
  open?: boolean
  className?: string
}

export const Details: React.FC<DetailsProps> = ({
  summary,
  children,
  open = false,
  className
}) => {
  return (
    <details 
      className={clsx('govuk-details', className)} 
      data-module="govuk-details"
      open={open}
    >
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          {summary}
        </span>
      </summary>
      <div className="govuk-details__text">
        {children}
      </div>
    </details>
  )
}
