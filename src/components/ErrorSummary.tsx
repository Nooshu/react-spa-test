import React from 'react'
import { clsx } from 'clsx'

interface ErrorSummaryItem {
  text: string
  href?: string
  to?: string
}

interface ErrorSummaryProps {
  title?: string
  description?: string
  errorList: ErrorSummaryItem[]
  className?: string
}

export const ErrorSummary: React.FC<ErrorSummaryProps> = ({
  title = 'There is a problem',
  description,
  errorList,
  className
}) => {
  return (
    <div 
      className={clsx('govuk-error-summary', className)} 
      aria-labelledby="error-summary-title"
      role="alert"
      tabIndex={-1}
      data-module="govuk-error-summary"
    >
      <h2 className="govuk-error-summary__title" id="error-summary-title">
        {title}
      </h2>
      {description && (
        <div className="govuk-error-summary__body">
          <p>{description}</p>
        </div>
      )}
      <ul className="govuk-list govuk-error-summary__list">
        {errorList.map((error, index) => (
          <li key={index}>
            {error.href ? (
              <a href={error.href} className="govuk-link">
                {error.text}
              </a>
            ) : error.to ? (
              <a href={error.to} className="govuk-link">
                {error.text}
              </a>
            ) : (
              <span>{error.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
