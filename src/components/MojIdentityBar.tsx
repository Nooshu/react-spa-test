import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojIdentityBarProps {
  title: string
  subtitle?: string
  actions?: Array<{
    text: string
    href?: string
    onClick?: () => void
    type?: 'primary' | 'secondary'
  }>
  className?: string
}

export const MojIdentityBar: React.FC<MojIdentityBarProps> = ({
  title,
  subtitle,
  actions = [],
  className
}) => {
  const barClasses = `moj-identity-bar ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={barClasses}>
      <div className="moj-identity-bar__content">
        <div className="moj-identity-bar__title">
          <h1 className="moj-identity-bar__title-text">{title}</h1>
          {subtitle && (
            <span className="moj-identity-bar__subtitle">{subtitle}</span>
          )}
        </div>
        
        {actions.length > 0 && (
          <div className="moj-identity-bar__actions">
            {actions.map((action, index) => (
              <div key={index} className="moj-identity-bar__action">
                {action.href ? (
                  <a
                    href={action.href}
                    className={`govuk-button ${action.type === 'primary' ? 'govuk-button--primary' : 'govuk-button--secondary'}`}
                    onClick={action.onClick}
                  >
                    {action.text}
                  </a>
                ) : (
                  <button
                    className={`govuk-button ${action.type === 'primary' ? 'govuk-button--primary' : 'govuk-button--secondary'}`}
                    onClick={action.onClick}
                  >
                    {action.text}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </MojComponentWrapper>
  )
}
