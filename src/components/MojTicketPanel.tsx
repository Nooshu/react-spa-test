import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojTicketPanelProps {
  title: string
  children: React.ReactNode
  actions?: Array<{
    text: string
    href?: string
    onClick?: () => void
    type?: 'primary' | 'secondary' | 'warning' | 'destructive'
  }>
  className?: string
}

export const MojTicketPanel: React.FC<MojTicketPanelProps> = ({
  title,
  children,
  actions = [],
  className
}) => {
  const panelClasses = `moj-ticket-panel ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={panelClasses}>
      <div className="moj-ticket-panel__container">
        <div className="moj-ticket-panel__header">
          <h3 className="moj-ticket-panel__title">{title}</h3>
        </div>
        
        <div className="moj-ticket-panel__content">
          {children}
        </div>
        
        {actions.length > 0 && (
          <div className="moj-ticket-panel__actions">
            {actions.map((action, index) => (
              <div key={index} className="moj-ticket-panel__action">
                {action.href ? (
                  <a
                    href={action.href}
                    className={`govuk-button ${action.type === 'primary' ? 'govuk-button--primary' : action.type === 'warning' ? 'govuk-button--warning' : action.type === 'destructive' ? 'govuk-button--destructive' : 'govuk-button--secondary'}`}
                    onClick={action.onClick}
                  >
                    {action.text}
                  </a>
                ) : (
                  <button
                    className={`govuk-button ${action.type === 'primary' ? 'govuk-button--primary' : action.type === 'warning' ? 'govuk-button--warning' : action.type === 'destructive' ? 'govuk-button--destructive' : 'govuk-button--secondary'}`}
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
