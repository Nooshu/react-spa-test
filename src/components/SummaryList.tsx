import React from 'react'
import { clsx } from 'clsx'

interface SummaryListRow {
  key: string
  value: React.ReactNode
  actions?: {
    items: Array<{
      text: string
      href?: string
      to?: string
      visuallyHiddenText?: string
    }>
  }
}

interface SummaryListProps {
  rows: SummaryListRow[]
  className?: string
}

export const SummaryList: React.FC<SummaryListProps> = ({ rows, className }) => {
  return (
    <dl className={clsx('govuk-summary-list', className)}>
      {rows.map((row, index) => (
        <div key={index} className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            {row.key}
          </dt>
          <dd className="govuk-summary-list__value">
            {row.value}
          </dd>
          {row.actions && (
            <dd className="govuk-summary-list__actions">
              {row.actions.items.map((action, actionIndex) => (
                <span key={actionIndex}>
                  {action.href ? (
                    <a 
                      href={action.href} 
                      className="govuk-link"
                    >
                      {action.text}
                      {action.visuallyHiddenText && (
                        <span className="govuk-visually-hidden">
                          {' '}{action.visuallyHiddenText}
                        </span>
                      )}
                    </a>
                  ) : action.to ? (
                    <a 
                      href={action.to} 
                      className="govuk-link"
                    >
                      {action.text}
                      {action.visuallyHiddenText && (
                        <span className="govuk-visually-hidden">
                          {' '}{action.visuallyHiddenText}
                        </span>
                      )}
                    </a>
                  ) : (
                    <span>
                      {action.text}
                      {action.visuallyHiddenText && (
                        <span className="govuk-visually-hidden">
                          {' '}{action.visuallyHiddenText}
                        </span>
                      )}
                    </span>
                  )}
                  {actionIndex < (row.actions?.items.length || 0) - 1 && (
                    <span className="govuk-visually-hidden">, </span>
                  )}
                </span>
              ))}
            </dd>
          )}
        </div>
      ))}
    </dl>
  )
}
