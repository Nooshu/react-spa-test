import React from 'react'
import { clsx } from 'clsx'

interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info'
  title?: string
  children: React.ReactNode
  className?: string
}

export const Alert: React.FC<AlertProps> = ({ 
  type, 
  title, 
  children, 
  className 
}) => {
  const typeClasses = {
    success: 'govuk-notification-banner--success',
    warning: 'govuk-notification-banner--warning',
    error: 'govuk-notification-banner--error',
    info: ''
  }

  const iconMap = {
    success: '✓',
    warning: '⚠',
    error: '✗',
    info: 'ℹ'
  }

  return (
    <div 
      className={clsx(
        'govuk-notification-banner',
        typeClasses[type],
        className
      )}
      role="alert"
      aria-labelledby="notification-banner-title"
      data-module="govuk-notification-banner"
    >
      <div className="govuk-notification-banner__header">
        <h2 className="govuk-notification-banner__title" id="notification-banner-title">
          {title || `${type.charAt(0).toUpperCase() + type.slice(1)}`}
        </h2>
      </div>
      <div className="govuk-notification-banner__content">
        <div className="govuk-notification-banner__heading">
          <span className="govuk-notification-banner__icon" aria-hidden="true">
            {iconMap[type]}
          </span>
          <span className="govuk-visually-hidden">{type}: </span>
          {children}
        </div>
      </div>
    </div>
  )
}
