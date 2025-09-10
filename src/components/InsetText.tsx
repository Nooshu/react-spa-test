import React from 'react'
import { clsx } from 'clsx'

interface InsetTextProps {
  children: React.ReactNode
  className?: string
}

export const InsetText: React.FC<InsetTextProps> = ({ children, className }) => {
  return (
    <div className={clsx('govuk-inset-text', className)}>
      {children}
    </div>
  )
}
