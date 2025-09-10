import React from 'react'
import { clsx } from 'clsx'

interface PanelProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const Panel: React.FC<PanelProps> = ({ title, children, className }) => {
  return (
    <div className={clsx('govuk-panel govuk-panel--confirmation', className)}>
      <h1 className="govuk-panel__title">
        {title}
      </h1>
      <div className="govuk-panel__body">
        {children}
      </div>
    </div>
  )
}
