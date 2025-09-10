import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojPageHeaderActionsProps {
  actions: Array<{
    text: string
    href?: string
    onClick?: () => void
    type?: 'primary' | 'secondary' | 'warning' | 'destructive'
    disabled?: boolean
  }>
  className?: string
}

export const MojPageHeaderActions: React.FC<MojPageHeaderActionsProps> = ({
  actions,
  className
}) => {
  const actionsClasses = `moj-page-header-actions ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={actionsClasses}>
      <div className="moj-page-header-actions__container">
        {actions.map((action, index) => (
          <div key={index} className="moj-page-header-actions__action">
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
                disabled={action.disabled}
              >
                {action.text}
              </button>
            )}
          </div>
        ))}
      </div>
    </MojComponentWrapper>
  )
}
