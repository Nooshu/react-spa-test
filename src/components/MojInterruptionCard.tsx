import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojInterruptionCardProps {
  title: string
  children: React.ReactNode
  actions?: Array<{
    text: string
    href?: string
    onClick?: () => void
    type?: 'primary' | 'secondary'
  }>
  className?: string
}

export const MojInterruptionCard: React.FC<MojInterruptionCardProps> = ({
  title,
  children,
  actions = [],
  className
}) => {
  const cardClasses = `moj-interruption-card ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={cardClasses}>
      <div className="moj-interruption-card__content">
        <h2 className="moj-interruption-card__title">{title}</h2>
        <div className="moj-interruption-card__body">
          {children}
        </div>
        
        {actions.length > 0 && (
          <div className="moj-interruption-card__actions">
            {actions.map((action, index) => (
              <div key={index} className="moj-interruption-card__action">
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
