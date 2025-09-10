import React from 'react'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  text?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    small: 'govuk-spinner--small',
    medium: '',
    large: 'govuk-spinner--large'
  }

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <div className="govuk-body" role="status" aria-live="polite">
          <div className={`govuk-spinner ${sizeClasses[size]}`} aria-hidden="true"></div>
          <span className="govuk-visually-hidden">{text}</span>
        </div>
      </div>
    </div>
  )
}
